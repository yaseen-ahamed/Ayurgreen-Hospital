import React from "react";
import type { TreatmentsData } from "@/data/rehab/types";

interface RehabTreatmentsProps {
  treatments: TreatmentsData;
}

export default function RehabTreatments({ treatments }: RehabTreatmentsProps) {
  return (
    <section id="treatments" className="ayur-section-large">
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">{treatments.sectionLabel}</span>
          <h2 className="ayur-section-title">{treatments.sectionTitle}</h2>
          <p className="ayur-section-support">{treatments.sectionSupport}</p>
        </div>
        <div className="ayur-treatments-timeline" style={{ position: "relative" }}>
          {treatments.steps.map((step, i) => (
            <div key={i} className="ayur-timeline-item">
              <div className="ayur-timeline-col-img">
                <img src={`/${step.image}`} alt={step.alt ?? step.title} />
              </div>
              <div className="ayur-timeline-col-content">
                <div className="ayur-timeline-badge">{i + 1}</div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14.5px", lineHeight: "1.6" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
