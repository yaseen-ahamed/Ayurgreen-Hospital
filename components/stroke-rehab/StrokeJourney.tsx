import React from "react";
import {
  ClipboardList,
  Activity,
  FileText,
  HeartHandshake,
  TrendingUp,
  Award
} from "lucide-react";

export default function StrokeJourney() {
  const steps = [
    {
      num: "1",
      title: "1. Stroke Assessment",
      desc: "Comprehensive neurological evaluation by our specialist panel to map deficits and baselines.",
      icon: ClipboardList
    },
    {
      num: "2",
      title: "2. Medical Stabilization",
      desc: "Ensuring vital parameters are stable and secondary complications are prevented before therapy begins.",
      icon: Activity
    },
    {
      num: "3",
      title: "3. Personalized Protocol",
      desc: "Custom robotic sessions, Ayurvedic nerve therapies, and speech training scheduled by our multidisciplinary team.",
      icon: FileText
    },
    {
      num: "4",
      title: "4. Intensive Therapy",
      desc: "Daily robotic gait training, Ayurvedic treatments, speech therapy, and occupational training sessions.",
      icon: HeartHandshake
    },
    {
      num: "5",
      title: "5. Progress Monitoring",
      desc: "Weekly functional assessments tracking motor, speech, cognitive, and emotional improvements.",
      icon: TrendingUp
    },
    {
      num: "6",
      title: "6. Discharge & Home Plan",
      desc: "Achieving functional independence with a tailored home exercise program and online follow-up support.",
      icon: Award
    }
  ];

  return (
    <section id="journey" className="ayur-section-large">
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">RECOVERY TIMELINE</span>
          <h2 className="ayur-section-title">Your Stroke Recovery Journey</h2>
          <p className="ayur-section-support">
            A carefully structured, multi-phase clinical progression that guides patients smoothly from acute care to dynamic independence.
          </p>
        </div>
        <div className="ayur-journey-timeline">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="ayur-journey-step">
                <div className="ayur-journey-icon-circle">
                  <IconComp size={24} />
                </div>
                <h4 className="ayur-journey-step-title">{step.title}</h4>
                <p className="ayur-journey-step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
