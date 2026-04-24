"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import type { SubCategory } from "@/lib/types";

type Props = {
  subCategories: SubCategory[];
};

export function SubCategoryFilter({ subCategories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sub") ?? "all";

  function handleSelect(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("sub");
    } else {
      params.set("sub", slug);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by sub-category">
      <button
        type="button"
        onClick={() => handleSelect("all")}
        className={cn(
          "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
          active === "all"
            ? "border-gold-400 bg-gold-50 text-gold-800"
            : "border-ink-200 bg-white text-ink-700 hover:border-gold-300 hover:text-ink-900",
        )}
        aria-pressed={active === "all"}
      >
        All
      </button>
      {subCategories.map((sub) => (
        <button
          key={sub.slug}
          type="button"
          onClick={() => handleSelect(sub.slug)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
            active === sub.slug
              ? "border-gold-400 bg-gold-50 text-gold-800"
              : "border-ink-200 bg-white text-ink-700 hover:border-gold-300 hover:text-ink-900",
          )}
          aria-pressed={active === sub.slug}
        >
          {sub.name}
        </button>
      ))}
    </div>
  );
}
