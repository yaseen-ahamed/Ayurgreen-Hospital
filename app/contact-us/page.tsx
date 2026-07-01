"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/contact-us.css";


/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const specialities = [
  { id: "stroke",            name: "Stroke",                      icon: "activity",      slug: "stroke-rehab" },
  { id: "hemiplegia",        name: "Hemiplegia",                  icon: "accessibility", slug: "hemiplegia" },
  { id: "spinal-cord",       name: "Spinal Cord Injury",          icon: "bone",          slug: "spinal-cord-injury" },
  { id: "tbi",               name: "Traumatic Brain Injury",      icon: "brain",         slug: "traumatic-brain-injury" },
  { id: "quadriplegia",      name: "Quadriplegia & Paraplegia",   icon: "accessibility", slug: "quadriplegia-paraplegia" },
  { id: "post-surgical",     name: "Post-Surgical Complications", icon: "stethoscope",   slug: "post-surgical-complications" },
  { id: "mnd",               name: "Motor Neuron Diseases",       icon: "network",       slug: "motor-neuron-diseases" },
  { id: "cerebral-palsy",    name: "Cerebral Palsy",              icon: "sprout",        slug: "cerebral-palsy" },
  { id: "parkinsons",        name: "Parkinson's Disease",         icon: "zap",           slug: "parkinsons-disease" },
  { id: "myopathy",          name: "Myopathy",                    icon: "dna",           slug: "myopathy" },
  { id: "muscular-dystrophy",name: "Muscular Dystrophy",          icon: "heart-pulse",   slug: "muscular-dystrophy" },
  { id: "disc-spine",        name: "Disc & Spine Problems",       icon: "bone",          slug: "disc-spine-problems" },
  { id: "sciatica",          name: "Sciatica",                    icon: "zap",           slug: "sciatica" },
  { id: "obesity",           name: "Obesity",                     icon: "scale",         slug: "obesity" },
  { id: "post-covid",        name: "Post-Covid Complications",    icon: "shield-alert",  slug: "post-covid-complications" },
  { id: "osteoarthritis",    name: "Osteoarthritis",              icon: "target",        slug: "osteoarthritis" },
  { id: "rheumatoid",        name: "Rheumatoid Arthritis",        icon: "flame",         slug: "rheumatoid-arthritis" },
  { id: "developmental-delay", name: "Developmental Delay",       icon: "sprout",        slug: "developmental-delay" },
  { id: "psychological",     name: "Psychological Problems",      icon: "lightbulb",     slug: "psychological-problems" },
  { id: "autism",            name: "Autism",                      icon: "heart",         slug: "autism" },
  { id: "psychiatry",        name: "Psychiatry",                  icon: "brain",         slug: "psychiatry" },
];

const medicalConcerns = [
  "Stroke Rehabilitation", "Parkinson's Disease", "Cerebral Palsy",
  "Traumatic Brain Injury", "Spinal Cord Injury", "Multiple Sclerosis",
  "Muscular Dystrophy", "Orthopedic Rehabilitation", "Pain Management",
  "Ayurveda Consultation", "Panchakarma", "Physiotherapy",
  "Occupational Therapy", "Speech Therapy", "Hydrotherapy",
  "Robotic Rehabilitation", "Pediatric Rehabilitation", "Other",
];

const doctorSpecialities = [
  "No Preference", "Neurology", "Ayurveda", "Orthopedics",
  "Rehabilitation Medicine", "Physiotherapy",
];

const assistanceOptions = [
  "International Patient Support", "Medical Visa Invitation Letter",
  "Airport Pickup", "Accommodation Assistance",
  "Rehab Village Information", "Wheelchair Assistance",
  "Interpreter", "Diet Consultation",
  "Caregiver Support", "Rehabilitation Planning",
];

