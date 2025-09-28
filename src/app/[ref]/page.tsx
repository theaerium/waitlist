import type { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    ref: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ref } = await params;
  
  return {
    title: "Aerium | Shop with your closet",
    description: "Turn your unused items into instant money. It's like getting everything for free.",
    keywords: ["trading", "buying", "selling", "cash", "items", "marketplace"],
    authors: [{ name: "Aerium" }],
    openGraph: {
      title: "Aerium | Shop with your closet",
      description: "Turn your unused items into instant money. It's like getting everything for free.",
      url: `https://joinaerium.com/${ref}`,
      siteName: "Aerium",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Aerium | Shop with your closet",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Aerium | Shop with your closet",
      description: "Turn your unused items into instant buying power. It's like getting everything for free.",
      images: ["/og-image.png"],
      creator: "@aerium",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ReferralPage({ params }: Props) {
  const { ref } = await params;
  redirect(`/waitlist?ref=${ref}`);
}
