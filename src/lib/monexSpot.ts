/**
 * Server-side utility for fetching product spot price from Monex API
 * Fetches ONCE per page load - NO auto-refresh, NO intervals, NO polling, NO background revalidation
 */

import { SITE_CONFIG, getProductApiUrl, getSpotApiUrl } from "./siteConfig";

/**
 * TypeScript interface for Product Spot Summary from Monex API
 * 
 * API Response shape (data[0]):
 * {
 *   "symbol": "GBOZ",
 *   "baseCurrency": "USD",
 *   "last": 4371.0,
 *   "bid": 4211.0,
 *   "ask": 4371.0,
 *   "high": 4444.0,
 *   "low": 4351.0,
 *   "open": 4430.0,
 *   "previousClose": 4369.0,
 *   "timestamp": "2025-12-12 17:18:12Z"
 * }
 */
export interface ProductSpotSummary {
  symbol: string;
  baseCurrency: string;
  last: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
  timestamp: string;
  // Computed fields
  change: number;
  changePercent: number;
}

/** @deprecated Use ProductSpotSummary instead */
export type GbozSpotSummary = ProductSpotSummary;

/**
 * Fetches the current product spot price from Monex API
 * Uses symbol from SITE_CONFIG.productSymbol
 * 
 * Uses cache: 'no-store' to ensure:
 * - Data is fetched fresh on each page load ONLY
 * - No background revalidations
 * - No subsequent client-side updates
 * 
 * @returns Promise<ProductSpotSummary | null> - The spot price data or null on error
 */
