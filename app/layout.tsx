import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { SITE_URL } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Essenpia — Hotel & Resort Supplier | Clark, Philippines",
    template: "%s · Essenpia Hospitality",
  },
  description:
    "B2B hospitality supplier of furniture, amenities, linens, and tableware for hotels and resorts across the Philippines. Request a free quote — OEM, bulk, and pre-opening packages.",
  keywords: [
    "hotel supplier philippines",
    "hospitality furniture",
    "hotel amenities",
    "hotel linens",
    "bathroom amenity kits",
    "clark pampanga supplier",
    "resort supply",
    "OEM hospitality",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Essenpia Hospitality",
    title: "Essenpia — Hotel & Resort Supplier",
    description:
      "Considered hospitality supply from Clark Freeport Zone. Furniture, amenities, linens, tableware — quoted per project, built for the guest experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essenpia — Hotel & Resort Supplier",
    description:
      "Considered hospitality supply from Clark Freeport Zone. Request a free quote.",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Essenpia Hospitality Supply",
  url: SITE_URL,
  logo: `${SITE_URL}/og/home.jpg`,
  description:
    "B2B hotel and resort supplier based in Clark Freeport Zone, Pampanga — hospitality furniture, amenities, linens, and tableware.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Clark Freeport Zone",
    addressRegion: "Pampanga",
    addressCountry: "PH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+63-995-017-7666",
    contactType: "sales",
    email: "info@essenpia.com",
    availableLanguage: ["English", "Filipino", "Korean"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ivory-50 font-sans text-ink-800 antialiased">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
