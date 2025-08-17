import type { Metadata } from "next";
import Home from "../page";

interface Props {
  params: {
    ref: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "Aerium - Buy now, pay never",
    description: "Shop without spending your own cash by turning your unused items into instant buying power. It's like getting everything for free.",
    keywords: ["trading", "buying", "selling", "cash", "items", "marketplace"],
    authors: [{ name: "Aerium" }],
    openGraph: {
      title: "Aerium - Buy now, pay never",
      description: "Shop without spending your own cash by turning your unused items into instant buying power. It's like getting everything for free.",
      url: `https://joinaerium.com/${params.ref}`,
      siteName: "Aerium",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Aerium - Buy now, pay never",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Aerium - Buy now, pay never",
      description: "Shop without spending your own cash by turning your unused items into instant buying power. It's like getting everything for free.",
      images: ["/og-image.png"],
      creator: "@aerium",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ReferralPage({ params }: Props) {
  return <Home />;
}
