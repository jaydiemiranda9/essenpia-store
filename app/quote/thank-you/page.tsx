import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Quote Request Received",
  description: "Your quote request has been received. We'll be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="container-soft">
        <div className="mx-auto max-w-lg text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-300 bg-gold-50">
            <CheckCircle2 className="h-10 w-10 text-gold-600" aria-hidden />
          </div>
          <h1 className="heading-sub mt-8">Your request is on its way</h1>
          <p className="lead mt-4">
            We&apos;ve received your quote request and will come back to you within
            one business day with a scoped proposal.
          </p>
          <div className="mt-6 rounded-xl border border-gold-200 bg-gold-50 p-5 text-sm text-ink-700">
            <p>
              In the meantime, feel free to reach us directly at{" "}
              <a
                href="tel:+639950177666"
                className="font-semibold text-gold-700"
              >
                +63 995 017 7666
              </a>{" "}
              or{" "}
              <a
                href="mailto:info@essenpia.com"
                className="font-semibold text-gold-700"
              >
                info@essenpia.com
              </a>
              .
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              Continue exploring the catalog
            </Link>
            <Link href="/" className="btn-ghost">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
