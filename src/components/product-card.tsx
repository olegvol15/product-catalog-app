import Image from "next/image";

import { formatPrice } from "@/lib/formatters";
import type { CatalogProduct } from "@/types/catalog";

interface ProductCardProps {
  product: CatalogProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const promotion =
    product.promotion && product.discountedPrice !== null
      ? {
          ...product.promotion,
          discountedPrice: product.discountedPrice,
        }
      : null;

  return (
    <article className="product-card">
      <div className="product-card__image-frame">
        <Image
          src={product.image.url}
          alt={product.image.altText}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className="product-card__image"
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
      </div>
    </article>
  );
}
