import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://joinaerium.com'),
  title: "Aerium - Out with the old, in with the new",
  description: "Use your new favourite card to turn items you don't use into instant buying power.",
  keywords: ["fashion", "resale", "trading", "designer", "streetwear", "fintech", "card"],
  authors: [{ name: "Aerium" }],
  openGraph: {
    title: "Aerium - Out with the old, in with the new",
    description: "Use your new favourite card to turn items you don't use into instant buying power.",
    url: "https://joinaerium.com",
    siteName: "Aerium",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aerium - Out with the old, in with the new",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerium - Out with the old, in with the new",
    description: "Use your new favourite card to turn items you don't use into instant buying power.",
    images: ["/og-image.png"],
    creator: "@aerium",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better link previews */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="Aerium - Out with the old, in with the new" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
