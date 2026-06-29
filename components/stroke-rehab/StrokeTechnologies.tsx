import React from "react";
import { Brain, Activity, Heart, Accessibility } from "lucide-react";

export default function StrokeTechnologies() {
  const techs = [
    {
      title: "Robotic Gait Trainer (G-EO System)",
      desc: "A sophisticated Swiss system that realistically simulates walking and stair climbing, helping stroke patients with severe mobility deficits regain their stride and walking confidence.",
      icon: Brain
    },
    {
      title: "Robotic Arm Trainer (Armotion)",
      desc: "Specifically designed for upper extremities, this robotic solution helps rebuild the skills needed for self-care and independence by targeting shoulder, elbow, and wrist coordination after stroke.",
      icon: Activity
    },
    {
      title: "Kerala Ayurvedic Neurotherapy",
      desc: "Time-tested organic formulations and specialized warm oil treatments (Shirodhara, Nasyam, Pizhichil) acting directly on the neurological system to stimulate recovery from within.",
      icon: Heart
    },
    {
      title: "Virtual Reality Cognitive Training",
      desc: "Immersive VR environments for cognitive rehabilitation — improving memory, attention, and decision-making while keeping patients engaged and motivated through recovery.",
      icon: Accessibility
    }
  ];

  return (
    <section id="technologies" className="ayur-tech-outer">
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label" style={{ color: "var(--primary-green)" }}>
            INTEGRATED INNOVATION
          </span>
          <h2 className="ayur-section-title" style={{ color: "#0c1938" }}>
            Clinical Suites &amp; Technology
          </h2>
          <p className="ayur-section-support" style={{ color: "rgba(12, 25, 56, 0.85)" }}>
            Harnessing the most advanced rehabilitation systems in India alongside authentic Ayurvedic healing.
          </p>
        </div>
        <div className="ayur-tech-grid">
          {techs.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <div key={idx} className="ayur-tech-card">
                <div className="ayur-tech-card-title-row">
                  <span className="ayur-tech-card-icon">
                    <IconComp size={24} />
                  </span>
                  <h3 className="ayur-tech-card-title">{tech.title}</h3>
                </div>
                <p className="ayur-tech-card-desc">{tech.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
