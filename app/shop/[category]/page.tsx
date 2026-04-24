import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { CATEGORIES } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { ProductCard } from "@/components/shop/product-card";
import { SubCategoryFilter } from "@/components/shop/sub-category-filter";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sub?: string }>;
};

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category: slug } = await params;
  const { sub } = await searchParams;

  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  const allProducts = getProductsByCategory(slug as typeof cat.slug);
  const products = sub
    ? allProducts.filter((p) => p.subCategorySlug === sub)
    : allProducts;

  return (
    <>
      <section className="border-b border-ink-100 bg-white py-14">
        <div className="container-soft">
          <Breadcrumb
            items={[
              { label: "Shop", href: "/shop" },
              { label: cat.name },
            ]}
          />
          <h1 className="heading-display mt-5">{cat.name}</h1>
          <p className="lead mt-4 max-w-2xl">{cat.description}</p>
          <p className="mt-2 text-sm text-ink-400">
            {cat.productCount} products · All prices on request
          </p>
        </div>
      </section>

      {cat.subCategories && cat.subCategories.length > 0 && (
        <div className="sticky top-20 z-20 border-b border-ink-100 bg-white/90 py-4 backdrop-blur">
          <div className="container-soft">
            <Suspense fallback={null}>
              <SubCategoryFilter subCategories={cat.subCategories} />
            </Suspense>
          </div>
        </div>
      )}

      <section className="section bg-ivory-50">
        <div className="container-soft">
          {products.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-lg text-ink-500">
                No products found for this filter.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
