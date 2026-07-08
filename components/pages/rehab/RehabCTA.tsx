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
            <Calendar size={16} /> Book Consultation
          </Link>
          <a
            href="https://wa.me/918943055555?text=Hi%2C%20I%20would%20like%20to%20book%20a%20rehab%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="rehab-cta-btn-glass"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "4px" }}>
              <path d="M12.012 2c-5.506 0-9.978 4.471-9.978 9.978 0 1.764.459 3.49 1.33 5.025l-1.416 5.187 5.308-1.392c1.479.808 3.14 1.233 4.819 1.233 5.506 0 9.978-4.471 9.978-9.978 0-2.659-1.035-5.159-2.915-7.04-1.88-1.88-4.38-2.913-7.039-2.913zm0 1.583c2.233 0 4.333.87 5.912 2.45 1.58 1.58 2.45 3.68 2.45 5.912s-.87 4.333-2.45 5.912c-1.58 1.58-3.68 2.45-5.912 2.45-1.458 0-2.887-.367-4.148-1.062l-.297-.174-3.082.808.822-3.012-.191-.304c-.752-1.205-1.15-2.607-1.15-4.047 0-4.63 3.766-8.397 8.398-8.397z"/>
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

