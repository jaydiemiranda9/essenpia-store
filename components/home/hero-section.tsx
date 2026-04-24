import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden hero-gradient text-ivory-50">
      <div
        className="absolute inset-0 opacity-[0.06] pattern-grid"
        aria-hidden
      />
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <Image
          src="https://www.essenpia.com/wp-content/uploads/2024/09/HFC0014-1.jpg"
          alt="Essenpia hospitality chair in a boutique hotel lobby"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 0px"
          className="object-cover mask-fade-bottom"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-900/60 to-transparent"
          aria-hidden
        />
      </div>

      <div className="container-soft relative py-28 sm:py-36 lg:py-44">
        <div className="max-w-2xl">
          <div className="eyebrow-dark animate-fade-in">
            <Sparkles className="h-3 w-3" aria-hidden />
            Clark Freeport Zone · Philippines
          </div>
          <h1
            className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-ivory-50 sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Your hotel&apos;s success is{" "}
            <span className="italic text-gold-300">our business</span>.
          </h1>
          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            From the velvet-soft hanger to the lobby&apos;s signature chair —
            Essenpia supplies the details that turn rooms into residences.
            Hospitality-grade furniture, amenities, linens, and tableware,
            priced per project.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <Link href="/quote" className="btn-accent">
              Request a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/shop" className="btn-ghost-dark">
              Explore Catalog
            </Link>
          </div>

          <dl
            className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-ivory-50/15 pt-8 animate-fade-up"
            style={{ animationDelay: "380ms" }}
          >
            {[
              { k: "190+", v: "SKUs in catalog" },
              { k: "11", v: "Category verticals" },
              { k: "OEM", v: "Custom branding" },
            ].map((stat) => (
              <div key={stat.v}>
                <dt className="font-serif text-3xl text-gold-300">{stat.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-300">
                  {stat.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
