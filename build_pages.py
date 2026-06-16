import os

about_main = """    <main>
        <section class="container" style="padding-top: 120px;">
            <div class="text-center" style="max-width: 800px; margin: 0 auto 64px auto;">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--secondary);">Our Legacy</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px;">Redefining the Standard of Global Neuro Rehabilitation</h1>
                <p class="text-large">Ayurgreen Hospital stands at the apex of medical innovation, merging precise robotic interventions with ancient, profound Ayurvedic science.</p>
            </div>
            
            <img src="Assets/generated/stroke_rehab_focus_1776281836789.png" onerror="this.src='Assets/Hospital View.webp'" alt="Ayurgreen Hospital Facility" style="width: 100%; border-radius: var(--radius-large); height: 500px; object-fit: cover; box-shadow: var(--shadow-hover); margin-bottom: 64px;">

            <div class="grid grid-2 gap-large items-center">
                <div>
                    <h2>The Pioneers of Integrated Healing</h2>
                    <p style="margin-top: 24px; margin-bottom: 24px;">For over a decade, we have challenged the conventional limits of recovery. By introducing India's first fully robotic integrated neuro pathway, we have successfully treated over 10,000 catastrophic cases from more than 50 countries.</p>
                    <p>Our philosophy is simple: Recovery should not be a fragmented journey. By bringing world-class robotic engineers, elite physiotherapists, leading neurologists, and traditional Ayurveda scholars into a singular, cohesive ecosystem, we maximize neuroplasticity and systemic regeneration.</p>
                </div>
                <div class="grid grid-2 gap-small">
                    <div class="card card-large-radius flex-col items-center justify-center text-center" style="background: var(--primary); color: white; padding: 48px 24px;">
                        <h3 style="color: white; font-size: 48px;">10k+</h3>
                        <div style="color: rgba(255,255,255,0.8); margin-top: 8px;">Successful Recoveries</div>
                    </div>
                    <div class="card card-large-radius text-center items-center justify-center flex-col" style="padding: 48px 24px;">
                        <h3 style="font-size: 48px; color: var(--primary);">50+</h3>
                        <div class="text-micro" style="margin-top: 8px;">Countries Served</div>
                    </div>
                    <div class="card card-large-radius text-center items-center justify-center flex-col" style="padding: 48px 24px;">
                        <i data-lucide="award" size="48" style="color: var(--secondary);"></i>
                        <div class="text-micro" style="margin-top: 16px;">NABH Accredited</div>
                    </div>
                    <div class="card card-large-radius text-center items-center justify-center flex-col" style="padding: 48px 24px;">
                        <i data-lucide="bot" size="48" style="color: var(--secondary);"></i>
                        <div class="text-micro" style="margin-top: 16px;">Robotic Center of Excellence</div>
                    </div>
                </div>
            </div>
        </section>
    </main>"""

programs_main = """    <main>
        <section class="section-soft" style="padding-top: 120px;">
            <div class="container text-center">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--secondary);">Clinical Programs</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px;">Comprehensive Rehabilitation Programs</h1>
                <p class="text-large" style="max-width: 800px; margin: 0 auto 64px auto;">Specialized, intensive inpatient and outpatient programs mapped directly to specific neurological and orthopedic conditions.</p>
            </div>
        </section>

        <section class="container" style="margin-top: -80px; position: relative; z-index: 10;">
            <div class="grid grid-3 gap-medium">
                <a href="stroke-rehab.html" class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="brain" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Stroke Rehabilitation</h3>
                    <p style="margin-bottom: 24px; font-size: 15px;">Intensive motor and cognitive retraining specifically engineered for post-stroke deficits.</p>
                    <span style="color: var(--primary); font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">Explore <i data-lucide="arrow-right" size="14"></i></span>
                </a>
                <a href="programs.html" class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="zap" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Traumatic Brain Injury</h3>
                    <p style="margin-bottom: 24px; font-size: 15px;">Complex sensory, physical, and cognitive recovery protocols for severe TBI cases.</p>
                    <span style="color: var(--primary); font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">Explore <i data-lucide="arrow-right" size="14"></i></span>
                </a>
                <a href="programs.html" class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="layers" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Spinal Cord Injury</h3>
                    <p style="margin-bottom: 24px; font-size: 15px;">Focusing on autonomy, bowel/bladder management, and advanced robotic walking recovery.</p>
                    <span style="color: var(--primary); font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">Explore <i data-lucide="arrow-right" size="14"></i></span>
                </a>
                <a href="programs.html" class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="activity" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Parkinson's Disease</h3>
                    <p style="margin-bottom: 24px; font-size: 15px;">Delaying progression and maintaining motor independence through Ayurveda and specific exercises.</p>
                    <span style="color: var(--primary); font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">Explore <i data-lucide="arrow-right" size="14"></i></span>
                </a>
                <a href="programs.html" class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="baby" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Cerebral Palsy</h3>
                    <p style="margin-bottom: 24px; font-size: 15px;">Pediatric-focused neurodevelopmental training, assisting milestones and spasticity reduction.</p>
                    <span style="color: var(--primary); font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">Explore <i data-lucide="arrow-right" size="14"></i></span>
                </a>
                <a href="programs.html" class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="bone" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Orthopedic & Spine</h3>
                    <p style="margin-bottom: 24px; font-size: 15px;">Post-surgical joint replacement rehab, pain management, and sciatica decompression.</p>
                    <span style="color: var(--primary); font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">Explore <i data-lucide="arrow-right" size="14"></i></span>
                </a>
            </div>
        </section>
    </main>"""