export async function fetchProductSpot(): Promise<ProductSpotSummary | null> {
  const symbol = SITE_CONFIG.productSymbol;
  const apiUrl = getProductApiUrl();
  
  try {
    const response = await fetch(apiUrl, {
      cache: "no-store", // Fresh fetch on each page load, no caching
      headers: {
        "Accept": "application/json",
      },
    });

    // If response.ok is false → return null
    if (!response.ok) {
      console.error(`Monex API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const json = await response.json();

    // Handle different possible response shapes
    let productData: Record<string, unknown> | null = null;

    if (Array.isArray(json)) {
      // Response is an array - find by symbol
      productData = json.find(
        (item: Record<string, unknown>) => 
          item.symbol === symbol || item.metal === symbol
      ) || json[0] || null;
    } else if (json && typeof json === "object") {
      // Response is an object
      if (json[symbol]) {
        // Keyed by symbol: { GBOZ: { ... } }
        productData = json[symbol];
      } else if (json.data && Array.isArray(json.data)) {
        // Wrapped in data property: { data: [...] }
        productData = json.data.find(
          (item: Record<string, unknown>) => 
            item.symbol === symbol || item.metal === symbol
        ) || json.data[0] || null;
      } else if (json.data && typeof json.data === "object") {
        // Wrapped in data object: { data: { SYMBOL: {...} } }
        productData = json.data[symbol] || json.data;
      } else if (json.symbol === symbol || json.metal === symbol) {
        // Direct object
        productData = json;
      } else if (json.bid !== undefined || json.ask !== undefined || json.last !== undefined) {
        // Has price data directly
        productData = json;
      } else {
        // Try first key that looks like data
        const keys = Object.keys(json);
        for (const key of keys) {
          const val = json[key];
          if (val && typeof val === "object" && (val.bid !== undefined || val.ask !== undefined || val.last !== undefined)) {
            productData = val;
            break;
          }
        }
      }
    }

    if (!productData) {
      console.error(`Monex API: Could not extract ${symbol} data from response`);
      return null;
    }

    // Extract price values with fallbacks
    const last = Number(productData.last ?? productData.Last ?? productData.price ?? 0);
    const bid = Number(productData.bid ?? productData.Bid ?? productData.bidPrice ?? 0);
    const ask = Number(productData.ask ?? productData.Ask ?? productData.askPrice ?? last ?? 0);
    const high = Number(productData.high ?? productData.High ?? productData.dayHigh ?? 0);
    const low = Number(productData.low ?? productData.Low ?? productData.dayLow ?? 0);
    const open = Number(productData.open ?? productData.Open ?? productData.dayOpen ?? 0);
    const previousClose = Number(productData.previousClose ?? productData.PreviousClose ?? productData.close ?? productData.Close ?? 0);
    
    // Validate we have at least some price data
    if (bid === 0 && ask === 0 && last === 0) {
      console.error("Monex API: No price data found in response");
      return null;
    }

    // Compute change vs previousClose
    const currentPrice = ask || last;
    const change = previousClose > 0 ? currentPrice - previousClose : 0;
    const changePercent = previousClose > 0 ? (change / previousClose) * 100 : 0;

    // Map to our interface
    const spotSummary: ProductSpotSummary = {
      symbol: String(productData.symbol || productData.Symbol || productData.metal || symbol),
      baseCurrency: String(productData.baseCurrency || productData.BaseCurrency || productData.currency || "USD"),
      last,
      bid,
      ask,
      high,
      low,
      open,
      previousClose,
      timestamp: String(productData.timestamp || productData.Timestamp || productData.lastUpdate || productData.updatedAt || new Date().toISOString()),
      change,
      changePercent,
    };

    return spotSummary;
  } catch (error) {
    console.error(`Error fetching ${symbol} spot price:`, error);
    return null;
  }
}

/** @deprecated Use fetchProductSpot instead */
export const fetchGbozSpot = fetchProductSpot;

/**
 * Formats a price number as USD currency
 */
export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Formats a timestamp for display in local time
 */
export function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      return "Just now";
    }
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  } catch {
    return "Just now";
  }
}

/**
 * Formats change with sign and percentage
 */
export function formatChange(change: number, changePercent: number): string {
  const sign = change >= 0 ? "+" : "";
  const formattedChange = formatUSD(Math.abs(change)).replace("$", "");
  return `${sign}${change >= 0 ? "" : "-"}$${formattedChange} (${sign}${changePercent.toFixed(2)}%)`;
}

// ============================================================
// METAL SPOT INDEX - Raw metal spot price
// ============================================================

/**
 * TypeScript interface for Metal Spot Index from Monex API
 */
export interface MetalSpotIndexSummary {
  symbol: string;
  baseCurrency: string;
  last: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
  timestamp: string;
  // Computed fields
  change: number;
  changePercent: number;
}

/** @deprecated Use MetalSpotIndexSummary instead */
export type GoldSpotIndexSummary = MetalSpotIndexSummary;

/**
 * Fetches the current Metal Spot Index from Monex API
 * Uses symbol from SITE_CONFIG.spotSymbol
 * 
 * Uses cache: 'no-store' to ensure:
 * - Data is fetched fresh on each page load ONLY
 * - No background revalidations
 * - No subsequent client-side updates
 * 
 * @returns Promise<MetalSpotIndexSummary | null> - The spot index data or null on error
 */
export async function fetchMetalSpotIndex(): Promise<MetalSpotIndexSummary | null> {
  const symbol = SITE_CONFIG.spotSymbol;
  const apiUrl = getSpotApiUrl();
  
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Monex API (${symbol}) error: ${response.status} ${response.statusText}`);
      return null;
    }

    const json = await response.json();

    // Handle different possible response shapes
    let spotData: Record<string, unknown> | null = null;

    if (Array.isArray(json)) {
      spotData = json.find(
        (item: Record<string, unknown>) => 
          item.symbol === symbol || item.metal === symbol
      ) || json[0] || null;
    } else if (json && typeof json === "object") {
      if (json[symbol]) {
        spotData = json[symbol];
      } else if (json.data && Array.isArray(json.data)) {
        spotData = json.data.find(
          (item: Record<string, unknown>) => 
            item.symbol === symbol || item.metal === symbol
        ) || json.data[0] || null;
      } else if (json.data && typeof json.data === "object") {
        spotData = json.data[symbol] || json.data;
      } else if (json.symbol === symbol || json.metal === symbol) {
        spotData = json;
      } else if (json.bid !== undefined || json.ask !== undefined || json.last !== undefined) {
        spotData = json;
      }
    }

    if (!spotData) {
      console.error(`Monex API: Could not extract ${symbol} data from response`);
      return null;
    }

    // Extract price values with fallbacks
    const last = Number(spotData.last ?? spotData.Last ?? spotData.price ?? 0);
    const bid = Number(spotData.bid ?? spotData.Bid ?? spotData.bidPrice ?? 0);
    const ask = Number(spotData.ask ?? spotData.Ask ?? spotData.askPrice ?? last ?? 0);
    const high = Number(spotData.high ?? spotData.High ?? spotData.dayHigh ?? 0);
    const low = Number(spotData.low ?? spotData.Low ?? spotData.dayLow ?? 0);
    const open = Number(spotData.open ?? spotData.Open ?? spotData.dayOpen ?? 0);
    const previousClose = Number(spotData.previousClose ?? spotData.PreviousClose ?? spotData.close ?? spotData.Close ?? 0);

    if (bid === 0 && ask === 0 && last === 0) {
      console.error(`Monex API (${symbol}): No price data found in response`);
      return null;
    }

    // Compute change vs previousClose
    const currentPrice = last || ask;
    const change = previousClose > 0 ? currentPrice - previousClose : 0;
    const changePercent = previousClose > 0 ? (change / previousClose) * 100 : 0;

    const spotSummary: MetalSpotIndexSummary = {
      symbol: String(spotData.symbol || spotData.Symbol || spotData.metal || symbol),
      baseCurrency: String(spotData.baseCurrency || spotData.BaseCurrency || spotData.currency || "USD"),
      last,
      bid,
      ask,
      high,
      low,
      open,
      previousClose,
      timestamp: String(spotData.timestamp || spotData.Timestamp || spotData.lastUpdate || spotData.updatedAt || new Date().toISOString()),
      change,
      changePercent,
    };

    return spotSummary;
  } catch (error) {
    console.error(`Error fetching ${symbol} Spot Index:`, error);
    return null;
  }
}

/** @deprecated Use fetchMetalSpotIndex instead */
export const fetchGoldSpotIndex = fetchMetalSpotIndex;
