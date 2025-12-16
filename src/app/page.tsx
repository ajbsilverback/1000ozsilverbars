import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import CapitalRequirementsCard from "@/components/CapitalRequirementsCard";
import { homeQA } from "@/data/qa-content";
import { fetchProductSpot, formatUSD } from "@/lib/monexSpot";

export default async function HomePage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.brandName} - Your Guide to 1 Kilo Gold Bars`,
    description:
      "Comprehensive educational resource about 1 kilo gold bars, the preferred choice for serious investors seeking substantial gold positions with the lowest premiums per ounce.",
    url: SITE_CONFIG.domain,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "1 Kilo Gold Bars",
    description:
      "One kilogram (32.1507 troy ounces) gold bullion bars, offering the lowest premiums per ounce for serious precious metals investors.",
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.brandName,
    },
    category: "Gold Bars",
    material: "Gold",
    weight: {
      "@type": "QuantitativeValue",
      value: 1,
      unitCode: "KGM",
      unitText: "kilogram",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <section className="relative gold-bar-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-bullion-gold/10 border border-bullion-gold/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-bullion-gold mr-3 animate-pulse" />
                <span className="text-bullion-gold text-sm font-medium">
                  32.15 Troy Ounces of Pure Gold
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
                <span className="gold-text">1 Kilo Gold Bars</span>
                <br />
                <span className="text-white">
                  Maximum Value. Lowest Premiums.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-prose">
                Discover why 1 kilogram gold bars are the preferred choice for 
                serious investors and institutions seeking the lowest premiums 
                per ounce and substantial gold positions. Learn{" "}
                <Link href="/where-to-buy-1-kilo-gold-bars" className="text-bullion-gold hover:underline">
                  where to buy 1 kilo gold bars
                </Link>{" "}
                in our independent buying guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/live-gold-prices" className="btn-primary">
                  View Current Gold Prices
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link href="/resources" className="btn-secondary">
                  Explore Educational Library
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <Image
                src="/1-kilo-gold-bar-hero.png"
                alt="1 kilo gold bar"
                width={500}
                height={500}
                className="max-w-sm w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Gold Price Section */}
      <section className="pt-4 pb-10 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              <span className="gold-text">Live Gold Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Track real-time 1 kilo gold bar prices with live market data updated on page load.
            </p>
          </div>
          <LiveGbozSpotCard />
        </div>
      </section>

      {/* Why 1 Kilo Gold Bars Section */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why <span className="gold-text">1 Kilo Gold Bars</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The 1 kilogram gold bar represents the optimal balance of 
              premium efficiency and practical ownership for serious investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Lowest Premiums
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Kilo bars command the lowest retail premiums of any commonly 
                traded bar size, typically just 1.5-3% over spot price. Compared 
                to 1 oz bars (3-8% premium), you get more gold for your money. 
                Over a substantial position, these savings compound significantly.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Institutional Quality
              </h3>
              <p className="text-gray-400 leading-relaxed">
                The kilo bar is the standard for institutional gold trading 
                globally. LBMA-accredited refiners like PAMP Suisse, Valcambi, 
                Argor-Heraeus, and Perth Mint produce kilo bars to exacting 
                standards, ensuring worldwide acceptance and liquidity.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Storage Efficiency
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A single kilo bar stores the equivalent value of 32+ individual 
                1 oz bars in one compact unit. This dramatically simplifies 
                storage, reduces handling, and often lowers vault fees at 
                professional storage facilities that charge per-item.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys Kilo Gold Bars */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Who Buys <span className="gold-text">1 Kilo Gold Bars</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Kilo bars serve investors with substantial capital seeking 
                maximum efficiency in their gold holdings.
              </p>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      High-Net-Worth Individuals
                    </h3>
                    <p className="text-gray-400">
                      Investors with $100,000+ allocated to precious metals 
                      maximize their buying power with kilo bars, saving 
                      thousands in premiums compared to smaller denominations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Family Offices & Trusts
                    </h3>
                    <p className="text-gray-400">
                      Multi-generational wealth managers favor kilo bars for 
                      their premium efficiency and streamlined estate transfer. 
                      A few bars represent substantial value in compact form.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Long-Term Holders
                    </h3>
                    <p className="text-gray-400">
                      Investors with 10+ year time horizons prioritize acquisition 
                      cost over flexibility. The lower premiums on kilo bars 
                      compound into significant value over decades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CapitalRequirementsCard priceData={priceData} />
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Comparing <span className="gold-text">Bar Sizes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding how 1 kilo gold bars compare to smaller denominations 
              helps you choose the right size for your investment goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bullion-gold/30">
                  <th className="text-left py-4 px-6 text-bullion-gold font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    1 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    10 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-bullion-gold font-display">
                    1 Kilo Bar
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Premium Over Spot</td>
                  <td className="py-4 px-6 text-center">3-8%</td>
                  <td className="py-4 px-6 text-center">2-4%</td>
                  <td className="py-4 px-6 text-center text-green-400">
                    1.5-3% (Lowest)
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Entry Cost</td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round((priceData.ask / SITE_CONFIG.troyOunces) * 1.03).toLocaleString("en-US")}</>
                    ) : (
                      "~$2,700"
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round((priceData.ask / SITE_CONFIG.troyOunces) * 10 * 1.01).toLocaleString("en-US")}</>
                    ) : (
                      "~$27,000"
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round(priceData.ask).toLocaleString("en-US")}</>
                    ) : (
                      "~$87,000"
                    )}
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Divisibility</td>
                  <td className="py-4 px-6 text-center">★★★★★</td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                  <td className="py-4 px-6 text-center">★★☆☆☆</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Storage Efficiency</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Better</td>
                  <td className="py-4 px-6 text-center text-green-400">Best</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Institutional Acceptance</td>
                  <td className="py-4 px-6 text-center">★★★★☆</td>
                  <td className="py-4 px-6 text-center">★★★★☆</td>
                  <td className="py-4 px-6 text-center text-green-400">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center">Flexibility</td>
                  <td className="py-4 px-6 text-center">Balance</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">
                    Maximum Value
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Important <span className="gold-text">Considerations</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              While kilo bars offer the best premiums, they require careful 
              planning around liquidity, storage, and capital commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Liquidity Trade-offs
              </h3>
              <p className="text-gray-400 mb-4">
                Kilo bars are less liquid than smaller denominations. While 
                established dealers maintain ready markets, the buyer pool 
                is smaller than for 1 oz bars. Selling may take longer and 
                require connecting with specialized dealers.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> If you 
                anticipate needing to liquidate portions of your holdings, 
                smaller bars may be more practical despite higher premiums.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                All-or-Nothing Sales
              </h3>
              <p className="text-gray-400 mb-4">
                Unlike holding multiple small bars, you cannot partially 
                liquidate a kilo bar. When you sell, you&apos;re converting 
                approximately {priceData ? `$${Math.round(priceData.ask).toLocaleString("en-US")}` : "$85,000"}+ to cash at once. This may exceed 
                your actual needs or create tax timing challenges.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> Some 
                investors combine kilo bars for core holdings with smaller 
                bars for flexibility.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Storage Requirements
              </h3>
              <p className="text-gray-400 mb-4">
                A kilo bar weighs 2.2 pounds and requires secure storage 
                capable of protecting substantial value. Professional vault 
                storage, while adding costs, often makes sense for holdings 
                of this magnitude.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> Vault 
                storage fees are often based on value, meaning kilo bars 
                may have similar storage costs to equivalent smaller holdings.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Authentication Importance
              </h3>
              <p className="text-gray-400 mb-4">
                Given the high value, buy only from established dealers 
                and choose bars from LBMA-accredited refiners with full 
                documentation. Counterfeit risk increases with bar value, 
                making provenance critical.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> Premium 
                brands like PAMP, Valcambi, and Perth Mint include security 
                features and assay certificates that aid authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore{" "}
            <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
              current gold prices
            </Link>
            , dive into our{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              educational library
            </Link>
            , and discover whether 1 kilo gold bars are right for your 
            investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/live-gold-prices" className="btn-primary">
              View Current Gold Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Explore Educational Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
