import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { CategoryCard } from "@/components/shop/category-card";

export const metadata: Metadata = {
  title: "Shop All Categories",
  description:
    "Browse 11 categories of hospitality supply — furniture, amenities, linens, tableware, carts, and more. Request a free quote on any product.",
  openGraph: { images: [{ url: "/og/shop.jpg", width: 1200, height: 630 }] },
};

export default function ShopPage() {
  const totalProducts = CATEGORIES.reduce((n, c) => n + c.productCount, 0);

  return (
    <>
      <section className="border-b border-ink-100 bg-white py-16">
        <div className="container-soft">
          <span className="eyebrow">Full Catalog</span>
          <h1 className="heading-display mt-5">
            Hospitality supply,{" "}
            <span className="italic text-gold-700">all in one place</span>
          </h1>
          <p className="lead mt-5 max-w-2xl">
            {CATEGORIES.length} categories · {totalProducts}+ SKUs ·
            Clark Freeport Zone. Every item quoted per your project — no
            retail pricing.
          </p>
        </div>
      </section>

      <section className="section bg-ivory-50">
        <div className="container-soft">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                priority={i < 4}
              />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-gold-200 bg-white p-8 text-center shadow-sm">
            <h2 className="font-serif text-2xl text-ink-900">
              Can&apos;t find what you need?
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              Our catalog represents a curated range. If you have a custom
              requirement, reach out — we source and produce to specification.
            </p>
            <Link href="/quote" className="btn-accent mt-6">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
