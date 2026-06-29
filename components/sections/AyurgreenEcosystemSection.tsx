"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function AyurgreenEcosystemSection() {

  return (
    <>
<section id="ayurgreen-ecosystem-section" className="eco-section" aria-label="Ayurgreen Ecosystem">
            <div className="eco-container">
                {/*  Section Header (Rehab Village Inspired)  */}
                <div className="eco-hero-top"
                    style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "maxWidth": "800px", "margin": "0 auto 60px auto" }}>
                    <h2 className="premium-title" style={{ "marginBottom": "24px" }}>
                        Ayurgreen Ecosystem
                    </h2>

                    <p className="eco-desc"
                        style={{ "fontSize": "16px", "color": "var(--text-muted)", "lineHeight": "1.7", "marginBottom": "0", "fontWeight": "400", "maxWidth": "700px" }}>
                        Ayurgreen is more than a hospital. It is a growing ecosystem of healthcare, education, research,
                        hospitality, and social impact initiatives working together with a shared vision of creating
                        happier, healthier lives.
                    </p>
                </div>

                {/*  Entity Grid  */}
                <div className="eco-grid">
                    {/*  Card 1: Ayurgreen Hospitals  */}
                    <div className="eco-card" data-eco-card="hospitals"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #059669" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/Logomark Ayurgreen.webp" alt="Ayurgreen Hospitals Logo"
                                width="379" height="401" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen Hospitals</h3>
                        <p className="eco-card-desc">
                            Centre of Excellence in Ortho-Neuro Rehabilitation, combining advanced rehabilitation,
                            Ayurveda, therapy, and integrated healthcare to restore independence and quality of life.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE HOSPITALS
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 2: Getwell Hospitals  */}
                    <div className="eco-card" data-eco-card="getwell"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #2563eb" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/Getwell Logo.webp" alt="Getwell Hospitals Logo"
                                width="150" height="150" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Getwell Hospitals</h3>
                        <p className="eco-card-desc">
                            Providing accessible and comprehensive healthcare services with a patient-centered approach
                            to treatment, wellness, and recovery.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE GETWELL
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 3: Niramaya Hospital  */}
                    <div className="eco-card" data-eco-card="niramaya"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #0d9488" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/logo Niramaya.webp" alt="Niramaya Hospital Logo"
                                width="2364" height="524" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Niramaya Hospital</h3>
                        <p className="eco-card-desc">
                            Delivering compassionate healthcare services while extending Ayurgreen’s mission of holistic
                            healing and community well-being.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE NIRAMAYA
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 4: Green Health Herbals  */}
                    <div className="eco-card" data-eco-card="herbals"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #15803d" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/Green Health Logo.webp" alt="Green Health Herbals Logo"
                                width="150" height="38" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Green Health Herbals</h3>
                        <p className="eco-card-desc">
                            Manufacturing authentic Ayurvedic medicines and herbal formulations inspired by traditional
                            wisdom and quality-focused practices.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE GREEN HEALTH
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 5: Ayurgreen College of Life Sciences  */}
                    <div className="eco-card" data-eco-card="college"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #4f46e5" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/Ayurgreen College.webp"
                                alt="Ayurgreen College of Life Sciences Logo" width="250" height="250" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen College of Life Sciences</h3>
                        <p className="eco-card-desc">
                            Preparing future healthcare professionals through education, practical training, and
                            academic excellence.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE COLLEGE
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 6: Ayurgreen Scientifica  */}
                    <div className="eco-card" data-eco-card="scientifica"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #7c3aed" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/ayurgreen Scientifica Logo.webp"
                                alt="Ayurgreen Scientifica Logo" width="173" height="300" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen Scientifica</h3>
                        <p className="eco-card-desc">
                            Driving research, innovation, and evidence-based advancement by connecting traditional
                            knowledge with modern healthcare science.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE SCIENTIFICA
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 7: Shadarasa  */}
                    <div className="eco-card" data-eco-card="shadarasa"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #db2777" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/Shadrasa Logo.webp" alt="Shadarasa Logo" width="150"
                                height="120" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Shadarasa</h3>
                        <p className="eco-card-desc">
                            Promoting healthy living through thoughtfully prepared food inspired by wellness and
                            balanced nutrition.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE SHADARASA
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 8: Kafe Kizil  */}
                    <div className="eco-card" data-eco-card="kizil"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #ea580c" }}>
                        <div className="eco-card-logo-badge">
                            <i data-lucide="coffee" size="28" className="eco-placeholder-coffee"
                                style={{ "color": "#ea580c" }}></i>
                        </div>
                        <h3 className="eco-card-title">Kafe Kizil</h3>
                        <p className="eco-card-desc">
                            A welcoming space for patients, families, visitors, and the community to relax, connect, and
                            refresh.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE KAFE KIZIL
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 9: Ayurgreen Foundation  */}
                    <div className="eco-card" data-eco-card="foundation"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #b91c1c" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/AG Foundation Logo.webp"
                                alt="Ayurgreen Foundation Logo" width="150" height="72" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen Foundation</h3>
                        <p className="eco-card-desc">
                            Creating meaningful social impact through healthcare accessibility, community welfare
                            initiatives, and charitable programs.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE FOUNDATION
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 10: ACFHE  */}
                    <div className="eco-card" data-eco-card="acfhe"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #0284c7" }}>
                        <div className="eco-card-logo-badge">
                            <img src="/Assets/Ayurgreen Ecosystem/ACFHE Logo.webp" alt="ACFHE Logo" width="1563"
                                height="648" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">ACFHE</h3>
                        <p className="eco-card-desc">
                            Developing hospitality professionals through specialized training focused on service
                            excellence, professionalism, and people-centered experiences.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE ACFHE
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        </section>
    </>
  );
}
