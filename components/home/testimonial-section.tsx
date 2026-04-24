import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "We sourced every piece of furniture for our 48-room property through Essenpia. The quality matched what we'd seen in mid-range Seoul hotels — at a fraction of the import cost.",
    name: "Rafael M.",
    role: "GM, Boutique Resort · El Nido, Palawan",
    stars: 5,
  },
  {
    quote:
      "Pre-opening packages made onboarding our housekeeping team effortless. One PO, one delivery, everything labelled per room type. Dean's operational background shows.",
    name: "Christine O.",
    role: "Director of Operations · Serviced Residence · BGC",
    stars: 5,
  },
  {
    quote:
      "We needed OEM amenity kits with our resort's branding on a 200-pack minimum. Most suppliers wanted 1,000. Essenpia delivered samples in two weeks and full order in six.",
    name: "Paolo R.",
    role: "Procurement Manager · 5-Star Beach Resort · Boracay",
    stars: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="section bg-white">
      <div className="container-soft">
        <div className="text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="heading-section mt-4">
            Trusted by properties across the Philippines
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card-soft">
              <div className="flex gap-0.5" aria-label={`${t.stars} stars`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-400 text-gold-400"
                    aria-hidden
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-ink-100 pt-5">
                <div className="font-semibold text-ink-900">{t.name}</div>
                <div className="mt-0.5 text-xs text-ink-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