therapies_main = """    <main>
        <section class="section-soft" style="padding-top: 120px;">
            <div class="container text-center">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--secondary);">Clinical Modalities</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px;">Advanced Healing Therapies</h1>
                <p class="text-large" style="max-width: 800px; margin: 0 auto 64px auto;">Explore our 15+ specialized therapeutic interventions, integrating the best of technology, ancient science, and modern medicine.</p>
            </div>
        </section>

        <section class="container" style="margin-top: -80px; position: relative; z-index: 10;">
            <div class="grid grid-3 gap-medium">
                <a href="robotic-rehab.html" class="card card-large-radius" style="padding: 0; display: block;">
                    <img src="Assets/generated/robotic_rehab_exo_1776281782213.png" alt="Robotic Recovery" style="width:100%; height: 260px; object-fit: cover; display: block;">
                    <div style="padding: 32px;">
                        <h3 style="margin-bottom: 12px;">Robotic Rehabilitation</h3>
                        <p>High-repetition, sensor-guided exoskeleton therapy for accelerated motor learning.</p>
                    </div>
                </a>
                <a href="ayurveda.html" class="card card-large-radius" style="padding: 0; display: block;">
                    <img src="Assets/generated/ayurveda_premium_room_1776281797515.png" alt="Ayurvedic Healing" style="width:100%; height: 260px; object-fit: cover; display: block;">
                    <div style="padding: 32px;">
                        <h3 style="margin-bottom: 12px;">Kerala Ayurveda</h3>
                        <p>Panchakarma and systemic detox therapies tailored to complex neurological challenges.</p>
                    </div>
                </a>
                <a href="therapies.html" class="card card-large-radius" style="padding: 0; display: block;">
                    <img src="Assets/generated/stroke_rehab_focus_1776281836789.png" alt="Physiotherapy" style="width:100%; height: 260px; object-fit: cover; display: block;">
                    <div style="padding: 32px;">
                        <h3 style="margin-bottom: 12px;">Advanced Physiotherapy</h3>
                        <p>Evidence-based mobility and strength restoration focused on functional independence.</p>
                    </div>
                </a>
                
                <a href="therapies.html" class="card card-large-radius flex-col items-center justify-center text-center">
                    <div style="background: var(--accent); padding: 16px; border-radius: 50%; color: var(--primary); margin-bottom: 16px;"><i data-lucide="headset" size="32"></i></div>
                    <h3>Virtual Reality (VR) Therapy</h3>
                    <p style="margin-top: 8px;">Cognitive immersion therapy.</p>
                </a>
                <a href="therapies.html" class="card card-large-radius flex-col items-center justify-center text-center">
                    <div style="background: var(--accent); padding: 16px; border-radius: 50%; color: var(--primary); margin-bottom: 16px;"><i data-lucide="waves" size="32"></i></div>
                    <h3>Hydro Aquatic Therapy</h3>
                    <p style="margin-top: 8px;">Low-impact aquatic mobility training.</p>
                </a>
                <a href="therapies.html" class="card card-large-radius flex-col items-center justify-center text-center">
                    <div style="background: var(--accent); padding: 16px; border-radius: 50%; color: var(--primary); margin-bottom: 16px;"><i data-lucide="message-circle" size="32"></i></div>
                    <h3>Speech & Swallow Therapy</h3>
                    <p style="margin-top: 8px;">Restoring communication and safe eating.</p>
                </a>
            </div>
        </section>
    </main>"""

village_main = """    <main>
        <section class="section-dark" style="padding-top: 120px;">
            <div class="container text-center">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: rgba(255,255,255,0.6);">Nature & Healing</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px; color: white;">The Rehab Village</h1>
                <p class="text-large" style="max-width: 800px; margin: 0 auto 64px auto;">A fully integrated residential hospital campus where profound stillness meets absolute clinical excellence.</p>
            </div>
        </section>

        <section class="container" style="margin-top: -80px; position: relative; z-index: 10;">
            <img src="Assets/generated/rehab_village_exterior_1776281820189.png" onerror="this.src='Assets/Hospital View.webp'" alt="Ayurgreen Rehab Village" style="width: 100%; border-radius: var(--radius-large); height: 600px; object-fit: cover; box-shadow: var(--shadow-hover); margin-bottom: 64px;">
            
            <div class="grid grid-2 gap-large items-center">
                <div>
                    <h2>A Sanctuary Designed for Serenity</h2>
                    <p style="margin-top: 24px; margin-bottom: 24px;">Recovery is not merely physical; the environment plays a profound role in a patient's neurological healing process. We have built an expansive, lush green campus specifically engineered to reduce stress and promote well-being.</p>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px; margin-top: 32px;">
                        <li style="display: flex; gap: 16px; align-items: flex-start;">
                            <i data-lucide="check-circle" size="24" style="color: var(--primary);"></i>
                            <div>
                                <h4 style="font-size: 18px;">Independent Cottages</h4>
                                <p style="font-size: 15px; margin-top: 4px;">Wheelchair-accessible, premium private villas offering privacy and comfort for patients and their families.</p>
                            </div>
                        </li>
                        <li style="display: flex; gap: 16px; align-items: flex-start;">
                            <i data-lucide="check-circle" size="24" style="color: var(--primary);"></i>
                            <div>
                                <h4 style="font-size: 18px;">Organic Ecosystem</h4>
                                <p style="font-size: 15px; margin-top: 4px;">Surrounded by medicinal paths and tropical gardens designed to keep patients connected to nature.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="grid grid-2 gap-small">
                    <img src="Assets/generated/international_patient_room_1776281853326.png" style="width: 100%; height: 250px; object-fit: cover; border-radius: var(--radius-card);">
                    <img src="Assets/generated/ayurveda_premium_room_1776281797515.png" style="width: 100%; height: 250px; object-fit: cover; border-radius: var(--radius-card);">
                </div>
            </div>
        </section>
    </main>"""

