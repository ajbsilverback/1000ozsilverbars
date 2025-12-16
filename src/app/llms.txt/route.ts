import { SITE_CONFIG } from "@/lib/siteConfig";

export async function GET() {
  const content = `# ${SITE_CONFIG.brandName}
> Educational microsite focused on 1000 oz silver bars and the silver market.

## Site Purpose
${SITE_CONFIG.brandName} is an independent educational resource dedicated to helping serious investors understand 1000 oz silver bars, the preferred choice for those seeking substantial silver positions with the lowest premiums per ounce.

**Important clarifications:**
- This is NOT a silver dealer or brokerage
- We do NOT sell silver bars directly
- We provide unbiased educational information about 1000 oz silver bars
- Our content is designed to help investors make informed decisions
- We are editorially independent

## Key Pages

### Home (/)
Overview of 1000 oz silver bars including:
- What 1000 oz silver bars are and why they matter
- Key specifications (1000 troy ounces, .999 purity, COMEX standard)
- Benefits: lowest premiums, institutional quality, storage efficiency
- Who buys 1000 oz bars (HNW individuals, family offices, institutions)
- Size comparison with 1 oz and 100 oz bars
- Important considerations (liquidity, capital requirements)

### Silver Prices (/live-silver-prices)
Live silver pricing and market education:
- Real-time 1000 oz silver bar prices via Monex
- Silver spot prices (per troy ounce) via Monex
- Interactive silver price charts
- Explanation of spot price vs 1000 oz bar price
- Premium structure education (0.5-2% typical)
- Frequently asked questions about 1000 oz bar pricing

### Resources Index (/resources)
Educational library with comprehensive guides covering:
- Understanding 1000 oz bar premiums
- Size comparisons (1 oz vs 100 oz vs 1000 oz)
- Storage options for high-value bars
- Brand comparisons (Johnson Matthey, Asahi, KGHM, Heraeus)
- Silver market dynamics
- Bid-ask spreads explained
- Authentication and COMEX standards
- Institutional vs retail markets
- Portfolio allocation strategies

### Resource Articles (/resources/[slug])
In-depth guides (800-1200 words each) with:
- Key takeaways
- Structured H2/H3 sections
- Actionable information for 1000 oz bar investors
- Topic-specific Q&A sections

### Where to Buy (/where-to-buy-1000-oz-silver-bars)
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
   - Why 1000 oz bars have lowest premiums (0.5-2%)
   - Premium comparison across bar sizes
   - Total cost of ownership analysis
   - Premium recovery on resale

2. **Size Comparisons**
   - 1 oz vs 100 oz vs 1000 oz bars
   - Premium efficiency by size
   - Liquidity trade-offs
   - Capital requirement considerations

3. **Storage & Security**
   - Professional vault storage
   - Allocated vs unallocated programs
   - Weight and handling considerations (68-70 lbs per bar)
   - Insurance requirements

4. **Brand Comparisons**
   - COMEX/LBMA accreditation importance
   - Johnson Matthey, Asahi, KGHM, Heraeus
   - Resale value considerations

5. **Bid-Ask Spreads**
   - Spread calculation
   - Break-even analysis
   - Why 1000 oz bars have tighter spreads
   - Timing considerations

6. **Market Dynamics**
   - What moves silver prices
   - Industrial demand (solar, electronics)
   - Investment flows
   - COMEX and price discovery

## Data Notes

**Live Price Data:**
- 1000 oz silver bar prices and silver spot prices from Monex
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
- Guarantees about future silver prices or returns

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
