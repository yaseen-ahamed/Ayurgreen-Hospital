import React from "react";
import { ClipboardList, Activity, FileText, HeartHandshake, TrendingUp, Award, LucideIcon } from "lucide-react";

interface JourneyStep {
  n: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    n: "01",
    Icon: ClipboardList,
    title: "1. Assessment",
    desc: "Comprehensive medical assessment by our multi-disciplinary panel.",
  },
  {
    n: "02",
    Icon: Activity,
    title: "2. Diagnosis",
    desc: "Pinpointing motor, sensory, and biological imbalance vectors.",
  },
  {
    n: "03",
    Icon: FileText,
    title: "3. Personalized Plan",
    desc: "Scheduling custom robotic runs and targeted Ayurvedic protocols.",
  },
  {
    n: "04",
    Icon: HeartHandshake,
    title: "4. Therapy",
    desc: "Intensive, daily physical training and cellular purification treatments.",
  },
  {
    n: "05",
    Icon: TrendingUp,
    title: "5. Monitoring",
    desc: "Strict weekly tracking of physical and sensory progress data.",
  },
  {
    n: "06",
    Icon: Award,
    title: "6. Recovery",
    desc: "Achieving optimal independence and preparing a home transition plan.",
  },
];

export default function RehabJourney() {
  return (
    <section id="journey" style={{ padding: "0 0 40px 0" }}>
      <div className="rehab-section-subtle">
        <div className="rehab-section-header" style={{ marginBottom: "40px" }}>
          <span className="ayur-section-label">RECOVERY TIMELINE</span>
          <h2 className="ayur-section-title" style={{ marginBottom: "14px" }}>Your Recovery Journey</h2>
          <p className="rehab-section-support">
            Our recovery path is a carefully structured, multi-phase clinical progression that guides patients
            smoothly from intake to dynamic independence.
          </p>
        </div>
        <div className="rehab-journey-grid">
          {JOURNEY_STEPS.map((step, i) => (
            <div key={i} className={`rehab-card-vibrant rehab-color-${i % 6}`}>
              <div className="rehab-ripple" />
              <span className="rehab-step-pill">Step {step.n}</span>
              <div className="rehab-icon-wrap">
                <step.Icon size={22} />
              </div>
              <h3 className="rehab-card-title">{step.title}</h3>
              <p className="rehab-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

