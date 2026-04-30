export interface ColumbusRecruitmentData {
  title: string;
  logo: Image;
  products: [Product, ...Product[]];
}

export interface Image {
  link: string;
  altText: string;
}

export interface Product {
  articleNumber: string;
  ean: string;
  link: string;
  image: Image;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;
  promotion?: Promotion | null;
}

export interface Promotion {
  name: string;
  percentage: number;
}
