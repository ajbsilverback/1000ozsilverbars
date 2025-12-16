import { fetchProductSpot, ProductSpotSummary } from "@/lib/monexSpot";

interface CapitalRequirementsCardProps {
  /** Optional pre-fetched price data to avoid duplicate API calls */
  priceData?: ProductSpotSummary | null;
}

/**
 * Server Component - Displays the approximate capital required to purchase a 1000 oz silver bar.
 * 
 * Can receive pre-fetched price data or will fetch its own if not provided.
 * NO polling, NO intervals - renders ONCE per page load only.
 */
export default async function CapitalRequirementsCard({ priceData }: CapitalRequirementsCardProps = {}) {
  // Use provided data or fetch if not available
  const data = priceData !== undefined ? priceData : await fetchProductSpot();

  // Round to nearest $100 for display
  const roundToHundred = (value: number): string => {
    const rounded = Math.round(value / 100) * 100;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rounded);
  };

  // Check if we have valid data
  const hasValidPrice = data !== null && data.ask > 0;

  return (
    <div className="card p-8 max-w-sm">
      <h3 className="text-xl font-display font-semibold text-navy-700 mb-4 text-center">
        Capital Requirements
      </h3>
      <p className="text-gray-600 text-sm text-center mb-6">
        {hasValidPrice
          ? "Based on current 1000 oz silver bar ask price:"
          : "To purchase a single 1000 oz silver bar:"}
      </p>
      <div className="text-center py-6 rounded-lg bg-navy-50 border border-navy-100">
        {hasValidPrice ? (
          <>
            <span className="text-4xl font-display font-bold text-navy-700">
              ≈ {roundToHundred(data.ask)}
            </span>
            <p className="text-gray-500 text-sm mt-2">per 1000 oz bar</p>
          </>
        ) : (
          <>
            <span className="text-xl font-display font-medium text-gray-500">
              Market pricing unavailable
            </span>
            <p className="text-gray-400 text-sm mt-2">Please check back later</p>
          </>
        )}
      </div>
      <p className="text-gray-400 text-xs text-center mt-4">
        Prices vary with spot silver and dealer premiums
      </p>
    </div>
  );
}
