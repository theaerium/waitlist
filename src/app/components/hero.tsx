'use client';

import { useState, useEffect } from 'react';
import SpinningCards from './spinningCards';

export default function Hero() {
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
        setTimeout(() => setStatus("success"), 2000);
      } catch (error) {
        console.error("Failed to copy link:", error);
        setStatus("Failed to copy link. Please copy manually.");
      }
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-64px)] py-8 lg:py-0">
          {/* Left side - Cards */}
          <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
            <SpinningCards />
          </div>

          {/* Right side - Text and email input */}
          <div className="flex-1 max-w-lg lg:pl-8 w-full">
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight text-center lg:text-left">
                Out with the old,<br />
                in with the new
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                Use your the Aerium Visa card to turn items you don&apos;t use into{' '}
                <strong className="text-aether-primary text-sm sm:text-base md:text-md">instant buying power.</strong>
              </p>
            </div>

            {/* Email input */}
            <div className="space-y-4 mb-6 sm:mb-8">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email to request access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isLoading) {
                      handleJoinWaitlist();
                    }
                  }}
                  className="w-full px-0 py-3 text-base sm:text-lg border-b-2 border-gray-300 focus:border-aether-primary focus:outline-none bg-transparent placeholder-gray-400"
                />
                <button 
                  onClick={handleJoinWaitlist}
                  disabled={isLoading}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 hover:bg-aether-primary transition-colors disabled:opacity-50"
                >
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </button>
              </div>
              
              {/* Status messages */}
              {status && status !== "success" && status !== "existing" && (
                <div className={`text-xs sm:text-sm ${
                  status.includes("already joined") 
                    ? "text-black" 
                    : "text-red-600"
                }`}>
                  {status}
                </div>
              )}

              {/* Referral link section */}
              {referralLink && (
                <div className="mt-4 p-3 sm:p-4 bg-gray-50 border">
                  <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    {isExistingUser 
                      ? "Welcome back! Here's your referral link:" 
                      : "Successfully joined! Here's your referral link:"
                    }
                  </p>
                  {isExistingUser && numReferrals > 0 && (
                    <p className="text-xs text-gray-600 mb-2">
                      You&apos;ve referred {numReferrals} {numReferrals === 1 ? 'person' : 'people'} so far!
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <input 
                      type="text" 
                      value={referralLink} 
                      readOnly 
                      className="flex-1 px-3 py-2 text-xs sm:text-sm border bg-white w-full"
                    />
                    <button 
                      onClick={copyReferralLink}
                      className="px-3 py-2 bg-aether-primary text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-150 text-xs sm:text-sm font-medium w-full sm:w-auto"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Share this link to get early access.
                  </p>
                </div>
              )}

              {/* Referral notification */}
              {referralId && (
                <div className="text-xs sm:text-sm text-black bg-aether-primary px-3 py-2 text-center lg:text-left">
                  You were invited by a friend! Sign up to get your own referral link.
                </div>
              )}
            </div>

            {/* Bottom text aligned with the text block */}
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
                Coming Fall 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}