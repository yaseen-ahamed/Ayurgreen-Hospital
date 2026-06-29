"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQData } from "@/data/rehab/types";

interface RehabFAQProps {
  faq: FAQData;
}

export default function RehabFAQ({ faq }: RehabFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="ayur-section-large" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="ayur-container">
        <div className="ayur-section-header">
          <span className="ayur-section-label">COMMON QUERIES</span>
          <h2 className="ayur-section-title">Frequently Asked Questions</h2>
          <p className="ayur-section-support">{faq.sectionSupport}</p>
        </div>
        <div className="ayur-faq-container">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className={`ayur-faq-item${openIndex === i ? " active" : ""}`}
            >
              <button
                className="ayur-faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  <Plus size={18} />
                </span>
              </button>
              <div className="ayur-faq-content">
                <div className="ayur-faq-content-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
