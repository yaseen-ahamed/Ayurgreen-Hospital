import React from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export default function RehabCTA() {
  return (
    <section id="cta">
      <div className="rehab-cta-wrap">
        <div className="rehab-cta-orb-a" />
        <div className="rehab-cta-orb-b" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="rehab-cta-lbl">GET STARTED</span>
          <h2 className="rehab-cta-title">Start Your Recovery Journey Today</h2>
          <p className="rehab-cta-desc">
            Consult with our integrated clinical panel and Ayurvedic scholars
            to design a fully personalised pathway to recovery.
          </p>
        </div>
        <div className="rehab-cta-btns" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/contact-us" className="rehab-cta-btn-primary">
            <span>Book Consultation</span>
            <span className="arrow-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </Link>
          <a
            href="https://wa.me/918943055555?text=Hi%2C%20I%20would%20like%20to%20book%20a%20rehab%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="rehab-cta-btn-glass"
          >
            <img src="/Assets/logo.webp" alt="WhatsApp" width="22" height="22" style={{ objectFit: "contain", marginRight: "6px", display: "inline-block", verticalAlign: "middle" }} />
            WhatsApp
          </a>
          <a href="tel:+918943055555" className="rehab-cta-btn-glass">
            <Phone size={20} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

