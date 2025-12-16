import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources, getResourceCategories } from "@/data/resources";
import QASection from "@/components/QASection";
import { resourcesQA } from "@/data/qa-content";
import { fetchProductSpot } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "1 Kilo Gold Bar Resources & Educational Guides",
  description:
    "Comprehensive educational resources about 1 kilo gold bars covering premiums, storage, brand comparisons, market dynamics, and investment strategies for serious gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/resources`,
  },
  openGraph: {
    title: "1 Kilo Gold Bar Resources & Educational Guides",
    description:
      "Comprehensive educational resources about 1 kilo gold bars covering premiums, storage, brand comparisons, and investment strategies.",
    url: `${SITE_CONFIG.domain}/resources`,
  },
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ResourcesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const activeCategory = params.category || "all";
  const categories = getResourceCategories();
  
  // Fetch price data for dynamic FAQ tokens
  const priceData = await fetchProductSpot();

  // Filter resources based on selected category
  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter(
          (resource) =>
            resource.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "1 Kilo Gold Bar Resources & Educational Guides",
    description:
      "Comprehensive educational resources about 1 kilo gold bars covering premiums, storage, brand comparisons, and investment strategies.",
    url: `${SITE_CONFIG.domain}/resources`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: resources.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: resource.title,
        url: `${SITE_CONFIG.domain}/resources/${resource.slug}`,
      })),
    },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Pricing":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "Investment":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case "Security":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "Products":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "Market":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "History":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gold-text">Educational</span>
              <br />
              <span className="text-white">Resources</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              Deepen your understanding of 1 kilo gold bars and the broader 
              gold market with our comprehensive guides. Whether you&apos;re 
              evaluating kilo bars vs. smaller denominations, comparing refiner 
              brands, or planning storage, our resources provide the insights 
              you need. Check{" "}
              <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
                current gold prices
              </Link>
              , explore our{" "}
              <Link href="/where-to-buy-1-kilo-gold-bars" className="text-bullion-gold hover:underline">
                independent buying guide
              </Link>
              , or return to our{" "}
              <Link href="/" className="text-bullion-gold hover:underline">
                1 kilo gold bar overview
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 border-b border-bullion-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {/* All Topics Button */}
            <Link
              href="/resources"
              className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                activeCategory === "all"
                  ? "bg-bullion-gold text-black"
                  : "bg-bullion-gold/10 text-bullion-gold border border-bullion-gold/30 hover:bg-bullion-gold/20"
              }`}
            >
              All Topics
            </Link>

            {/* Category Buttons */}
            {categories.map((category) => {
              const categorySlug = category.toLowerCase();
              const isActive = activeCategory.toLowerCase() === categorySlug;

              return (
                <Link
                  key={category}
                  href={`/resources?category=${encodeURIComponent(categorySlug)}`}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
                    isActive
                      ? "bg-bullion-gold text-black"
                      : "bg-bullion-gold/10 text-bullion-gold border border-bullion-gold/30 hover:bg-bullion-gold/20"
                  }`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Show count when filtered */}
          {activeCategory !== "all" && (
            <p className="text-gray-400 text-sm mb-6">
              Showing {filteredResources.length} article{filteredResources.length !== 1 ? "s" : ""} in{" "}
              <span className="text-bullion-gold capitalize">{activeCategory}</span>
            </p>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredResources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="card p-5 md:p-6 group hover:border-bullion-gold/40 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-bullion-gold/20 flex items-center justify-center text-bullion-gold flex-shrink-0">
                    {getCategoryIcon(resource.category)}
                  </div>
                  <span className="text-sm text-bullion-gold font-medium">
                    {resource.category}
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-display font-semibold text-white mb-2 group-hover:text-bullion-gold transition-colors line-clamp-2">
                  {resource.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {resource.excerpt}
                </p>
                <div className="flex items-center text-bullion-gold text-sm font-medium mt-auto">
                  <span>Read Guide</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">
                No articles found in this category.
              </p>
              <Link
                href="/resources"
                className="text-bullion-gold hover:underline"
              >
                View all topics
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={resourcesQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Check <span className="gold-text">Gold Prices</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            View live{" "}
            <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
              gold pricing and market data
            </Link>{" "}
            to inform your investment decisions.
          </p>
          <Link href="/live-gold-prices" className="btn-primary">
            View Current Gold Prices
          </Link>
        </div>
      </section>
    </>
  );
}
