"use client";

import React from "react";
import Link from "next/link";
import type { HeroData } from "@/data/rehab/types";

interface RehabHeroProps {
  hero: HeroData;
}

export default function RehabHero({ hero }: RehabHeroProps) {
  return (
    <div className="ayur-hero-wrapper">
      <div
        className="ayur-hero-banner"
        style={{ backgroundImage: `url('/${hero.bannerImage}')` }}
      >
        <div className="ayur-hero-overlay"></div>
        <div className="ayur-container">
          <div className="ayur-hero-content">
            <div className="ayur-hero-breadcrumb">
              <Link href="/">Home</Link>&nbsp;&gt;&nbsp;
              <a
                href="#"
                style={{ cursor: "default", pointerEvents: "none", textDecoration: "none" } as React.CSSProperties}
              >
                {hero.breadcrumbCategory}
              </a>
              &nbsp;&gt;&nbsp;
              <span style={{ color: "#ffffff" }}>{hero.title}</span>
            </div>
            <span className="ayur-hero-label">{hero.label}</span>
            <h1 className="main-title" style={{ color: "#ffffff" }}>
              {hero.title}
            </h1>
            <p className="main-sub">{hero.subtitle}</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "32px" }}>
              <Link href="/#consultation" className="main-cta">
                <span className="cta-text">Book Assessment</span>
                <span className="arrow-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </Link>
              <a
                href="https://wa.me/918943055555"
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
