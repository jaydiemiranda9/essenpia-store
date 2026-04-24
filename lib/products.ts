import type { Product } from "./types";

const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const ESSENPIA = (path: string) =>
  `https://i0.wp.com/www.essenpia.com/wp-content/uploads/${path}?fit=1080%2C1080&ssl=1`;

export const PRODUCTS: Product[] = [
  // ─── Hospitality Furniture (10) ───────────────────────────────────────
  {
    slug: "modern-lounge-chair-hfc0014",
    name: "Modern Lounge Chair HFC0014",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "chair",
    imageUrl: UNSPLASH("1540574163026-643ea20ade25"),
    imageAlt: "Minimalist modern lounge chair with tapered wooden legs",
    description:
      "A sculpted lounge chair designed for boutique lobbies and executive suites. Upholstered in stain-guarded woven fabric over a kiln-dried beech frame, it reads refined at first glance and endures the rhythm of daily hotel use.",
    features: [
      "Kiln-dried beech hardwood frame",
      "Stain-guarded commercial-grade upholstery",
      "High-density foam seat cushion, 45 kg/m³",
      "Reinforced joinery rated for 150 kg",
      "Available in eight fabric finishes",
    ],
    idealFor: ["Boutique lobbies", "Executive suites", "Reading nooks"],
    featured: true,
  },
  {
    slug: "fabric-sofa-beige-hfs0019b",
    name: "Fabric Sofa — Beige HFS0019B",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "sofa",
    imageUrl: UNSPLASH("1493663284031-b7e3aefcae8e"),
    imageAlt: "Contemporary beige fabric sofa in a hotel lobby setting",
    description:
      "A three-seater statement sofa in warm beige, built for high-traffic lounges and suite living areas. The low-profile silhouette sits comfortably under modern art or against textured walls.",
    features: [
      "Solid hardwood internal structure",
      "Sinuous spring suspension",
      "Removable, washable cushion covers",
      "Stain-resistant beige weave",
      "Pet-safe, low-VOC finishes",
    ],
    idealFor: ["Lobby lounges", "Suite living rooms", "Co-working corners"],
    featured: true,
  },
  {
    slug: "artisan-side-table-hft0018",
    name: "Artisan Side Table HFT0018",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "table",
    imageUrl: UNSPLASH("1493663284031-b7e3aefcae8e"),
    imageAlt: "Dark walnut side table with brushed brass accent",
    description:
      "A compact side table in walnut veneer with a brushed brass inlay. Designed to pair with lounge seating, it holds a welcome tray or a guidebook with quiet authority.",
    features: [
      "Walnut veneer over engineered core",
      "Brushed brass inlay detail",
      "Felted base, hardwood-floor safe",
      "Height calibrated for arm-level service",
    ],
    idealFor: ["Lobby lounges", "Suite reading corners", "Restaurant entries"],
  },
  {
    slug: "modern-chair-hfc0009",
    name: "Modern Chair HFC0009",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "chair",
    imageUrl: UNSPLASH("1555041469-a586c61ea9bc"),
    imageAlt: "Leather-and-steel modern chair",
    description:
      "A tailored leather dining chair with matte-black steel legs. A restrained shape that disappears in good company and elevates simpler F&B layouts.",
    features: [
      "Full-grain leather upper",
      "Powder-coated steel frame",
      "Contoured back support",
      "Stackable for event setups",
    ],
    idealFor: ["Restaurant dining", "Event halls", "Conference rooms"],
  },
  {
    slug: "executive-armchair-hfc0010",
    name: "Executive Armchair HFC0010",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "chair",
    imageUrl: UNSPLASH("1506439773649-6e0eb8cfb237"),
    imageAlt: "Plush executive armchair with curved wooden arms",
    description:
      "An enveloping armchair for suite living rooms. The curved solid-oak arms cradle the guest; the deep seat invites long reads and longer conversations.",
    features: [
      "Solid American oak arms",
      "Feather-and-foam blended cushion",
      "Stain-resistant woven upholstery",
      "Reinforced corner blocks",
    ],
    idealFor: ["Presidential suites", "Club lounges", "Reading libraries"],
  },
  {
    slug: "banquet-chair-hfc0008",
    name: "Banquet Chair HFC0008",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "chair",
    imageUrl: UNSPLASH("1540932239986-30128078f3c5"),
    imageAlt: "Stackable banquet chair with padded seat",
    description:
      "A stackable banquet chair in seven color-coordinated finishes. Engineered for rapid room resets with an aluminum frame that stacks twelve-high without scuffing.",
    features: [
      "Lightweight aluminum frame, 4.8 kg",
      "Non-scuff stacking bumpers",
      "Flame-retardant fabric seat",
      "12-high stack capacity",
    ],
    idealFor: ["Ballrooms", "Conference centers", "Wedding venues"],
  },
  {
    slug: "coffee-table-hft0021",
    name: "Oak Coffee Table HFT0021",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "table",
    imageUrl: UNSPLASH("1555041469-a586c61ea9bc"),
    imageAlt: "Rectangular oak coffee table with soft edges",
    description:
      "A rectangular oak coffee table with softened edges and a matte sealant that hides the life of a lobby. Proportioned for two sofas or a three-seater configuration.",
    features: [
      "Solid European oak top",
      "Water-resistant matte sealant",
      "Rounded child-safe edges",
      "Adjustable leveling feet",
    ],
    idealFor: ["Lobby lounges", "Suite living rooms"],
  },
  {
    slug: "loveseat-sofa-hfs0022",
    name: "Velvet Loveseat HFS0022",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "sofa",
    imageUrl: UNSPLASH("1600566753190-17f0baa2a6c3"),
    imageAlt: "Forest-green velvet loveseat with gold legs",
    description:
      "A two-seater loveseat in commercial velvet with brushed-brass legs. A signature piece for boutique check-in areas, suite foyers, and photo-forward corners.",
    features: [
      "Abrasion-tested velvet (50,000 rubs)",
      "Brushed brass-finish legs",
      "High-resilience foam seat",
      "Assembled hardwood frame",
    ],
    idealFor: ["Boutique lobbies", "Suite foyers"],
  },
  {
    slug: "console-table-hft0024",
    name: "Console Table HFT0024",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "table",
    imageUrl: UNSPLASH("1493663284031-b7e3aefcae8e"),
    imageAlt: "Slim console table with tapered legs",
    description:
      "A slim-profile console table that anchors hallways, suite entries, and behind-sofa runs. The tapered legs keep the silhouette airy.",
    features: [
      "1.4 m length, 38 cm depth",
      "Tapered solid wood legs",
      "Hidden drawer for amenities",
      "Scratch-resistant top finish",
    ],
    idealFor: ["Corridors", "Suite entries", "Lobby backdrops"],
  },
  {
    slug: "accent-chair-hfc0015",
    name: "Accent Chair HFC0015",
    categorySlug: "hospitality-furniture",
    subCategorySlug: "chair",
    imageUrl: UNSPLASH("1506439773649-6e0eb8cfb237"),
    imageAlt: "Sculptural accent chair in bouclé fabric",
    description:
      "A sculptural accent chair in ivory bouclé — the statement piece for a suite corner or a boutique check-in counter. Small footprint, large presence.",
    features: [
      "Ivory bouclé fabric, Martindale 40,000",
      "Curved solid-ash frame",
      "Memory-foam seat insert",
      "Removable zipped cover",
    ],
    idealFor: ["Boutique lobbies", "Suite corners"],
  },

  // ─── Hospitality Decor (8) ────────────────────────────────────────────
  {
    slug: "gold-pineapple-figurine",
    name: "Gold Pineapple Figurine",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Brass pineapple figurine, a symbol of hospitality",
    description:
      "A brass-finished pineapple figurine — a centuries-old symbol of hospitality — styled for reception desks and suite consoles. A small gesture that signals welcome before a word is spoken.",
    features: [
      "Brass-finished composite",
      "28 cm height",
      "Felted base, surface-safe",
      "Boxed for gifting or resale",
    ],
    idealFor: ["Reception desks", "Suite consoles", "Concierge areas"],
    featured: true,
  },
  {
    slug: "ceramic-vase-tall-ivory",
    name: "Tall Ceramic Vase — Ivory",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Tall ivory ceramic vase with ribbed texture",
    description:
      "A floor-height ceramic vase with subtle ribbing in warm ivory. Pairs with dried pampas, olive branches, or single-stem orchids — a restrained statement for suite foyers.",
    features: [
      "Handcrafted stoneware",
      "70 cm height",
      "Weighted base for stability",
      "Sealed interior, holds water",
    ],
    idealFor: ["Suite foyers", "Lobby corners", "Restaurant entries"],
  },
  {
    slug: "bronze-coral-sculpture",
    name: "Bronze Coral Sculpture",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Abstract bronze coral-inspired sculpture",
    description:
      "An abstract coral-form sculpture in bronze finish. A quiet nod to coastal hospitality, scaled for console tables and open shelving.",
    features: [
      "Resin core with bronze finish",
      "32 cm height",
      "Stable weighted base",
      "Coordinates with gold pineapple figurine",
    ],
    idealFor: ["Coastal resorts", "Lobby shelving"],
  },
  {
    slug: "gold-tray-round",
    name: "Round Gold Serving Tray",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Round brushed gold tray with raised edges",
    description:
      "A brushed-gold serving tray for in-room amenity presentation. Reads luxury on the minibar, on the dressing table, at the welcome desk.",
    features: [
      "Stainless steel with brushed gold PVD",
      "36 cm diameter",
      "Rolled edges, easy grip",
      "Fingerprint-resistant finish",
    ],
    idealFor: ["In-room amenity trays", "Minibars", "Welcome desks"],
  },
  {
    slug: "marble-candle-holder-set",
    name: "Marble Candle Holder Set",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Set of three marble candle holders in graduated heights",
    description:
      "A three-piece candle holder set in Carrara-style marble. Graduated heights for styling on restaurant tables, lobby consoles, or spa reception.",
    features: [
      "Genuine marble, each piece unique",
      "Heights: 12, 18, 24 cm",
      "Fits standard pillar candles",
      "Felted bases",
    ],
    idealFor: ["Restaurant tablescapes", "Spa reception", "Suite consoles"],
  },
  {
    slug: "framed-abstract-print-navy",
    name: "Framed Abstract Print — Navy",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Abstract navy and gold framed print",
    description:
      "A framed abstract print in navy and champagne, printed on archival cotton rag. Arrives ready to hang, with keyhole hardware and reinforced backing.",
    features: [
      "Archival cotton rag paper",
      "Solid oak frame, matte black",
      "Reinforced backing with keyhole mount",
      "Sizes: 60×80 cm and 80×120 cm",
    ],
    idealFor: ["Suite walls", "Corridor galleries"],
  },
  {
    slug: "woven-basket-set",
    name: "Woven Basket Set",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Set of three natural-fiber woven baskets",
    description:
      "A nesting trio of hand-woven baskets in natural seagrass. Designed for in-room towel service, slipper storage, or lobby magazine holding.",
    features: [
      "Hand-woven seagrass",
      "Set of three, nesting",
      "Reinforced handles",
      "Lightly color-sealed",
    ],
    idealFor: ["In-room towel service", "Spa storage", "Lobby display"],
  },
  {
    slug: "crystal-decanter-set",
    name: "Crystal Decanter Set",
    categorySlug: "hospitality-decor",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Crystal decanter with matching tumblers on tray",
    description:
      "A lead-free crystal decanter with two tumblers and a gold-rim tray. A welcome gesture for presidential suites and executive meeting rooms.",
    features: [
      "Lead-free crystal",
      "750 ml decanter capacity",
      "Gold-rim tray, 30 cm",
      "Gift-box packaging",
    ],
    idealFor: ["Presidential suites", "Executive boardrooms"],
  },

  // ─── Bathroom Amenities (10) ───────────────────────────────────────────
  {
    slug: "guest-amenity-kit-tiffany-500",
    name: "Guest Amenity Kit — Tiffany, 500 packs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "guest-amenity-kit",
    imageUrl: ESSENPIA("2024/04/Hotel-Amenity-Kit-Tiffany-4.png"),
    imageAlt: "Tiffany-blue hotel guest amenity kit",
    description:
      "Our best-selling hotel-grade amenity kit in signature Tiffany blue. Each sachet contains shampoo, conditioner, body wash, and lotion — sealed, hygienic, and branded to your spec at volume.",
    features: [
      "Shampoo, conditioner, body wash, lotion",
      "Paraben-free formulations",
      "Branded sleeve available from 500 packs",
      "Tamper-evident seal",
    ],
    idealFor: ["Boutique hotels", "Luxury resorts", "Serviced apartments"],
    featured: true,
  },
  {
    slug: "guest-amenity-kit-tiffany-100",
    name: "Guest Amenity Kit — Tiffany, 100 packs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "guest-amenity-kit",
    imageUrl: ESSENPIA("2024/04/Hotel-Amenity-Kit-Tiffany-3.png"),
    imageAlt: "Tiffany-blue amenity kits in 100-pack carton",
    description:
      "The signature Tiffany amenity kit in a right-sized 100-pack carton for mid-size properties and trial runs ahead of full-volume commitments.",
    features: [
      "100 individually sealed kits",
      "Shampoo, conditioner, body wash, lotion",
      "Room-friendly compact sachet",
      "Reorder-ready carton",
    ],
    idealFor: ["Mid-size hotels", "B&Bs", "Pilot programs"],
  },
  {
    slug: "guest-amenity-kit-slant-b-500",
    name: "Guest Amenity Kit — Slant B, 500 packs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "guest-amenity-kit",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Guest-Amenity-Kit-Slash-B-4.png"),
    imageAlt: "Slant-style hotel amenity kit, minimal black packaging",
    description:
      "A minimalist slant-form amenity kit for design-led properties. Matte black sleeves, generous fill volumes, and a clean typographic lockup.",
    features: [
      "Matte black sleeve",
      "Shampoo, conditioner, body wash, lotion",
      "30 ml sachets",
      "Vegan-certified formulations",
    ],
    idealFor: ["Design hotels", "Boutique resorts"],
  },
  {
    slug: "dental-kit-b-500",
    name: "Dental Kit B — 500 packs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "dental-kit",
    imageUrl: ESSENPIA("2024/05/Hotel-Toothpaste-5g-1.png"),
    imageAlt: "Hotel dental kit with toothbrush and 5g toothpaste",
    description:
      "A sealed dental kit for turndown service — a compact toothbrush and 5 g toothpaste in branded, paper-forward packaging.",
    features: [
      "Compact-head toothbrush",
      "5 g fluoride toothpaste",
      "Paper-forward packaging",
      "500 units per carton",
    ],
    idealFor: ["Hotels", "Airline partners", "Serviced apartments"],
  },
  {
    slug: "dental-kit-a-500",
    name: "Dental Kit A — 500 packs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "dental-kit",
    imageUrl: ESSENPIA("2024/04/Hotel-Toothpaste-3g-1.png"),
    imageAlt: "Compact hotel dental kit with 3g toothpaste",
    description:
      "Our most efficient dental kit — designed for high-turnover properties where every gram and every peso counts. 3 g toothpaste keeps unit cost sharp without compromising trust.",
    features: [
      "Travel toothbrush",
      "3 g fluoride toothpaste",
      "Heat-sealed sachet",
      "500 units per carton",
    ],
    idealFor: ["Economy hotels", "High-turnover chains"],
  },
  {
    slug: "hotel-toothpaste-5g-100",
    name: "Hotel Toothpaste 5g — 100 pcs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "toothpaste",
    imageUrl: ESSENPIA("2024/05/Hotel-Toothpaste-5g-1.png"),
    imageAlt: "5g hotel toothpaste sachets in a 100 pack",
    description:
      "Branded 5 g toothpaste for standalone amenity trays and turndown service. Fluoride formulation, mint flavor, and a sealed aluminum-foil pouch.",
    features: [
      "5 g per sachet",
      "Fluoride formulation, mint",
      "Tamper-evident foil seal",
      "100 pcs per inner carton",
    ],
    idealFor: ["Amenity trays", "Turndown service"],
  },
  {
    slug: "hotel-toothpaste-10g-100",
    name: "Hotel Toothpaste 10g — 100 pcs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "toothpaste",
    imageUrl: ESSENPIA("2024/05/Hotel-Toothpaste-10g-1.png"),
    imageAlt: "10g hotel toothpaste sachets",
    description:
      "Generous-fill 10 g toothpaste for extended stays and suite-level service. Supports multi-night use without reorder.",
    features: [
      "10 g per sachet",
      "Fluoride formulation, mint",
      "Extended-stay fill volume",
      "100 pcs per inner carton",
    ],
    idealFor: ["Serviced apartments", "Extended-stay suites"],
  },
  {
    slug: "hotel-toothbrush-soft-500",
    name: "Hotel Toothbrush (Soft) — 500 pcs",
    categorySlug: "bathroom-amenities",
    subCategorySlug: "toothbrush",
    imageUrl: UNSPLASH("1559591937-abc3a57a3fb4"),
    imageAlt: "Soft-bristle hotel toothbrush in individual sleeve",
    description:
      "A soft-bristle toothbrush with an ergonomic handle, individually sleeved for hygienic presentation. Supplied at volume to anchor in-house amenity kits.",
    features: [
      "Soft DuPont bristles",
      "Ergonomic non-slip handle",
      "Individually sleeved",
      "500 pcs per carton",
    ],
    idealFor: ["All hotel tiers", "Dental amenity kits"],
  },
  {
    slug: "shower-gel-bottle-300ml",
    name: "Refillable Shower Gel 300ml",
    categorySlug: "bathroom-amenities",
    imageUrl: UNSPLASH("1582719478250-c89cae4dc85b"),
    imageAlt: "Refillable shower gel bottle with ceramic dispenser",
    description:
      "A refillable 300 ml shower gel dispenser in matte-ceramic form. A sustainable alternative to single-use sachets for properties moving toward bulk dispensers.",
    features: [
      "300 ml capacity",
      "Matte-ceramic look, lightweight composite",
      "Push-pump dispenser",
      "Compatible with Essenpia bulk refills",
    ],
    idealFor: ["Eco-forward hotels", "Wellness resorts"],
  },
  {
    slug: "bar-soap-25g-hotel",
    name: "Hotel Bar Soap 25g — 500 pcs",
    categorySlug: "bathroom-amenities",
    imageUrl: UNSPLASH("1582719478250-c89cae4dc85b"),
    imageAlt: "Pleated hotel bar soap in white paper wrap",
    description:
      "A 25 g pleated bar soap in a clean white paper wrap. A gentle glycerin-enriched formulation that lathers cleanly and rinses without residue.",
    features: [
      "25 g per bar",
      "Glycerin-enriched formula",
      "Recyclable paper wrap",
      "500 pcs per carton",
    ],
    idealFor: ["Amenity kits", "Bathroom trays"],
  },

  // ─── Bedroom Amenities (4) ─────────────────────────────────────────────
  {
    slug: "velvet-clothes-hanger-set",
    name: "Velvet Clothes Hanger — Set of 10",
    categorySlug: "bedroom-amenities",
    subCategorySlug: "hanger",
    imageUrl: UNSPLASH("1558618666-fcd25c85cd64"),
    imageAlt: "Set of black velvet-flocked clothes hangers",
    description:
      "A ten-piece velvet-flocked hanger set in hotel-signature black. Slim profile to double closet capacity in compact suites; non-slip surface to protect guest silks.",
    features: [
      "Flocked velvet surface",
      "Non-slip, silk-safe",
      "5 mm slim profile",
      "Chrome-finished swivel hook",
    ],
    idealFor: ["Suite wardrobes", "Boutique closets"],
  },
  {
    slug: "wooden-hanger-classic",
    name: "Classic Wooden Hanger — Set of 10",
    categorySlug: "bedroom-amenities",
    subCategorySlug: "hanger",
    imageUrl: UNSPLASH("1558618666-fcd25c85cd64"),
    imageAlt: "Set of natural wood hangers with brushed gold hooks",
    description:
      "A ten-piece classic wooden hanger set in natural beech with brushed-gold hooks. A warm, grounded presence in wardrobes that signals considered detail.",
    features: [
      "Solid beech wood",
      "Brushed-gold swivel hook",
      "Contoured shoulders, garment-safe",
      "Varnished to resist humidity",
    ],
    idealFor: ["Luxury suites", "Heritage properties"],
  },
  {
    slug: "laundry-bag-linen",
    name: "Linen Laundry Bag",
    categorySlug: "bedroom-amenities",
    subCategorySlug: "laundry-bag",
    imageUrl: UNSPLASH("1558618666-fcd25c85cd64"),
    imageAlt: "Beige linen laundry bag with drawstring",
    description:
      "A drawstring laundry bag in natural linen — elevated above the stock polybag, ready for branding with hotel lockups. Reusable and return-laundered.",
    features: [
      "100% natural linen",
      "Waxed drawstring",
      "Screen-print branding available from 100 pcs",
      "Reusable, machine washable",
    ],
    idealFor: ["Boutique hotels", "Serviced apartments"],
  },
  {
    slug: "laundry-bag-nonwoven-200",
    name: "Nonwoven Laundry Bag — 200 pcs",
    categorySlug: "bedroom-amenities",
    subCategorySlug: "laundry-bag",
    imageUrl: UNSPLASH("1558618666-fcd25c85cd64"),
    imageAlt: "White nonwoven laundry bag, drawstring closure",
    description:
      "A high-volume laundry bag in soft white nonwoven fabric. The practical choice for high-turnover operations that still want something softer than plastic.",
    features: [
      "Nonwoven polypropylene",
      "Drawstring closure",
      "200 pcs per carton",
      "OEM printing from 1,000 pcs",
    ],
    idealFor: ["Chain hotels", "High-turnover operations"],
  },

  // ─── Tableware (6) ─────────────────────────────────────────────────────
  {
    slug: "porcelain-coffee-cup-set",
    name: "Porcelain Coffee Cup — Set of 6",
    categorySlug: "tableware",
    subCategorySlug: "cup",
    imageUrl: UNSPLASH("1544787219-7f47ccb76574"),
    imageAlt: "White porcelain coffee cups with matching saucers",
    description:
      "A six-piece porcelain coffee cup and saucer set, commercial-grade for daily service. Stackable, chip-resistant, and dishwasher-safe through thousands of cycles.",
    features: [
      "Commercial-grade porcelain",
      "180 ml capacity",
      "Stackable body, matching saucer",
      "Dishwasher and microwave safe",
    ],
    idealFor: ["Breakfast service", "Lobby cafés", "In-room coffee trays"],
  },
  {
    slug: "ceramic-mug-ribbed",
    name: "Ribbed Ceramic Mug",
    categorySlug: "tableware",
    subCategorySlug: "mug",
    imageUrl: UNSPLASH("1544787219-7f47ccb76574"),
    imageAlt: "White ribbed ceramic mug with matte finish",
    description:
      "A matte-white ceramic mug with tactile ribbing. Suited to minimalist suites and morning service where weight in the hand matters.",
    features: [
      "Matte-finish ceramic",
      "330 ml capacity",
      "Ribbed external texture",
      "Stackable",
    ],
    idealFor: ["In-room coffee", "Breakfast counters"],
  },
  {
    slug: "highball-glass-set",
    name: "Highball Glass — Set of 6",
    categorySlug: "tableware",
    subCategorySlug: "glass",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Crystal-clear highball glasses on marble",
    description:
      "A six-piece highball glass set for minibars and F&B service. Crystalline clarity, thin rims for comfort, and weighted bases for stability on a cart.",
    features: [
      "Lead-free crystalline",
      "350 ml capacity",
      "Weighted base",
      "Dishwasher safe",
    ],
    idealFor: ["Minibars", "Bar service", "Room service trays"],
  },
  {
    slug: "champagne-flute-set",
    name: "Champagne Flute — Set of 6",
    categorySlug: "tableware",
    subCategorySlug: "glass",
    imageUrl: UNSPLASH("1513558161293-cdaf765ed2fd"),
    imageAlt: "Crystal champagne flutes in an elegant setting",
    description:
      "A six-piece champagne flute set, pulled for welcome-toast service and wedding packages. Thin walls, tall stems, and a balanced hand feel.",
    features: [
      "Lead-free crystalline",
      "220 ml capacity",
      "Thin-walled bowl, tall stem",
      "Wedding-package ready",
    ],
    idealFor: ["Welcome toasts", "Weddings", "Minibars"],
  },
  {
    slug: "stainless-cutlery-set-24",
    name: "Stainless Cutlery — 24-piece Set",
    categorySlug: "tableware",
    subCategorySlug: "cutlery",
    imageUrl: UNSPLASH("1600585154526-990dced4db0d"),
    imageAlt: "Stainless steel 24-piece cutlery set",
    description:
      "A 24-piece cutlery set in 18/10 stainless steel with a brushed satin finish. Service for six; doubles in weight-graded brass or matte-black variants on request.",
    features: [
      "18/10 stainless steel",
      "Satin-brushed finish",
      "Service for 6 (6 forks, 6 knives, 6 spoons, 6 teaspoons)",
      "OEM variants: brass, matte black",
    ],
    idealFor: ["Restaurants", "Suite dining", "Room service"],
  },
  {
    slug: "teapot-matte-black",
    name: "Matte Black Teapot",
    categorySlug: "tableware",
    subCategorySlug: "cup",
    imageUrl: UNSPLASH("1544787219-7f47ccb76574"),
    imageAlt: "Matte black ceramic teapot with bamboo handle",
    description:
      "A matte-black stoneware teapot with a bamboo wrap handle. A modern counterpart to classic service for afternoon tea and in-room rituals.",
    features: [
      "Stoneware body, matte glaze",
      "800 ml capacity",
      "Bamboo wrap handle, heat-safe",
      "Built-in strainer basket",
    ],
    idealFor: ["Afternoon tea", "In-room tea service"],
  },

  // ─── Carts & Trolleys (6) ──────────────────────────────────────────────
  {
    slug: "housekeeping-cart-pro",
    name: "Housekeeping Cart Pro",
    categorySlug: "carts-and-trolleys",
    subCategorySlug: "housekeeping-cart",
    imageUrl: UNSPLASH("1556745753-b2904692b3cd"),
    imageAlt: "Housekeeping cart with linen and amenity compartments",
    description:
      "A purpose-built housekeeping cart with segmented linen bays, two amenity drawers, and a 120-liter waste sleeve. Engineered to shave minutes off every room reset.",
    features: [
      "Segmented linen bays",
      "Two amenity drawers",
      "120 L waste sleeve with vinyl cover",
      "Silent 5-inch castors, two locking",
      "Powder-coated steel frame",
    ],
    idealFor: ["Hotels", "Resorts", "Serviced apartments"],
    featured: true,
  },
  {
    slug: "laundry-cart-canvas",
    name: "Canvas Laundry Cart",
    categorySlug: "carts-and-trolleys",
    subCategorySlug: "laundry-cart",
    imageUrl: UNSPLASH("1556745753-b2904692b3cd"),
    imageAlt: "Canvas-body laundry cart with steel frame",
    description:
      "A canvas-body laundry cart on a tubular steel frame. Designed for in-house laundry pick-up rounds and back-of-house transfers.",
    features: [
      "Heavy-duty canvas body",
      "Tubular powder-coated steel frame",
      "4-inch swivel castors",
      "250 L capacity",
    ],
    idealFor: ["Laundry departments", "Back-of-house transfers"],
  },
  {
    slug: "luggage-trolley-brass",
    name: "Brass-Finish Luggage Trolley",
    categorySlug: "carts-and-trolleys",
    subCategorySlug: "luggage-trolley",
    imageUrl: UNSPLASH("1556745753-b2904692b3cd"),
    imageAlt: "Brass-finish luggage trolley with carpet deck",
    description:
      "A brass-finish luggage trolley with a carpet deck, the one the guest sees. Balanced for effortless push, accented for the entrance that sets the tone.",
    features: [
      "Brass-finish stainless steel",
      "Carpeted deck, sound-dampening",
      "8-inch rubber wheels",
      "Rated for 250 kg",
    ],
    idealFor: ["Hotel lobbies", "Luxury resorts"],
  },
  {
    slug: "utility-cart-3-tier",
    name: "3-Tier Utility Cart",
    categorySlug: "carts-and-trolleys",
    subCategorySlug: "utility-cart",
    imageUrl: UNSPLASH("1556745753-b2904692b3cd"),
    imageAlt: "Three-tier stainless utility cart",
    description:
      "A three-tier stainless-steel utility cart for back-of-house, F&B mise-en-place, and spa turnover. Solid shelves; wipe-clean surfaces.",
    features: [
      "Stainless-steel construction",
      "Three solid shelves",
      "4-inch locking castors",
      "120 kg shelf rating",
    ],
    idealFor: ["F&B mise-en-place", "Spa operations", "Banqueting"],
  },
  {
    slug: "room-service-cart",
    name: "In-Room Dining Cart",
    categorySlug: "carts-and-trolleys",
    subCategorySlug: "utility-cart",
    imageUrl: UNSPLASH("1556745753-b2904692b3cd"),
    imageAlt: "Room service cart with draped linen and warming box",
    description:
      "A folding-leaf room-service cart with a concealed warming box, linen skirt, and silent castors. Ready for white-glove suite delivery.",
    features: [
      "Folding leaf extensions, seats 2",
      "Concealed warming box (propane or electric)",
      "Linen skirt with branded embroidery",
      "Silent 4-inch castors",
    ],
    idealFor: ["In-room dining", "Suite breakfast service"],
  },
  {
    slug: "housekeeping-cart-compact",
    name: "Compact Housekeeping Cart",
    categorySlug: "carts-and-trolleys",
    subCategorySlug: "housekeeping-cart",
    imageUrl: UNSPLASH("1556745753-b2904692b3cd"),
    imageAlt: "Compact housekeeping cart for narrow corridors",
    description:
      "A slim-profile housekeeping cart engineered for heritage properties and narrow corridors. Full functionality; half the turning radius.",
    features: [
      "680 mm cart width (corridor-safe)",
      "Linen bay + amenity drawer",
      "80 L waste sleeve",
      "Tight-radius castors",
    ],
    idealFor: ["Heritage buildings", "Narrow-corridor properties"],
  },

  // ─── Hotel Room Appliances (4) ────────────────────────────────────────
  {
    slug: "electric-kettle-matte-black",
    name: "Electric Kettle — Matte Black, 1L",
    categorySlug: "hotel-room-appliance",
    subCategorySlug: "kettle",
    imageUrl: UNSPLASH("1570222094114-d054a817e56b"),
    imageAlt: "Matte-black electric kettle on a wooden surface",
    description:
      "A matte-black 1-liter electric kettle with a 360° cordless base and whisper-quiet boil. The dial reads mood before it reads temperature.",
    features: [
      "1 L capacity",
      "360° cordless base",
      "Auto shut-off, dry-boil protection",
      "BPA-free interior, stainless heating plate",
    ],
    idealFor: ["In-room coffee stations", "Club lounges"],
    featured: true,
  },
  {
    slug: "electric-kettle-brushed-steel",
    name: "Electric Kettle — Brushed Steel, 1.2L",
    categorySlug: "hotel-room-appliance",
    subCategorySlug: "kettle",
    imageUrl: UNSPLASH("1570222094114-d054a817e56b"),
    imageAlt: "Brushed-steel electric kettle with black handle",
    description:
      "A classic brushed-steel kettle that reads hospitality on every property tier. Double-wall insulation keeps the exterior safe to the touch.",
    features: [
      "1.2 L capacity",
      "Double-wall insulation",
      "Concealed heating element",
      "UK-style fused plug on request",
    ],
    idealFor: ["Standard rooms", "Extended-stay suites"],
  },
  {
    slug: "electric-kettle-white-compact",
    name: "Electric Kettle — White, 0.8L",
    categorySlug: "hotel-room-appliance",
    subCategorySlug: "kettle",
    imageUrl: UNSPLASH("1570222094114-d054a817e56b"),
    imageAlt: "Compact white electric kettle",
    description:
      "A compact 0.8 L kettle for single-occupancy rooms and capsule-style properties where footprint is every millimeter.",
    features: [
      "0.8 L capacity",
      "Compact base footprint (14 cm × 14 cm)",
      "Auto shut-off",
      "Quiet-boil element",
    ],
    idealFor: ["Capsule hotels", "Single-occupancy rooms"],
  },
  {
    slug: "travel-kettle-folding",
    name: "Folding Travel Kettle",
    categorySlug: "hotel-room-appliance",
    subCategorySlug: "kettle",
    imageUrl: UNSPLASH("1570222094114-d054a817e56b"),
    imageAlt: "Folding collapsible travel kettle",
    description:
      "A silicone-body collapsible kettle for airline partners and short-stay capsule rooms. Folds to a fifth of its boiling height.",
    features: [
      "Food-grade silicone body",
      "0.5 L capacity when expanded",
      "Folds flat to 6 cm",
      "Universal voltage (100–240V)",
    ],
    idealFor: ["Airline partners", "Capsule hotels"],
  },

  // ─── Eco-Friendly (6) ──────────────────────────────────────────────────
  {
    slug: "bamboo-toothbrush-500",
    name: "Bamboo Toothbrush — 500 pcs",
    categorySlug: "eco-friendly",
    imageUrl: UNSPLASH("1559591937-abc3a57a3fb4"),
    imageAlt: "Bamboo-handled eco-friendly toothbrush",
    description:
      "A bamboo-handled toothbrush with plant-based bristles, wrapped in FSC-certified paper. Sustainable credentials without compromising the guest experience.",
    features: [
      "FSC-certified bamboo handle",
      "Plant-based bristles",
      "Compostable paper sleeve",
      "500 pcs per carton",
    ],
    idealFor: ["Eco-forward hotels", "Wellness resorts"],
    featured: true,
  },
  {
    slug: "paper-wrapped-soap-eco",
    name: "Paper-Wrapped Eco Soap 25g",
    categorySlug: "eco-friendly",
    imageUrl: UNSPLASH("1582719478250-c89cae4dc85b"),
    imageAlt: "Paper-wrapped eco-friendly hotel soap",
    description:
      "A 25 g glycerin soap in unbleached recycled paper wrap. Plastic-free through the supply chain, from the bar to the carton.",
    features: [
      "Glycerin-enriched formula",
      "Unbleached recycled paper wrap",
      "Plastic-free supply chain",
      "500 pcs per carton",
    ],
    idealFor: ["Eco-certified hotels", "Sustainability programs"],
  },
  {
    slug: "reusable-shower-gel-refill",
    name: "Bulk Shower Gel Refill — 5L",
    categorySlug: "eco-friendly",
    imageUrl: UNSPLASH("1582719478250-c89cae4dc85b"),
    imageAlt: "5-liter bulk shower gel refill bottle",
    description:
      "A 5 L bulk refill for Essenpia in-room dispensers. Reduces plastic waste per room-night by up to 83% compared with single-use sachets.",
    features: [
      "5 L capacity",
      "Paraben-free formulation",
      "Compatible with Essenpia dispensers",
      "Refill schedule on request",
    ],
    idealFor: ["Eco-forward hotels", "Bulk-dispenser programs"],
  },
  {
    slug: "jute-laundry-bag",
    name: "Jute Laundry Bag",
    categorySlug: "eco-friendly",
    imageUrl: UNSPLASH("1558618666-fcd25c85cd64"),
    imageAlt: "Natural jute laundry bag with cotton drawstring",
    description:
      "A natural jute laundry bag with a cotton drawstring, printed with plant-based inks. Biodegradable and beautifully tactile.",
    features: [
      "100% jute body",
      "Cotton drawstring",
      "Plant-based ink printing",
      "Biodegradable end-of-life",
    ],
    idealFor: ["Eco-certified hotels", "B&Bs"],
  },
  {
    slug: "wooden-comb-guest-amenity",
    name: "Wooden Comb — Guest Amenity",
    categorySlug: "eco-friendly",
    imageUrl: UNSPLASH("1559591937-abc3a57a3fb4"),
    imageAlt: "Natural wooden comb in paper sleeve",
    description:
      "A natural wooden comb in a kraft paper sleeve. A small, tactile alternative to the plastic stock amenity.",
    features: [
      "Sustainably sourced beech wood",
      "Kraft paper sleeve",
      "500 pcs per carton",
      "OEM branding from 1,000 pcs",
    ],
    idealFor: ["Eco-forward hotels", "Spa amenity kits"],
  },
  {
    slug: "recycled-slippers-coral",
    name: "Recycled-Fiber Slippers — Natural",
    categorySlug: "eco-friendly",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-White-1.png"),
    imageAlt: "Natural-tone recycled-fiber hotel slippers",
    description:
      "Hotel slippers made from recycled coral fleece and a natural jute sole. Plush underfoot, with the credentials to match your sustainability narrative.",
    features: [
      "Recycled coral-fleece upper",
      "Natural jute sole",
      "Size S/M/L available",
      "Compostable outer packaging",
    ],
    idealFor: ["Eco-certified hotels", "Wellness resorts"],
  },

  // ─── Hotel Slippers (10) ──────────────────────────────────────────────
  {
    slug: "hotel-slippers-white-10-pairs",
    name: "Hotel Slippers — S White, 10 pairs",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-White-1.png"),
    imageAlt: "White hotel slippers, 10-pair starter pack",
    description:
      "Our classic white hotel slipper in a 10-pair starter pack — the right size to trial branding, test comfort, and align on your standard before scaling.",
    features: [
      "Coral-fleece upper",
      "Non-slip EVA sole",
      "One-size, stretch fit",
      "10 pairs per pack",
    ],
    idealFor: ["Pilot programs", "B&Bs"],
  },
  {
    slug: "hotel-slippers-white-50-pairs",
    name: "Hotel Slippers — S White, 50 pairs",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-White-3.png"),
    imageAlt: "White hotel slippers, 50-pair pack",
    description:
      "The white classic in a 50-pair operational pack. Right-sized for mid-scale properties running a single slipper SKU across all suites.",
    features: [
      "Coral-fleece upper",
      "Non-slip EVA sole",
      "One-size stretch fit",
      "50 pairs per pack",
    ],
    idealFor: ["Mid-size hotels", "Serviced apartments"],
  },
  {
    slug: "hotel-slippers-white-200-pairs",
    name: "Hotel Slippers — S White, 200 pairs",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-White-5.png"),
    imageAlt: "White hotel slippers, 200-pair bulk pack",
    description:
      "The 200-pair bulk pack for high-turnover chains and large resorts. Unit economics reward volume; our quality holds the line.",
    features: [
      "Coral-fleece upper",
      "Non-slip EVA sole",
      "OEM branding from 500 pairs",
      "200 pairs per pack",
    ],
    idealFor: ["Chain hotels", "Large resorts"],
    featured: true,
  },
  {
    slug: "hotel-slippers-grey-white-20",
    name: "Hotel Slippers — S Grey White, 20 pairs",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-Grey-White-2.png"),
    imageAlt: "Grey and white hotel slippers, 20-pair pack",
    description:
      "A grey-and-white two-tone slipper for properties refreshing their color language. 20-pair pack for single-room trials.",
    features: [
      "Two-tone grey-white upper",
      "Non-slip EVA sole",
      "One-size stretch fit",
      "20 pairs per pack",
    ],
    idealFor: ["Modern boutique hotels", "Design properties"],
  },
  {
    slug: "hotel-slippers-grey-white-100",
    name: "Hotel Slippers — S Grey White, 100 pairs",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-Grey-White-4.png"),
    imageAlt: "Grey and white hotel slippers, 100-pair pack",
    description:
      "The grey-white slipper at 100 pairs — the operational sweet spot for mid-scale modern properties committed to a single two-tone palette.",
    features: [
      "Two-tone grey-white upper",
      "Non-slip EVA sole",
      "Reusable PE outer bag",
      "100 pairs per pack",
    ],
    idealFor: ["Modern boutique hotels", "Design properties"],
  },
  {
    slug: "hotel-slippers-grey-200-pairs",
    name: "Hotel Slippers — S Gray, 200 pairs",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/03/WEB-Hotel-Slippers-S-Grey-White-5.png"),
    imageAlt: "Solid grey hotel slippers, 200-pair bulk pack",
    description:
      "Solid-grey slippers at 200-pair bulk. A grounded alternative to classic white, suited to properties with a cooler interior language.",
    features: [
      "Solid grey coral-fleece upper",
      "Non-slip EVA sole",
      "OEM branding from 500 pairs",
      "200 pairs per pack",
    ],
    idealFor: ["Chain hotels", "Resorts with cooler palettes"],
  },
  {
    slug: "hotel-slippers-waffle-cream",
    name: "Waffle Spa Slippers — Cream",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-White-2.png"),
    imageAlt: "Cream waffle-textured spa slippers",
    description:
      "A cream waffle-textured spa slipper, chosen for wellness programs and luxury bathhouses. Breathable, soft, signature.",
    features: [
      "Waffle-cotton upper",
      "EVA foam midsole",
      "Reinforced toe box",
      "Branded inner label available",
    ],
    idealFor: ["Spas", "Wellness resorts", "Bathhouses"],
  },
  {
    slug: "hotel-slippers-open-toe-white",
    name: "Open-Toe Summer Slippers — White",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-White-4.png"),
    imageAlt: "Open-toe white hotel slippers",
    description:
      "An open-toe variant of the classic white slipper, preferred for resort properties and warm-climate operations.",
    features: [
      "Coral-fleece upper, open-toe",
      "Ventilated EVA sole",
      "One-size stretch fit",
      "100 pairs per pack",
    ],
    idealFor: ["Resorts", "Beach properties", "Warm-climate operations"],
  },
  {
    slug: "hotel-slippers-embossed-logo",
    name: "Custom-Embossed Hotel Slippers",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-Grey-White-3.png"),
    imageAlt: "Hotel slippers with custom embossed logo",
    description:
      "Fully custom OEM slippers with embossed logo on the strap and printed inner sole. From concept to delivery in 45 days.",
    features: [
      "Embossed strap branding",
      "Printed inner-sole lockup",
      "Custom colorway",
      "45-day lead time",
    ],
    idealFor: ["Flag properties", "Chain launches", "Signature resorts"],
  },
  {
    slug: "hotel-slippers-plush-navy",
    name: "Plush Slippers — Navy",
    categorySlug: "hotel-slippers",
    imageUrl: ESSENPIA("2024/04/WEB-Hotel-Slippers-S-Grey-White-4.png"),
    imageAlt: "Navy plush hotel slippers",
    description:
      "A deep-navy plush slipper for heritage properties and club-floor programs. Weighted, cushioned, and discreetly branded.",
    features: [
      "Plush navy velour upper",
      "Memory-foam insole",
      "Non-slip textured sole",
      "Tonal gold logo thread",
    ],
    idealFor: ["Heritage hotels", "Club floors", "Executive suites"],
  },

  // ─── Linens (8) ────────────────────────────────────────────────────────
  {
    slug: "bed-linen-set-king-300tc",
    name: "Bed Linen Set — King, 300TC",
    categorySlug: "linens",
    subCategorySlug: "bed-linen-set",
    imageUrl: UNSPLASH("1611892440504-42a792e24d32"),
    imageAlt: "Crisp white hotel bed linen set on king bed",
    description:
      "A four-piece king bed set in 300-thread-count long-staple cotton — one fitted, one flat, and two pillowcases. The hotel standard, refined.",
    features: [
      "300 TC long-staple cotton",
      "Sateen weave, OEKO-TEX certified",
      "King size: fitted, flat, 2 pillowcases",
      "Industrial-wash rated 300 cycles",
    ],
    idealFor: ["4–5 star hotels", "Luxury resorts"],
    featured: true,
  },
  {
    slug: "bed-linen-set-queen-250tc",
    name: "Bed Linen Set — Queen, 250TC",
    categorySlug: "linens",
    subCategorySlug: "bed-linen-set",
    imageUrl: UNSPLASH("1522771739844-6a9f6d5f14af"),
    imageAlt: "Queen-size hotel bed linen set",
    description:
      "The queen-size workhorse at 250 TC. Everything the guest notices, without the price creep of luxury-tier bedding.",
    features: [
      "250 TC cotton-rich blend",
      "Percale weave for coolness",
      "Queen size: fitted, flat, 2 pillowcases",
      "Industrial-wash rated 250 cycles",
    ],
    idealFor: ["Mid-scale hotels", "Serviced apartments"],
  },
  {
    slug: "duvet-cover-king-white",
    name: "Duvet Cover — King, White",
    categorySlug: "linens",
    subCategorySlug: "duvet-cover",
    imageUrl: UNSPLASH("1611892440504-42a792e24d32"),
    imageAlt: "Crisp white king-size duvet cover",
    description:
      "A king-size duvet cover in 300 TC long-staple cotton with an envelope-closure back. Cut generously for over-tuck, sized to our king duvet filler.",
    features: [
      "300 TC long-staple cotton",
      "Envelope-closure back",
      "Generous over-tuck allowance",
      "Sized to Essenpia king duvet filler",
    ],
    idealFor: ["Luxury suites", "Executive floors"],
  },
  {
    slug: "duvet-filler-king-micro",
    name: "Duvet Filler — King, Microfiber",
    categorySlug: "linens",
    subCategorySlug: "duvet-filler",
    imageUrl: UNSPLASH("1611892440504-42a792e24d32"),
    imageAlt: "King-size microfiber duvet filler",
    description:
      "A premium microfiber duvet filler in king size. Hypoallergenic, quiet, and engineered to resist clumping through hundreds of industrial washes.",
    features: [
      "Premium microfiber fill, 300 GSM",
      "Hypoallergenic, dust-mite resistant",
      "Baffle-box stitching prevents migration",
      "Industrial-laundry safe",
    ],
    idealFor: ["All hotel tiers", "Luxury suites"],
  },
  {
    slug: "fitted-sheet-king-300tc",
    name: "Fitted Sheet — King, 300TC",
    categorySlug: "linens",
    subCategorySlug: "fitted-sheet",
    imageUrl: UNSPLASH("1611892440504-42a792e24d32"),
    imageAlt: "King fitted sheet with deep pocket on mattress",
    description:
      "A king fitted sheet with 38 cm deep pockets to accommodate pillow-top mattresses. Elastic all the way around for a perfectly tailored fit.",
    features: [
      "300 TC long-staple cotton",
      "38 cm deep corners",
      "All-around elastic",
      "Industrial-wash rated 300 cycles",
    ],
    idealFor: ["Luxury hotels", "Pillow-top mattress setups"],
  },
  {
    slug: "flat-sheet-king-300tc",
    name: "Flat Sheet — King, 300TC",
    categorySlug: "linens",
    subCategorySlug: "flat-sheet",
    imageUrl: UNSPLASH("1611892440504-42a792e24d32"),
    imageAlt: "King flat sheet with hemmed top band",
    description:
      "A generously cut king flat sheet in 300 TC cotton with a clean double-stitched top hem. Finished the way a chambermaid will tuck it.",
    features: [
      "300 TC long-staple cotton",
      "Double-stitched top hem",
      "Oversized cut for hospital corners",
      "Industrial-wash rated 300 cycles",
    ],
    idealFor: ["4–5 star hotels", "Executive floors"],
  },
  {
    slug: "mattress-pad-king-quilted",
    name: "Quilted Mattress Pad — King",
    categorySlug: "linens",
    subCategorySlug: "mattress-pad",
    imageUrl: UNSPLASH("1611892440504-42a792e24d32"),
    imageAlt: "Quilted king mattress pad on a hotel bed",
    description:
      "A quilted king mattress pad with a fitted skirt — the essential protective layer between the mattress and the sheet. Extends mattress life materially.",
    features: [
      "Quilted cotton top, microfiber fill",
      "Fitted skirt with deep-pocket elastic",
      "Industrial-laundry safe",
      "Sizes: king, queen, twin",
    ],
    idealFor: ["All hotel tiers"],
  },
  {
    slug: "pillow-down-alternative",
    name: "Down-Alternative Pillow",
    categorySlug: "linens",
    subCategorySlug: "pillow",
    imageUrl: UNSPLASH("1522771739844-6a9f6d5f14af"),
    imageAlt: "Plush down-alternative hotel pillow",
    description:
      "A down-alternative pillow in hotel-standard size. Hypoallergenic, plush, and laundry-resilient across industrial cycles.",
    features: [
      "Microfiber down-alternative fill",
      "300 TC cotton cover",
      "Hypoallergenic",
      "Sizes: standard and king",
    ],
    idealFor: ["All hotel tiers"],
  },

  // ─── Towels (6) ────────────────────────────────────────────────────────
  {
    slug: "bath-towel-white-500gsm",
    name: "Bath Towel — White, 500 GSM",
    categorySlug: "towels",
    subCategorySlug: "bath-towel",
    imageUrl: UNSPLASH("1600566752355-35792bedcfea"),
    imageAlt: "Folded white hotel bath towels on a shelf",
    description:
      "A 500 GSM bath towel in hospitality-standard white, spun from long-staple cotton for a plush hand on day one and resilience across 300+ wash cycles.",
    features: [
      "500 GSM long-staple cotton",
      "Double-stitched hems",
      "70 × 140 cm",
      "Industrial-wash rated 300 cycles",
    ],
    idealFor: ["4–5 star hotels", "Luxury resorts"],
    featured: true,
  },
  {
    slug: "hand-towel-white-500gsm",
    name: "Hand Towel — White, 500 GSM",
    categorySlug: "towels",
    subCategorySlug: "hand-towel",
    imageUrl: UNSPLASH("1571902943202-507ec2618e8f"),
    imageAlt: "Rolled white hand towels in a spa setting",
    description:
      "Matching 500 GSM hand towel, cut to 40 × 70 cm. Pairs with the bath set; stacks cleanly on a vanity.",
    features: [
      "500 GSM long-staple cotton",
      "Double-stitched hems",
      "40 × 70 cm",
      "Industrial-wash rated 300 cycles",
    ],
    idealFor: ["All hotel tiers", "Vanities"],
  },
  {
    slug: "face-towel-white-500gsm",
    name: "Face Towel — White, 500 GSM",
    categorySlug: "towels",
    subCategorySlug: "face-towel",
    imageUrl: UNSPLASH("1571902943202-507ec2618e8f"),
    imageAlt: "White face towels rolled on a tray",
    description:
      "The 500 GSM face towel at 30 × 30 cm. The understated third piece of the towel set — the one guests use most and notice first.",
    features: [
      "500 GSM long-staple cotton",
      "30 × 30 cm",
      "Double-stitched hems",
      "Industrial-wash rated 300 cycles",
    ],
    idealFor: ["Vanities", "In-room tea trays"],
  },
  {
    slug: "bath-mat-white-700gsm",
    name: "Bath Mat — White, 700 GSM",
    categorySlug: "towels",
    subCategorySlug: "bath-mat",
    imageUrl: UNSPLASH("1571902943202-507ec2618e8f"),
    imageAlt: "Plush white bath mat in a marble bathroom",
    description:
      "A 700 GSM bath mat in reinforced weave — the one that holds water the morning after a long stay. Weighted for a substantial underfoot feel.",
    features: [
      "700 GSM reinforced weave",
      "50 × 80 cm",
      "Gripped underside available",
      "Industrial-wash rated 300 cycles",
    ],
    idealFor: ["Luxury bathrooms", "Spa suites"],
  },
  {
    slug: "pool-towel-striped",
    name: "Pool Towel — Striped",
    categorySlug: "towels",
    subCategorySlug: "pool-towel",
    imageUrl: UNSPLASH("1600566752355-35792bedcfea"),
    imageAlt: "Striped pool towels stacked on a deck chair",
    description:
      "An oversized 90 × 180 cm pool towel in a two-tone stripe. Cut to wrap; dyed in color-fast tones for the long summer.",
    features: [
      "450 GSM velour finish",
      "90 × 180 cm oversized",
      "Color-fast for outdoor use",
      "Two stripe colorways",
    ],
    idealFor: ["Resorts", "Beach clubs", "Pool decks"],
  },
  {
    slug: "towel-set-deluxe-6pc",
    name: "Deluxe 6-Piece Towel Set",
    categorySlug: "towels",
    imageUrl: UNSPLASH("1600566752355-35792bedcfea"),
    imageAlt: "Deluxe six-piece hotel towel set on a marble counter",
    description:
      "A curated six-piece set: two bath, two hand, one face, and one bath mat. The daily suite towel complement, boxed and SKU-consolidated for simpler receiving.",
    features: [
      "500–700 GSM long-staple cotton",
      "Six-piece matched set",
      "Consolidated receiving SKU",
      "Available in white or ivory",
    ],
    idealFor: ["Suite service", "Simplified receiving"],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────
export function getProductsByCategory(
  categorySlug: string,
  subCategorySlug?: string
): Product[] {
  const byCat = PRODUCTS.filter((p) => p.categorySlug === categorySlug);
  if (!subCategorySlug) return byCat;
  return byCat.filter((p) => p.subCategorySlug === subCategorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  ).slice(0, limit);
}

export function getAllProductSlugs(): Array<{
  category: string;
  slug: string;
}> {
  return PRODUCTS.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}
