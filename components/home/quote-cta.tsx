import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function QuoteCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900">
      <div
        className="absolute inset-0 opacity-[0.07] pattern-grid"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="container-soft relative py-24 text-center sm:py-32">
        <span className="eyebrow-dark">Zero friction</span>
        <h2 className="heading-section mt-5 text-ivory-50">
          Ready to supply your next project?
        </h2>
        <p className="lead mx-auto mt-5 max-w-xl text-ink-200">
          Tell us about your property, the categories you need, and your
          timeline. We&apos;ll come back with a scoped quote — usually within 24
          hours.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/quote" className="btn-accent">
            Request a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="tel:+639950177666"
            className="btn-ghost-dark"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call us now
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-ink-400">
          <a
            href="mailto:info@essenpia.com"
            className="flex items-center gap-2 transition-colors hover:text-gold-300"
          >
            <Mail className="h-4 w-4" aria-hidden />
            info@essenpia.com
          </a>
          <a
            href="tel:+639950177666"
            className="flex items-center gap-2 transition-colors hover:text-gold-300"
          >
            <Phone className="h-4 w-4" aria-hidden />
            +63 995 017 7666
          </a>
          <span>Clark Freeport Zone, Pampanga</span>
        </div>
      </div>
    </section>
  );
}
