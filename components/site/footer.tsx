import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import { Logo } from "./logo";

const CATALOG_LINKS = CATEGORIES.slice(0, 8);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-ivory-100">
      <div
        className="absolute inset-0 opacity-[0.08] pattern-grid"
        aria-hidden
      />
      <div className="container-soft relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-300">
              Hospitality&#8209;grade furniture, amenities, and linens
              engineered in Clark Freeport Zone for hotels and resorts across
              the Philippines and beyond.
            </p>
            <div className="mt-7 space-y-3 text-sm text-ink-200">
              <a
                href="tel:+639950177666"
                className="flex items-center gap-2.5 transition-colors hover:text-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-400" aria-hidden />
                +63 995 017 7666
              </a>
              <a
                href="mailto:info@essenpia.com"
                className="flex items-center gap-2.5 transition-colors hover:text-gold-300"
              >
                <Mail className="h-4 w-4 text-gold-400" aria-hidden />
                info@essenpia.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
                  aria-hidden
                />
                <span>
                  Clark Freeport Zone
                  <br />
                  Pampanga, Philippines
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Catalog
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {CATALOG_LINKS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/shop/${c.slug}`}
                    className="text-ink-200 transition-colors hover:text-gold-300"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="font-semibold text-gold-300 transition-colors hover:text-gold-200"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-ink-200 transition-colors hover:text-gold-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about#values"
                  className="text-ink-200 transition-colors hover:text-gold-300"
                >
                  Values
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ink-200 transition-colors hover:text-gold-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-ink-200 transition-colors hover:text-gold-300"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
              Procurement
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-ink-200">
              OEM, bulk, and pre-opening packages for hotels, resorts,
              serviced residences, and F&amp;B operators.
            </p>
            <Link
              href="/quote"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-gold-300/60 bg-gold-500/10 px-5 py-2.5 text-sm font-semibold text-gold-200 transition-all hover:border-gold-300 hover:bg-gold-500/20 hover:text-gold-100"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-700/60 pt-7 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Essenpia Hospitality Supply. All
            rights reserved.
          </p>
          <p className="text-ink-500">
            Your hotel&apos;s success is our business.
          </p>
        </div>
      </div>
    </footer>
  );
}