international_main = """    <main>
        <section class="section-soft" style="padding-top: 120px;">
            <div class="container text-center">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--secondary);">Global Care</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px;">International Patient Hub</h1>
                <p class="text-large" style="max-width: 800px; margin: 0 auto 64px auto;">Welcoming patients from across the globe. Seamless medical tourism, premium care, and dedicated international liaisons.</p>
            </div>
        </section>

        <section class="container" style="margin-top: -80px; position: relative; z-index: 10;">
            <img src="Assets/generated/international_patient_room_1776281853326.png" alt="VIP Hospital Room" style="width: 100%; border-radius: var(--radius-large); height: 500px; object-fit: cover; box-shadow: var(--shadow-hover); margin-bottom: 64px;">
            
            <div class="grid grid-3 gap-large">
                <div class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="plane-landing" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Travel & Visa Support</h3>
                    <p>We provide exclusive Medical Visa invitation letters, airport pickup, and dedicated ambulance transfer services directly to Ayurgreen.</p>
                </div>
                <div class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="languages" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Language Translators</h3>
                    <p>Dedicated translators for Arabic, Russian, and other international languages ensure flawless communication with your medical team.</p>
                </div>
                <div class="card card-large-radius">
                    <div style="background: var(--accent); padding: 16px; width: fit-content; border-radius: 50%; color: var(--primary); margin-bottom: 24px;"><i data-lucide="utensils" size="32"></i></div>
                    <h3 style="margin-bottom: 12px;">Customized Cuisine</h3>
                    <p>Our culinary team prepares Halal, continental, and specific dietary meals customized to your cultural preferences and recovery diet.</p>
                </div>
            </div>
        </section>
    </main>"""

stroke_main = """    <main>
        <section class="section-dark" style="padding-top: 120px;">
            <div class="container">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: rgba(255,255,255,0.6);">Program Detail</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px; color: white;">Stroke Rehabilitation Protocol</h1>
                <p class="text-large" style="max-width: 800px; margin-bottom: 48px; color: rgba(255,255,255,0.8);">A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.</p>
                <div class="flex gap-small">
                    <a href="index.html#consultation" class="btn btn-primary" style="background: white; color: var(--primary);">Book Assessment</a>
                </div>
            </div>
        </section>

        <section class="container" style="margin-top: -60px; position: relative; z-index: 10;">
            <img src="Assets/generated/stroke_rehab_focus_1776281836789.png" alt="Stroke Rehab" style="width: 100%; border-radius: var(--radius-large); height: 500px; object-fit: cover; box-shadow: var(--shadow-hover); margin-bottom: 64px;">
            
            <div class="grid grid-2 gap-large">
                <div>
                    <h2>The Golden Window of Recovery</h2>
                    <p style="margin-top: 24px; margin-bottom: 24px;">The first 6 months following a stroke are critical. Our specialized protocol leverages the brain's neuroplasticity to rewire pathways around the damaged area. We apply high-repetition robotic therapy combined with intensive physiotherapy and Ayurveda to reduce spasticity and promote active movement.</p>
                    
                    <h3 style="margin-top: 48px; margin-bottom: 24px;">Treatment Modalities Used</h3>
                    <div class="grid grid-2 gap-small">
                        <div style="display: flex; gap: 12px; align-items: center;"><i data-lucide="check-circle-2" size="20" style="color: var(--primary);"></i> Robotics (Arm & Gait)</div>
                        <div style="display: flex; gap: 12px; align-items: center;"><i data-lucide="check-circle-2" size="20" style="color: var(--primary);"></i> Ayurveda Panchakarma</div>
                        <div style="display: flex; gap: 12px; align-items: center;"><i data-lucide="check-circle-2" size="20" style="color: var(--primary);"></i> Speech & Swallowing</div>
                        <div style="display: flex; gap: 12px; align-items: center;"><i data-lucide="check-circle-2" size="20" style="color: var(--primary);"></i> Occupational Therapy</div>
                        <div style="display: flex; gap: 12px; align-items: center;"><i data-lucide="check-circle-2" size="20" style="color: var(--primary);"></i> Virtual Reality Cognitive</div>
                        <div style="display: flex; gap: 12px; align-items: center;"><i data-lucide="check-circle-2" size="20" style="color: var(--primary);"></i> Functional Electrical Stim</div>
                    </div>
                </div>
                <div>
                    <div class="card card-large-radius" style="background: var(--accent); border: none;">
                        <h3 style="margin-bottom: 24px;">Expected Outcomes</h3>
                        <ul style="list-style: none; display: flex; flex-direction: column; gap: 16px;">
                            <li style="display: flex; gap: 16px;"><div style="background: white; padding: 8px; border-radius: 50%; color: var(--primary); height: fit-content;"><i data-lucide="trending-up" size="18"></i></div><div><strong>Restored Mobility:</strong> Transition from wheelchair to independent walking with assistive devices.</div></li>
                            <li style="display: flex; gap: 16px;"><div style="background: white; padding: 8px; border-radius: 50%; color: var(--primary); height: fit-content;"><i data-lucide="message-square" size="18"></i></div><div><strong>Speech Recovery:</strong> Significant improvements in aphasia and ability to swallow safely.</div></li>
                            <li style="display: flex; gap: 16px;"><div style="background: white; padding: 8px; border-radius: 50%; color: var(--primary); height: fit-content;"><i data-lucide="sun" size="18"></i></div><div><strong>ADL Independence:</strong> Regaining ability to dress, eat, and perform activities of daily living autonomously.</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>"""

robotic_main = """    <main>
        <section class="section-dark" style="padding-top: 120px;">
            <div class="container">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: rgba(255,255,255,0.6);">Therapy Detail</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px; color: white;">Robotic Exoskeleton Therapy</h1>
                <p class="text-large" style="max-width: 800px; margin-bottom: 48px; color: rgba(255,255,255,0.8);">India's most advanced robotic gait trainers and arm rehabilitation systems providing exact, sensor-guided, high-repetition movement.</p>
            </div>
        </section>

        <section class="container" style="margin-top: -60px; position: relative; z-index: 10;">
            <img src="Assets/generated/robotic_rehab_exo_1776281782213.png" alt="Robotic Rehab" style="width: 100%; border-radius: var(--radius-large); height: 500px; object-fit: cover; box-shadow: var(--shadow-hover); margin-bottom: 64px;">
            
            <div class="grid grid-2 gap-large items-center">
                <div>
                    <h2>Precision Meets Neuroplasticity</h2>
                     <p style="margin-top: 24px; margin-bottom: 24px;">Human therapists can physically guide a patient through perhaps 100 foot steps per session. Our advanced exoskeletons can guide them through perfectly synchronized 1,000+ steps. This massive repetition of correct biometric movement is the core secret to rewiring the damaged brain.</p>
                     <p>Equipped with intelligent bio-sensors, our robots detect exactly how much effort the patient is producing, and automatically provide just enough assistance to complete the movement, forcing active patient participation rather than passive motion.</p>
                </div>
                <div class="card card-large-radius flex-col gap-medium" style="background: var(--bg-main);">
                      <div style="display: flex; align-items: center; gap: 16px;">
                          <div style="background: var(--primary); padding: 12px; border-radius: 50%; color: white;"><i data-lucide="activity" size="24"></i></div>
                          <h3 style="font-size: 20px;">Sensory Biofeedback</h3>
                      </div>
                      <p>Real-time visual graphs on screens in front of the patient display their active participation and muscle engagement, creating immediate cognitive feedback loops.</p>
                      
                      <div style="display: flex; align-items: center; gap: 16px; margin-top: 16px;">
                          <div style="background: var(--primary); padding: 12px; border-radius: 50%; color: white;"><i data-lucide="repeat" size="24"></i></div>
                          <h3 style="font-size: 20px;">Intensive Repetition</h3>
                      </div>
                      <p>Enabling mass-practice of movement protocols mathematically impossible through manual therapy alone.</p>
                </div>
            </div>
        </section>
    </main>"""

