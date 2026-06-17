import os
import json

# Define the service lists with their dropdown settings
therapies_list = [
    {"name": "Stroke", "filename": "stroke-rehab.html", "icon": "activity", "color": "#E91E63", "banner_img": "Assets/generated/stroke_rehab_focus_1776281836789.png", "intro_img": "Assets/rehab/prog_stroke.webp", "desc": "A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke."},
    {"name": "Spinal Cord Injury", "filename": "spinal-cord-injury.html", "icon": "bone", "color": "#9C27B0", "banner_img": "Assets/rehab/prog_spinal_cord.webp", "intro_img": "Assets/generated/spinal_cord_rehab.png", "desc": "Rebuilding trunk control, sensory awareness, and mobility post-spinal trauma through integrated physical and traditional therapies."},
    {"name": "Traumatic Brain Injury", "filename": "traumatic-brain-injury.html", "icon": "brain", "color": "#FF9800", "banner_img": "Assets/rehab/prog_tbi.webp", "intro_img": "Assets/generated/tbi_rehab.png", "desc": "Complex sensory, physical, and cognitive retraining protocols to help reorganize neural circuits post-head trauma."},
    {"name": "Hemiplegia", "filename": "hemiplegia.html", "icon": "person-standing", "color": "#00BCD4", "banner_img": "Assets/rehab/prog_hemiplegia.webp", "intro_img": "Assets/generated/stroke_rehab_focus_1776281836789.png", "desc": "Targeted active movement, sensory integration, and traditional heat therapies to improve unilateral motor deficit control."},
    {"name": "Quadriplegia & Paraplegia", "filename": "quadriplegia-paraplegia.html", "icon": "accessibility", "color": "#3F51B5", "banner_img": "Assets/rehab/prog_paraplegia.webp", "intro_img": "Assets/generated/spinal_cord_rehab.png", "desc": "Aggressive physical restoration, autonomic regulation, and sensory stimulations to regain maximum lifestyle independence."},
    {"name": "Post-Surgical Complications", "filename": "post-surgical-complications.html", "icon": "stethoscope", "color": "#009688", "banner_img": "Assets/rehab/prog_post_surgical.webp", "intro_img": "Assets/generated/post_surgical_rehab.png", "desc": "Correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery."},
    {"name": "Motor Neuron Diseases", "filename": "motor-neuron-diseases.html", "icon": "network", "color": "#607D8B", "banner_img": "Assets/rehab/prog_motor_neuron.webp", "intro_img": "Assets/generated/parkinsons_therapy.png", "desc": "Providing neurological nourishment, muscle spasm control, and custom exercises to maintain function and manage progression."},
    {"name": "Cerebral Palsy", "filename": "cerebral-palsy.html", "icon": "flower-2", "color": "#E040FB", "banner_img": "Assets/rehab/prog_cerebral_palsy.webp", "intro_img": "Assets/rehab/prog_cerebral_palsy.webp", "desc": "Specialized pediatric neurodevelopmental therapies to help reduce rigid muscle stiffness and assist milestone achievements."},
    {"name": "Parkinson's Disease", "filename": "parkinsons-disease.html", "icon": "zap", "color": "#FFEB3B", "banner_img": "Assets/rehab/prog_parkinsons.webp", "intro_img": "Assets/generated/parkinsons_therapy.png", "desc": "Delaying progression and maintaining active motor coordination through tailored Ayurvedic protocols and sensory exercises."},
    {"name": "Myopathy", "filename": "myopathy.html", "icon": "dna", "color": "#8BC34A", "banner_img": "Assets/rehab/prog_motor_neuron.webp", "intro_img": "Assets/generated/physiotherapy_session.png", "desc": "Nourishing muscle tissue, boosting strength, and prescribing safe mobility protocols to manage active muscle weakness."},
    {"name": "Disc & Spine Problems", "filename": "disc-spine-problems.html", "icon": "git-commit", "color": "#FF5722", "banner_img": "Assets/rehab/prog_sciatica.webp", "intro_img": "Assets/generated/post_surgical_rehab.png", "desc": "Non-surgical spinal decompression, specialized manual therapies, and herbal oil wraps to restore structural spine alignment."},
    {"name": "Sciatica", "filename": "sciatica.html", "icon": "zap-off", "color": "#795548", "banner_img": "Assets/rehab/prog_sciatica.webp", "intro_img": "Assets/generated/post_surgical_rehab.png", "desc": "Relieving sciatic nerve compression, reducing radiating pain, and rebuilding core strength to prevent future flare-ups."},
    {"name": "Obesity", "filename": "obesity.html", "icon": "scale", "color": "#F44336", "banner_img": "Assets/rehab/th_aquatic.webp", "intro_img": "Assets/generated/yoga_therapy.png", "desc": "Scientific metabolic control, customized Ayurvedic powder massages, low-impact exercise, and customized diet plans."},
    {"name": "Post-Covid Complications", "filename": "post-covid-complications.html", "icon": "shield-alert", "color": "#FFC107", "banner_img": "Assets/rehab/th_physiotherapy.webp", "intro_img": "Assets/generated/physiotherapy_session.png", "desc": "Restoring respiratory capacity, addressing muscular fatigue, and rebuilding full biological immune health."},
    {"name": "Muscular Dystrophy", "filename": "muscular-dystrophy.html", "icon": "heart-pulse", "color": "#E91E63", "banner_img": "Assets/rehab/prog_motor_neuron.webp", "intro_img": "Assets/generated/physiotherapy_session.png", "desc": "Providing muscular nutrition, maintaining joint range, and custom gentle exercises to slow functional muscle decline."},
    {"name": "Osteoarthritis", "filename": "osteoarthritis.html", "icon": "target", "color": "#9E9E9E", "banner_img": "Assets/rehab/prog_sciatica.webp", "intro_img": "Assets/generated/post_surgical_rehab.png", "desc": "Natural joint lubrication therapies, muscle strengthening, and cartilage support to relieve joint pain and stiffness."},
    {"name": "Rheumatoid Arthritis", "filename": "rheumatoid-arthritis.html", "icon": "flame", "color": "#FF5722", "banner_img": "Assets/rehab/prog_sciatica.webp", "intro_img": "Assets/generated/post_surgical_rehab.png", "desc": "Regulating immune response, calming active joint inflammation, and maintaining coordinate joint range of motion."},
    {"name": "Developmental Delay", "filename": "developmental-delay.html", "icon": "sprout", "color": "#8BC34A", "banner_img": "Assets/rehab/prog_cerebral_palsy.webp", "intro_img": "Assets/rehab/prog_cerebral_palsy.webp", "desc": "Pediatric milestone tracking and customized motor-cognitive stimulation to assist functional age achievements."},
    {"name": "Psychological Problems", "filename": "psychological-problems.html", "icon": "lightbulb", "color": "#FFEB3B", "banner_img": "Assets/rehab/th_vr.webp", "intro_img": "Assets/generated/yoga_therapy.png", "desc": "Integrated mental health care, biofeedback sessions, relaxation, and wellness counseling to improve emotional balance."},
    {"name": "Autism", "filename": "autism.html", "icon": "heart", "color": "#E91E63", "banner_img": "Assets/rehab/prog_cerebral_palsy.webp", "intro_img": "Assets/rehab/prog_cerebral_palsy.webp", "desc": "Pediatric sensory integration, motor coordination retraining, and gentle behavioral guidance protocols."},
    {"name": "Psychiatry", "filename": "psychiatry.html", "icon": "brain", "color": "#9C27B0", "banner_img": "Assets/rehab/th_vr.webp", "intro_img": "Assets/generated/yoga_therapy.png", "desc": "Comprehensive clinical support, medication management, stress reduction, and integrated psychiatric guidance."}
]

