import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources, getResourceBySlug } from "@/data/resources";
import { getArticleContent } from "@/data/article-content";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import Container from "@/components/Container";
import { resourceQA } from "@/data/qa-content";
import { fetchProductSpot } from "@/lib/monexSpot";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.description,
    alternates: {
      canonical: `${SITE_CONFIG.canonicalDomain}/resources/${slug}`,
    },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE_CONFIG.domain}/resources/${slug}`,
      type: "article",
    },
  };
}

// Generate descriptive Monex anchor text for each article
function getMonexAnchorText(slug: string): string {
  const anchorTextMap: Record<string, string> = {
    "premiums-explained": "Monex gold market pricing information",
    "size-comparison": "Monex guide to investing in gold",
    "storage-options": "Monex gold investment knowledge base",
    "brand-differences": "Monex gold products overview",
    "liquidity-considerations": "Monex gold investment resources",
    "market-dynamics": "Monex live gold prices",
    "spreads-explained": "Monex gold price data",
    "authentication-guide": "Monex gold investing knowledge base",
    "institutional-vs-retail": "Monex gold investment guide",
    "portfolio-allocation": "Monex investing in gold resources",
    "first-time-buyers-guide": "Monex gold products and pricing",
    "tax-considerations": "Monex gold investment knowledge base",
  };
  return anchorTextMap[slug] || "Monex gold resources";
}

// Replace price tokens in content strings
function replacePriceTokens(text: string, kiloPrice: string): string {
  return text.replace(/\{\{KILO_PRICE\}\}/g, kiloPrice);
}

// Generate AI summary bullets based on resource content
function generateAISummaryBullets(slug: string, title: string): string[] {
  const summaryMap: Record<string, string[]> = {
    "premiums-explained": [
      "This article explains why 1 kilo gold bars have the lowest retail premiums",
      "Learn how premiums of 1.5-3% compare to smaller bar sizes",
      "Understand the manufacturing economics that drive kilo bar efficiency",
      "Discover strategies to maximize premium savings when purchasing",
      "Compare total cost of ownership across different gold bar formats",
    ],
    "size-comparison": [
      "This article compares 1 oz, 10 oz, and kilo gold bars in detail",
      "Learn the premium differences across bar size denominations",
      "Understand trade-offs between cost efficiency and liquidity by size",
      "Discover which bar size best fits different investment goals and capital levels",
      "Get guidance on building a mixed-size gold bar portfolio",
    ],
    "storage-options": [
      "This article covers storage solutions for high-value kilo gold bars",
      "Learn about professional vault storage and allocated programs",
      "Understand bank safe deposit box advantages and limitations",
      "Discover home storage requirements for substantial gold holdings",
      "Get guidance on insurance and security considerations",
    ],
    "brand-differences": [
      "This article compares major 1 kilo gold bar manufacturers",
      "Learn about PAMP Suisse, Valcambi, Argor-Heraeus, and Perth Mint",
      "Understand the importance of LBMA accreditation for kilo bars",
      "Discover security features and authentication methods by brand",
      "Compare how brand choice affects premiums and resale value",
    ],
    "liquidity-considerations": [
      "This article explains liquidity dynamics for 1 kilo gold bars",
      "Learn how kilo bar liquidity compares to smaller denominations",
      "Understand the partial liquidation challenge with large bars",
      "Discover strategies for efficient buying and selling",
      "Get guidance on documentation for smooth resale transactions",
    ],
    "market-dynamics": [
      "This article explains the forces that move gold prices",
      "Learn how interest rates and dollar strength affect gold values",
      "Understand the role of geopolitical events and safe-haven demand",
      "Discover how central bank activity influences the gold market",
      "Get context for interpreting gold price movements",
    ],
    "spreads-explained": [
      "This article explains bid-ask spreads on 1 kilo gold bars",
      "Learn why kilo bars have tighter spreads (1-2%) than smaller bars",
      "Understand how spreads affect your total cost of ownership",
      "Discover strategies to minimize spread impact on returns",
      "Calculate your break-even point including spread costs",
    ],
    "authentication-guide": [
      "This article covers authentication for high-value kilo gold bars",
      "Learn about security features on modern LBMA-accredited bars",
      "Understand professional testing methods like XRF analysis",
      "Discover documentation requirements for legitimate kilo bars",
      "Get guidance on avoiding counterfeits and red flags",
    ],
    "institutional-vs-retail": [
      "This article explains the institutional gold market for kilo bars",
      "Learn about LBMA accreditation and quality standards",
      "Understand how institutional infrastructure benefits retail investors",
      "Discover pricing differences between institutional and retail markets",
      "Get insights on leveraging institutional markets as a retail buyer",
    ],
    "portfolio-allocation": [
      "This article covers strategic allocation to 1 kilo gold bars",
      "Learn when kilo bars become appropriate for your portfolio",
      "Understand gold's role in portfolio diversification",
      "Discover mixed-size strategies for balancing efficiency and flexibility",
      "Get guidance on physical gold vs other gold investments",
    ],
    "first-time-buyers-guide": [
      "This article guides first-time buyers through the kilo bar purchase process",
      "Learn how to evaluate and select reputable dealers",
      "Understand payment methods, settlement timelines, and delivery logistics",
      "Discover why dealer pricing varies and how to compare options",
      "Get practical tips for documentation and building dealer relationships",
    ],
    "tax-considerations": [
      "This article provides a high-level overview of gold tax considerations",
      "Learn how physical gold is classified for federal tax purposes",
      "Understand capital gains basics and holding period implications",
      "Discover how state tax treatment varies across jurisdictions",
      "Get guidance on IRA ownership vs personal possession trade-offs",
    ],
  };

  return summaryMap[slug] || [
    `This article provides comprehensive coverage of ${title.toLowerCase()}`,
    "Learn key concepts and practical considerations for kilo gold bar investors",
    "Understand how this topic affects your gold investment strategy",
    "Get actionable guidance based on industry best practices",
    "Find answers to common questions in this area",
  ];
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const content = getArticleContent(slug);
  const qa = resourceQA[slug] || [];
  const aiSummaryBullets = generateAISummaryBullets(slug, resource.title);
  
  // Fetch price data for dynamic FAQ tokens and article content
  const priceData = await fetchProductSpot();
  const formattedKiloPrice = priceData 
    ? `$${Math.round(priceData.ask).toLocaleString("en-US")}` 
    : "$85,000";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    url: `${SITE_CONFIG.domain}/resources/${slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/resources/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <section className="pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <Container className="relative">
          {/* Breadcrumb row */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              href="/resources"
              className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Resources
            </Link>
            <span className="px-3 py-1 rounded-full bg-bullion-gold/20 text-bullion-gold text-sm font-medium">
              {resource.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            {resource.title}
          </h1>

          {/* AI Summary - placed after H1 */}
          <AISummary bullets={aiSummaryBullets} />
        </Container>
      </section>

      {/* Key Takeaways */}
      <section className="py-4 md:py-6 border-b border-bullion-gold/10">
        <Container>
          <div className="card p-5 md:p-6 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-lg md:text-xl font-display font-semibold text-bullion-gold mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start text-gray-300 text-sm md:text-base">
                  <span className="text-bullion-gold mr-2 mt-0.5">•</span>
                  <span>{replacePriceTokens(takeaway, formattedKiloPrice)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <article className="py-8 md:py-10">
        <Container>
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-300 leading-relaxed text-base md:text-lg"
                  >
                    {replacePriceTokens(paragraph, formattedKiloPrice)}
                  </p>
                ))}
                {section.subheading && (
                  <div className="space-y-3 pt-4">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-bullion-gold">
                      {section.subheading}
                    </h3>
                    {section.subcontent?.map((paragraph, sIndex) => (
                      <p
                        key={sIndex}
                        className="text-gray-300 leading-relaxed text-base md:text-lg"
                      >
                        {replacePriceTokens(paragraph, formattedKiloPrice)}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Internal Links */}
          <div className="mt-10 p-5 md:p-6 rounded-xl bg-bullion-darker/50 border border-bullion-gold/10">
            <p className="text-gray-400 mb-3 text-sm md:text-base">
              Continue learning about 1 kilo gold bars:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/live-gold-prices"
                className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
              >
                <span>View current gold prices</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/where-to-buy-1-kilo-gold-bars"
                className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
              >
                <span>Where to buy kilo gold bars</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
              >
                <span>Browse all resources</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Monex Link - Contextual external citation */}
          <div className="mt-5 p-5 md:p-6 rounded-xl bg-bullion-gold/5 border border-bullion-gold/20">
            <p className="text-gray-400 mb-2 text-sm md:text-base">
              For more detailed information and current pricing:
            </p>
            <a
              href={resource.monexLink}
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors font-medium"
            >
              <span>{getMonexAnchorText(slug)}</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </Container>
      </article>

      {/* Q&A Section - Topic Specific */}
      {qa.length > 0 && <QASection items={qa} priceData={priceData} />}

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Continue Your <span className="gold-text">Education</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
              Explore more{" "}
              <Link href="/resources" className="text-bullion-gold hover:underline">
                resources about kilo gold bars
              </Link>{" "}
              or check{" "}
              <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
                current market prices
              </Link>{" "}
              to inform your investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/live-gold-prices" className="btn-primary">
                View Gold Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                More Resources
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-12 md:py-16">
        <Container size="wide">
          <h2 className="text-xl md:text-2xl font-display font-semibold text-white mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {resources
              .filter((r) => r.slug !== slug)
              .slice(0, 3)
              .map((relatedResource) => (
                <Link
                  key={relatedResource.slug}
                  href={`/resources/${relatedResource.slug}`}
                  className="card p-5 group hover:border-bullion-gold/40 transition-all"
                >
                  <span className="text-xs text-bullion-gold font-medium">
                    {relatedResource.category}
                  </span>
                  <h3 className="text-base md:text-lg font-display font-semibold text-white mt-2 mb-2 group-hover:text-bullion-gold transition-colors line-clamp-2">
                    {relatedResource.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {relatedResource.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
