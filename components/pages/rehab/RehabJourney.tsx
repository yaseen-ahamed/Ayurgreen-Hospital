import React from "react";
import { ClipboardList, Activity, FileText, HeartHandshake, TrendingUp, Award } from "lucide-react";

const JOURNEY_STEPS = [
  {
    icon: <ClipboardList size={24} />,
    title: "1. Assessment",
    desc: "Comprehensive medical assessment by our multi-disciplinary panel.",
  },
  {
    icon: <Activity size={24} />,
    title: "2. Diagnosis",
    desc: "Pinpointing motor, sensory, and biological imbalance vectors.",
  },
  {
    icon: <FileText size={24} />,
    title: "3. Personalized Plan",
    desc: "Scheduling custom robotic runs and targeted Ayurvedic protocols.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "4. Therapy",
    desc: "Intensive, daily physical training and cellular purification treatments.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "5. Monitoring",
    desc: "Strict weekly tracking of physical and sensory progress data.",
  },
  {
    icon: <Award size={24} />,
    title: "6. Recovery",
    desc: "Achieving optimal independence and preparing a home transition plan.",
  },
];

export default function RehabJourney() {
  return (
    <section id="journey" className="ayur-section-large">
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">RECOVERY TIMELINE</span>
          <h2 className="ayur-section-title">Your Recovery Journey</h2>
          <p className="ayur-section-support">
            Our recovery path is a carefully structured, multi-phase clinical progression that guides patients
            smoothly from intake to dynamic independence.
          </p>
        </div>
        <div className="ayur-journey-timeline">
          {JOURNEY_STEPS.map((step, i) => (
            <div key={i} className="ayur-journey-step">
              <div className="ayur-journey-icon-circle">{step.icon}</div>
              <h4 className="ayur-journey-step-title">{step.title}</h4>
              <p className="ayur-journey-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