ayurveda_main = """    <main class="ayur-page-container">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

            .ayur-page-container {
                /* Design System Theme Variables from DESIGN.md */
                --ayur-primary: #059669;
                --ayur-primary-hover: #047857;
                --ayur-secondary: #10B981;
                --ayur-neutral-core: #111827;
                --ayur-surface-bg: #f9f9ff;
                --ayur-surface-subtle: #EAECF0;
                --ayur-surface-white: #FFFFFF;
                --ayur-mint-light: #D1FAE5;
                --ayur-forest-dark: #064E3B;
                
                --ayur-font-heading: 'Manrope', 'Plus Jakarta Sans', sans-serif;
                --ayur-font-body: 'Inter', sans-serif;
                
                --ayur-radius-sm: 0.25rem;
                --ayur-radius-default: 0.5rem;
                --ayur-radius-md: 0.75rem;
                --ayur-radius-lg: 1rem;
                --ayur-radius-xl: 1.5rem;
                
                --ayur-shadow-soft: 0 4px 20px rgba(5, 150, 105, 0.05);
                --ayur-shadow-hover: 0 12px 30px rgba(5, 150, 105, 0.1);
                
                font-family: var(--ayur-font-body);
                color: var(--ayur-neutral-core);
                background-color: var(--ayur-surface-bg);
                line-height: 1.7;
            }

            /* Typography classes mapping directly to DESIGN.md */
            .ayur-display-lg {
                font-family: var(--ayur-font-heading);
                font-size: 48px;
                font-weight: 700;
                line-height: 56px;
                letter-spacing: -0.02em;
                color: var(--ayur-neutral-core);
            }
            .ayur-headline-lg {
                font-family: var(--ayur-font-heading);
                font-size: 32px;
                font-weight: 600;
                line-height: 40px;
                color: var(--ayur-neutral-core);
            }
            .ayur-headline-md {
                font-family: var(--ayur-font-heading);
                font-size: 24px;
                font-weight: 600;
                line-height: 32px;
                color: var(--ayur-neutral-core);
            }
            .ayur-body-lg {
                font-family: var(--ayur-font-body);
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
                color: #3d4a42;
            }
            .ayur-body-md {
                font-family: var(--ayur-font-body);
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color: #3d4a42;
            }
            .ayur-label-md {
                font-family: var(--ayur-font-body);
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                letter-spacing: 0.01em;
            }
            .ayur-label-sm {
                font-family: var(--ayur-font-body);
                font-size: 12px;
                font-weight: 600;
                line-height: 16px;
            }

            /* Responsive Typography overrides */
            @media (max-width: 1024px) {
                .ayur-display-lg {
                    font-size: 40px;
                    line-height: 48px;
                }
            }
            @media (max-width: 768px) {
                .ayur-display-lg {
                    font-size: 32px;
                    line-height: 40px;
                }
                .ayur-headline-lg {
                    font-size: 28px;
                    line-height: 36px;
                }
            }

            /* Layout Grid & Containers */
            .ayur-container {
                max-width: 1280px;
                margin: 0 auto;
                padding: 0 24px;
                box-sizing: border-box;
            }
            
            /* High-level section rhythm */
            .ayur-section {
                padding: 80px 0;
            }
            .ayur-section-soft {
                background-color: var(--ayur-surface-subtle);
            }

            /* Hero Section Styling */
            .ayur-hero {
                padding: 160px 0 80px 0;
                background: linear-gradient(180deg, var(--ayur-surface-subtle) 0%, var(--ayur-surface-bg) 100%);
                position: relative;
            }
            .ayur-hero-grid {
                display: grid;
                grid-template-columns: 1.1fr 0.9fr;
                gap: 48px;
                align-items: center;
            }
            .ayur-hero-content {
                max-width: 640px;
            }
            .ayur-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 6px 16px;
                background-color: var(--ayur-mint-light);
                color: var(--ayur-forest-dark);
                font-weight: 600;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-radius: var(--ayur-radius-sm);
                margin-bottom: 24px;
            }
            .ayur-hero-image-wrapper {
                position: relative;
            }
            .ayur-hero-image {
                width: 100%;
                height: 480px;
                object-fit: cover;
                border-radius: var(--ayur-radius-xl);
                box-shadow: var(--ayur-shadow-hover);
                border: 1px solid rgba(255, 255, 255, 0.5);
            }
            .ayur-btn-group {
                display: flex;
                gap: 16px;
                margin-top: 32px;
            }
            .ayur-btn {
                padding: 14px 28px;
                border-radius: var(--ayur-radius-default);
                font-weight: 600;
                font-size: 16px;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s ease;
                cursor: pointer;
                text-decoration: none;
            }
            .ayur-btn-primary {
                background-color: var(--ayur-primary);
                color: #ffffff;
                border: none;
                box-shadow: 0 4px 14px rgba(5, 150, 105, 0.2);
            }
            .ayur-btn-primary:hover {
                background-color: var(--ayur-primary-hover);
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
            }
            .ayur-btn-secondary {
                background-color: transparent;
                color: var(--ayur-primary);
                border: 1px solid var(--ayur-primary);
            }
            .ayur-btn-secondary:hover {
                background-color: var(--ayur-mint-light);
                transform: translateY(-2px);
            }

            /* Section Headers */
            .ayur-section-header {
                text-align: center;
                max-width: 800px;
                margin: 0 auto 56px auto;
            }
            .ayur-section-header h2 {
                margin-top: 16px;
                margin-bottom: 16px;
            }

            /* Pathway Grid */
            .ayur-pathway-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 56px;
                align-items: center;
            }
            .ayur-pathway-list {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
            }
            .ayur-pathway-card {
                background: var(--ayur-surface-white);
                border: 1px solid var(--ayur-surface-subtle);
                border-radius: var(--ayur-radius-lg);
                padding: 24px;
                transition: all 0.3s ease;
                box-shadow: var(--ayur-shadow-soft);
            }
            .ayur-pathway-card:hover {
                transform: translateY(-4px);
                box-shadow: var(--ayur-shadow-hover);
                border-color: var(--ayur-primary);
            }
            .ayur-card-icon {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background-color: var(--ayur-mint-light);
                color: var(--ayur-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 16px;
            }
            .ayur-pathway-card h3 {
                margin-bottom: 8px;
            }

            /* Therapies Grid & Cards */
            .ayur-therapies-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
            }
            .ayur-therapy-card {
                background: var(--ayur-surface-white);
                border: 1px solid var(--ayur-surface-subtle);
                border-radius: var(--ayur-radius-lg);
                overflow: hidden;
                box-shadow: var(--ayur-shadow-soft);
                transition: all 0.3s ease;
                display: flex;
                flex-direction: column;
            }
            .ayur-therapy-card:hover {
                transform: translateY(-8px);
                box-shadow: var(--ayur-shadow-hover);
                border-color: var(--ayur-primary);
            }
            .ayur-therapy-img-wrapper {
                height: 240px;
                overflow: hidden;
                position: relative;
            }
            .ayur-therapy-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            .ayur-therapy-card:hover .ayur-therapy-img {
                transform: scale(1.06);
            }
            .ayur-therapy-content {
                padding: 24px;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
            }
            .ayur-therapy-num {
                position: absolute;
                top: 16px;
                left: 16px;
                background: var(--ayur-primary);
                color: #ffffff;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 13px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                z-index: 2;
            }
            .ayur-therapy-card h3 {
                margin-bottom: 12px;
            }

            /* Integration Section */
            .ayur-integration-banner {
                background: linear-gradient(135deg, var(--ayur-forest-dark) 0%, #004D34 100%);
                border-radius: var(--ayur-radius-xl);
                padding: 56px;
                color: #ffffff;
                box-shadow: var(--ayur-shadow-hover);
            }
            .ayur-integration-banner h2 {
                color: #ffffff;
                margin-bottom: 20px;
            }
            .ayur-integration-banner p {
                color: rgba(255, 255, 255, 0.85);
                margin-bottom: 28px;
            }
            .ayur-integration-grid {
                display: grid;
                grid-template-columns: 1.1fr 0.9fr;
                gap: 48px;
                align-items: center;
            }
            .ayur-integration-list {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
            }
            .ayur-integration-item {
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.12);
                border-radius: var(--ayur-radius-default);
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            .ayur-integration-item:hover {
                background: rgba(255, 255, 255, 0.15);
                border-color: rgba(255, 255, 255, 0.3);
            }

            /* Benefits Matrix */
            .ayur-benefits-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
            }
            .ayur-benefit-card {
                background: var(--ayur-surface-white);
                border: 1px solid var(--ayur-surface-subtle);
                border-radius: var(--ayur-radius-lg);
                padding: 32px;
                box-shadow: var(--ayur-shadow-soft);
                transition: all 0.3s ease;
            }
            .ayur-benefit-card:hover {
                transform: translateY(-4px);
                box-shadow: var(--ayur-shadow-hover);
                border-color: var(--ayur-primary);
            }
            .ayur-benefit-card h3 {
                margin-bottom: 24px;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .ayur-benefit-list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            .ayur-benefit-list li {
                display: flex;
                align-items: flex-start;
                gap: 12px;
            }
            .ayur-benefit-list li strong {
                color: var(--ayur-neutral-core);
                display: block;
            }
            .ayur-benefit-list li svg {
                margin-top: 4px;
                flex-shrink: 0;
            }

            /* Trust / Why Choose Section */
            .ayur-trust-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 56px;
                align-items: center;
            }
            .ayur-trust-stats {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
            }
            .ayur-stat-card {
                background: var(--ayur-surface-white);
                border: 1px solid var(--ayur-surface-subtle);
                border-radius: var(--ayur-radius-lg);
                padding: 32px;
                text-align: center;
                box-shadow: var(--ayur-shadow-soft);
            }
            .ayur-stat-num {
                font-size: 40px;
                font-weight: 800;
                color: var(--ayur-primary);
                margin-bottom: 8px;
                font-family: var(--ayur-font-heading);
            }
            .ayur-stat-label {
                font-size: 14px;
                color: #3d4a42;
                font-weight: 500;
            }
            .ayur-trust-points {
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            .ayur-trust-item {
                display: flex;
                gap: 16px;
            }
            .ayur-trust-item-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--ayur-mint-light);
                color: var(--ayur-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            .ayur-trust-item h4 {
                margin-bottom: 4px;
            }

            /* Responsive Breakpoints */
            @media (max-width: 1024px) {
                .ayur-hero-grid,
                .ayur-pathway-grid,
                .ayur-integration-grid,
                .ayur-trust-grid {
                    grid-template-columns: 1fr;
                    gap: 40px;
                }
                .ayur-therapies-grid,
                .ayur-benefits-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                .ayur-hero-image {
                    height: 360px;
                }
            }
            @media (max-width: 768px) {
                .ayur-therapies-grid,
                .ayur-benefits-grid,
                .ayur-pathway-list,
                .ayur-trust-stats {
                    grid-template-columns: 1fr;
                }
                .ayur-integration-banner {
                    padding: 32px 24px;
                }
                .ayur-integration-list {
                    grid-template-columns: 1fr;
                }
                .ayur-btn-group {
                    flex-direction: column;
                }
                .ayur-btn {
                    width: 100%;
                    justify-content: center;
                }
            }
        </style>

        <!-- Section 1: Hero Section -->
        <section class="ayur-hero">
            <div class="ayur-container">
                <div class="ayur-hero-grid">
                    <div class="ayur-hero-content">
                        <span class="ayur-badge">
                            <i data-lucide="leaf" size="14"></i> Kerala Ayurveda
                        </span>
                        <h1 class="ayur-display-lg" style="margin-bottom: 24px;">Ayur-Neuro Pathway: Bridging Tradition & Innovation</h1>
                        <p class="ayur-body-lg" style="margin-bottom: 36px;">At Ayurgreen Hospital, Ayurveda is not just a traditional treatment; it is an essential part of a scientifically guided recovery journey. We blend the restorative wisdom of ancient Ayurveda with modern medical advancements to support patients in regaining strength, mobility, and confidence.</p>
                        <div class="ayur-btn-group">
                            <a href="#consultation" class="ayur-btn ayur-btn-primary">
                                Book Assessment <i data-lucide="calendar" size="18"></i>
                            </a>
                            <a href="#therapies" class="ayur-btn ayur-btn-secondary">
                                Explore Therapies <i data-lucide="arrow-right" size="18"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ayur-hero-image-wrapper">
                        <img src="Assets/rehab/th_shirodhara.webp" onerror="this.src='Assets/generated/ayurveda_treatment_1776269801869.png'" alt="Ayur-Neuro Treatment" class="ayur-hero-image">
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: How Ayurveda Supports Recovery -->
        <section class="ayur-section">
            <div class="ayur-container">
                <div class="ayur-pathway-grid">
                    <div>
                        <span class="ayur-label-md" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--ayur-primary); display: block; margin-bottom: 12px;">Stroke & Neuro Rehabilitation</span>
                        <h2 class="ayur-headline-lg" style="margin-bottom: 24px;">Restoring Balance, Regenerating Nerves</h2>
                        <p class="ayur-body-md" style="margin-bottom: 24px;">Neurological conditions such as stroke, paralysis, and nerve disorders affect both physical function and mental well-being. Ayurveda focuses on restoring the body's internal balance (doshas), improving circulation, and enhancing nerve regeneration.</p>
                        <p class="ayur-body-md">By addressing the root causes of motor deficits rather than just managing peripheral symptoms, our Ayurvedic neuro-rehabilitation protocols establish a strong biological foundation for long-term functional recovery.</p>
                    </div>
                    <div class="ayur-pathway-list">
                        <div class="ayur-pathway-card">
                            <div class="ayur-card-icon"><i data-lucide="activity" size="20"></i></div>
                            <h3 class="ayur-headline-md" style="font-size: 18px;">Stimulate Nerves</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">Targeted herbal oil treatments stimulate damaged nerves and muscles to promote localized neuroplasticity.</p>
                        </div>
                        <div class="ayur-pathway-card">
                            <div class="ayur-card-icon"><i data-lucide="zap" size="20"></i></div>
                            <h3 class="ayur-headline-md" style="font-size: 18px;">Improve Circulation</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">Enhances blood flow to the brain and affected areas to nourish tissues and accelerate healing.</p>
                        </div>
                        <div class="ayur-pathway-card">
                            <div class="ayur-card-icon"><i data-lucide="shield" size="20"></i></div>
                            <h3 class="ayur-headline-md" style="font-size: 18px;">Reduce Spasticity</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">Nourishing therapies relieve stiffness, ease chronic pain, and combat inflammation in muscles.</p>
                        </div>
                        <div class="ayur-pathway-card">
                            <div class="ayur-card-icon"><i data-lucide="brain" size="20"></i></div>
                            <h3 class="ayur-headline-md" style="font-size: 18px;">Enhance Motor Skills</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">Improves motor control, coordination, and functional mobility in paralyzed limbs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Key Ayurvedic Therapies Offered -->
        <section class="ayur-section ayur-section-soft" id="therapies">
            <div class="ayur-container">
                <div class="ayur-section-header">
                    <span class="ayur-badge">Healing Modalities</span>
                    <h2 class="ayur-headline-lg">Key Ayurvedic Therapies Offered</h2>
                    <p class="ayur-body-lg">Each therapy is carefully customized and supervised by experienced Ayurvedic physicians based on the patient's condition, recovery stage, and physical tolerance.</p>
                </div>
                
                <div class="ayur-therapies-grid">
                    <!-- Therapy 1 -->
                    <div class="ayur-therapy-card">
                        <div class="ayur-therapy-img-wrapper">
                            <span class="ayur-therapy-num">1</span>
                            <img src="Assets/rehab/th_panchakarma.webp" alt="Panchakarma Detox" class="ayur-therapy-img">
                        </div>
                        <div class="ayur-therapy-content">
                            <h3 class="ayur-headline-md" style="font-size: 20px;">Panchakarma Detox</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">A profound five-fold purification and cleansing process that removes accumulated metabolic toxins (Ama) from bodily tissues, restoring metabolic balance and preparing the body for faster healing.</p>
                        </div>
                    </div>
                    <!-- Therapy 2 -->
                    <div class="ayur-therapy-card">
                        <div class="ayur-therapy-img-wrapper">
                            <span class="ayur-therapy-num">2</span>
                            <img src="Assets/rehab/th_abhyanga.webp" alt="Abhyanga" class="ayur-therapy-img">
                        </div>
                        <div class="ayur-therapy-content">
                            <h3 class="ayur-headline-md" style="font-size: 20px;">Abhyanga (Oil Massage)</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">A synchronized, rhythmic massage using specially prepared warm herbal oils. It helps improve systemic blood circulation, reduce muscular stiffness, and pacify an overactive nervous system.</p>
                        </div>
                    </div>
                    <!-- Therapy 3 -->
                    <div class="ayur-therapy-card">
                        <div class="ayur-therapy-img-wrapper">
                            <span class="ayur-therapy-num">3</span>
                            <img src="Assets/rehab/th_njavarakizhi.webp" alt="Njavarakizhi" class="ayur-therapy-img">
                        </div>
                        <div class="ayur-therapy-content">
                            <h3 class="ayur-headline-md" style="font-size: 20px;">Njavarakizhi (Rice Bundle)</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">A highly rejuvenating sudation therapy using warm pouches filled with medicated Njavara rice cooked in milk and herbal decoctions. It strengthens wasting muscles and enhances sensory-motor nerve functions.</p>
                        </div>
                    </div>
                    <!-- Therapy 4 -->
                    <div class="ayur-therapy-card">
                        <div class="ayur-therapy-img-wrapper">
                            <span class="ayur-therapy-num">4</span>
                            <img src="Assets/rehab/th_shirodhara.webp" alt="Shirodhara" class="ayur-therapy-img">
                        </div>
                        <div class="ayur-therapy-content">
                            <h3 class="ayur-headline-md" style="font-size: 20px;">Shirodhara</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">A deeply relaxing treatment where a continuous stream of warm medicated oil is gently poured over the forehead (the third eye region). This calms the mind, alleviates anxiety, and corrects neurological imbalances.</p>
                        </div>
                    </div>
                    <!-- Therapy 5 -->
                    <div class="ayur-therapy-card">
                        <div class="ayur-therapy-img-wrapper">
                            <span class="ayur-therapy-num">5</span>
                            <img src="Assets/rehab/th_pizhichil.webp" alt="Pizhichil" class="ayur-therapy-img">
                        </div>
                        <div class="ayur-therapy-content">
                            <h3 class="ayur-headline-md" style="font-size: 20px;">Pizhichil (Oil Bath)</h3>
                            <p class="ayur-body-md" style="font-size: 14px;">A therapeutic combination of warm oil massage and heat therapy where liters of medicated oil are poured continuously over the body. It is excellent for improving joint mobility and reducing spasticity.</p>
                        </div>
                    </div>
                    <!-- Info Card -->
                    <div class="ayur-therapy-card" style="background: linear-gradient(135deg, var(--ayur-surface-subtle) 0%, var(--ayur-surface-bg) 100%); justify-content: center; align-items: center; text-align: center; border: 2px dashed var(--ayur-primary);">
                        <div class="ayur-therapy-content" style="justify-content: center; align-items: center; padding: 32px;">
                            <div class="ayur-card-icon" style="background: var(--ayur-primary); color: #fff;"><i data-lucide="info" size="24"></i></div>
                            <h3 class="ayur-headline-md">Personalized Care</h3>
                            <p class="ayur-body-md" style="margin-bottom: 20px; font-size: 14px;">All therapies are tailored based on Prakruti (body constitution) and Vikruti (current imbalance) to maximize recovery outcomes.</p>
                            <a href="#consultation" class="ayur-btn ayur-btn-primary" style="padding: 12px 24px; font-size: 14px;">Consult a Physician</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Integration with Modern Rehabilitation -->
        <section class="ayur-section">
            <div class="ayur-container">
                <div class="ayur-integration-banner">
                    <div class="ayur-integration-grid">
                        <div>
                            <span class="ayur-badge" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.25);">The Ayurgreen Advantage</span>
                            <h2 class="ayur-headline-lg" style="color: white; margin-top: 16px;">Fusing Ancient Healing with Modern Robotics</h2>
                            <p class="ayur-body-md" style="color: rgba(255, 255, 255, 0.9);">What makes Ayurgreen unique is its seamless integration of Ayurveda with advanced rehabilitation technologies. We do not view Ayurveda as an isolated alternative, but as an active biological catalyst that works in harmony with modern clinical disciplines.</p>
                            <p class="ayur-body-md" style="color: rgba(255, 255, 255, 0.9);">While robotics and physiotherapy build outer motor pathways and strength, Ayurveda supports inner cellular vitality, relaxes spastic muscles, and reduces neurological stress. This synergy ensures faster progress, improved functional outcomes, and a higher quality of life.</p>
                        </div>
                        <div class="ayur-integration-list">
                            <div class="ayur-integration-item">
                                <i data-lucide="bot" size="24"></i> Robotic Neuro Rehab
                            </div>
                            <div class="ayur-integration-item">
                                <i data-lucide="activity" size="24"></i> Physiotherapy (PPT)
                            </div>
                            <div class="ayur-integration-item">
                                <i data-lucide="shield" size="24"></i> Occupational Therapy
                            </div>
                            <div class="ayur-integration-item">
                                <i data-lucide="brain" size="24"></i> Speech & Swallow Therapy
                            </div>
                            <div class="ayur-integration-item">
                                <i data-lucide="users" size="24"></i> Psychological Counseling
                            </div>
                            <div class="ayur-integration-item">
                                <i data-lucide="leaf" size="24"></i> Authentic Ayurveda
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: Benefits Matrix -->
        <section class="ayur-section ayur-section-soft">
            <div class="ayur-container">
                <div class="ayur-section-header">
                    <span class="ayur-badge">Recovery Milestones</span>
                    <h2 class="ayur-headline-lg">Multidimensional Benefits of Ayurveda</h2>
                    <p class="ayur-body-lg">Our integrated Ayurvedic protocols trigger deep biological changes that manifest across physical, mental, and long-term health dimensions.</p>
                </div>
                
                <div class="ayur-benefits-grid">
                    <!-- Column 1 -->
                    <div class="ayur-benefit-card">
                        <h3 class="ayur-headline-md" style="font-size: 22px;"><i data-lucide="activity" style="color: var(--ayur-primary);"></i> Physical Benefits</h3>
                        <ul class="ayur-benefit-list" style="margin-top: 24px;">
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Muscle Strength & Tone</strong>
                                    Reverses muscle atrophy and restores core muscle strength.
                                </div>
                            </li>
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Reduced Spasticity & Pain</strong>
                                    Relieves muscular tightness, joint stiffness, and chronic inflammatory pain.
                                </div>
                            </li>
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Nerve Regeneration</strong>
                                    Promotes micro-circulation and nerve growth factor pathways.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Column 2 -->
                    <div class="ayur-benefit-card">
                        <h3 class="ayur-headline-md" style="font-size: 22px;"><i data-lucide="heart" style="color: var(--ayur-primary);"></i> Mental & Emotional</h3>
                        <ul class="ayur-benefit-list" style="margin-top: 24px;">
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Stress & Anxiety Reduction</strong>
                                    Calms the autonomic nervous system through soothing Shirodhara.
                                </div>
                            </li>
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Restorative Sleep</strong>
                                    Corrects insomnia and improves sleep quality, vital for neural repair.
                                </div>
                            </li>
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Emotional Resilience</strong>
                                    Helps patients cope with post-stroke depression and mood instability.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Column 3 -->
                    <div class="ayur-benefit-card">
                        <h3 class="ayur-headline-md" style="font-size: 22px;"><i data-lucide="shield" style="color: var(--ayur-primary);"></i> Long-Term Wellness</h3>
                        <ul class="ayur-benefit-list" style="margin-top: 24px;">
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Prevention of Complications</strong>
                                    Reduces risks of secondary complications like deep vein thrombosis.
                                </div>
                            </li>
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Enhanced Immunity</strong>
                                    Reboots systemic immunity and digestive fire (Agni) with rasayanas.
                                </div>
                            </li>
                            <li>
                                <i data-lucide="check-circle-2" size="18" style="color: var(--ayur-primary);"></i>
                                <div>
                                    <strong>Sustainable Habits</strong>
                                    Empowers patients with lifestyle modifications to prevent relapse.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 6: Why Choose Ayurgreen -->
        <section class="ayur-section">
            <div class="ayur-container">
                <div class="ayur-trust-grid">
                    <div class="ayur-trust-stats">
                        <div class="ayur-stat-card">
                            <div class="ayur-stat-num">25+</div>
                            <div class="ayur-stat-label">Years of Rehabilitation Expertise</div>
                        </div>
                        <div class="ayur-stat-card" style="border-color: var(--ayur-primary);">
                            <div class="ayur-stat-num" style="color: var(--ayur-primary);">10k+</div>
                            <div class="ayur-stat-label">Successful Patient Recovery Stories</div>
                        </div>
                        <div class="ayur-stat-card">
                            <div class="ayur-stat-num">1st</div>
                            <div class="ayur-stat-label">Robotic-Integrated Center in India</div>
                        </div>
                        <div class="ayur-stat-card">
                            <div class="ayur-stat-num">50+</div>
                            <div class="ayur-stat-label">Countries Served Globally</div>
                        </div>
                    </div>
                    <div>
                        <span class="ayur-label-md" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: var(--ayur-primary); display: block; margin-bottom: 12px;">Our Standard of Care</span>
                        <h2 class="ayur-headline-lg" style="margin-bottom: 32px;">Why Choose Ayurgreen for Ayurvedic Rehab?</h2>
                        
                        <div class="ayur-trust-points">
                            <div class="ayur-trust-item">
                                <div class="ayur-trust-item-icon"><i data-lucide="trophy" size="18"></i></div>
                                <div>
                                    <h4 class="ayur-headline-md" style="font-size: 16px;">Unrivaled Experience</h4>
                                    <p class="ayur-body-md" style="font-size: 14px;">Over two decades of clinical experience in managing critical post-stroke, paralysis, and spine injury recovery cases.</p>
                                </div>
                            </div>
                            <div class="ayur-trust-item">
                                <div class="ayur-trust-item-icon"><i data-lucide="users" size="18"></i></div>
                                <div>
                                    <h4 class="ayur-headline-md" style="font-size: 16px;">Multidisciplinary Medical Panel</h4>
                                    <p class="ayur-body-md" style="font-size: 14px;">Our Ayurvedic doctors work in close synergy with senior neurologists, physiatrists, and robotic therapy engineers.</p>
                                </div>
                            </div>
                            <div class="ayur-trust-item">
                                <div class="ayur-trust-item-icon"><i data-lucide="leaf" size="18"></i></div>
                                <div>
                                    <h4 class="ayur-headline-md" style="font-size: 16px;">Premium Wellness Ecosystem</h4>
                                    <p class="ayur-body-md" style="font-size: 14px;">Located within the serene, biophilic Ayurgreen Rehab Village, creating a peaceful, stress-free healing environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>"""

