"use client";

import React, { useEffect } from "react";
import "@/styles/rehab-village.css";

export default function RehabVillagePage() {
  useEffect(() => {
    // Render Lucide icons
    if (typeof window !== "undefined") {
      const win = window as any;
      if (win.lucide) {
        win.lucide.createIcons();
      }
    }

    // FAQ Accordions
    const faqItems = document.querySelectorAll('.rv-faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.rv-faq-trigger');
        const content = item.querySelector('.rv-faq-content') as HTMLElement;
        if (trigger && content) {
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close others
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherContent = otherItem.querySelector('.rv-faq-content') as HTMLElement;
                        if (otherContent) otherContent.style.maxHeight = '';
                    }
                });

                if (isActive) {
                    item.classList.remove('active');
                    content.style.maxHeight = '';
                } else {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    });

    // Why Rehab Village Expandable Stack
    const stackCards = document.querySelectorAll('.rv-stack-card');
    stackCards.forEach(card => {
        card.addEventListener('click', () => {
            stackCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });
            card.classList.toggle('active');
        });
    });

    // Accommodation Tabs
    const tabButtons = document.querySelectorAll('.rv-tab-btn');
    const tabContents = document.querySelectorAll('.rv-tab-content');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            if (targetTab) {
                const el = document.getElementById(`tab-${targetTab}`);
                if (el) el.classList.add('active');
            }
        });
    });

    // Ecosystem Wheel Click Details
    const nodes = document.querySelectorAll('.rv-wheel-node');
    const ecoTag = document.getElementById('eco-tag') as HTMLElement;
    const ecoHeading = document.getElementById('eco-heading') as HTMLElement;
    const ecoText = document.getElementById('eco-text') as HTMLElement;

    const stakeholderData: Record<string, { tag: string; heading: string; text: string }> = {
        patients: {
            tag: 'Primary Beneficiary',
            heading: 'Patients',
            text: 'Our patients receive top-quality ortho-neuro rehabilitation programs combining robotics and Ayurveda. They benefit from daily home doctor visits, housekeeping, food support, travel support, and voluntary networks that help them practice independent routines in a warm, welcoming community environment.'
        },
        families: {
            tag: 'Support Pillar',
            heading: 'Families & Caregivers',
            text: 'Caregivers receive complete peace of mind knowing their loved ones are monitored daily in certified home stays. We guide and train families on how to support long-term recovery during and after the stay, and our service villas are designed to comfortably accommodate family members.'
        },
        healthcare: {
            tag: 'Clinical Delivery',
            heading: 'Healthcare Professionals',
            text: 'Doctors, physical therapists, occupational therapists, and speech pathologists visit patient accommodations regularly to check health metrics. They gain professional skill development by working in a community-integrated environment, adapting recovery practices to patients\' active, real-world living situations.'
        },
        accommodation: {
            tag: 'Hospitality Partner',
            heading: 'Accommodation Partners',
            text: 'Local homestay hosts, service villas, and apartments situated within a 5 km radius of Edappal can register to provide long-stay solutions. Onboarding partners receive steady occupancy support, clinical safety clearance, and access to managed housekeeping services.'
        },
        community: {
            tag: 'Socioeconomic Partner',
            heading: 'Local Community',
            text: 'Rehab Village generates job creation, supports responsible medical tourism, and drives economic development for local shops, restaurants, and suppliers. The community offers a welcoming environment where patient recovery is enhanced by natural social exchanges.'
        },
        volunteers: {
            tag: 'Emotional Catalyst',
            heading: 'Volunteers',
            text: 'Volunteers assist patients in daily social activities, accompany them to local outings, coordinate community events, and help record recovery metrics. It is a mutually beneficial pathway where volunteers gain healthcare exposure and career growth while transforming patient well-being.'
        }
    };

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            const key = node.getAttribute('data-node') || '';
            if (stakeholderData[key] && ecoTag && ecoHeading && ecoText) {
                ecoTag.innerText = stakeholderData[key].tag;
                ecoHeading.innerText = stakeholderData[key].heading;
                ecoText.innerText = stakeholderData[key].text;
            }
        });
    });

    // Stakeholder Form Multi-Step & Selector Logic
    const formTabButtons = document.querySelectorAll('.rv-form-tab-btn');
    const stepNodes = document.querySelectorAll('.rv-form-step-node');
    const progressBar = document.getElementById('form-progress-bar') as HTMLElement;
    
    const paneStep1 = document.getElementById('pane-step-1') as HTMLElement;
    const paneStep2 = document.getElementById('pane-step-2') as HTMLElement;
    
    const nextBtn = document.getElementById('form-next-btn') as HTMLElement;
    const backBtn = document.getElementById('form-back-btn') as HTMLElement;
    const submitBtn = document.getElementById('form-submit-btn') as HTMLElement;

    let currentStep = 1;
    let activeCategory = 'patient';

    // Category Tab selector
    formTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            formTabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-form') || 'patient';
            
            // Show corresponding dynamic fields in Step 2
            document.querySelectorAll('.form-dynamic-details').forEach(div => {
                (div as HTMLElement).style.display = 'none';
            });
            const targetDetails = document.getElementById(`details-${activeCategory}`) as HTMLElement;
            if (targetDetails) targetDetails.style.display = 'block';
        });
    });

    // Next step validation
    if (nextBtn && paneStep1 && paneStep2) {
        nextBtn.addEventListener('click', () => {
            const inputs = paneStep1.querySelectorAll('input');
            let valid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    valid = false;
                }
            });

            if (valid) {
                currentStep = 2;
                paneStep1.classList.remove('active');
                paneStep2.classList.add('active');
                
                // Update nodes
                if (stepNodes.length >= 2) {
                    stepNodes[0].classList.add('completed');
                    stepNodes[0].classList.remove('active');
                    stepNodes[1].classList.add('active');
                }
                if (progressBar) progressBar.style.width = '100%';
                
                nextBtn.style.display = 'none';
                if (backBtn) backBtn.style.display = 'block';
                if (submitBtn) submitBtn.style.display = 'block';
            }
        });
    }

    // Back step
    if (backBtn && paneStep1 && paneStep2) {
        backBtn.addEventListener('click', () => {
            currentStep = 1;
            paneStep2.classList.remove('active');
            paneStep1.classList.add('active');
            
            if (stepNodes.length >= 2) {
                stepNodes[0].classList.add('active');
                stepNodes[0].classList.remove('completed');
                stepNodes[1].classList.remove('active');
            }
            if (progressBar) progressBar.style.width = '50%';
            
            if (nextBtn) nextBtn.style.display = 'block';
            backBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'none';
        });
    }

    // GSAP ScrollTrigger Animations
    const win = window as any;
    if (win.gsap && win.ScrollTrigger) {
        const gsap = win.gsap;
        const ScrollTrigger = win.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        // Counter animation
        const counterNumbers = document.querySelectorAll('.rv-metric-number');
        counterNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 85%",
                onEnter: () => {
                    let obj = { val: 0 };
                    gsap.to(obj, {
                        val: target,
                        duration: 2,
                        ease: "power2.out",
                        onUpdate: () => {
                            (counter as HTMLElement).innerText = Math.ceil(obj.val) + "+";
                        }
                    });
                }
            });
        });

        // Timeline Line reveal
        ScrollTrigger.create({
            trigger: ".rv-timeline-horizontal",
            start: "top 80%",
            onEnter: () => {
                const prog = document.getElementById('timeline-progress');
                if (prog) prog.style.width = '100%';
                const steps = document.querySelectorAll('.rv-timeline-step');
                steps.forEach((step, idx) => {
                    setTimeout(() => {
                        step.classList.add('animated');
                        step.classList.add('active');
                    }, idx * 250);
                });
            }
        });

        // Journey Vertical Line progress
        gsap.to("#journey-progress-line", {
            height: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".rv-journey-track",
                start: "top 40%",
                end: "bottom 60%",
                scrub: true
            }
        });

        // Activate individual journey blocks on scroll
        const blocks = document.querySelectorAll('.rv-journey-block');
        blocks.forEach(block => {
            ScrollTrigger.create({
                trigger: block,
                start: "top 65%",
                onEnter: () => block.classList.add('active'),
                onLeaveBack: () => block.classList.remove('active')
            });
        });

        // Stagger reveal other sections
        gsap.from(".rv-bento-card", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".rv-bento-grid",
                start: "top 80%"
            }
        });

        gsap.from(".rv-partner-card", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".rv-partner-grid",
                start: "top 80%"
            }
        });
    }

    // Testimonials Carousel Controls
    const testTrack = document.getElementById('testimonial-track') as HTMLElement;
    const prevTestBtn = document.getElementById('prev-test');
    const nextTestBtn = document.getElementById('next-test');
    let testIndex = 0;

    if (testTrack) {
        const getSlideWidth = () => {
            const slides = testTrack.querySelectorAll('.rv-carousel-slide');
            if (slides.length > 0) {
                const slide = slides[0] as HTMLElement;
                return slide.offsetWidth + 30; // slide width + gap
            }
            return 0;
        };

        const updateCarousel = () => {
            const width = getSlideWidth();
            testTrack.style.transform = `translateX(-${testIndex * width}px)`;
        };

        if (nextTestBtn) {
            nextTestBtn.addEventListener('click', () => {
                const slidesCount = testTrack.querySelectorAll('.rv-carousel-slide').length;
                const itemsVisible = window.innerWidth > 1024 ? 2 : 1;
                if (testIndex < slidesCount - itemsVisible) {
                    testIndex++;
                    updateCarousel();
                } else {
                    testIndex = 0; // Loop back
                    updateCarousel();
                }
            });
        }

        if (prevTestBtn) {
            prevTestBtn.addEventListener('click', () => {
                const slidesCount = testTrack.querySelectorAll('.rv-carousel-slide').length;
                const itemsVisible = window.innerWidth > 1024 ? 2 : 1;
                if (testIndex > 0) {
                    testIndex--;
                    updateCarousel();
                } else {
                    testIndex = slidesCount - itemsVisible; // Loop to end
                    updateCarousel();
                }
            });
        }

        window.addEventListener('resize', updateCarousel);
    }
  }, []);

  return (
    <div className="w-full relative">
      <main className="rv-main">
        <div className="ayur-hero-wrapper">
        <section className="rv-hero">
            <div className="ayur-hero-overlay" style={{"background":"linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%)"}}></div>
            <div className="ayur-container">
                <div className="ayur-hero-content">
                    <h1 className="rv-title-large">Rehab Village</h1>
                    <p className="rv-para-large">A transformative rehabilitation ecosystem where advanced healthcare, comfortable living, and community support come together to help patients regain independence and rebuild life with confidence.</p>
                    <div className="rv-hero-actions">
                        <a href="#about" className="rv-btn-primary">
                            Explore Rehab Village <span className="icon-circle"><i data-lucide="arrow-up-right" size="14"></i></span>
                        </a>
                        <a href="#stakeholder-registration" className="rv-btn-secondary">
                            Become a Partner <span className="icon-circle"><i data-lucide="message-circle" size="14"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>

    
    <section id="about" className="rv-section" style={{"borderTop":"1px solid var(--border)","background":"radial-gradient(circle at 10% 20%, rgba(38, 38, 38, 0.03) 0%, transparent 40%)"}}>
        <div className="rv-container">
            <div className="rv-split-layout">
                
                <div className="rv-illustration-box">
                    <div className="rv-path-item rv-path-1">
                        <div className="rv-path-icon path-vibrant color-theme-0"><i data-lucide="building-2" size="24"></i></div>
                        <div>
                            <h4 className="rv-title-small" style={{"margin":"0"}}>1. Specialized Hospital</h4>
                            <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)","margin":"4px 0 0 0"}}>Intensive ortho-neuro clinical therapy</p>
                        </div>
                        <div className="rv-path-connector"></div>
                    </div>
                    <div className="rv-path-item rv-path-2">
                        <div className="rv-path-icon path-vibrant color-theme-1"><i data-lucide="home" size="24"></i></div>
                        <div>
                            <h4 className="rv-title-small" style={{"margin":"0"}}>2. Accommodations</h4>
                            <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)","margin":"4px 0 0 0"}}>Service villas, homestays, and apartments</p>
                        </div>
                        <div className="rv-path-connector"></div>
                    </div>
                    <div className="rv-path-item rv-path-3">
                        <div className="rv-path-icon path-vibrant color-theme-2"><i data-lucide="sparkles" size="24"></i></div>
                        <div>
                            <h4 className="rv-title-small" style={{"margin":"0"}}>3. Recovery &amp; Independence</h4>
                            <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)","margin":"4px 0 0 0"}}>Community support and complete integration</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <span className="rv-tagline">About Rehab Village</span>
                    <h2 className="rv-title-medium text-gradient">Recovery Doesn't Stop When Hospital Treatment Ends</h2>
                    <p className="rv-para-medium" style={{"marginBottom":"20px"}}>Rehab Village is a transformative initiative by Ayurgreen Hospitals, designed to redefine rehabilitation and patient care. Set amidst a serene village environment, it offers a unique and nurturing space for patients to recover and regain independence.</p>
                    <p className="rv-para-medium" style={{"marginBottom":"24px"}}>By integrating traditional healing techniques with modern medical advancements, Rehab Village ensures holistic, patient-centered care tailored to individual needs. Patients benefit from specialized ortho-neuro rehabilitation programs, extended accommodation facilities, and a supportive community atmosphere that enhances their recovery journey.</p>
                    <div style={{"display":"flex","gap":"40px"}}>
                        <div>
                            <div style={{"fontSize":"32px","fontWeight":"700","color":"var(--accent-green)"}}>5 km</div>
                            <div style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)","marginTop":"4px"}}>Radius of Edappal</div>
                        </div>
                        <div>
                            <div style={{"fontSize":"32px","fontWeight":"700","color":"var(--accent-green)"}}>100%</div>
                            <div style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)","marginTop":"4px"}}>Community Integrated</div>
                        </div>
                    </div>
                </div>
            </div>
 
            
            <div className="rv-timeline-horizontal">
                <div className="rv-timeline-line">
                    <div className="rv-timeline-line-fill" id="timeline-progress"></div>
                </div>
                
                <div className="rv-timeline-step" data-step="1">
                    <div className="rv-timeline-dot path-vibrant color-theme-0">1</div>
                    <h4 className="rv-title-small" style={{"fontSize":"16px"}}>Admission</h4>
                    <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Clinical consultation &amp; onboarding</p>
                </div>
                <div className="rv-timeline-step" data-step="2">
                    <div className="rv-timeline-dot path-vibrant color-theme-1">2</div>
                    <h4 className="rv-title-small" style={{"fontSize":"16px"}}>Accommodation</h4>
                    <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Allocating specialized village stay</p>
                </div>
                <div className="rv-timeline-step" data-step="3">
                    <div className="rv-timeline-dot path-vibrant color-theme-2">3</div>
                    <h4 className="rv-title-small" style={{"fontSize":"16px"}}>Therapy</h4>
                    <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Integrated clinic-based treatments</p>
                </div>
                <div className="rv-timeline-step" data-step="4">
                    <div className="rv-timeline-dot path-vibrant color-theme-3">4</div>
                    <h4 className="rv-title-small" style={{"fontSize":"16px"}}>Recovery</h4>
                    <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Adapting to daily residential living</p>
                </div>
                <div className="rv-timeline-step" data-step="5">
                    <div className="rv-timeline-dot path-vibrant color-theme-4">5</div>
                    <h4 className="rv-title-small" style={{"fontSize":"16px"}}>Independence</h4>
                    <p style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Returning to life with full confidence</p>
                </div>
            </div>
        </div>
    </section>
 
    
    <section className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 60px auto"}}>
                <span className="rv-tagline">Integrated Stay</span>
                <h2 className="rv-title-medium text-gradient">The Rehab Village Experience</h2>
                <p className="rv-para-medium">Combining clinical excellence with village hospitality to create a comprehensive healing environment.</p>
            </div>
            
            <div className="rv-bento-grid">
                
                <div className="rv-glass-panel rv-bento-card col-2  card-vibrant color-theme-0">
                    <div className="ripple-bg"></div>
                    <div>
                        <div className="card-icon-wrap"><i data-lucide="home" size="24"></i></div>
                        <h3 className="rv-title-small">Service Villas</h3>
                        <p className="rv-para-medium">Comfortable long-stay private accommodations fully wheelchair accessible, designed to keep you close to nature and support networks.</p>
                    </div>
                </div>
                
                <div className="rv-glass-panel rv-bento-card  card-vibrant color-theme-1">
                    <div className="ripple-bg"></div>
                    <div>
                        <div className="card-icon-wrap"><i data-lucide="users" size="24"></i></div>
                        <h3 className="rv-title-small">Homestays</h3>
                        <p className="rv-para-medium">Authentic local community homestays fostering emotional support and social integration.</p>
                    </div>
                </div>
                
                <div className="rv-glass-panel rv-bento-card  card-vibrant color-theme-2">
                    <div className="ripple-bg"></div>
                    <div>
                        <div className="card-icon-wrap"><i data-lucide="stethoscope" size="24"></i></div>
                        <h3 className="rv-title-small">Doctor Visits</h3>
                        <p className="rv-para-medium">Daily medical monitoring at your accommodation based on health status.</p>
                    </div>
                </div>
                
                <div className="rv-glass-panel rv-bento-card col-2  card-vibrant color-theme-3">
                    <div className="ripple-bg"></div>
                    <div>
                        <div className="card-icon-wrap"><i data-lucide="utensils" size="24"></i></div>
                        <h3 className="rv-title-small">Food Support</h3>
                        <p className="rv-para-medium">Customized dietary options with door-to-door restaurant delivery, ensuring high-nutrition support during recovery.</p>
                    </div>
                </div>
                
                <div className="rv-glass-panel rv-bento-card col-2  card-vibrant color-theme-4">
                    <div className="ripple-bg"></div>
                    <div>
                        <div className="card-icon-wrap"><i data-lucide="sparkles" size="24"></i></div>
                        <h3 className="rv-title-small">Laundry &amp; Housekeeping</h3>
                        <p className="rv-para-medium">Hassle-free, premium cleaning services for all long-stay guests, letting you focus completely on healing.</p>
                    </div>
                </div>
                
                <div className="rv-glass-panel rv-bento-card  card-vibrant color-theme-5">
                    <div className="ripple-bg"></div>
                    <div>
                        <div className="card-icon-wrap"><i data-lucide="car" size="24"></i></div>
                        <h3 className="rv-title-small">Transportation Support</h3>
                        <p className="rv-para-medium">Easy, dedicated shuttle links directly to Ayurgreen Hospitals for clinical treatments.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    
    <section className="rv-section" style={{"background":"radial-gradient(circle at 50% 50%, rgba(38, 38, 38, 0.04) 0%, transparent 60%)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div className="rv-vm-grid">
                
                <div className="rv-svg-line-container">
                    <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
                        <path d="M 100 200 Q 500 50 900 200 Q 500 350 100 200 Z"></path>
                    </svg>
                </div>
                
                <div className="rv-glass-panel " style={{"position":"relative","zIndex":"5"}}>
                    <span className="rv-tagline">The Vision</span>
                    <h3 className="rv-title-medium text-gradient" style={{"fontSize":"28px"}}>To Redefine Community Rehabilitation Globally</h3>
                    <p className="rv-para-medium" style={{"fontSize":"16px","lineHeight":"1.7","color":"var(--text-muted, #6B7280)"}}>To be a globally recognized leader in community-integrated rehabilitation, blending advanced therapeutic care with a supportive village atmosphere. Rehab Village strives to empower patients to regain independence while contributing to local economic development through sustainable partnerships with the community, enhancing both healthcare and livelihoods.</p>
                </div>
                
                <div className="rv-glass-panel " style={{"position":"relative","zIndex":"5"}}>
                    <span className="rv-tagline">The Mission</span>
                    <h3 className="rv-title-medium text-gradient" style={{"fontSize":"28px"}}>Holistic, Patient-Centered Clinical Pathways</h3>
                    <p className="rv-para-medium" style={{"fontSize":"16px","lineHeight":"1.7","color":"var(--text-muted, #6B7280)"}}>To provide accessible, affordable and holistic rehabilitation services through state-of-the-art facilities, expert care, and partnerships with local communities. Ayurgreen Rehab village is committed to enhancing patient well-being by combining traditional and modern therapies, prioritizing personalized care, and promoting responsible tourism that contributes to economic and social growth.</p>
                </div>
            </div>
        </div>
    </section>
 
    
    <section className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 50px auto"}}>
                <span className="rv-tagline">The Process</span>
                <h2 className="rv-title-medium text-gradient">How Rehab Village Works</h2>
                <p className="rv-para-medium">Our structured operational pathway ensures seamless transitioning from diagnostic assessment to clinical recovery.</p>
            </div>
 
            <div className="rv-process-timeline">
                
                <div className="rv-process-card-wrapper">
                    <div className="rv-glass-panel rv-process-card  card-vibrant color-theme-0">
                        <span className="card-step-num">Step 01</span>
                        <i data-lucide="message-square-plus" size="28" style={{"color":"var(--accent-green)","marginBottom":"12px"}}></i>
                        <h4 className="rv-title-small" style={{"fontSize":"16px","marginBottom":"0"}}>Patient Consultation</h4>
                        <p className="card-desc">Initial consultation at Ayurgreen Hospital to understand history.</p>
                    </div>
                </div>
                
                <div className="rv-process-card-wrapper">
                    <div className="rv-glass-panel rv-process-card  card-vibrant color-theme-1">
                        <span className="card-step-num">Step 02</span>
                        <i data-lucide="clipboard-check" size="28" style={{"color":"var(--accent-green)","marginBottom":"12px"}}></i>
                        <h4 className="rv-title-small" style={{"fontSize":"16px","marginBottom":"0"}}>Treatment Assessment</h4>
                        <p className="card-desc">Detailed assessment to design the personalized rehab pathway.</p>
                    </div>
                </div>
                
                <div className="rv-process-card-wrapper">
                    <div className="rv-glass-panel rv-process-card  card-vibrant color-theme-2">
                        <span className="card-step-num">Step 03</span>
                        <i data-lucide="key" size="28" style={{"color":"var(--accent-green)","marginBottom":"12px"}}></i>
                        <h4 className="rv-title-small" style={{"fontSize":"16px","marginBottom":"0"}}>Accommodation Selection</h4>
                        <p className="card-desc">Allocating homestays, service villas, or apartments within 5km.</p>
                    </div>
                </div>
                
                <div className="rv-process-card-wrapper">
                    <div className="rv-glass-panel rv-process-card  card-vibrant color-theme-3">
                        <span className="card-step-num">Step 04</span>
                        <i data-lucide="activity" size="28" style={{"color":"var(--accent-green)","marginBottom":"12px"}}></i>
                        <h4 className="rv-title-small" style={{"fontSize":"16px","marginBottom":"0"}}>Daily Rehabilitation</h4>
                        <p className="card-desc">Clinical therapies coupled with medical supervision at villas.</p>
                    </div>
                </div>
                
                <div className="rv-process-card-wrapper">
                    <div className="rv-glass-panel rv-process-card  card-vibrant color-theme-4">
                        <span className="card-step-num">Step 05</span>
                        <i data-lucide="users-2" size="28" style={{"color":"var(--accent-green)","marginBottom":"12px"}}></i>
                        <h4 className="rv-title-small" style={{"fontSize":"16px","marginBottom":"0"}}>Community Living</h4>
                        <p className="card-desc">Socializing and participating in safe neighborhood activities.</p>
                    </div>
                </div>
                
                <div className="rv-process-card-wrapper">
                    <div className="rv-glass-panel rv-process-card  card-vibrant color-theme-5">
                        <span className="card-step-num">Step 06</span>
                        <i data-lucide="award" size="28" style={{"color":"var(--accent-green)","marginBottom":"12px"}}></i>
                        <h4 className="rv-title-small" style={{"fontSize":"16px","marginBottom":"0"}}>Independence</h4>
                        <p className="card-desc">Completing the milestone and returning home fully independent.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section">
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 80px auto"}}>
                <span className="rv-tagline">Life in the Village</span>
                <h2 className="rv-title-medium text-gradient">Daily Life at Rehab Village</h2>
                <p className="rv-para-medium">Every detail is structured to keep recovery comfortable, encouraging, and seamlessly integrated into local life.</p>
            </div>

            
            <div className="rv-lifestyle-row">
                <div className="rv-lifestyle-content">
                    <span className="rv-tagline">Clinical Support</span>
                    <h3 className="rv-title-small" style={{"fontSize":"26px"}}>Daily Doctor Visits</h3>
                    <p className="rv-para-medium">Patients receive visits from doctors once a day directly at their accommodation, as per their health status. This ensures continuous clinical monitoring while giving the comfort of homelike living.</p>
                </div>
                <div className="rv-lifestyle-visual">
                    <div className="rv-lifestyle-visual-overlay">
                        <i data-lucide="stethoscope" size="48"></i>
                        <span>Diagnostic Visual Representation</span>
                    </div>
                </div>
            </div>

            
            <div className="rv-lifestyle-row reverse">
                <div className="rv-lifestyle-content">
                    <span className="rv-tagline">Dining Convenience</span>
                    <h3 className="rv-title-small" style={{"fontSize":"26px"}}>Food Delivery Support</h3>
                    <p className="rv-para-medium">Healthy recovery requires balanced nutrition. We provide door-to-door delivery support directly from our specialized restaurant partners. Enjoy customized meal plans delivered directly to your doorstep.</p>
                </div>
                <div className="rv-lifestyle-visual">
                    <div className="rv-lifestyle-visual-overlay">
                        <i data-lucide="utensils-crosskeys" size="48"></i>
                        <span>Nutritional Visual Representation</span>
                    </div>
                </div>
            </div>

            
            <div className="rv-lifestyle-row">
                <div className="rv-lifestyle-content">
                    <span className="rv-tagline">Convenient Stays</span>
                    <h3 className="rv-title-small" style={{"fontSize":"26px"}}>Laundry &amp; Housekeeping</h3>
                    <p className="rv-para-medium">Long-term stay is made completely comfortable. Additional services include professional housekeeping and laundry, keeping your living space clean and sanitized without you lifting a finger.</p>
                </div>
                <div className="rv-lifestyle-visual">
                    <div className="rv-lifestyle-visual-overlay">
                        <i data-lucide="shirt" size="48"></i>
                        <span>Housekeeping Visual Representation</span>
                    </div>
                </div>
            </div>

            
            <div className="rv-lifestyle-row reverse">
                <div className="rv-lifestyle-content">
                    <span className="rv-tagline">Advanced Therapy</span>
                    <h3 className="rv-title-small" style={{"fontSize":"26px"}}>Treatment at Ayurgreen Hospital</h3>
                    <p className="rv-para-medium">While accommodations are residential, all specialized treatments are provided exclusively at Ayurgreen Hospital. Patients can access state-of-the-art robotic systems, physical rehab, speech therapy, and clinical supervision.</p>
                </div>
                <div className="rv-lifestyle-visual">
                    <div className="rv-lifestyle-visual-overlay">
                        <i data-lucide="hospital" size="48"></i>
                        <span>Clinical Visual Representation</span>
                    </div>
                </div>
            </div>

            
            <div className="rv-lifestyle-row">
                <div className="rv-lifestyle-content">
                    <span className="rv-tagline">Social Care</span>
                    <h3 className="rv-title-small" style={{"fontSize":"26px"}}>Volunteer Assistance</h3>
                    <p className="rv-para-medium">Patients are supported by our active volunteer network, helping them join community gatherings, interact with neighbors, and participate in rehabilitation exercises for emotional well-being.</p>
                </div>
                <div className="rv-lifestyle-visual">
                    <div className="rv-lifestyle-visual-overlay">
                        <i data-lucide="heart" size="48"></i>
                        <span>Support Visual Representation</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div className="rv-wheel-wrap">
                
                <div className="rv-wheel-visual-side">
                    <div className="rv-wheel-center">
                        Rehab Village<br />Ecosystem
                    </div>
                    <div className="rv-wheel-orbit">
                        
                    </div>
                    
                    <div className="rv-wheel-node active node-1 wheel-vibrant color-theme-0" data-node="patients">
                        <i data-lucide="user" size="28"></i>
                        <span className="rv-map-label" style={{"position":"absolute","bottom":"-30px"}}>Patients</span>
                    </div>
                    <div className="rv-wheel-node node-2 wheel-vibrant color-theme-1" data-node="families">
                        <i data-lucide="users" size="28"></i>
                        <span className="rv-map-label" style={{"position":"absolute","bottom":"-30px"}}>Families</span>
                    </div>
                    <div className="rv-wheel-node node-3 wheel-vibrant color-theme-2" data-node="healthcare">
                        <i data-lucide="stethoscope" size="28"></i>
                        <span className="rv-map-label" style={{"position":"absolute","bottom":"-30px"}}>Professionals</span>
                    </div>
                    <div className="rv-wheel-node node-4 wheel-vibrant color-theme-3" data-node="accommodation">
                        <i data-lucide="home" size="28"></i>
                        <span className="rv-map-label" style={{"position":"absolute","bottom":"-30px"}}>Partners</span>
                    </div>
                    <div className="rv-wheel-node node-5 wheel-vibrant color-theme-4" data-node="community">
                        <i data-lucide="building" size="28"></i>
                        <span className="rv-map-label" style={{"position":"absolute","bottom":"-30px"}}>Community</span>
                    </div>
                    <div className="rv-wheel-node node-6 wheel-vibrant color-theme-5" data-node="volunteers">
                        <i data-lucide="heart" size="28"></i>
                        <span className="rv-map-label" style={{"position":"absolute","bottom":"-30px"}}>Volunteers</span>
                    </div>
                </div>

                
                <div className="rv-glass-panel rv-wheel-info-panel" id="ecosystem-details-panel">
                    <span className="rv-tagline" id="eco-tag">Stakeholder Focus</span>
                    <h3 className="rv-title-medium text-gradient" id="eco-heading">Ecosystem Partners</h3>
                    <p className="rv-para-medium" id="eco-text">Select any stakeholder node on the wheel to see how they contribute to and benefit from the Rehab Village network.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section">
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 50px auto"}}>
                <span className="rv-tagline">Why Choose Us</span>
                <h2 className="rv-title-medium text-gradient">Why Rehab Village?</h2>
                <p className="rv-para-medium">A specialized initiative bridging modern medical approaches with village-style residential healing.</p>
            </div>

            <div className="rv-stack-container">
                
                <div className="rv-stack-card active  card-vibrant color-theme-0" data-index="0">
                    <div className="rv-stack-card-left">
                        <div className="rv-stack-icon"><i data-lucide="user" size="20"></i></div>
                        <h3>For Patients</h3>
                    </div>
                    <div className="rv-stack-details">
                        Affordable and personalized care in a supportive environment, complemented by extended accommodation facilities such as service villas and apartments. Additional services include volunteer support, daily doctor visits, 24/7 support, travel assistance, housekeeping, laundry services, and door-to-door delivery from the restaurant, ensuring a seamless and comfortable experience.
                    </div>
                    <div className="rv-stack-arrow"><i data-lucide="chevron-down" size="20"></i></div>
                </div>
                
                <div className="rv-stack-card  card-vibrant color-theme-1" data-index="1">
                    <div className="rv-stack-card-left">
                        <div className="rv-stack-icon"><i data-lucide="heart" size="20"></i></div>
                        <h3>For Caregivers</h3>
                    </div>
                    <div className="rv-stack-details">
                        Peace of mind knowing loved ones are in expert hands and receiving holistic, 24/7 clinical monitoring. Reassuring transition back into community-based life while enjoying clean, comfortable, and spacious accommodations with support systems.
                    </div>
                    <div className="rv-stack-arrow"><i data-lucide="chevron-down" size="20"></i></div>
                </div>
                
                <div className="rv-stack-card  card-vibrant color-theme-2" data-index="2">
                    <div className="rv-stack-card-left">
                        <div className="rv-stack-icon"><i data-lucide="stethoscope" size="20"></i></div>
                        <h3>For Healthcare Professionals</h3>
                    </div>
                    <div className="rv-stack-details">
                        Unique opportunities for skill development and contributions to innovative rehabilitation practices, testing new recovery models in real-world community-integrated environments.
                    </div>
                    <div className="rv-stack-arrow"><i data-lucide="chevron-down" size="20"></i></div>
                </div>
                
                <div className="rv-stack-card  card-vibrant color-theme-3" data-index="3">
                    <div className="rv-stack-card-left">
                        <div className="rv-stack-icon"><i data-lucide="trending-up" size="20"></i></div>
                        <h3>For Local Businesses</h3>
                    </div>
                    <div className="rv-stack-details">
                        Increased economic activity through partnerships with accommodation providers, transport providers, local restaurants, and daily supplies, strengthening regional micro-economies.
                    </div>
                    <div className="rv-stack-arrow"><i data-lucide="chevron-down" size="20"></i></div>
                </div>
                
                <div className="rv-stack-card  card-vibrant color-theme-4" data-index="4">
                    <div className="rv-stack-card-left">
                        <div className="rv-stack-icon"><i data-lucide="users" size="20"></i></div>
                        <h3>For Volunteers</h3>
                    </div>
                    <div className="rv-stack-details">
                        Meaningful engagement and the chance to make a positive impact in patients' recovery milestones, gaining valuable exposure and career development paths in health services.
                    </div>
                    <div className="rv-stack-arrow"><i data-lucide="chevron-down" size="20"></i></div>
                </div>
                
                <div className="rv-stack-card  card-vibrant color-theme-5" data-index="5">
                    <div className="rv-stack-card-left">
                        <div className="rv-stack-icon"><i data-lucide="globe" size="20"></i></div>
                        <h3>Government &amp; Tourism Integration</h3>
                    </div>
                    <div className="rv-stack-details">
                        Strong collaboration with government and local bodies to ensure seamless operations, infrastructure support, and enhanced accessibility. Promoting medical and responsible tourism to boost economic and cultural engagement while fostering sustainable community growth.
                    </div>
                    <div className="rv-stack-arrow"><i data-lucide="chevron-down" size="20"></i></div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 50px auto"}}>
                <span className="rv-tagline">Stay Options</span>
                <h2 className="rv-title-medium text-gradient">Accommodation Ecosystem</h2>
                <p className="rv-para-medium">Diverse range of fully-furnished options situated within a 5 km radius of Ayurgreen Hospital (Edappal).</p>
            </div>

            
            <div className="rv-tabs-header">
                <button className="rv-tab-btn active" data-tab="homestays">🏡 Homestays</button>
                <button className="rv-tab-btn" data-tab="villas">🏘 Service Villas</button>
                <button className="rv-tab-btn" data-tab="apartments">🏢 Apartments</button>
            </div>

            
            <div className="rv-tab-content active" id="tab-homestays">
                <div className="rv-acc-grid">
                    
                    <div className="rv-acc-card  card-vibrant color-theme-0">
                        <div className="rv-acc-img-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span className="rv-acc-tag">Homestay Premium</span>
                        </div>
                        <div className="rv-acc-details-panel">
                            <h4 className="rv-title-small">Green Meadows Homestay</h4>
                            <p className="rv-para-medium" style={{"fontSize":"13.5px"}}>Experience the warmth of a local family environment while recovering in a private guest suite.</p>
                            <div className="rv-acc-amenities">
                                <span className="rv-acc-badge">2 Guests</span>
                                <span className="rv-acc-badge">Wheelchair Ramp</span>
                                <span className="rv-acc-badge">AC</span>
                                <span className="rv-acc-badge">Attached Bath</span>
                            </div>
                            <div className="rv-acc-footer">
                                <span>Edappal Center</span>
                                <span>2.8 km away</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rv-acc-card  card-vibrant color-theme-1">
                        <div className="rv-acc-img-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span className="rv-acc-tag">Homestay Standard</span>
                        </div>
                        <div className="rv-acc-details-panel">
                            <h4 className="rv-title-small">Kovilakam Heritage Stay</h4>
                            <p className="rv-para-medium" style={{"fontSize":"13.5px"}}>Traditional design heritage home with wheelchair friendly walkways and quiet gardens.</p>
                            <div className="rv-acc-amenities">
                                <span className="rv-acc-badge">3 Guests</span>
                                <span className="rv-acc-badge">Veranda</span>
                                <span className="rv-acc-badge">Organic Food</span>
                            </div>
                            <div className="rv-acc-footer">
                                <span>Vattamkulam</span>
                                <span>3.5 km away</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rv-acc-card  card-vibrant color-theme-2">
                        <div className="rv-acc-img-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span className="rv-acc-tag">Homestay Premium</span>
                        </div>
                        <div className="rv-acc-details-panel">
                            <h4 className="rv-title-small">Riverview Retreat</h4>
                            <p className="rv-para-medium" style={{"fontSize":"13.5px"}}>Tranquil riverside homestay with host assistance, specialized Ayurvedic diet options.</p>
                            <div className="rv-acc-amenities">
                                <span className="rv-acc-badge">2 Guests</span>
                                <span className="rv-acc-badge">River View</span>
                                <span className="rv-acc-badge">Wi-Fi</span>
                                <span className="rv-acc-badge">Grab Bars</span>
                            </div>
                            <div className="rv-acc-footer">
                                <span>Thavanur Road</span>
                                <span>4.2 km away</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="rv-tab-content" id="tab-villas">
                <div className="rv-acc-grid">
                    
                    <div className="rv-acc-card  card-vibrant color-theme-3">
                        <div className="rv-acc-img-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span className="rv-acc-tag">Service Villa VIP</span>
                        </div>
                        <div className="rv-acc-details-panel">
                            <h4 className="rv-title-small">Emerald Green Villa</h4>
                            <p className="rv-para-medium" style={{"fontSize":"13.5px"}}>Premium private villas fully wheelchair accessible, designed to keep patients connected to nature.</p>
                            <div className="rv-acc-amenities">
                                <span className="rv-acc-badge">4 Guests</span>
                                <span className="rv-acc-badge">Hospital Bed Compatible</span>
                                <span className="rv-acc-badge">Kitchen</span>
                            </div>
                            <div className="rv-acc-footer">
                                <span>Ayurgreen Enclave</span>
                                <span>1.2 km away</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rv-acc-card  card-vibrant color-theme-4">
                        <div className="rv-acc-img-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span className="rv-acc-tag">Service Villa Standard</span>
                        </div>
                        <div className="rv-acc-details-panel">
                            <h4 className="rv-title-small">Palm Breeze Cottage</h4>
                            <p className="rv-para-medium" style={{"fontSize":"13.5px"}}>Charming independent cottage surrounded by medicinal herbs, with custom accessibility features.</p>
                            <div className="rv-acc-amenities">
                                <span className="rv-acc-badge">3 Guests</span>
                                <span className="rv-acc-badge">Private Lawn</span>
                                <span className="rv-acc-badge">Nurse Call Link</span>
                            </div>
                            <div className="rv-acc-footer">
                                <span>Ayurgreen Enclave</span>
                                <span>1.5 km away</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="rv-tab-content" id="tab-apartments">
                <div className="rv-acc-grid">
                    
                    <div className="rv-acc-card  card-vibrant color-theme-5">
                        <div className="rv-acc-img-wrap">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <span className="rv-acc-tag">Apartment 1 BHK</span>
                        </div>
                        <div className="rv-acc-details-panel">
                            <h4 className="rv-title-small">Ayur Residency Suite 402</h4>
                            <p className="rv-para-medium" style={{"fontSize":"13.5px"}}>Premium elevator-connected high-rise suite, wheelchair friendly layout with medical grab-bars.</p>
                            <div className="rv-acc-amenities">
                                <span className="rv-acc-badge">2 Guests</span>
                                <span className="rv-acc-badge">Elevator Access</span>
                                <span className="rv-acc-badge">Balcony</span>
                            </div>
                            <div className="rv-acc-footer">
                                <span>Edappal Bypass</span>
                                <span>2.0 km away</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section">
        <div className="rv-container">
            <div className="rv-map-layout">
                <div>
                    <span className="rv-tagline">Global Reach</span>
                    <h2 className="rv-title-medium text-gradient">Medical Tourism Advantage</h2>
                    <p className="rv-para-medium" style={{"marginBottom":"24px"}}>Rehab Village serves as a premium hub for international patients seeking affordable, long-term rehabilitation combined with the healing power of authentic Ayurveda.</p>
                    <ul style={{"listStyle":"none","padding":"0","display":"flex","flexDirection":"column","gap":"16px"}}>
                        <li style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
                            <i data-lucide="check-circle" size="20" style={{"color":"var(--accent-green)","flexShrink":"0"}}></i>
                            <span><strong>Long-Term Recovery:</strong> Comfortable, extended stays that prevent premature discharge.</span>
                        </li>
                        <li style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
                            <i data-lucide="check-circle" size="20" style={{"color":"var(--accent-green)","flexShrink":"0"}}></i>
                            <span><strong>Affordable Accommodations:</strong> Save up to 70% compared to typical long-stay hospital rooms.</span>
                        </li>
                        <li style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
                            <i data-lucide="check-circle" size="20" style={{"color":"var(--accent-green)","flexShrink":"0"}}></i>
                            <span><strong>Cultural Comfort &amp; Cuisine:</strong> Custom global diets, translators, and prayer rooms.</span>
                        </li>
                    </ul>
                </div>

                
                <div className="rv-map-graphic">
                    
                    <div style={{"position":"absolute","inset":"0","background":"url('Assets/generated/world_map_dots.webp') center/cover no-repeat","opacity":"0.15"}}></div>
                    <svg className="rv-map-connection" viewBox="0 0 500 400">
                        
                        
                        <path d="M 120 100 Q 250 120 380 200"></path>
                        
                        <path d="M 230 170 Q 300 180 380 200"></path>
                        
                        <path d="M 160 270 Q 270 260 380 200"></path>
                    </svg>

                    
                    <div className="rv-map-point point-europe">
                        <div className="rv-map-dot"></div>
                        <span className="rv-map-label">Europe</span>
                    </div>
                    <div className="rv-map-point point-me">
                        <div className="rv-map-dot"></div>
                        <span className="rv-map-label">Middle East</span>
                    </div>
                    <div className="rv-map-point point-africa">
                        <div className="rv-map-dot"></div>
                        <span className="rv-map-label">Africa</span>
                    </div>
                    <div className="rv-map-point point-india">
                        <div className="rv-map-dot"></div>
                        <span className="rv-map-label">Ayurgreen, India</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div className="rv-split-layout">
                
                <div className="rv-volunteer-visual">
                    <div className="rv-volunteer-visual-overlay">
                        <i data-lucide="heart" size="64"></i>
                        <span>Supporting Patient Journeys</span>
                        <p>Volunteers helping patients transition to daily independent routines.</p>
                    </div>
                </div>
                
                <div>
                    <span className="rv-tagline">Volunteer Program</span>
                    <h2 className="rv-title-medium text-gradient">Make a Meaningful Impact</h2>
                    <p className="rv-para-medium">Volunteering at Ayurgreen Hospital &amp; Rehab Village is a mutually beneficial experience. The organization gains valuable support in patient care and daily operations, while volunteers receive practical experience, skill development, and opportunities for personal and career growth.</p>
                    
                    <div className="rv-quote-box">
"Make a meaningful impact while gaining valuable healthcare and rehabilitation experience."
                    </div>

                    <div className="rv-v-grid">
                        <div className="rv-v-card  vision-vibrant color-theme-0">
                            <i data-lucide="check" size="18"></i>
                            <h4 style={{"margin":"0","fontSize":"15px"}}>Daily Assistance</h4>
                            <p style={{"fontSize":"12.5px","color":"var(--text-muted, #6B7280)","margin":"0"}}>Assisting patients with daily activities and therapeutic sessions.</p>
                        </div>
                        <div className="rv-v-card  vision-vibrant color-theme-1">
                            <i data-lucide="sparkles" size="18"></i>
                            <h4 style={{"margin":"0","fontSize":"15px"}}>Community Events</h4>
                            <p style={{"fontSize":"12.5px","color":"var(--text-muted, #6B7280)","margin":"0"}}>Organizing and participating in recreational and community events.</p>
                        </div>
                        <div className="rv-v-card  vision-vibrant color-theme-2">
                            <i data-lucide="file-text" size="18"></i>
                            <h4 style={{"margin":"0","fontSize":"15px"}}>Administrative Support</h4>
                            <p style={{"fontSize":"12.5px","color":"var(--text-muted, #6B7280)","margin":"0"}}>Providing administrative support and coordinating stakeholder networks.</p>
                        </div>
                        <div className="rv-v-card  vision-vibrant color-theme-3">
                            <i data-lucide="book-open" size="18"></i>
                            <h4 style={{"margin":"0","fontSize":"15px"}}>Research Support</h4>
                            <p style={{"fontSize":"12.5px","color":"var(--text-muted, #6B7280)","margin":"0"}}>Contributing to rehabilitation research and outcome documentation.</p>
                        </div>
                    </div>

                    <div style={{"marginTop":"32px"}}>
                        <a href="#stakeholder-registration" className="rv-btn-primary">Become a Volunteer <i data-lucide="heart" size="16"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section">
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 60px auto"}}>
                <span className="rv-tagline">Collaborate</span>
                <h2 className="rv-title-medium text-gradient">Partnership Opportunities</h2>
                <p className="rv-para-medium">Rehab Village welcomes collaborations with a variety of stakeholders to enhance its operations and expand its impact.</p>
            </div>

            <div className="rv-partner-grid">
                
                <div className="rv-glass-panel rv-partner-card">
                    <div>
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Property Owners</span>
                        <h3 className="rv-title-small" style={{"fontSize":"22px","marginTop":"8px"}}>Accommodation Partners</h3>
                        <p className="rv-para-medium" style={{"fontSize":"14px"}}>Register properties within a 5 km radius of Edappal (homestays, service villas, apartments) to house patients and families.</p>
                        <ul className="rv-partner-list">
                            <li><i data-lucide="check-circle" size="16"></i> Extended stays (1-6 months)</li>
                            <li><i data-lucide="check-circle" size="16"></i> Consistent occupancy rates</li>
                            <li><i data-lucide="check-circle" size="16"></i> Managed cleaning support</li>
                        </ul>
                    </div>
                    <a href="#stakeholder-registration" className="rv-btn-primary text-center justify-content-center">Apply as Stay Partner</a>
                </div>
                
                <div className="rv-glass-panel rv-partner-card">
                    <div>
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Fleet Operators</span>
                        <h3 className="rv-title-small" style={{"fontSize":"22px","marginTop":"8px"}}>Transportation Providers</h3>
                        <p className="rv-para-medium" style={{"fontSize":"14px"}}>Partner with us to provide reliable, comfortable, and accessible vehicle solutions for individual or group passenger transfers.</p>
                        <ul className="rv-partner-list">
                            <li><i data-lucide="check-circle" size="16"></i> Wheelchair accessible ramps</li>
                            <li><i data-lucide="check-circle" size="16"></i> Hospital-to-village shuttles</li>
                            <li><i data-lucide="check-circle" size="16"></i> Airport pickup contracts</li>
                        </ul>
                    </div>
                    <a href="#stakeholder-registration" className="rv-btn-primary text-center justify-content-center">Apply as Transit Partner</a>
                </div>
                
                <div className="rv-glass-panel rv-partner-card">
                    <div>
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Local Organizations</span>
                        <h3 className="rv-title-small" style={{"fontSize":"22px","marginTop":"8px"}}>Community Partners</h3>
                        <p className="rv-para-medium" style={{"fontSize":"14px"}}>Collaborate on local tourism, social activities, cultural integration, and regional economic development initiatives.</p>
                        <ul className="rv-partner-list">
                            <li><i data-lucide="check-circle" size="16"></i> Tourism department backing</li>
                            <li><i data-lucide="check-circle" size="16"></i> Cultural exchanges &amp; outings</li>
                            <li><i data-lucide="check-circle" size="16"></i> Collaborative medical tourism</li>
                        </ul>
                    </div>
                    <a href="#stakeholder-registration" className="rv-btn-primary text-center justify-content-center">Apply as Community Partner</a>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 60px auto"}}>
                <span className="rv-tagline">Visual Storytelling</span>
                <h2 className="rv-title-medium text-gradient">The Patient Journey</h2>
                <p className="rv-para-medium">Follow the step-by-step transition of how patients rebuild confidence and achieve independent living.</p>
            </div>

            <div className="rv-journey-track">
                <div className="rv-journey-line">
                    <div className="rv-journey-line-fill" id="journey-progress-line"></div>
                </div>

                
                <div className="rv-journey-block left">
                    <div className="rv-journey-dot"></div>
                    <div className="rv-glass-panel rv-journey-card-wrap">
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Stage 01</span>
                        <h3 className="rv-title-small">Clinical Intake &amp; Arrival</h3>
                        <p className="rv-para-medium">Patient arrives at Ayurgreen Hospital with family. Complete clinical diagnostics, muscle charting, and robotic functional capability tests are conducted to set therapeutic goals.</p>
                    </div>
                </div>
                
                <div className="rv-journey-block">
                    <div className="rv-journey-dot"></div>
                    <div className="rv-glass-panel rv-journey-card-wrap">
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Stage 02</span>
                        <h3 className="rv-title-small">Therapeutic Assessment</h3>
                        <p className="rv-para-medium">Rehabilitation specialists configure an integrated plan mixing modern robotics, physiotherapy, speech-language therapy, and traditional Ayurvedic protocols.</p>
                    </div>
                </div>
                
                <div className="rv-journey-block left">
                    <div className="rv-journey-dot"></div>
                    <div className="rv-glass-panel rv-journey-card-wrap">
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Stage 03</span>
                        <h3 className="rv-title-small">Village Accommodation Allocation</h3>
                        <p className="rv-para-medium">Patient transfers to a wheelchair-accessible Service Villa within 5km. Housekeeping, dining support, and daily nurse checks are established for safety.</p>
                    </div>
                </div>
                
                <div className="rv-journey-block">
                    <div className="rv-journey-dot"></div>
                    <div className="rv-glass-panel rv-journey-card-wrap">
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Stage 04</span>
                        <h3 className="rv-title-small">Daily Therapy &amp; Supervision</h3>
                        <p className="rv-para-medium">Patient undergoes daily treatment at the hospital, returning to the villa to practice activities of daily living (ADLs) with volunteer support.</p>
                    </div>
                </div>
                
                <div className="rv-journey-block left">
                    <div className="rv-journey-dot"></div>
                    <div className="rv-glass-panel rv-journey-card-wrap">
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Stage 05</span>
                        <h3 className="rv-title-small">Social Re-integration</h3>
                        <p className="rv-para-medium">Patient begins visiting public spaces, joining village gatherings, and shopping, breaking the psychological isolation of normal clinical stays.</p>
                    </div>
                </div>
                
                <div className="rv-journey-block">
                    <div className="rv-journey-dot"></div>
                    <div className="rv-glass-panel rv-journey-card-wrap">
                        <span className="rv-tagline" style={{"fontSize":"11px"}}>Stage 06</span>
                        <h3 className="rv-title-small">Complete Independence</h3>
                        <p className="rv-para-medium">Milestones achieved! The patient graduates from the program and returns home, fully prepared to resume an active, self-reliant lifestyle.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section">
        <div className="rv-container">
            <div className="rv-metric-grid">
                <div className="rv-glass-panel rv-metric-card">
                    <div className="rv-metric-number" data-target="45">0</div>
                    <div style={{"fontSize":"14px","fontWeight":"600","color":"var(--text-muted, #6B7280)"}}>Accommodation Partners</div>
                </div>
                <div className="rv-glass-panel rv-metric-card">
                    <div className="rv-metric-number" data-target="250">0</div>
                    <div style={{"fontSize":"14px","fontWeight":"600","color":"var(--text-muted, #6B7280)"}}>Community Members</div>
                </div>
                <div className="rv-glass-panel rv-metric-card">
                    <div className="rv-metric-number" data-target="1800">0</div>
                    <div style={{"fontSize":"14px","fontWeight":"600","color":"var(--text-muted, #6B7280)"}}>Rehabilitation Patients</div>
                </div>
                <div className="rv-glass-panel rv-metric-card">
                    <div className="rv-metric-number" data-target="420">0</div>
                    <div style={{"fontSize":"14px","fontWeight":"600","color":"var(--text-muted, #6B7280)"}}>International Visitors</div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 50px auto"}}>
                <span className="rv-tagline">Testimonials</span>
                <h2 className="rv-title-medium text-gradient">Stories of Transformation</h2>
                <p className="rv-para-medium">Read about the experiences of our patients, caregivers, partners, and volunteers.</p>
            </div>

            <div className="rv-carousel-container">
                <div className="rv-carousel-track" id="testimonial-track">
                    
                    <div className="rv-glass-panel rv-carousel-slide">
                        <div className="rv-star-rating">
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                        </div>
                        <p className="rv-para-medium" style={{"fontSize":"15px","fontStyle":"italic","marginBottom":"20px"}}>"Living in a service villa during my stroke rehabilitation allowed my wife and children to stay with me in a normal home environment, while I received premium therapy at the hospital daily. It changed everything."</p>
                        <h4 style={{"margin":"0","fontSize":"16px"}}>Abdul Rahman</h4>
                        <span style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Stroke Recovery Patient, UAE</span>
                    </div>
                    
                    <div className="rv-glass-panel rv-carousel-slide">
                        <div className="rv-star-rating">
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                        </div>
                        <p className="rv-para-medium" style={{"fontSize":"15px","fontStyle":"italic","marginBottom":"20px"}}>"As a caregiver, having doctor visits right at our homestay stay gave me immense peace of mind. I could manage my work remotely while knowing professional medical supervision was available once a day."</p>
                        <h4 style={{"margin":"0","fontSize":"16px"}}>Sarah Mitchell</h4>
                        <span style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Caregiver for Parkinson's Patient, UK</span>
                    </div>
                    
                    <div className="rv-glass-panel rv-carousel-slide">
                        <div className="rv-star-rating">
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                            <i data-lucide="star" size="16"></i>
                        </div>
                        <p className="rv-para-medium" style={{"fontSize":"15px","fontStyle":"italic","marginBottom":"20px"}}>"Registering our cottage as an accommodation partner was simple and has brought steady rental support to our family, while giving us the privilege of helping patient families feel at home in Edappal."</p>
                        <h4 style={{"margin":"0","fontSize":"16px"}}>K. Raghavan</h4>
                        <span style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Accommodation Provider, Edappal</span>
                    </div>
                </div>
            </div>

            
            <div className="rv-carousel-controls">
                <button className="rv-carousel-btn" id="prev-test"><i data-lucide="arrow-left" size="20"></i></button>
                <button className="rv-carousel-btn" id="next-test"><i data-lucide="arrow-right" size="20"></i></button>
            </div>
        </div>
    </section>

    
    <section className="rv-section">
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 30px auto"}}>
                <span className="rv-tagline">Common Questions</span>
                <h2 className="rv-title-medium text-gradient">Frequently Asked Questions</h2>
                <p className="rv-para-medium">Everything you need to know about stay options, medical treatment, and collaborations.</p>
            </div>

            <div className="rv-faq-stack">
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>What is Rehab Village?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>Rehab Village is a community-based recovery initiative by Ayurgreen Hospitals. It provides furnished, wheelchair-accessible accommodations (homestays, service villas, and apartments) for long-term patients and their caregivers, letting them recover in a natural, community-driven environment rather than a standard hospital ward.</p>
                    </div>
                </div>
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>How does accommodation work?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>Based on the patient's needs and preferences during clinical intake, our team suggests the most suitable stay within a 5 km radius of Edappal. Options include private Service Villas (ideal for families), heritage Homestays (for local connection), and modern elevator-connected Apartments.</p>
                    </div>
                </div>
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>Can international patients join?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>Yes, Rehab Village is highly sought after by international patients for long-term recovery. We provide comprehensive medical tourism support, visa invitations, translator services, custom continental/Halal dining options, and airport pickups.</p>
                    </div>
                </div>
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>How are treatments provided?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>All clinical therapies, physical rehabilitation, speech therapy, robotic training, and clinical examinations are conducted exclusively at Ayurgreen Hospital's advanced facilities. Shuttle links are organized to transfer patients safely from their villa to the hospital daily.</p>
                    </div>
                </div>
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>Are doctor visits included?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>Yes, patients receive visits from doctors once a day at their accommodation, as per their health status. This ensures they are clinically safe while enjoying the freedom of home living.</p>
                    </div>
                </div>
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>Can families stay together?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>Absolutely. The primary reason we developed Service Villas and Apartments is to enable families to live with patients, providing essential emotional support during recovery.</p>
                    </div>
                </div>
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>How can I become a volunteer?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>You can apply using our multi-step Stakeholder Registration form below. Choose the"Volunteer" tab, complete the required details, and our coordinator will schedule an orientation session.</p>
                    </div>
                </div>
                
                <div className="rv-faq-item">
                    <button className="rv-faq-trigger">
                        <span>How can I partner with Rehab Village?</span>
                        <i data-lucide="chevron-down" size="20"></i>
                    </button>
                    <div className="rv-faq-content">
                        <p>Accommodation hosts within a 5 km radius, transport companies, and community organizations can submit partner applications through the registration form below. We will conduct field checks before onboarding properties/services.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section id="stakeholder-registration" className="rv-section" style={{"background":"var(--bg-main)","borderTop":"1px solid var(--border)","borderBottom":"1px solid var(--border)"}}>
        <div className="rv-container">
            <div style={{"textAlign":"center","maxWidth":"700px","margin":"0 auto 50px auto"}}>
                <span className="rv-tagline">Onboarding</span>
                <h2 className="rv-title-medium text-gradient">Stakeholder Registration</h2>
                <p className="rv-para-medium">Join our community. Select your category to register for rehabilitation stay or partnerships.</p>
            </div>

            <div className="rv-glass-panel rv-form-wrapper">
                
                <div className="rv-form-tabs">
                    <button className="rv-form-tab-btn active" data-form="patient">Patient Stay</button>
                    <button className="rv-form-tab-btn" data-form="volunteer">Volunteer</button>
                    <button className="rv-form-tab-btn" data-form="stay-partner">Accommodation Partner</button>
                    <button className="rv-form-tab-btn" data-form="transit-partner">Transport Partner</button>
                    <button className="rv-form-tab-btn" data-form="community-partner">Community Partner</button>
                </div>

                
                <div className="rv-form-step-indicator">
                    <div className="rv-form-step-line">
                        <div className="rv-form-step-line-fill" id="form-progress-bar" style={{"width":"50%"}}></div>
                    </div>
                    <div className="rv-form-step-node active" data-step="1">1</div>
                    <div className="rv-form-step-node" data-step="2">2</div>
                </div>

                <form id="rv-registration-form" onSubmit={(e) => { e.preventDefault(); alert('Registration submitted successfully!'); }}>
                    
                    <div className="rv-form-pane active" id="pane-step-1">
                        <div className="rv-form-grid">
                            <div className="rv-form-group">
                                <input type="text" id="reg-name" className="rv-input" placeholder="" required={true} />
                                <label htmlFor="reg-name" className="rv-label">Full Name</label>
                            </div>
                            <div className="rv-form-group">
                                <input type="email" id="reg-email" className="rv-input" placeholder="" required={true} />
                                <label htmlFor="reg-email" className="rv-label">Email Address</label>
                            </div>
                            <div className="rv-form-group">
                                <input type="tel" id="reg-phone" className="rv-input" placeholder="" required={true} />
                                <label htmlFor="reg-phone" className="rv-label">Phone / WhatsApp</label>
                            </div>
                            <div className="rv-form-group">
                                <input type="text" id="reg-location" className="rv-input" placeholder="" required={true} />
                                <label htmlFor="reg-location" className="rv-label">City, Country</label>
                            </div>
                        </div>
                    </div>

                    
                    <div className="rv-form-pane" id="pane-step-2">
                        
                        <div className="form-dynamic-details" id="details-patient">
                            <div className="rv-form-grid">
                                <div className="rv-form-group">
                                    <input type="text" id="pat-condition" className="rv-input" placeholder="" />
                                    <label htmlFor="pat-condition" className="rv-label">Medical Condition (e.g., Stroke, Parkinson's)</label>
                                </div>
                                <div className="rv-form-group">
                                    <input type="text" id="pat-duration" className="rv-input" placeholder="" />
                                    <label htmlFor="pat-duration" className="rv-label">Expected Duration (e.g., 1 Month)</label>
                                </div>
                                <div className="rv-form-group full-width">
                                    <textarea id="pat-needs" className="rv-input" placeholder="" style={{"height":"100px","resize":"none"}}></textarea>
                                    <label htmlFor="pat-needs" className="rv-label">Special Needs or Mobility Assistance Required</label>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="form-dynamic-details" id="details-volunteer" style={{"display":"none"}}>
                            <div className="rv-form-grid">
                                <div className="rv-form-group">
                                    <input type="text" id="vol-exp" className="rv-input" placeholder="" />
                                    <label htmlFor="vol-exp" className="rv-label">Prior Healthcare Experience (if any)</label>
                                </div>
                                <div className="rv-form-group">
                                    <input type="text" id="vol-time" className="rv-input" placeholder="" />
                                    <label htmlFor="vol-time" className="rv-label">Availability (Hours per week)</label>
                                </div>
                                <div className="rv-form-group full-width">
                                    <textarea id="vol-reason" className="rv-input" placeholder="" style={{"height":"100px","resize":"none"}}></textarea>
                                    <label htmlFor="vol-reason" className="rv-label">Why do you want to volunteer at Ayurgreen?</label>
                                </div>
                            </div>
                        </div>

                        
                        <div className="form-dynamic-details" id="details-stay-partner" style={{"display":"none"}}>
                            <div className="rv-form-grid">
                                <div className="rv-form-group">
                                    <input type="text" id="stay-type" className="rv-input" placeholder="" />
                                    <label htmlFor="stay-type" className="rv-label">Property Type (Villa, Homestay, Apartment)</label>
                                </div>
                                <div className="rv-form-group">
                                    <input type="text" id="stay-dist" className="rv-input" placeholder="" />
                                    <label htmlFor="stay-dist" className="rv-label">Distance from Edappal Hospital (km)</label>
                                </div>
                                <div className="rv-form-group full-width">
                                    <textarea id="stay-amenities" className="rv-input" placeholder="" style={{"height":"100px","resize":"none"}}></textarea>
                                    <label htmlFor="stay-amenities" className="rv-label">Accessibility Features (Ramp, Grab bars, elevator, etc.)</label>
                                </div>
                            </div>
                        </div>

                        
                        <div className="form-dynamic-details" id="details-transit-partner" style={{"display":"none"}}>
                            <div className="rv-form-grid">
                                <div className="rv-form-group">
                                    <input type="text" id="trans-vehicles" className="rv-input" placeholder="" />
                                    <label htmlFor="trans-vehicles" className="rv-label">Number of Available Vehicles</label>
                                </div>
                                <div className="rv-form-group">
                                    <input type="text" id="trans-type" className="rv-input" placeholder="" />
                                    <label htmlFor="trans-type" className="rv-label">Vehicle Models &amp; Accessibility Features</label>
                                </div>
                            </div>
                        </div>

                        
                        <div className="form-dynamic-details" id="details-community-partner" style={{"display":"none"}}>
                            <div className="rv-form-grid">
                                <div className="rv-form-group full-width">
                                    <input type="text" id="comm-org" className="rv-input" placeholder="" />
                                    <label htmlFor="comm-org" className="rv-label">Organization Name / Tourism Board</label>
                                </div>
                                <div className="rv-form-group full-width">
                                    <textarea id="comm-collab" className="rv-input" placeholder="" style={{"height":"100px","resize":"none"}}></textarea>
                                    <label htmlFor="comm-collab" className="rv-label">Proposed Scope of Collaboration</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="rv-form-nav">
                        <button type="button" className="rv-btn-secondary" id="form-back-btn" style={{"display":"none"}}>Back</button>
                        <button type="button" className="rv-btn-primary" id="form-next-btn">Next Step</button>
                        <button type="submit" className="rv-btn-primary" id="form-submit-btn" style={{"display":"none"}}>Submit Application</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    
    <section className="rv-section rv-contact-box">
        <div className="rv-container">
            <span className="rv-tagline">Get In Touch</span>
            <h2 className="rv-title-large text-gradient">Join the Rehab Village Movement</h2>
            <p className="rv-para-large" style={{"maxWidth":"800px","margin":"0 auto"}}>Whether you are a patient seeking recovery, a caregiver desiring peace of mind, a volunteer wishing to make an impact, or a local provider, we welcome you to our recovery ecosystem.</p>
            
            <div className="rv-contact-cards">
                <a href="tel:+918943055518" className="rv-contact-card">
                    <i data-lucide="phone-call" size="24"></i>
                    <div style={{"textAlign":"left"}}>
                        <div style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Call or WhatsApp</div>
                        <div style={{"fontWeight":"600","fontSize":"16px"}}>+91 89430 55518</div>
                    </div>
                </a>
                <a href="mailto:rehabvillage@ayurgreenhospitals.com" className="rv-contact-card">
                    <i data-lucide="mail" size="24"></i>
                    <div style={{"textAlign":"left"}}>
                        <div style={{"fontSize":"12px","color":"var(--text-muted, #6B7280)"}}>Email Us</div>
                        <div style={{"fontWeight":"600","fontSize":"16px"}}>rehabvillage@ayurgreenhospitals.com</div>
                    </div>
                </a>
            </div>

            <div style={{"display":"flex","gap":"16px","justifyContent":"center","flexWrap":"wrap"}}>
                <a href="#stakeholder-registration" className="rv-btn-primary">Become a Partner <i data-lucide="arrow-right" size="16"></i></a>
                <a href="index.html#consultation" className="rv-btn-secondary">Book Consultation</a>
            </div>
        </div>
    </section>
      </main>
    </div>
  );
}
