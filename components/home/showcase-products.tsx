import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/shop/product-card";

export function ShowcaseProducts() {
  const products = getFeaturedProducts().slice(0, 8);
  return (
    <section className="section border-b border-ink-100 bg-white">
      <div className="container-soft">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Featured</span>
            <h2 className="heading-section mt-4">Editors&apos; selection</h2>
            <p className="lead mt-3 max-w-lg">
              Bestsellers and design standouts — each priced per your project
              scope and volume.
            </p>
          </div>
          <Link href="/shop" className="btn-link shrink-0">
            Browse full catalog →
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
