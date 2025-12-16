"use client";

import { useEffect, useState } from "react";

export function SilverPriceChart() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const containerId = "475a1e90-7ecc-4a36-a85b-ef15136924bb";
    const container = document.getElementById(containerId);
    if (container && !container.hasChildNodes()) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://widget.nfusionsolutions.com/custom/monex/script/chart/1/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/${containerId}?selected=silver`;
      script.onerror = () => setHasError(true);
      document.body.appendChild(script);
    }
  }, []);

  if (hasError) {
    return (
      <div className="widget-container p-4">
        <div className="text-center py-8 text-gray-500">
          <p>Chart temporarily unavailable.</p>
          <a
            href="https://www.monex.com/silver-prices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-600 hover:underline text-sm"
          >
            View silver prices at Monex →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="widget-container p-4">
      <div
        id="475a1e90-7ecc-4a36-a85b-ef15136924bb"
        style={{ width: "100%", minHeight: "400px" }}
      />
      <div className="mt-4 text-center">
        <em>
          <small className="text-gray-500">
            Prices provided by{" "}
            <a
              href="https://www.monex.com/liveprices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-700 hover:underline"
            >
              Monex
            </a>
          </small>
        </em>
      </div>
    </div>
  );
}

export function SilverPriceTable() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const containerId = "797295b4-1ec7-4732-ae8c-d37569df73c3";
    const container = document.getElementById(containerId);
    if (container && !container.hasChildNodes()) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://widget.nfusionsolutions.com/custom/monex/script/table/2/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/${containerId}`;
      script.onerror = () => setHasError(true);
      document.body.appendChild(script);
    }
  }, []);

  if (hasError) {
    return (
      <div className="widget-container p-4">
        <div className="text-center py-8 text-gray-500">
          <p>Price table temporarily unavailable.</p>
          <a
            href="https://www.monex.com/liveprices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-600 hover:underline text-sm"
          >
            View live prices at Monex →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="widget-container p-4">
      <div
        id="797295b4-1ec7-4732-ae8c-d37569df73c3"
        style={{ width: "100%", minHeight: "300px" }}
      />
      <div className="mt-4 text-center">
        <em>
          <small className="text-gray-500">
            Prices provided by{" "}
            <a
              href="https://www.monex.com/liveprices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-700 hover:underline"
            >
              Monex
            </a>
          </small>
        </em>
      </div>
    </div>
  );
}

// Legacy exports for backward compatibility
export const GoldPriceChart = SilverPriceChart;
export const GoldPriceTable = SilverPriceTable;
