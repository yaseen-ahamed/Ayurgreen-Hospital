"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import type { RehabPageData } from "@/data/rehab/types";

import RehabHero from "./RehabHero";
import DepartmentSidebar from "./DepartmentSidebar";
import RehabOverview from "./RehabOverview";
import RehabConditions from "./RehabConditions";
import RehabTreatments from "./RehabTreatments";
import RehabTechnologies from "./RehabTechnologies";
import RehabJourney from "./RehabJourney";
import RehabFAQ from "./RehabFAQ";
import RehabCTA from "./RehabCTA";

interface RehabPageClientProps {
  data: RehabPageData;
}

export default function RehabPageClient({ data }: RehabPageClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    import("../../../main.js")
      .then(() => {
        const win = window as any;
        if (typeof win.initAyurgreen === "function") {
          win.initAyurgreen();
        }
      })
      .catch((err) => {
        console.error("Failed to load main.js in RehabPageClient:", err);
      });
  }, []);

  return (
    <div className="ayur-page-main">
      {/* Hero */}
      <RehabHero hero={data.hero} />

      {/* Mobile Sidebar Toggle */}
      <div style={{ marginTop: "24px", marginBottom: 0, padding: "0 24px" }}>
        <button
          className="mobile-sidebar-toggle"
          onClick={() => setSidebarOpen(true)}
          aria-label="Explore Specialities"
        >
          <Menu size={18} />
          <span>Explore Specialities</span>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Page Body: Sidebar + Content */}
      <div
        className="ayur-sidebar-container"
        style={{ padding: "40px 24px 80px 24px", boxSizing: "border-box", width: "100%" }}
      >
        <div className="ayur-page-body">
          {/* Sidebar */}
          <DepartmentSidebar
            activeSpecialityId={data.sidebarId}
            isOpenMobile={sidebarOpen}
            onItemClick={() => setSidebarOpen(false)}
          />

          {/* Content Sections */}
          <div className="ayur-content-col ayur-sidebar-content">
            <RehabOverview overview={data.overview} />
            <RehabConditions conditions={data.conditions} slug={data.slug} />
            <RehabTreatments treatments={data.treatments} />
            <RehabTechnologies technologies={data.technologies} slug={data.slug} />
            <RehabJourney />
            <RehabFAQ faq={data.faq} />
            <RehabCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
