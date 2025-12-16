"use client";

import { useEffect } from "react";

export function GoldPriceChart() {
  useEffect(() => {
    const containerId = "475a1e90-7ecc-4a36-a85b-ef15136924bb";
    const container = document.getElementById(containerId);
    if (container && !container.hasChildNodes()) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://widget.nfusionsolutions.com/custom/monex/script/chart/1/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/${containerId}?selected=gold`;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="widget-container p-4">
      <div
        id="475a1e90-7ecc-4a36-a85b-ef15136924bb"
        style={{ width: "100%", minHeight: "400px" }}
      />
      <div className="mt-4 text-center">
        <em>
          <small className="text-gray-400">
            Prices provided by{" "}
            <a
              href="https://www.monex.com/liveprices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bullion-gold hover:underline"
            >
              Monex
            </a>
          </small>
        </em>
      </div>
    </div>
  );
}

export function GoldPriceTable() {
  useEffect(() => {
    const containerId = "797295b4-1ec7-4732-ae8c-d37569df73c3";
    const container = document.getElementById(containerId);
    if (container && !container.hasChildNodes()) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://widget.nfusionsolutions.com/custom/monex/script/table/2/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/${containerId}`;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="widget-container p-4">
      <div
        id="797295b4-1ec7-4732-ae8c-d37569df73c3"
        style={{ width: "100%", minHeight: "300px" }}
      />
      <div className="mt-4 text-center">
        <em>
          <small className="text-gray-400">
            Prices provided by{" "}
            <a
              href="https://www.monex.com/liveprices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bullion-gold hover:underline"
            >
              Monex
            </a>
          </small>
        </em>
      </div>
    </div>
  );
}



