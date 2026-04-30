import type {
  CatalogData,
  CatalogImage,
  CatalogProduct,
  CatalogSourceData,
  CatalogSourceImage,
  CatalogSourceProduct,
} from "@/types/catalog";

export function normalizeCatalogData(data: CatalogSourceData): CatalogData {
  return {
    title: data.title,
    logo: normalizeImage(data.logo, "logo"),
    products: data.products.map(normalizeProduct),
  };
}

export function normalizeProduct(product: CatalogSourceProduct): CatalogProduct {
  const ean = readAliasedString(product, ["ean", "gtin"], "product ean");
  const href = readAliasedString(product, ["link", "url"], "product link");
  const promotion = product.promotion ?? null;

  return {
    id: product.articleNumber,
    articleNumber: product.articleNumber,
    ean,
    href,
    image: normalizeImage(product.image, `product ${product.articleNumber} image`),
    title: product.title,
    description: product.description,
    brandName: product.brandName,
    brandLogo: product.brandLogo,
    price: product.price,
    promotion,
    discountedPrice: promotion
      ? calculateDiscountedPrice(product.price, promotion.percentage)
      : null,
  };
}

export function calculateDiscountedPrice(
  price: number,
  discountPercentage: number,
): number {
  return Math.round((price * (100 - discountPercentage)) / 100);
}

function normalizeImage(image: CatalogSourceImage, label: string): CatalogImage {
  return {
    url: readAliasedString(image, ["link", "url"], `${label} url`),
    altText: image.altText,
  };
}

function readAliasedString<T extends Record<string, unknown>>(
  source: T,
  keys: string[],
  label: string,
): string {
  for (const key of keys) {
    const value = source[key];

    if (typeof value === "string" && value.length > 0) {
      return value;
    }
  }

  throw new Error(`Missing ${label}`);
}
