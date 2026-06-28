"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function RehabVillagePreview() {

  return (
    <>
<section className="rv-banner-section" id="rehab-village" aria-label="Rehab Village"
            style={{ "padding": "80px 0", "background": "#ffffff" }}>
            <div style={{ "width": "96%", "maxWidth": "1400px", "margin": "0 auto" }}>

                <style dangerouslySetInnerHTML={{ __html: `
                    .rv-hero-banner {
                        background: #ffffff;
                        padding: 0;
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .rv-hero-top {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        max-width: 800px;
                        margin: 0 auto 60px auto;
                    }

                    .rv-inline-badge {
                        display: inline-flex;
                        align-items: center;
                        background: #f8fafc;
                        padding: 8px 36px 8px 8px;
                        border-radius: 60px;
                        border: 1px solid #e2e8f0;
                        margin-bottom: 32px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
                    }

                    .rv-inline-badge img {
                        width: 56px;
                        height: 56px;
                        border-radius: 50%;
                        object-fit: cover;
                        margin-right: 16px;
                        border: 2px solid #fff;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    }

                    .rv-inline-badge .badge-text {
                        font-size: 15px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: #0f172a;
                    }

                    .rv-inline-badge .badge-dot {
                        width: 6px;
                        height: 6px;
                        background: #059669;
                        border-radius: 50%;
                        margin: 0 16px;
                    }

                    .rv-inline-badge .badge-highlight {
                        font-size: 15px;
                        font-weight: 700;
                        color: #059669;
                        letter-spacing: 0.5px;
                    }

                    .rv-title {
                        margin-bottom: 24px;
                    }

                    .rv-desc {
                        font-size: 16px;
                        color: var(--text-muted);
                        line-height: 1.7;
                        margin-bottom: 0;
                        font-weight: 400;
                        max-width: 650px;
                    }

                    /* Button styling */
                    .rv-explore-btn {
                        font-size: 14px;
                        font-weight: 800;
                        padding: 8px 8px 8px 24px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        background: #ffffff;
                        color: #111827;
                        border-radius: 50px;
                        border: 2px solid #e0ffe4;
                        text-decoration: none;
                        letter-spacing: 1px;
                        transition: all 0.3s ease;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
                        white-space: nowrap;
                    }

                    .rv-explore-btn .btn-icon-circle {
                        width: 36px;
                        height: 36px;
                        background: #000000;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: 16px;
                        transition: transform 0.3s ease;
                        color: #ffffff;
                    }

                    .rv-explore-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
                        border-color: #bbf7d0;
                    }

                    .rv-explore-btn:hover .btn-icon-circle {
                        transform: scale(1.05) translate(2px, -2px);
                    }

                    .rv-cards-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 20px;
                        margin-bottom: 40px;
                        width: 100%;
                    }

                    .rv-vibrant-card {
                        padding: 32px 28px;
                        border-radius: 24px;
                        color: #fff;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        min-height: 180px;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
                        cursor: pointer;
                        border: none;
                        position: relative;
                        overflow: hidden;
                        text-align: left;
                    }

                    .rv-vibrant-card h3,
                    .rv-vibrant-card p {
                        color: #ffffff !important;
                    }

                    .rv-vibrant-card.dark-text h3,
                    .rv-vibrant-card.dark-text p {
                        color: #0f172a !important;
                    }

                    .rv-vibrant-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
                    }

                    .rv-vibrant-icon-bg {
                        position: absolute;
                        top: -15px;
                        right: -15px;
                        width: 90px;
                        height: 90px;
                        background: rgba(255, 255, 255, 0.15);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.4s ease;
                    }

                    .rv-vibrant-card:hover .rv-vibrant-icon-bg {
                        transform: scale(1.15);
                    }

                    .rv-vibrant-card.dark-text .rv-vibrant-icon-bg {
                        background: rgba(0, 0, 0, 0.06);
                    }

                    .rv-vibrant-title {
                        font-family: var(--font-body);
                        font-size: 16px;
                        font-weight: 700;
                        margin-bottom: 10px;
                        line-height: 1.3;
                        position: relative;
                        z-index: 2;
                    }

                    .rv-vibrant-desc {
                        font-family: var(--font-body);
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 1.5;
                        opacity: 0.9;
                        position: relative;
                        z-index: 2;
                    }

                    .rv-stats-horizontal {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #ffffff;
                        padding: 20px 24px 20px 48px;
                        border-radius: 100px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
                        border: 1px solid rgba(0, 0, 0, 0.08);
                        width: 100%;
                    }

                    .rv-stats-left {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        flex: 1;
                    }

                    .rv-stats-divider {
                        width: 1px;
                        height: 48px;
                        background: #e2e8f0;
                        margin: 0 32px;
                    }

                    .rv-stat-pill {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        text-align: left;
                    }

                    .rv-stat-pill-icon {
                        color: #10b981;
                        background: #ecfdf5;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .rv-stat-pill-text strong {
                        display: block;
                        font-size: var(--heading-sm);
                        font-family: var(--font-heading);
                        color: var(--text-dark);
                        line-height: var(--heading-line-height);
                        font-weight: var(--heading-weight);
                    }

                    .rv-stat-pill-text span {
                        font-family: var(--font-body);
                        font-size: 11px;
                        color: var(--text-muted);
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        margin-top: 4px;
                        display: block;
                    }

                    @media (max-width: 1280px) {
                        .rv-stats-horizontal {
                            flex-direction: column;
                            border-radius: 36px;
                            padding: 32px;
                            gap: 32px;
                        }

                        .rv-stats-left {
                            flex-wrap: wrap;
                            justify-content: center;
                            gap: 32px;
                        }

                        .rv-stats-divider {
                            width: 100%;
                            height: 1px;
                            margin: 0;
                        }
                    }

                    @media (max-width: 1180px) {
                        .rv-cards-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .rv-title {
                            font-size: 40px;
                        }
                    }

                    @media (max-width: 640px) {
                        .rv-cards-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                            gap: 12px !important;
                        }

                        .rv-vibrant-card {
                            padding: 20px 14px !important;
                            min-height: 140px !important;
                            border-radius: 16px !important;
                        }

                        .rv-vibrant-title {
                            font-size: clamp(12.5px, 3.5vw, 14.5px) !important;
                            margin-bottom: 6px !important;
                        }

                        .rv-vibrant-desc {
                            font-size: clamp(10.5px, 2.8vw, 11.5px) !important;
                            line-height: 1.4 !important;
                        }

                        .rv-vibrant-icon-bg {
                            width: 54px !important;
                            height: 54px !important;
                            top: -8px !important;
                            right: -8px !important;
                        }

                        .rv-vibrant-icon-bg svg {
                            width: 20px !important;
                            height: 20px !important;
                        }

                        .rv-stats-horizontal {
                            padding: 24px;
                        }

                        .rv-hero-banner {
                            padding: 0;
                        }

                        .rv-title {
                            font-size: 34px;
                        }

                        .rv-stat-pill {
                            flex-direction: column;
                            text-align: center;
                            gap: 10px;
                        }

                        .rv-inline-badge {
                            padding: 4px 16px 4px 4px;
                        }
                    }
                ` }} />

                <div className="rv-hero-banner">
                    {/*  Top Content  */}
                    <div className="rv-hero-top">
                        <div
                            style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "24px", "marginBottom": "24px" }}>
                            <img src="Assets/Logo/Rehab Village.webp"
                                alt="Rehab Village logo – Community-based long term rehabilitation accommodation at Ayurgreen Hospital"
                                width="1600" height="1600" loading="lazy"
                                style={{ "height": "90px", "width": "auto", "objectFit": "contain", "borderRadius": "50%" }} />
                            <div style={{ "textAlign": "left", "borderLeft": "2px solid #10b981", "paddingLeft": "20px" }}>
                                <h2 className="rv-title premium-title" style={{ "margin": "0" }}>
                                    Rehab Village
                                </h2>
                            </div>
                        </div>

                        <p className="rv-desc">
                            Designed for patients who need a comfortable and affordable place to stay near the hospital
                            while continuing their treatment. This initiative encourages health awareness within the
                            local community, creating a supportive environment.
                        </p>
                    </div>

                    {/*  8 Vibrant Cards Grid  */}
                    <div className="rv-cards-grid">
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #ff7300" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="bed-double" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Hospital Rooms Fully Occupied</h3>
                            <p className="rv-vibrant-desc">Stay nearby in verified homestays and continue daily sessions.
                            </p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #00c08b" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="calendar-clock" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Long-Term Treatment</h3>
                            <p className="rv-vibrant-desc">A stable nearby home base for weeks or months of rehab.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #7756b5" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="wallet" size="36" style={{ "opacity": "0.8" }}></i>
                            </div>
                            <h3 className="rv-vibrant-title">Affordable Stay Option</h3>
                            <p className="rv-vibrant-desc">Budget-friendly accommodation without compromising quality.</p>
                        </div>
                        <div className="rv-vibrant-card dark-text"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #c0f249", "color": "#000" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="tree-pine" size="36"
                                    style={{ "opacity": "0.6" }}></i></div>
                            <h3 className="rv-vibrant-title">Homely Over Clinical</h3>
                            <p className="rv-vibrant-desc">A quieter, more natural environment over a clinical setting.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #8b0042" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="shield-check" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Verified &amp; Trusted Stays</h3>
                            <p className="rv-vibrant-desc">Hospital-approved homestays, villas, and apartments.</p>
                        </div>
                        <div className="rv-vibrant-card dark-text"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #ffc82e", "color": "#000" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="users" size="36" style={{ "opacity": "0.6" }}></i>
                            </div>
                            <h3 className="rv-vibrant-title">Stay with Family</h3>
                            <p className="rv-vibrant-desc">Live with loved ones during recovery, reducing isolation.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #2563eb" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="sun" size="36" style={{ "opacity": "0.8" }}></i>
                            </div>
                            <h3 className="rv-vibrant-title">Calm Recovery Environment</h3>
                            <p className="rv-vibrant-desc">A peaceful atmosphere that supports emotional wellbeing.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #db2777" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="heart-handshake" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Community-Style Living</h3>
                            <p className="rv-vibrant-desc">Shared experiences with fellow patients create belonging.</p>
                        </div>
                    </div>

                    {/*  Stats Horizontal Band  */}
                    <div className="rv-stats-horizontal">
                        <div className="rv-stats-left">
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="map-pin" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>2 kms</strong><span>From Hospital</span></div>
                            </div>
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="accessibility" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>Wheelchair</strong><span>Access</span></div>
                            </div>
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="car" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>Transportation</strong><span>&amp; Food
                                        services</span></div>
                            </div>
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="stethoscope" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>Daily</strong><span>Doctor's visit</span></div>
                            </div>
                        </div>
                        <div className="rv-stats-divider"></div>
                        <div className="rv-stats-right">
                            <a href="/rehab-village" className="rv-explore-btn">
                                EXPLORE REHAB VILLAGE
                                <div className="btn-icon-circle">
                                    <i data-lucide="arrow-up-right" size="20" strokeWidth="2.5"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
