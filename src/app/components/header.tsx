"use client"

import Image from 'next/image';
import Button from './button';
import Link from 'next/link';

export default function Header() {
  const scrollToEmail = () => {
    // Try multiple selectors to find the email input field
    const emailInput = document.querySelector('input[placeholder*="email"]') || 
                      document.querySelector('input[placeholder*="Enter your email"]') ||
                      document.querySelector('input[type="email"]');
    
    if (emailInput) {
      // Scroll to the input field
      emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Focus the input field after a short delay to ensure scrolling is complete
      setTimeout(() => {
        (emailInput as HTMLInputElement).focus();
      }, 500);
      
      console.log('Scrolled to email section and focused input');
    } else {
      console.log('Email input not found');
      // Fallback: scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white border-b border-black border-1 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-12 sm:h-16">
          {/* Logo and brand name */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* <Image src="/brand/logo.png" alt="Aerium" width={90} height={30} className="w-16 sm:w-20 md:w-auto h-auto" /> */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
                AERIUM
              </h1>
            </div>
          </Link>

          {/* Navigation links and button */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6">
              <button 
                onClick={() => scrollToSection('process')}
                className="text-black font-medium uppercase tracking-wide hover:text-gray-700 transition-colors relative group text-xs sm:text-sm"
              >
                OUR PROCESS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-400"></span>
              </button>
              <button 
                onClick={() => scrollToSection('items')}
                className="text-black font-medium uppercase tracking-wide hover:text-gray-700 transition-colors relative group text-xs sm:text-sm"
              >
                OUR CURRENCY
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-400"></span>
              </button>
            </nav>
            
            <Button 
              label="REQUEST ACCESS" 
              className="bg-aether-primary hover:bg-aether-primary/80 text-xs sm:text-sm px-3 sm:px-4 py-1"
              onClick={scrollToEmail}
            />
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
