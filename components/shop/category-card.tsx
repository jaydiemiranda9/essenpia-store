import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/types";

type Props = {
  category: Category;
  priority?: boolean;
  size?: "default" | "large";
};

export function CategoryCard({
  category,
  priority = false,
  size = "default",
}: Props) {
  const aspect = size === "large" ? "aspect-[4/5]" : "aspect-[3/4]";
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="card-category group"
      aria-label={`${category.name} — ${category.productCount} products`}
    >
      <div className={`relative ${aspect} overflow-hidden`}>
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/30 to-transparent"
          aria-hidden
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 text-ivory-50 lg:p-7">
        <div className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold-300">
          {category.productCount} products
        </div>
        <div className="mt-2 flex items-end justify-between gap-3">
          <div>
            <h3 className="font-serif text-2xl leading-tight text-ivory-50">
              {category.name}
            </h3>
            <p className="mt-1 text-sm text-ink-200">{category.tagline}</p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory-50/30 bg-white/10 text-ivory-50 backdrop-blur transition-all group-hover:border-gold-300 group-hover:bg-gold-500/30">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
