"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import EmailBox from "./components/emailbox";
import Button from "./components/button";

export default function Home() {
  const logoWidth = 100;
  const logoHeight = logoWidth * (1233 / 3038);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [referralLink, setReferralLink] = useState<string | null>(null);
  const [referralId, setReferralId] = useState<string | null>(null);
  const [numReferrals, setNumReferrals] = useState<number>(0);
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  // Check for referral ID in URL on page load
  useEffect(() => {
    const pathSegments = window.location.pathname.split('/');
    const refFromPath = pathSegments[pathSegments.length - 1];
    
    // Check if the last segment looks like a referral ID (8 characters, alphanumeric)
    if (refFromPath && refFromPath.length === 8 && /^[a-z0-9]+$/.test(refFromPath)) {
      setReferralId(refFromPath);
    }
  }, []);

  // Fetch waitlist count on page load
  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const res = await fetch("/api/waitlist-count");
        if (res.ok) {
          const data = await res.json();
          setWaitlistCount(data.count);
        }
      } catch (error) {
        console.error("Error fetching waitlist count:", error);
      }
    };

    fetchWaitlistCount();
  }, []);

  const checkExistingUser = async (email: string) => {
    try {
      const res = await fetch("/api/get-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      
      if (res.ok) {
        const data = await res.json();
        setReferralLink(data.userData.referralLink);
        setNumReferrals(data.userData.numReferrals);
        setIsExistingUser(true);
        setStatus("existing");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error checking existing user:", error);
      return false;
    }
  };

  const handleJoinWaitlist = async () => {
    if (!email.trim()) {
      setStatus("Please enter an email address");
      return;
    }

    setIsLoading(true);
    setStatus(null);
    
    try {
      // First check if user already exists
      const isExisting = await checkExistingUser(email);
      if (isExisting) {
        setIsLoading(false);
        return;
      }

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim(),
          referralId: referralId 
        }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setReferralLink(data.referralLink);
        setNumReferrals(0);
        setIsExistingUser(false);
        // Clear referral ID from URL without page reload
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
        setReferralId(null);
      } else {
        if (res.status === 409) {
          setStatus("You've already joined the waitlist! We're working hard to launch ASAP!");
        } else {
          setStatus(data.error || "Failed to join waitlist");
        }
      }
    } catch (error) {
      console.error("Error joining waitlist:", error);
      setStatus("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyReferralLink = async () => {
    if (referralLink) {
      try {
        await navigator.clipboard.writeText(referralLink);
        // setStatus("Referral link copied to clipboard!");
        setTimeout(() => setStatus("success"), 2000);
      } catch (error) {
        console.error("Failed to copy link:", error);
        setStatus("Failed to copy link. Please copy manually.");
      }
    }
  };

  return (
    <div className="font-sans min-h-screen p-4 sm:p-12">
      <div className="flex flex-col lg:flex-row items-center gap-6 max-w-7xl mx-auto">
        {/* Left side - Text content */}
        <div className="flex flex-col gap-6 lg:w-1/2 items-center lg:items-start">
          <div className="flex w-full justify-center lg:justify-start">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={logoWidth} 
              height={logoHeight} 
              className="mb-4"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
            Buy now, pay{" "}
            <span className="bg-aether-primary px-2 pb-1 rounded" style={{ background: 'linear-gradient(to top, #ccff33 40%, transparent 50%)' }}>never</span>
          </h1>
          <p className="text-lg text-gray-700 text-center lg:text-left max-w-md">
            Turn items you don&apos;t use into instant buying power. <strong>It&apos;s like getting everything for free.</strong>
          </p>
          <p className="text-md text-gray-500 text-center lg:text-left max-w-md">
          When you make a purchase with the Aerium card, we instantly pay you out at the market price sourced across multiple platforms. We take those items and sell them on your behalf. If they don&apos;t sell that&apos;s on us. To cover our costs, we take a flat 5% fee on all transactions.
          </p>
          <p className="text-md text-gray-500 text-center lg:text-left max-w-md italic">
            More shares = more chances to be one of the first people to gain access!
          </p>
          {waitlistCount !== null && (
            <p className="text-sm text-gray-400 text-center lg:text-left font-bold">
              Join {waitlistCount.toLocaleString()} others already waiting!
            </p>
          )}
          {referralId && (
            <div className="text-sm text-black bg-aether-primary px-3 py-2 rounded-lg">
              🎉 You were invited by a friend! Sign up to get your own referral link.
            </div>
          )}
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <EmailBox placeholder="Enter your email, we'll launch soon!" value={email} onChange={setEmail} />
            <Button 
              label={isLoading ? "Joining..." : "Join the waitlist"} 
              onClick={handleJoinWaitlist} 
            />
            {status && status !== "success" && status !== "existing" && (
              <div className={`text-sm ${
                status.includes("already joined") 
                  ? "text-black" 
                  : "text-red-600"
              }`}>
                {status}
              </div>
            )}
            {referralLink && (
              <div className="mt-3 p-4 bg-gray-50 rounded-lg border">
                                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {isExistingUser 
                      ? "Welcome back! Here's your referral link:" 
                      : "Successfully joined! Here's your referral link:"
                    }
                  </p>
                {isExistingUser && numReferrals > 0 && (
                  <p className="text-xs text-gray-600 mb-2">
                    ✨ You&apos;ve referred {numReferrals} {numReferrals === 1 ? 'person' : 'people'} so far!
                  </p>
                )}
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    value={referralLink} 
                    readOnly 
                    className="flex-1 px-3 py-2 text-sm border rounded bg-white"
                  />
                  <button 
                    onClick={copyReferralLink}
                    className="px-3 py-2 bg-aether-primary text-black rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-150 text-sm font-medium"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Share this link to move up the waitlist! Top sharers will get early access.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right side - iPhone mockup */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start lg:mt-32">
          <Image 
            src="/iphone_mock.png" 
            alt="iPhone App Mockup" 
            width={400 * 1.2}
            height={800 * 1.2} 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
