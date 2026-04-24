import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Essenpia. Call, email, or visit us at Clark Freeport Zone, Pampanga — we respond to all B2B inquiries within 24 hours.",
};

const CARDS = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+63 995 017 7666"],
    action: { label: "Call us", href: "tel:+639950177666" },
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@essenpia.com"],
    action: { label: "Send an email", href: "mailto:info@essenpia.com" },
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["Clark Freeport Zone", "Pampanga, Philippines"],
    action: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink-100 bg-white py-16">
        <div className="container-soft">
          <span className="eyebrow">Contact</span>
          <h1 className="heading-display mt-5">
            Let&apos;s talk about your project
          </h1>
          <p className="lead mt-5 max-w-xl">
            We respond to all B2B inquiries within 24 hours. For a formal
            quote, use the{" "}
            <Link href="/quote" className="text-gold-700 underline underline-offset-2">
              quote request form
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section bg-ivory-50">
        <div className="container-soft">
          <div className="grid gap-6 sm:grid-cols-3">
            {CARDS.map((c) => (
              <div key={c.title} className="card-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold-200 bg-gold-50 text-gold-700">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-serif text-xl text-ink-900">
                  {c.title}
                </h3>
                <div className="mt-2 space-y-0.5">
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-ink-600">
                      {l}
                    </p>
                  ))}
                </div>
                {c.action && (
                  <a
                    href={c.action.href}
                    className="btn-link mt-4"
                  >
                    {c.action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-ink-100 bg-white p-10 shadow-sm">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl text-ink-900">
                Ready to start a quote?
              </h2>
              <p className="lead mt-3">
                Fill in your property details, the categories you need, and your
                rough timeline. We&apos;ll scope a proposal and get back to you
                within one business day.
              </p>
              <Link href="/quote" className="btn-accent mt-8">
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