pages = [
    ('about.html', about_main),
    ('programs.html', programs_main),
    ('therapies.html', therapies_main),
    ('rehab-village.html', village_main),
    ('international-patients.html', international_main),
    ('stroke-rehab.html', stroke_main),
    ('robotic-rehab.html', robotic_main),
    ('ayurveda.html', ayurveda_main)
]

current_dir = os.path.dirname(os.path.abspath(__file__))

def replace_main(filename, new_main_html):
    filepath = os.path.join(current_dir, filename)
    
    # Copy index.html as the template to ensure header/footer synchronization
    import shutil
    shutil.copyfile(os.path.join(current_dir, 'index.html'), filepath)
    print(f"Synchronized {filename} with index.html template")
        
    with open(filepath, 'r') as f:
        content = f.read()
    
    start_idx = content.find('<main>')
    end_idx = content.find('</main>') + len('</main>')
    
    if start_idx != -1 and end_idx != -1:
        new_content = content[:start_idx] + new_main_html + content[end_idx:]
        
        # Strip the homepage hero-canvas-wrapper banner and keep only the header navigation!
        header_start = new_content.find('<header class="hero-header">')
        if header_start != -1:
            header_end = new_content.find('</header>', header_start) + len('</header>')
            header_html = new_content[header_start:header_end]
            
            wrapper_start = new_content.find('<section class="hero-canvas-wrapper"')
            main_start = new_content.find('<main')
            
            if wrapper_start != -1 and main_start != -1:
                wrapper_end = new_content.rfind('</section>', 0, main_start) + len('</section>')
                
                # Keep transparent homepage header directly without any wrapper div or background style overrides
                new_content = new_content[:wrapper_start] + header_html + new_content[wrapper_end:]
                
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Populated main content and processed header for {filename}")


for filename, main_content in pages:
    replace_main(filename, main_content)
