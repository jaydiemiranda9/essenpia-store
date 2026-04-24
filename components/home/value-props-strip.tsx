import { Award, PackageCheck, Palette, ShieldCheck } from "lucide-react";

const PROPS = [
  {
    icon: Palette,
    title: "OEM & custom branding",
    body: "Embroidered linens, printed amenities, bespoke packaging — specified and sampled in weeks, not months.",
  },
  {
    icon: PackageCheck,
    title: "Pre-opening packages",
    body: "Full property fit-outs coordinated to your opening date, consolidated on a single PO.",
  },
  {
    icon: Award,
    title: "Hospitality-grade build",
    body: "Hardwood frames, long-staple cotton, commercial-rated hardware. Engineered for 24/7 guest use.",
  },
  {
    icon: ShieldCheck,
    title: "Korean-led quality",
    body: "Founded by an ex-Boracay GM. Every SKU is chosen as if it were going into his own lobby.",
  },
];

export function ValuePropsStrip() {
  return (
    <section className="relative border-b border-ink-100 bg-white">
      <div className="container-soft py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROPS.map((p) => (
            <div key={p.title} className="flex flex-col">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold-200 bg-gold-50 text-gold-700">
                <p.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
