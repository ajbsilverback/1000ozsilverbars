export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding 1 Kilo Gold Bar Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why kilo bars have the lowest premiums, and how to evaluate costs when purchasing 1 kilo gold bars.",
    excerpt:
      "Discover why 1 kilo gold bars command the lowest retail premiums and how to maximize your gold buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "size-comparison",
    title: "1 Kilo vs 1 oz vs 10 oz Gold Bars: Finding Your Ideal Size",
    description:
      "A detailed comparison of gold bar sizes to help you choose the right denomination for your investment goals and capital.",
    excerpt:
      "Compare kilo, 10 oz, and 1 oz gold bars across premiums, liquidity, and practical considerations for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "storage-options",
    title: "Storing Your 1 Kilo Gold Bars: Options and Best Practices",
    description:
      "Compare storage solutions for 1 kilo gold bars from professional vaults to home storage considerations.",
    excerpt:
      "A comprehensive guide to securing your substantial gold bar investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
  {
    slug: "brand-differences",
    title: "Comparing 1 Kilo Gold Bar Brands: PAMP, Valcambi, Perth & More",
    description:
      "An in-depth comparison of major 1 kilo gold bar manufacturers and what differentiates their products.",
    excerpt:
      "Learn the differences between PAMP Suisse, Valcambi, Perth Mint, Argor-Heraeus, and other top kilo bar producers.",
    category: "Products",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for 1 Kilo Gold Bars",
    description:
      "Understanding the liquidity trade-offs of kilo bars compared to smaller denominations and how to plan for resale.",
    excerpt:
      "Explore the liquidity dynamics of kilo gold bars and strategies for efficient buying and selling.",
    category: "Investment",
    monexLink: "https://www.monex.com/1-kilo-gold-bars-for-sale/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves Kilo Bar Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for kilo bar investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on 1 Kilo Gold Bars",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling kilo gold bars.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your kilo bar trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating 1 Kilo Gold Bars: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on high-value kilo gold bars.",
    excerpt:
      "Protect your substantial investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
  {
    slug: "institutional-vs-retail",
    title: "Institutional vs Retail Kilo Bar Purchasing",
    description:
      "Understanding the differences between institutional and retail gold bar markets and their implications.",
    excerpt:
      "Learn how institutional standards affect kilo bar quality, pricing, and resale value for retail investors.",
    category: "Market",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to 1 Kilo Gold Bars in Your Portfolio",
    description:
      "Strategic considerations for incorporating kilo gold bars into a diversified investment portfolio.",
    excerpt:
      "Discover how kilo bars fit into portfolio diversification strategies for high-net-worth investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying 1 Kilo Gold Bars: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing 1 kilo gold bars, including payment methods, delivery, and settlement.",
    excerpt:
      "Learn what to expect when purchasing your first 1 kilo gold bar, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/1-kilo-gold-bars-for-sale/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling 1 Kilo Gold Bars",
    description:
      "A high-level overview of tax considerations related to physical gold ownership, including capital gains, state variations, and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical gold investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
