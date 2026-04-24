export type CategorySlug =
  | "hospitality-furniture"
  | "hospitality-decor"
  | "bathroom-amenities"
  | "bedroom-amenities"
  | "tableware"
  | "carts-and-trolleys"
  | "hotel-room-appliance"
  | "eco-friendly"
  | "hotel-slippers"
  | "linens"
  | "towels";

export interface SubCategory {
  slug: string;
  name: string;
  categorySlug: CategorySlug;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  productCount: number;
  subCategories?: SubCategory[];
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: CategorySlug;
  subCategorySlug?: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  features: string[];
  idealFor: string[];
  featured?: boolean;
}
