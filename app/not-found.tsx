import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-soft">
        <div className="mx-auto max-w-lg text-center">
          <div className="font-serif text-8xl font-semibold text-gold-300">
            404
          </div>
          <h1 className="heading-sub mt-4">Page not found</h1>
          <p className="lead mt-3">
            That page doesn&apos;t exist or may have moved. Try browsing the
            catalog or heading back home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              Browse the catalog
            </Link>
            <Link href="/" className="btn-ghost">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
