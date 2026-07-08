import React from "react";
import type { TreatmentsData } from "@/data/rehab/types";

interface RehabTreatmentsProps {
  treatments: TreatmentsData;
}

export default function RehabTreatments({ treatments }: RehabTreatmentsProps) {
  return (
    <section id="treatments" style={{ padding: "0 0 40px 0" }}>
      <div className="rehab-section-subtle">
        <div className="rehab-section-header" style={{ marginBottom: "40px" }}>
          <span className="ayur-section-label">{treatments.sectionLabel}</span>
          <h2 className="ayur-section-title" style={{ marginBottom: "14px" }}>{treatments.sectionTitle}</h2>
          <p className="rehab-section-support">{treatments.sectionSupport}</p>
        </div>
        <div className="rehab-treatments-grid">
          {treatments.steps.map((step, i) => (
            <div key={i} className={`rehab-card-vibrant rehab-color-${i % 6}`}>
              <div className="rehab-ripple" />
              <span className="rehab-step-pill">Step 0{i + 1}</span>
              <h3 className="rehab-card-title">{step.title}</h3>
              <p className="rehab-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

