const VALUES = [
  {
    label: "Guest-first design",
    body: "Every product is evaluated as if a real guest were using it — not a procurement spreadsheet.",
  },
  {
    label: "Operational honesty",
    body: "We won&apos;t oversell a MOQ or lead time. If we can&apos;t meet your project deadline, we say so.",
  },
  {
    label: "Quality without ceremony",
    body: "Hardwood, long-staple cotton, commercial hardware. The standard is functional luxury, not marketing language.",
  },
  {
    label: "Philippine hospitality",
    body: "Built in Clark, sourced responsibly, rooted in the warmth that makes Filipino service world-class.",
  },
  {
    label: "Craft over volume",
    body: "We&apos;d rather do fewer projects exceptionally well than spread thin across every RFP.",
  },
  {
    label: "Long-term partnership",
    body: "Our best clients are on their second and third property. We grow with you.",
  },
];

export function ValuesGrid() {
  return (
    <section id="values" className="section border-t border-ink-100 bg-white">
      <div className="container-soft">
        <span className="eyebrow">Our Values</span>
        <h2 className="heading-section mt-5">What guides every decision</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <div key={v.label} className="card-soft">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 font-serif text-base font-semibold text-gold-300">
                {i + 1}
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink-900">
                {v.label}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-ink-600"
                dangerouslySetInnerHTML={{ __html: v.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
