'use client';

import { useState, useEffect } from 'react';
import SpinningCards from './spinningCards';
import CardStrip from './cards/CardStrip';
import RandomCard from './cards/RandomCard';

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
      
    </div>
  );
}