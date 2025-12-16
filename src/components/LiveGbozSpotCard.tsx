import Link from "next/link";
import { fetchProductSpot, formatUSD, formatChange, formatTimestamp } from "@/lib/monexSpot";

type LiveGbozSpotCardProps = {
  showCta?: boolean;
};

/**
 * Server Component - Fetches 1000 oz silver bar price ONCE per page load
 * 
 * ABSOLUTELY NO setInterval, useEffect, or client-side polling.
 * This renders ONCE per page load and never refreshes again.
 */
export default async function LiveGbozSpotCard({ showCta = true }: LiveGbozSpotCardProps) {
  const data = await fetchProductSpot();

  // Error state - if data === null
  if (data === null) {
    return (
      <div className="max-w-3xl mx-auto rounded-xl border border-silver-200 shadow-lg p-6 sm:p-10 bg-white">
        <p className="text-gray-500 text-center text-lg">
          Live pricing is temporarily unavailable.
        </p>
      </div>
    );
  }

  const isPositive = data.change >= 0;
  const isNeutral = data.change === 0;

  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-silver-200 shadow-lg p-6 sm:p-10 bg-white space-y-6">
      {/* Header with live indicator */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900">
          Live 1000 oz Silver Bar Price
        </h2>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-gray-500 font-medium">Live</span>
        </div>
      </div>

      {/* Main Price Display with navy accent */}
      <div className="relative text-center py-6">
        {/* Subtle navy gradient streak behind price */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-50 via-navy-100 to-navy-50 rounded-lg" />
        
        <div className="relative">
          <p className="text-lg text-gray-500 mb-2">Current Ask Price</p>
          <p className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-navy-700">
            {formatUSD(data.ask)}
          </p>
          <p className="text-lg text-gray-500 mt-2">per 1000 oz bar</p>
        </div>
      </div>

      {/* Change indicator */}
      <div className="flex justify-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
          isNeutral
            ? "bg-gray-100 border border-gray-200"
            : isPositive 
              ? "bg-emerald-50 border border-emerald-200" 
              : "bg-red-50 border border-red-200"
        }`}>
          {!isNeutral && (
            <svg 
              className={`w-5 h-5 ${isPositive ? "text-emerald-600" : "text-red-600 rotate-180"}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          )}
          <span className={`text-lg font-semibold ${
            isNeutral 
              ? "text-gray-600" 
              : isPositive 
                ? "text-emerald-700" 
                : "text-red-700"
          }`}>
            {formatChange(data.change, data.changePercent)}
          </span>
        </div>
      </div>

      {/* Bid/Ask row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Bid</p>
          <p className="text-xl font-semibold text-gray-700">{formatUSD(data.bid)}</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-navy-50 border border-navy-100">
          <p className="text-sm text-navy-600 uppercase tracking-wide mb-1">Ask</p>
          <p className="text-xl font-semibold text-navy-700">{formatUSD(data.ask)}</p>
        </div>
      </div>

      {/* Market Stats - OHLC + Previous Close */}
      <div className="space-y-3">
        <p className="text-sm text-gray-500 uppercase tracking-wide text-center">Market Stats</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-md bg-gray-50 border border-gray-100 px-4 py-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Open</p>
            <p className="text-sm md:text-base font-semibold text-gray-700">
              {data.open > 0 ? formatUSD(data.open) : "—"}
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 px-4 py-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">High</p>
            <p className="text-sm md:text-base font-semibold text-emerald-600">
              {data.high > 0 ? formatUSD(data.high) : "—"}
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 px-4 py-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Low</p>
            <p className="text-sm md:text-base font-semibold text-red-600">
              {data.low > 0 ? formatUSD(data.low) : "—"}
            </p>
          </div>
          <div className="rounded-md bg-gray-50 border border-gray-100 px-4 py-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Prev Close</p>
            <p className="text-sm md:text-base font-semibold text-gray-700">
              {data.previousClose > 0 ? formatUSD(data.previousClose) : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <p className="text-sm text-gray-500 text-center">
        As of: {formatTimestamp(data.timestamp)}
      </p>

      {/* CTA Button - only shown when showCta is true */}
      {showCta && (
        <div className="text-center pt-2">
          <Link 
            href="/live-silver-prices" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-50 border border-navy-200 text-navy-700 font-medium hover:bg-navy-100 hover:border-navy-300 transition-colors"
          >
            <span>View Live Silver Prices &amp; Charts</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      {/* Attribution */}
      <p className="text-xs text-gray-400 text-center pt-4 border-t border-silver-100">
        Prices provided by{" "}
        <a
          href="https://www.monex.com/liveprices/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-600 hover:text-navy-700 hover:underline"
        >
          Monex
        </a>
        {" "}• Updated on page load
      </p>
    </div>
  );
}
