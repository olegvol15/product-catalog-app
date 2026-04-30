import Image from "next/image";
import { useState } from "react";

import { formatPrice } from "@/lib/formatters";
import type { CatalogProduct } from "@/types/catalog";

interface ProductCardProps {
  onAddToCart: (productId: string) => Promise<void>;
  product: CatalogProduct;
}

export function ProductCard({ onAddToCart, product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [imageSrc, setImageSrc] = useState(product.image.url);
  const promotion =
    product.promotion && product.discountedPrice !== null
      ? {
          ...product.promotion,
          discountedPrice: product.discountedPrice,
        }
      : null;

  function handleImageError() {
    setImageSrc(createProductPlaceholder(product.title));
  }

  async function handleAddToCart() {
    setIsAdding(true);

    try {
      await onAddToCart(product.id);
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <article className="product-card">
      <div className="product-card__image-frame">
        <Image
          src={imageSrc}
          alt={product.image.altText}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="product-card__image"
          onError={handleImageError}
        />
      </div>

      <div className="product-card__body">
        <div className="product-card__brand">
          <Image
            src={product.brandLogo}
            alt=""
            width={80}
            height={30}
            className="product-card__brand-logo"
          />
          <span>{product.brandName}</span>
        </div>

        <h2>{product.title}</h2>
        <p>{product.description}</p>

        <div className="product-card__footer">
          <div className="product-card__prices">
            {promotion ? (
              <>
                <span className="product-card__price product-card__price--discount">
                  {formatPrice(promotion.discountedPrice)}
                </span>
                <span className="product-card__price product-card__price--original">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="product-card__price">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {promotion ? (
            <span className="product-card__promotion">
              {promotion.name} - {promotion.percentage}%
            </span>
          ) : null}
        </div>

        <button
          className="product-card__button"
          disabled={isAdding}
          type="button"
          onClick={handleAddToCart}
        >
          {isAdding ? "Adding..." : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

function createProductPlaceholder(title: string): string {
  const label = encodeURIComponent(title);

  return `https://dummyimage.com/600x450/e8e2d7/625d55&text=${label}`;
}
