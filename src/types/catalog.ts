import type {
  ColumbusRecruitmentData,
  Image as SchemaImage,
  Product as SchemaProduct,
  Promotion as SchemaPromotion,
} from "./schema";

export interface CatalogImage {
  url: string;
  altText: string;
}

export interface CatalogPromotion {
  name: string;
  percentage: number;
}

export interface CatalogProduct {
  id: string;
  articleNumber: string;
  ean: string;
  href: string;
  image: CatalogImage;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;
  promotion: CatalogPromotion | null;
  discountedPrice: number | null;
}

export interface CatalogData {
  title: string;
  logo: CatalogImage;
  products: CatalogProduct[];
}

export type CatalogSourceImage = Omit<SchemaImage, "link"> & {
  link?: string;
  url?: string;
};

export type CatalogSourcePromotion = SchemaPromotion;

export type CatalogSourceProduct = Omit<
  SchemaProduct,
  "ean" | "link" | "image" | "promotion"
> & {
  ean?: string;
  gtin?: string;
  link?: string;
  url?: string;
  image: CatalogSourceImage;
  promotion?: CatalogSourcePromotion | null;
};

export type CatalogSourceData = Omit<
  ColumbusRecruitmentData,
  "logo" | "products"
> & {
  logo: CatalogSourceImage;
  products: CatalogSourceProduct[];
};
