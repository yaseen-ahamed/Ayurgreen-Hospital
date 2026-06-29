"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { galleryImages } from "../../gallery_data.js";

export default function Footer() {

  return (
    <>
<footer className="minimal-footer">
        <div className="container">
            <div className="minimal-footer-grid">
                {/*  Column 1: Brand & About  */}
                <div className="minimal-footer-col">
                    <a href="/">
                        <img src="/Assets/Ayurgreen_Logo.webp" alt="Ayurgreen Hospital Logo" className="minimal-footer-logo"
                            width="1656" height="1344" loading="lazy" />
                    </a>
                    <p className="minimal-footer-text">
                        India's pioneer in Integrated Ortho-Neuro Rehabilitation, fusing cutting-edge robotic tech with
                        traditional Kerala Ayurveda to restore movement and dignity.
                    </p>
                    <div className="minimal-social-row" style={{ "alignItems": "center", "gap": "16px" }}>
                        <a href="https://www.facebook.com/ayurvedahealthcare" target="_blank" rel="noopener noreferrer"
                            aria-label="Facebook" style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="/Assets/facebook.webp" alt="Facebook" width="28" height="28"
                                style={{ "objectFit": "contain", "display": "block" }} />
                        </a>
                        <a href="https://www.instagram.com/ayurgreen_hospitals/" target="_blank"
                            rel="noopener noreferrer" aria-label="Instagram"
                            style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="/Assets/instagram.webp" alt="Instagram" width="34" height="34"
                                style={{ "objectFit": "contain", "display": "block" }} />
                        </a>
                        <a href="https://www.linkedin.com/company/ayurgreen-hospitals/" target="_blank"
                            rel="noopener noreferrer" aria-label="LinkedIn"
                            style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="/Assets/linkedin.webp" alt="LinkedIn" width="28" height="28"
                                style={{ "objectFit": "contain", "display": "block" }} />
                        </a>
                        {/*  <a href="https://www.flaticon.com/free-icons/youtube" title="youtube icons">Youtube icons created by Md Tanvirul Haque - Flaticon</a>  */}
                        <a href="https://youtube.com/@ayurgreenhospitals?si=Drm6iQvEmxhoxU5l-" target="_blank"
                            rel="noopener noreferrer" aria-label="YouTube"
                            style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="/Assets/youtube.webp" alt="YouTube" width="28" height="28"
                                style={{ "objectFit": "contain", "display": "block" }}
                                title="Youtube icons created by Md Tanvirul Haque - Flaticon" />
                        </a>
                    </div>
                </div>

                {/*  Column 2: Quick Links & Contact  */}
                <div className="minimal-footer-col">
                    <h4>Quick Links</h4>
                    <div className="minimal-footer-links" style={{ "marginBottom": "24px" }}>
                        <a href="about.html">About Us</a>
                        <a href="/rehab-village">Rehab Village</a>
                        <a href="javascript:void(0)"
                            style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>All Specialities</a>
                        <a href="international-patients.html">International Patients</a>
                    </div>
                    <h4>Contact Us</h4>
                    <div className="minimal-contact-item">
                        <i data-lucide="phone" size="16" className="minimal-contact-icon"></i>
                        <div>
                            <a href="tel:+918943055555" style={{ "display": "block", "marginBottom": "4px" }}>+91 89430 55555</a>
                            <a href="https://wa.me/918943055555" target="_blank" rel="noopener noreferrer"
                                style={{ "color": "#10b981", "fontSize": "13.5px", "display": "inline-flex", "alignItems": "center", "gap": "4px" }}>
                                <img src="/Assets/logo.webp" alt="WhatsApp" width="16" height="16"
                                    style={{ "objectFit": "contain", "marginTop": "-2px" }} /> WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="minimal-contact-item">
                        <i data-lucide="mail" size="16" className="minimal-contact-icon"></i>
                        <a href="mailto:info@ayurgreenhospitals.com">info@ayurgreenhospitals.com</a>
                    </div>
                </div>

                {/*  Column 3: Location Map  */}
                <div className="minimal-footer-col">
                    <h4>Our Location</h4>
                    <div className="minimal-contact-item" style={{ "marginBottom": "12px" }}>
                        <i data-lucide="map-pin" size="16" className="minimal-contact-icon"></i>
                        <span>Kavilpadi, Edappal – Tirur Road,<br />Vattamkulam, Kerala - 679582</span>
                    </div>
                    <div className="footer-map-container">
                        <iframe
                            src="https://www.google.com/maps?q=Ayurgreen+Hospital,+Vattamkulam,+Kerala&amp;output=embed"
                            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="minimal-footer-bottom">
                <div>© 2026 Ayurgreen Hospital. All Rights Reserved.</div>
                <div className="minimal-footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}
