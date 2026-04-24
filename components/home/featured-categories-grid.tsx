import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { CategoryCard } from "@/components/shop/category-card";

const FEATURED_SLUGS = [
  "hospitality-furniture",
  "bathroom-amenities",
  "linens",
  "hotel-slippers",
  "tableware",
  "carts-and-trolleys",
];

export function FeaturedCategoriesGrid() {
  const featured = FEATURED_SLUGS.map((s) =>
    CATEGORIES.find((c) => c.slug === s),
  ).filter(Boolean) as typeof CATEGORIES;

  return (
    <section className="section bg-ivory-50">
      <div className="container-soft">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Catalog</span>
            <h2 className="heading-section mt-4">
              Every corner of the guest experience
            </h2>
          </div>
          <Link href="/shop" className="btn-link shrink-0">
            View all 11 categories →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} priority={i < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
