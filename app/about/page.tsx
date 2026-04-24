import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ValuesGrid } from "@/components/about/values-grid";
import { QuoteCta } from "@/components/home/quote-cta";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Essenpia was founded by Dean K., an ex-Boracay hotel GM who built the hospitality supplier he never had — based in Clark Freeport Zone, Philippines.",
  openGraph: {
    title: "Our Story · Essenpia Hospitality",
    description:
      "Built by a hotelier, for hoteliers. Learn how Essenpia came to be.",
    images: [{ url: "/og/about.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section border-b border-ink-100 bg-ink-900 text-ivory-50">
        <div
          className="absolute inset-0 opacity-[0.06] pattern-dots pointer-events-none"
          aria-hidden
        />
        <div className="container-soft relative">
          <span className="eyebrow-dark">About Essenpia</span>
          <h1 className="heading-display mt-6 text-ivory-50">
            Built by a hotelier,{" "}
            <span className="italic text-gold-300">for hoteliers</span>
          </h1>
          <p className="lead mt-6 max-w-2xl text-ink-200">
            Essenpia exists because the hospitality supply chain in the
            Philippines was fragmented, slow, and rarely understood the guest
            experience that procurement decisions ultimately produce.
          </p>
        </div>
      </section>

      <section className="section border-b border-ink-100 bg-ivory-50">
        <div className="container-soft">
          <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-ink-700">
            <div>
              <h2 className="font-serif text-3xl text-ink-900">The problem</h2>
              <p className="mt-4">
                When Dean K. was managing a boutique resort in Boracay, outfitting
                a room meant sourcing chairs from a furniture importer in Manila,
                amenity kits from a Bangkok wholesaler, linens from a local
                supplier who couldn&apos;t guarantee commercial-grade thread counts,
                and tableware from wherever had stock. Each PO had a different
                lead time. Each supplier had a different minimum order. The result
                was always a compromise.
              </p>
              <p className="mt-4">
                He knew the Korean and Japanese hospitality markets — where
                consolidated B2B suppliers serve an entire property from a single
                catalog, with quality standards built around actual guest feedback,
                not retail price points. That model didn&apos;t exist in the
                Philippines.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-ink-900">The solution</h2>
              <p className="mt-4">
                In 2019, Dean relocated to Clark Freeport Zone — a logistics hub
                with access to Asian manufacturing networks and direct freight to
                Metro Manila and the Visayas — and built Essenpia. The mandate was
                simple: stock everything a hotel room needs, hold it locally, and
                price it for project-scale orders, not retail walk-ins.
              </p>
              <p className="mt-4">
                Today Essenpia carries furniture, bathroom and bedroom amenities,
                linens, tableware, carts, appliances, eco-friendly alternatives, and
                hotel slippers — all evaluated through the lens of someone who has
                put these products in front of paying guests and knows what comes
                back to the front desk as a complaint.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-ink-900">
                What we offer
              </h2>
              <p className="mt-4">
                There are no price tags on this site. That&apos;s intentional. Every
                quote we issue is scoped to your project — your room count, your
                required customization, your opening timeline. We don&apos;t have a
                shopping cart because hospitality procurement doesn&apos;t work like
                consumer retail. It works like a partnership.
              </p>
              <p className="mt-4">
                If you&apos;re outfitting a property — whether it&apos;s eight rooms
                or 800 — fill in the quote form or call us directly. We&apos;ll come
                back with a proposal, not an automated price list.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/quote" className="btn-accent">
              Request a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <ValuesGrid />
      <QuoteCta />
    </>
  );
}
