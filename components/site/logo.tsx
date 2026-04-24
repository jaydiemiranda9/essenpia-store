import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const textColor = variant === "light" ? "text-ivory-50" : "text-ink-900";
  const accentColor = variant === "light" ? "text-gold-300" : "text-gold-600";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-baseline gap-2 font-serif text-2xl tracking-tight",
        textColor,
        className,
      )}
      aria-label="Essenpia — Hotel & Resort Supplier"
    >
      <span className="font-semibold">Essenpia</span>
      <span
        className={cn(
          "text-[0.65rem] font-medium uppercase tracking-[0.28em]",
          accentColor,
        )}
      >
        Hospitality
      </span>
    </Link>
  );
}
