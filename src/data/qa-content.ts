import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$30,000" (ask price rounded to $100)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$28,000–$32,000" (ask ± 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$30,000+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$30,000+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the actual weight of a 1000 oz silver bar?",
    answer: "A 1000 oz silver bar weighs approximately 1000 troy ounces (with slight variations allowed by COMEX standards). This equates to roughly 68-70 pounds (31+ kilograms), making it one of the largest bar sizes traded in commodities markets. These are the bars used to settle COMEX silver futures contracts.",
  },
  {
    question: "Why do 1000 oz silver bars have lower premiums than smaller bars?",
    answer: "1000 oz bars have the lowest retail premiums (typically 0.5-2% over spot) because manufacturing costs are spread across substantially more silver content. Producing one 1000 oz bar is vastly more efficient than producing 1000 individual 1 oz bars. The per-ounce production, handling, and distribution costs decrease significantly with larger bar sizes.",
  },
  {
    question: "How much capital do I need to buy a 1000 oz silver bar?",
    answer: "At current silver prices, a single 1000 oz silver bar costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. This substantial capital requirement makes 1000 oz bars most suitable for high-net-worth individuals, institutions, and serious investors building significant silver positions.",
  },
  {
    question: "Are 1000 oz silver bars harder to sell than smaller bars?",
    answer: "1000 oz bars are less liquid than 1 oz or 100 oz bars because the buyer pool is smaller, as fewer individuals have {{LIQUIDITY_THRESHOLD}} to deploy at once. However, these bars are the standard for institutional trading and COMEX delivery, so established dealers maintain ready markets. Sales may take slightly longer but remain practical for patient sellers.",
  },
  {
    question: "How do I store a 1000 oz silver bar safely?",
    answer: "Given the substantial value ({{CAPITAL_REQUIREMENT_PLUS}}) and weight (68-70 lbs), most 1000 oz bar owners use professional vault storage with allocated segregation. Options include private vault facilities, dealer storage programs, or specialized precious metals depositories. Home storage requires significant security investment and is often impractical given the weight and value concentration.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and 1000 oz silver bar prices?",
    answer: "The 1000 oz bar price equals the spot price multiplied by 1000 troy ounces, plus a premium (typically 0.5-2%). The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This represents the lowest percentage premium of any common bar size.",
  },
  {
    question: "Why do 1000 oz bar premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Dealers with institutional connections may offer lower premiums. Brand differences also matter, as COMEX-approved bars from major refiners may trade differently than bars from lesser-known sources. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my 1000 oz bar investment?",
    answer: "The bid-ask spread on 1000 oz bars is typically tight for institutional-quality bars, around 1-2%. With a {{CAPITAL_REQUIREMENT}} bar, even a small spread represents meaningful dollars. Understanding spreads is important because your silver must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do 1000 oz bars have lower premiums than 100 oz bars?",
    answer: "Yes, 1000 oz bars consistently offer lower per-ounce premiums than 100 oz bars (which run 2-4% over spot). The premium savings are meaningful at scale. Purchasing a 1000 oz bar instead of equivalent smaller bars can save hundreds to thousands of dollars on a single purchase.",
  },
  {
    question: "When is the best time to buy 1000 oz silver bars based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (0.5-2% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand even on 1000 oz bars. For large purchases, some investors negotiate directly with dealers for volume pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your 1000 oz silver bar resources cover?",
    answer: "Our educational library covers all aspects of 1000 oz bar investing including: understanding premiums, size comparisons (1 oz vs 100 oz vs 1000 oz), storage requirements for high-value bars, brand comparisons (Johnson Matthey, Asahi, KGHM, etc.), silver market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "Are 1000 oz silver bars better than smaller bars?",
    answer: "Neither is universally better; each serves different investor needs. 1000 oz bars excel in premium efficiency and are ideal for building large positions at minimum cost. Smaller bars offer flexibility for partial liquidation. Many sophisticated investors combine sizes, using 1000 oz bars for core long-term holdings and smaller bars for flexibility.",
  },
  {
    question: "Which brands of 1000 oz silver bars are most recognized?",
    answer: "Top-tier COMEX/LBMA-accredited brands include Johnson Matthey, Asahi Refining, KGHM (Poland), Heraeus, and other approved refiners. These bars meet strict purity and weight standards for COMEX delivery. COMEX-approved bars are accepted globally and typically command better resale values.",
  },
  {
    question: "How do 1000 oz silver bars compare to silver ETFs?",
    answer: "1000 oz bars provide direct physical ownership with no counterparty risk, meaning you hold the actual metal. Silver ETFs offer convenience and easy trading but represent claims on silver held by third parties. For investors with substantial capital seeking tangible assets outside the financial system, 1000 oz bars provide direct ownership that ETFs cannot match.",
  },
  {
    question: "What should I look for when buying my first 1000 oz silver bar?",
    answer: "For first-time 1000 oz bar buyers: choose COMEX/LBMA-accredited refiners, verify the dealer's reputation thoroughly given the high value, compare premiums across multiple sources, ensure full documentation including weight certification and serial number, and plan your storage solution before purchasing.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a 1000 oz silver bar?",
      answer: "Typical premiums for 1000 oz silver bars from COMEX-approved refiners range from 0.5-2% over spot under normal market conditions. This is significantly lower than 1 oz bars (5-15%) or 100 oz bars (2-4%). During supply constraints, premiums can temporarily rise, but 1000 oz bars maintain the lowest premiums of any common size.",
    },
    {
      question: "How much can I save by buying 1000 oz bars instead of 1 oz bars?",
      answer: "The savings are substantial. Purchasing silver as 1000 individual 1 oz bars (10% average premium) costs significantly more than the same silver content as a 1000 oz bar (1% premium). On a typical purchase, you might save $2,000-$3,000 or more by choosing the larger format.",
    },
    {
      question: "Do I recover the premium when I sell my 1000 oz silver bar?",
      answer: "You typically don't recover the full premium on resale, but 1000 oz bars from recognized refiners have tighter bid-ask spreads than smaller bars. COMEX-approved products command better buyback prices. The combination of lower purchase premiums and tighter spreads makes 1000 oz bars economically efficient.",
    },
  ],
  "size-comparison": [
    {
      question: "How much money do I save buying a 1000 oz bar instead of equivalent smaller bars?",
      answer: "Premium savings are significant. If 1 oz bars carry 10% premiums and 1000 oz bars carry 1%, you save approximately 9% on the silver value. On a {{CAPITAL_REQUIREMENT}} purchase, that could be $2,000-$3,000 in savings. Over multiple purchases, savings can reach tens of thousands of dollars.",
    },
    {
      question: "When should I choose 1000 oz bars over smaller sizes?",
      answer: "Choose 1000 oz bars when you have substantial capital to deploy ({{LIQUIDITY_THRESHOLD}}), have a long investment horizon (5+ years), don't anticipate needing partial liquidation, want maximum premium efficiency, and have secure storage arranged. The premium savings justify the reduced flexibility for investors meeting these criteria.",
    },
    {
      question: "Can I mix 1000 oz bars with smaller bars in my portfolio?",
      answer: "Yes, many sophisticated investors combine sizes strategically. A common approach: use 1000 oz bars for core long-term holdings to maximize premium efficiency, then maintain smaller bars (100 oz or 1 oz) as a liquidity reserve for potential partial sales. This captures the benefits of both approaches.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for 1000 oz silver bars?",
      answer: "Given the {{CAPITAL_REQUIREMENT_PLUS}} value and 68-70 lb weight per bar, professional vault storage is strongly recommended. Look for allocated storage where your specific bars are segregated and identified. Major providers include Brink's, Loomis, and dealer-affiliated storage programs. Ensure the facility is fully insured and provides regular audits.",
    },
    {
      question: "Can I store 1000 oz silver bars at home?",
      answer: "Home storage is technically possible but presents significant challenges. At 68-70 pounds per bar, handling is difficult. The value concentration (several bars = hundreds of thousands of dollars) warrants serious security. Most 1000 oz bar owners find professional storage more practical and secure.",
    },
    {
      question: "What are the typical costs for professional 1000 oz bar storage?",
      answer: "Professional vault storage typically costs 0.3-0.5% of value annually for silver, sometimes lower for larger holdings. For a single 1000 oz bar, expect $100-$200 per year. Many facilities offer volume discounts. This cost is often offset by lower insurance expenses and eliminated home security investments.",
    },
  ],
  "brand-differences": [
    {
      question: "Which 1000 oz bar brands are most recognized globally?",
      answer: "COMEX/LBMA-accredited refiners produce the most recognized 1000 oz bars: Johnson Matthey, Asahi Refining, KGHM (Poland), Heraeus, and other approved refiners. These bars meet strict standards for COMEX futures delivery and are accepted by dealers worldwide.",
    },
    {
      question: "Do different 1000 oz bar brands have different premiums?",
      answer: "Premium differences between major COMEX-approved brands are typically minimal at the 1000 oz size. The key criterion is COMEX/LBMA accreditation. Generic or unaccredited bars may trade at discounts due to authentication concerns and limited liquidity.",
    },
    {
      question: "What security features do 1000 oz bars have?",
      answer: "1000 oz silver bars from major refiners include: unique serial numbers, weight stamps, refiner hallmarks, and purity markings (.999 fine typical). Each bar is individually weighed and documented. COMEX bars must meet specific weight tolerances and purity requirements.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a 1000 oz silver bar?",
      answer: "1000 oz bars from recognized COMEX refiners can typically be sold within 1-5 business days through established dealers or institutional channels. The process may take longer than selling 1 oz bars due to the larger transaction value. Having full documentation expedites the process.",
    },
    {
      question: "Will I get a worse price selling a 1000 oz bar than smaller bars?",
      answer: "Not necessarily. 1000 oz bars from COMEX-approved refiners often have tighter percentage spreads than smaller bars due to institutional demand. While the retail buyer pool is smaller, dealers and institutions actively trade these bars. Properly documented bars achieve competitive prices.",
    },
    {
      question: "What if I only need to liquidate part of my silver holdings?",
      answer: "This is the key liquidity trade-off with 1000 oz bars: you cannot partially liquidate a single bar. If you hold one 1000 oz bar and need $5,000, you must sell the entire bar ({{CAPITAL_REQUIREMENT_PLUS}}) or seek other liquidity sources. Investors anticipating partial liquidation needs often maintain some smaller bars alongside their 1000 oz holdings.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes silver prices to rise or fall?",
      answer: "Silver prices respond to multiple factors: industrial demand (solar panels, electronics), investment flows, dollar strength (inverse relationship), interest rates, and supply dynamics from mining. Unlike gold, silver has significant industrial applications that affect its price behavior.",
    },
    {
      question: "How do COMEX futures affect 1000 oz silver bar values?",
      answer: "The COMEX silver futures market uses 1000 oz bars for physical delivery. This creates direct price discovery for 1000 oz bars. When futures contracts settle in physical delivery, actual 1000 oz bars change hands. This institutional connection ensures efficient pricing.",
    },
    {
      question: "Do 1000 oz bar premiums change with market conditions?",
      answer: "Yes, though less dramatically than smaller bars. During retail demand surges, 1 oz bar premiums might spike significantly, while 1000 oz premiums remain more stable due to institutional supply. Premium stability is another advantage of the 1000 oz format.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for 1000 oz silver bars?",
      answer: "Under normal market conditions, spreads of 1-2% for 1000 oz bars from COMEX-accredited refiners represent competitive pricing. This is tighter than smaller bars and reflects the efficiency of the institutional silver market. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a 1000 oz bar?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 1% over spot and expect to receive 0.5% below spot when selling, you need 1.5% silver appreciation to break even. On a {{CAPITAL_REQUIREMENT}} bar, that's a few hundred dollars in silver price movement.",
    },
    {
      question: "Do spreads vary by 1000 oz bar brand?",
      answer: "Yes, COMEX-accredited brands from major refiners trade with tighter spreads due to instant recognition and institutional demand. Non-COMEX bars may face wider spreads or require additional authentication, potentially offsetting any lower purchase price.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a 1000 oz silver bar is authentic?",
      answer: "Key verification methods: confirm the bar matches stated weight (use a calibrated scale), verify serial number documentation, examine hallmarks and stamps for precision, check for proper COMEX/LBMA accreditation markings. For high-value purchases, consider professional XRF testing.",
    },
    {
      question: "What security features should I look for on 1000 oz bars?",
      answer: "Look for: precision-stamped weight and purity marks, unique serial number, refiner logo/hallmark, and proper documentation. COMEX-approved bars meet specific standards. Any inconsistency in weight, markings, or documentation should trigger professional verification.",
    },
    {
      question: "Should I have 1000 oz bars professionally authenticated?",
      answer: "For secondary market purchases or bars without complete documentation, professional authentication is worthwhile. XRF (X-ray fluorescence) testing verifies silver content non-destructively. The cost is trivial compared to the bar's value and provides peace of mind.",
    },
  ],
  "institutional-vs-retail": [
    {
      question: "What is COMEX accreditation and why does it matter for 1000 oz bars?",
      answer: "COMEX (Commodity Exchange) approves specific refiners to produce bars acceptable for futures contract delivery. COMEX-approved 1000 oz bars are accepted by institutions worldwide without additional verification. This creates efficient global markets and ensures your bars maintain maximum resale value.",
    },
    {
      question: "Are retail 1000 oz bars different from institutional silver?",
      answer: "1000 oz bars from COMEX-approved refiners are the same products used by institutions. There is no 'retail grade' distinction. The 1000 oz format IS the institutional standard. Retail investors buying COMEX bars own institutional-quality silver.",
    },
    {
      question: "Can I buy silver at institutional pricing?",
      answer: "Retail investors pay slightly higher premiums than large institutional buyers due to smaller order sizes and higher per-transaction costs. However, 1000 oz bars get you closest to institutional economics of any retail format. Volume purchases may further reduce premiums.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in 1000 oz silver bars?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier. The specific allocation to silver vs gold depends on your outlook and objectives. 1000 oz bars are appropriate when your silver allocation exceeds $25,000-$50,000, making premium efficiency valuable.",
    },
    {
      question: "Should I buy 1000 oz bars all at once or over time?",
      answer: "Both approaches have merit. Purchasing in one transaction captures premium efficiency. Dollar-cost averaging reduces timing risk but incurs multiple transaction costs. For 1000 oz bars, many investors save capital and make periodic larger purchases rather than frequent small ones.",
    },
    {
      question: "How do 1000 oz bars fit with other silver investments like ETFs?",
      answer: "1000 oz bars and silver ETFs serve different purposes. ETFs offer liquidity and easy trading but carry counterparty risk. 1000 oz bars provide direct ownership outside the financial system but are less liquid. Many investors use ETFs for trading and 1000 oz bars for core physical holdings.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a 1000 oz silver bar?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment (usually wire transfer), and arranging delivery or vault storage. Settlement usually spans five to ten business days.",
    },
    {
      question: "What payment methods are accepted for 1000 oz bar purchases?",
      answer: "Wire transfer is the standard payment method for 1000 oz bar transactions due to the value involved. Personal checks may be accepted but require clearing periods. Credit cards are rarely accepted for amounts this large. Some dealers accept cryptocurrency.",
    },
    {
      question: "Why do 1000 oz bar prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Dealers with institutional connections may offer lower premiums. Always compare prices from multiple sources before purchasing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical silver taxed when sold?",
      answer: "Physical silver is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates depend on holding period, income level, and current tax legislation. Consult a tax professional for guidance on your specific situation.",
    },
    {
      question: "Do I pay sales tax when buying a 1000 oz silver bar?",
      answer: "Sales tax treatment varies significantly by state. Some states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules before purchasing can affect your total cost.",
    },
    {
      question: "Can I hold 1000 oz silver bars in an IRA?",
      answer: "Certain IRAs can hold physical silver including qualifying 1000 oz bars. The silver must meet purity requirements and be held by an approved custodian. IRA ownership provides tax-advantaged growth but involves custodian fees and prevents personal possession while in the account.",
    },
  ],
};
