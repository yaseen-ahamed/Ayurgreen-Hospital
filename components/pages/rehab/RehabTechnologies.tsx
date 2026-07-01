"use client";

import React from "react";
import {
  Activity, Bone, Brain, Accessibility, Stethoscope, Network, Zap, Dna,
  Scale, ShieldAlert, HeartPulse, Target, Flame, Sprout, Lightbulb, Heart,
  Hand, Bot, Leaf, Headset, Wind, Cpu, FlaskConical, Microscope, Waves,
  Sunset, Eye, Feather, BarChart, Siren, Pill, Globe, Tablet, LucideIcon
} from "lucide-react";
import type { TechnologiesData } from "@/data/rehab/types";
import { getTheme } from "@/data/rehab/themes";
import { GlowCard } from "@/components/ui/spotlight-card";

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
  slug: string;
}

// Maps slugs to closest GlowCard color hues
function getGlowColor(slug: string): 'blue' | 'purple' | 'green' | 'red' | 'orange' {
  const blueSlugs = ['spinal-cord-injury', 'cerebral-palsy', 'urology', 'respiratory-therapy', 'speech-therapy', 'hydro-therapy', 'dentistry'];
  const purpleSlugs = ['occupational-therapy', 'muscular-dystrophy', 'developmental-delay', 'autism', 'psychiatry', 'neuro-psychology', 'counseling', 'pediatrics', 'motor-neuron-diseases'];
  const greenSlugs = ['ayurveda', 'diet-nutrition', 'slimming-treatment', 'post-surgical-complications', 'psychological-problems', 'general-medicine', 'hemiplegia'];
  const redSlugs = ['stroke-rehab', 'sciatica', 'rheumatoid-arthritis', 'cardiology', 'pain-management'];
  
  if (blueSlugs.includes(slug)) return 'blue';
  if (purpleSlugs.includes(slug)) return 'purple';
  if (greenSlugs.includes(slug)) return 'green';
  if (redSlugs.includes(slug)) return 'red';
  return 'orange';
}

export default function RehabTechnologies({ technologies, slug }: RehabTechnologiesProps) {
  const theme = getTheme(slug);
  const glowColor = getGlowColor(slug);

  return (
    <section
      id="technologies"
      className="ayur-tech-outer ayur-dark-section"
      style={{
        "--theme-gradient": theme.gradient,
        "--theme-orb1": theme.orb1,
        "--theme-orb2": theme.orb2,
        "--theme-orb3": theme.orb3,
        "--theme-accent": theme.accent,
      } as React.CSSProperties}
    >
      {/* Ambient glow orbs */}
      <div className="ayur-dark-orb ayur-dark-orb-1" />
      <div className="ayur-dark-orb ayur-dark-orb-2" />
      <div className="ayur-dark-orb ayur-dark-orb-3" />

      <div className="ayur-container" style={{ position: "relative", zIndex: 2 }}>
        <div className="ayur-section-header">
          <span className="ayur-section-label ayur-dark-label">
            {technologies.sectionLabel}
          </span>
          <h2 className="ayur-section-title ayur-dark-title">
            {technologies.sectionTitle}
          </h2>
          <p className="ayur-section-support ayur-dark-support">
            {technologies.sectionSupport}
          </p>
        </div>
        <div className="ayur-tech-grid">
          {technologies.cards.map((card, i) => {
            const IconComponent = ICON_MAP[card.icon] ?? Activity;
            return (
              <GlowCard
                key={i}
                customSize
                enableTilt
                glowColor={glowColor}
                borderRadius={28}
                className="ayur-tech-card ayur-glass-card overflow-hidden"
              >
                <div className="ayur-tech-card-title-row">
                  <span className="ayur-tech-card-icon ayur-dark-icon">
                    <IconComponent size={24} />
                  </span>
                  <h3 className="ayur-tech-card-title ayur-dark-card-title">{card.title}</h3>
                </div>
                <p className="ayur-tech-card-desc ayur-dark-card-desc">{card.description}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
