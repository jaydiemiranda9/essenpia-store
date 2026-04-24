import Link from "next/link";
import { getRelatedProducts } from "@/lib/products";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";

type Props = { product: Product };

export function RelatedProducts({ product }: Props) {
  const related = getRelatedProducts(product, 4);
  if (related.length === 0) return null;
  return (
    <section className="section border-t border-ink-100 bg-ivory-50">
      <div className="container-soft">
        <div className="flex items-end justify-between gap-4">
          <h2 className="heading-sub">More from this category</h2>
          <Link
            href={`/shop/${product.categorySlug}`}
            className="btn-link shrink-0"
          >
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
