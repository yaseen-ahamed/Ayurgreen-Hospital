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
    <section id="faq" style={{ padding: "0 0 64px 0", borderTop: "1px solid var(--border)" }}>
      <div className="rehab-section-header" style={{ paddingTop: "64px" }}>
        <span className="ayur-section-label">COMMON QUERIES</span>
        <h2 className="ayur-section-title" style={{ marginBottom: "14px" }}>Frequently Asked Questions</h2>
        <p className="rehab-section-support">{faq.sectionSupport}</p>
      </div>
      <div className="rehab-faq-list">
        {faq.items.map((item, i) => (
          <div
            key={i}
            className={`rehab-faq-item${openIndex === i ? " rehab-open" : ""}`}
          >
            <button
              className="rehab-faq-trigger"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{item.question}</span>
              <span className="rehab-faq-icon">
                <Plus size={15} />
              </span>
            </button>
            <div
              className="rehab-faq-content"
              style={{ maxHeight: openIndex === i ? "400px" : "0px" }}
            >
              <div className="rehab-faq-content-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

