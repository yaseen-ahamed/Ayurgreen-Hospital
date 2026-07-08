import React from "react";
import type { OverviewData } from "@/data/rehab/types";

interface RehabOverviewProps {
  overview: OverviewData;
}

export default function RehabOverview({ overview }: RehabOverviewProps) {
  return (
    <section id="intro" className="ayur-section-large" style={{ padding: "0 0 40px 0" }}>
      <div className="ayur-container" style={{ display: "block" }}>
        
        {/* Float image right (must be defined first in DOM to float next to text) */}
        <div className="ayur-intro-img-frame ayur-overview-img-float">
          <img
            src={`/${overview.image}`}
            alt={overview.imageAlt}
            className="ayur-intro-img"
          />
        </div>

        {/* Text block wraps naturally */}
        <div style={{ display: "block" }}>
          <span className="ayur-section-label">{overview.sectionLabel}</span>
          <h2 className="ayur-section-title" style={{ marginBottom: "24px", fontSize: "28px" }}>
            {overview.title}
          </h2>
          {overview.paragraphs.map((p, i) => (
            <p key={i} style={{ marginBottom: "16px" }}>
              {p}
            </p>
          ))}
        </div>

        <div style={{ clear: "both" }}></div>
      </div>
    </section>
  );
}
