import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$132,500" (ask price rounded to $100)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$126,000–$139,000" (ask ± 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$132,500+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$132,500+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the actual weight of a 1 kilo gold bar?",
    answer: "A 1 kilo gold bar weighs exactly 1,000 grams or 32.1507 troy ounces. This makes it one of the largest bar sizes commonly available to retail investors, containing over 32 times the gold of a standard 1 oz bar.",
  },
  {
    question: "Why do 1 kilo gold bars have lower premiums than smaller bars?",
    answer: "Kilo bars have the lowest retail premiums (typically 1.5-3% over spot) because manufacturing costs are spread across more gold content. Producing one kilo bar is more efficient than producing 32 individual 1 oz bars. The per-ounce production, handling, and distribution costs decrease significantly with larger bar sizes.",
  },
  {
    question: "How much capital do I need to buy a 1 kilo gold bar?",
    answer: "At current gold prices, a single 1 kilo gold bar costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. This substantial capital requirement makes kilo bars most suitable for high-net-worth individuals, family offices, and serious investors building significant gold positions.",
  },
  {
    question: "Are 1 kilo gold bars harder to sell than smaller bars?",
    answer: "Kilo bars are less liquid than 1 oz or 10 oz bars because the buyer pool is smaller, as fewer individuals have {{LIQUIDITY_THRESHOLD}} to deploy at once. However, established dealers maintain ready markets for kilo bars from recognized refiners, and LBMA-accredited bars are accepted worldwide. Sales may take slightly longer but remain practical.",
  },
  {
    question: "How do I store a 1 kilo gold bar safely?",
    answer: "Given the substantial value ({{CAPITAL_REQUIREMENT_PLUS}}), most kilo bar owners use professional vault storage with allocated segregation. Options include bank safe deposit boxes, private vault facilities, or dealer storage programs. Home storage requires significant security investment. Professional storage often makes economic sense for holdings of this magnitude.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and 1 kilo gold bar prices?",
    answer: "The kilo bar price equals the spot price multiplied by 32.1507 troy ounces, plus a premium (typically 1.5-3%). The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This represents the lowest percentage premium of any common bar size.",
  },
  {
    question: "Why do kilo bar premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Brand differences also matter, as PAMP Suisse or Valcambi bars may carry slightly higher premiums than lesser-known refiners. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my kilo bar investment?",
    answer: "The bid-ask spread on kilo bars is typically 1-2% for major refiner products, tighter than smaller bars. With a {{CAPITAL_REQUIREMENT}} bar, a 1.5% spread represents a meaningful amount. Understanding spreads is important because your gold must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do kilo bars have lower premiums than 10 oz bars?",
    answer: "Yes, kilo bars consistently offer lower per-ounce premiums than 10 oz bars (which run 2-4% over spot). The premium savings are meaningful at scale. Purchasing a kilo bar instead of equivalent 1 oz bars can save $1,500-$2,500 on a single purchase. Over time, these savings compound significantly.",
  },
  {
    question: "When is the best time to buy 1 kilo gold bars based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (1.5-3% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 5%+ even on kilo bars. For large purchases, some investors negotiate directly with dealers for volume pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your 1 kilo gold bar resources cover?",
    answer: "Our educational library covers all aspects of kilo bar investing including: understanding premiums, size comparisons (1 oz vs 10 oz vs kilo), storage requirements for high-value bars, brand comparisons (PAMP, Valcambi, Perth, Argor-Heraeus), gold market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "Are 1 kilo gold bars better than smaller bars?",
    answer: "Neither is universally better; each serves different investor needs. Kilo bars excel in premium efficiency and are ideal for building large positions at minimum cost. Smaller bars offer flexibility for partial liquidation. Many sophisticated investors combine sizes, using kilo bars for core long-term holdings and smaller bars for flexibility.",
  },
  {
    question: "Which brands of 1 kilo gold bars are most recognized?",
    answer: "Top-tier LBMA-accredited brands include PAMP Suisse, Valcambi, Argor-Heraeus, Perth Mint, and Heraeus. These refiners produce bars meeting .9999 fine gold purity standards with sophisticated security features. LBMA-accredited bars are accepted globally and typically command better resale values.",
  },
  {
    question: "How do 1 kilo gold bars compare to gold ETFs?",
    answer: "Kilo bars provide direct physical ownership with no counterparty risk, meaning you hold the actual metal. Gold ETFs offer convenience and easy trading but represent claims on gold held by third parties. For investors with substantial capital seeking tangible assets outside the financial system, kilo bars provide direct ownership that ETFs cannot match.",
  },
  {
    question: "What should I look for when buying my first 1 kilo gold bar?",
    answer: "For first-time kilo bar buyers: choose LBMA-accredited refiners (PAMP, Valcambi, Perth, Argor-Heraeus), verify the dealer's reputation thoroughly given the high value, compare premiums across multiple sources, ensure full documentation including assay certificate and serial number, and plan your storage solution before purchasing.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a 1 kilo gold bar?",
      answer: "Typical premiums for kilo gold bars from LBMA-accredited refiners range from 1.5-3% over spot under normal market conditions. This is significantly lower than 1 oz bars (3-8%) or 10 oz bars (2-4%). During supply constraints, premiums can temporarily rise to 4-5%, but kilo bars maintain the lowest premiums of any common size.",
    },
    {
      question: "How much can I save by buying kilo bars instead of 1 oz bars?",
      answer: "The savings are substantial. Purchasing gold as 32 individual 1 oz bars (5% average premium) costs significantly more than the same gold content as a kilo bar (2% premium), a savings of roughly $1,500-$2,500 per bar. For investors building significant positions, these savings compound with each purchase.",
    },
    {
      question: "Do I recover the premium when I sell my kilo gold bar?",
      answer: "You typically don't recover the full premium on resale, but kilo bars from recognized refiners have tighter bid-ask spreads (1-2%) than smaller bars. LBMA-accredited products from PAMP, Valcambi, or Perth Mint command better buyback prices. The combination of lower purchase premiums and tighter spreads makes kilo bars economically efficient.",
    },
  ],
  "size-comparison": [
    {
      question: "How much money do I save buying a kilo bar instead of equivalent smaller bars?",
      answer: "Premium savings are significant. If 1 oz bars carry 5% premiums and kilo bars carry 2%, you save approximately 3% on the gold value, about $1,500-$2,500 on a {{CAPITAL_REQUIREMENT}} purchase. Over multiple purchases building a substantial position, savings can reach tens of thousands of dollars compared to buying only 1 oz bars.",
    },
    {
      question: "When should I choose kilo bars over smaller sizes?",
      answer: "Choose kilo bars when you have substantial capital to deploy ({{LIQUIDITY_THRESHOLD}}), have a long investment horizon (5+ years), don't anticipate needing partial liquidation, want maximum premium efficiency, and have secure storage arranged. The premium savings justify the reduced flexibility for investors meeting these criteria.",
    },
    {
      question: "Can I mix kilo bars with smaller bars in my portfolio?",
      answer: "Yes, many sophisticated investors combine sizes strategically. A common approach: use kilo bars for core long-term holdings to maximize premium efficiency, then maintain smaller bars (10 oz or 1 oz) as a liquidity reserve for potential partial sales. This captures the benefits of both approaches.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for 1 kilo gold bars?",
      answer: "Given the {{CAPITAL_REQUIREMENT_PLUS}} value per bar, professional vault storage is strongly recommended. Look for allocated storage where your specific bars are segregated and identified. Major providers include Brink's, Loomis, and dealer-affiliated storage programs. Ensure the facility is fully insured and provides regular audits.",
    },
    {
      question: "Can I store kilo gold bars at home?",
      answer: "Home storage is possible but requires significant security investment: a high-quality safe (UL TL-30 rated minimum), potentially bolted to concrete, with comprehensive homeowner's insurance riders. Given that a few bars represent several hundred thousand dollars, the cost-benefit analysis often favors professional storage.",
    },
    {
      question: "What are the typical costs for professional kilo bar storage?",
      answer: "Professional vault storage typically costs 0.5-1% of value annually, though rates vary by provider and quantity stored. For a single kilo bar, expect $300-$800 per year. Many facilities offer lower per-bar rates for larger holdings. This cost is often offset by lower insurance expenses and eliminated home security investments.",
    },
  ],
  "brand-differences": [
    {
      question: "Which kilo bar brands are most recognized globally?",
      answer: "LBMA-accredited refiners produce the most recognized kilo bars: PAMP Suisse and Valcambi (Switzerland), Argor-Heraeus (Switzerland), Perth Mint (Australia), Heraeus (Germany), and Royal Canadian Mint. These brands are accepted by dealers worldwide and typically command the best resale prices.",
    },
    {
      question: "Do different kilo bar brands have different premiums?",
      answer: "Yes, there are slight premium differences. PAMP Suisse kilo bars with their Lady Fortuna design often command 0.5-1% higher premiums than generic LBMA bars. However, at the kilo size, brand premium differences are smaller than with 1 oz bars. The key is choosing LBMA-accredited products for maximum liquidity.",
    },
    {
      question: "What security features do kilo bars have?",
      answer: "Modern kilo bars from major refiners include: unique serial numbers, assay certificates, precision weight stamps, and refiner hallmarks. PAMP's Veriscan technology allows smartphone verification. Perth Mint bars include tamper-evident packaging. These features help authenticate bars and maintain resale value.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a 1 kilo gold bar?",
      answer: "Kilo bars from recognized LBMA refiners can typically be sold within 1-3 business days through established dealers. The process may take slightly longer than selling 1 oz bars due to the smaller buyer pool and larger transaction value. Having full documentation (assay certificate, purchase records) expedites the process.",
    },
    {
      question: "Will I get a worse price selling a kilo bar than smaller bars?",
      answer: "Not necessarily. In fact, kilo bars often have tighter bid-ask spreads (1-2%) than smaller bars (3-5%). While the buyer pool is smaller, institutional demand and dealer inventory needs create competitive markets. LBMA-accredited bars from major refiners consistently achieve strong buyback prices.",
    },
    {
      question: "What if I only need to liquidate part of my gold holdings?",
      answer: "This is the key liquidity trade-off with kilo bars: you cannot partially liquidate a single bar. If you hold one kilo bar and need $20,000, you must sell the entire bar ({{CAPITAL_REQUIREMENT_PLUS}}) or seek other liquidity sources. Investors anticipating partial liquidation needs often maintain some smaller bars alongside their kilo holdings.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes gold prices to rise or fall?",
      answer: "Gold prices respond to multiple factors: interest rates (higher rates typically pressure gold), dollar strength (inverse relationship), inflation expectations (gold as hedge), geopolitical uncertainty (safe haven demand), central bank buying/selling, and investment flows. No single factor dominates; price reflects the constantly shifting balance.",
    },
    {
      question: "How do Federal Reserve decisions affect kilo gold bar values?",
      answer: "Fed policy significantly influences gold through interest rates and inflation expectations. Rate hikes increase gold's opportunity cost, typically pressuring prices. Rate cuts or quantitative easing tend to support gold. Kilo bar values move with spot prices, so Fed policy affects all gold holdings equally regardless of bar size.",
    },
    {
      question: "Do kilo bar premiums change with market conditions?",
      answer: "Yes, though less dramatically than smaller bars. During demand surges, 1 oz bar premiums might spike to 10%+, while kilo premiums might only expand to 4-5%. Kilo bar supply is more stable because institutional inventory is substantial. Premium stability is another advantage of the kilo format.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for 1 kilo gold bars?",
      answer: "Under normal market conditions, spreads of 1-2% for kilo bars from LBMA-accredited refiners represent competitive pricing. This is tighter than 1 oz bars (3-5%) and reflects the efficiency of the kilo bar market. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a kilo bar?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 2% over spot and expect to receive 1% below spot when selling, you need 3% gold appreciation to break even. On a {{CAPITAL_REQUIREMENT}} kilo bar, that is roughly $2,000-$4,000 in gold price movement, more achievable than the 7-8% break-even typical of 1 oz bars.",
    },
    {
      question: "Do spreads vary by kilo bar brand?",
      answer: "Yes, LBMA-accredited brands from major refiners (PAMP, Valcambi, Perth) trade with tighter spreads due to instant recognition and ready dealer markets. Lesser-known or generic bars may face wider spreads, potentially offsetting their lower purchase premiums. For kilo purchases, brand quality matters.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a 1 kilo gold bar is authentic?",
      answer: "Key verification methods: confirm the bar matches stated weight (1,000g ± tolerance), verify serial number with the refiner if possible, check assay certificate matches the bar, examine hallmarks and stamps for precision, use PAMP Veriscan or similar technology if available. For high-value purchases, consider professional XRF testing.",
    },
    {
      question: "What security features should I look for on kilo bars?",
      answer: "Look for: precision-stamped weight and purity marks, unique serial number, refiner logo/hallmark, assay certificate with matching details, and tamper-evident packaging when new. Premium refiners include features like micro-engraving and holographic elements. Documentation should accompany every legitimate kilo bar.",
    },
    {
      question: "Should I have kilo bars professionally authenticated?",
      answer: "For secondary market purchases or bars without complete documentation, professional authentication is worthwhile. XRF (X-ray fluorescence) testing and ultrasonic testing can verify purity and detect counterfeits without damaging the bar. The ~$50-100 cost is trivial compared to the bar's value and provides peace of mind.",
    },
  ],
  "institutional-vs-retail": [
    {
      question: "What is LBMA accreditation and why does it matter for kilo bars?",
      answer: "The London Bullion Market Association (LBMA) accredits refiners meeting strict quality standards. LBMA-accredited kilo bars are accepted by banks, institutions, and dealers worldwide without additional verification. This creates efficient global markets and ensures your bars maintain maximum resale value.",
    },
    {
      question: "Are retail kilo bars different from institutional gold?",
      answer: "Kilo bars from LBMA-accredited refiners are the same quality used by institutions. There is no 'retail grade' distinction. The kilo format is actually the standard for institutional trading in Asia and many markets. Retail investors buying LBMA kilo bars own institutional-quality gold.",
    },
    {
      question: "Can I buy gold at institutional pricing?",
      answer: "Retail investors pay slightly higher premiums than large institutional buyers due to smaller order sizes and higher per-transaction costs. However, kilo bars get you closer to institutional economics than any smaller format. Volume purchases or dealer relationships can further reduce premiums.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in kilo gold bars?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. The specific allocation depends on your risk tolerance, investment horizon, and overall financial situation. Kilo bars are appropriate when your gold allocation exceeds $50,000-$100,000, making premium efficiency valuable.",
    },
    {
      question: "Should I buy kilo bars all at once or over time?",
      answer: "Both approaches have merit. Purchasing in one transaction captures premium efficiency, as you pay one set of transaction costs. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple premiums. For kilo bars specifically, many investors save capital and make periodic larger purchases rather than frequent small ones.",
    },
    {
      question: "How do kilo bars fit with other gold investments like ETFs?",
      answer: "Kilo bars and gold ETFs serve different purposes. ETFs offer liquidity and easy trading but carry counterparty risk. Kilo bars provide direct ownership and wealth outside the financial system but are less liquid. Many investors use ETFs for tactical trading and kilo bars for long-term core holdings they intend to hold for years.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a 1 kilo gold bar?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment (usually wire transfer), and receiving insured delivery. The entire process from order to delivery usually spans five to ten business days depending on payment method and shipping.",
    },
    {
      question: "What payment methods are accepted for kilo bar purchases?",
      answer: "Wire transfer is the standard payment method for kilo bar transactions due to the high value involved. Personal checks may be accepted but require clearing periods of five to ten days. Credit cards are rarely accepted for amounts this large due to chargeback risks and processing limits. Some dealers accept cryptocurrency.",
    },
    {
      question: "Why do kilo bar prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Volume dealers may offer lower premiums due to operational efficiency. Some dealers charge more but provide enhanced services or broader product selection. Always compare prices from multiple sources before purchasing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical gold taxed when sold?",
      answer: "Physical gold is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. State taxes add another layer of complexity. Consult a tax professional for guidance on your specific situation.",
    },
    {
      question: "Do I pay sales tax when buying a kilo gold bar?",
      answer: "Sales tax treatment varies significantly by state. Some states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules before purchasing can affect your total cost. A tax professional can clarify your state's current treatment.",
    },
    {
      question: "Can I hold kilo gold bars in an IRA?",
      answer: "Certain IRAs, often called Precious Metals IRAs or Gold IRAs, can hold physical gold including qualifying kilo bars. The gold must meet purity requirements and be held by an approved custodian. IRA ownership provides tax-advantaged growth but involves custodian fees and prevents personal possession while in the account.",
    },
  ],
};
