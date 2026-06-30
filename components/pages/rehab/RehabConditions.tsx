"use client";

import React from "react";
import type { ConditionsData } from "@/data/rehab/types";
import { getTheme } from "@/data/rehab/themes";
import { GlowCard } from "@/components/ui/spotlight-card";

interface RehabConditionsProps {
  conditions: ConditionsData;
  slug: string;
}

// Maps slugs to closest GlowCard color hues
function getGlowColor(slug: string): 'blue' | 'purple' | 'green' | 'red' | 'orange' {
  const blueSlugs = ['spinal-cord-injury', 'cerebral-palsy', 'urology', 'respiratory-therapy', 'modern-medicine', 'speech-therapy', 'hydro-therapy', 'dentistry'];
  const purpleSlugs = ['occupational-therapy', 'muscular-dystrophy', 'developmental-delay', 'autism', 'psychiatry', 'neuro-psychology', 'counseling', 'pediatrics', 'motor-neuron-diseases'];
  const greenSlugs = ['ayurveda', 'diet-nutrition', 'slimming-treatment', 'post-surgical-complications', 'psychological-problems', 'general-medicine', 'hemiplegia'];
  const redSlugs = ['stroke-rehab', 'sciatica', 'rheumatoid-arthritis', 'cardiology', 'pain-management'];
  
  if (blueSlugs.includes(slug)) return 'blue';
  if (purpleSlugs.includes(slug)) return 'purple';
  if (greenSlugs.includes(slug)) return 'green';
  if (redSlugs.includes(slug)) return 'red';
  return 'orange';
}

export default function RehabConditions({ conditions, slug }: RehabConditionsProps) {
  const theme = getTheme(slug);
  const glowColor = getGlowColor(slug);

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
            <GlowCard
              key={i}
              customSize
              enableTilt
              glowColor={glowColor}
              borderRadius={28}
              className="ayur-condition-card ayur-condition-card--dark overflow-hidden"
            >
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
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
