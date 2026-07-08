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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#25D366" viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
          <a href="tel:+918943055555" className="rehab-cta-btn-glass">
            <Phone size={15} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

