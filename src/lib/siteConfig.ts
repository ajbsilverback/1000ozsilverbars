/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for 1000ozSilverBars.com
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.1000ozsilverbars.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.1000ozsilverbars.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "1000ozSilverBars.com",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "1000 oz silver bars",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "silver",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "bars",
  
  /** Size or series identifier */
  sizeOrSeries: "1000 oz",

  /** Troy ounce equivalent */
  troyOunces: 1000,

  // ============================================================
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * SBI1000 = 1000 oz silver bar (COMEX good delivery)
   */
  productSymbol: "SBI1000",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price per troy ounce)
   * SBSPOT = Silver Spot Price
   */
  spotSymbol: "SBSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "serious investors and institutions seeking substantial silver positions with lowest premiums per ounce",

  /** Approved Monex.com links for authoritative references */
  monexLinks: {
    /** 1000 oz silver bars product page */
    productPage: "https://www.monex.com/1000-oz-silver-bullion-bars-for-sale/",
    /** Silver spot prices */
    spotPrices: "https://www.monex.com/silver-prices/",
    /** Investing in silver overview */
    investingOverview: "https://www.monex.com/investing-in-silver/",
    /** 1000 oz silver bar price charts */
    priceCharts: "https://www.monex.com/1000-oz-silver-bullion-price-charts/",
    /** 1000 oz silver bars knowledge base */
    knowledgeBase: "https://www.monex.com/knowledge-base/silver-investing/silver-bullion/1000-oz-silver-bars/",
    /** Educational articles */
    articles: {
      bullionHistory: "https://www.monex.com/knowledge/great-bullion-famine-bullionism-and-bullionist-controversy/",
      costEffective: "https://www.monex.com/knowledge/1000-oz-silver-bars-most-cost-effective-investment/",
      vsCoins: "https://www.monex.com/knowledge/large-1000-oz-silver-bars-vs-silver-coin-investing/",
      bestDeals: "https://www.monex.com/knowledge/how-to-get-best-deals-on-1000-oz-silver-bars/",
      storageAndCare: "https://www.monex.com/knowledge/storage-and-care-1000-oz-silver-bars/",
      pricePotential: "https://www.monex.com/knowledge/upside-price-potential-1000-oz-silver-bars/",
    },
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}
