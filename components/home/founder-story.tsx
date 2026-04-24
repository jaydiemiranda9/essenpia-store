import Link from "next/link";
import { Quote } from "lucide-react";

export function FounderStory() {
  return (
    <section className="section bg-ivory-50">
      <div className="container-soft">
        <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative flex flex-col justify-center bg-ink-900 p-10 lg:p-14">
              <div
                className="absolute inset-0 opacity-[0.07] pattern-dots"
                aria-hidden
              />
              <div className="relative">
                <Quote
                  className="h-10 w-10 text-gold-400 opacity-60"
                  aria-hidden
                />
                <blockquote className="mt-6 font-serif text-2xl leading-snug text-ivory-50 lg:text-3xl">
                  &ldquo;A great room isn&apos;t remembered for its price point
                  — it&apos;s remembered for how every detail made the guest
                  feel.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gold-400/30" aria-hidden />
                  <div className="text-right">
                    <div className="font-serif text-lg font-semibold text-ivory-50">
                      Dean K.
                    </div>
                    <div className="text-sm text-gold-300">
                      Founder & CEO · Essenpia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="eyebrow">Our Story</span>
              <h2 className="heading-sub mt-5">
                Built by a hotelier, for hoteliers
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-600">
                <p>
                  Dean K. spent years as General Manager of a boutique resort in
                  Boracay — sourcing furniture from Seoul, amenity kits from
                  Bangkok, linens from wherever he could find contract-grade
                  quality at a sensible MOQ.
                </p>
                <p>
                  In 2019 he moved to Clark Freeport Zone in Pampanga and built
                  Essenpia to be the supplier he never had: a single point of
                  contact for every category in a hotel room, warehoused locally,
                  priced for projects of any scale.
                </p>
                <p>
                  Today Essenpia ships furniture, amenities, linens, tableware,
                  and operational supplies to hotels and resorts across the
                  Philippines — from boutique BnBs to full-service resort
                  properties.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">
                  Read the full story
                </Link>
                <Link href="/quote" className="btn-ghost">
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
