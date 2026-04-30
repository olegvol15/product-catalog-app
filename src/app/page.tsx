"use client";

import { CatalogHeader } from "@/components/catalog-header";
import { ProductGrid } from "@/components/product-grid";
import { useCatalogQuery } from "@/lib/catalog-query";

export default function Home() {
  const { data, error, isLoading } = useCatalogQuery();

  if (isLoading) {
    return (
      <main className="catalog-shell">
        <p className="catalog-status">Loading products...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="catalog-shell">
        <p className="catalog-status" role="alert">
          Product catalog is temporarily unavailable.
        </p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="catalog-shell">
        <p className="catalog-status">No catalog data available.</p>
      </main>
    );
  }

  return (
    <div className="catalog-page">
      <CatalogHeader logo={data.logo} />

      <main className="catalog-shell">
        <section className="catalog-intro" aria-labelledby="catalog-title">
          <p className="catalog-eyebrow">{data.products.length} products</p>
          <h1 id="catalog-title">{data.title}</h1>
          <p>
            Performance essentials selected for training, commuting, and time
            outside.
          </p>
        </section>

        <ProductGrid products={data.products} />
      </main>
    </div>
  );
}
