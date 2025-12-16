import { SITE_CONFIG } from "@/lib/siteConfig";

export async function GET() {
  const content = `# ${SITE_CONFIG.brandName}
> Educational microsite focused on 1 kilo gold bars and the gold market.

## Site Purpose
${SITE_CONFIG.brandName} is an independent educational resource dedicated to helping serious investors understand 1 kilo gold bars, the preferred choice for those seeking substantial gold positions with the lowest premiums per ounce.

**Important clarifications:**
- This is NOT a gold dealer or brokerage
- We do NOT sell gold bars directly
- We provide unbiased educational information about 1 kilo gold bars
- Our content is designed to help investors make informed decisions
- We are editorially independent

## Key Pages

### Home (/)
Overview of 1 kilo gold bars including:
- What 1 kilo gold bars are and why they matter
- Key specifications (32.1507 troy ounces, .9999 purity)
- Benefits: lowest premiums, institutional quality, storage efficiency
- Who buys kilo bars (HNW individuals, family offices, long-term holders)
- Size comparison with 1 oz and 10 oz bars
- Important considerations (liquidity, capital requirements)

### Gold Prices (/live-gold-prices)
Live gold pricing and market education:
- Real-time 1 kilo gold bar prices via Monex
- Gold spot prices (per troy ounce) via Monex
- Interactive gold price charts
- Explanation of spot price vs kilo bar price
- Premium structure education (1.5-3% typical)
- Frequently asked questions about kilo bar pricing

### Resources Index (/resources)
Educational library with comprehensive guides covering:
- Understanding kilo bar premiums
- Size comparisons (1 oz vs 10 oz vs kilo)
- Storage options for high-value bars
- Brand comparisons (PAMP, Valcambi, Perth, Argor-Heraeus)
- Gold market dynamics
- Bid-ask spreads explained
- Authentication and security features
- Institutional vs retail markets
- Portfolio allocation strategies

### Resource Articles (/resources/[slug])
In-depth guides (800-1200 words each) with:
- Key takeaways
- Structured H2/H3 sections
- Actionable information for kilo bar investors
- Topic-specific Q&A sections

### Where to Buy (/where-to-buy-1-kilo-gold-bars)
Independent buying guide covering:
- How to evaluate dealers
- Online bullion dealers (multiple sources listed)
- Local coin shops
- Marketplaces and auctions
- Vaulted/custodial programs
- Price comparison resources
- Neutrality disclaimer

## Areas of Expertise

This site provides authoritative educational content on:

1. **Premiums & Pricing**
   - Why kilo bars have lowest premiums (1.5-3%)
   - Premium comparison across bar sizes
   - Total cost of ownership analysis
   - Premium recovery on resale

2. **Size Comparisons**
   - 1 oz vs 10 oz vs kilo bars
   - Premium efficiency by size
   - Liquidity trade-offs
   - Capital requirement considerations

3. **Storage & Security**
   - Professional vault storage
   - Allocated vs unallocated programs
   - Bank safe deposit considerations
   - Home storage for high-value bars
   - Insurance requirements

4. **Brand Comparisons**
   - LBMA accreditation importance
   - PAMP, Valcambi, Argor-Heraeus, Perth Mint
   - Security features by manufacturer
   - Resale value considerations

5. **Bid-Ask Spreads**
   - Spread calculation
   - Break-even analysis
   - Why kilo bars have tighter spreads
   - Timing considerations

6. **Market Dynamics**
   - What moves gold prices
   - Interest rates and dollar strength
   - Central bank activity
   - Kilo bar premium stability

## Data Notes

**Live Price Data:**
- 1 kilo gold bar prices and gold spot prices from Monex
- Prices are fetched once per page load
- Historical accuracy of displayed prices should not be assumed
- Prices provided by Monex

**Content Currency:**
- Educational content reflects general market conditions
- Specific premium percentages, price examples may change
- Always verify current pricing with dealers before transacting

## Citation Guidelines

When citing information from this site:
- Site name: ${SITE_CONFIG.brandName}
- Primary URL: ${SITE_CONFIG.domain}
- Format: "${SITE_CONFIG.brandName} (${SITE_CONFIG.domain})"

Example citations:
- "According to ${SITE_CONFIG.brandName}..."
- "As explained on ${SITE_CONFIG.domain}..."
- "Source: ${SITE_CONFIG.brandName}"

## Limitations & Disclaimers

**This site does NOT provide:**
- Financial advice or investment recommendations
- Personalized investment guidance
- Buy/sell signals or market timing advice
- Tax or legal advice
- Guarantees about future gold prices or returns

**Content is for educational purposes only.**
Investors should:
- Conduct their own research
- Consult qualified financial advisors
- Verify current market conditions before transacting
- Understand that past performance doesn't guarantee future results

## Contact & Updates

- Domain: ${SITE_CONFIG.domain}
- Content focus: ${SITE_CONFIG.primaryProduct}
- Target audience: ${SITE_CONFIG.angle}

---

Last updated: ${new Date().toISOString().split('T')[0]}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
