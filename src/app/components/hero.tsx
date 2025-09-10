'use client';

import { useState, useEffect } from 'react';
import SpinningCards from './spinningCards';
import CardStrip from './cards/CardStrip';

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
    <div className="px-4 sm:px-6 lg:px-8 overflow-hidden relative h-screen">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto max-h-[600px]">
        {/* Main heading and subheading */}
        <div className="text-center mb-8 pt-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Your new favourite way to spend
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Deposit items you no longer want for money you can feel good about spending.
        </p>
        {/* Email input */}
        <div className="space-y-4 max-w-3xl mx-auto mt-12">
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
            </div>

        {/* Cards section */}
            <div
                style={{
                perspective: `100000px`,
                transformStyle: 'preserve-3d',
                }}
                className="relative h-[200px]"
            >
                <CardStrip />
            </div>
        </div>
      </div>
    </div>
  );
}