const faqs = [
  { q: "How quickly will I receive confirmation?", a: "Usually within 24 hours. Our Patient Care Team reviews your submission and confirms your consultation schedule promptly." },
  { q: "Can international patients book online?", a: "Yes. Our International Patient Desk assists patients from 54+ countries with online booking, medical visa guidance, travel planning, and accommodation support." },
  { q: "Can I upload MRI or CT reports?", a: "Yes. You can upload PDF, JPG, PNG, DICOM, MRI, CT Scan, X-Ray, blood reports, and prescriptions up to 100 MB total." },
  { q: "Can I choose a specific doctor?", a: "Yes, subject to availability. You can specify a preferred speciality and we will arrange the best available specialist for your condition." },
  { q: "Can I request an online consultation first?", a: "Absolutely. Many patients prefer an online or video consultation before visiting, especially those planning to travel from abroad." },
  { q: "Is there an appointment fee?", a: "Our Patient Care Team will provide complete consultation fee details before confirmation, depending on the type of consultation selected." },
  { q: "Can I reschedule my appointment?", a: "Yes. Simply contact our Patient Care Team by phone or WhatsApp and we will arrange a new date at your convenience." },
  { q: "Can family members attend the consultation?", a: "Yes. We strongly encourage caregivers and family members to participate, especially for rehabilitation planning and caregiver training." },
  { q: "Will someone help me plan my full treatment?", a: "Yes. A dedicated Patient Care Executive will assist with scheduling, documentation, accommodation, and full treatment coordination from day one." },
];

