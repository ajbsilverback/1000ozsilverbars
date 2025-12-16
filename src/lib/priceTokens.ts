/**
 * Dynamic Price Token System
 * 
 * Allows FAQ/content authors to use tokens like {{CAPITAL_REQUIREMENT}} 
 * instead of hard-coded dollar amounts. Tokens are replaced with live
 * values from the pricing API at render time.
 * 
 * IMPORTANT: This system is designed to be reusable across sites.
 * To adapt for a different product, only change siteConfig.ts - 
 * the tokens and content remain the same.
 */

import { ProductSpotSummary } from "./monexSpot";

/**
 * Configuration for price display
 */
export interface PriceTokenConfig {
  /** Premium band percentage for range calculations (default 5%) */
  premiumBandPercent?: number;
  /** Rounding increment in dollars (default 100) */
  roundingIncrement?: number;
}

const DEFAULT_CONFIG: Required<PriceTokenConfig> = {
  premiumBandPercent: 5,
  roundingIncrement: 100,
};

/**
 * Rounds a number to the nearest increment
 */
function roundToNearest(value: number, increment: number): number {
  return Math.round(value / increment) * increment;
}

/**
 * Formats a price value for display (e.g., "~$132,500")
 */
function formatPrice(value: number, prefix: string = "~"): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
  return `${prefix}${formatted}`;
}

/**
 * Token types supported by the system
 */
export type PriceTokenType = 
  | "CAPITAL_REQUIREMENT"           // ~$30,000 (ask price rounded)
  | "CAPITAL_REQUIREMENT_RANGE"     // ~$28,500–$31,500 (ask ± premium band)
  | "CAPITAL_REQUIREMENT_PLUS"      // ~$30,000+ (ask rounded with plus)
  | "LIQUIDITY_THRESHOLD"           // ~$30,000+ (same as plus, for liquidity context)
  | "BAR_PRICE"                     // $30,000 (1000 oz bar ask price, no tilde)
  | "SPOT_PRICE"                    // ~$30 (per oz spot price derived from bar)
  | "ONE_OZ_BAR_RANGE"              // $33–$40 (1 oz bar with 10-33% typical premium)
  | "HUNDRED_OZ_BAR_RANGE";         // $3,100–$3,400 (100 oz bar with 2-4% typical premium)

/**
 * Regex pattern to match tokens in strings
 * Matches: {{TOKEN_NAME}}
 */
const TOKEN_PATTERN = /\{\{(CAPITAL_REQUIREMENT|CAPITAL_REQUIREMENT_RANGE|CAPITAL_REQUIREMENT_PLUS|LIQUIDITY_THRESHOLD|BAR_PRICE|SPOT_PRICE|ONE_OZ_BAR_RANGE|HUNDRED_OZ_BAR_RANGE)\}\}/g;

/**
 * Resolves a single token to its display value
 */
export function resolveToken(
  tokenType: PriceTokenType,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {}
): string {
  const { premiumBandPercent, roundingIncrement } = { ...DEFAULT_CONFIG, ...config };

  // If no price data available, return a sensible fallback
  if (!priceData || priceData.ask <= 0) {
    return "current market price";
  }

  const askPrice = priceData.ask;
  const roundedAsk = roundToNearest(askPrice, roundingIncrement);
  
  // Derive spot price from 1000 oz bar ask price (removing typical premium)
  // 1000 oz bars typically have 0.5-2% premium, so divide by ~1.01 to estimate spot
  const estimatedSpotPerOz = askPrice / 1000 / 1.01;

  switch (tokenType) {
    case "CAPITAL_REQUIREMENT":
      return formatPrice(roundedAsk);

    case "CAPITAL_REQUIREMENT_RANGE": {
      const lowBound = roundToNearest(askPrice * (1 - premiumBandPercent / 100), roundingIncrement);
      const highBound = roundToNearest(askPrice * (1 + premiumBandPercent / 100), roundingIncrement);
      return `${formatPrice(lowBound)}–${formatPrice(highBound).replace("~", "")}`;
    }

    case "CAPITAL_REQUIREMENT_PLUS":
    case "LIQUIDITY_THRESHOLD":
      return `${formatPrice(roundedAsk)}+`;

    case "BAR_PRICE":
      // 1000 oz bar price without tilde prefix
      return formatPrice(roundedAsk, "");

    case "SPOT_PRICE": {
      // Per-ounce spot price rounded to nearest dollar
      const roundedSpot = roundToNearest(estimatedSpotPerOz, 1);
      return formatPrice(roundedSpot);
    }

    case "ONE_OZ_BAR_RANGE": {
      // 1 oz bars typically carry 10-33% premium over spot
      const lowPrice = roundToNearest(estimatedSpotPerOz * 1.10, 1);
      const highPrice = roundToNearest(estimatedSpotPerOz * 1.33, 1);
      return `${formatPrice(lowPrice, "")}–${formatPrice(highPrice, "").replace("$", "")}`;
    }

    case "HUNDRED_OZ_BAR_RANGE": {
      // 100 oz bars typically carry 2-4% premium over spot
      const lowPrice = roundToNearest(estimatedSpotPerOz * 100 * 1.02, 100);
      const highPrice = roundToNearest(estimatedSpotPerOz * 100 * 1.04, 100);
      return `${formatPrice(lowPrice, "")}–${formatPrice(highPrice, "").replace("$", "")}`;
    }

    default:
      return "current market price";
  }
}

/**
 * Replaces all tokens in a string with their resolved values
 * 
 * @param text - The string containing tokens (e.g., "Costs {{CAPITAL_REQUIREMENT}}")
 * @param priceData - The fetched price data (or null if unavailable)
 * @param config - Optional configuration for formatting
 * @returns The string with all tokens replaced
 */
export function replaceTokens(
  text: string,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {}
): string {
  return text.replace(TOKEN_PATTERN, (match, tokenType: PriceTokenType) => {
    return resolveToken(tokenType, priceData, config);
  });
}

/**
 * Checks if a string contains any price tokens
 */
export function hasTokens(text: string): boolean {
  TOKEN_PATTERN.lastIndex = 0; // Reset regex state
  return TOKEN_PATTERN.test(text);
}

/**
 * Gets all tokens found in a string
 */
export function findTokens(text: string): PriceTokenType[] {
  const tokens: PriceTokenType[] = [];
  let match;
  const pattern = new RegExp(TOKEN_PATTERN.source, "g");
  while ((match = pattern.exec(text)) !== null) {
    tokens.push(match[1] as PriceTokenType);
  }
  return tokens;
}




