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

ayurveda_main = """    <main>
        <section class="section-dark" style="padding-top: 120px;">
            <div class="container">
                <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: rgba(255,255,255,0.6);">Therapy Detail</span>
                <h1 style="margin-top: 16px; margin-bottom: 24px; color: white;">Authentic Kerala Ayurveda</h1>
                <p class="text-large" style="max-width: 800px; margin-bottom: 48px; color: rgba(255,255,255,0.8);">Profound systemic cellular healing and neurological nourishment mapped precisely to your neuro-rehab protocol.</p>
            </div>
        </section>

        <section class="container" style="margin-top: -60px; position: relative; z-index: 10;">
            <img src="Assets/generated/ayurveda_premium_room_1776281797515.png" alt="Ayurveda Therapy" style="width: 100%; border-radius: var(--radius-large); height: 500px; object-fit: cover; box-shadow: var(--shadow-hover); margin-bottom: 64px;">
            
            <div class="grid grid-2 gap-large items-center">
                <div>
                     <h2>Deep Systemic Detoxification</h2>
                     <p style="margin-top: 24px; margin-bottom: 24px;">At Ayurgreen, we integrate ancient Kerala Ayurveda methodologies with modern science. Instead of standalone treatments, our Ayurvedic doctors collaborate with our neurologists to prescribe exact herbal therapies, oils, and Panchakarma modalities that reduce inflammation and prepare the body for intensive robotics.</p>
                     <p>Treatments such as Shirodhara (medicated oil flow over the forehead) calm the overactive nervous system seen in stroke and TBI, while Abhyanga and Pizhichil warm, nourish, and drastically reduce muscular spasticity.</p>
                </div>
                <div class="card card-large-radius flex-col gap-medium" style="background: var(--bg-main);">
                     <div style="display: flex; align-items: center; gap: 16px;">
                         <div style="background: var(--primary); padding: 12px; border-radius: 50%; color: white;"><i data-lucide="droplet" size="24"></i></div>
                         <h3 style="font-size: 20px;">Panchakarma Detox</h3>
                     </div>
                     <p>Complete removal of metabolic toxins (Ama) from bodily tissues to enhance the absorption of medicines.</p>
                     
                     <div style="display: flex; align-items: center; gap: 16px; margin-top: 16px;">
                         <div style="background: var(--primary); padding: 12px; border-radius: 50%; color: white;"><i data-lucide="leaf" size="24"></i></div>
                         <h3 style="font-size: 20px;">Neuro-Nourishing Herbs</h3>
                     </div>
                     <p>Specialized adaptogens and medhya rasayanas (brain tonics) targeting neuro-regeneration and systemic strength.</p>
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

def replace_main(filepath, new_main_html):
    with open(filepath, 'r') as f:
        content = f.read()
    
    start_idx = content.find('<main>')
    end_idx = content.find('</main>') + len('</main>')
    
    if start_idx != -1 and end_idx != -1:
        new_content = content[:start_idx] + new_main_html + content[end_idx:]
        with open(filepath, 'w') as f:
            f.write(new_content)

for filename, main_content in pages:
    file_path = os.path.join('/Users/shahadrk/Desktop/Yaseen/Antigravity/Ayurgreen-Hospital', filename)
    replace_main(file_path, main_content)
