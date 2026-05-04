import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import type { CatalogImage } from "@/types/catalog";

interface CatalogHeaderProps {
  cartCount: number;
  logo: CatalogImage;
}

export function CatalogHeader({ cartCount, logo }: CatalogHeaderProps) {
  return (
    <header className="catalog-header">
      <Image
        src={logo.url}
        alt={logo.altText}
        width={160}
        height={60}
        preload
        className="catalog-header__logo"
      />

      <div className="catalog-header__cart" aria-label={`${cartCount} items in cart`}>
        <ShoppingCart />
        <span className="catalog-header__badge">{cartCount}</span>
      </div>
    </header>
  );
}
