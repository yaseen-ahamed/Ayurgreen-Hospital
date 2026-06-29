"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function RehabilitationJourneySection() {

  return (
    <>
<section id="rehabilitation-journey" aria-label="Rehabilitation Journey"
            style={{ "padding": "80px 0", "background": "#fff" }}>
            <div style={{ "maxWidth": "1800px", "padding": "0 48px", "margin": "0 auto", "boxSizing": "border-box" }}>

                {/*  Title  */}
                <div style={{ "textAlign": "center", "marginBottom": "48px" }}>
                    <h2 className="rehab-journey-title premium-title">Rehabilitation Journey</h2>
                </div>

                {/*  Tab List  */}
                <div style={{ "display": "flex", "justifyContent": "center", "marginBottom": "36px" }}>
                    <div role="tablist" aria-label="Rehabilitation Options"
                        style={{ "display": "inline-flex", "background": "#fff", "border": "1px solid #e5e7eb", "borderRadius": "9999px", "padding": "4px", "gap": "4px", "boxShadow": "0 1px 4px rgba(0,0,0,0.06)" }}>
                        <button id="tab-btn-programs" className="rehab-tab-btn active-tab"
                            onClick={() => (window as any).switchRehabTab?.('programs')} role="tab" aria-selected="true"
                            aria-controls="tab-content-programs">
                            <i data-lucide="activity" aria-hidden="true"></i> Specialities
                        </button>
                        <button id="tab-btn-therapies" className="rehab-tab-btn" onClick={() => (window as any).switchRehabTab?.('therapies')}
                            role="tab" aria-selected="false" aria-controls="tab-content-therapies">
                            <i data-lucide="leaf" aria-hidden="true"></i> Departments
                        </button>
                    </div>
                </div>

                {/*  Programs Tab  */}
                <div id="tab-content-programs" className="rehab-tab-content tab-visible" role="tabpanel"
                    aria-labelledby="tab-btn-programs">
                    <div className="rehab-slider-clip" id="clip-programs">
                        <div className="rehab-cards-scroll" id="scroll-programs">
                            <a href="stroke-rehab.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Stroke.webp"
                                    alt="Stroke Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Stroke Rehabilitation</h3>
                                    <p className="rehab-card-desc">A highly aggressive, time-sensitive integrated treatment
                                        pathway utilizing brain plasticity to recover lost motor, speech, and cognitive
                                        functions post-stroke.</p>
                                </div>
                            </a>

                            <a href="spinal-cord-injury.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Spinal Cord Injury.webp"
                                    alt="Spinal Cord Injury Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Spinal Cord Injury</h3>
                                    <p className="rehab-card-desc">Rebuilding trunk control, sensory awareness, and mobility
                                        post-spinal trauma through integrated physical and traditional therapies.</p>
                                </div>
                            </a>

                            <a href="traumatic-brain-injury.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Traumatic Brain Injury.webp"
                                    alt="Traumatic Brain Injury Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Traumatic Brain Injury</h3>
                                    <p className="rehab-card-desc">Complex sensory, physical, and cognitive retraining
                                        protocols to help reorganize neural circuits post-head trauma.</p>
                                </div>
                            </a>

                            <a href="hemiplegia.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Hemiplegia.webp"
                                    alt="Hemiplegia Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Hemiplegia</h3>
                                    <p className="rehab-card-desc">Targeted active movement, sensory integration, and
                                        traditional heat therapies to improve unilateral motor deficit control.</p>
                                </div>
                            </a>

                            <a href="quadriplegia-paraplegia.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Quadriplegia &amp; Paraplegia.webp"
                                    alt="Quadriplegia &amp; Paraplegia Rehabilitation at Ayurgreen Hospital"
                                    loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Quadriplegia &amp; Paraplegia</h3>
                                    <p className="rehab-card-desc">Aggressive physical restoration, autonomic regulation,
                                        and sensory stimulations to regain maximum lifestyle independence.</p>
                                </div>
                            </a>

                            <a href="post-surgical-complications.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Post-Surgical Complications.webp"
                                    alt="Post-Surgical Complications Rehabilitation at Ayurgreen Hospital"
                                    loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Post-Surgical Complications</h3>
                                    <p className="rehab-card-desc">Correcting joint stiffness, relieving nerve impingements,
                                        and speeding tissue healing after orthopedic or neurosurgery.</p>
                                </div>
                            </a>

                            <a href="motor-neuron-diseases.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Motor Neuron Disease.webp"
                                    alt="Motor Neuron Diseases Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Motor Neuron Diseases</h3>
                                    <p className="rehab-card-desc">Providing neurological nourishment, muscle spasm control,
                                        and custom exercises to maintain function and manage progression.</p>
                                </div>
                            </a>

                            <a href="cerebral-palsy.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Cerebral Palsy.webp"
                                    alt="Cerebral Palsy Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Cerebral Palsy</h3>
                                    <p className="rehab-card-desc">Specialized pediatric neurodevelopmental therapies to
                                        help reduce rigid muscle stiffness and assist milestone achievements.</p>
                                </div>
                            </a>

                            <a href="parkinsons-disease.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Parkinson's Disease.webp"
                                    alt="Parkinson's Disease Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Parkinson's Disease</h3>
                                    <p className="rehab-card-desc">Delaying progression and maintaining active motor
                                        coordination through tailored Ayurvedic protocols and sensory exercises.</p>
                                </div>
                            </a>

                            <a href="myopathy.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Myopathy.webp"
                                    alt="Myopathy Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Myopathy</h3>
                                    <p className="rehab-card-desc">Nourishing muscle tissue, boosting strength, and
                                        prescribing safe mobility protocols to manage active muscle weakness.</p>
                                </div>
                            </a>

                            <a href="disc-spine-problems.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Disc &amp; Spine Problems.webp"
                                    alt="Disc &amp; Spine Problems treatment at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Disc &amp; Spine Problems</h3>
                                    <p className="rehab-card-desc">Non-surgical spinal decompression, specialized manual
                                        therapies, and herbal oil wraps to restore structural spine alignment.</p>
                                </div>
                            </a>

                            <a href="sciatica.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Sciatica.webp"
                                    alt="Sciatica treatment at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Sciatica</h3>
                                    <p className="rehab-card-desc">Relieving sciatic nerve compression, reducing radiating
                                        pain, and rebuilding core strength to prevent future flare-ups.</p>
                                </div>
                            </a>

                            <a href="obesity.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Obesity.webp"
                                    alt="Obesity treatment at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Obesity</h3>
                                    <p className="rehab-card-desc">Scientific metabolic control, customized Ayurvedic powder
                                        massages, low-impact exercise, and customized diet plans.</p>
                                </div>
                            </a>

                            <a href="post-covid-complications.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Post-Covid Complications.webp"
                                    alt="Post-Covid Complications Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Post-Covid Complications</h3>
                                    <p className="rehab-card-desc">Restoring respiratory capacity, addressing muscular
                                        fatigue, and rebuilding full biological immune health.</p>
                                </div>
                            </a>

                            <a href="muscular-dystrophy.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Muscular Dystrophy.webp"
                                    alt="Muscular Dystrophy Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Muscular Dystrophy</h3>
                                    <p className="rehab-card-desc">Providing muscular nutrition, maintaining joint range,
                                        and custom gentle exercises to slow functional muscle decline.</p>
                                </div>
                            </a>

                            <a href="osteoarthritis.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Osteoarthritis.webp"
                                    alt="Osteoarthritis Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Osteoarthritis</h3>
                                    <p className="rehab-card-desc">Natural joint lubrication therapies, muscle
                                        strengthening, and cartilage support to relieve joint pain and stiffness.</p>
                                </div>
                            </a>

                            <a href="rheumatoid-arthritis.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Rheumatoid Arthritis.webp"
                                    alt="Rheumatoid Arthritis Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Rheumatoid Arthritis</h3>
                                    <p className="rehab-card-desc">Regulating immune response, calming active joint
                                        inflammation, and maintaining coordinate joint range of motion.</p>
                                </div>
                            </a>

                            <a href="developmental-delay.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Developmental Delay.webp"
                                    alt="Developmental Delay Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Developmental Delay</h3>
                                    <p className="rehab-card-desc">Pediatric milestone tracking and customized
                                        motor-cognitive stimulation to assist functional age achievements.</p>
                                </div>
                            </a>

                            <a href="psychological-problems.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Psychological Problems.webp"
                                    alt="Psychological Problems Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Psychological Problems</h3>
                                    <p className="rehab-card-desc">Integrated mental health care, biofeedback sessions,
                                        relaxation, and wellness counseling to improve emotional balance.</p>
                                </div>
                            </a>

                            <a href="autism.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Autism.webp"
                                    alt="Autism Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Autism</h3>
                                    <p className="rehab-card-desc">Pediatric sensory integration, motor coordination
                                        retraining, and gentle behavioral guidance protocols.</p>
                                </div>
                            </a>

                            <a href="psychiatry.html" className="rehab-card">
                                <img src="/Assets/AG Sub-pages Banner/Psychiatry.webp"
                                    alt="Psychiatry at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Psychiatry</h3>
                                    <p className="rehab-card-desc">Comprehensive clinical support, medication management,
                                        stress reduction, and integrated psychiatric guidance.</p>
                                </div>
                            </a>
                        </div>
                    </div>{/*  /clip-programs  */}
                    {/*  Slide nav  */}
                    <div className="rehab-slider-nav">
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-programs', -1)}
                            id="btn-prev-programs" aria-label="Previous Programs"><i data-lucide="chevron-left"
                                size="20" aria-hidden="true"></i></button>
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-programs',  1)}
                            id="btn-next-programs" aria-label="Next Programs"><i data-lucide="chevron-right" size="20"
                                aria-hidden="true"></i></button>
                    </div>
                </div>

                {/*  Therapies Tab  */}
                <div id="tab-content-therapies" className="rehab-tab-content" role="tabpanel"
                    aria-labelledby="tab-btn-therapies" aria-hidden="true">
                    <div className="rehab-slider-clip" id="clip-therapies">
                        <div className="rehab-cards-scroll" id="scroll-therapies">

                            <a href="ayurveda.html" className="rehab-card">
                                <img src="/Assets/rehab/th_ayurveda.webp"
                                    alt="Authentic Kerala Ayurveda oil treatment at Ayurgreen Hospital" width="768"
                                    height="576" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Ayurveda</h3>
                                    <p className="rehab-card-desc">Authentic Kerala Ayurveda for deep systemic healing and
                                        detoxification.</p>
                                </div>
                            </a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Physiotherapy
                                Expert-guided physical rehabilitation for strength,
                                mobility and function.</a>

                            <a href="robotic-rehab.html" className="rehab-card">
                                <img src="/Assets/rehab/th_robotic.webp"
                                    alt="High-repetition sensor-guided robotic gait training session" width="5333"
                                    height="4000" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Robotic Rehabilitation</h3>
                                    <p className="rehab-card-desc">Advanced exoskeletons retraining neural pathways through
                                        precision movement.</p>
                                </div>
                            </a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Occupational Therapy
                                Restoring independence in daily living activities and
                                work skills.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Speech Therapy
                                Communication and swallowing rehabilitation by certified
                                specialists.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Virtual Reality
                                Immersive VR environments for engaging, gamified
                                neurological recovery.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Hydro / Aquatic Therapy
                                Water-based therapy easing pain and rebuilding strength
                                with minimal stress.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Cycle Therapy
                                Motorised cycling to improve limb coordination and
                                cardiovascular endurance.</a>

                        </div>
                    </div>{/*  /clip-therapies  */}
                    {/*  Slide nav  */}
                    <div className="rehab-slider-nav">
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-therapies', -1)}
                            id="btn-prev-therapies" aria-label="Previous Therapies"><i data-lucide="chevron-left"
                                size="20" aria-hidden="true"></i></button>
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-therapies',  1)}
                            id="btn-next-therapies" aria-label="Next Therapies"><i data-lucide="chevron-right" size="20"
                                aria-hidden="true"></i></button>
                    </div>
                </div>

            </div>
        </section>
    </>
  );
}
