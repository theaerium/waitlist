
'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
            <div className="bg-aether-primary w-full h-96 mb-4 text-white font-bold text-4xl flex items-center justify-center">
                FEEL GOOD ABOUT EVERY PURCHASE.
            </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                {/* <Image
                  src="/brand/logo.png"
                  alt="Aerium Logo"
                  width={90}
                  height={30}
                  className="w-auto h-auto"
                /> */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
                  AERIUM
                </h1>
              </div>
              <p className="text-gray-600 text-sm mb-4 max-w-md">
                Guilt free spending.
              </p>
              <div className="flex space-x-4">
              {/* TODO: Add social media linkss */}
                <a href="https://x.com/joinaerium" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">X</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/aerium" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/joinaerium" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {/* <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    About Us
                  </a>
                </li> */}
                {/* <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Careers
                  </a>
                </li> */}
                <li>
                  <a href="mailto:contact@joinaerium.com" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/condition-eligibility" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Condition & Eligibility Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/photo-guidelines" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Photo Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/anti-money-laundering" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Anti-Money Laundering Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-500 text-sm">
                2025 Senchi Technologies Inc. (dba Aerium). All rights reserved.
              </p>
              <div className="flex space-x-6">
                {/* <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Accessibility
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Sitemap
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
