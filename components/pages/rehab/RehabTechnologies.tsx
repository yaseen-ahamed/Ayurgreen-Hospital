"use client";

import React from "react";
import {
  Activity, Bone, Brain, Accessibility, Stethoscope, Network, Zap, Dna,
  Scale, ShieldAlert, HeartPulse, Target, Flame, Sprout, Lightbulb, Heart,
  Hand, Bot, Leaf, Headset, Wind, Cpu, FlaskConical, Microscope, Waves,
  Sunset, Eye, Feather, BarChart, Siren, Pill, Globe, Tablet, LucideIcon
} from "lucide-react";
import type { TechnologiesData } from "@/data/rehab/types";

const ICON_MAP: Record<string, LucideIcon> = {
  activity: Activity, bone: Bone, brain: Brain, accessibility: Accessibility,
  stethoscope: Stethoscope, network: Network, zap: Zap, dna: Dna, scale: Scale,
  "shield-alert": ShieldAlert, "heart-pulse": HeartPulse, target: Target, flame: Flame,
  sprout: Sprout, lightbulb: Lightbulb, heart: Heart, hand: Hand, bot: Bot, leaf: Leaf,
  headset: Headset, wind: Wind, cpu: Cpu, "flask-conical": FlaskConical, microscope: Microscope,
  waves: Waves, sunset: Sunset, eye: Eye, feather: Feather, "bar-chart": BarChart,
  siren: Siren, pill: Pill, globe: Globe, tablet: Tablet,
};

interface RehabTechnologiesProps {
  technologies: TechnologiesData;
}

export default function RehabTechnologies({ technologies }: RehabTechnologiesProps) {
  return (
    <section id="technologies" className="ayur-tech-outer">
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label" style={{ color: "var(--primary-green)" }}>
            {technologies.sectionLabel}
          </span>
          <h2 className="ayur-section-title" style={{ color: "#0c1938" }}>
            {technologies.sectionTitle}
          </h2>
          <p className="ayur-section-support" style={{ color: "rgba(12, 25, 56, 0.85)" }}>
            {technologies.sectionSupport}
          </p>
        </div>
        <div className="ayur-tech-grid">
          {technologies.cards.map((card, i) => {
            const IconComponent = ICON_MAP[card.icon] ?? Activity;
            return (
              <div key={i} className="ayur-tech-card">
                <div className="ayur-tech-card-title-row">
                  <span className="ayur-tech-card-icon">
                    <IconComponent size={24} />
                  </span>
                  <h3 className="ayur-tech-card-title">{card.title}</h3>
                </div>
                <p className="ayur-tech-card-desc">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
