import React from "react";
import type { OverviewData } from "@/data/rehab/types";

interface RehabOverviewProps {
  overview: OverviewData;
}

export default function RehabOverview({ overview }: RehabOverviewProps) {
  return (
    <section id="intro" className="ayur-section-large">
      <div className="ayur-container">
        <div className="ayur-intro-row">
          <div>
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
          <div className="ayur-intro-img-frame">
            <img
              src={`/${overview.image}`}
              alt={overview.imageAlt}
              className="ayur-intro-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
