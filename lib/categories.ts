import type { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    slug: "hospitality-furniture",
    name: "Hospitality Furniture",
    tagline: "Architect the guest experience",
    description:
      "Chairs, sofas, and tables engineered for hotel contract use. Hardwood frames, stain-resistant upholstery, and silhouettes curated for lobbies, suites, and F&B floors.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/HFC0014-1.jpg",
    productCount: 61,
    subCategories: [
      { slug: "chair", name: "Chairs", categorySlug: "hospitality-furniture" },
      { slug: "sofa", name: "Sofas", categorySlug: "hospitality-furniture" },
      { slug: "table", name: "Tables", categorySlug: "hospitality-furniture" },
    ],
  },
  {
    slug: "hospitality-decor",
    name: "Hospitality Decor",
    tagline: "Details guests remember",
    description:
      "Sculptural accents, figurines, and styling pieces that signal care in every corner — from reception desks to suite consoles.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/Gold-Pineapple-Figurine.jpg",
    productCount: 27,
  },
  {
    slug: "bathroom-amenities",
    name: "Bathroom Amenities",
    tagline: "First impressions, perfected",
    description:
      "Guest kits, dental sets, and bath essentials pre-packed for effortless turnover. Customizable branding and volumes from 20 to 500 packs.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/04/Hotel-Amenity-Kit-Tiffany-4.png",
    productCount: 44,
    subCategories: [
      {
        slug: "guest-amenity-kit",
        name: "Guest Amenity Kits",
        categorySlug: "bathroom-amenities",
      },
      {
        slug: "dental-kit",
        name: "Dental Kits",
        categorySlug: "bathroom-amenities",
      },
      {
        slug: "toothbrush",
        name: "Toothbrushes",
        categorySlug: "bathroom-amenities",
      },
      {
        slug: "toothpaste",
        name: "Toothpastes",
        categorySlug: "bathroom-amenities",
      },
    ],
  },
  {
    slug: "bedroom-amenities",
    name: "Bedroom Amenities",
    tagline: "Considered comforts",
    description:
      "Purpose-built bedroom essentials — from velvet-soft hangers to branded laundry bags — designed to feel as intentional as the suite itself.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/08/Laundry-Bag.jpg",
    productCount: 2,
    subCategories: [
      { slug: "hanger", name: "Hangers", categorySlug: "bedroom-amenities" },
      {
        slug: "laundry-bag",
        name: "Laundry Bags",
        categorySlug: "bedroom-amenities",
      },
    ],
  },
  {
    slug: "tableware",
    name: "Tableware",
    tagline: "Service worthy of the setting",
    description:
      "Cups, mugs, glassware, and cutlery built to the demands of daily service — timeless shapes, commercial-grade durability.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/Glass-Cup.jpg",
    productCount: 7,
    subCategories: [
      { slug: "cup", name: "Cups", categorySlug: "tableware" },
      { slug: "mug", name: "Mugs", categorySlug: "tableware" },
      { slug: "glass", name: "Glasses", categorySlug: "tableware" },
      { slug: "cutlery", name: "Cutlery", categorySlug: "tableware" },
    ],
  },
  {
    slug: "carts-and-trolleys",
    name: "Carts & Trolleys",
    tagline: "Service flow, optimized",
    description:
      "Housekeeping, laundry, luggage, and utility trolleys with reinforced frames, smooth castors, and the ergonomics that shave minutes off every turn.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/Housekeeping-Cart.jpg",
    productCount: 7,
    subCategories: [
      {
        slug: "housekeeping-cart",
        name: "Housekeeping Carts",
        categorySlug: "carts-and-trolleys",
      },
      {
        slug: "laundry-cart",
        name: "Laundry Carts",
        categorySlug: "carts-and-trolleys",
      },
      {
        slug: "luggage-trolley",
        name: "Luggage Trolleys",
        categorySlug: "carts-and-trolleys",
      },
      {
        slug: "utility-cart",
        name: "Utility Carts",
        categorySlug: "carts-and-trolleys",
      },
    ],
  },
  {
    slug: "hotel-room-appliance",
    name: "Hotel Room Appliances",
    tagline: "Quiet reliability, room after room",
    description:
      "Kettles and in-room appliances chosen for longevity, safety, and a finish that never cheapens the suite.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/Electric-Kettle.jpg",
    productCount: 4,
    subCategories: [
      {
        slug: "kettle",
        name: "Electric Kettles",
        categorySlug: "hotel-room-appliance",
      },
    ],
  },
  {
    slug: "eco-friendly",
    name: "Eco-Friendly",
    tagline: "Sustainability without compromise",
    description:
      "Biodegradable, recycled, and responsibly sourced hospitality supplies that align with ESG commitments and the discerning modern guest.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/Eco-Toothbrush.jpg",
    productCount: 8,
  },
  {
    slug: "hotel-slippers",
    name: "Hotel Slippers",
    tagline: "Plush underfoot, every check-in",
    description:
      "Disposable and reusable slippers in coral-fleece, waffle, and open-toe styles. Supplied in pack sizes from 10 to 200 pairs with OEM branding.",
    imageUrl:
      "https://i0.wp.com/www.essenpia.com/wp-content/uploads/2024/04/WEB-Hotel-Slippers-S-White-1.png?fit=1080%2C1080&ssl=1",
    productCount: 14,
  },
  {
    slug: "linens",
    name: "Linens",
    tagline: "The difference a guest feels",
    description:
      "Sheets, duvet covers, pillows, and mattress pads in hospitality-grade cotton — woven for comfort, built for industrial laundering.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/Bed-Linen-Set.jpg",
    productCount: 10,
    subCategories: [
      {
        slug: "bed-linen-set",
        name: "Bed Linen Sets",
        categorySlug: "linens",
      },
      { slug: "duvet-cover", name: "Duvet Covers", categorySlug: "linens" },
      { slug: "duvet-filler", name: "Duvet Fillers", categorySlug: "linens" },
      { slug: "fitted-sheet", name: "Fitted Sheets", categorySlug: "linens" },
      { slug: "flat-sheet", name: "Flat Sheets", categorySlug: "linens" },
      { slug: "mattress-pad", name: "Mattress Pads", categorySlug: "linens" },
      { slug: "pillow", name: "Pillows", categorySlug: "linens" },
    ],
  },
  {
    slug: "towels",
    name: "Towels",
    tagline: "Soft hand, long life",
    description:
      "Bath towels, hand towels, face towels, bath mats, and pool towels spun from long-staple cotton — plush on day one, resilient at 300 washes.",
    imageUrl:
      "https://www.essenpia.com/wp-content/uploads/2024/09/Bath-Towel.jpg",
    productCount: 7,
    subCategories: [
      { slug: "bath-towel", name: "Bath Towels", categorySlug: "towels" },
      { slug: "hand-towel", name: "Hand Towels", categorySlug: "towels" },
      { slug: "face-towel", name: "Face Towels", categorySlug: "towels" },
      { slug: "bath-mat", name: "Bath Mats", categorySlug: "towels" },
      { slug: "pool-towel", name: "Pool Towels", categorySlug: "towels" },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getAllSubCategories() {
  return CATEGORIES.flatMap((c) => c.subCategories ?? []);
}

export function getSubCategoryBySlug(categorySlug: string, subSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  return category?.subCategories?.find((s) => s.slug === subSlug);
}
