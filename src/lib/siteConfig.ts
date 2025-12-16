/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for 1KiloGoldBars.com
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.1kilogoldbars.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.1kilogoldbars.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "1KiloGoldBars.com",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "1 kilo gold bars",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "gold",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "bars",
  
  /** Size or series identifier */
  sizeOrSeries: "1 kilo",

  /** Troy ounce equivalent */
  troyOunces: 32.1507,

  // ============================================================
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * GBX1K = 1 kilo gold bar
   */
  productSymbol: "GBX1K",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price)
   * GBXSPOT = Gold Spot Index
   */
  spotSymbol: "GBXSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "serious investors and institutions seeking substantial gold positions with lowest premiums per ounce",

  /** Array of relevant Monex.com links for citations */
  monexLinks: [
    "https://www.monex.com/gold/",
    "https://www.monex.com/gold-prices/",
    "https://www.monex.com/investing-in-gold/",
    "https://www.monex.com/knowledge-base/gold-investing/",
  ],
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
