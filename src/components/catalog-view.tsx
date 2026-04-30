"use client";

import { useState } from "react";

import { addProductToCart } from "@/lib/cart-api";
import type { CatalogData } from "@/types/catalog";

import { CatalogHeader } from "./catalog-header";
import { ProductGrid } from "./product-grid";

interface CatalogViewProps {
  catalog: CatalogData;
}

export function CatalogView({ catalog }: CatalogViewProps) {
  const [cartCount, setCartCount] = useState(0);

  async function handleAddToCart(productId: string) {
    await addProductToCart(productId);
    setCartCount((currentCount) => currentCount + 1);
  }

  return (
    <div className="catalog-page">
      <CatalogHeader cartCount={cartCount} logo={catalog.logo} />

      <main className="catalog-shell">
        <section className="catalog-intro" aria-labelledby="catalog-title">
          <p className="catalog-eyebrow">{catalog.products.length} products</p>
          <h1 id="catalog-title">{catalog.title}</h1>
          <p>
            Performance essentials selected for training, commuting, and time
            outside.
          </p>
        </section>

        <ProductGrid
          onAddToCart={handleAddToCart}
          products={catalog.products}
        />
      </main>
    </div>
  );
}