departments_list = [
    {"name": "Ayurveda", "filename": "ayurveda.html", "icon": "leaf", "color": "#4CAF50", "banner_img": "Assets/rehab/th_shirodhara.webp", "intro_img": "Assets/rehab/th_ayurveda.webp", "desc": "Integrating authentic Kerala Ayurvedic medicine with scientific neurological rehabilitation models to maximize active biological recovery."},
    {"name": "Physiotherapy", "filename": "physiotherapy.html", "icon": "dumbbell", "color": "#FF9800", "banner_img": "Assets/rehab/th_physiotherapy.webp", "intro_img": "Assets/generated/physiotherapy_session.png", "desc": "Evidence-based structural correction, targeted muscle loading, and functional balance restoration to regain active physical autonomy."},
    {"name": "Robotic Rehabilitation", "filename": "robotic-rehab.html", "icon": "bot", "color": "#00BCD4", "banner_img": "Assets/generated/robotic_rehab_exo_1776281782213.png", "intro_img": "Assets/rehab/th_robotic.webp", "desc": "High-repetition, sensor-guided exoskeleton therapy designed to accelerate motor learning and rebuild walking patterns."},
    {"name": "Occupational Therapy", "filename": "occupational-therapy.html", "icon": "puzzle", "color": "#9C27B0", "banner_img": "Assets/rehab/th_ot.webp", "intro_img": "Assets/generated/occupational_therapy.png", "desc": "Retraining coordination, task performance, and hand dexterity to achieve dynamic independence in activities of daily living."},
    {"name": "Speech Therapy", "filename": "speech-therapy.html", "icon": "message-circle", "color": "#2196F3", "banner_img": "Assets/rehab/th_speech.webp", "intro_img": "Assets/generated/speech_therapy.png", "desc": "Diagnosing and treating speech, language, voice, and swallowing disorders post-stroke or post-neurological trauma."},
    {"name": "Virtual Reality", "filename": "virtual-reality.html", "icon": "headset", "color": "#E91E63", "banner_img": "Assets/rehab/th_vr.webp", "intro_img": "Assets/generated/tbi_rehab.png", "desc": "Immersive cognitive and sensory retraining utilizing advanced virtual reality software to promote rapid neural plastic growth."},
    {"name": "Yoga and Meditation", "filename": "yoga-meditation.html", "icon": "sun", "color": "#FFC107", "banner_img": "Assets/generated/yoga_therapy.png", "intro_img": "Assets/generated/yoga_therapy.png", "desc": "Mind-body alignment, flexibility training, and conscious breathing to regulate stress hormones and support physical recovery."},
    {"name": "Acupuncture", "filename": "acupuncture.html", "icon": "map-pin", "color": "#F44336", "banner_img": "Assets/rehab/th_panchakarma.webp", "intro_img": "Assets/generated/ayurveda_treatment_1776269801869.png", "desc": "Fine-needle neural stimulation to reduce chronic pain states, restore local blood circulation, and activate sensory pathways."},
    {"name": "Reflexology", "filename": "reflexology.html", "icon": "footprints", "color": "#795548", "banner_img": "Assets/rehab/th_panchakarma.webp", "intro_img": "Assets/generated/ayurveda_treatment_1776269801869.png", "desc": "Targeted pressure point stimulation on feet and hands to restore energy flow, calm the nerves, and boost circulation."},
    {"name": "Hydro / Aquatic Therapy", "filename": "hydro-therapy.html", "icon": "waves", "color": "#03A9F4", "banner_img": "Assets/rehab/th_aquatic.webp", "intro_img": "Assets/generated/aquatic_therapy.png", "desc": "Heated pool therapy leveraging buoyancy to rebuild active walking patterns and coordination without heavy joint loads."},
    {"name": "Pediatrics", "filename": "pediatrics.html", "icon": "baby", "color": "#E040FB", "banner_img": "Assets/rehab/prog_cerebral_palsy.webp", "intro_img": "Assets/rehab/prog_cerebral_palsy.webp", "desc": "Comprehensive neurodevelopmental, occupational, and sensory care customized for children facing milestone challenges."},
    {"name": "Slimming Treatment", "filename": "slimming-treatment.html", "icon": "ruler", "color": "#009688", "banner_img": "Assets/rehab/th_aquatic.webp", "intro_img": "Assets/generated/yoga_therapy.png", "desc": "Ayurvedic metabolic stimulation, dry herbal powder massage, custom yoga routines, and organic diets for healthy fat loss."},
    {"name": "Pain Management", "filename": "pain-management.html", "icon": "shield-plus", "color": "#4CAF50", "banner_img": "Assets/rehab/prog_sciatica.webp", "intro_img": "Assets/generated/post_surgical_rehab.png", "desc": "Multi-disciplinary relief paths targeting acute or chronic back, joint, and nerve pain without dependence on heavy meds."},
    {"name": "Diet & Nutrition", "filename": "diet-nutrition.html", "icon": "utensils", "color": "#FF5722", "banner_img": "Assets/rehab/th_panchakarma.webp", "intro_img": "Assets/generated/ayurveda_treatment_1776269801869.png", "desc": "Custom GMP-prepared healing foods mapped directly to metabolic states and clinical digestive requirements."},
    {"name": "Counseling", "filename": "counseling.html", "icon": "heart-handshake", "color": "#E91E63", "banner_img": "Assets/rehab/th_vr.webp", "intro_img": "Assets/generated/yoga_therapy.png", "desc": "Clinical counseling and mental health support to help patients and families navigate the emotional recovery journey."},
    {"name": "Dentistry", "filename": "dentistry.html", "icon": "smile", "color": "#00BCD4", "banner_img": "Assets/rehab/th_panchakarma.webp", "intro_img": "Assets/generated/ayurveda_treatment_1776269801869.png", "desc": "Dedicated premium dental care, hygiene maintenance, and corrective dentistry procedures in a comfortable clinic setting."},
    {"name": "Modern Medicine", "filename": "modern-medicine.html", "icon": "pill", "color": "#9C27B0", "banner_img": "Assets/rehab/th_panchakarma.webp", "intro_img": "Assets/generated/ayurveda_treatment_1776269801869.png", "desc": "Coordinating clinical diagnostics, primary care, emergency cover, and medical treatments alongside rehabilitation protocols."},
    {"name": "Assistive Devices", "filename": "assistive-devices.html", "icon": "accessibility", "color": "#3F51B5", "banner_img": "Assets/rehab/th_ot.webp", "intro_img": "Assets/generated/occupational_therapy.png", "desc": "Assessing, custom fitting, and training on wheelchairs, splints, orthotics, and communication aids to elevate daily function."}
]

specializations_list = [
    {"name": "Neurology", "filename": "neurology.html", "icon": "brain-circuit", "color": "#607D8B", "banner_img": "Assets/rehab/prog_stroke.webp", "intro_img": "Assets/generated/stroke_rehab_focus_1776281836789.png", "desc": "Advanced neurological diagnostics, consultation, and coordinated recovery paths for stroke, neuropathy, and brain lesions."},
    {"name": "Neurosurgery", "filename": "neurosurgery.html", "icon": "microscope", "color": "#009688", "banner_img": "Assets/rehab/prog_tbi.webp", "intro_img": "Assets/generated/tbi_rehab.png", "desc": "Comprehensive clinical support, post-operative tracking, and integrated neuro rehab immediately following brain or spine surgeries."},
    {"name": "Orthopedic", "filename": "orthopedic.html", "icon": "hammer", "color": "#795548", "banner_img": "Assets/rehab/prog_sciatica.webp", "intro_img": "Assets/generated/post_surgical_rehab.png", "desc": "Correcting joint mechanical limits, muscle weakness, and joint range issues post-fracture or post-joint replacement surgery."},
    {"name": "ENT", "filename": "ent.html", "icon": "ear", "color": "#FF9800", "banner_img": "Assets/rehab/th_speech.webp", "intro_img": "Assets/generated/speech_therapy.png", "desc": "Managing speech acoustics, balance challenges, vestibular issues, and swallowing difficulties alongside rehab clinicians."},
    {"name": "General Medicine", "filename": "general-medicine.html", "icon": "syringe", "color": "#F44336", "banner_img": "Assets/rehab/th_physiotherapy.webp", "intro_img": "Assets/generated/physiotherapy_session.png", "desc": "Managing general metabolic health, blood pressure, diabetes, and clinical balance alongside active daily rehabilitation."},
    {"name": "Urology", "filename": "urology.html", "icon": "droplet", "color": "#03A9F4", "banner_img": "Assets/rehab/prog_spinal_cord.webp", "intro_img": "Assets/generated/spinal_cord_rehab.png", "desc": "Integrated bladder and bowel dysfunction management, pelvic muscle retraining, and clinical tracking for post-spinal patients."},
    {"name": "Cardiology", "filename": "cardiology.html", "icon": "heart", "color": "#E91E63", "banner_img": "Assets/rehab/th_physiotherapy.webp", "intro_img": "Assets/generated/physiotherapy_session.png", "desc": "Monitored cardiac recovery, aerobic conditioning, and safe active exercise loads for post-stroke or geriatric patients."},
    {"name": "Respiratory Therapy", "filename": "respiratory-therapy.html", "icon": "wind", "color": "#00BCD4", "banner_img": "Assets/rehab/th_physiotherapy.webp", "intro_img": "Assets/generated/physiotherapy_session.png", "desc": "Restoring lung volumes, diaphragmatic training, clearing airways, and supporting recovery post-respiratory distress."},
    {"name": "Neuro Psychology", "filename": "neuro-psychology.html", "icon": "brain", "color": "#9C27B0", "banner_img": "Assets/rehab/th_vr.webp", "intro_img": "Assets/generated/tbi_rehab.png", "desc": "Cognitive retraining, sensory stimulation, emotional support, and clinical guidance to rebuild cerebral pathways and coordinate focus."}
]

def generate_json_ld(filename, name, desc, category_name):
    schema = {
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
          "@id": f"https://ayurgreenhospital.com/{filename}#webpage",
          "url": f"https://ayurgreenhospital.com/{filename}",
          "name": f"{name} Rehabilitation & Care | Ayurgreen Hospital",
          "description": desc,
          "about": {
            "@type": "MedicalSpecialty",
            "name": f"Integrated {name} Rehabilitation"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": f"https://ayurgreenhospital.com/{filename}#breadcrumb",
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
              "name": category_name,
              "item": "https://ayurgreenhospital.com/therapies.html" if category_name != "Specializations" else "https://ayurgreenhospital.com/programs.html"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": name,
              "item": f"https://ayurgreenhospital.com/{filename}"
            }
          ]
        },
        {
          "@type": "Service",
          "@id": f"https://ayurgreenhospital.com/{filename}#service",
          "name": f"{name} Rehabilitation Service",
          "provider": {
            "@type": "Hospital",
            "name": "Ayurgreen Hospital"
          },
          "serviceType": "Rehabilitation Service",
          "description": desc
        }
      ]
    }
    return json.dumps(schema, indent=2)

def wrap_in_sidebar_layout(html_content, current_filename, category_name, siblings):
    sec_idx = html_content.find("<section")
    if sec_idx == -1:
        sec_idx = html_content.find("<div class=\"ayur-section") # Fallback
    
    if sec_idx == -1:
        return html_content
        
    banner_part = html_content[:sec_idx]
    body_part = html_content[sec_idx:]
    
    if body_part.endswith("</main>"):
        body_part = body_part[:-7]
    elif body_part.endswith("</main>\"\"\""):
        body_part = body_part[:-10]
        
    # Generate sidebar links
    sidebar_items_html = ""
    for sib in siblings:
        active_class = "active" if sib["filename"] == current_filename else ""
        sidebar_items_html += f"""
                <a href="{sib["filename"]}" class="sidebar-item {active_class}">
                    <span class="sidebar-icon">
                        <i data-lucide="{sib["icon"]}" size="16" style="color: {sib["color"]};"></i>
                    </span>
                    <span class="sidebar-label">{sib["name"]}</span>
                    <i data-lucide="chevron-right" size="14" class="sidebar-arrow"></i>
                </a>"""
                
    sidebar_html = f"""
        <!-- Mobile Sidebar Toggle -->
        <div class="ayur-container" style="margin-top: 24px; margin-bottom: 0;">
            <button class="mobile-sidebar-toggle" onclick="document.querySelector('.ayur-sidebar').classList.add('open'); document.querySelector('.sidebar-overlay').classList.add('open');">
                <i data-lucide="menu" size="18"></i>
                <span>Explore {category_name}</span>
            </button>
        </div>
        
        <div class="sidebar-overlay" onclick="document.querySelector('.ayur-sidebar').classList.remove('open'); this.classList.remove('open');"></div>
        
        <div class="ayur-container ayur-sidebar-container" style="padding: 40px 24px 80px 24px; box-sizing: border-box; width: 100%;">
            <div class="ayur-sidebar-layout">
                <!-- Sidebar Column -->
                <aside class="ayur-sidebar">
                    <h3 class="sidebar-title">{category_name}</h3>
                    <span class="sidebar-sub">Services</span>
                    <div class="sidebar-list">
                        {sidebar_items_html}
                    </div>
                </aside>
                
                <!-- Content Column -->
                <div class="ayur-sidebar-content" style="min-width: 0; flex: 1;">
                    {body_part}
                </div>
            </div>
        </div>
    </main>
    """
    return banner_part + sidebar_html

