import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { ValuePropsStrip } from "@/components/home/value-props-strip";
import { FeaturedCategoriesGrid } from "@/components/home/featured-categories-grid";
import { ShowcaseProducts } from "@/components/home/showcase-products";
import { FounderStory } from "@/components/home/founder-story";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { QuoteCta } from "@/components/home/quote-cta";

export const metadata: Metadata = {
  title: "Essenpia — Hotel & Resort Supplier | Clark, Philippines",
  description:
    "B2B hospitality supplier based in Clark Freeport Zone. Furniture, amenities, linens, tableware, and operational supplies for hotels and resorts across the Philippines.",
  openGraph: {
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropsStrip />
      <FeaturedCategoriesGrid />
      <ShowcaseProducts />
      <FounderStory />
      <TestimonialSection />
      <QuoteCta />
    </>
  );
}
