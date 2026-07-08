import React from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export default function StrokeCTA() {
  return (
    <section id="cta" className="ayur-cta-outer">
      <div className="ayur-container">
        <div className="ayur-cta-section">
          <h2 className="ayur-cta-title">Begin Your Stroke Recovery Journey Today</h2>
          <p className="ayur-cta-desc">
            Let the integrated rehabilitation team at Ayurgreen Hospital guide you every step of the way to reclaiming your independence and dignity.
          </p>
          <div className="ayur-cta-btn-group">
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
              href="https://wa.me/918943055555" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ayur-btn-glass"
            >
              <img src="/Assets/logo.webp" alt="WhatsApp" width="16" height="16" style={{ objectFit: "contain", marginRight: "8px", display: "inline-block", verticalAlign: "middle" }} />
              WhatsApp
            </a>
            <a href="tel:+918943055555" className="ayur-btn-glass">
              Call Now <Phone size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
