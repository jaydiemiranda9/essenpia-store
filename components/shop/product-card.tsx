import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  const href = `/shop/${product.categorySlug}/${product.slug}`;
  return (
    <Link href={href} className="card-product group" aria-label={product.name}>
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory-100">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold-700">
          {product.idealFor[0]}
        </p>
        <h3 className="mt-2 font-serif text-lg leading-tight text-ink-900">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-500">
          {product.description}
        </p>
        <div className="mt-auto pt-5">
          <span className="btn-primary w-full py-2.5 text-xs">
            Get a Free Quote
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
