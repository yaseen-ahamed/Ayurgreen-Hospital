import React from "react";
import type { ConditionsData } from "@/data/rehab/types";
import { getTheme } from "@/data/rehab/themes";

interface RehabConditionsProps {
  conditions: ConditionsData;
  slug: string;
}

export default function RehabConditions({ conditions, slug }: RehabConditionsProps) {
  const theme = getTheme(slug);

  return (
    <section
      id="conditions"
      className="ayur-section-medium ayur-dark-section"
      style={{
        "--theme-gradient": theme.gradient,
        "--theme-orb1": theme.orb1,
        "--theme-orb2": theme.orb2,
        "--theme-orb3": theme.orb3,
        "--theme-accent": theme.accent,
        borderRadius: "36px",
        overflow: "hidden",
        marginBottom: "40px",
      } as React.CSSProperties}
    >
      {/* Ambient glow orbs */}
      <div className="ayur-dark-orb ayur-dark-orb-1" />
      <div className="ayur-dark-orb ayur-dark-orb-2" />
      <div className="ayur-dark-orb ayur-dark-orb-3" />

      <div className="ayur-container" style={{ position: "relative", zIndex: 2 }}>
        <div className="ayur-section-header">
          <span className="ayur-section-label ayur-dark-label">{conditions.sectionLabel}</span>
          <h2 className="ayur-section-title ayur-dark-title">{conditions.sectionTitle}</h2>
          <p className="ayur-section-support ayur-dark-support">{conditions.sectionSupport}</p>
        </div>
        <div className="ayur-conditions-grid">
          {conditions.cards.map((card, i) => (
            <div key={i} className="ayur-condition-card ayur-condition-card--dark">
              <div className="ayur-condition-card-img-wrapper">
                <img
                  src={`/${card.image}`}
                  alt={card.alt ?? card.title}
                  className="ayur-condition-card-img"
                />
                {/* gradient overlay to blend image into dark card */}
                <div className="ayur-condition-card-img-fade" />
              </div>
              <div className="ayur-condition-card-content">
                <h4 className="ayur-condition-card-title ayur-dark-card-title">{card.title}</h4>
                <p className="ayur-condition-card-desc ayur-dark-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
