"use client";

import React from "react";
import Link from "next/link";

export default function StrokeHero() {
  return (
    <div className="ayur-hero-wrapper">
      <div 
        className="ayur-hero-banner" 
        style={{ backgroundImage: `url('/Assets/AG Sub-pages Banner/Stroke.webp')` }}
      >
        <div className="ayur-hero-overlay"></div>
        <div className="ayur-container">
          <div className="ayur-hero-content">
            <div className="ayur-hero-breadcrumb">
              <Link href="/">Home</Link> &nbsp;&gt;&nbsp;
              <a href="#" style={{ cursor: "default", pointerEvents: "none", textDecoration: "none" } as React.CSSProperties}>Specialities</a> &nbsp;&gt;&nbsp;
              <span style={{ color: "#ffffff" }}>Stroke</span>
            </div>
            <span className="ayur-hero-label">Rehabilitation Program</span>
            <h1 className="main-title" style={{ color: "#ffffff" }}>Stroke Rehabilitation</h1>
            <p className="main-sub">
              A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "32px" }}>
              <Link href="/#consultation" className="main-cta">
                <span className="cta-text">Book Assessment</span> 
                <span className="arrow-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </span>
              </Link>
              <a 
                href="https://wa.me/918080808080" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="main-cta"
              >
                <span className="cta-text">WhatsApp</span>
                <span className="arrow-btn" style={{ background: "transparent", padding: 0, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <img 
                    src="/Assets/Whatsapp Icon.webp" 
                    alt="WhatsApp" 
                    style={{ width: "32px", height: "32px", objectFit: "contain", transform: "scale(1.5)" }} 
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
