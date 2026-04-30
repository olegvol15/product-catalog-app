import Image from "next/image";

import type { CatalogImage } from "@/types/catalog";

interface CatalogHeaderProps {
  logo: CatalogImage;
}

export function CatalogHeader({ logo }: CatalogHeaderProps) {
  return (
    <header className="catalog-header">
      <Image
        src={logo.url}
        alt={logo.altText}
        width={160}
        height={60}
        priority
        className="catalog-header__logo"
      />

      <div className="catalog-header__cart" aria-label="Cart">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <span className="catalog-header__badge">0</span>
      </div>
    </header>
  );
}
