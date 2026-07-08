"use client";

import React from "react";
import {
  Activity, Bone, Brain, Accessibility, Stethoscope, Network, Zap, Dna,
  Scale, ShieldAlert, HeartPulse, Target, Flame, Sprout, Lightbulb, Heart,
  Hand, Bot, Leaf, Headset, Wind, Cpu, FlaskConical, Microscope, Waves,
  Sunset, Eye, Feather, BarChart, Siren, Pill, Globe, Tablet, Ear, Mic, LucideIcon
} from "lucide-react";
import type { TechnologiesData } from "@/data/rehab/types";

const ICON_MAP: Record<string, LucideIcon> = {
  activity: Activity, bone: Bone, brain: Brain, accessibility: Accessibility,
  stethoscope: Stethoscope, network: Network, zap: Zap, dna: Dna, scale: Scale,
  "shield-alert": ShieldAlert, "heart-pulse": HeartPulse, target: Target, flame: Flame,
  sprout: Sprout, lightbulb: Lightbulb, heart: Heart, hand: Hand, bot: Bot, leaf: Leaf,
  headset: Headset, wind: Wind, cpu: Cpu, "flask-conical": FlaskConical, microscope: Microscope,
  waves: Waves, sunset: Sunset, eye: Eye, feather: Feather, "bar-chart": BarChart,
  siren: Siren, pill: Pill, globe: Globe, tablet: Tablet, ear: Ear, mic: Mic,
};

interface RehabTechnologiesProps {
  technologies: TechnologiesData;
  slug: string;
}

export default function RehabTechnologies({ technologies }: RehabTechnologiesProps) {
  return (
    <section id="technologies" style={{ padding: "0 0 40px 0" }}>
      <div className="rehab-section-header">
        <span className="ayur-section-label">{technologies.sectionLabel}</span>
        <h2 className="ayur-section-title" style={{ marginBottom: "14px" }}>{technologies.sectionTitle}</h2>
        <p className="rehab-section-support">{technologies.sectionSupport}</p>
      </div>
      <div className="rehab-tech-grid">
        {technologies.cards.map((card, i) => {
          const IconComponent = ICON_MAP[card.icon] ?? Activity;
          const isFirst = i === 0;
          return (
            <div key={i} className={`rehab-card-vibrant rehab-color-${i % 6}${isFirst ? " rehab-card-col2" : ""}`}>
              <div className="rehab-ripple" />
              <div className="rehab-icon-wrap">
                <IconComponent size={22} />
              </div>
              <h3 className="rehab-card-title">{card.title}</h3>
              <p className="rehab-card-desc">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

