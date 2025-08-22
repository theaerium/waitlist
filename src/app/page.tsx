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
  const [activeSection, setActiveSection] = useState("waitlist");

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection("waitlist");
  };

  return (
    <div className="font-sans background-container">
      {/* Logo positioned above the container */}
      <div className="logo-above-container">
        <Image 
          src="/logo_black.png" 
          alt="Logo" 
          width={logoWidth} 
          height={logoHeight}
        />
      </div>

      {/* Navigation menu above the container */}
      <div className="nav-above-container">
        <div 
          className={`nav-item ${activeSection === "waitlist" ? "active" : ""}`} 
          onClick={scrollToTop}
        >
          Join our waitlist
        </div>
        <div 
          className={`nav-item ${activeSection === "our-process" ? "active" : ""}`} 
          onClick={() => scrollToSection('our-process')}
        >
          Our process
        </div>
        <div 
          className={`nav-item ${activeSection === "items-we-look-for" ? "active" : ""}`} 
          onClick={() => scrollToSection('items-we-look-for')}
        >
          Items we look for
        </div>
      </div>
      
      <div className="main-container">
        {/* Floating background shapes contained within main rectangle */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
        <div className="floating-shape shape-6"></div>
        <div className="floating-shape shape-7"></div>
        <div className="floating-shape shape-8"></div>
        <div className="floating-shape shape-9"></div>
        <div className="floating-shape shape-10"></div>
        <div className="floating-shape shape-11"></div>
        <div className="floating-shape shape-12"></div>
        <div className="floating-shape shape-13"></div>
        <div className="floating-shape shape-14"></div>
        <div className="floating-shape shape-15"></div>
        <div className="floating-shape shape-16"></div>
        <div className="floating-shape shape-17"></div>
        <div className="floating-shape shape-18"></div>
        
        <div className="content-overlay">
          <div className="flex flex-col lg:flex-row items-center gap-6 max-w-6xl mx-auto">
        {/* Left side - Text content */}
        <div className="flex flex-col gap-10 lg:w-1/2 items-center lg:items-start h-full justify-center lg:-ml-8">
          {/* Main heading with offset positioning */}
          <div className="w-full">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              <span className="pr-3">OUT WITH THE</span>
              <span className="inline-block align-baseline relative">
                <span className="text-white/70 line-through decoration-white/60 decoration-4">OLD</span>
              </span>
            </h1>
            <h2 className="mt-3 text-5xl lg:text-6xl font-extrabold text-white tracking-tight pl-8 leading-tight">
              <span className="pr-3">IN WITH THE</span>
              <span className="inline-block align-baseline relative">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)]">NEW</span>
              </span>
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-xl text-white/90 text-center max-w-2xl leading-relaxed">
            Use your new <span className="font-semibold bg-white/15 backdrop-blur-sm px-3 py-1 rounded-md border border-white/25">favourite card</span> to turn items you don't use into <span className="font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-md border border-white/30">instant buying power</span>
          </p>

          {/* Email + CTA */}
          <div className="flex flex-col gap-4 items-center w-full max-w-lg mx-auto">
            <EmailBox placeholder="Enter your email" value={email} onChange={setEmail} />
            <Button 
              label={isLoading ? "Requesting..." : "Request access to the Aerium card"} 
              onClick={handleJoinWaitlist} 
            />
            {status && status !== "success" && status !== "existing" && (
              <div className={`text-sm ${
                status.includes("already joined") 
                  ? "text-white" 
                  : "text-red-300"
              }`}>
                {status}
              </div>
            )}
            {referralLink && (
              <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg w-full">
                <p className="text-sm font-medium text-white mb-2">
                  {isExistingUser 
                    ? "Welcome back! Here's your referral link:" 
                    : "Successfully joined! Here's your referral link:"}
                </p>
                {isExistingUser && numReferrals > 0 && (
                  <p className="text-xs text-white/80 mb-2">
                    ✨ You&apos;ve referred {numReferrals} {numReferrals === 1 ? 'person' : 'people'} so far!
                  </p>
                )}
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    value={referralLink} 
                    readOnly 
                    className="flex-1 px-3 py-2 text-sm border border-white/20 rounded bg-white/5 backdrop-blur-sm text-white"
                  />
                  <button 
                    onClick={copyReferralLink}
                    className="px-3 py-2 bg-white/20 backdrop-blur-md text-white rounded border border-white/30 hover:bg-white/30 transition-all duration-150 text-sm font-medium"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-xs text-white/70 mt-2">
                  Share this link to move up the waitlist! Top sharers will get early access.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right side - App mockups */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10">
          <div className="flex gap-4 items-center lg:mt-0 -mr-20">
            <Image 
              src="/Aerium_v2.png" 
              alt="Aerium App Interface" 
              width={280}
              height={560} 
              className="max-w-full h-auto"
            />
            <Image 
              src="/apple_wallet.png" 
              alt="Apple Wallet Integration" 
              width={280}
              height={560} 
              className="max-w-full h-auto"
            />
          </div>
        </div>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div id="our-process" className="info-section">
        <h2>Our simple process</h2>
        <div className="content-grid">
          <div className="info-card">
            <h3>1. Sign up for Aerium</h3>
            <p>Download the Aerium app and create an account. We'll issue you a virtual Aerium card.</p>
          </div>
          <div className="info-card">
            <h3>2. Upload your items</h3>
            <p>Upload your items and we'll assign a market value to them. We'll load your Aerium card with the value of your items.</p>
          </div>
          <div className="info-card">
            <h3>3. Shop with Aerium</h3>
            <p>Use your Aerium card to make any purchase, we'll pay the vendor, and initiate the selling of your items.</p>
          </div>
          <div className="info-card">
            <h3>4. We Handle the Rest</h3>
            <p>If they don't sell, that's our risk, not yours. We'll coordinate the shipping of your item and take a flat percentage fee of the transaction.</p>
          </div>
        </div>
      </div>

      {/* Items we look for section */}
      <div id="items-we-look-for" className="info-section">
        <h2>Items we look for</h2>
        <p className="text-lg text-white/90 text-center max-w-4xl mx-auto mb-8">
          Currently, we're focused on women's fashion items. Every item is authenticated and quality-checked during shipping.
        </p>
        <div className="content-grid">
          <div className="info-card">
            <h3>Footwear</h3>
            <p>Sneakers, shoes, heels, and other footwear (inclduding cowboy boots).</p>
          </div>
          <div className="info-card">
            <h3>Clothing</h3>
            <p>Premium, designer, streetwear, and performance apparel across women’s and unisex sizing.</p>
          </div>
          <div className="info-card">
            <h3>Handbags</h3>
            <p>Handbags and small leather items (purses, wallets, etc.).</p>
          </div>
          <div className="info-card">
            <h3>Accessories</h3>
            <p>Watches, fine jewelry, and accessories (belts, sunglasses, etc.).</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20">
          <p className="text-center text-white/80 text-lg">
            <span className="font-semibold text-white">In the future:</span> We're working on expanding to other more apparel items, electronics, gaming, collectibles, and more categories. Join Aerium to be the first to know when we add new item types!
          </p>
        </div>
      </div>
    </div>
  );
}
