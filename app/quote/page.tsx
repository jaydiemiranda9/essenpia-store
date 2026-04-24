import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote/quote-form";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Tell us about your hotel or resort project and we'll come back with a scoped quote within 24 hours. No obligation.",
};

export default function QuotePage() {
  return (
    <section className="section">
      <div className="container-soft">
        <div className="mx-auto max-w-2xl">
          <span className="eyebrow">Free Quote</span>
          <h1 className="heading-display mt-5">
            Let&apos;s scope your project
          </h1>
          <p className="lead mt-4">
            Fill in what you need and we&apos;ll come back with a proposal
            within one business day. No obligation, no hard sell.
          </p>

          <div className="mt-10 rounded-2xl border border-ink-100 bg-white p-8 shadow-sm sm:p-10">
            <Suspense fallback={null}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
