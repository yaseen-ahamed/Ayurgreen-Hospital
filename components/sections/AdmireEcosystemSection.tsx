"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function AdmireEcosystemSection() {

  return (
    <>
<section id="admire-ecosystem-section" aria-label="ADMIRE Ecosystem">
            {/*  Background Blobs for soft color depths  */}
            <div className="admire-bg-blob admire-blob-1"></div>
            <div className="admire-bg-blob admire-blob-2"></div>
            <div className="admire-bg-blob admire-blob-3"></div>

            <div className="admire-container">

                {/*  Section Header  */}
                <div className="admire-header">
                    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "24px" }}>
                        <img src="/Assets/Logo/ADMIRE Logo.webp"
                            alt="ADMIRE (Advanced Modalities in Rehabilitative Engineering) Logo" width="281"
                            height="155" loading="lazy" style={{ "height": "90px", "width": "auto", "objectFit": "contain" }} />
                        <div style={{ "textAlign": "left", "borderLeft": "2px solid #10b981", "paddingLeft": "20px" }}>
                            <h2 className="premium-title" style={{ "margin": "0" }}>
                                Advanced Modalities in<br />Rehabilitative Engineering</h2>
                        </div>
                    </div>
                    <p className="admire-intro-text">
                        ADMIRE represents Ayurgreen Hospital's 25 years of experience in neuro-rehabilitation, bringing
                        together Ayurveda, Physiotherapy, Occupational Therapy, Speech Therapy, Robotics, and modern
                        medicine under one integrated, patient-centered approach designed to restore independence.
                    </p>
                </div>

                {/*  Infographic Grid  */}
                <div className="admire-grid">
                    {/*  SVG Connecting Flow Lines  */}
                    <svg className="admire-connecting-lines" viewBox="0 0 1000 600" preserveAspectRatio="none"
                        aria-hidden="true">
                        {/*  Path from Card 1 (Top Left) to Center  */}
                        <path id="path-teal" d="M 220 150 C 350 150, 320 300, 500 300" stroke="rgba(20, 184, 166, 0.2)"
                            strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                        {/*  Path from Card 2 (Bottom Left) to Center  */}
                        <path id="path-amber" d="M 220 450 C 350 450, 320 300, 500 300" stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                        {/*  Path from Card 3 (Top Right) to Center  */}
                        <path id="path-indigo" d="M 780 150 C 650 150, 680 300, 500 300" stroke="rgba(79, 70, 229, 0.2)"
                            strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                        {/*  Path from Card 4 (Bottom Right) to Center  */}
                        <path id="path-emerald" d="M 780 450 C 650 450, 680 300, 500 300"
                            stroke="rgba(5, 150, 105, 0.2)" strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                    </svg>

                    {/*  LEFT COLUMN (Pillar 1 & 2)  */}
                    <div className="admire-col left-col">
                        {/*  Pillar 1: Integrated Healing  */}
                        <div className="admire-info-card admire-card-teal" id="admire-card-1">
                            <span className="card-badge">01 / Integrated</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="activity" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Integrated Healing</h3>
                            <p className="admire-card-desc">
                                ADMIRE combines robotic rehabilitation, physiotherapy, occupational therapy, speech
                                therapy, Ayurveda, yoga, acupuncture, and emotional healing into one connected recovery
                                system.
                            </p>
                        </div>

                        {/*  Pillar 2: Human-Centered Recovery  */}
                        <div className="admire-info-card admire-card-amber" id="admire-card-2">
                            <span className="card-badge">02 / Compassion</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="heart" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Human-Centered Recovery</h3>
                            <p className="admire-card-desc">
                                ADMIRE believes recovery is not only physical. Patients heal better when they feel
                                emotionally supported, understood, and cared for with compassion.
                            </p>
                        </div>
                    </div>

                    {/*  CENTER COLUMN (Image centerpiece + floating tags + CTA)  */}
                    <div className="admire-col center-col">
                        <div className="admire-center-visual-wrapper">


                            {/*  Central image framed  */}
                            <div className="admire-center-image-frame" id="admire-centerpiece">
                                <img src="/Assets/Programs/Virtual Reality.webp"
                                    alt="Therapist guiding a patient through Virtual Reality cognitive rehabilitation session at Ayurgreen Hospital"
                                    width="1024" height="576" loading="lazy" />
                            </div>
                        </div>

                        {/*  CTA Button Centered below visual centerpiece  */}
                        <div style={{ "display": "flex", "justifyContent": "center", "position": "relative", "zIndex": "5" }}>
                            <a href="#" className="intl-pill-btn"
                                style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.5px", "padding": "4px 4px 4px 16px", "borderColor": "#d1fae5" }}>
                                REHABILITATION PROCESS
                                <div className="intl-pill-icon"
                                    style={{ "background": "#000", "width": "28px", "height": "28px", "marginLeft": "12px" }}>
                                    <i data-lucide="arrow-up-right" size="14"></i>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/*  RIGHT COLUMN (Pillar 3 & 4)  */}
                    <div className="admire-col right-col">
                        {/*  Pillar 3: Collaborative Rehabilitation  */}
                        <div className="admire-info-card admire-card-indigo" id="admire-card-3">
                            <span className="card-badge">03 / Synergy</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="users" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Collaborative Rehabilitation</h3>
                            <p className="admire-card-desc">
                                Doctors, therapists, caregivers, support staff, and families work together as one
                                rehabilitation ecosystem to create better recovery experiences.
                            </p>
                        </div>

                        {/*  Pillar 4: Transformation Through Care  */}
                        <div className="admire-info-card admire-card-emerald" id="admire-card-4">
                            <span className="card-badge">04 / Growth</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="sparkles" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Transformation Through Care</h3>
                            <p className="admire-card-desc">
                                ADMIRE focuses on helping patients rebuild movement, independence, confidence, and
                                quality of life through compassionate rehabilitation.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  );
}