def generate_service_html(svc, category_name, siblings):
    name = svc["name"]
    filename = svc["filename"]
    
    if category_name == "Therapies":
        breadcrumb_label = "Therapies"
        hero_label = "Rehabilitation Program"
    elif category_name == "Departments":
        breadcrumb_label = "Departments"
        hero_label = "Clinical Modalities"
    else:
        breadcrumb_label = "Specializations"
        hero_label = "Clinical Specialization"
        
    banner_img = svc.get("banner_img", "Assets/Hospital View.webp")
    intro_img = svc.get("intro_img", "Assets/Hospital View.webp")
    desc = svc.get("desc", f"Comprehensive clinical care and integrated rehabilitation pathways customized specifically for {name} recovery.")
    
    p1 = f"At Ayurgreen Hospital, we provide an integrated rehabilitation approach for {name} designed to maximize functional recovery and systemic rejuvenation. By combining state-of-the-art robotic assistive technologies, evidence-based physiotherapy, and authentic traditional Kerala Ayurveda, our multidisciplinary team addresses both structural and biochemical pathways to promote deep neural healing."
    p2 = f"Each patient receives a customized treatment protocol mapped directly to their baseline assessment and functional goals. Our clinicians, therapists, and Ayurvedic scholars collaborate daily to adjust therapies, ensuring safe progression, spasticity reduction, and optimal functional autonomy."
    
    # Map sub-images based on general fallback or specific categories
    cond_img1 = "Assets/rehab/prog_stroke.webp"
    cond_img2 = "Assets/rehab/prog_spinal_cord.webp"
    cond_img3 = "Assets/rehab/prog_parkinsons.webp"
    
    treat_img1 = "Assets/rehab/th_panchakarma.webp"
    treat_img2 = "Assets/rehab/th_physiotherapy.webp"
    treat_img3 = "Assets/rehab/th_robotic.webp"
    
    conditions_data = [
        {"title": "Acute Phase Support", "desc": "Early intervention focused on stabilizing deficits, reducing cellular swelling, and preventing muscle wasting.", "img": cond_img1},
        {"title": "Chronic Management", "desc": "Intensive therapy modules targeting long-term recovery of motor coordination, balance, and independence.", "img": cond_img2},
        {"title": "Functional Adaptations", "desc": "Customized training using assistive technologies to adapt tasks and restore everyday activities.", "img": cond_img3}
    ]
    
    treatments_data = [
        {"title": "Biological Purification (Panchakarma)", "desc": "Tailored Ayurvedic purification treatments to remove cellular metabolic toxins, calm nerve inflammation, and restore biochemical equilibrium.", "img": treat_img1},
        {"title": "Neuromuscular Re-education", "desc": "Evidence-based active exercises and sensory feedback training to rebuild damaged motor pathways and improve joint ranges.", "img": treat_img2},
        {"title": "Robotic & Technology Training", "desc": "High-repetition sensor-guided movement training to trigger neuroplasticity and build new coordinate loops around brain lesions.", "img": treat_img3}
    ]
    
    techs_data = [
        {"icon": "bot", "title": "Sensor-Guided Robotics", "desc": "Exoskeletons and gait trainers providing highly repeatable, precise movements to stimulate spinal and cortical pathways."},
        {"icon": "activity", "title": "Advanced Physiotherapy", "desc": "Targeted muscle loading, balance retraining, and proprioception drills using premium dynamic assessment platforms."},
        {"icon": "heart", "title": "Kerala Ayurvedic Medicine", "desc": "Time-tested organic formulations and specialized warm oil sudations acting directly on motor system biology."}
    ]
    
    conditions_html = ""
    for cond in conditions_data:
        conditions_html += f"""
                    <div class="ayur-condition-card">
                        <div class="ayur-condition-card-img-wrapper">
                            <img src="{cond["img"]}" alt="{cond["title"]}" class="ayur-condition-card-img">
                        </div>
                        <div class="ayur-condition-card-content">
                            <h4 class="ayur-condition-card-title">{cond["title"]}</h4>
                            <p class="ayur-condition-card-desc">{cond["desc"]}</p>
                        </div>
                    </div>"""
                    
    treatments_html = ""
    for idx, treat in enumerate(treatments_data):
        num = idx + 1
        treatments_html += f"""
                    <div class="ayur-timeline-item">
                        <div class="ayur-timeline-col-img">
                            <img src="{treat["img"]}" alt="{treat["title"]}">
                        </div>
                        <div class="ayur-timeline-col-content">
                            <div class="ayur-timeline-badge">{num}</div>
                            <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 12px;">{treat["title"]}</h3>
                            <p style="font-size: 14.5px; line-height: 1.6;">{treat["desc"]}</p>
                        </div>
                    </div>"""
                    
    techs_html = ""
    for tech in techs_data:
        techs_html += f"""
                    <div class="ayur-tech-card">
                        <div class="ayur-tech-card-title-row">
                            <span class="ayur-tech-card-icon"><i data-lucide="{tech["icon"]}" size="24"></i></span>
                            <h3 class="ayur-tech-card-title">{tech["title"]}</h3>
                        </div>
                        <p class="ayur-tech-card-desc">{tech["desc"]}</p>
                    </div>"""
                    
    faqs_data = [
        ("What is the recovery protocol for this program?", f"Our recovery protocol for {name} combines daily intensive rehabilitation therapies (robotic support and physical therapy) with personalized Ayurvedic nerve nourishment and systemic detoxification to accelerate functional gains."),
        ("How long is the typical inpatient stay?", f"Most inpatient stays range from 14 to 28 days. A comprehensive assessment is conducted on arrival to map specific milestones, timelines, and discharge pathways."),
        ("Is robotic therapy safe for all patients?", "Yes, robotic training is safe and is adjusted based on muscle strength, joint ranges, and fatigue levels. Every session is directly supervised by certified clinical engineers and therapists."),
        ("Are the Ayurvedic medicines safe?", "All herbal oils and medicines are sourced from GMP-certified traditional pharmacies and undergo rigorous testing. They are prescribed specifically to match the patient's biological state."),
        ("Can we coordinate with our existing neurologist?", "Absolutely. We encourage multidisciplinary alignment and coordinate closely with the patient's referring clinicians to ensure continuity of care."),
        ("What is the daily therapy schedule?", "A typical day includes active physical and robotic rehabilitation in the morning, followed by relaxing Ayurvedic therapies and counseling sessions in the afternoon."),
        ("Do you offer post-discharge support?", "Yes, we provide detailed home-exercise regimens, custom orthotic consultations, and online follow-ups to ensure patients maintain their functional gains."),
        ("How do I book a consultation?", "You can book a virtual consultation by submitting your medical records online, messaging our coordinators via WhatsApp, or calling our helpline directly.")
    ]
    
    faqs_html = ""
    for q, a in faqs_data:
        faqs_html += f"""
                    <div class="ayur-faq-item">
                        <button class="ayur-faq-trigger">
                            <span>{q}</span>
                            <span class="faq-icon"><i data-lucide="plus" size="18"></i></span>
                        </button>
                        <div class="ayur-faq-content">
                            <div class="ayur-faq-content-inner">
                                <p>{a}</p>
                            </div>
                        </div>
                    </div>"""

    main_html = f"""    <main class="ayur-page-main">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

            .ayur-page-main {{
                --primary-green: #2BC46D;
                --dark-navy: #020C22;
                --pure-white: #FFFFFF;
                --body-text: #667085;
                --heading: #101828;
                --border: #EAECF0;
                
                font-family: 'Inter', sans-serif;
                color: var(--body-text);
                background-color: var(--pure-white);
                line-height: 1.7;
            }}

            .ayur-container {{
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                box-sizing: border-box;
                width: 100%;
            }}

            .ayur-page-main h1, 
            .ayur-page-main h2, 
            .ayur-page-main h3, 
            .ayur-page-main h4 {{
                font-family: 'Plus Jakarta Sans', sans-serif;
                color: var(--heading);
                letter-spacing: -0.02em;
            }}

            .ayur-section-header {{
                text-align: center;
                max-width: 720px;
                margin: 0 auto 56px auto;
            }}
            .ayur-section-label {{
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                font-weight: 600;
                color: var(--primary-green);
                display: block;
                margin-bottom: 12px;
            }}
            .ayur-section-title {{
                font-size: 32px;
                font-weight: 700;
                color: var(--dark-navy);
                line-height: 1.2;
            }}
            .ayur-section-support {{
                font-size: 16px;
                color: var(--body-text);
                margin-top: 12px;
                line-height: 1.6;
            }}

            .ayur-section-large {{
                padding: 80px 0;
            }}
            .ayur-section-medium {{
                padding: 60px 0;
            }}

            .ayur-intro-row {{
                display: grid;
                grid-template-columns: 1.2fr 1.1fr;
                gap: 64px;
                align-items: center;
            }}
            @media (max-width: 768px) {{
                .ayur-intro-row {{
                    grid-template-columns: 1fr;
                    gap: 32px;
                }}
            }}

            .ayur-intro-img-frame {{
                padding: 16px;
                background-color: #F8FAFC;
                border: 1px solid var(--border);
                border-radius: 36px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 380px;
            }}

            .ayur-intro-img {{
                border-radius: 20px;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 400ms ease;
                display: block;
            }}

            .ayur-intro-img-frame:hover .ayur-intro-img {{
                transform: scale(1.03);
            }}

            .ayur-conditions-grid {{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
            }}
            @media (max-width: 1024px) {{
                .ayur-conditions-grid {{
                    grid-template-columns: repeat(2, 1fr);
                }}
            }}
            @media (max-width: 768px) {{
                .ayur-conditions-grid {{
                    grid-template-columns: 1fr;
                }}
            }}
            .ayur-condition-card {{
                background: #ffffff;
                border: 1px solid var(--border);
                border-radius: 28px;
                overflow: hidden;
                height: 420px;
                display: flex;
                flex-direction: column;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
                transition: all 400ms ease;
            }}
            .ayur-condition-card-img-wrapper {{
                width: 100%;
                height: 200px;
                overflow: hidden;
                position: relative;
            }}
            .ayur-condition-card-img {{
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 400ms ease;
            }}
            .ayur-condition-card:hover {{
                transform: translateY(-4px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
                border-color: rgba(43, 196, 109, 0.2);
            }}
            .ayur-condition-card:hover .ayur-condition-card-img {{
                transform: scale(1.03);
            }}
            .ayur-condition-card-content {{
                padding: 24px;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
            }}
            .ayur-condition-card-title {{
                font-size: 18px;
                font-weight: 700;
                color: var(--dark-navy);
                margin-bottom: 10px;
            }}
            .ayur-condition-card-desc {{
                font-size: 14px;
                color: var(--body-text);
                line-height: 1.5;
            }}

            .ayur-timeline-item {{
                display: flex;
                align-items: center;
                gap: 48px;
                margin-bottom: 56px;
                position: relative;
                z-index: 2;
            }}
            .ayur-timeline-item:last-child {{
                margin-bottom: 0;
            }}
            .ayur-timeline-item:nth-child(even) {{
                flex-direction: row-reverse;
            }}
            @media (max-width: 768px) {{
                .ayur-timeline-item, .ayur-timeline-item:nth-child(even) {{
                    flex-direction: column;
                    gap: 20px;
                    margin-bottom: 40px;
                }}
            }}
            .ayur-timeline-col-img {{
                flex: 1;
                overflow: hidden;
                border-radius: 28px;
                width: 100%;
            }}
            .ayur-timeline-col-img img {{
                width: 100%;
                height: 320px;
                object-fit: cover;
                transition: transform 400ms ease;
                display: block;
            }}
            .ayur-timeline-col-img:hover img {{
                transform: scale(1.03);
            }}
            .ayur-timeline-col-content {{
                flex: 1;
                width: 100%;
            }}
            .ayur-timeline-badge {{
                background: rgba(43, 196, 109, 0.1);
                color: var(--primary-green);
                font-weight: 700;
                font-size: 14px;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 16px;
                border: 2px solid var(--primary-green);
            }}

            .ayur-tech-outer {{
                background-color: var(--dark-navy);
                padding: 80px 24px;
                border-radius: 36px;
                color: #ffffff;
                margin-bottom: 56px;
            }}
            .ayur-tech-grid {{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
            }}
            @media (max-width: 1024px) {{
                .ayur-tech-grid {{
                    grid-template-columns: repeat(2, 1fr);
                }}
            }}
            @media (max-width: 768px) {{
                .ayur-tech-grid {{
                    grid-template-columns: 1fr;
                }}
            }}
            .ayur-tech-card {{
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 32px;
                padding: 24px;
                backdrop-filter: blur(24px);
                -webkit-backdrop-filter: blur(24px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                transition: all 400ms ease;
                display: flex;
                flex-direction: column;
            }}
            .ayur-tech-card:hover {{
                transform: translateY(-4px);
                background: rgba(255, 255, 255, 0.05);
                border-color: rgba(43, 196, 109, 0.3);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            }}
            .ayur-tech-card-title-row {{
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 12px;
            }}
            .ayur-tech-card-icon {{
                color: var(--primary-green);
                display: flex;
                align-items: center;
            }}
            .ayur-tech-card-title {{
                font-size: 18px;
                font-weight: 700;
                color: #ffffff;
                margin: 0;
            }}
            .ayur-tech-card-desc {{
                font-size: 14px;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.5;
            }}

            .ayur-journey-timeline {{
                display: flex;
                justify-content: space-between;
                position: relative;
                margin-top: 40px;
                gap: 24px;
            }}
            .ayur-journey-timeline::before {{
                content: '';
                position: absolute;
                top: 36px;
                left: 40px;
                right: 40px;
                height: 2px;
                background: #EAECF0;
                z-index: 1;
            }}
            @media (max-width: 1024px) {{
                .ayur-journey-timeline {{
                    flex-wrap: wrap;
                }}
                .ayur-journey-timeline::before {{
                    display: none;
                }}
            }}
            @media (max-width: 768px) {{
                .ayur-journey-timeline {{
                    flex-direction: column;
                    gap: 32px;
                }}
            }}
            .ayur-journey-step {{
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                position: relative;
                z-index: 2;
                min-width: 140px;
            }}
            .ayur-journey-icon-circle {{
                width: 72px;
                height: 72px;
                border-radius: 50%;
                background: #ffffff;
                border: 2px solid #EAECF0;
                color: var(--dark-navy);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 16px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
            }}
            .ayur-journey-step:hover .ayur-journey-icon-circle {{
                border-color: var(--primary-green);
                color: var(--primary-green);
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(43, 196, 109, 0.15);
            }}
            .ayur-journey-step-title {{
                font-size: 15px;
                font-weight: 700;
                color: var(--dark-navy);
                margin-bottom: 6px;
            }}
            .ayur-journey-step-desc {{
                font-size: 12px;
                color: var(--body-text);
                line-height: 1.4;
            }}

            .ayur-faq-container {{
                display: flex;
                flex-direction: column;
                gap: 16px;
            }}
            .ayur-faq-item {{
                background: #F8FAFC;
                border: 1px solid var(--border);
                border-radius: 20px;
                overflow: hidden;
                transition: all 0.3s ease;
            }}
            .ayur-faq-item:hover {{
                border-color: rgba(43, 196, 109, 0.3);
            }}
            .ayur-faq-trigger {{
                width: 100%;
                padding: 24px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: none;
                border: none;
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: var(--dark-navy);
                cursor: pointer;
            }}
            .ayur-faq-content {{
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
            }}
            .ayur-faq-item.active .ayur-faq-content {{
                max-height: 1000px;
                transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
            }}
            .ayur-faq-content-inner {{
                padding: 0 24px 24px 24px;
                font-size: 14.5px;
                color: var(--body-text);
                line-height: 1.6;
            }}
            .ayur-faq-item .faq-icon {{
                transition: transform 0.3s ease;
                color: var(--primary-green);
                display: flex;
                align-items: center;
            }}
            .ayur-faq-item.active .faq-icon {{
                transform: rotate(45deg);
            }}

            .ayur-cta-outer {{
                background: #FFFFFF;
                padding: 60px 0;
            }}
            .ayur-cta-section {{
                background: rgba(2, 12, 34, 0.95);
                backdrop-filter: blur(24px);
                -webkit-backdrop-filter: blur(24px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 36px;
                padding: 64px 24px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
            }}
            .ayur-cta-title {{
                font-size: 32px;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 16px;
            }}
            .ayur-cta-desc {{
                color: rgba(255, 255, 255, 0.85);
                font-size: 16px;
                max-width: 600px;
                margin: 0 auto 36px auto;
                line-height: 1.6;
            }}
            .ayur-cta-btn-group {{
                display: flex;
                gap: 16px;
                justify-content: center;
                flex-wrap: wrap;
            }}

            /* Sidebar column overrides */
            .ayur-sidebar-content .ayur-container {{
                max-width: 100% !important;
                padding: 0 !important;
            }}
            .ayur-sidebar-content .ayur-section-large {{
                padding: 40px 0 !important;
            }}
            .ayur-sidebar-content .ayur-section-medium {{
                padding: 30px 0 !important;
            }}
        </style>

        <!-- Section 1: Hero Section -->
        <div class="ayur-hero-wrapper">
            <div class="ayur-hero-banner" style="background-image: url('{banner_img}');">
                <div class="ayur-hero-overlay"></div>
                <div class="ayur-container">
                    <div class="ayur-hero-content">
                        <div class="ayur-hero-breadcrumb">
                            <a href="index.html">Home</a> &nbsp;&gt;&nbsp;
                            <a href="therapies.html">{breadcrumb_label}</a> &nbsp;&gt;&nbsp;
                            <span style="color: #ffffff;">{name}</span>
                        </div>
                        <span class="ayur-hero-label">{hero_label}</span>
                        <h1 class="main-title" style="color: #ffffff !important;">{name}</h1>
                        <p class="main-sub">{desc}</p>
                        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px;">
                            <a href="index.html#consultation" class="main-cta">
                                <span class="cta-text">Book Assessment</span> <span class="arrow-btn"><i data-lucide="arrow-up-right" size="14"></i></span>
                            </a>
                            <a href="https://wa.me/918080808080" target="_blank" class="main-cta">
                                <span class="cta-text">WhatsApp</span>
                                <span class="arrow-btn" style="background: transparent; color: #000000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: Intro -->
        <section id="intro" class="ayur-section-large">
            <div class="ayur-container">
                <div class="ayur-intro-row">
                    <div>
                        <span class="ayur-section-label">OVERVIEW</span>
                        <h2 class="ayur-section-title" style="margin-bottom: 24px; font-size: 28px;">{svc.get("about_title", f"Comprehensive Rehabilitation for {name}")}</h2>
                        <p style="margin-bottom: 16px;">{p1}</p>
                        <p>{p2}</p>
                    </div>
                    <div class="ayur-intro-img-frame">
                        <img src="{intro_img}" alt="{name} Treatment" class="ayur-intro-img">
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Conditions Treated -->
        <section id="conditions" class="ayur-section-medium" style="background-color: #FBFDFB; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
            <div class="ayur-container">
                <div class="ayur-section-header">
                    <span class="ayur-section-label">CLINICAL FOCUS</span>
                    <h2 class="ayur-section-title">Key Areas of Intervention</h2>
                    <p class="ayur-section-support">Our therapy modules address specific functional deficits and biological healing targets for optimal progress.</p>
                </div>
                <div class="ayur-conditions-grid">
                    {conditions_html}
                </div>
            </div>
        </section>

        <!-- Section 4: Treatments Offered -->
        <section id="treatments" class="ayur-section-large">
            <div class="ayur-container">
                <div class="ayur-section-header">
                    <span class="ayur-section-label">THERAPY MODULES</span>
                    <h2 class="ayur-section-title">Core Treatment Modalities</h2>
                    <p class="ayur-section-support">Specialized therapies coordinated daily by our integrated clinical panel.</p>
                </div>
                <div class="ayur-treatments-timeline" style="position: relative;">
                    {treatments_html}
                </div>
            </div>
        </section>

        <!-- Section 5: Technologies Used -->
        <section id="technologies" class="ayur-tech-outer">
            <div class="ayur-container">
                <div class="ayur-section-header">
                    <span class="ayur-section-label" style="color: var(--primary-green);">INTEGRATED INNOVATION</span>
                    <h2 class="ayur-section-title" style="color: #ffffff;">Clinical Suites & Technology</h2>
                    <p class="ayur-section-support" style="color: rgba(255, 255, 255, 0.75);">Harnessing advanced feedback systems and traditional biological therapies to support recovery.</p>
                </div>
                <div class="ayur-tech-grid">
                    {techs_html}
                </div>
            </div>
        </section>

        <!-- Section 6: Recovery Journey Timeline -->
        <section id="journey" class="ayur-section-large">
            <div class="ayur-container">
                <div class="ayur-section-header">
                    <span class="ayur-section-label">RECOVERY TIMELINE</span>
                    <h2 class="ayur-section-title">Your Recovery Journey</h2>
                    <p class="ayur-section-support">Our recovery path is a carefully structured, multi-phase clinical progression that guides patients smoothly from intake to dynamic independence.</p>
                </div>
                <div class="ayur-journey-timeline">
                    <div class="ayur-journey-step">
                        <div class="ayur-journey-icon-circle">
                            <i data-lucide="clipboard-list" size="24"></i>
                        </div>
                        <h4 class="ayur-journey-step-title">1. Assessment</h4>
                        <p class="ayur-journey-step-desc">Comprehensive medical assessment by our multi-disciplinary panel.</p>
                    </div>
                    <div class="ayur-journey-step">
                        <div class="ayur-journey-icon-circle">
                            <i data-lucide="activity" size="24"></i>
                        </div>
                        <h4 class="ayur-journey-step-title">2. Diagnosis</h4>
                        <p class="ayur-journey-step-desc">Pinpointing motor, sensory, and biological imbalance vectors.</p>
                    </div>
                    <div class="ayur-journey-step">
                        <div class="ayur-journey-icon-circle">
                            <i data-lucide="file-text" size="24"></i>
                        </div>
                        <h4 class="ayur-journey-step-title">3. Personalized Plan</h4>
                        <p class="ayur-journey-step-desc">Scheduling custom robotic runs and targeted Ayurvedic protocols.</p>
                    </div>
                    <div class="ayur-journey-step">
                        <div class="ayur-journey-icon-circle">
                            <i data-lucide="heart-handshake" size="24"></i>
                        </div>
                        <h4 class="ayur-journey-step-title">4. Therapy</h4>
                        <p class="ayur-journey-step-desc">Intensive, daily physical training and cellular purification treatments.</p>
                    </div>
                    <div class="ayur-journey-step">
                        <div class="ayur-journey-icon-circle">
                            <i data-lucide="trending-up" size="24"></i>
                        </div>
                        <h4 class="ayur-journey-step-title">5. Monitoring</h4>
                        <p class="ayur-journey-step-desc">Strict weekly tracking of physical and sensory progress data.</p>
                    </div>
                    <div class="ayur-journey-step">
                        <div class="ayur-journey-icon-circle">
                            <i data-lucide="award" size="24"></i>
                        </div>
                        <h4 class="ayur-journey-step-title">6. Recovery</h4>
                        <p class="ayur-journey-step-desc">Achieving optimal independence and preparing a home transition plan.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 7: FAQ Accordion -->
        <section id="faq" class="ayur-section-large" style="border-top: 1px solid var(--border);">
            <div class="ayur-container">
                <div class="ayur-section-header">
                    <span class="ayur-section-label">COMMON QUERIES</span>
                    <h2 class="ayur-section-title">Frequently Asked Questions</h2>
                    <p class="ayur-section-support">Find answers to key details about the {name} program.</p>
                </div>
                <div class="ayur-faq-container">
                    {faqs_html}
                </div>
            </div>
        </section>

        <!-- Section 8: FAQ Accordion -->
        <section id="cta" class="ayur-cta-outer">
            <div class="ayur-container">
                <div class="ayur-cta-section">
                    <h2 class="ayur-cta-title">Start Your Recovery Journey Today</h2>
                    <p class="ayur-cta-desc">Consult with our integrated clinical panel and Ayurvedic scholars to design a custom pathway.</p>
                    <div class="ayur-cta-btn-group">
                        <a href="index.html#consultation" class="ayur-btn-primary">
                            Book Consultation <i data-lucide="calendar" size="18"></i>
                        </a>
                        <a href="https://wa.me/918080808080" target="_blank" class="ayur-btn-glass">
                            WhatsApp <i data-lucide="message-square" size="18"></i>
                        </a>
                        <a href="tel:+918080808080" class="ayur-btn-glass" style="background: transparent;">
                            Call Now <i data-lucide="phone" size="18"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    """
    return main_html

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
        <!-- Section 1: Hero Section -->
        <div class="ayur-hero-wrapper">
            <div class="ayur-hero-banner" style="background-image: url('Assets/Hospital View.webp');">
                <div class="ayur-hero-overlay"></div>
                <div class="ayur-container">
                    <div class="ayur-hero-content">
                        <div class="ayur-hero-breadcrumb">
                            <a href="index.html">Home</a> &nbsp;&gt;&nbsp;
                            <span style="color: #ffffff;">Specializations</span>
                        </div>
                        <span class="ayur-hero-label">Clinical Programs</span>
                        <h1 class="main-title" style="color: #ffffff !important;">Comprehensive Rehabilitation Programs</h1>
                        <p class="main-sub">Specialized, intensive inpatient and outpatient programs mapped directly to specific neurological and orthopedic conditions.</p>
                        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px;">
                            <a href="index.html#consultation" class="main-cta">
                                <span class="cta-text">Book Consultation</span> <span class="arrow-btn"><i data-lucide="arrow-up-right" size="14"></i></span>
                            </a>
                            <a href="https://wa.me/918080808080" target="_blank" class="main-cta">
                                <span class="cta-text">WhatsApp</span>
                                <span class="arrow-btn" style="background: transparent; color: #000000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container" style="margin-top: 64px; position: relative; z-index: 10;">
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
        <!-- Section 1: Hero Section -->
        <div class="ayur-hero-wrapper">
            <div class="ayur-hero-banner" style="background-image: url('Assets/rehab/th_physiotherapy.webp');">
                <div class="ayur-hero-overlay"></div>
                <div class="ayur-container">
                    <div class="ayur-hero-content">
                        <div class="ayur-hero-breadcrumb">
                            <a href="index.html">Home</a> &nbsp;&gt;&nbsp;
                            <span style="color: #ffffff;">Departments</span>
                        </div>
                        <span class="ayur-hero-label">Clinical Modalities</span>
                        <h1 class="main-title" style="color: #ffffff !important;">Advanced Healing Therapies</h1>
                        <p class="main-sub">Explore our 15+ specialized therapeutic interventions, integrating the best of technology, ancient science, and modern medicine.</p>
                        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px;">
                            <a href="index.html#consultation" class="main-cta">
                                <span class="cta-text">Book Consultation</span> <span class="arrow-btn"><i data-lucide="arrow-up-right" size="14"></i></span>
                            </a>
                            <a href="https://wa.me/918080808080" target="_blank" class="main-cta">
                                <span class="cta-text">WhatsApp</span>
                                <span class="arrow-btn" style="background: transparent; color: #000000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container" style="margin-top: 64px; position: relative; z-index: 10;">
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
        <!-- Section 1: Hero Section -->
        <div class="ayur-hero-wrapper">
            <div class="ayur-hero-banner" style="background-image: url('Assets/generated/stroke_rehab_focus_1776281836789.png');">
                <div class="ayur-hero-overlay"></div>
                <div class="ayur-container">
                    <div class="ayur-hero-content">
                        <div class="ayur-hero-breadcrumb">
                            <a href="index.html">Home</a> &nbsp;&gt;&nbsp;
                            <a href="therapies.html">Therapies</a> &nbsp;&gt;&nbsp;
                            <span style="color: #ffffff;">Stroke</span>
                        </div>
                        <span class="ayur-hero-label">Rehabilitation Program</span>
                        <h1 class="main-title" style="color: #ffffff !important;">Stroke Rehabilitation</h1>
                        <p class="main-sub">A highly aggressive, time-sensitive integrated treatment pathway utilizing brain plasticity to recover lost motor, speech, and cognitive functions post-stroke.</p>
                        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px;">
                            <a href="index.html#consultation" class="main-cta">
                                <span class="cta-text">Book Assessment</span> <span class="arrow-btn"><i data-lucide="arrow-up-right" size="14"></i></span>
                            </a>
                            <a href="https://wa.me/918080808080" target="_blank" class="main-cta">
                                <span class="cta-text">WhatsApp</span>
                                <span class="arrow-btn" style="background: transparent; color: #000000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container" style="margin-top: 64px; position: relative; z-index: 10;">
            
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
        <!-- Section 1: Hero Section -->
        <div class="ayur-hero-wrapper">
            <div class="ayur-hero-banner" style="background-image: url('Assets/generated/robotic_rehab_exo_1776281782213.png');">
                <div class="ayur-hero-overlay"></div>
                <div class="ayur-container">
                    <div class="ayur-hero-content">
                        <div class="ayur-hero-breadcrumb">
                            <a href="index.html">Home</a> &nbsp;&gt;&nbsp;
                            <a href="therapies.html">Departments</a> &nbsp;&gt;&nbsp;
                            <span style="color: #ffffff;">Robotic Rehab</span>
                        </div>
                        <span class="ayur-hero-label">Clinical Modality</span>
                        <h1 class="main-title" style="color: #ffffff !important;">Robotic Exoskeleton Therapy</h1>
                        <p class="main-sub">India's most advanced robotic gait trainers and arm rehabilitation systems providing exact, sensor-guided, high-repetition movement.</p>
                        <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px;">
                            <a href="index.html#consultation" class="main-cta">
                                <span class="cta-text">Book Assessment</span> <span class="arrow-btn"><i data-lucide="arrow-up-right" size="14"></i></span>
                            </a>
                            <a href="https://wa.me/918080808080" target="_blank" class="main-cta">
                                <span class="cta-text">WhatsApp</span>
                                <span class="arrow-btn" style="background: transparent; color: #000000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container" style="margin-top: 64px; position: relative; z-index: 10;">
            
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
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

            .ayur-page-main {
                --primary-green: #2BC46D;
                --dark-navy: #020C22;
                font-family: 'Inter', sans-serif;
                background-color: #ffffff;
                line-height: 1.7;
            }

            /* Fix banner content left alignment */
            .ayur-hero-content {
                padding-left: 48px !important;
            }
            @media (max-width: 768px) {
                .ayur-hero-content { padding-left: 24px !important; }
            }

            /* PAGE BODY — full width, same 16px outer gutter as banner wrapper */
            .ayur-page-body {
                width: 100%;
                padding: 0 16px 80px 16px;
                display: grid;
                grid-template-columns: 280px 1fr;
                gap: 24px;
                align-items: start;
                box-sizing: border-box;
                background: #ffffff;
            }
            @media (max-width: 1024px) {
                .ayur-page-body { grid-template-columns: 240px 1fr; }
            }
            @media (max-width: 768px) {
                .ayur-page-body { grid-template-columns: 1fr; padding: 0 12px 80px; }
            }

            /* SIDEBAR — renamed to ayur-qdept-sidebar to avoid index.html conflict */
            .ayur-qdept-sidebar {
                position: sticky;
                top: 96px;
                background: rgba(0, 0, 0, 0.6) !important;
                backdrop-filter: blur(16px) !important;
                -webkit-backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
                border-radius: 32px !important;
                padding: 20px !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 4px !important;
                max-height: 80vh;
                overflow-y: auto;
                margin-top: 24px;
                box-shadow: none !important;
            }
            .ayur-qdept-sidebar::-webkit-scrollbar { width: 3px; }
            .ayur-qdept-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
            .ayur-qdept-title {
                font-family: 'Inter', sans-serif;
                font-size: 10.5px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.18em;
                color: rgba(255,255,255,0.4);
                padding: 2px 14px 10px;
                margin-bottom: 4px;
                border-bottom: 1px solid rgba(255,255,255,0.08);
            }
            .ayur-qdept-link {
                display: flex !important;
                align-items: center !important;
                gap: 12px !important;
                color: rgba(255, 255, 255, 0.85) !important;
                text-decoration: none !important;
                padding: 7px 14px !important;
                font-size: 13.5px !important;
                font-weight: 500 !important;
                border-radius: 40px !important;
                transition: all 0.25s ease !important;
                border: 1px solid transparent !important;
                background: transparent !important;
                font-family: 'Inter', sans-serif !important;
                white-space: nowrap !important;
            }
            .ayur-qdept-link:hover,
            .ayur-qdept-link.active {
                background: rgba(255, 255, 255, 0.15) !important;
                border-color: rgba(255, 255, 255, 0.25) !important;
                color: #fff !important;
            }
            .ayur-qdept-link svg {
                width: 28px !important;
                height: 28px !important;
                padding: 7px !important;
                background: transparent !important;
                border-radius: 50% !important;
                box-sizing: border-box !important;
                transition: all 0.25s ease !important;
                flex-shrink: 0 !important;
            }
            .ayur-qdept-link:hover svg,
            .ayur-qdept-link.active svg {
                background: #ffffff !important;
                padding: 6px !important;
            }
            @media (max-width: 768px) {
                .ayur-qdept-sidebar {
                    position: relative !important;
                    top: 0 !important;
                    display: flex !important;
                    flex-direction: row !important;
                    flex-wrap: wrap !important;
                    max-height: none !important;
                    border-radius: 24px !important;
                    margin-top: 16px;
                }
                .ayur-qdept-title { width: 100%; }
                .ayur-qdept-link { font-size: 12.5px !important; }
            }

            /* CONTENT COLUMN */
            .ayur-content-col {
                display: flex;
                flex-direction: column;
                gap: 0;
                padding-top: 24px;
            }

            /* WHITE SECTION BACKGROUND wrapper */
            .ayur-section {
                background: #ffffff;
                padding: 20px 0;
            }

            /* DARK GLASSMORPHIC CARDS */
            .ayur-card {
                background: rgba(0, 0, 0, 0.60) !important;
                backdrop-filter: blur(16px) !important;
                -webkit-backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
                border-radius: 32px !important;
                padding: 44px 48px !important;
                color: rgba(255, 255, 255, 0.85) !important;
                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2) !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
            @media (max-width: 768px) {
                .ayur-card {
                    padding: 28px 24px !important;
                    border-radius: 24px !important;
                }
            }

            /* SECTION LABEL */
            .ayur-sec-label {
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                color: var(--primary-green);
                display: block;
                margin-bottom: 10px;
                font-family: 'Inter', sans-serif;
            }

            /* SECTION TITLE */
            .ayur-sec-title {
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 26px;
                font-weight: 700;
                color: #ffffff !important;
                line-height: 1.22;
                letter-spacing: -0.02em;
                margin-bottom: 16px;
            }
            @media (max-width: 768px) { .ayur-sec-title { font-size: 21px; } }

            /* BODY TEXT */
            .ayur-sec-body {
                font-size: 15px;
                line-height: 1.78;
                color: rgba(255, 255, 255, 0.80) !important;
            }
            .ayur-sec-body p + p { margin-top: 14px; }

            /* HERO IMAGE in intro */
            .ayur-intro-img {
                width: 100%;
                border-radius: 20px;
                object-fit: cover;
                height: 300px;
                margin-top: 28px;
                display: block;
            }

            /* BULLET LIST */
            .ayur-list {
                list-style: none;
                padding: 0;
                margin: 16px 0 0;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .ayur-list li {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                font-size: 14.5px;
                color: rgba(255, 255, 255, 0.85) !important;
                line-height: 1.65;
            }
            .ayur-list li::before {
                content: '';
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--primary-green);
                flex-shrink: 0;
                margin-top: 7px;
            }

            /* THERAPY CARDS — 2 col grid with image */
            .ayur-therapy-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 16px;
                margin-top: 28px;
            }
            @media (max-width: 580px) { .ayur-therapy-grid { grid-template-columns: 1fr; } }

            .ayur-therapy-card {
                border-radius: 20px;
                overflow: hidden;
                transition: box-shadow 0.25s ease, transform 0.25s ease;
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
            }
            .ayur-therapy-card:hover {
                box-shadow: 0 8px 24px rgba(0,0,0,0.2);
                transform: translateY(-3px);
                border-color: rgba(43,196,109,0.3) !important;
            }
            .ayur-therapy-card-img {
                width: 100%;
                height: 160px;
                object-fit: cover;
                display: block;
            }
            .ayur-therapy-card-body {
                padding: 18px 20px 20px;
            }
            .ayur-therapy-num {
                font-size: 10.5px;
                font-weight: 700;
                color: var(--primary-green);
                letter-spacing: 0.12em;
                margin-bottom: 5px;
                font-family: 'Plus Jakarta Sans', sans-serif;
            }
            .ayur-therapy-name {
                font-size: 15px;
                font-weight: 700;
                color: #ffffff !important;
                margin-bottom: 7px;
                font-family: 'Plus Jakarta Sans', sans-serif;
                line-height: 1.3;
            }
            .ayur-therapy-desc {
                font-size: 13.5px;
                color: rgba(255, 255, 255, 0.70) !important;
                line-height: 1.58;
            }

            /* INTEGRATION PILLS */
            .ayur-integration-pills {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 20px;
            }
            .ayur-pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 9px 18px;
                border-radius: 40px;
                background: rgba(255,255,255,0.08);
                border: 1px solid rgba(255,255,255,0.15);
                color: rgba(255,255,255,0.88);
                font-size: 13.5px;
                font-weight: 500;
                transition: all 0.25s ease;
                font-family: 'Inter', sans-serif;
            }
            .ayur-pill:hover {
                background: rgba(255,255,255,0.15);
                border-color: rgba(43,196,109,0.4);
                color: #ffffff;
            }
            .ayur-pill svg { width: 14px; height: 14px; flex-shrink: 0; color: var(--primary-green); }

            /* BENEFITS 3 COL */
            .ayur-benefits-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
                margin-top: 28px;
            }
            @media (max-width: 860px) { .ayur-benefits-grid { grid-template-columns: 1fr 1fr; } }
            @media (max-width: 520px) { .ayur-benefits-grid { grid-template-columns: 1fr; } }

            .ayur-benefit-col {
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                border-radius: 20px;
                padding: 22px;
                transition: all 0.25s ease;
            }
            .ayur-benefit-col:hover {
                border-color: rgba(43,196,109,0.35) !important;
                box-shadow: 0 4px 16px rgba(43,196,109,0.2);
            }
            .ayur-benefit-col-title {
                font-size: 12px;
                font-weight: 700;
                color: var(--primary-green);
                text-transform: uppercase;
                letter-spacing: 0.12em;
                margin-bottom: 14px;
                font-family: 'Plus Jakarta Sans', sans-serif;
            }
            .ayur-benefit-col .ayur-list li { color: rgba(255, 255, 255, 0.8) !important; }

            /* INTRO IMAGE + TEXT: 2-col on desktop */
            .ayur-intro-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                align-items: center;
                margin-top: 8px;
            }
            @media (max-width: 768px) { .ayur-intro-grid { grid-template-columns: 1fr; gap: 24px; } }
            .ayur-intro-grid-img {
                width: 100%;
                height: 340px;
                object-fit: cover;
                border-radius: 20px;
                display: block;
            }

            /* WHY LIST */
            .ayur-why-list {
                list-style: none;
                padding: 0;
                margin: 20px 0 0;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            .ayur-why-item {
                display: flex;
                align-items: flex-start;
                gap: 14px;
                padding: 16px 18px;
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.1) !important;
                border-radius: 16px;
                transition: all 0.25s ease;
            }
            .ayur-why-item:hover {
                border-color: rgba(43,196,109,0.3) !important;
                box-shadow: 0 4px 14px rgba(43,196,109,0.15);
            }
            .ayur-why-icon {
                width: 34px; height: 34px;
                border-radius: 50%;
                background: rgba(43, 196, 109, 0.2) !important;
                display: flex; align-items: center; justify-content: center;
                color: var(--primary-green) !important;
                flex-shrink: 0;
            }
            .ayur-why-text { font-size: 14px; color: rgba(255, 255, 255, 0.75) !important; line-height: 1.58; }
            .ayur-why-text strong { color: #ffffff !important; font-weight: 600; display: block; margin-bottom: 2px; }

            /* CTA BUTTONS */
            .ayur-cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

            .ayur-btn-primary {
                display: inline-flex; align-items: center; gap: 8px;
                padding: 14px 30px; background: var(--primary-green);
                color: #ffffff; border-radius: 40px;
                font-size: 14.5px; font-weight: 600;
                text-decoration: none; transition: all 0.25s ease;
                font-family: 'Inter', sans-serif;
            }
            .ayur-btn-primary:hover {
                background: #22a85c; transform: translateY(-2px);
                box-shadow: 0 8px 24px rgba(43,196,109,0.4);
            }
            .ayur-btn-ghost {
                display: inline-flex; align-items: center; gap: 8px;
                padding: 14px 30px; background: rgba(255,255,255,0.1);
                border: 1px solid rgba(255,255,255,0.22); color: #ffffff;
                border-radius: 40px; font-size: 14.5px; font-weight: 600;
                text-decoration: none; transition: all 0.25s ease;
                font-family: 'Inter', sans-serif;
            }
            .ayur-btn-ghost:hover {
                background: rgba(255,255,255,0.18);
                border-color: rgba(255,255,255,0.38);
                transform: translateY(-2px);
            }
        </style>

        <!-- BANNER -->
        <div class="ayur-hero-wrapper">
            <div class="ayur-hero-banner" style="background-image: url('Assets/rehab/th_shirodhara.webp');">
                <div class="ayur-hero-overlay"></div>
                <div class="ayur-hero-content">
                    <div class="ayur-hero-breadcrumb">
                        <a href="index.html">Home</a> &nbsp;&gt;&nbsp;
                        <a href="therapies.html">Departments</a> &nbsp;&gt;&nbsp;
                        <span style="color: #ffffff;">Ayurveda</span>
                    </div>
                    <span class="ayur-hero-label">Department / Therapy</span>
                    <h1 class="main-title" style="color: #ffffff !important; font-size: clamp(36px, 5vw, 64px);">Ayurveda</h1>
                    <p class="main-sub" style="color: rgba(255,255,255,0.88) !important;">Integrating authentic Kerala Ayurvedic medicine with scientific neurological rehabilitation models to maximize active biological recovery.</p>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px;">
                        <a href="index.html#consultation" class="main-cta">
                            <span class="cta-text">Book Consultation</span> <span class="arrow-btn"><i data-lucide="arrow-up-right" size="14"></i></span>
                        </a>
                        <a href="https://wa.me/918080808080" target="_blank" class="main-cta">
                            <span class="cta-text">WhatsApp</span>
                            <span class="arrow-btn" style="background: transparent; color: #000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center; padding: 0;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- PAGE BODY: SIDEBAR + CONTENT -->
        <div class="ayur-page-body">

            <!-- QUICK ACCESS SIDEBAR -->
            <aside class="ayur-qdept-sidebar">
                <div class="ayur-qdept-title">All Departments</div>
                <a href="ayurveda.html" class="ayur-qdept-link active"><i data-lucide="leaf" size="14" style="color: #4CAF50;"></i>Ayurveda</a>
                <a href="physiotherapy.html" class="ayur-qdept-link"><i data-lucide="dumbbell" size="14" style="color: #FF9800;"></i>Physiotherapy</a>
                <a href="robotic-rehab.html" class="ayur-qdept-link"><i data-lucide="bot" size="14" style="color: #00BCD4;"></i>Robotic Rehabilitation</a>
                <a href="occupational-therapy.html" class="ayur-qdept-link"><i data-lucide="puzzle" size="14" style="color: #9C27B0;"></i>Occupational Therapy</a>
                <a href="speech-therapy.html" class="ayur-qdept-link"><i data-lucide="message-circle" size="14" style="color: #2196F3;"></i>Speech Therapy</a>
                <a href="virtual-reality.html" class="ayur-qdept-link"><i data-lucide="headset" size="14" style="color: #E91E63;"></i>Virtual Reality</a>
                <a href="yoga-meditation.html" class="ayur-qdept-link"><i data-lucide="sun" size="14" style="color: #FFC107;"></i>Yoga and Meditation</a>
                <a href="acupuncture.html" class="ayur-qdept-link"><i data-lucide="map-pin" size="14" style="color: #F44336;"></i>Acupuncture</a>
                <a href="reflexology.html" class="ayur-qdept-link"><i data-lucide="footprints" size="14" style="color: #795548;"></i>Reflexology</a>
                <a href="hydro-therapy.html" class="ayur-qdept-link"><i data-lucide="waves" size="14" style="color: #03A9F4;"></i>Hydro / Aquatic Therapy</a>
                <a href="pediatrics.html" class="ayur-qdept-link"><i data-lucide="baby" size="14" style="color: #E040FB;"></i>Pediatrics</a>
                <a href="slimming-treatment.html" class="ayur-qdept-link"><i data-lucide="ruler" size="14" style="color: #009688;"></i>Slimming Treatment</a>
                <a href="pain-management.html" class="ayur-qdept-link"><i data-lucide="shield-plus" size="14" style="color: #4CAF50;"></i>Pain Management</a>
                <a href="diet-nutrition.html" class="ayur-qdept-link"><i data-lucide="utensils" size="14" style="color: #FF5722;"></i>Diet &amp; Nutrition</a>
                <a href="counseling.html" class="ayur-qdept-link"><i data-lucide="heart-handshake" size="14" style="color: #E91E63;"></i>Counseling</a>
                <a href="dentistry.html" class="ayur-qdept-link"><i data-lucide="smile" size="14" style="color: #00BCD4;"></i>Dentistry</a>
                <a href="modern-medicine.html" class="ayur-qdept-link"><i data-lucide="pill" size="14" style="color: #9C27B0;"></i>Modern Medicine</a>
                <a href="assistive-devices.html" class="ayur-qdept-link"><i data-lucide="accessibility" size="14" style="color: #3F51B5;"></i>Assistive Devices</a>
            </aside>

            <!-- CONTENT SECTIONS -->
            <div class="ayur-content-col">

                <!-- 1. Introduction -->
                <div class="ayur-section">
                    <div class="ayur-card">
                        <span class="ayur-sec-label">The Legacy</span>
                        <h2 class="ayur-sec-title">Ayurveda Therapy at Ayurgreen Hospital</h2>
                        <div class="ayur-intro-grid">
                            <div class="ayur-sec-body">
                                <p>At Ayurgreen Hospital, Ayurveda is not just a traditional treatment — it is an essential part of a scientifically guided recovery journey. With over 25 years of expertise in neuro and orthopedic rehabilitation, the hospital blends the wisdom of Ayurveda with modern medical advancements to support patients in regaining strength, mobility, and confidence.</p>
                                <p>Rooted in the principle of balancing the body, mind, and soul, Ayurveda plays a powerful role in treatment for neurological disorders, especially when combined with advanced rehabilitation techniques. This integrated approach reflects Ayurgreen's philosophy of <em style="color: #ffffff; font-style: italic;">"Happiness in Healthcare"</em>, ensuring patients experience both healing and hope.</p>
                            </div>
                            <img src="Assets/rehab/th_ayurveda.webp" alt="Authentic Kerala Ayurveda treatment at Ayurgreen Hospital" class="ayur-intro-grid-img">
                        </div>
                    </div>
                </div>

                <!-- 2. Neurological Recovery -->
                <div class="ayur-section">
                    <div class="ayur-card">
                        <span class="ayur-sec-label">Clinical Focus</span>
                        <h2 class="ayur-sec-title">How Ayurveda Supports Stroke &amp; Neurological Recovery</h2>
                        <div class="ayur-intro-grid">
                            <img src="Assets/rehab/prog_stroke.webp" alt="Stroke rehabilitation using Ayurveda at Ayurgreen Hospital" class="ayur-intro-grid-img" style="order: -1;">
                            <div>
                                <div class="ayur-sec-body">
                                    <p>Neurological conditions such as stroke, paralysis, and nerve disorders often affect both physical function and mental well-being. Ayurveda focuses on restoring the body's internal balance (doshas), improving circulation, and enhancing nerve regeneration.</p>
                                    <p>In stroke recovery, Ayurvedic therapies are designed to:</p>
                                </div>
                                <ul class="ayur-list">
                                    <li>Stimulate damaged nerves and muscles</li>
                                    <li>Improve blood flow to the brain and affected areas</li>
                                    <li>Reduce stiffness, pain, and inflammation</li>
                                    <li>Enhance coordination and motor function</li>
                                </ul>
                                <div class="ayur-sec-body" style="margin-top:14px;">
                                    <p>By addressing the root cause rather than just symptoms, Ayurvedic neuro rehabilitation supports long-term recovery and prevents complications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. Key Therapies -->
                <div class="ayur-section">
                    <div class="ayur-card">
                        <span class="ayur-sec-label">Therapy Modules</span>
                        <h2 class="ayur-sec-title">Key Ayurvedic Therapies Offered</h2>
                        <div class="ayur-sec-body">
                            <p>Ayurgreen Hospital provides a range of specialized Ayurvedic treatments tailored to each patient's condition and recovery stage:</p>
                        </div>
                        <div class="ayur-therapy-grid">
                            <div class="ayur-therapy-card">
                                <img src="Assets/rehab/th_panchakarma.webp" alt="Panchakarma Detox" class="ayur-therapy-card-img">
                                <div class="ayur-therapy-card-body">
                                    <div class="ayur-therapy-num">01</div>
                                    <div class="ayur-therapy-name">Panchakarma Detox Therapies</div>
                                    <div class="ayur-therapy-desc">A deep cleansing process that removes toxins from the body, improving overall function and preparing the body for faster healing.</div>
                                </div>
                            </div>
                            <div class="ayur-therapy-card">
                                <img src="Assets/rehab/th_abhyanga.webp" alt="Abhyanga Oil Massage" class="ayur-therapy-card-img">
                                <div class="ayur-therapy-card-body">
                                    <div class="ayur-therapy-num">02</div>
                                    <div class="ayur-therapy-name">Abhyanga (Therapeutic Oil Massage)</div>
                                    <div class="ayur-therapy-desc">A synchronized massage using herbal oils that helps improve circulation, reduce muscle stiffness, and relax the nervous system.</div>
                                </div>
                            </div>
                            <div class="ayur-therapy-card">
                                <img src="Assets/rehab/th_njavara.webp" alt="Njavarakizhi Rice Bundle Therapy" class="ayur-therapy-card-img">
                                <div class="ayur-therapy-card-body">
                                    <div class="ayur-therapy-num">03</div>
                                    <div class="ayur-therapy-name">Njavarakizhi (Rice Bundle Therapy)</div>
                                    <div class="ayur-therapy-desc">A rejuvenating therapy using herbal rice bundles that strengthens muscles and enhances nerve function.</div>
                                </div>
                            </div>
                            <div class="ayur-therapy-card">
                                <img src="Assets/rehab/th_shirodhara.webp" alt="Shirodhara forehead oil therapy" class="ayur-therapy-card-img">
                                <div class="ayur-therapy-card-body">
                                    <div class="ayur-therapy-num">04</div>
                                    <div class="ayur-therapy-name">Shirodhara</div>
                                    <div class="ayur-therapy-desc">A calming treatment where herbal oil is poured over the forehead, helping reduce stress, anxiety, and neurological imbalances.</div>
                                </div>
                            </div>
                            <div class="ayur-therapy-card" style="grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr;">
                                <img src="Assets/rehab/th_pizhichil.webp" alt="Pizhichil Oil Bath" class="ayur-therapy-card-img" style="height: 100%; border-radius: 0;">
                                <div class="ayur-therapy-card-body" style="padding: 28px 28px;">
                                    <div class="ayur-therapy-num">05</div>
                                    <div class="ayur-therapy-name" style="font-size: 18px;">Pizhichil (Oil Bath Therapy)</div>
                                    <div class="ayur-therapy-desc" style="font-size: 14px; line-height: 1.65;">A therapy combining heat and herbal oils to improve joint mobility and muscle flexibility. Each therapy is carefully customized based on the patient's condition, ensuring safe and effective healing.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. Integration with Modern Rehab -->
                <div class="ayur-section">
                    <div class="ayur-card">
                        <span class="ayur-sec-label">Integrated Innovation</span>
                        <h2 class="ayur-sec-title">Integration with Modern Rehabilitation</h2>
                        <div class="ayur-sec-body">
                            <p>What makes Ayurgreen unique is its seamless integration of Ayurveda with advanced rehabilitation technologies. Patients benefit from a multidisciplinary approach that combines:</p>
                        </div>
                        <div class="ayur-integration-pills">
                            <span class="ayur-pill"><i data-lucide="bot" size="14"></i>Robotic Neuro Rehabilitation</span>
                            <span class="ayur-pill"><i data-lucide="dumbbell" size="14"></i>Physiotherapy &amp; Occupational Therapy</span>
                            <span class="ayur-pill"><i data-lucide="message-circle" size="14"></i>Speech &amp; Swallow Therapy</span>
                            <span class="ayur-pill"><i data-lucide="heart-handshake" size="14"></i>Psychological Counseling</span>
                            <span class="ayur-pill"><i data-lucide="headset" size="14"></i>VR Cognitive Rehabilitation</span>
                            <span class="ayur-pill"><i data-lucide="sun" size="14"></i>Yoga &amp; Meditation</span>
                        </div>
                        <div class="ayur-sec-body" style="margin-top: 24px;">
                            <p>This combination ensures that Ayurveda enhances — not replaces — modern treatment, creating a comprehensive recovery plan. The result is faster progress, improved functional outcomes, and better quality of life.</p>
                        </div>
                        <img src="Assets/rehab/th_robotic.webp" alt="Robotic rehabilitation integrated with Ayurveda" style="width:100%; border-radius:20px; object-fit:cover; height:240px; margin-top:28px; display:block;">
                    </div>
                </div>

                <!-- 5. Benefits -->
                <div class="ayur-section">
                    <div class="ayur-card">
                        <span class="ayur-sec-label">Why It Works</span>
                        <h2 class="ayur-sec-title">Benefits of Ayurveda Therapy</h2>
                        <div class="ayur-sec-body">
                            <p>Ayurveda offers a wide range of physical, mental, and long-term health benefits:</p>
                        </div>
                        <div class="ayur-benefits-grid">
                            <div class="ayur-benefit-col">
                                <div class="ayur-benefit-col-title">Physical</div>
                                <ul class="ayur-list">
                                    <li>Improved muscle strength and flexibility</li>
                                    <li>Reduced pain and inflammation</li>
                                    <li>Enhanced nerve regeneration and mobility</li>
                                </ul>
                            </div>
                            <div class="ayur-benefit-col">
                                <div class="ayur-benefit-col-title">Mental &amp; Emotional</div>
                                <ul class="ayur-list">
                                    <li>Reduced stress and anxiety</li>
                                    <li>Better sleep quality</li>
                                    <li>Improved emotional stability</li>
                                </ul>
                            </div>
                            <div class="ayur-benefit-col">
                                <div class="ayur-benefit-col-title">Long-Term Wellness</div>
                                <ul class="ayur-list">
                                    <li>Prevention of relapse or complications</li>
                                    <li>Improved immunity and overall vitality</li>
                                    <li>Sustainable healing through natural methods</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6. Why Choose Ayurgreen -->
                <div class="ayur-section">
                    <div class="ayur-card">
                        <span class="ayur-sec-label">The Benchmark</span>
                        <h2 class="ayur-sec-title">Why Choose Ayurgreen Hospital?</h2>
                        <div class="ayur-sec-body">
                            <p>Ayurgreen stands out as a leader in Ayurveda treatment for neurological disorders because of its unique approach:</p>
                        </div>
                        <ul class="ayur-why-list">
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="award" size="16"></i></div>
                                <div class="ayur-why-text"><strong>25+ Years of Expertise</strong>Over two decades of clinical experience in neuro rehabilitation, managing complex neurological impairments.</div>
                            </li>
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="bot" size="16"></i></div>
                                <div class="ayur-why-text"><strong>India's First Robotic-Integrated Center</strong>Pioneer in combining advanced sensory-robotic trainers with traditional Kerala Ayurvedic cellular therapies.</div>
                            </li>
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="clipboard-list" size="16"></i></div>
                                <div class="ayur-why-text"><strong>Personalized Treatment Plans</strong>Every plan uniquely combines Ayurveda and modern medicine to match the patient's specific recovery needs.</div>
                            </li>
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="users" size="16"></i></div>
                                <div class="ayur-why-text"><strong>Experienced Multidisciplinary Team</strong>Ayurvedic scholars, neurologists, physiotherapists, and robotic engineers working as one integrated panel.</div>
                            </li>
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="leaf" size="16"></i></div>
                                <div class="ayur-why-text"><strong>Holistic Healing Philosophy</strong>Focusing on body, mind, and soul — every patient receives a complete recovery experience, not just treatment.</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 7. CTA -->
                <div class="ayur-section">
                    <div class="ayur-card" style="text-align: center;">
                        <h2 class="ayur-sec-title" style="margin-bottom: 14px;">Start Your Recovery Journey</h2>
                        <p class="ayur-sec-body" style="margin-bottom: 32px; max-width: 520px; margin-left: auto; margin-right: auto;">Consult with our clinical experts and Ayurvedic scholars to design your customized integrated recovery pathway.</p>
                        <div class="ayur-cta-buttons">
                            <a href="index.html#consultation" class="ayur-btn-primary">Book Consultation <i data-lucide="calendar" size="16"></i></a>
                            <a href="https://wa.me/918080808080" target="_blank" class="ayur-btn-ghost">WhatsApp <i data-lucide="message-square" size="16"></i></a>
                            <a href="tel:+918080808080" class="ayur-btn-ghost">Call Now <i data-lucide="phone" size="16"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>
"""







# Create pages from lists
all_dynamic_pages = []

for svc in therapies_list:
    if svc['filename'] not in ['stroke-rehab.html']: # Skip custom
        html = generate_service_html(svc, "Therapies", therapies_list)
        all_dynamic_pages.append((svc['filename'], html))

for svc in departments_list:
    if svc['filename'] not in ['ayurveda.html', 'robotic-rehab.html']: # Skip custom
        html = generate_service_html(svc, "Departments", departments_list)
        all_dynamic_pages.append((svc['filename'], html))

for svc in specializations_list:
    html = generate_service_html(svc, "Specializations", specializations_list)
    all_dynamic_pages.append((svc['filename'], html))

pages = [
    ('about.html', about_main),
    ('programs.html', programs_main),
    ('therapies.html', therapies_main),
    ('rehab-village.html', village_main),
    ('international-patients.html', international_main),
    ('stroke-rehab.html', stroke_main),
    ('robotic-rehab.html', robotic_main),
    ('ayurveda.html', ayurveda_main)
] + all_dynamic_pages

current_dir = os.path.dirname(os.path.abspath(__file__))

def replace_main(filename, new_main_html):
    filepath = os.path.join(current_dir, filename)
    
    # Copy index.html as the template to ensure header/footer synchronization
    import shutil
    shutil.copyfile(os.path.join(current_dir, 'index.html'), filepath)
    print(f"Synchronized {filename} with index.html template")
        
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if this is a service page
    svc = None
    category_name = None
    siblings = []
    
    for s in therapies_list:
        if s['filename'] == filename:
            svc = s
            category_name = "Therapies"
            siblings = therapies_list
            break
    if not svc:
        for s in departments_list:
            if s['filename'] == filename:
                svc = s
                category_name = "Departments"
                siblings = departments_list
                break
    if not svc:
        for s in specializations_list:
            if s['filename'] == filename:
                svc = s
                category_name = "Specializations"
                siblings = specializations_list
                break
                
    if svc:
        # Wrap new_main_html in layout grid with sticky sidebar
        new_main_html = wrap_in_sidebar_layout(new_main_html, filename, category_name, siblings)

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
        if svc:
            name = svc['name']
            desc = svc.get('desc', f"Experience clinical care and integrated rehabilitation for {name} at Ayurgreen Hospital. Combining advanced technology and traditional Ayurveda.")
            
            # Replace title
            title_start = new_content.find('<title>')
            title_end = new_content.find('</title>')
            if title_start != -1 and title_end != -1:
                new_content = new_content[:title_start] + f'<title>{name} Rehabilitation & Care | Ayurgreen Hospital</title>' + new_content[title_end + len('</title>'):]
                
            # Replace description
            desc_start = new_content.find('<meta name="description"')
            if desc_start != -1:
                desc_end = new_content.find('>', desc_start) + 1
                new_content = new_content[:desc_start] + f'<meta name="description" content="{desc}">' + new_content[desc_end:]
                
            # Replace canonical
            canonical_start = new_content.find('<link rel="canonical"')
            if canonical_start != -1:
                canonical_end = new_content.find('>', canonical_start) + 1
                new_content = new_content[:canonical_start] + f'<link rel="canonical" href="https://ayurgreenhospital.com/{filename}">' + new_content[canonical_end:]

            # Replace open graph & twitter properties
            og_title_start = new_content.find('<meta property="og:title"')
            if og_title_start != -1:
                og_title_end = new_content.find('>', og_title_start) + 1
                new_content = new_content[:og_title_start] + f'<meta property="og:title" content="{name} Rehabilitation & Care | Ayurgreen Hospital">' + new_content[og_title_end:]

            og_desc_start = new_content.find('<meta property="og:description"')
            if og_desc_start != -1:
                og_desc_end = new_content.find('>', og_desc_start) + 1
                new_content = new_content[:og_desc_start] + f'<meta property="og:description" content="{desc}">' + new_content[og_desc_end:]

            og_url_start = new_content.find('<meta property="og:url"')
            if og_url_start != -1:
                og_url_end = new_content.find('>', og_url_start) + 1
                new_content = new_content[:og_url_start] + f'<meta property="og:url" content="https://ayurgreenhospital.com/{filename}">' + new_content[og_url_end:]

            twitter_title_start = new_content.find('<meta property="twitter:title"')
            if twitter_title_start != -1:
                twitter_title_end = new_content.find('>', twitter_title_start) + 1
                new_content = new_content[:twitter_title_start] + f'<meta property="twitter:title" content="{name} Rehabilitation & Care | Ayurgreen Hospital">' + new_content[twitter_title_end:]

            twitter_desc_start = new_content.find('<meta property="twitter:description"')
            if twitter_desc_start != -1:
                twitter_desc_end = new_content.find('>', twitter_desc_start) + 1
                new_content = new_content[:twitter_desc_start] + f'<meta property="twitter:description" content="{desc}">' + new_content[twitter_desc_end:]

            twitter_url_start = new_content.find('<meta property="twitter:url"')
            if twitter_url_start != -1:
                twitter_url_end = new_content.find('>', twitter_url_start) + 1
                new_content = new_content[:twitter_url_start] + f'<meta property="twitter:url" content="https://ayurgreenhospital.com/{filename}">' + new_content[twitter_url_end:]

            # Inject unified JSON-LD schema
            schema_start = new_content.find('<script type="application/ld+json">')
            if schema_start != -1:
                schema_end = new_content.find('</script>', schema_start) + len('</script>')
                json_ld_schema = generate_json_ld(filename, name, desc, category_name)
                new_content = new_content[:schema_start] + '<script type="application/ld+json">\n' + json_ld_schema + '\n</script>' + new_content[schema_end:]

        with open(filepath, 'w', encoding="utf-8") as f:
            f.write(new_content)
        print(f"Populated main content and processed header for {filename}")


for filename, main_content in pages:
    replace_main(filename, main_content)
