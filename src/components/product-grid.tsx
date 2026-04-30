import type { CatalogProduct } from "@/types/catalog";

import { ProductCard } from "./product-card";

interface ProductGridProps {
  products: CatalogProduct[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="catalog-status">No products available.</p>;
  }

  return (
    <section className="product-grid" aria-label="Products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
