"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { galleryImages } from "../../gallery_data.js";

export default function MegaMenu() {

  return (
    <>
<div className="mobile-menu-drawer" id="mobile-menu-drawer" aria-hidden="true" role="dialog" aria-modal="true"
        aria-label="Mobile Navigation Menu">
        <div className="mobile-menu-header">
            <Link href="/" className="mobile-menu-logo-link">
                <img src="/Assets/Ayurgreen_Logo.webp" alt="Ayurgreen Hospital logo" className="mobile-menu-logo"
                    width="1656" height="1344" loading="lazy" />
            </Link>
            <button className="mobile-menu-close-btn" id="mobile-menu-close-btn" aria-label="Close Navigation Menu">
                <i data-lucide="x" size="24"></i>
            </button>
        </div>
        <div className="mobile-menu-content">
            <nav className="mobile-menu-nav">
                {/*  Accordions  */}
                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">About Us <i data-lucide="chevron-down" size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="about.html"><i data-lucide="award" size="16" style={{ "color": "#FFD700" }}></i> Our
                            Legacy</a>
                        <a href="#"><i data-lucide="activity" size="16" style={{ "color": "#9C27B0" }}></i> Admire</a>
                        <a href="about.html"><i data-lucide="users" size="16" style={{ "color": "#4CAF50" }}></i>
                            Multidisciplinary Team</a>
                        <a href="about.html#facilities"><i data-lucide="building" size="16" style={{ "color": "#2196F3" }}></i>
                            Facilities</a>
                    </div>
                </div>

                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">Specialities <i data-lucide="chevron-down"
                            size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="stroke-rehab.html"><i data-lucide="activity" size="16" style={{ "color": "#E91E63" }}></i>
                            Stroke Rehabilitation</a>
                        <a href="spinal-cord-injury.html"><i data-lucide="bone" size="16" style={{ "color": "#9C27B0" }}></i>
                            Spinal Cord Injury</a>
                        <a href="traumatic-brain-injury.html"><i data-lucide="brain" size="16"
                                style={{ "color": "#FF9800" }}></i> Traumatic Brain Injury</a>
                        <a href="hemiplegia.html"><i data-lucide="person-standing" size="16"
                                style={{ "color": "#00BCD4" }}></i> Hemiplegia</a>
                        <a href="quadriplegia-paraplegia.html"><i data-lucide="accessibility" size="16"
                                style={{ "color": "#3F51B5" }}></i> Quadriplegia &amp; Paraplegia</a>
                        <a href="post-surgical-complications.html"><i data-lucide="stethoscope" size="16"
                                style={{ "color": "#009688" }}></i> Post-Surgical Complications</a>
                        <a href="motor-neuron-diseases.html"><i data-lucide="network" size="16"
                                style={{ "color": "#607D8B" }}></i> Motor Neuron Diseases</a>
                        <a href="cerebral-palsy.html"><i data-lucide="flower-2" size="16" style={{ "color": "#E040FB" }}></i>
                            Cerebral Palsy</a>
                        <a href="parkinsons-disease.html"><i data-lucide="zap" size="16" style={{ "color": "#FFEB3B" }}></i>
                            Parkinson's Disease</a>
                        <a href="myopathy.html"><i data-lucide="dna" size="16" style={{ "color": "#8BC34A" }}></i> Myopathy</a>
                        <a href="disc-spine-problems.html"><i data-lucide="git-commit" size="16"
                                style={{ "color": "#FF5722" }}></i> Disc &amp; Spine Problems</a>
                        <a href="sciatica.html"><i data-lucide="zap-off" size="16" style={{ "color": "#795548" }}></i>
                            Sciatica</a>
                        <a href="obesity.html"><i data-lucide="scale" size="16" style={{ "color": "#F44336" }}></i> Obesity</a>
                        <a href="post-covid-complications.html"><i data-lucide="shield-alert" size="16"
                                style={{ "color": "#FFC107" }}></i> Post-Covid Complications</a>
                        <a href="muscular-dystrophy.html"><i data-lucide="heart-pulse" size="16"
                                style={{ "color": "#E91E63" }}></i> Muscular Dystrophy</a>
                        <a href="osteoarthritis.html"><i data-lucide="target" size="16" style={{ "color": "#9E9E9E" }}></i>
                            Osteoarthritis</a>
                        <a href="rheumatoid-arthritis.html"><i data-lucide="flame" size="16"
                                style={{ "color": "#FF5722" }}></i> Rheumatoid Arthritis</a>
                        <a href="developmental-delay.html"><i data-lucide="sprout" size="16"
                                style={{ "color": "#8BC34A" }}></i> Developmental Delay</a>
                        <a href="psychological-problems.html"><i data-lucide="lightbulb" size="16"
                                style={{ "color": "#FFEB3B" }}></i> Psychological Problems</a>
                        <a href="autism.html"><i data-lucide="heart" size="16" style={{ "color": "#E91E63" }}></i> Autism</a>
                        <a href="psychiatry.html"><i data-lucide="brain" size="16" style={{ "color": "#9C27B0" }}></i>
                            Psychiatry</a>
                    </div>
                </div>

                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">Departments <i data-lucide="chevron-down" size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="ayurveda.html"><i data-lucide="leaf" size="16" style={{ "color": "#4CAF50" }}></i>
                            Ayurveda</a>
                        <a href="physiotherapy.html"><i data-lucide="dumbbell" size="16" style={{ "color": "#FF9800" }}></i>
                            Physiotherapy</a>
                        <a href="robotic-rehab.html"><i data-lucide="bot" size="16" style={{ "color": "#00BCD4" }}></i> Robotic
                            Rehabilitation</a>
                        <a href="occupational-therapy.html"><i data-lucide="puzzle" size="16"
                                style={{ "color": "#9C27B0" }}></i> Occupational Therapy</a>
                        <a href="speech-therapy.html"><i data-lucide="message-circle" size="16"
                                style={{ "color": "#2196F3" }}></i> Speech Therapy</a>
                        <a href="virtual-reality.html"><i data-lucide="headset" size="16" style={{ "color": "#E91E63" }}></i>
                            Virtual Reality</a>
                        <a href="yoga-meditation.html"><i data-lucide="sun" size="16" style={{ "color": "#FFC107" }}></i> Yoga
                            and Meditation</a>
                        <a href="acupuncture.html"><i data-lucide="map-pin" size="16" style={{ "color": "#F44336" }}></i>
                            Acupuncture</a>
                        <a href="reflexology.html"><i data-lucide="footprints" size="16" style={{ "color": "#795548" }}></i>
                            Reflexology</a>
                        <a href="hydro-therapy.html"><i data-lucide="waves" size="16" style={{ "color": "#03A9F4" }}></i> Hydro
                            / Aquatic Therapy</a>
                        <a href="pediatrics.html"><i data-lucide="baby" size="16" style={{ "color": "#E040FB" }}></i>
                            Pediatrics</a>
                        <a href="slimming-treatment.html"><i data-lucide="ruler" size="16" style={{ "color": "#009688" }}></i>
                            Slimming Treatment</a>
                        <a href="pain-management.html"><i data-lucide="shield-plus" size="16"
                                style={{ "color": "#4CAF50" }}></i> Pain Management</a>
                        <a href="diet-nutrition.html"><i data-lucide="utensils" size="16" style={{ "color": "#FF5722" }}></i>
                            Diet &amp; Nutrition</a>
                        <a href="counseling.html"><i data-lucide="heart-handshake" size="16"
                                style={{ "color": "#E91E63" }}></i> Counseling</a>
                        <a href="dentistry.html"><i data-lucide="smile" size="16" style={{ "color": "#00BCD4" }}></i>
                            Dentistry</a>
                        <a href="modern-medicine.html"><i data-lucide="pill" size="16" style={{ "color": "#9C27B0" }}></i>
                            Modern Medicine</a>
                        <a href="assistive-devices.html"><i data-lucide="accessibility" size="16"
                                style={{ "color": "#3F51B5" }}></i> Assistive Devices</a>
                    </div>
                </div>

                <a href="/rehab-village" className="mobile-nav-link">Rehab Village</a>

                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">Modern Integrations <i data-lucide="chevron-down"
                            size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="neurology.html"><i data-lucide="brain-circuit" size="16" style={{ "color": "#607D8B" }}></i>
                            Neurology</a>
                        <a href="neurosurgery.html"><i data-lucide="microscope" size="16" style={{ "color": "#009688" }}></i>
                            Neurosurgery</a>
                        <a href="orthopedic.html"><i data-lucide="hammer" size="16" style={{ "color": "#795548" }}></i>
                            Orthopedic</a>
                        <a href="ent.html"><i data-lucide="ear" size="16" style={{ "color": "#FF9800" }}></i> ENT</a>
                        <a href="general-medicine.html"><i data-lucide="syringe" size="16" style={{ "color": "#F44336" }}></i>
                            General Medicine</a>
                        <a href="urology.html"><i data-lucide="droplet" size="16" style={{ "color": "#03A9F4" }}></i>
                            Urology</a>
                        <a href="cardiology.html"><i data-lucide="heart" size="16" style={{ "color": "#E91E63" }}></i>
                            Cardiology</a>
                        <a href="respiratory-therapy.html"><i data-lucide="wind" size="16" style={{ "color": "#00BCD4" }}></i>
                            Respiratory Therapy</a>
                        <a href="neuro-psychology.html"><i data-lucide="brain" size="16" style={{ "color": "#9C27B0" }}></i>
                            Neuro Psychology</a>
                    </div>
                </div>

                <a href="international-patients.html" className="mobile-nav-link">International Patients</a>

                {/*  Quick secondary links  */}
                <div className="mobile-menu-secondary-divider"></div>
                <a href="#life-gallery-trigger" className="mobile-nav-link-secondary">Life at Ayurgreen</a>
                <a href="#stories-relearning" className="mobile-nav-link-secondary">Stories of Relearning</a>
                <a href="about.html" className="mobile-nav-link-secondary">Careers</a>
                <a href="about.html" className="mobile-nav-link-secondary">News &amp; Events</a>
                <a href="about.html" className="mobile-nav-link-secondary">Insights</a>
            </nav>
            <div className="mobile-menu-footer">
                <a href="#consultation" className="mobile-menu-cta-btn">
                    <span>Book an Appointment</span>
                    <i data-lucide="arrow-up-right" size="16"></i>
                </a>
            </div>
        </div>
    </div>
    <div className="mobile-menu-backdrop" id="mobile-menu-backdrop" aria-hidden="true"></div>
    </>
  );
}
