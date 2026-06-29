"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    import('../../main.js')
      .then(() => {
        const win = window as any;
        if (typeof win.initAyurgreen === 'function') {
          win.initAyurgreen();
        }
      })
      .catch((err) => {
        console.error("Failed to load main.js in Header:", err);
      });
  }, []);

  return (
    <header className="hero-header">
      <div className="header-left">
        <nav className="nav-pills-container">
          <div className="nav-item-wrapper">
            <a href="/about" className="individual-pill">
              About Us <i data-lucide="chevron-down" size="14"></i>
            </a>
            <div className="nav-dropdown">
              <a href="/about">
                <i data-lucide="award" size="14" style={{ "color": "#FFD700" }}></i> Our Legacy
              </a>
              <a href="#">
                <i data-lucide="activity" size="14" style={{ "color": "#9C27B0" }}></i> Admire
              </a>
              <a href="/about">
                <i data-lucide="users" size="14" style={{ "color": "#4CAF50" }}></i> Multidisciplinary Team
              </a>
              <a href="/about#facilities">
                <i data-lucide="building" size="14" style={{ "color": "#2196F3" }}></i> Facilities
              </a>
            </div>
          </div>

          <div className="nav-item-wrapper">
            <a href="javascript:void(0)" className="individual-pill">
              Specialities <i data-lucide="chevron-down" size="14"></i>
            </a>
            <div className="nav-dropdown mega-menu-3-col">
              <a href="/stroke-rehab">
                <i data-lucide="activity" size="14" style={{ "color": "#E91E63" }}></i> Stroke
              </a>
              <a href="/spinal-cord-injury">
                <i data-lucide="bone" size="14" style={{ "color": "#9C27B0" }}></i> Spinal Cord Injury
              </a>
              <a href="/traumatic-brain-injury">
                <i data-lucide="brain" size="14" style={{ "color": "#FF9800" }}></i> Traumatic Brain Injury
              </a>
              <a href="/hemiplegia">
                <i data-lucide="person-standing" size="14" style={{ "color": "#00BCD4" }}></i> Hemiplegia
              </a>
              <a href="/quadriplegia-paraplegia">
                <i data-lucide="accessibility" size="14" style={{ "color": "#3F51B5" }}></i> Quadriplegia &amp; Paraplegia
              </a>
              <a href="/post-surgical-complications">
                <i data-lucide="stethoscope" size="14" style={{ "color": "#009688" }}></i> Post-Surgical Complications
              </a>
              <a href="/motor-neuron-diseases">
                <i data-lucide="network" size="14" style={{ "color": "#607D8B" }}></i> Motor Neuron Diseases
              </a>
              <a href="/cerebral-palsy">
                <i data-lucide="flower-2" size="14" style={{ "color": "#E040FB" }}></i> Cerebral Palsy
              </a>
              <a href="/parkinsons-disease">
                <i data-lucide="zap" size="14" style={{ "color": "#FFEB3B" }}></i> Parkinson's Disease
              </a>
              <a href="/myopathy">
                <i data-lucide="dna" size="14" style={{ "color": "#8BC34A" }}></i> Myopathy
              </a>
              <a href="/disc-spine-problems">
                <i data-lucide="git-commit" size="14" style={{ "color": "#FF5722" }}></i> Disc &amp; Spine Problems
              </a>
              <a href="/sciatica">
                <i data-lucide="zap-off" size="14" style={{ "color": "#795548" }}></i> Sciatica
              </a>
              <a href="/obesity">
                <i data-lucide="scale" size="14" style={{ "color": "#F44336" }}></i> Obesity
              </a>
              <a href="/post-covid-complications">
                <i data-lucide="shield-alert" size="14" style={{ "color": "#FFC107" }}></i> Post-Covid Complications
              </a>
              <a href="/muscular-dystrophy">
                <i data-lucide="heart-pulse" size="14" style={{ "color": "#E91E63" }}></i> Muscular Dystrophy
              </a>
              <a href="/osteoarthritis">
                <i data-lucide="target" size="14" style={{ "color": "#9E9E9E" }}></i> Osteoarthritis
              </a>
              <a href="/rheumatoid-arthritis">
                <i data-lucide="flame" size="14" style={{ "color": "#FF5722" }}></i> Rheumatoid Arthritis
              </a>
              <a href="/developmental-delay">
                <i data-lucide="sprout" size="14" style={{ "color": "#8BC34A" }}></i> Developmental Delay
              </a>
              <a href="/psychological-problems">
                <i data-lucide="lightbulb" size="14" style={{ "color": "#FFEB3B" }}></i> Psychological Problems
              </a>
              <a href="/autism">
                <i data-lucide="heart" size="14" style={{ "color": "#E91E63" }}></i> Autism
              </a>
              <a href="/psychiatry">
                <i data-lucide="brain" size="14" style={{ "color": "#9C27B0" }}></i> Psychiatry
              </a>
            </div>
          </div>

          <div className="nav-item-wrapper">
            <a href="javascript:void(0)" className="individual-pill">
              Departments <i data-lucide="chevron-down" size="14"></i>
            </a>
            <div className="nav-dropdown mega-menu-3-col">
              <a href="/ayurveda">
                <i data-lucide="leaf" size="14" style={{ "color": "#4CAF50" }}></i> Ayurveda
              </a>
              <a href="/physiotherapy">
                <i data-lucide="dumbbell" size="14" style={{ "color": "#FF9800" }}></i> Physiotherapy
              </a>
              <a href="/robotic-rehab">
                <i data-lucide="bot" size="14" style={{ "color": "#00BCD4" }}></i> Robotic Rehabilitation
              </a>
              <a href="/occupational-therapy">
                <i data-lucide="puzzle" size="14" style={{ "color": "#9C27B0" }}></i> Occupational Therapy
              </a>
              <a href="/speech-therapy">
                <i data-lucide="message-circle" size="14" style={{ "color": "#2196F3" }}></i> Speech Therapy
              </a>
              <a href="/virtual-reality">
                <i data-lucide="headset" size="14" style={{ "color": "#E91E63" }}></i> Virtual Reality
              </a>
              <a href="/yoga-meditation">
                <i data-lucide="sun" size="14" style={{ "color": "#FFC107" }}></i> Yoga and Meditation
              </a>
              <a href="/acupuncture">
                <i data-lucide="map-pin" size="14" style={{ "color": "#F44336" }}></i> Acupuncture
              </a>
              <a href="/reflexology">
                <i data-lucide="footprints" size="14" style={{ "color": "#795548" }}></i> Reflexology
              </a>
              <a href="/hydro-therapy">
                <i data-lucide="waves" size="14" style={{ "color": "#03A9F4" }}></i> Hydro / Aquatic Therapy
              </a>
              <a href="/pediatrics">
                <i data-lucide="baby" size="14" style={{ "color": "#E040FB" }}></i> Pediatrics
              </a>
              <a href="/slimming-treatment">
                <i data-lucide="ruler" size="14" style={{ "color": "#009688" }}></i> Slimming Treatment
              </a>
              <a href="/pain-management">
                <i data-lucide="shield-plus" size="14" style={{ "color": "#4CAF50" }}></i> Pain Management
              </a>
              <a href="/diet-nutrition">
                <i data-lucide="utensils" size="14" style={{ "color": "#FF5722" }}></i> Diet &amp; Nutrition
              </a>
              <a href="/counseling">
                <i data-lucide="heart-handshake" size="14" style={{ "color": "#E91E63" }}></i> Counseling
              </a>
              <a href="/dentistry">
                <i data-lucide="smile" size="14" style={{ "color": "#00BCD4" }}></i> Dentistry
              </a>
              <a href="/modern-medicine">
                <i data-lucide="pill" size="14" style={{ "color": "#9C27B0" }}></i> Modern Medicine
              </a>
              <a href="/assistive-devices">
                <i data-lucide="accessibility" size="14" style={{ "color": "#3F51B5" }}></i> Assistive Devices
              </a>
            </div>
          </div>

          <div className="nav-item-wrapper">
            <a href="/rehab-village" className="individual-pill">
              Rehab Village
            </a>
          </div>
        </nav>
      </div>

      <a href="/" className="header-center-link">
        <img src="/Assets/Ayurgreen_Logo.webp" alt="Ayurgreen Hospital logo" width="1656" height="1344" />
      </a>

      <div className="header-right">
        <div className="nav-item-wrapper">
          <a href="javascript:void(0)" className="individual-pill specializations-pill">
            <span className="pill-text-wrapper">
              Modern Int<span className="pill-text-expandable">egrations</span>
            </span>
            <i data-lucide="chevron-down" size="14"></i>
          </a>
          <div className="nav-dropdown">
            <a href="/neurology">
              <i data-lucide="brain-circuit" size="14" style={{ "color": "#607D8B" }}></i> Neurology
            </a>
            <a href="/neurosurgery">
              <i data-lucide="microscope" size="14" style={{ "color": "#009688" }}></i> Neurosurgery
            </a>
            <a href="/orthopedic">
              <i data-lucide="hammer" size="14" style={{ "color": "#795548" }}></i> Orthopedic
            </a>
            <a href="/ent">
              <i data-lucide="ear" size="14" style={{ "color": "#FF9800" }}></i> ENT
            </a>
            <a href="/general-medicine">
              <i data-lucide="syringe" size="14" style={{ "color": "#F44336" }}></i> General Medicine
            </a>
            <a href="/urology">
              <i data-lucide="droplet" size="14" style={{ "color": "#03A9F4" }}></i> Urology
            </a>
            <a href="/cardiology">
              <i data-lucide="heart" size="14" style={{ "color": "#E91E63" }}></i> Cardiology
            </a>
            <a href="/respiratory-therapy">
              <i data-lucide="wind" size="14" style={{ "color": "#00BCD4" }}></i> Respiratory Therapy
            </a>
            <a href="/neuro-psychology">
              <i data-lucide="brain" size="14" style={{ "color": "#9C27B0" }}></i> Neuro Psychology
            </a>
          </div>
        </div>
        <a href="/international-patients" className="individual-pill">
          International Patients
        </a>
        <a href="#consultation" className="header-cta-pill">
          Book an appointment{" "}
          <span className="arrow-btn">
            <i data-lucide="arrow-up-right" size="14"></i>
          </span>
        </a>
        <div className="nav-item-wrapper bw-menu-wrapper">
          <button className="menu-btn" id="menu-btn" aria-label="Open Navigation Menu">
            <i data-lucide="menu" size="18"></i>
          </button>
          <div className="bw-nav-dropdown">
            <a href="#life-gallery-trigger">Life at Ayurgreen</a>
            <a href="#stories-relearning">Stories of Relearning</a>
            <a href="/about">Careers</a>
            <a href="/about">News &amp; Events</a>
            <a href="/about">Insights</a>
            <a href="#">Insurance</a>
            <a href="#">CSR Policy</a>
          </div>
        </div>
      </div>
    </header>
  );
}
