"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function StrokeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "When should stroke rehabilitation begin?",
      a: "Rehabilitation should begin as soon as medically stable, ideally within 24–72 hours of the stroke event. The first 6 months are the \"golden window\" where neuroplasticity is highest and the greatest functional gains are possible."
    },
    {
      q: "How long is a typical stroke rehabilitation stay?",
      a: "Most inpatient stays range from 21 to 45 days depending on stroke severity. A comprehensive assessment on arrival maps specific milestones, timelines, and discharge pathways for each patient."
    },
    {
      q: "Is robotic therapy safe for all stroke patients?",
      a: "Yes, robotic training is safe and is adjusted based on muscle strength, joint ranges, and fatigue levels. Every session is directly supervised by certified clinical engineers and physiotherapists to ensure patient safety."
    },
    {
      q: "Can patients with complete paralysis benefit?",
      a: "Yes. Even patients with severe hemiplegia benefit significantly. Robotic exoskeletons provide assisted movement that stimulates neuroplasticity even when voluntary muscle activity is absent, starting the rewiring process."
    },
    {
      q: "How do Ayurvedic therapies help after stroke?",
      a: "Ayurvedic treatments like Shirodhara, Nasyam, and Abhyanga stimulate dormant nerves, improve cerebral blood circulation, reduce muscle spasticity, and nourish the nervous system — complementing robotic therapy's physical training."
    },
    {
      q: "What is the daily therapy schedule like?",
      a: "A typical day includes robotic gait or arm training in the morning, followed by physiotherapy, speech therapy, or occupational therapy sessions, and relaxing Ayurvedic treatments in the afternoon."
    },
    {
      q: "Do you offer post-discharge support?",
      a: "Yes, we provide detailed home-exercise regimens, custom assistive device consultations, family training sessions, and online teleconsultation follow-ups to ensure patients maintain their functional gains at home."
    },
    {
      q: "How do I book a stroke rehabilitation consultation?",
      a: "You can book a consultation by submitting medical records online, messaging our coordinators via WhatsApp, or calling our helpline directly. We will arrange a prompt assessment and admission plan."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="ayur-section-large" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">COMMON QUERIES</span>
          <h2 className="ayur-section-title">Frequently Asked Questions</h2>
          <p className="ayur-section-support">
            Find answers to key details about our Stroke Rehabilitation program.
          </p>
        </div>
        <div className="ayur-faq-container">
          {faqs.map((faq, idx) => {
            const isActive = openIndex === idx;
            return (
              <div key={idx} className={`ayur-faq-item ${isActive ? "active" : ""}`}>
                <button 
                  className="ayur-faq-trigger" 
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isActive}
                >
                  <span>{faq.q}</span>
                  <span 
                    className="faq-icon" 
                    style={{ 
                      transform: isActive ? "rotate(45deg)" : "none", 
                      transition: "transform 0.3s ease" 
                    }}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <div 
                  className="ayur-faq-content" 
                  style={{ 
                    maxHeight: isActive ? "1000px" : "0px", 
                    transition: "max-height 0.3s ease-in-out",
                    overflow: "hidden"
                  }}
                >
                  <div className="ayur-faq-content-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
