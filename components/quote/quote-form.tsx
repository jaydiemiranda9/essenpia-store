"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import { getProductBySlug } from "@/lib/products";
import { cn } from "@/lib/utils";

const QUANTITY_OPTIONS = [
  { value: "1-20", label: "1 – 20 units" },
  { value: "21-100", label: "21 – 100 units" },
  { value: "101-500", label: "101 – 500 units" },
  { value: "500+", label: "500+ units" },
];

const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-2-months", label: "1 – 2 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "planning", label: "Still planning" },
];

export function QuoteForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const productSlug = searchParams.get("product") ?? "";
  const categorySlug = searchParams.get("category") ?? "";

  const prefilledProduct = productSlug
    ? (getProductBySlug(productSlug)?.name ?? "")
    : "";
  const prefilledCategory = categorySlug || "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    startTransition(async () => {
      try {
        const res = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!res.ok) {
          setError(json.error ?? "Something went wrong. Please try again.");
          return;
        }
        router.push("/quote/thank-you");
      } catch {
        setError("Network error — please check your connection and try again.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="hp_company_website"
        defaultValue=""
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-9999px] opacity-0"
        autoComplete="off"
      />

      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="label-field">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Maria Santos"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="company" className="label-field">
            Company / Property <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Grand Palace Hotel"
            className="input-field"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label-field">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="maria@grandpalace.ph"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label-field">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+63 9XX XXX XXXX"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="label-field">
          Your role{" "}
          <span className="text-xs font-normal text-ink-400">(optional)</span>
        </label>
        <input
          id="role"
          name="role"
          type="text"
          autoComplete="organization-title"
          placeholder="GM, Procurement Manager, Owner…"
          className="input-field"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="categoryInterest" className="label-field">
            Category of interest <span className="text-red-500">*</span>
          </label>
          <select
            id="categoryInterest"
            name="categoryInterest"
            required
            defaultValue={prefilledCategory}
            className="input-field"
          >
            <option value="">Select a category…</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
            <option value="multiple">Multiple categories</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantityRange" className="label-field">
            Quantity range <span className="text-red-500">*</span>
          </label>
          <select
            id="quantityRange"
            name="quantityRange"
            required
            defaultValue=""
            className="input-field"
          >
            <option value="">Select a range…</option>
            {QUANTITY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="productInterest" className="label-field">
          Product(s) of interest{" "}
          <span className="text-xs font-normal text-ink-400">(optional)</span>
        </label>
        <input
          id="productInterest"
          name="productInterest"
          type="text"
          defaultValue={prefilledProduct}
          placeholder="e.g. Executive Chair HFC0014, Bath Towel 600gsm…"
          className="input-field"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="label-field">
          Project timeline <span className="text-red-500">*</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          required
          defaultValue=""
          className="input-field"
        >
          <option value="">Select timeline…</option>
          {TIMELINE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label-field">
          Tell us more{" "}
          <span className="text-xs font-normal text-ink-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Property name and location, number of rooms, specific requirements, opening date…"
          className={cn("input-field resize-none")}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          value="true"
          className="mt-1 h-4 w-4 rounded border-ink-300 text-gold-600 focus:ring-gold-400"
        />
        <label htmlFor="consent" className="text-sm text-ink-600">
          I agree to be contacted by Essenpia regarding this inquiry. We
          don&apos;t share your data with third parties.{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-accent w-full disabled:pointer-events-none disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send Quote Request"
        )}
      </button>

      <p className="text-center text-xs text-ink-400">
        We respond to all inquiries within one business day.
      </p>
    </form>
  );
}
