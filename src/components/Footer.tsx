import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bullion-darker border-t border-bullion-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-black font-bold text-sm">1kg</span>
              </div>
              <span className="text-xl font-display font-semibold gold-text">
                {SITE_CONFIG.brandName}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted educational resource for {SITE_CONFIG.primaryProduct}. 
              Helping serious investors understand 32.15 troy ounce gold bars 
              with the lowest premiums per ounce.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-bullion-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/live-gold-prices"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  Gold Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-bullion-gold font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/where-to-buy-1-kilo-gold-bars"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  Where to Buy 1 Kilo Gold Bars
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/premiums-explained"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  Understanding Premiums
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/size-comparison"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  Size Comparison Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/storage-options"
                  className="text-gray-400 hover:text-bullion-gold transition-colors text-sm"
                >
                  Storage Options
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-bullion-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Educational content only. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
