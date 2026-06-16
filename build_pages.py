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

json_ld_ayurveda = """{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://ayurgreenhospital.com/#organization",
      "name": "Ayurgreen Hospital",
      "url": "https://ayurgreenhospital.com/",
      "logo": "https://ayurgreenhospital.com/Assets/Ayurgreen_Logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8080-808080",
        "contactType": "customer service",
        "email": "info@ayurgreen.com",
        "availableLanguage": ["en", "ar"]
      }
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://ayurgreenhospital.com/ayurveda.html#webpage",
      "url": "https://ayurgreenhospital.com/ayurveda.html",
      "name": "Kerala Ayurveda Rehabilitation & Panchakarma | Ayurgreen Hospital",
      "description": "Experience authentic Kerala Ayurveda rehabilitation integrated with modern recovery techniques at Ayurgreen Hospital. Specialized Panchakarma and nerve regeneration therapies.",
      "about": {
        "@type": "MedicalSpecialty",
        "name": "Ayurvedic Neuro Rehabilitation"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ayurgreenhospital.com/ayurveda.html#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ayurgreenhospital.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Departments",
          "item": "https://ayurgreenhospital.com/therapies.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ayurveda",
          "item": "https://ayurgreenhospital.com/ayurveda.html"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://ayurgreenhospital.com/ayurveda.html#service",
      "name": "Ayurvedic Neuro Rehabilitation & Panchakarma",
      "provider": {
        "@type": "Hospital",
        "name": "Ayurgreen Hospital"
      },
      "serviceType": "Rehabilitation Service",
      "description": "Integrated neuro-rehabilitation using authentic Kerala Ayurveda, Panchakarma detox, and specialized therapies for stroke, Parkinson's, and spinal injuries."
    },
    {
      "@type": "FAQPage",
      "@id": "https://ayurgreenhospital.com/ayurveda.html#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Integrated Ayurveda Rehabilitation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Integrated Ayurveda Rehabilitation is a unique care model that combines traditional Kerala Ayurvedic therapies (like Panchakarma, Abhyanga) with modern neuro-rehabilitation techniques, such as robotic gait trainers and advanced physiotherapy. This dual approach accelerates physical recovery while enhancing nerve regeneration and biological vitality."
          }
        },
        {
          "@type": "Question",
          "name": "How does Ayurveda help in post-stroke recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Post-stroke, Ayurveda helps by pacifying Vata dosha, which regulates the nervous system. Specialized therapies improve blood circulation to the brain, stimulate dormant motor nerves, reduce muscular spasticity, and prevent secondary muscle wasting."
          }
        },
        {
          "@type": "Question",
          "name": "Are the Ayurvedic treatments safe and quality-tested?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All Ayurvedic medicines and oils used at Ayurgreen Hospital are sourced from GMP-certified traditional pharmacies and undergo rigorous quality tests. Every treatment is prescribed and monitored by qualified Ayurvedic physicians."
          }
        },
        {
          "@type": "Question",
          "name": "Is robotic therapy combined with Ayurveda on the same day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for patients who qualify. Our multidisciplinary panel designs a daily schedule where active therapies like robotic gait training or physiotherapy are scheduled in the morning, followed by relaxing and nourishing Ayurvedic treatments in the afternoon."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical duration of an inpatient recovery program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical inpatient programs last between 14 to 28 days, depending on the severity of the neurological deficit. A detailed assessment is done upon admission to set realistic recovery goals and timelines."
          }
        },
        {
          "@type": "Question",
          "name": "Are the treatments customized for each patient?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. No two stroke or Parkinson's patients are identical. Treatments are customized based on the patient's constitution (Prakruti), current imbalance (Vikruti), age, and muscle tolerance."
          }
        },
        {
          "@type": "Question",
          "name": "Can international patients receive treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we serve patients from over 50 countries. We provide full international patient support, including medical visa invitation letters, airport transfers, translators, and customized dietary menu options."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book a consultation or check-in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a consultation by clicking 'Book Assessment' on our website, calling our direct helpline, or messaging us via WhatsApp. Our clinical liaisons will review your medical reports and guide you."
          }
        }
      ]
    }
  ]
}"""

