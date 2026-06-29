import React from "react";
import type { ConditionsData } from "@/data/rehab/types";

interface RehabConditionsProps {
  conditions: ConditionsData;
}

export default function RehabConditions({ conditions }: RehabConditionsProps) {
  return (
    <section
      id="conditions"
      className="ayur-section-medium"
      style={{ backgroundColor: "#FBFDFB", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">{conditions.sectionLabel}</span>
          <h2 className="ayur-section-title">{conditions.sectionTitle}</h2>
          <p className="ayur-section-support">{conditions.sectionSupport}</p>
        </div>
        <div className="ayur-conditions-grid">
          {conditions.cards.map((card, i) => (
            <div key={i} className="ayur-condition-card">
              <div className="ayur-condition-card-img-wrapper">
                <img
                  src={`/${card.image}`}
                  alt={card.alt ?? card.title}
                  className="ayur-condition-card-img"
                />
              </div>
              <div className="ayur-condition-card-content">
                <h4 className="ayur-condition-card-title">{card.title}</h4>
                <p className="ayur-condition-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
