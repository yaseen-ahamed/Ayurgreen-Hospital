import React from "react";
import { 
  Activity, Bone, Brain, Accessibility, Stethoscope, Network, Zap, Dna, 
  Scale, ShieldAlert, HeartPulse, Target, Flame, Sprout, Lightbulb, Heart,
  Ear, Wind, Mic, HelpCircle, LucideIcon
} from "lucide-react";
import type { ConditionsData } from "@/data/rehab/types";

interface RehabConditionsProps {
  conditions: ConditionsData;
  slug: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  ear: Ear, hearing: Ear, deaf: Ear, tinnitus: Ear, vertigo: Ear,
  throat: Mic, voice: Mic, speech: Mic, swallowing: Mic, dysphagia: Mic,
  stroke: Activity, hemiplegia: Activity, spinal: Bone, brain: Brain, head: Brain,
  cerebral: Brain, parkinson: Zap, mnd: Network, motor: Network, nerve: Network,
  neurological: Brain, paraplegia: Accessibility, quadriplegia: Accessibility,
  disc: Bone, spine: Bone, sciatica: Zap, orthopedics: Bone, joint: Bone,
  arthritis: Flame, osteoarthritis: Flame, rheumatoid: Flame, muscular: Dna,
  myopathy: Dna, dystrophy: Dna, pain: HeartPulse,
  child: Sprout, pediatric: Sprout, developmental: Sprout, delay: Sprout,
  autism: Heart, psychiatry: Brain, psychological: Lightbulb, counseling: Lightbulb,
  diet: Scale, nutrition: Scale, obesity: Scale, slimming: Scale,
  lungs: Wind, respiratory: Wind, breathing: Wind,
};

function getIconForTitle(title: string): LucideIcon {
  const t = title.toLowerCase();
  for (const [key, icon] of Object.entries(ICON_MAP)) {
    if (t.includes(key)) return icon;
  }
  return HeartPulse;
}

export default function RehabConditions({ conditions }: RehabConditionsProps) {
  return (
    <section id="conditions" style={{ padding: "64px 0 40px 0", borderTop: "1px solid var(--border)" }}>
      <div className="rehab-section-header">
        <span className="ayur-section-label">{conditions.sectionLabel}</span>
        <h2 className="ayur-section-title" style={{ marginBottom: "14px" }}>{conditions.sectionTitle}</h2>
        <p className="rehab-section-support">{conditions.sectionSupport}</p>
      </div>

      <div className="rehab-conditions-grid">
        {conditions.cards.map((card, i) => {
          const IconComp = getIconForTitle(card.title);
          return (
            <div key={i} className={`rehab-card-vibrant rehab-color-${i % 6}`}>
              <div className="rehab-ripple" />
              <div className="rehab-icon-wrap">
                <IconComp size={22} />
              </div>
              <h3 className="rehab-card-title">{card.title}</h3>
              <p className="rehab-card-desc">{card.description}</p>
            </div>
          );
        })}
      </div>

      {/* Metrics strip */}
      <div className="rehab-metrics-row">
        {[
          { num: "25+", lbl: "Years Excellence" },
          { num: "54+", lbl: "Countries Served" },
          { num: "10K+", lbl: "Lives Transformed" },
          { num: "24/7", lbl: "Emergency Care" },
        ].map((m) => (
          <div key={m.lbl} className="rehab-metric-item">
            <div className="rehab-metric-num">{m.num}</div>
            <div className="rehab-metric-lbl">{m.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