ayurveda_main = """    <main class="ayur-page-main">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

            .ayur-page-main {
                --ayur-primary: #0F3D2E;
                --ayur-secondary: #1F5A44;
                --ayur-accent: #EAF4F0;
                --ayur-text-main: #111111;
                --ayur-text-muted: #6B7280;
                --ayur-bg-main: #F7F8F7;
                --ayur-border: #E5E7EB;
                
                font-family: 'Inter', sans-serif;
                color: var(--ayur-text-main);
                background-color: var(--ayur-bg-main);
                line-height: 1.7;
            }

            /* Main grid layout */
            .ayur-layout-grid {
                display: grid;
                grid-template-columns: 320px 1fr;
                gap: 48px;
                align-items: start;
            }

            /* Desktop Sidebar */
            .ayur-sidebar-wrapper {
                background: #020C22;
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 28px;
                padding: 32px;
                position: sticky;
                top: 120px;
                z-index: 100;
            }

            .ayur-sidebar-nav {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .ayur-sidebar-link {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 14px;
                color: #94A3B8;
                font-size: 15px;
                font-weight: 500;
                border-radius: 8px;
                transition: all 0.3s ease;
                border-left: 3px solid transparent;
                text-decoration: none;
            }

            .ayur-sidebar-link:hover {
                transform: translateX(5px);
                color: #ffffff;
            }

            .ayur-sidebar-link.active {
                background: linear-gradient(90deg, rgba(39, 174, 96, 0.15), transparent);
                border-left: 3px solid #27ae60;
                color: #ffffff;
                font-weight: 600;
            }

            /* Timeline */
            .ayur-timeline-item {
                display: flex;
                align-items: center;
                gap: 48px;
                margin-bottom: 56px;
                position: relative;
                z-index: 2;
            }

            .ayur-timeline-item:nth-child(even) {
                flex-direction: row-reverse;
            }

            .ayur-timeline-col-img {
                flex: 1;
            }

            .ayur-timeline-col-img img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 20px;
                box-shadow: var(--shadow-soft);
            }

            .ayur-timeline-col-content {
                flex: 1;
            }

            .ayur-timeline-badge {
                background: var(--ayur-accent);
                color: #27ae60;
                font-weight: 700;
                font-size: 14px;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 16px;
                border: 2px solid #27ae60;
            }

            /* why cards */
            .ayur-why-card {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 16px;
                padding: 24px;
                transition: all 0.3s ease;
            }

            .ayur-why-card:hover {
                background: rgba(255, 255, 255, 0.06);
                border-color: rgba(39, 174, 96, 0.4);
                transform: translateY(-4px);
            }

            /* FAQ Accordion */
            .ayur-faq-container {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .ayur-faq-item {
                background: #ffffff;
                border: 1px solid var(--ayur-border);
                border-radius: 12px;
                overflow: hidden;
                transition: all 0.3s ease;
            }

            .ayur-faq-item:hover {
                border-color: #27ae60;
                box-shadow: 0 4px 12px rgba(39, 174, 96, 0.05);
            }

            .ayur-faq-trigger {
                width: 100%;
                padding: 20px 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: none;
                border: none;
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: var(--ayur-text-main);
                cursor: pointer;
            }

            .ayur-faq-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
            }

            .ayur-faq-item.active .ayur-faq-content {
                max-height: 1000px;
                transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
            }

            .ayur-faq-content-inner {
                padding: 0 24px 20px 24px;
                font-size: 14.5px;
                color: var(--ayur-text-muted);
                line-height: 1.6;
            }

            .ayur-faq-item .faq-icon {
                transition: transform 0.3s ease;
                color: #27ae60;
            }

            .ayur-faq-item.active .faq-icon {
                transform: rotate(45deg);
            }

            /* Mobile styles */
            .ayur-mobile-sidebar-toggle-wrapper {
                display: none;
            }
            .ayur-mobile-drawer {
                display: none;
            }
            .ayur-sticky-bottom-cta {
                display: none;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #ffffff;
                box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
                z-index: 1999;
                padding: 12px 24px;
            }

            .ayur-sticky-bottom-cta-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
            }

            .ayur-bottom-cta-btn {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 4px;
                padding: 8px;
                border-radius: 8px;
                font-size: 12px;
                font-weight: 600;
                color: var(--ayur-primary);
                background: var(--ayur-accent);
                transition: all 0.2s ease;
                text-decoration: none;
            }

            .ayur-bottom-cta-btn.primary {
                background: #27ae60;
                color: #ffffff;
            }

            @media (max-width: 1024px) {
                .ayur-layout-grid {
                    grid-template-columns: 280px 1fr;
                    gap: 32px;
                }
                .ayur-sidebar-wrapper {
                    padding: 24px;
                }
            }

            @media (max-width: 768px) {
                .ayur-layout-grid {
                    grid-template-columns: 1fr;
                    gap: 32px;
                }
                .ayur-sidebar-wrapper {
                    display: none;
                }
                .ayur-mobile-sidebar-toggle-wrapper {
                    display: block;
                    position: fixed;
                    bottom: 84px; /* above the sticky bottom cta */
                    right: 24px;
                    z-index: 1998;
                }
                .ayur-mobile-sidebar-btn {
                    background: #020C22;
                    color: #ffffff;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 9999px;
                    padding: 14px 24px;
                    font-weight: 600;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    cursor: pointer;
                    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
                }
                .ayur-mobile-drawer {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 3000;
                    visibility: hidden;
                    transition: visibility 0.3s ease;
                }
                .ayur-mobile-drawer.open {
                    visibility: visible;
                }
                .ayur-mobile-drawer-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.6);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .ayur-mobile-drawer.open .ayur-mobile-drawer-overlay {
                    opacity: 1;
                }
                .ayur-mobile-drawer-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    max-height: 75%;
                    background: #020C22;
                    border-top-left-radius: 28px;
                    border-top-right-radius: 28px;
                    transform: translateY(100%);
                    transition: transform 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                .ayur-mobile-drawer.open .ayur-mobile-drawer-content {
                    transform: translateY(0);
                }
                .ayur-mobile-drawer-header {
                    padding: 20px 24px;
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .ayur-mobile-drawer-header h3 {
                    color: #ffffff;
                    margin: 0;
                    font-size: 18px;
                    font-weight: 700;
                }
                .ayur-mobile-drawer-close-btn {
                    background: transparent;
                    border: none;
                    color: #94A3B8;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ayur-mobile-drawer-body {
                    padding: 16px 24px 40px 24px;
                    overflow-y: auto;
                    flex-grow: 1;
                }
                .ayur-mobile-drawer-body .ayur-sidebar-link {
                    padding: 12px 14px;
                }
                .ayur-sticky-bottom-cta {
                    display: block;
                }
                body {
                    padding-bottom: 80px !important;
                }
                .ayur-timeline-item {
                    flex-direction: column !important;
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .ayur-timeline-col-img img {
                    height: 220px;
                }
                .ayur-conditions-grid {
                    grid-template-columns: 1fr !important;
                    gap: 20px;
                }
                .ayur-tech-grid {
                    grid-template-columns: 1fr !important;
                    gap: 20px;
                }
                .ayur-tech-grid > div {
                    grid-column: span 1 !important;
                }
                .hide-mobile {
                    display: none !important;
                }
            }
        </style>

        <!-- Section 1: Hero Section -->
        <div style="padding: 24px 24px 0 24px; max-width: 1440px; margin: 0 auto; box-sizing: border-box;">
            <div class="ayur-hero-banner" style="position: relative; height: 520px; border-radius: 32px; overflow: hidden; background-image: url('Assets/rehab/th_shirodhara.webp'); background-size: cover; background-position: center top; display: flex; align-items: flex-end; box-shadow: var(--shadow-soft);">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%); z-index: 1;"></div>
                <div class="container" style="position: relative; z-index: 2; color: white; padding-bottom: 52px; width: 100%;">
                    <!-- Breadcrumbs -->
                    <div style="font-size: 13px; opacity: 0.8; margin-bottom: 14px; font-weight: 500;">
                        <a href="index.html" style="color: white; text-decoration: none;">Home</a> &nbsp;&gt;&nbsp;
                        <a href="therapies.html" style="color: white; text-decoration: none;">Departments</a> &nbsp;&gt;&nbsp;
                        <span style="color: #a8e6c3;">Ayurveda</span>
                    </div>
                    <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2.5px; font-weight: 600; color: #4ade80; margin-bottom: 10px; display: block; font-size: 12px;">Department / Therapy</span>
                    <h1 class="premium-title text-white" style="margin-top: 0; margin-bottom: 28px; font-size: clamp(36px, 5vw, 52px); font-weight: 700; line-height: 1.1; max-width: 640px;">Kerala Ayurveda<br>Rehabilitation</h1>
                    <div class="flex" style="gap: 16px; flex-wrap: wrap;">
                        <a href="index.html#consultation" class="btn btn-primary" style="background-color: #27ae60; color: white; font-weight: 600; border-radius: 12px; padding: 14px 28px; font-size: 15px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; box-shadow: 0 4px 16px rgba(39,174,96,0.4);">
                            Book Consultation <i data-lucide="calendar" size="16"></i>
                        </a>
                        <a href="https://wa.me/918080808080" target="_blank" class="btn btn-secondary" style="background-color: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.35); color: white; font-weight: 600; border-radius: 12px; padding: 14px 28px; font-size: 15px; display: inline-flex; align-items: center; gap: 8px; backdrop-filter: blur(12px); text-decoration: none;">
                            WhatsApp <i data-lucide="message-square" size="16"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: Main Layout Grid (2-column layout) -->
        <div class="container" style="margin-top: 48px; margin-bottom: 80px; padding: 0 24px;">
            <div class="ayur-layout-grid">
                <!-- Left Sidebar -->
                <aside class="ayur-sidebar-wrapper">
                     <div class="ayur-sidebar-header">
                         <h3 style="font-family: var(--font-heading); color: white; font-size: 20px; font-weight: 700; margin-bottom: 4px;">Our Services</h3>
                         <p style="font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 24px; font-family: var(--font-body);">Integrated Healing Ecosystem</p>
                     </div>
                     <nav class="ayur-sidebar-nav">
                          <a href="ayurveda.html" class="ayur-sidebar-link active">
                              <i data-lucide="leaf" size="16" style="color: #4CAF50;"></i>
                              <span>Ayurveda</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="dumbbell" size="16" style="color: #FF9800;"></i>
                              <span>Physiotherapy</span>
                          </a>
                          <a href="robotic-rehab.html" class="ayur-sidebar-link">
                              <i data-lucide="bot" size="16" style="color: #00BCD4;"></i>
                              <span>Robotic Rehabilitation</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="puzzle" size="16" style="color: #9C27B0;"></i>
                              <span>Occupational Therapy</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="message-circle" size="16" style="color: #2196F3;"></i>
                              <span>Speech Therapy</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="headset" size="16" style="color: #E91E63;"></i>
                              <span>Virtual Reality</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="sun" size="16" style="color: #FFC107;"></i>
                              <span>Yoga and Meditation</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="map-pin" size="16" style="color: #F44336;"></i>
                              <span>Acupuncture</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="footprints" size="16" style="color: #795548;"></i>
                              <span>Reflexology</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="waves" size="16" style="color: #03A9F4;"></i>
                              <span>Hydro / Aquatic Therapy</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="baby" size="16" style="color: #E040FB;"></i>
                              <span>Pediatrics</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="ruler" size="16" style="color: #009688;"></i>
                              <span>Slimming Treatment</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="shield-plus" size="16" style="color: #4CAF50;"></i>
                              <span>Pain Management</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="utensils" size="16" style="color: #FF5722;"></i>
                              <span>Diet & Nutrition</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="heart-handshake" size="16" style="color: #E91E63;"></i>
                              <span>Counseling</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="smile" size="16" style="color: #00BCD4;"></i>
                              <span>Dentistry</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="pill" size="16" style="color: #9C27B0;"></i>
                              <span>Modern Medicine</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="accessibility" size="16" style="color: #3F51B5;"></i>
                              <span>Assistive Devices</span>
                          </a>
                     </nav>
                     <!-- Sidebar CTA Card -->
                     <div style="margin-top: 28px; background: linear-gradient(135deg, rgba(39,174,96,0.15) 0%, rgba(39,174,96,0.05) 100%); border: 1px solid rgba(39,174,96,0.25); border-radius: 16px; padding: 24px; text-align: center;">
                         <div style="width: 48px; height: 48px; background: rgba(39,174,96,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: #27ae60;">
                             <i data-lucide="calendar-check" size="22"></i>
                         </div>
                         <h4 style="color: #ffffff; font-size: 15px; font-weight: 700; margin-bottom: 8px; font-family: var(--font-heading);">Book a Free Assessment</h4>
                         <p style="color: rgba(255,255,255,0.55); font-size: 13px; line-height: 1.5; margin-bottom: 20px;">Talk to our Ayurvedic specialists and get a customized recovery plan.</p>
                         <a href="index.html#consultation" style="display: block; background: #27ae60; color: white; font-weight: 600; font-size: 14px; border-radius: 10px; padding: 12px 16px; text-decoration: none; transition: background 0.2s ease;" onmouseover="this.style.background='#219d54'" onmouseout="this.style.background='#27ae60'">
                             Get Started
                         </a>
                         <a href="https://wa.me/918080808080" target="_blank" style="display: block; margin-top: 10px; color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500; text-decoration: none; padding: 8px;">
                             <i data-lucide="message-square" size="13" style="display: inline-block; vertical-align: middle; margin-right: 4px;"></i> WhatsApp Us
                         </a>
                     </div>
                </aside>

                <!-- Right Content Area -->
                <div class="ayur-right-content">

                     <!-- Section: Conditions Treated -->
                     <section id="conditions-treated" style="padding: 0 0 56px 0;">
                         <div style="text-align: center; max-width: 600px; margin: 0 auto 40px auto;">
                             <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: #27ae60; margin-bottom: 12px; display: block;">Clinical Focus</span>
                             <h2 style="font-size: 28px; font-weight: 600; font-family: var(--font-heading);">Neurological Conditions Treated</h2>
                             <p style="color: var(--text-muted); font-size: 15px; margin-top: 8px;">Our specialized Ayurvedic protocols are customized to address specific neuro-motor impairments and systemic dysfunctions.</p>
                         </div>
                         <div class="ayur-conditions-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
                             <!-- Stroke -->
                             <div class="card" style="padding: 0; border-radius: 20px; overflow: hidden; background: #ffffff;">
                                 <img src="Assets/rehab/prog_stroke.webp" alt="Stroke Recovery" style="width: 100%; height: 180px; object-fit: cover;">
                                 <div style="padding: 24px;">
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 10px; font-family: var(--font-heading);">Stroke & Hemiplegia</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Targeted protocols to reduce spasticity, stimulate motor nerves, and regain independent mobility.</p>
                                 </div>
                             </div>
                             <!-- Parkinson's -->
                             <div class="card" style="padding: 0; border-radius: 20px; overflow: hidden; background: #ffffff;">
                                 <img src="Assets/rehab/prog_parkinsons.webp" alt="Parkinson's Disease" style="width: 100%; height: 180px; object-fit: cover;">
                                 <div style="padding: 24px;">
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 10px; font-family: var(--font-heading);">Parkinson's Disease</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Reversing rigidity and tremors through neurological nourishment and customized exercises.</p>
                                 </div>
                             </div>
                             <!-- Spinal Cord -->
                             <div class="card" style="padding: 0; border-radius: 20px; overflow: hidden; background: #ffffff;">
                                 <img src="Assets/rehab/prog_spinal_cord.webp" alt="Spinal Cord Injury" style="width: 100%; height: 180px; object-fit: cover;">
                                 <div style="padding: 24px;">
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 10px; font-family: var(--font-heading);">Spinal Cord Injury</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Enhancing neuro-regeneration, managing pain, and restoring bowel/bladder regulation.</p>
                                 </div>
                             </div>
                             <!-- Cerebral Palsy -->
                             <div class="card" style="padding: 0; border-radius: 20px; overflow: hidden; background: #ffffff;">
                                 <img src="Assets/rehab/prog_cerebral_palsy.webp" alt="Cerebral Palsy" style="width: 100%; height: 180px; object-fit: cover;">
                                 <div style="padding: 24px;">
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 10px; font-family: var(--font-heading);">Cerebral Palsy</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Pediatric developmental therapies designed to reduce stiffness and improve milestones.</p>
                                 </div>
                             </div>
                             <!-- Multiple Sclerosis -->
                             <div class="card" style="padding: 0; border-radius: 20px; overflow: hidden; background: #ffffff;">
                                 <div style="width: 100%; height: 180px; background: var(--ayur-accent); display: flex; align-items: center; justify-content: center; color: var(--ayur-primary);">
                                     <i data-lucide="shield-alert" size="48"></i>
                                 </div>
                                 <div style="padding: 24px;">
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 10px; font-family: var(--font-heading);">Multiple Sclerosis</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Immune-modulatory therapies to control flare-ups and stabilize neurological functions.</p>
                                 </div>
                             </div>
                             <!-- Traumatic Brain Injury -->
                             <div class="card" style="padding: 0; border-radius: 20px; overflow: hidden; background: #ffffff;">
                                 <img src="Assets/rehab/prog_tbi.webp" alt="Traumatic Brain Injury" style="width: 100%; height: 180px; object-fit: cover;">
                                 <div style="padding: 24px;">
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 10px; font-family: var(--font-heading);">Traumatic Brain Injury</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Cognitive and physical rehabilitation to stimulate neuronal recovery and rebuild pathways.</p>
                                 </div>
                             </div>
                         </div>
                     </section>

                     <!-- Section: Treatments Offered -->
                     <section id="treatments-offered" style="padding: 56px 0; border-top: 1px solid var(--border);">
                         <div style="text-align: center; max-width: 600px; margin: 0 auto 48px auto;">
                             <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: #27ae60; margin-bottom: 12px; display: block;">Therapy Modules</span>
                             <h2 style="font-size: 28px; font-weight: 600; font-family: var(--font-heading);">Core Ayurvedic Treatments</h2>
                             <p style="color: var(--text-muted); font-size: 15px; margin-top: 8px;">Key evidence-based therapies customized according to biological state and functional tolerance.</p>
                         </div>
                         
                         <div class="ayur-treatments-timeline" style="position: relative;">
                             <!-- Vertical Line (Desktop Only) -->
                             <div class="hide-mobile" style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: rgba(39, 174, 96, 0.15); transform: translateX(-50%); z-index: 1;"></div>
                             
                             <!-- Therapy 1 -->
                             <div class="ayur-timeline-item">
                                 <div class="ayur-timeline-col-img">
                                     <img src="Assets/rehab/th_panchakarma.webp" alt="Panchakarma Detox">
                                 </div>
                                 <div class="ayur-timeline-col-content">
                                     <div class="ayur-timeline-badge">1</div>
                                     <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 12px; font-family: var(--font-heading);">Panchakarma Detox</h3>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6;">A profound five-fold purification and cleansing process that removes accumulated metabolic toxins (Ama) from bodily tissues, restoring metabolic balance and preparing the body for faster nerve regeneration.</p>
                                 </div>
                             </div>

                             <!-- Therapy 2 -->
                             <div class="ayur-timeline-item">
                                 <div class="ayur-timeline-col-img">
                                     <img src="Assets/rehab/th_abhyanga.webp" alt="Abhyanga Massages">
                                 </div>
                                 <div class="ayur-timeline-col-content">
                                     <div class="ayur-timeline-badge">2</div>
                                     <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 12px; font-family: var(--font-heading);">Abhyanga (Warm Oil Massage)</h3>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6;">A synchronized, rhythmic massage using specially prepared warm herbal oils. It helps improve systemic blood circulation, reduce muscular stiffness, and pacify an overactive nervous system.</p>
                                 </div>
                             </div>

                             <!-- Therapy 3 -->
                             <div class="ayur-timeline-item">
                                 <div class="ayur-timeline-col-img">
                                     <img src="Assets/rehab/th_njavarakizhi.webp" alt="Njavarakizhi Rice Sudation">
                                 </div>
                                 <div class="ayur-timeline-col-content">
                                     <div class="ayur-timeline-badge">3</div>
                                     <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 12px; font-family: var(--font-heading);">Njavarakizhi (Rice Bundle)</h3>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6;">A highly rejuvenating sudation therapy using warm pouches filled with medicated Njavara rice cooked in milk and herbal decoctions. It strengthens wasting muscles and enhances sensory-motor nerve functions.</p>
                                 </div>
                             </div>

                             <!-- Therapy 4 -->
                             <div class="ayur-timeline-item">
                                 <div class="ayur-timeline-col-img">
                                     <img src="Assets/rehab/th_shirodhara.webp" alt="Shirodhara oil therapy">
                                 </div>
                                 <div class="ayur-timeline-col-content">
                                     <div class="ayur-timeline-badge">4</div>
                                     <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 12px; font-family: var(--font-heading);">Shirodhara</h3>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6;">A deeply relaxing treatment where a continuous stream of warm medicated oil is gently poured over the forehead (the third eye region). This calms the mind, alleviates anxiety, and corrects neurological imbalances.</p>
                                 </div>
                             </div>

                             <!-- Therapy 5 -->
                             <div class="ayur-timeline-item">
                                 <div class="ayur-timeline-col-img">
                                     <img src="Assets/rehab/th_pizhichil.webp" alt="Pizhichil Oil Bath">
                                 </div>
                                 <div class="ayur-timeline-col-content">
                                     <div class="ayur-timeline-badge">5</div>
                                     <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 12px; font-family: var(--font-heading);">Pizhichil (Oil Bath)</h3>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6;">A therapeutic combination of warm oil massage and heat therapy where liters of medicated oil are poured continuously over the body. It is excellent for improving joint mobility and reducing spasticity.</p>
                                 </div>
                             </div>
                         </div>
                     </section>

                     <!-- Section: Technologies Used -->
                     <section id="technologies-used" style="padding: 56px 0; border-top: 1px solid var(--border);">
                         <div style="text-align: center; max-width: 600px; margin: 0 auto 40px auto;">
                             <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: #27ae60; margin-bottom: 12px; display: block;">Technology & Innovation</span>
                             <h2 style="font-size: 28px; font-weight: 600; font-family: var(--font-heading);">Integrated Advanced Technologies</h2>
                             <p style="color: var(--text-muted); font-size: 15px; margin-top: 8px;">While Ayurveda restores cellular vitality and relaxes spastic muscles, our advanced rehabilitation technologies build neural networks.</p>
                         </div>
                         
                         <div class="ayur-tech-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
                             <div class="card" style="display: flex; gap: 20px; align-items: start; background: #ffffff;">
                                 <div style="background: var(--ayur-accent); color: var(--ayur-primary); padding: 12px; border-radius: 12px;"><i data-lucide="bot" size="24"></i></div>
                                 <div>
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; font-family: var(--font-heading);">G-EO Robotic Gait Trainer</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">The world's most advanced robotic walking simulator, helping paralyzed patients practice stair climbing and independent walking.</p>
                                 </div>
                             </div>
                             <div class="card" style="display: flex; gap: 20px; align-items: start; background: #ffffff;">
                                 <div style="background: var(--ayur-accent); color: var(--ayur-primary); padding: 12px; border-radius: 12px;"><i data-lucide="activity" size="24"></i></div>
                                 <div>
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; font-family: var(--font-heading);">Armotion Upper Limb Trainer</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Robotic device that guides post-stroke arm movement to build upper limb strength and cognitive motor pathways.</p>
                                 </div>
                             </div>
                             <div class="card" style="display: flex; gap: 20px; align-items: start; background: #ffffff;">
                                 <div style="background: var(--ayur-accent); color: var(--ayur-primary); padding: 12px; border-radius: 12px;"><i data-lucide="shuffle" size="24"></i></div>
                                 <div>
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; font-family: var(--font-heading);">Huber 360 Neuromuscular Trainer</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Multi-axis balance platform providing sensory biofeedback to correct posture, coordination, and foot placement.</p>
                                 </div>
                             </div>
                             <div class="card" style="display: flex; gap: 20px; align-items: start; background: #ffffff;">
                                 <div style="background: var(--ayur-accent); color: var(--ayur-primary); padding: 12px; border-radius: 12px;"><i data-lucide="headset" size="24"></i></div>
                                 <div>
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; font-family: var(--font-heading);">VR Cognitive Rehabilitation</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Immersive digital virtual reality tasks to improve cognitive memory, spatial orientation, and visual reflexes.</p>
                                 </div>
                             </div>
                             <div class="card" style="display: flex; gap: 20px; align-items: start; background: #ffffff; grid-column: span 2;">
                                 <div style="background: var(--ayur-accent); color: var(--ayur-primary); padding: 12px; border-radius: 12px;"><i data-lucide="waves" size="24"></i></div>
                                 <div>
                                     <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; font-family: var(--font-heading);">Aquatic Hydrotherapy</h4>
                                     <p style="color: var(--text-muted); font-size: 14px; line-height: 1.5;">Low-impact, buoyancy-assisted walking and range-of-motion training in a warm temperature-regulated aquatic pool, ideal for severe balance issues.</p>
                                 </div>
                             </div>
                         </div>
                     </section>

                     <!-- Section: Why Ayurgreen -->
                     <section id="why-ayurgreen" style="padding: 56px 32px; background: #020C22; color: #ffffff; border-radius: 28px; margin-top: 56px; margin-bottom: 56px; border: 1px solid rgba(255, 255, 255, 0.08);">
                         <div style="text-align: center; max-width: 600px; margin: 0 auto 40px auto;">
                             <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: #27ae60; margin-bottom: 12px; display: block;">The Ayurgreen Standard</span>
                             <h2 style="font-size: 28px; font-weight: 600; color: #ffffff; font-family: var(--font-heading);">Why Ayurgreen Hospital?</h2>
                             <p style="color: rgba(255,255,255,0.7); font-size: 15px; margin-top: 8px;">Pioneering the global benchmark for integrated orthopedic and neurological recovery.</p>
                         </div>
                         
                         <div class="ayur-why-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
                             <!-- 25+ Years Experience -->
                             <div class="ayur-why-card">
                                 <div style="color: #27ae60; margin-bottom: 16px;"><i data-lucide="award" size="28"></i></div>
                                 <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #ffffff; font-family: var(--font-heading);">25+ Years Experience</h4>
                                 <p style="color: rgba(255,255,255,0.7); font-size: 13.5px; line-height: 1.5;">Over two decades of clinical experience managing critical neurological disorders and post-stroke cases.</p>
                             </div>
                             <!-- Robotic Rehabilitation -->
                             <div class="ayur-why-card">
                                 <div style="color: #27ae60; margin-bottom: 16px;"><i data-lucide="bot" size="28"></i></div>
                                 <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #ffffff; font-family: var(--font-heading);">Robotic Rehabilitation</h4>
                                 <p style="color: rgba(255,255,255,0.7); font-size: 13.5px; line-height: 1.5;">India's pioneer in combining state-of-the-art robotic exoskeletons with systemic cellular healing.</p>
                             </div>
                             <!-- Integrated Care -->
                             <div class="ayur-why-card">
                                 <div style="color: #27ae60; margin-bottom: 16px;"><i data-lucide="git-merge" size="28"></i></div>
                                 <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #ffffff; font-family: var(--font-heading);">Integrated Care</h4>
                                 <p style="color: rgba(255,255,255,0.7); font-size: 13.5px; line-height: 1.5;">A unified clinical panel combining Ayurvedic scholars, neurologists, therapists, and engineers.</p>
                             </div>
                             <!-- International Patients -->
                             <div class="ayur-why-card">
                                 <div style="color: #27ae60; margin-bottom: 16px;"><i data-lucide="globe" size="28"></i></div>
                                 <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #ffffff; font-family: var(--font-heading);">International Patients</h4>
                                 <p style="color: rgba(255,255,255,0.7); font-size: 13.5px; line-height: 1.5;">Welcomed and successfully treated recovery patients from over 50 countries globally.</p>
                             </div>
                             <!-- Expert Team -->
                             <div class="ayur-why-card">
                                 <div style="color: #27ae60; margin-bottom: 16px;"><i data-lucide="users" size="28"></i></div>
                                 <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #ffffff; font-family: var(--font-heading);">Expert Team</h4>
                                 <p style="color: rgba(255,255,255,0.7); font-size: 13.5px; line-height: 1.5;">Elite therapists and certified Ayurvedic doctors working together on synchronized programs.</p>
                             </div>
                             <!-- Evidence-Based Practice -->
                             <div class="ayur-why-card">
                                 <div style="color: #27ae60; margin-bottom: 16px;"><i data-lucide="check-square" size="28"></i></div>
                                 <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #ffffff; font-family: var(--font-heading);">Evidence-Based Practice</h4>
                                 <p style="color: rgba(255,255,255,0.7); font-size: 13.5px; line-height: 1.5;">Utilizing measurable bio-feedback data to track and document recovery milestones continuously.</p>
                             </div>
                         </div>
                     </section>



                     <!-- Section: FAQ -->
                     <section id="faq-section" style="padding: 56px 0; border-top: 1px solid var(--border);">
                         <div style="text-align: center; max-width: 600px; margin: 0 auto 40px auto;">
                             <span class="text-micro" style="text-transform: uppercase; letter-spacing: 2px; font-weight: 600; color: #27ae60; margin-bottom: 12px; display: block;">Common Queries</span>
                             <h2 style="font-size: 28px; font-weight: 600; font-family: var(--font-heading);">Frequently Asked Questions</h2>
                             <p style="color: var(--text-muted); font-size: 15px; margin-top: 8px;">Have questions about our integrated Ayurvedic treatments? Find the answers here.</p>
                         </div>
                         
                         <div class="ayur-faq-container">
                             <!-- FAQ 1 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>What is Integrated Ayurveda Rehabilitation?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>Integrated Ayurveda Rehabilitation is a unique care model that combines traditional Kerala Ayurvedic therapies (like Panchakarma, Abhyanga) with modern neuro-rehabilitation techniques, such as robotic gait trainers and advanced physiotherapy. This dual approach accelerates physical recovery while enhancing nerve regeneration and biological vitality.</p>
                                     </div>
                                 </div>
                             </div>
                             <!-- FAQ 2 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>How does Ayurveda help in post-stroke recovery?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>Post-stroke, Ayurveda helps by pacifying Vata dosha, which regulates the nervous system. Specialized therapies improve blood circulation to the brain, stimulate dormant motor nerves, reduce muscular spasticity, and prevent secondary muscle wasting.</p>
                                     </div>
                                 </div>
                             </div>
                             <!-- FAQ 3 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>Are the Ayurvedic treatments safe and quality-tested?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>Yes. All Ayurvedic medicines and oils used at Ayurgreen Hospital are sourced from GMP-certified traditional pharmacies and undergo rigorous quality tests. Every treatment is prescribed and monitored by qualified Ayurvedic physicians.</p>
                                     </div>
                                 </div>
                             </div>
                             <!-- FAQ 4 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>Is robotic therapy combined with Ayurveda on the same day?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>Yes, for patients who qualify. Our multidisciplinary panel designs a daily schedule where active therapies like robotic gait training or physiotherapy are scheduled in the morning, followed by relaxing and nourishing Ayurvedic treatments in the afternoon.</p>
                                     </div>
                                 </div>
                             </div>
                             <!-- FAQ 5 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>What is the typical duration of an inpatient recovery program?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>Typical inpatient programs last between 14 to 28 days, depending on the severity of the neurological deficit. A detailed assessment is done upon admission to set realistic recovery goals and timelines.</p>
                                     </div>
                                 </div>
                             </div>
                             <!-- FAQ 6 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>Are the treatments customized for each patient?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>Absolutely. No two stroke or Parkinson's patients are identical. Treatments are customized based on the patient's constitution (Prakruti), current imbalance (Vikruti), age, and muscle tolerance.</p>
                                     </div>
                                 </div>
                             </div>
                             <!-- FAQ 7 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>Can international patients receive treatment?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>Yes, we serve patients from over 50 countries. We provide full international patient support, including medical visa invitation letters, airport transfers, translators, and customized dietary menu options.</p>
                                     </div>
                                 </div>
                             </div>
                             <!-- FAQ 8 -->
                             <div class="ayur-faq-item">
                                 <button class="ayur-faq-trigger">
                                     <span>How can I book a consultation or check-in?</span>
                                     <i class="faq-icon" data-lucide="plus" size="18"></i>
                                 </button>
                                 <div class="ayur-faq-content">
                                     <div class="ayur-faq-content-inner">
                                         <p>You can book a consultation by clicking 'Book Assessment' on our website, calling our direct helpline, or messaging us via WhatsApp. Our clinical liaisons will review your medical reports and guide you.</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </section>

                     <!-- Section: CTA Banner -->
                     <section id="cta-banner" style="padding: 56px 40px; background: linear-gradient(135deg, #020C22 0%, #0F3D2E 100%); border-radius: 28px; text-align: center; color: white; margin-top: 48px; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: var(--shadow-hover);">
                         <h2 style="font-size: 32px; font-weight: 700; color: white; margin-bottom: 16px; font-family: var(--font-heading);">Start Your Recovery Journey</h2>
                         <p style="color: rgba(255,255,255,0.85); max-width: 600px; margin: 0 auto 32px auto; font-size: 15px; line-height: 1.6;">Consult with our clinical experts and Ayurvedic scholars today to design your customized integrated recovery pathway.</p>
                         
                         <div class="ayur-cta-btns" style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                             <a href="index.html#consultation" class="btn" style="background: #27ae60; color: white; border-radius: 12px; font-weight: 600; padding: 14px 28px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
                                 Book Consultation <i data-lucide="calendar" size="16"></i>
                             </a>
                             <a href="https://wa.me/918080808080" target="_blank" class="btn" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; border-radius: 12px; font-weight: 600; padding: 14px 28px; display: inline-flex; align-items: center; gap: 8px; backdrop-filter: blur(10px); text-decoration: none;">
                                 WhatsApp <i data-lucide="message-square" size="16"></i>
                             </a>
                             <a href="tel:+918080808080" class="btn" style="background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; border-radius: 12px; font-weight: 600; padding: 14px 28px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
                                 Call Now <i data-lucide="phone" size="16"></i>
                             </a>
                         </div>
                     </section>
                </div> <!-- End ayur-right-content -->
            </div> <!-- End ayur-layout-grid -->
        </div> <!-- End container -->

        <!-- Mobile Drawer -->
        <div id="ayurMobileSidebarDrawer" class="ayur-mobile-drawer">
            <div class="ayur-mobile-drawer-overlay" id="ayurMobileDrawerOverlay"></div>
            <div class="ayur-mobile-drawer-content">
                <div class="ayur-mobile-drawer-header">
                    <h3>Our Services</h3>
                    <button id="ayurMobileDrawerClose" class="ayur-mobile-drawer-close-btn">
                        <i data-lucide="x" size="20"></i>
                    </button>
                </div>
                <div class="ayur-mobile-drawer-body">
                     <nav class="ayur-sidebar-nav">
                          <a href="ayurveda.html" class="ayur-sidebar-link active">
                              <i data-lucide="leaf" size="16" style="color: #4CAF50;"></i>
                              <span>Ayurveda</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="dumbbell" size="16" style="color: #FF9800;"></i>
                              <span>Physiotherapy</span>
                          </a>
                          <a href="robotic-rehab.html" class="ayur-sidebar-link">
                              <i data-lucide="bot" size="16" style="color: #00BCD4;"></i>
                              <span>Robotic Rehabilitation</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="puzzle" size="16" style="color: #9C27B0;"></i>
                              <span>Occupational Therapy</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="message-circle" size="16" style="color: #2196F3;"></i>
                              <span>Speech Therapy</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="headset" size="16" style="color: #E91E63;"></i>
                              <span>Virtual Reality</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="sun" size="16" style="color: #FFC107;"></i>
                              <span>Yoga and Meditation</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="map-pin" size="16" style="color: #F44336;"></i>
                              <span>Acupuncture</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="footprints" size="16" style="color: #795548;"></i>
                              <span>Reflexology</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="waves" size="16" style="color: #03A9F4;"></i>
                              <span>Hydro / Aquatic Therapy</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="baby" size="16" style="color: #E040FB;"></i>
                              <span>Pediatrics</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="ruler" size="16" style="color: #009688;"></i>
                              <span>Slimming Treatment</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="shield-plus" size="16" style="color: #4CAF50;"></i>
                              <span>Pain Management</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="utensils" size="16" style="color: #FF5722;"></i>
                              <span>Diet & Nutrition</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="heart-handshake" size="16" style="color: #E91E63;"></i>
                              <span>Counseling</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="smile" size="16" style="color: #00BCD4;"></i>
                              <span>Dentistry</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="pill" size="16" style="color: #9C27B0;"></i>
                              <span>Modern Medicine</span>
                          </a>
                          <a href="therapies.html" class="ayur-sidebar-link">
                              <i data-lucide="accessibility" size="16" style="color: #3F51B5;"></i>
                              <span>Assistive Devices</span>
                          </a>
                     </nav>
                </div>
            </div>
        </div>

        <!-- Sticky Bottom CTA for Mobile -->
        <div class="ayur-sticky-bottom-cta">
            <div class="ayur-sticky-bottom-cta-grid">
                <a href="tel:+918080808080" class="ayur-bottom-cta-btn">
                    <i data-lucide="phone" size="18"></i>
                    <span>Call Now</span>
                </a>
                <a href="https://wa.me/918080808080" target="_blank" class="ayur-bottom-cta-btn">
                    <i data-lucide="message-square" size="18"></i>
                    <span>WhatsApp</span>
                </a>
                <a href="index.html#consultation" class="ayur-bottom-cta-btn primary">
                    <i data-lucide="calendar" size="18"></i>
                    <span>Book Appt</span>
                </a>
            </div>
        </div>

        <!-- Mobile Sidebar trigger button -->
        <div class="ayur-mobile-sidebar-toggle-wrapper">
            <button id="ayurMobileSidebarToggle" class="ayur-mobile-sidebar-btn">
                <i data-lucide="menu" size="18"></i> Browse Services
            </button>
        </div>

        <script>
            document.addEventListener('DOMContentLoaded', () => {
                // FAQ Accordion Toggles
                const triggers = document.querySelectorAll('.ayur-faq-trigger');
                triggers.forEach(trigger => {
                    trigger.addEventListener('click', () => {
                        const item = trigger.closest('.ayur-faq-item');
                        const isActive = item.classList.contains('active');
                        
                        // Close all FAQs
                        document.querySelectorAll('.ayur-faq-item').forEach(i => {
                            i.classList.remove('active');
                        });
                        
                        // Toggle current
                        if (!isActive) {
                            item.classList.add('active');
                        }
                    });
                });

                // Mobile Drawer Toggles
                const toggleBtn = document.getElementById('ayurMobileSidebarToggle');
                const closeBtn = document.getElementById('ayurMobileSidebarClose');
                const drawer = document.getElementById('ayurMobileSidebarDrawer');
                const overlay = document.getElementById('ayurMobileDrawerOverlay');

                if (toggleBtn && drawer) {
                    toggleBtn.addEventListener('click', () => {
                        drawer.classList.add('open');
                        document.body.style.overflow = 'hidden';
                    });
                }

                const closeDrawer = () => {
                    if (drawer) {
                        drawer.classList.remove('open');
                        document.body.style.overflow = '';
                    }
                };

                if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
                if (overlay) overlay.addEventListener('click', closeDrawer);
            });
        </script>
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
                
        # Page-specific head and SEO updates
        if filename == 'ayurveda.html':
            # Replace title
            title_start = new_content.find('<title>')
            title_end = new_content.find('</title>')
            if title_start != -1 and title_end != -1:
                new_content = new_content[:title_start] + '<title>Kerala Ayurveda Rehabilitation & Panchakarma | Ayurgreen Hospital</title>' + new_content[title_end + len('</title>'):]
                
            # Replace description
            desc_start = new_content.find('<meta name="description"')
            if desc_start != -1:
                desc_end = new_content.find('>', desc_start) + 1
                new_content = new_content[:desc_start] + '<meta name="description" content="Experience authentic Kerala Ayurveda rehabilitation integrated with modern recovery techniques at Ayurgreen Hospital. Specialized Panchakarma and nerve regeneration therapies.">' + new_content[desc_end:]
                
            # Replace canonical
            canonical_start = new_content.find('<link rel="canonical"')
            if canonical_start != -1:
                canonical_end = new_content.find('>', canonical_start) + 1
                new_content = new_content[:canonical_start] + '<link rel="canonical" href="https://ayurgreenhospital.com/ayurveda.html">' + new_content[canonical_end:]

            # Replace open graph & twitter properties
            og_title_start = new_content.find('<meta property="og:title"')
            if og_title_start != -1:
                og_title_end = new_content.find('>', og_title_start) + 1
                new_content = new_content[:og_title_start] + '<meta property="og:title" content="Kerala Ayurveda Rehabilitation & Panchakarma | Ayurgreen Hospital">' + new_content[og_title_end:]

            og_desc_start = new_content.find('<meta property="og:description"')
            if og_desc_start != -1:
                og_desc_end = new_content.find('>', og_desc_start) + 1
                new_content = new_content[:og_desc_start] + '<meta property="og:description" content="Experience authentic Kerala Ayurveda rehabilitation integrated with modern recovery techniques at Ayurgreen Hospital. Specialized Panchakarma and nerve regeneration therapies.">' + new_content[og_desc_end:]

            og_url_start = new_content.find('<meta property="og:url"')
            if og_url_start != -1:
                og_url_end = new_content.find('>', og_url_start) + 1
                new_content = new_content[:og_url_start] + '<meta property="og:url" content="https://ayurgreenhospital.com/ayurveda.html">' + new_content[og_url_end:]

            twitter_title_start = new_content.find('<meta property="twitter:title"')
            if twitter_title_start != -1:
                twitter_title_end = new_content.find('>', twitter_title_start) + 1
                new_content = new_content[:twitter_title_start] + '<meta property="twitter:title" content="Kerala Ayurveda Rehabilitation & Panchakarma | Ayurgreen Hospital">' + new_content[twitter_title_end:]

            twitter_desc_start = new_content.find('<meta property="twitter:description"')
            if twitter_desc_start != -1:
                twitter_desc_end = new_content.find('>', twitter_desc_start) + 1
                new_content = new_content[:twitter_desc_start] + '<meta property="twitter:description" content="Experience authentic Kerala Ayurveda rehabilitation integrated with modern recovery techniques at Ayurgreen Hospital. Specialized Panchakarma and nerve regeneration therapies.">' + new_content[twitter_desc_end:]

            twitter_url_start = new_content.find('<meta property="twitter:url"')
            if twitter_url_start != -1:
                twitter_url_end = new_content.find('>', twitter_url_start) + 1
                new_content = new_content[:twitter_url_start] + '<meta property="twitter:url" content="https://ayurgreenhospital.com/ayurveda.html">' + new_content[twitter_url_end:]

            # Inject unified JSON-LD schema
            schema_start = new_content.find('<script type="application/ld+json">')
            if schema_start != -1:
                schema_end = new_content.find('</script>', schema_start) + len('</script>')
                new_content = new_content[:schema_start] + '<script type="application/ld+json">\n' + json_ld_ayurveda + '\n</script>' + new_content[schema_end:]

        with open(filepath, 'w', encoding="utf-8") as f:
            f.write(new_content)
        print(f"Populated main content and processed header for {filename}")


for filename, main_content in pages:
    replace_main(filename, main_content)