const trustItems = [
  "25+ Years of Healthcare Excellence",
  "54+ Countries Served",
  "Integrated Ortho-Neuro Rehabilitation",
  "Personalized Multidisciplinary Care",
  "Advanced Rehabilitation Technology",
  "Ayurveda & Modern Medicine Under One Roof",
  "Secure Online Appointment Booking",
  "Dedicated International Patient Support",
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const today = new Date();
    // Default to tomorrow if today is Sunday
    if (today.getDay() === 0) {
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      return tomorrow;
    }
    return today;
  });
  const [selectedTime, setSelectedTime] = useState<string>("5:00 PM");
  const [weekOffset, setWeekOffset] = useState<number>(0);

  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weekdaysFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
    "10:00 PM", "10:30 PM", "11:00 PM"
  ];

  const getDaysArray = (offset: number) => {
    const daysArr = [];
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() + offset);
    
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      daysArr.push(d);
    }
    return daysArr;
  };

  const days = getDaysArray(weekOffset);

  const formatRangeHeader = (daysArray: Date[]) => {
    if (daysArray.length === 0) return "";
    const first = daysArray[0];
    const last = daysArray[daysArray.length - 1];
    if (first.getMonth() === last.getMonth()) {
      return `${monthsShort[first.getMonth()]} ${first.getDate()} – ${last.getDate()}`;
    } else {
      return `${monthsShort[first.getMonth()]} ${first.getDate()} – ${monthsShort[last.getMonth()]} ${last.getDate()}`;
    }
  };

  const handlePrevWeek = () => {
    if (weekOffset > 0) {
      setWeekOffset(prev => Math.max(0, prev - 7));
    }
  };

  const handleNextWeek = () => {
    setWeekOffset(prev => prev + 7);
  };

  useEffect(() => {
    // Lucide icons
    if (typeof window !== "undefined") {
      const win = window as any;
      if (win.lucide) win.lucide.createIcons();
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll(".cu-faq-item");
    faqItems.forEach((item) => {
      const trigger = item.querySelector(".cu-faq-trigger");
      const content = item.querySelector(".cu-faq-content") as HTMLElement;
      if (!trigger || !content) return;
      trigger.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach((other) => {
          other.classList.remove("active");
          const c = other.querySelector(".cu-faq-content") as HTMLElement;
          if (c) c.style.maxHeight = "";
        });
        if (!isActive) {
          item.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });

    // GSAP animations if available
    const win = window as any;
    if (win.gsap && win.ScrollTrigger) {
      const gsap = win.gsap;
      const ScrollTrigger = win.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".cu-why-card", {
        opacity: 0, y: 40, duration: 0.8, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".cu-why-grid", start: "top 80%" },
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="w-full relative">
      <main className="cu-main">

        {/* ═══════════════════════════════════════════
            HERO BANNER — matches rv-hero exactly
        ═══════════════════════════════════════════ */}
        <div className="ayur-hero-wrapper">
          <section className="cu-hero">
            {/* Gradient overlay — same as rehab village */}
            <div
              className="ayur-hero-overlay"
              style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.1) 100%)" }}
            />

            {/* Decorative rings on the right */}
            <div className="cu-hero-visual">
              <div className="cu-hero-ring cu-hero-ring-1" />
              <div className="cu-hero-ring cu-hero-ring-2" />
              <div className="cu-hero-ring cu-hero-ring-3" />
            </div>

            <div className="cu-container" style={{ position: "relative", zIndex: 2 }}>
              <div className="ayur-hero-content">
                <h1 className="cu-title-large">Contact Us</h1>
                <p className="cu-para-large">
                  Get in touch with our multidisciplinary team to start your personalized recovery journey. We're here to help you every step of the way.
                </p>

                <div className="cu-hero-actions">
                  <a href="#appointment-form" className="cu-btn-primary">
                    Book an Appointment
                    <span className="icon-circle">
                      <i data-lucide="arrow-up-right" size={14} />
                    </span>
                  </a>
                  <a href="tel:+918943055555" className="cu-btn-secondary">
                    <i data-lucide="phone" size={14} />
                    +91 89430 55555
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ═══════════════════════════════════════════
            APPOINTMENT FORM + SIDEBAR
        ═══════════════════════════════════════════ */}
        <section
          className="cu-section"
          id="appointment-form"
          style={{ background: "var(--bg-main, #F7F8F7)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="cu-container">
            <div style={{ maxWidth: 680, marginBottom: 16 }}>
              <span className="cu-tagline">Appointment Form</span>
              <h2 className="cu-title-medium cu-text-gradient">
                Book Your Appointment
              </h2>
              <p className="cu-para-medium">
                Fill in your details below. Our Patient Care Team reviews every request and confirms within <strong>24 hours</strong>.
              </p>
            </div>

            <div className="cu-form-layout">
              {/* ── Main Form ── */}
              <div className="cu-glass-panel cu-form-card">
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "60px 20px" }}>
                    <div style={{ marginBottom: 16 }}>
                      <i data-lucide="check-circle" size={64} style={{ color: "var(--primary, #000)" }} />
                    </div>
                    <h3 className="cu-title-small" style={{ fontSize: 24, marginBottom: 12 }}>
                      Appointment Request Received!
                    </h3>
                    <p className="cu-para-medium">
                      Our Patient Care Team will review your details and contact you within <strong>24 hours</strong> to confirm your consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Patient Information */}
                    <div className="cu-form-group-title">Patient Information</div>
                    <div className="cu-form-row">
                      <div className="cu-field">
                        <label className="cu-label">Full Name <span className="cu-required">*</span></label>
                        <input className="cu-input" type="text" placeholder="Your full name" required />
                      </div>
                      <div className="cu-field">
                        <label className="cu-label">Age</label>
                        <input className="cu-input" type="number" placeholder="Age" min={0} max={120} />
                      </div>
                    </div>
                    <div className="cu-form-row">
                      <div className="cu-field">
                        <label className="cu-label">Gender</label>
                        <select className="cu-input cu-select">
                          <option value="">Select gender</option>
                          <option>Male</option><option>Female</option><option>Other</option>
                        </select>
                      </div>
                      <div className="cu-field">
                        <label className="cu-label">Nationality</label>
                        <input className="cu-input" type="text" placeholder="Your nationality" />
                      </div>
                    </div>
                    <div className="cu-form-row">
                      <div className="cu-field">
                        <label className="cu-label">Mobile Number <span className="cu-required">*</span></label>
                        <input className="cu-input" type="tel" placeholder="+91 XXXXX XXXXX" required />
                      </div>
                      <div className="cu-field">
                        <label className="cu-label">WhatsApp Number</label>
                        <input className="cu-input" type="tel" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div className="cu-field">
                      <label className="cu-label">Email Address <span className="cu-required">*</span></label>
                      <input className="cu-input" type="email" placeholder="you@example.com" required />
                    </div>

                    {/* Patient Type */}
                    <div className="cu-form-group-title">Patient Type</div>
                    <div className="cu-radio-group">
                      <label className="cu-radio-row"><input type="radio" name="ptype" defaultChecked /> New Patient</label>
                      <label className="cu-radio-row"><input type="radio" name="ptype" /> Existing Patient</label>
                    </div>
                    <div className="cu-field" style={{ marginTop: 14 }}>
                      <label className="cu-label">Patient ID (if existing)</label>
                      <input className="cu-input" type="text" placeholder="Patient ID" />
                    </div>

                    {/* Consultation Type */}
                    <div className="cu-form-group-title">Preferred Consultation</div>
                    <div className="cu-radio-group">
                      <label className="cu-radio-row"><input type="radio" name="consult" defaultChecked /> In-Person Consultation</label>
                      <label className="cu-radio-row"><input type="radio" name="consult" /> Video Consultation</label>
                      <label className="cu-radio-row"><input type="radio" name="consult" /> Online Consultation</label>
                    </div>

                    {/* Medical Concern */}
                    <div className="cu-form-group-title">Medical Concern</div>
                    <div className="cu-field">
                      <label className="cu-label">Primary Condition</label>
                      <select className="cu-input cu-select">
                        <option value="">Select your condition</option>
                        {medicalConcerns.map((m) => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div className="cu-field">
                      <label className="cu-label">Describe Your Condition</label>
                      <textarea
                        className="cu-input cu-textarea"
                        rows={5}
                        placeholder="Describe your symptoms, diagnosis, previous treatments, surgeries, medications, and current health concerns."
                      />
                    </div>

                    {/* Upload Reports */}
                    <div className="cu-form-group-title">Upload Medical Reports</div>
                    <label htmlFor="cu-file-upload">
                      <div className="cu-upload-zone">
                        <div className="cu-upload-icon">
                          <i data-lucide="upload-cloud" size={24} />
                        </div>
                        <div className="cu-upload-text">Click to upload or drag and drop your reports</div>
                        <div className="cu-upload-formats">
                          PDF · JPG · PNG · DICOM · MRI · CT Scan · X-Ray · Blood Reports · Prescriptions<br />
                          Maximum 100 MB
                        </div>
                      </div>
                    </label>
                    <input id="cu-file-upload" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.dcm" style={{ display: "none" }} />

                    {/* Date & Time */}
                    <div className="cu-form-group-title">Preferred Date & Time</div>
                    <input type="hidden" name="preferred_date" value={selectedDate ? selectedDate.toISOString().split('T')[0] : ""} />
                    <input type="hidden" name="preferred_time" value={selectedTime} />
                    <div className="cu-scheduler-card">
                      <div className="cu-scheduler-header">
                        <div className="cu-scheduler-icon-wrap">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="cu-scheduler-title">Select a time</h3>
                          <p className="cu-scheduler-subtitle">30-min walkthrough · meeting link sent on confirmation</p>
                        </div>
                      </div>

                      <div className="cu-scheduler-datepicker">
                        <button 
                          type="button" 
                          className="cu-date-nav-btn" 
                          onClick={handlePrevWeek} 
                          disabled={weekOffset === 0}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                          </svg>
                        </button>
                        <div className="cu-date-range-label">{formatRangeHeader(days)}</div>
                        <button 
                          type="button" 
                          className="cu-date-nav-btn" 
                          onClick={handleNextWeek}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                          </svg>
                        </button>
                      </div>

                      <div className="cu-days-row">
                        {days.map((day, idx) => {
                          const isSelected = selectedDate.toDateString() === day.toDateString();
                          const isSun = day.getDay() === 0;
                          return (
                            <button
                              key={idx}
                              type="button"
                              className={`cu-day-item${isSelected ? " active" : ""}${isSun ? " disabled" : ""}`}
                              onClick={() => !isSun && setSelectedDate(day)}
                              disabled={isSun}
                            >
                              <span className="cu-day-name">{weekdays[day.getDay()]}</span>
                              <span className="cu-day-number">{day.getDate()}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="cu-available-times-section">
                        <div className="cu-available-times-header">
                          AVAILABLE TIMES · {weekdaysFull[selectedDate.getDay()].toUpperCase()}, {monthsShort[selectedDate.getMonth()].toUpperCase()} {selectedDate.getDate()}
                        </div>
                        
                        <div className="cu-time-grid">
                          {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                className={`cu-time-slot-pill${isSelected ? " active" : ""}`}
                                onClick={() => setSelectedTime(time)}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                        <div className="cu-timezone-info">
                          Times shown in Asia/Calcutta
                        </div>
                      </div>

                      <div className="cu-scheduler-divider">
                        <span>OR</span>
                      </div>

                      <div className="cu-whatsapp-booking">
                        <a 
                          href="https://wa.me/918943055555?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment." 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cu-whatsapp-btn"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "8px" }}>
                            <path d="M12.012 2c-5.506 0-9.978 4.471-9.978 9.978 0 1.764.459 3.49 1.33 5.025l-1.416 5.187 5.308-1.392c1.479.808 3.14 1.233 4.819 1.233 5.506 0 9.978-4.471 9.978-9.978 0-2.659-1.035-5.159-2.915-7.04-1.88-1.88-4.38-2.913-7.039-2.913zm0 1.583c2.233 0 4.333.87 5.912 2.45 1.58 1.58 2.45 3.68 2.45 5.912s-.87 4.333-2.45 5.912c-1.58 1.58-3.68 2.45-5.912 2.45-1.458 0-2.887-.367-4.148-1.062l-.297-.174-3.082.808.822-3.012-.191-.304c-.752-1.205-1.15-2.607-1.15-4.047 0-4.63 3.766-8.397 8.398-8.397z"/>
                          </svg>
                          Prefer to chat? Book over WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* Doctor Preference */}
                    <div className="cu-form-group-title">Preferred Doctor / Speciality</div>
                    <div className="cu-field">
                      <select className="cu-input cu-select">
                        {doctorSpecialities.map((d) => <option key={d}>{d}</option>)}
                      </select>
                    </div>

                    {/* Assistance */}
                    <div className="cu-form-group-title">Additional Assistance Needed</div>
                    <div className="cu-check-grid">
                      {assistanceOptions.map((opt) => (
                        <label key={opt} className="cu-check-row">
                          <input type="checkbox" /> {opt}
                        </label>
                      ))}
                    </div>

                    {/* Emergency Contact */}
                    <div className="cu-form-group-title">Emergency Contact</div>
                    <div className="cu-form-row">
                      <div className="cu-field">
                        <label className="cu-label">Name</label>
                        <input className="cu-input" type="text" placeholder="Contact person name" />
                      </div>
                      <div className="cu-field">
                        <label className="cu-label">Relationship</label>
                        <input className="cu-input" type="text" placeholder="e.g. Spouse, Parent" />
                      </div>
                    </div>
                    <div className="cu-field">
                      <label className="cu-label">Phone Number</label>
                      <input className="cu-input" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    {/* Consent */}
                    <div className="cu-form-group-title">Consent</div>
                    <div className="cu-radio-group" style={{ marginBottom: 24 }}>
                      <label className="cu-check-row">
                        <input type="checkbox" required />
                        I consent to Ayurgreen Hospital contacting me regarding my medical enquiry.
                      </label>
                      <label className="cu-check-row">
                        <input type="checkbox" required />
                        I agree to the{" "}
                        <a href="#" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</a>.
                      </label>
                      <label className="cu-check-row">
                        <input type="checkbox" required />
                        I understand that submitting this form does not guarantee an appointment until confirmed.
                      </label>
                    </div>

                    <button type="submit" className="cu-submit-btn">
                      <i data-lucide="calendar-check" size={18} />
                      Submit Appointment Request
                    </button>
                  </form>
                )}
              </div>

              {/* ── Sidebar ── */}
              <div className="cu-sidebar">


                {/* Quick Contact */}
                <div className="cu-glass-panel cu-sidebar-card">
                  <div className="cu-sidebar-title">Quick Contact</div>
                  <a href="tel:+918943055555" className="cu-contact-item">
                    <div className="cu-contact-icon"><i data-lucide="phone" size={18} /></div>
                    <div>
                      <div className="cu-contact-label">Emergency Line</div>
                      <div className="cu-contact-value">+91 89430 55555</div>
                    </div>
                  </a>
                  <a href="https://wa.me/918943055555" target="_blank" rel="noopener noreferrer" className="cu-contact-item">
                    <div className="cu-contact-icon"><i data-lucide="message-circle" size={18} /></div>
                    <div>
                      <div className="cu-contact-label">WhatsApp</div>
                      <div className="cu-contact-value">Available 24/7</div>
                    </div>
                  </a>
                  <a href="mailto:info@ayurgreenhospitals.com" className="cu-contact-item">
                    <div className="cu-contact-icon"><i data-lucide="mail" size={18} /></div>
                    <div>
                      <div className="cu-contact-label">Email</div>
                      <div className="cu-contact-value" style={{ fontSize: 13 }}>info@ayurgreenhospitals.com</div>
                    </div>
                  </a>
                </div>

                {/* What Happens Next */}
                <div className="cu-glass-panel cu-sidebar-card">
                  <div className="cu-sidebar-title">What Happens Next?</div>
                  {[
                    { n: 1, t: "Request Received", s: "Confirmed instantly" },
                    { n: 2, t: "Team Reviews", s: "Patient Care reviews your details" },
                    { n: 3, t: "Doctor Reviews Reports", s: "If required" },
                    { n: 4, t: "We Contact You", s: "Within 24 hours" },
                    { n: 5, t: "Full Confirmation", s: "Doctor details & instructions" },
                  ].map((step) => (
                    <div key={step.n} className="cu-next-step">
                      <div className="cu-next-step-num">{step.n}</div>
                      <div>
                        <div className="cu-next-step-title">{step.t}</div>
                        <div className="cu-next-step-sub">{step.s}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="cu-glass-panel cu-sidebar-card">
                  <div className="cu-sidebar-title">Our Location</div>
                  <p className="cu-para-medium" style={{ marginBottom: 14, fontSize: 13 }}>
                    Kavilpadi, Edappal – Tirur Road,<br />Vattamkulam, Kerala - 679582
                  </p>
                  <div style={{ borderRadius: 14, overflow: "hidden" }}>
                    <iframe
                      src="https://www.google.com/maps?q=Ayurgreen+Hospital,+Vattamkulam,+Kerala&output=embed"
                      width="100%" height="160"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROCESS TIMELINE (mirrors rv-process-timeline)
        ═══════════════════════════════════════════ */}
        <section
          className="cu-section"
          style={{ background: "var(--bg-main)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="cu-container">
            <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 16px" }}>
              <span className="cu-tagline">The Process</span>
              <h2 className="cu-title-medium cu-text-gradient">What Happens After You Submit?</h2>
              <p className="cu-para-medium">We eliminate every moment of uncertainty after your request.</p>
            </div>

            <div className="cu-process-timeline">
              {[
                { n: "01", icon: "check-circle", t: "Request Received", d: "Your appointment request is confirmed the moment you submit." },
                { n: "02", icon: "users", t: "Team Reviews", d: "Our Patient Care Team reviews your medical details carefully." },
                { n: "03", icon: "stethoscope", t: "Doctor Review", d: "Reports reviewed by the relevant specialist if required." },
                { n: "04", icon: "phone-call", t: "We Contact You", d: "You hear from us within 24 hours to confirm your schedule." },
                { n: "05", icon: "calendar-check", t: "Confirmation Sent", d: "Doctor details, instructions, and payment info delivered to you." },
              ].map((s, i) => (
                <div key={s.n} className="cu-process-card-wrapper">
                  <div className={`cu-glass-panel cu-process-card card-vibrant color-theme-${i}`}>
                    <span className="card-step-num">Step {s.n}</span>
                    <i data-lucide={s.icon} size={28} style={{ marginBottom: 12 }} />
                    <h4 className="cu-title-small" style={{ fontSize: 15, marginBottom: 0 }}>{s.t}</h4>
                    <p className="card-desc">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            EMERGENCY SECTION
        ═══════════════════════════════════════════ */}
        <section className="cu-section">
          <div className="cu-container">
            <div className="cu-emergency-section">
              <div>
                <div className="cu-emergency-label">Urgent Help Needed?</div>
                <h2 className="cu-emergency-title">Need Immediate Help?</h2>
                <p className="cu-emergency-desc">
                  If your condition requires urgent medical attention, don't wait for appointment confirmation. Contact us immediately.
                </p>
              </div>
              <div className="cu-emergency-contacts">
                <a href="tel:+918943055555" className="cu-emergency-contact-card" style={{ textDecoration: "none" }}>
                  <div className="cu-emergency-contact-label">Emergency Line</div>
                  <div className="cu-emergency-contact-value">+91 89430 55555</div>
                  <span className="cu-emergency-contact-badge">Available 24/7</span>
                </a>
                <a href="https://wa.me/918943055555" target="_blank" rel="noopener noreferrer" className="cu-emergency-contact-card" style={{ textDecoration: "none" }}>
                  <div className="cu-emergency-contact-label">WhatsApp Support</div>
                  <div className="cu-emergency-contact-value">Message Us Now</div>
                  <span className="cu-emergency-contact-badge">Online Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHY AYURGREEN — bento grid (rv style)
        ═══════════════════════════════════════════ */}
        <section
          className="cu-section"
          style={{ background: "var(--bg-main)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="cu-container">
            <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 16px" }}>
              <span className="cu-tagline">Why Choose Us</span>
              <h2 className="cu-title-medium cu-text-gradient">Why Book With Ayurgreen?</h2>
              <p className="cu-para-medium">India's pioneer in Integrated Ortho-Neuro Rehabilitation.</p>
            </div>

            <div className="cu-why-grid">
              {/* Card 1 — Integrated Healthcare (col-2) */}
              <div className="cu-glass-panel cu-why-card col-2 card-vibrant color-theme-0">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="building-2" size={24} /></div>
                <h3 className="cu-title-small">Integrated Healthcare</h3>
                <p className="cu-para-medium">
                  Ayurveda, rehabilitation therapies, modern medicine, and advanced technologies combined into individualized treatment plans — a truly holistic recovery under one roof.
                </p>
              </div>

              {/* Card 2 — Multidisciplinary Team */}
              <div className="cu-glass-panel cu-why-card card-vibrant color-theme-1">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="users" size={24} /></div>
                <h3 className="cu-title-small">Multidisciplinary Team</h3>
                <div className="cu-team-pills">
                  {["Neurologists", "Rehab Physicians", "Ayurvedic Doctors", "Physiotherapists", "OT Specialists", "Speech Therapists", "Psychologists", "Dietitians"].map((r) => (
                    <span key={r} className="cu-team-pill">{r}</span>
                  ))}
                </div>
              </div>

              {/* Card 3 — Robotic Tech */}
              <div className="cu-glass-panel cu-why-card card-vibrant color-theme-2">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="bot" size={24} /></div>
                <h3 className="cu-title-small">Advanced Rehab Tech</h3>
                <div className="cu-tech-list">
                  {["Robotic Gait Training", "Robotic Arm Rehabilitation", "Virtual Reality Therapy", "FES Therapy", "Hydrotherapy", "Motor Sensory Garden"].map((t) => (
                    <div key={t} className="cu-tech-item"><div className="cu-tech-dot" />{t}</div>
                  ))}
                </div>
              </div>

              {/* Card 4 — Personalized */}
              <div className="cu-glass-panel cu-why-card card-vibrant color-theme-3">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="clipboard-list" size={24} /></div>
                <h3 className="cu-title-small">Personalized Plans</h3>
                <p className="cu-para-medium">
                  Every patient receives an individualized care plan based on their diagnosis, functional abilities, medical history, and recovery goals. No two patients are treated the same way.
                </p>
              </div>

              {/* Card 5 — International */}
              <div className="cu-glass-panel cu-why-card card-vibrant color-theme-4">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="globe" size={24} /></div>
                <h3 className="cu-title-small">International Support</h3>
                <div className="cu-tech-list">
                  {["Medical Visa Guidance", "Travel Planning", "Accommodation", "Airport Pickup", "Language Support", "Long-Term Stay"].map((t) => (
                    <div key={t} className="cu-tech-item"><div className="cu-tech-dot" />{t}</div>
                  ))}
                </div>
              </div>

              {/* Card 6 — Rehab Village */}
              <div className="cu-glass-panel cu-why-card card-vibrant color-theme-5">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="home" size={24} /></div>
                <h3 className="cu-title-small">Rehab Village</h3>
                <p className="cu-para-medium">
                  Patients needing extended rehabilitation can stay in nearby villas, apartments, or homestays within 5 km of the hospital.
                </p>
                <Link href="/rehab-village" className="cu-btn-outline-dark" style={{ alignSelf: "flex-start", marginTop: 16 }}>
                  Explore <i data-lucide="arrow-up-right" size={14} />
                </Link>
              </div>

              {/* Card 7 — Insurance & Cashless */}
              <div className="cu-glass-panel cu-why-card card-vibrant color-theme-6">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="shield" size={24} /></div>
                <h3 className="cu-title-small">Insurance & Cashless</h3>
                <p className="cu-para-medium">
                  Hassle-free insurance processing with leading TPA partners, ensuring your primary focus remains entirely on your recovery.
                </p>
                <Link href="#appointment-form" className="cu-btn-outline-dark" style={{ alignSelf: "flex-start", marginTop: 16 }}>
                  Claim Insurance <i data-lucide="arrow-up-right" size={14} />
                </Link>
              </div>

              {/* Card 8 — 24/7 Care */}
              <div className="cu-glass-panel cu-why-card card-vibrant color-theme-7">
                <div className="ripple-bg" />
                <div className="card-icon-wrap"><i data-lucide="heart-pulse" size={24} /></div>
                <h3 className="cu-title-small">24/7 Nursing Care</h3>
                <p className="cu-para-medium">
                  Round-the-clock medical supervision and dedicated nursing support ensure safety and immediate attention whenever needed.
                </p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="cu-metrics-row">
              {[
                { num: "25+", label: "Years Excellence" },
                { num: "54+", label: "Countries Served" },
                { num: "10K+", label: "Lives Transformed" },
                { num: "24/7", label: "Emergency Care" },
              ].map((m) => (
                <div key={m.label} className="cu-metric-item">
                  <div className="cu-metric-number">{m.num}</div>
                  <div className="cu-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SPECIALITIES
        ═══════════════════════════════════════════ */}
        <section className="cu-section" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="cu-container">
            <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 16px" }}>
              <span className="cu-tagline">Specialities</span>
              <h2 className="cu-title-medium cu-text-gradient">Our Core Specialities</h2>
              <p className="cu-para-medium">
                Ayurgreen specializes in neurological and orthopedic rehabilitation across a wide spectrum of conditions.
              </p>
            </div>

            <div className="cu-conditions-grid">
              {specialities.map((c, i) => (
                <Link key={c.name} href={`/${c.slug}`} style={{ textDecoration: 'none' }}>
                  <div className={`cu-condition-card path-vibrant color-theme-${i % 21}`}>
                    <div className="cu-condition-icon-wrap">
                      <i data-lucide={c.icon} size={18} />
                    </div>
                    <span className="cu-condition-name">{c.name}</span>
                    <div className="cu-condition-arrow-wrap">
                      <i data-lucide="arrow-right" size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FAQ — split layout
        ═══════════════════════════════════════════ */}
        <section
          className="cu-section"
          style={{ background: "var(--bg-main)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="cu-container">
            <div className="cu-faq-layout">
              {/* Left sticky info */}
              <div style={{ position: "sticky", top: 120 }}>
                <span className="cu-tagline">FAQ</span>
                <h2 className="cu-title-medium cu-text-gradient">
                  Frequently Asked Questions
                </h2>
                <p className="cu-para-medium">
                  Everything you need to know about booking and your consultation journey at Ayurgreen.
                </p>
                <div style={{ marginTop: 32 }}>
                  <div className="cu-glass-panel" style={{ padding: "28px 24px" }}>
                    <i data-lucide="message-circle" size={32} style={{ marginBottom: 12 }} />
                    <h4 className="cu-title-small" style={{ fontSize: 16, marginBottom: 8 }}>Still have questions?</h4>
                    <p className="cu-para-medium" style={{ marginBottom: 20, fontSize: 13 }}>
                      Our Patient Care Team is available to assist you directly.
                    </p>
                    <a href="tel:+918943055555" className="cu-btn-primary-dark" style={{ fontSize: 13 }}>
                      <i data-lucide="phone" size={14} /> Call Us Now
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ List */}
              <div className="cu-faq-list">
                {faqs.map((faq, i) => (
                  <div key={i} className="cu-faq-item">
                    <button className="cu-faq-trigger">
                      <span className="cu-faq-question">{faq.q}</span>
                      <span className="cu-faq-chevron">
                        <i data-lucide="chevron-down" size={16} />
                      </span>
                    </button>
                    <div className="cu-faq-content">
                      <div className="cu-faq-answer">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
