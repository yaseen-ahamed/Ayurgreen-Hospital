"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function OurAssociationsSection() {

  return (
    <>
<section className="assoc-section" id="our-associations" aria-label="Our Associations">
            <div className="assoc-container">
                <div className="assoc-header">
                    <h2 className="premium-title">Our Associations</h2>
                    <p className="assoc-subtitle">Trusted Partnerships &amp; Collaborations That Strengthen Our Mission</p>
                </div>

                <div className="assoc-marquee-wrapper">
                    <div className="assoc-marquee-track">
                        {/*  Set 1  */}
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/AMAI Logo.webp" alt="AMAI" width="954" height="974"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Ahma-Logo.webp" alt="AHMA" width="600" height="600"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Aura-Malabar-Logo.webp" alt="Aura Malabar" width="1024"
                                height="315" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Blood Bank Perinthalmanna Logo.webp"
                                alt="Blood Bank Perinthalmanna" width="150" height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/CII Logo.webp" alt="CII" width="209" height="65"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ILA Foundation Logo.webp" alt="ILA Foundation" width="150"
                                height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/National Ayurvedic Medical Association.webp"
                                alt="National Ayurvedic Medical Association" width="941" height="363" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ayurveda promotion society logo.webp"
                                alt="Ayurveda Promotion Society" width="253" height="90" loading="lazy" />
                        </div>

                        {/*  Set 2 (duplicate for seamless loop)  */}
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/AMAI Logo.webp" alt="AMAI" width="954" height="974"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Ahma-Logo.webp" alt="AHMA" width="600" height="600"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Aura-Malabar-Logo.webp" alt="Aura Malabar" width="1024"
                                height="315" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Blood Bank Perinthalmanna Logo.webp"
                                alt="Blood Bank Perinthalmanna" width="150" height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/CII Logo.webp" alt="CII" width="209" height="65"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ILA Foundation Logo.webp" alt="ILA Foundation" width="150"
                                height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/National Ayurvedic Medical Association.webp"
                                alt="National Ayurvedic Medical Association" width="941" height="363" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ayurveda promotion society logo.webp"
                                alt="Ayurveda Promotion Society" width="253" height="90" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
