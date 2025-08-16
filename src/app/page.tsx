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

  // Check for referral ID in URL on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
      setReferralId(ref);
    }
  }, []);

  const handleJoinWaitlist = async () => {
    if (!email.trim()) {
      setStatus("Please enter an email address");
      return;
    }

    setIsLoading(true);
    setStatus(null);
    
    try {
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
    <div className="font-sans min-h-screen p-8 sm:p-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto">
        {/* Left side - Text content */}
        <div className="flex flex-col gap-8 lg:w-1/2 items-center lg:items-start">
          <div className="flex w-full justify-center lg:justify-start">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={logoWidth} 
              height={logoHeight} 
              className="mb-8"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
            Buy now, pay{" "}
            <span className="bg-aether-primary px-2 pb-1 rounded" style={{ background: 'linear-gradient(to top, #ccff33 40%, transparent 50%)' }}>never</span>
          </h1>
          <p className="text-lg text-gray-700 text-center lg:text-left max-w-md">
            Shop without spending your own cash by turning your unused items into instant buying power and purchase new things immediately. <strong>It&apos;s like getting everything for free.</strong>
          </p>
          <p className="text-md text-gray-500 text-center lg:text-left max-w-md">
            10 signups win $50. More shares = more chances!
          </p>
          {referralId && (
            <div className="text-sm text-black bg-aether-primary px-3 py-2 rounded-lg">
              🎉 You were invited by a friend! Sign up to get your own referral link.
            </div>
          )}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <EmailBox placeholder="Enter your email, we'll launch soon!" value={email} onChange={setEmail} />
            <Button 
              label={isLoading ? "Joining..." : "Join the waitlist"} 
              onClick={handleJoinWaitlist} 
            />
            {status && (
              <div className={`text-sm ${
                status === "success" 
                  ? "text-green-600" 
                  : status.includes("already joined") 
                    ? "text-black" 
                    : "text-red-600"
              }`}>
                {status === "success" ? "" : status}
              </div>
            )}
            {referralLink && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                <p className="text-sm font-medium text-gray-700 mb-2">Successfully joined! Here&apos;s your referral link:</p>
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
                  Share this link with friends to increase your chances of winning $50!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right side - iPhone mockup */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start lg:mt-24">
          <Image 
            src="/iphone_mock.png" 
            alt="iPhone App Mockup" 
            width={400} 
            height={800} 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
