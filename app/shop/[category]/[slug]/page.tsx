import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Tag } from "lucide-react";
import Script from "next/script";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/lib/categories";
import { Breadcrumb } from "@/components/site/breadcrumb";
import { RelatedProducts } from "@/components/shop/related-products";
import { SITE_URL } from "@/lib/utils";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const cat = getCategoryBySlug(product.categorySlug);
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.imageUrl }],
    },
    other: {
      "product:category": cat?.name ?? "",
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.categorySlug !== category) notFound();

  const cat = getCategoryBySlug(product.categorySlug);
  const quoteHref = `/quote?product=${product.slug}&category=${product.categorySlug}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    brand: { "@type": "Brand", name: "Essenpia" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PHP",
      description: "Price available on request — contact us for a free quote.",
      seller: {
        "@type": "Organization",
        name: "Essenpia Hospitality Supply",
        url: SITE_URL,
      },
    },
  };

  return (
    <>
      <Script
        id={`product-jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="container-soft py-8">
        <Breadcrumb
          items={[
            { label: "Shop", href: "/shop" },
            { label: cat?.name ?? category, href: `/shop/${category}` },
            { label: product.name },
          ]}
        />
      </div>

      <section className="container-soft pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink-100 bg-ivory-100">
            <Image
              src={product.imageUrl}
              alt={product.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            {cat && (
              <Link
                href={`/shop/${cat.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-700 transition-colors hover:text-gold-800"
              >
                <Tag className="h-3 w-3" aria-hidden />
                {cat.name}
              </Link>
            )}
            <h1 className="heading-sub mt-3">{product.name}</h1>
            <p className="lead mt-4">{product.description}</p>

            <div className="mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                Key Features
              </h2>
              <ul className="mt-4 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                      aria-hidden
                    />
                    <span className="text-sm text-ink-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                Ideal For
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.idealFor.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink-200 bg-ivory-100 px-3 py-1 text-xs font-medium text-ink-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-10">
              <div className="rounded-xl border border-gold-200 bg-gold-50 p-5">
                <p className="text-sm font-semibold text-ink-900">
                  Pricing available on request
                </p>
                <p className="mt-1 text-xs text-ink-600">
                  We quote per project — volume, customization, and OEM
                  branding all factor in. Tell us about your property and
                  we&apos;ll come back within 24 hours.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link href={quoteHref} className="btn-accent flex-1">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href="tel:+639950177666"
                    className="btn-ghost flex-1 text-sm"
                  >
                    Call us now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}
