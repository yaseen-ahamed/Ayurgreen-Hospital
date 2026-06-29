"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import StrokeHero from "./StrokeHero";
import DepartmentSidebar from "../pages/rehab/DepartmentSidebar";
import StrokeOverview from "./StrokeOverview";
import StrokeConditions from "./StrokeConditions";
import StrokeTreatments from "./StrokeTreatments";
import StrokeTechnologies from "./StrokeTechnologies";
import StrokeJourney from "./StrokeJourney";
import StrokeFAQ from "./StrokeFAQ";
import StrokeCTA from "./StrokeCTA";

export default function StrokeRehabClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Dynamically load main.js to attach global header triggers if they aren't already there
    import("../../main.js")
      .then(() => {
        const win = window as any;
        if (typeof win.initAyurgreen === "function") {
          win.initAyurgreen();
        }
      })
      .catch((err) => {
        console.error("Failed to load main.js in StrokeRehabClient:", err);
      });
  }, []);

  return (
    <div className="ayur-page-main">
      {/* Hero Section */}
      <StrokeHero />

      {/* Mobile Sidebar Toggle Button */}
      <div style={{ marginTop: "24px", marginBottom: 0, padding: "0 24px" }}>
        <button 
          className="mobile-sidebar-toggle" 
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={18} />
          <span>Explore Specialities</span>
        </button>
      </div>

      {/* Sidebar Overlay (Mobile Backdrop) */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} 
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div className="ayur-sidebar-container" style={{ padding: "40px 24px 80px 24px", boxSizing: "border-box", width: "100%" }}>
        <div className="ayur-page-body">
          {/* Sidebar Nav */}
          <DepartmentSidebar 
            activeSpecialityId="stroke" 
            isOpenMobile={sidebarOpen} 
            onItemClick={() => setSidebarOpen(false)} 
          />

          {/* Content sections */}
          <div className="ayur-content-col ayur-sidebar-content">
            <StrokeOverview />
            <StrokeConditions />
            <StrokeTreatments />
            <StrokeTechnologies />
            <StrokeJourney />
            <StrokeFAQ />
            <StrokeCTA />
          </div>
        </div>
      </div>
    </div>
  );
}
