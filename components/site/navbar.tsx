"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-ink-100/70 bg-ivory-50/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-soft flex h-20 items-center justify-between gap-6">
        <Logo variant="dark" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <Link
              href="/shop"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/shop")
                  ? "text-gold-700"
                  : "text-ink-700 hover:text-ink-900",
              )}
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              Shop
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  menuOpen && "rotate-180",
                )}
                aria-hidden
              />
            </Link>
            {menuOpen && (
              <div className="absolute left-1/2 top-full w-[min(880px,90vw)] -translate-x-1/2 pt-3">
                <div className="animate-fade-in overflow-hidden rounded-2xl border border-ink-100 bg-white/98 p-6 shadow-2xl shadow-ink-900/15 backdrop-blur-xl">
                  <div className="mb-4 flex items-center justify-between border-b border-ink-100 pb-4">
                    <div>
                      <div className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold-700">
                        Catalog
                      </div>
                      <div className="font-serif text-lg text-ink-900">
                        Explore every category
                      </div>
                    </div>
                    <Link
                      href="/shop"
                      className="btn-link"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-3">
                    {CATEGORIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/shop/${c.slug}`}
                        className="group flex flex-col rounded-lg px-2 py-1.5 transition-colors hover:bg-ivory-100"
                      >
                        <span className="text-sm font-semibold text-ink-900 group-hover:text-gold-700">
                          {c.name}
                        </span>
                        <span className="text-xs text-ink-500">
                          {c.productCount} products
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-gold-700"
                  : "text-ink-700 hover:text-ink-900",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+639950177666"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition-colors hover:text-gold-700"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="sr-only">Call </span>+63 995 017 7666
          </a>
          <Link href="/quote" className="btn-accent px-5 py-2.5 text-xs">
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white/80 text-ink-800 backdrop-blur lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink-950/60 backdrop-blur"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(380px,88vw)] animate-slide-in-right flex-col bg-ivory-50 shadow-2xl">
            <div className="flex items-center justify-between border-b border-ink-100 px-6 py-5">
              <Logo />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-800"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <nav
              className="flex-1 overflow-y-auto px-6 py-6"
              aria-label="Mobile"
            >
              <div className="mb-6">
                <div className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold-700">
                  Catalog
                </div>
                <ul className="space-y-1">
                  {CATEGORIES.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/shop/${c.slug}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-ink-800 transition-colors hover:bg-white hover:text-gold-700"
                      >
                        <span>{c.name}</span>
                        <span className="text-xs text-ink-400">
                          {c.productCount}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-ink-100 pt-6">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold text-ink-900 transition-colors hover:bg-white hover:text-gold-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="border-t border-ink-100 px-6 py-5">
              <a
                href="tel:+639950177666"
                className="mb-3 flex items-center gap-2 text-sm font-medium text-ink-700"
              >
                <Phone className="h-4 w-4" aria-hidden />
                +63 995 017 7666
              </a>
              <Link href="/quote" className="btn-accent w-full">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
