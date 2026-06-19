import os
import json
import re

# Parse content.txt
current_dir = os.path.dirname(os.path.abspath(__file__))
content_path = os.path.join(current_dir, "content.txt")

gdoc_data = {}
if os.path.exists(content_path):
    with open(content_path, "r", encoding="utf-8") as f:
        text = f.read()
    
    # Normalize line endings
    text = text.replace('\r\n', '\n')
    lines = [l.strip().replace('\ufeff', '') for l in text.split('\n')]
    
    # Heading lists in Google Doc order
    gdoc_headings = [
        "Ayurveda", "Physiotherapy", "Robotic Rehabilitation", "Occupational Therapy", "Speech Therapy",
        "Virtual Reality", "Yoga", "Acupuncture", "Reflexology", "Hydro / Aquatic Therapy",
        "Pediatric Physiotherapy", "Slimming Treatment", "Pain Management", "Diet & Nutrition",
        "Counseling", "Dentistry", "Modern Medical management", "Assistive Devices",
        "Stroke", "Spinal Cord Injury", "Traumatic Brain Injury", "Hemiplegia",
        "Quadriplegia & Paraplegia", "Motor Neuron Diseases", "Cerebral Palsy", "Parkinson's Disease",
        "Myopathy", "Disc & Spine Problems", "Sciatica", "Obesity", "Post Covid Problems",
        "Muscular Dystrophy", "Osteoarthritis", "Rheumatoid Arthritis", "Developmental Delay",
        "Psychological Problems", "Neurology", "Neurosurgery", "Orthopedic", "ENT",
        "General medicine", "Urology", "Cardiology"
    ]
    
    # Find indices of headings in content.txt
    heading_indices = []
    current_idx = 0
    for heading in gdoc_headings:
        for i in range(current_idx, len(lines)):
            if lines[i] == heading:
                heading_indices.append((heading, i))
                current_idx = i + 1
                break
                
    # Parse each page's sections
    for idx, (heading, line_idx) in enumerate(heading_indices):
        start = line_idx
        end = heading_indices[idx+1][1] if idx + 1 < len(heading_indices) else len(lines)
        page_lines = lines[start:end]
        
        title = page_lines[0]
        subtitle = ""
        start_content_idx = 1
        for i, line in enumerate(page_lines[1:]):
            if line:
                subtitle = line
                start_content_idx = i + 2
                break
                
        sections = {
            "intro": [],
            "importance": [],
            "approach": [],
            "treatments": [],
            "benefits": [],
            "why_choose": []
        }
        current_sec = "intro"
        
        for line in page_lines[start_content_idx:]:
            if not line:
                continue
            
            lower_line = line.lower()
            is_heading = False
            detected_sec = None
            
            # Heading heuristic matching test_refined_parser
            if len(line) < 80 and not line.startswith(('*', '-', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')):
                if "importance" in lower_line or ("how " in lower_line and "support" in lower_line):
                    is_heading = True
                    detected_sec = "importance"
                elif "approach" in lower_line or "integration" in lower_line or "integrated" in lower_line or "multidisciplinary care" in lower_line:
                    is_heading = True
                    detected_sec = "approach"
                elif "treatment" in lower_line or "therapy" in lower_line or "therapies" in lower_line or "services" in lower_line or "procedures" in lower_line or "devices" in lower_line or "approaches" in lower_line:
                    is_heading = True
                    detected_sec = "treatments"
                elif "benefit" in lower_line or "applications" in lower_line or "indications" in lower_line:
                    is_heading = True
                    detected_sec = "benefits"
                elif "why choose" in lower_line:
                    is_heading = True
                    detected_sec = "why_choose"
                    
            if is_heading and detected_sec:
                current_sec = detected_sec
                sections[current_sec].append(line)
            else:
                sections[current_sec].append(line)
                
        gdoc_data[heading] = {
            "title": title,
            "subtitle": subtitle,
            "sections": sections
        }

gdoc_mapping = {
    # Therapies
    "Stroke": "Stroke",
    "Spinal Cord Injury": "Spinal Cord Injury",
    "Traumatic Brain Injury": "Traumatic Brain Injury",
    "Hemiplegia": "Hemiplegia",
    "Quadriplegia & Paraplegia": "Quadriplegia & Paraplegia",
    "Motor Neuron Diseases": "Motor Neuron Diseases",
    "Cerebral Palsy": "Cerebral Palsy",
    "Parkinson's Disease": "Parkinson's Disease",
    "Myopathy": "Myopathy",
    "Disc & Spine Problems": "Disc & Spine Problems",
    "Sciatica": "Sciatica",
    "Obesity": "Obesity",
    "Post-Covid Complications": "Post Covid Problems",
    "Muscular Dystrophy": "Muscular Dystrophy",
    "Osteoarthritis": "Osteoarthritis",
    "Rheumatoid Arthritis": "Rheumatoid Arthritis",
    "Developmental Delay": "Developmental Delay",
    "Psychological Problems": "Psychological Problems",
    
    # Departments
    "Ayurveda": "Ayurveda",
    "Physiotherapy": "Physiotherapy",
    "Robotic Rehabilitation": "Robotic Rehabilitation",
    "Occupational Therapy": "Occupational Therapy",
    "Speech Therapy": "Speech Therapy",
    "Virtual Reality": "Virtual Reality",
    "Yoga and Meditation": "Yoga",
    "Acupuncture": "Acupuncture",
    "Reflexology": "Reflexology",
    "Hydro / Aquatic Therapy": "Hydro / Aquatic Therapy",
    "Pediatrics": "Pediatric Physiotherapy",
    "Slimming Treatment": "Slimming Treatment",
    "Pain Management": "Pain Management",
    "Diet & Nutrition": "Diet & Nutrition",
    "Counseling": "Counseling",
    "Dentistry": "Dentistry",
    "Modern Medicine": "Modern Medical management",
    "Assistive Devices": "Assistive Devices",
    
    # Specializations
    "Neurology": "Neurology",
    "Neurosurgery": "Neurosurgery",
    "Orthopedic": "Orthopedic",
    "ENT": "ENT",
    "General Medicine": "General medicine",
    "Urology": "Urology",
    "Cardiology": "Cardiology"
}

fallbacks = {
    "Autism": {
        "subtitle": "Pediatric Sensory & Neuromotor Rehabilitation",
        "sections": {
            "intro": [
                "At Ayurgreen Hospital, our Autism program offers specialized neurodevelopmental support, sensory integration, and motor coordination therapies to help children achieve active life milestones.",
                "We design personalized physical and cognitive stimulation protocols in a warm, welcoming environment to foster developmental progress, motor learning, and emotional growth."
            ],
            "importance": [
                "How Sensory Integration Supports Autism Care",
                "Children facing developmental milestones or sensory processing difficulties benefit from structured neuro-physical stimulation.",
                "Our therapies target: sensory overload reduction, fine motor grip control, eye-hand coordination, balance, and spatial awareness."
            ],
            "treatments": [
                "Specialized Autism Interventions Offered",
                "* Sensory Integration Therapy: Dynamic tactile and vestibular training in specialized pediatric gyms.",
                "* Motor Coordination Exercises: Guided physical activities to improve gait, stability, and posture.",
                "* ADL & Task-Specific Training: Empowering children to perform everyday self-care tasks independently."
            ],
            "approach": [
                "Integrated Innovation in Pediatric Care",
                "We combine advanced sensory integration setups with traditional Ayurvedic organic oil applications (where recommended by our clinical scholars) to nourish nerve pathways and calm sensory hyperactivity."
            ],
            "benefits": [
                "Developmental Benefits of the Program",
                "* Improved sensory regulation and calm focus",
                "* Enhanced motor planning and coordination",
                "* Increased independence in daily self-care tasks"
            ]
        }
    },
    "Psychiatry": {
        "subtitle": "Comprehensive Mental Health & Clinical Psychology Services",
        "sections": {
            "intro": [
                "Ayurgreen Hospital provides integrated clinical psychiatric support, wellness counseling, and stress-reduction protocols for patients navigating mental health challenges.",
                "We believe that physical recovery and mental peace go hand-in-hand. Our scholars and psychologists work closely with families to offer holistic cognitive support."
            ],
            "importance": [
                "The Role of Mental Health in Rehabilitation",
                "Recovering from chronic illness, nerve damage, or trauma requires emotional resilience and active psychological support.",
                "Our services focus on: managing anxiety and depression, stress regulation, family counseling, and building positive coping strategies."
            ],
            "treatments": [
                "Psychiatric & Counseling Offerings",
                "* Clinical Assessments: In-depth evaluations to understand emotional and cognitive health.",
                "* Mind-Body Relaxation: Specialized breathing exercises, meditation, and biofeedback sessions.",
                "* Cognitive Behavioral Guidance: Targeted therapy to build emotional strength and resilience."
            ],
            "approach": [
                "Integrated Holistic Mental Health Care",
                "Our clinical model pairs scientific psychological counseling with traditional Ayurvedic Shirodhara and herbal wellness formulations to lower cortisol levels and calm the nervous system."
            ],
            "benefits": [
                "Clinical Benefits of Psychological Support",
                "* Reduced anxiety, stress, and mental fatigue",
                "* Enhanced motivation and focus on recovery",
                "* Improved sleep quality and overall vitality"
            ]
        }
    },
    "Respiratory Therapy": {
        "subtitle": "Advanced Cardiopulmonary Rehabilitation & Airway Care",
        "sections": {
            "intro": [
                "Our Respiratory Therapy program is dedicated to restoring lung volumes, improving breathing mechanics, and enhancing oxygenation for patients recovering from severe illness.",
                "Using specialized breathing exercises and advanced chest physiotherapy, our therapists help patients rebuild physical endurance and respiratory capacity."
            ],
            "importance": [
                "The Vital Importance of Pulmonary Care",
                "Restoring lung capacity is critical for patients with chronic muscular fatigue, post-covid complications, or limited mobility.",
                "Our focus areas include: clearing airway secretions, strengthening breathing muscles, and optimizing oxygen distribution throughout the body."
            ],
            "treatments": [
                "Pulmonary Rehabilitation Interventions",
                "* Diaphragmatic Breathing Drills: Targeted exercises to maximize lung expansion and efficiency.",
                "* Chest Physiotherapy: Specialized manual techniques to clear airways and reduce congestion.",
                "* Aerobic Conditioning: Monitored low-impact exercise to improve cardiac and lung endurance."
            ],
            "approach": [
                "Integrated Airway Rejuvenation Model",
                "We combine advanced respiratory trainers and chest physiotherapy with traditional Ayurvedic steam sudations and herbal formulations to reduce airway inflammation and boost immunity."
            ],
            "benefits": [
                "Expected Respiratory Benefits",
                "* Increased lung volumes and easier breathing",
                "* Reduced physical fatigue and higher energy levels",
                "* Improved systemic oxygenation and overall health"
            ]
        }
    },
    "Neuro Psychology": {
        "subtitle": "Cognitive Retraining & Neuro-Cognitive Assessment",
        "sections": {
            "intro": [
                "Our Neuropsychology program focuses on diagnosing and treating cognitive, behavioral, and emotional challenges resulting from brain injury, stroke, or neurological conditions.",
                "We design personalized cognitive retraining modules to help patients rebuild memory, attention, and executive functions."
            ],
            "importance": [
                "Rebuilding Cognitive Pathways Post-Trauma",
                "Physical recovery must be matched by cognitive restoration to ensure full integration into daily life.",
                "We target: memory enhancement, attention span retraining, spatial reasoning, and emotional regulation."
            ],
            "treatments": [
                "Neuro-Cognitive Interventions We Offer",
                "* Cognitive Retraining Exercises: Interactive computer-based and manual exercises to challenge the brain.",
                "* Biofeedback & Relaxation: Training to control physiological responses to stress and anxiety.",
                "* Behavior Management Support: Helping patients and families adapt to behavioral changes post-injury."
            ],
            "approach": [
                "Integrated Cognitive Rebuilding Pathway",
                "We utilize advanced virtual reality (VR) cognitive environments alongside traditional Ayurvedic nerve-nourishing (Medhya) oils to accelerate synaptic plasticity and focus."
            ],
            "benefits": [
                "Expected Cognitive Outcomes",
                "* Enhanced short-term and long-term memory",
                "* Improved concentration and problem-solving skills",
                "* Restored emotional control and self-confidence"
            ]
        }
    },
    "Post-Surgical Complications": {
        "subtitle": "Integrated Post-Operative Ortho-Neuro Rehabilitation",
        "sections": {
            "intro": [
                "Our Post-Surgical Complications recovery program focuses on correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery.",
                "We combine gentle mobilization, physical therapies, and natural swelling-relief applications to ensure a smooth, complete recovery after surgery."
            ],
            "importance": [
                "Preventing Complications After Surgery",
                "Early movement and proper tissue care are essential to prevent scar tissue formation, muscle wasting, and persistent pain.",
                "Our clinical focus includes: restoring joint mobility, reducing surgical edema, and strengthening supporting muscles."
            ],
            "treatments": [
                "Post-Operative Recovery Modalities",
                "* Gentle Joint Mobilization: Guided movements to restore range of motion without straining sutures.",
                "* Ayurvedic Inflammation Control: Herbal paste wraps (Lepanams) to reduce swelling and pain.",
                "* Muscle Loading Protocols: Scientific exercises to rebuild strength around the surgical site."
            ],
            "approach": [
                "Integrated Post-Surgical Healing Pathway",
                "We combine evidence-based physical therapy and muscle activation with traditional Ayurvedic oil therapies and herbal wraps to accelerate tissue repair and joint lubrication."
            ],
            "benefits": [
                "Clinical Benefits of Post-Surgical Rehab",
                "* Faster tissue healing and swelling reduction",
                "* Restored joint flexibility and range of motion",
                "* Safe, supervised return to daily physical activity"
            ]
        }
    }
}

# Define the service lists with their dropdown settings

import re

# Parse content.txt
current_dir = os.path.dirname(os.path.abspath(__file__))
content_path = os.path.join(current_dir, "content.txt")

gdoc_data = {}
if os.path.exists(content_path):
    with open(content_path, "r", encoding="utf-8") as f:
        text = f.read()
    
    # Normalize line endings
    text = text.replace('\r\n', '\n')
    lines = [l.strip().replace('\ufeff', '') for l in text.split('\n')]
    
    # Heading lists in Google Doc order
    gdoc_headings = [
        "Ayurveda", "Physiotherapy", "Robotic Rehabilitation", "Occupational Therapy", "Speech Therapy",
        "Virtual Reality", "Yoga", "Acupuncture", "Reflexology", "Hydro / Aquatic Therapy",
        "Pediatric Physiotherapy", "Slimming Treatment", "Pain Management", "Diet & Nutrition",
        "Counseling", "Dentistry", "Modern Medical management", "Assistive Devices",
        "Stroke", "Spinal Cord Injury", "Traumatic Brain Injury", "Hemiplegia",
        "Quadriplegia & Paraplegia", "Motor Neuron Diseases", "Cerebral Palsy", "Parkinson's Disease",
        "Myopathy", "Disc & Spine Problems", "Sciatica", "Obesity", "Post Covid Problems",
        "Muscular Dystrophy", "Osteoarthritis", "Rheumatoid Arthritis", "Developmental Delay",
        "Psychological Problems", "Neurology", "Neurosurgery", "Orthopedic", "ENT",
        "General medicine", "Urology", "Cardiology"
    ]
    
    # Find indices of headings in content.txt
    heading_indices = []
    current_idx = 0
    for heading in gdoc_headings:
        for i in range(current_idx, len(lines)):
            if lines[i] == heading:
                heading_indices.append((heading, i))
                current_idx = i + 1
                break
                
    # Parse each page's sections
    for idx, (heading, line_idx) in enumerate(heading_indices):
        start = line_idx
        end = heading_indices[idx+1][1] if idx + 1 < len(heading_indices) else len(lines)
        page_lines = lines[start:end]
        
        title = page_lines[0]
        subtitle = ""
        start_content_idx = 1
        for i, line in enumerate(page_lines[1:]):
            if line:
                subtitle = line
                start_content_idx = i + 2
                break
                
        sections = {
            "intro": [],
            "importance": [],
            "approach": [],
            "treatments": [],
            "benefits": [],
            "why_choose": []
        }
        current_sec = "intro"
        
        for line in page_lines[start_content_idx:]:
            if not line:
                continue
            
            lower_line = line.lower()
            is_heading = False
            detected_sec = None
            
            # Heading heuristic matching test_refined_parser
            if len(line) < 80 and not line.startswith(('*', '-', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')):
                if "importance" in lower_line or ("how " in lower_line and "support" in lower_line):
                    is_heading = True
                    detected_sec = "importance"
                elif "approach" in lower_line or "integration" in lower_line or "integrated" in lower_line or "multidisciplinary care" in lower_line:
                    is_heading = True
                    detected_sec = "approach"
                elif "treatment" in lower_line or "therapy" in lower_line or "therapies" in lower_line or "services" in lower_line or "procedures" in lower_line or "devices" in lower_line or "approaches" in lower_line:
                    is_heading = True
                    detected_sec = "treatments"
                elif "benefit" in lower_line or "applications" in lower_line or "indications" in lower_line:
                    is_heading = True
                    detected_sec = "benefits"
                elif "why choose" in lower_line:
                    is_heading = True
                    detected_sec = "why_choose"
                    
            if is_heading and detected_sec:
                current_sec = detected_sec
                sections[current_sec].append(line)
            else:
                sections[current_sec].append(line)
                
        gdoc_data[heading] = {
            "title": title,
            "subtitle": subtitle,
            "sections": sections
        }

gdoc_mapping = {
    # Therapies
    "Stroke": "Stroke",
    "Spinal Cord Injury": "Spinal Cord Injury",
    "Traumatic Brain Injury": "Traumatic Brain Injury",
    "Hemiplegia": "Hemiplegia",
    "Quadriplegia & Paraplegia": "Quadriplegia & Paraplegia",
    "Motor Neuron Diseases": "Motor Neuron Diseases",
    "Cerebral Palsy": "Cerebral Palsy",
    "Parkinson's Disease": "Parkinson's Disease",
    "Myopathy": "Myopathy",
    "Disc & Spine Problems": "Disc & Spine Problems",
    "Sciatica": "Sciatica",
    "Obesity": "Obesity",
    "Post-Covid Complications": "Post Covid Problems",
    "Muscular Dystrophy": "Muscular Dystrophy",
    "Osteoarthritis": "Osteoarthritis",
    "Rheumatoid Arthritis": "Rheumatoid Arthritis",
    "Developmental Delay": "Developmental Delay",
    "Psychological Problems": "Psychological Problems",
    
    # Departments
    "Ayurveda": "Ayurveda",
    "Physiotherapy": "Physiotherapy",
    "Robotic Rehabilitation": "Robotic Rehabilitation",
    "Occupational Therapy": "Occupational Therapy",
    "Speech Therapy": "Speech Therapy",
    "Virtual Reality": "Virtual Reality",
    "Yoga and Meditation": "Yoga",
    "Acupuncture": "Acupuncture",
    "Reflexology": "Reflexology",
    "Hydro / Aquatic Therapy": "Hydro / Aquatic Therapy",
    "Pediatrics": "Pediatric Physiotherapy",
    "Slimming Treatment": "Slimming Treatment",
    "Pain Management": "Pain Management",
    "Diet & Nutrition": "Diet & Nutrition",
    "Counseling": "Counseling",
    "Dentistry": "Dentistry",
    "Modern Medicine": "Modern Medical management",
    "Assistive Devices": "Assistive Devices",
    
    # Specializations
    "Neurology": "Neurology",
    "Neurosurgery": "Neurosurgery",
    "Orthopedic": "Orthopedic",
    "ENT": "ENT",
    "General Medicine": "General medicine",
    "Urology": "Urology",
    "Cardiology": "Cardiology"
}

fallbacks = {
    "Autism": {
        "subtitle": "Pediatric Sensory & Neuromotor Rehabilitation",
        "sections": {
            "intro": [
                "At Ayurgreen Hospital, our Autism program offers specialized neurodevelopmental support, sensory integration, and motor coordination therapies to help children achieve active life milestones.",
                "We design personalized physical and cognitive stimulation protocols in a warm, welcoming environment to foster developmental progress, motor learning, and emotional growth."
            ],
            "importance": [
                "How Sensory Integration Supports Autism Care",
                "Children facing developmental milestones or sensory processing difficulties benefit from structured neuro-physical stimulation.",
                "Our therapies target: sensory overload reduction, fine motor grip control, eye-hand coordination, balance, and spatial awareness."
            ],
            "treatments": [
                "Specialized Autism Interventions Offered",
                "* Sensory Integration Therapy: Dynamic tactile and vestibular training in specialized pediatric gyms.",
                "* Motor Coordination Exercises: Guided physical activities to improve gait, stability, and posture.",
                "* ADL & Task-Specific Training: Empowering children to perform everyday self-care tasks independently."
            ],
            "approach": [
                "Integrated Innovation in Pediatric Care",
                "We combine advanced sensory integration setups with traditional Ayurvedic organic oil applications (where recommended by our clinical scholars) to nourish nerve pathways and calm sensory hyperactivity."
            ],
            "benefits": [
                "Developmental Benefits of the Program",
                "* Improved sensory regulation and calm focus",
                "* Enhanced motor planning and coordination",
                "* Increased independence in daily self-care tasks"
            ]
        }
    },
    "Psychiatry": {
        "subtitle": "Comprehensive Mental Health & Clinical Psychology Services",
        "sections": {
            "intro": [
                "Ayurgreen Hospital provides integrated clinical psychiatric support, wellness counseling, and stress-reduction protocols for patients navigating mental health challenges.",
                "We believe that physical recovery and mental peace go hand-in-hand. Our scholars and psychologists work closely with families to offer holistic cognitive support."
            ],
            "importance": [
                "The Role of Mental Health in Rehabilitation",
                "Recovering from chronic illness, nerve damage, or trauma requires emotional resilience and active psychological support.",
                "Our services focus on: managing anxiety and depression, stress regulation, family counseling, and building positive coping strategies."
            ],
            "treatments": [
                "Psychiatric & Counseling Offerings",
                "* Clinical Assessments: In-depth evaluations to understand emotional and cognitive health.",
                "* Mind-Body Relaxation: Specialized breathing exercises, meditation, and biofeedback sessions.",
                "* Cognitive Behavioral Guidance: Targeted therapy to build emotional strength and resilience."
            ],
            "approach": [
                "Integrated Holistic Mental Health Care",
                "Our clinical model pairs scientific psychological counseling with traditional Ayurvedic Shirodhara and herbal wellness formulations to lower cortisol levels and calm the nervous system."
            ],
            "benefits": [
                "Clinical Benefits of Psychological Support",
                "* Reduced anxiety, stress, and mental fatigue",
                "* Enhanced motivation and focus on recovery",
                "* Improved sleep quality and overall vitality"
            ]
        }
    },
    "Respiratory Therapy": {
        "subtitle": "Advanced Cardiopulmonary Rehabilitation & Airway Care",
        "sections": {
            "intro": [
                "Our Respiratory Therapy program is dedicated to restoring lung volumes, improving breathing mechanics, and enhancing oxygenation for patients recovering from severe illness.",
                "Using specialized breathing exercises and advanced chest physiotherapy, our therapists help patients rebuild physical endurance and respiratory capacity."
            ],
            "importance": [
                "The Vital Importance of Pulmonary Care",
                "Restoring lung capacity is critical for patients with chronic muscular fatigue, post-covid complications, or limited mobility.",
                "Our focus areas include: clearing airway secretions, strengthening breathing muscles, and optimizing oxygen distribution throughout the body."
            ],
            "treatments": [
                "Pulmonary Rehabilitation Interventions",
                "* Diaphragmatic Breathing Drills: Targeted exercises to maximize lung expansion and efficiency.",
                "* Chest Physiotherapy: Specialized manual techniques to clear airways and reduce congestion.",
                "* Aerobic Conditioning: Monitored low-impact exercise to improve cardiac and lung endurance."
            ],
            "approach": [
                "Integrated Airway Rejuvenation Model",
                "We combine advanced respiratory trainers and chest physiotherapy with traditional Ayurvedic steam sudations and herbal formulations to reduce airway inflammation and boost immunity."
            ],
            "benefits": [
                "Expected Respiratory Benefits",
                "* Increased lung volumes and easier breathing",
                "* Reduced physical fatigue and higher energy levels",
                "* Improved systemic oxygenation and overall health"
            ]
        }
    },
    "Neuro Psychology": {
        "subtitle": "Cognitive Retraining & Neuro-Cognitive Assessment",
        "sections": {
            "intro": [
                "Our Neuropsychology program focuses on diagnosing and treating cognitive, behavioral, and emotional challenges resulting from brain injury, stroke, or neurological conditions.",
                "We design personalized cognitive retraining modules to help patients rebuild memory, attention, and executive functions."
            ],
            "importance": [
                "Rebuilding Cognitive Pathways Post-Trauma",
                "Physical recovery must be matched by cognitive restoration to ensure full integration into daily life.",
                "We target: memory enhancement, attention span retraining, spatial reasoning, and emotional regulation."
            ],
            "treatments": [
                "Neuro-Cognitive Interventions We Offer",
                "* Cognitive Retraining Exercises: Interactive computer-based and manual exercises to challenge the brain.",
                "* Biofeedback & Relaxation: Training to control physiological responses to stress and anxiety.",
                "* Behavior Management Support: Helping patients and families adapt to behavioral changes post-injury."
            ],
            "approach": [
                "Integrated Cognitive Rebuilding Pathway",
                "We utilize advanced virtual reality (VR) cognitive environments alongside traditional Ayurvedic nerve-nourishing (Medhya) oils to accelerate synaptic plasticity and focus."
            ],
            "benefits": [
                "Expected Cognitive Outcomes",
                "* Enhanced short-term and long-term memory",
                "* Improved concentration and problem-solving skills",
                "* Restored emotional control and self-confidence"
            ]
        }
    },
    "Post-Surgical Complications": {
        "subtitle": "Integrated Post-Operative Ortho-Neuro Rehabilitation",
        "sections": {
            "intro": [
                "Our Post-Surgical Complications recovery program focuses on correcting joint stiffness, relieving nerve impingements, and speeding tissue healing after orthopedic or neurosurgery.",
                "We combine gentle mobilization, physical therapies, and natural swelling-relief applications to ensure a smooth, complete recovery after surgery."
            ],
            "importance": [
                "Preventing Complications After Surgery",
                "Early movement and proper tissue care are essential to prevent scar tissue formation, muscle wasting, and persistent pain.",
                "Our clinical focus includes: restoring joint mobility, reducing surgical edema, and strengthening supporting muscles."
            ],
            "treatments": [
                "Post-Operative Recovery Modalities",
                "* Gentle Joint Mobilization: Guided movements to restore range of motion without straining sutures.",
                "* Ayurvedic Inflammation Control: Herbal paste wraps (Lepanams) to reduce swelling and pain.",
                "* Muscle Loading Protocols: Scientific exercises to rebuild strength around the surgical site."
            ],
            "approach": [
                "Integrated Post-Surgical Healing Pathway",
                "We combine evidence-based physical therapy and muscle activation with traditional Ayurvedic oil therapies and herbal wraps to accelerate tissue repair and joint lubrication."
            ],
            "benefits": [
                "Clinical Benefits of Post-Surgical Rehab",
                "* Faster tissue healing and swelling reduction",
                "* Restored joint flexibility and range of motion",
                "* Safe, supervised return to daily physical activity"
            ]
        }
    }
}


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
    sec_idx = html_content.find("<div class=\"ayur-section")
    if sec_idx == -1:
        sec_idx = html_content.find("<section")
    
    if sec_idx == -1:
        return html_content
        
    banner_part = html_content[:sec_idx]
    body_part = html_content[sec_idx:]
    
    body_part = body_part.strip()
    if body_part.endswith("</main>"):
        body_part = body_part[:-7]
    elif body_part.endswith("</main>\"\"\""):
        body_part = body_part[:-10]
        
    # Generate sidebar links
    sidebar_items_html = ""
    for sib in siblings:
        active_class = "active" if sib["filename"] == current_filename else ""
        sidebar_items_html += f"""
                <a href="{sib["filename"]}" class="ayur-qdept-link {active_class}"><i data-lucide="{sib["icon"]}" size="14" style="color: {sib["color"]};"></i>{sib["name"]}</a>"""
                
    sidebar_html = f"""
        <style>
            /* PAGE BODY — full width, same 16px outer gutter as banner wrapper */
            .ayur-page-body {{
                width: 100%;
                padding: 0 16px 80px 16px;
                display: grid;
                grid-template-columns: 280px 1fr;
                gap: 24px;
                align-items: start;
                box-sizing: border-box;
                background: #ffffff;
            }}
            @media (max-width: 1024px) {{
                .ayur-page-body {{ grid-template-columns: 240px 1fr; }}
            }}
            @media (max-width: 768px) {{
                .ayur-page-body {{ grid-template-columns: 1fr; padding: 0 12px 80px; }}
            }}

            /* SIDEBAR */
            .ayur-qdept-sidebar {{
                position: sticky;
                top: 96px;
                background: rgba(0, 0, 0, 0.8) !important;
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
            }}
            .ayur-qdept-sidebar::-webkit-scrollbar {{ width: 3px; }}
            .ayur-qdept-sidebar::-webkit-scrollbar-thumb {{ background: rgba(255,255,255,0.15); border-radius: 2px; }}
            .ayur-qdept-title {{
                font-family: 'Inter', sans-serif;
                font-size: 10.5px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.18em;
                color: rgba(255,255,255,0.4);
                padding: 2px 14px 10px;
                margin-bottom: 4px;
                border-bottom: 1px solid rgba(255,255,255,0.08);
            }}
            .ayur-qdept-link {{
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
            }}
            .ayur-qdept-link:hover,
            .ayur-qdept-link.active {{
                background: rgba(255, 255, 255, 0.15) !important;
                border-color: rgba(255, 255, 255, 0.25) !important;
                color: #fff !important;
            }}
            .ayur-qdept-link svg {{
                width: 28px !important;
                height: 28px !important;
                padding: 7px !important;
                background: transparent !important;
                border-radius: 50% !important;
                box-sizing: border-box !important;
                transition: all 0.25s ease !important;
                flex-shrink: 0 !important;
            }}
            .ayur-qdept-link:hover svg,
            .ayur-qdept-link.active svg {{
                background: #ffffff !important;
                padding: 6px !important;
            }}
            @media (max-width: 768px) {{
                .ayur-qdept-sidebar {{
                    position: relative !important;
                    top: 0 !important;
                    display: flex !important;
                    flex-direction: row !important;
                    flex-wrap: wrap !important;
                    max-height: none !important;
                    border-radius: 24px !important;
                    margin-top: 16px;
                }}
                .ayur-qdept-title {{ width: 100%; }}
                .ayur-qdept-link {{ font-size: 12.5px !important; }}
            }}

            /* CONTENT COLUMN */
            .ayur-content-col {{
                display: flex;
                flex-direction: column;
                gap: 0;
                padding-top: 24px;
            }}
        </style>
        <!-- Mobile Sidebar Toggle -->
        <div class="ayur-container" style="margin-top: 24px; margin-bottom: 0;">
            <button class="mobile-sidebar-toggle" onclick="document.querySelector('.ayur-qdept-sidebar').classList.add('open'); document.querySelector('.sidebar-overlay').classList.add('open');">
                <i data-lucide="menu" size="18"></i>
                <span>Explore {category_name}</span>
            </button>
        </div>
        
        <div class="sidebar-overlay" onclick="document.querySelector('.ayur-qdept-sidebar').classList.remove('open'); this.classList.remove('open');"></div>
        
        <div class="ayur-container ayur-sidebar-container" style="padding: 40px 24px 80px 24px; box-sizing: border-box; width: 100%;">
            <div class="ayur-page-body">
                <!-- QUICK ACCESS SIDEBAR -->
                <aside class="ayur-qdept-sidebar">
                    <div class="ayur-qdept-title">{category_name}</div>
                    {sidebar_items_html}
                </aside>
                
                <!-- CONTENT SECTIONS -->
                <div class="ayur-content-col">
                    {body_part}
                </div>
            </div>
        </div>
        
        <!-- Sticky Bottom CTA for Mobile -->
        <div class="ayur-sticky-bottom-cta">
            <div class="ayur-sticky-bottom-cta-grid">
                <a href="tel:+918080808080" class="ayur-bottom-cta-btn">
                    <i data-lucide="phone" size="18"></i>
                    <span>Call Us</span>
                </a>
                <a href="https://wa.me/918080808080" target="_blank" class="ayur-bottom-cta-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color: #25D366; display: inline-block; vertical-align: middle;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                    <span>WhatsApp</span>
                </a>
                <a href="index.html#consultation" class="ayur-bottom-cta-btn primary">
                    <i data-lucide="calendar" size="18"></i>
                    <span>Book Now</span>
                </a>
            </div>
        </div>
    </main>
    """
    return banner_part + sidebar_html

def generate_service_html(svc, category_name, siblings):
    name = svc["name"]
    filename = svc["filename"]
    banner_img = svc.get("banner_img", "Assets/Hospital View.webp")
    intro_img = svc.get("intro_img", "Assets/Hospital View.webp")
    
    gdoc_key = gdoc_mapping.get(name)
    if gdoc_key and gdoc_key in gdoc_data:
        page_data = gdoc_data[gdoc_key]
        subtitle = page_data["subtitle"]
        sections_data = page_data["sections"]
    elif name in fallbacks:
        page_data = fallbacks[name]
        subtitle = page_data["subtitle"]
        sections_data = page_data["sections"]
    else:
        subtitle = svc.get("desc", f"Comprehensive clinical care and integrated rehabilitation for {name}.")
        sections_data = {
            "intro": [f"At Ayurgreen Hospital, we provide an integrated rehabilitation approach for {name} designed to maximize functional recovery and systemic rejuvenation."],
            "importance": [],
            "approach": [],
            "treatments": [],
            "benefits": [],
            "why_choose": []
        }
        
    def format_paragraphs(lines_list):
        paragraphs = []
        for line in lines_list:
            if line.startswith(('*', '-', '•', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')):
                continue
            paragraphs.append(f"<p>{line}</p>")
        return "\n".join(paragraphs)

    intro_paragraphs = format_paragraphs(sections_data.get("intro", []))
    sec1_html = f"""
                    <div class="ayur-section">
                        <span class="ayur-sec-label">Overview</span>
                        <h2 class="ayur-sec-title">{name} at Ayurgreen Hospital</h2>
                        <div class="ayur-intro-grid">
                            <div class="ayur-sec-body">
                                {intro_paragraphs}
                            </div>
                            <img src="{intro_img}" alt="{name} treatment at Ayurgreen Hospital" class="ayur-intro-grid-img">
                        </div>
                    </div>"""
                    
    sec2_html = ""
    imp_lines = sections_data.get("importance", [])
    if imp_lines:
        sec2_title = imp_lines[0]
        sec2_body_lines = imp_lines[1:]
        
        bullets = []
        paragraphs = []
        for line in sec2_body_lines:
            if line.startswith(('*', '-', '•')):
                bullets.append(re.sub(r'^[\*\-\u2022]\s*', '', line).strip())
            else:
                paragraphs.append(line)
                
        body_p_html = format_paragraphs(paragraphs)
        bullets_html = ""
        if bullets:
            bullets_html = '<ul class="ayur-list">' + "\n".join(f"<li>{b}</li>" for b in bullets) + '</ul>'
            
        sec2_img = "Assets/generated/physiotherapy_session.png"
        if filename in ["stroke-rehab.html", "hemiplegia.html", "quadriplegia-paraplegia.html"]:
            sec2_img = "Assets/rehab/prog_stroke.webp"
        elif filename in ["spinal-cord-injury.html", "disc-spine-problems.html", "sciatica.html", "osteoarthritis.html", "rheumatoid-arthritis.html"]:
            sec2_img = "Assets/rehab/prog_spinal_cord.webp"
        elif filename in ["parkinsons-disease.html", "motor-neuron-diseases.html", "myopathy.html", "muscular-dystrophy.html"]:
            sec2_img = "Assets/rehab/prog_parkinsons.webp"
        elif filename in ["cerebral-palsy.html", "pediatrics.html", "developmental-delay.html"]:
            sec2_img = "Assets/rehab/prog_cerebral_palsy.webp"
            
        sec2_html = f"""
                    <div class="ayur-section">
                        <span class="ayur-sec-label">Clinical Focus</span>
                        <h2 class="ayur-sec-title">{sec2_title}</h2>
                        <div class="ayur-intro-grid">
                            <img src="{sec2_img}" alt="{name} support at Ayurgreen Hospital" class="ayur-intro-grid-img" style="order: -1;">
                            <div>
                                <div class="ayur-sec-body">
                                    {body_p_html}
                                </div>
                                {bullets_html}
                            </div>
                        </div>
                    </div>"""
                    
    sec3_html = ""
    treat_lines = sections_data.get("treatments", [])
    if treat_lines:
        sec3_title = treat_lines[0]
        intro_p = []
        cards = []
        current_card = None
        
        for line in treat_lines[1:]:
            match = re.match(r'^(\d+[\.\)]|[\*\-\u2022])\s*(.*)', line)
            if match:
                if current_card:
                    cards.append(current_card)
                card_content = match.group(2).strip()
                if ":" in card_content:
                    card_title, card_desc = card_content.split(":", 1)
                    current_card = {"title": card_title.strip(), "desc": card_desc.strip()}
                else:
                    current_card = {"title": card_content, "desc": ""}
            else:
                if current_card:
                    if not current_card["desc"]:
                        current_card["desc"] = line
                    else:
                        current_card["desc"] += " " + line
                else:
                    intro_p.append(line)
        if current_card:
            cards.append(current_card)
            
        intro_p_html = format_paragraphs(intro_p)
        
        card_imgs = [
            "Assets/rehab/th_panchakarma.webp",
            "Assets/rehab/th_abhyanga.webp",
            "Assets/rehab/th_njavara.webp",
            "Assets/rehab/th_shirodhara.webp",
            "Assets/rehab/th_pizhichil.webp",
            "Assets/rehab/th_physiotherapy.webp",
            "Assets/rehab/th_robotic.webp",
            "Assets/rehab/th_ot.webp",
            "Assets/rehab/th_speech.webp",
            "Assets/rehab/th_vr.webp"
        ]
        
        cards_html = ""
        for card_idx, card in enumerate(cards):
            num_str = f"{card_idx+1:02d}"
            img_path = card_imgs[card_idx % len(card_imgs)]
            card_title = card["title"]
            card_desc = card["desc"]
            
            is_last = (card_idx == len(cards) - 1)
            is_odd_total = (len(cards) % 2 != 0)
            
            if is_last and is_odd_total:
                cards_html += f"""
                        <div class="ayur-therapy-card" style="grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr;">
                            <img src="{img_path}" alt="{card_title}" class="ayur-therapy-card-img" style="height: 100%; border-radius: 0;">
                            <div class="ayur-therapy-card-body" style="padding: 28px 28px;">
                                <div class="ayur-therapy-num">{num_str}</div>
                                <div class="ayur-therapy-name" style="font-size: 18px;">{card_title}</div>
                                <div class="ayur-therapy-desc" style="font-size: 14.5px; line-height: 1.65;">{card_desc}</div>
                            </div>
                        </div>"""
            else:
                cards_html += f"""
                        <div class="ayur-therapy-card">
                            <img src="{img_path}" alt="{card_title}" class="ayur-therapy-card-img">
                            <div class="ayur-therapy-card-body">
                                <div class="ayur-therapy-num">{num_str}</div>
                                <div class="ayur-therapy-name">{card_title}</div>
                                <div class="ayur-therapy-desc">{card_desc}</div>
                            </div>
                        </div>"""
                        
        sec3_html = f"""
                    <div class="ayur-section">
                        <span class="ayur-sec-label">Therapy Modules</span>
                        <h2 class="ayur-sec-title">{sec3_title}</h2>
                        {intro_p_html}
                        <div class="ayur-therapy-grid">
                            {cards_html}
                        </div>
                    </div>"""
                    
    sec4_html = ""
    app_lines = sections_data.get("approach", [])
    if app_lines:
        sec4_title = app_lines[0]
        intro_lines = []
        pills = []
        outro_lines = []
        state = "intro"
        
        for line in app_lines[1:]:
            if line.startswith(('*', '-', '•')):
                state = "pills"
                pills.append(re.sub(r'^[\*\-\u2022]\s*', '', line).strip())
            else:
                if state == "pills":
                    state = "outro"
                if state == "intro":
                    intro_lines.append(line)
                else:
                    outro_lines.append(line)
                    
        intro_p_html = format_paragraphs(intro_lines)
        outro_p_html = format_paragraphs(outro_lines)
        
        def get_pill_icon(pill_text):
            text_lower = pill_text.lower()
            if "robotic" in text_lower or "robot" in text_lower:
                return "bot"
            elif "physio" in text_lower or "occupational" in text_lower or "exercise" in text_lower or "fitness" in text_lower:
                return "dumbbell"
            elif "speech" in text_lower or "language" in text_lower or "swallow" in text_lower:
                return "message-circle"
            elif "psych" in text_lower or "counsel" in text_lower or "mental" in text_lower or "emotional" in text_lower or "behavior" in text_lower:
                return "heart-handshake"
            elif "vr" in text_lower or "virtual" in text_lower:
                return "headset"
            elif "yoga" in text_lower or "meditat" in text_lower:
                return "sun"
            else:
                return "activity"
                
        pills_html = ""
        for pill in pills:
            icon = get_pill_icon(pill)
            pills_html += f"""
                            <span class="ayur-pill"><i data-lucide="{icon}" size="14"></i>{pill}</span>"""
                            
        sec4_html = f"""
                    <div class="ayur-section dark-bg">
                        <span class="ayur-sec-label">Integrated Innovation</span>
                        <h2 class="ayur-sec-title">{sec4_title}</h2>
                        <div class="ayur-sec-body">
                            {intro_p_html}
                        </div>
                        <div class="ayur-integration-pills">
                            {pills_html}
                        </div>
                        <div class="ayur-sec-body" style="margin-top: 24px;">
                            {outro_p_html}
                        </div>
                        <img src="Assets/rehab/th_robotic.webp" alt="Integrated rehabilitation technology at Ayurgreen Hospital" style="width:100%; border-radius:20px; object-fit:cover; height:240px; margin-top:28px; display:block;">
                    </div>"""
                    
    sec5_html = ""
    ben_lines = sections_data.get("benefits", [])
    if ben_lines:
        title_5 = ben_lines[0]
        intro_lines = []
        columns = []
        current_col = None
        
        for line in ben_lines[1:]:
            if line.startswith(('*', '-', '•')):
                bullet_text = re.sub(r'^[\*\-\u2022]\s*', '', line).strip()
                if current_col:
                    current_col["bullets"].append(bullet_text)
                else:
                    intro_lines.append(line)
            elif len(line) < 40 and not line.endswith('.'):
                if current_col:
                    columns.append(current_col)
                current_col = {"title": line, "bullets": []}
            else:
                if current_col:
                    current_col["bullets"].append(line)
                else:
                    intro_lines.append(line)
        if current_col:
            columns.append(current_col)
            
        if not columns:
            bullets = []
            paragraphs = []
            for line in intro_lines:
                if line.startswith(('*', '-', '•')):
                    bullets.append(re.sub(r'^[\*\-\u2022]\s*', '', line).strip())
                else:
                    paragraphs.append(line)
            if bullets:
                columns.append({"title": "Clinical Outcomes", "bullets": bullets})
                intro_p_html = format_paragraphs(paragraphs)
            else:
                intro_p_html = format_paragraphs(intro_lines)
        else:
            intro_p_html = format_paragraphs(intro_lines)
            
        col_html = ""
        for col in columns[:3]:
            bullets_html = ""
            for b in col["bullets"]:
                bullets_html += f"<li>{b}</li>\n"
            style_str = ' style="grid-column: 1 / -1;"' if len(columns) == 1 else ''
            col_html += f"""
                        <div class="ayur-benefit-col"{style_str}>
                            <div class="ayur-benefit-col-title">{col["title"]}</div>
                            <ul class="ayur-list">
                                {bullets_html}
                            </ul>
                        </div>"""
                        
        sec5_html = f"""
                    <div class="ayur-section">
                        <span class="ayur-sec-label">Why It Works</span>
                        <h2 class="ayur-sec-title">{title_5}</h2>
                        {intro_p_html}
                        <div class="ayur-benefits-grid">
                            {col_html}
                        </div>
                    </div>"""
                    
    why_lines = [l.strip() for l in sections_data.get("why_choose", []) if l.strip()]
    why_choose_intro = ""
    if why_lines:
        why_choose_intro = format_paragraphs(why_lines[1:])
    else:
        why_choose_intro = f"<p>Ayurgreen stands out as a leader in integrated neuro and orthopedic rehabilitation because of its unique care model:</p>"
        
    sec6_html = f"""
                    <div class="ayur-section">
                        <span class="ayur-sec-label">The Benchmark</span>
                        <h2 class="ayur-sec-title">Why Choose Ayurgreen Hospital?</h2>
                        <div class="ayur-sec-body">
                            {why_choose_intro}
                        </div>
                        <ul class="ayur-why-list">
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="award" size="16"></i></div>
                                <div class="ayur-why-text"><strong>25+ Years of Clinical Expertise</strong>Over two decades of clinical experience in neuro rehabilitation, managing complex neurological impairments.</div>
                            </li>
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="bot" size="16"></i></div>
                                <div class="ayur-why-text"><strong>India's First Robotic-Integrated Center</strong>Pioneer in combining advanced sensory-robotic trainers with traditional Kerala Ayurvedic cellular therapies.</div>
                            </li>
                            <li class="ayur-why-item">
                                <div class="ayur-why-icon"><i data-lucide="clipboard-list" size="16"></i></div>
                                <div class="ayur-why-text"><strong>Personalized Treatment Plans</strong>Every plan uniquely combines advanced robotics and authentic Ayurveda to match the patient's specific recovery needs.</div>
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
                    </div>"""
                    
    sec7_html = f"""
                    <div class="ayur-cta-section">
                        <h2 class="ayur-cta-title">Start Your Recovery Journey Today</h2>
                        <p class="ayur-cta-desc">Consult with our integrated clinical panel and Ayurvedic scholars to design a custom pathway.</p>
                        <div class="ayur-cta-buttons">
                            <a href="index.html#consultation" class="ayur-btn-primary">Book Consultation <i data-lucide="calendar" size="16"></i></a>
                            <a href="https://wa.me/918080808080" target="_blank" class="ayur-btn-ghost">WhatsApp <i data-lucide="message-square" size="16"></i></a>
                            <a href="tel:+918080808080" class="ayur-btn-ghost">Call Now <i data-lucide="phone" size="16"></i></a>
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

            .ayur-page-main h1, 
            .ayur-page-main h2, 
            .ayur-page-main h3, 
            .ayur-page-main h4 {{
                font-family: 'Plus Jakarta Sans', sans-serif;
                color: var(--heading);
                letter-spacing: -0.02em;
            }}
            
            .ayur-banner-container {{
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                box-sizing: border-box;
                width: 100%;
            }}

            .ayur-container {{
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                box-sizing: border-box;
                width: 100%;
            }}

            /* HERO BANNER SECTION */
            .ayur-hero {{
                position: relative;
                width: 100%;
                height: 480px;
                background-color: var(--dark-navy);
                overflow: hidden;
                display: flex;
                align-items: center;
            }}
            .ayur-hero-bg {{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0.35;
                z-index: 1;
            }}
            .ayur-hero-overlay {{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, rgba(2, 12, 34, 0.95) 0%, rgba(2, 12, 34, 0.8) 50%, rgba(2, 12, 34, 0.2) 100%);
                z-index: 2;
            }}
            .ayur-hero-content-wrapper {{
                position: relative;
                z-index: 3;
                width: 100%;
            }}
            .ayur-hero-badge {{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(43, 196, 109, 0.15);
                border: 1px solid rgba(43, 196, 109, 0.3);
                padding: 8px 16px;
                border-radius: 100px;
                color: #4CAF50;
                font-size: 13.5px;
                font-weight: 600;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                margin-bottom: 24px;
            }}
            .ayur-hero-title {{
                font-size: 56px;
                font-weight: 800;
                color: #ffffff;
                line-height: 1.1;
                margin-bottom: 24px;
                max-width: 700px;
            }}
            .ayur-hero-desc {{
                font-size: 18px;
                color: rgba(255, 255, 255, 0.85);
                max-width: 600px;
                line-height: 1.6;
            }}
            @media (max-width: 768px) {{
                .ayur-hero {{ height: 420px; }}
                .ayur-hero-title {{ font-size: 36px; }}
                .ayur-hero-desc {{ font-size: 16px; }}
            }}

            /* SECTIONS & TYPOGRAPHY */
            .ayur-section {{
                padding: 48px;
                border: 1px solid var(--border);
                border-radius: 36px;
                margin-bottom: 24px;
                background-color: var(--pure-white);
            }}
            .ayur-section.dark-bg {{
                background-color: var(--dark-navy);
                border-color: var(--dark-navy);
                color: #ffffff;
            }}
            @media (max-width: 768px) {{
                .ayur-section {{ padding: 32px 24px; border-radius: 28px; }}
            }}
            .ayur-sec-label {{
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.15em;
                color: var(--primary-green);
                display: inline-block;
                margin-bottom: 12px;
            }}
            .ayur-sec-title {{
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 32px;
                color: var(--heading);
                line-height: 1.25;
            }}
            .ayur-section.dark-bg .ayur-sec-title {{
                color: #ffffff;
            }}
            @media (max-width: 768px) {{
                .ayur-sec-title {{ font-size: 26px; margin-bottom: 24px; }}
            }}
            
            .ayur-sec-body p {{
                font-size: 16px;
                line-height: 1.7;
                color: var(--body-text);
                margin-bottom: 20px;
            }}
            .ayur-section.dark-bg .ayur-sec-body p {{
                color: rgba(255, 255, 255, 0.8);
            }}
            
            .ayur-intro-grid {{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                align-items: center;
            }}
            @media (max-width: 992px) {{
                .ayur-intro-grid {{ grid-template-columns: 1fr; gap: 24px; }}
            }}
            .ayur-intro-grid-img {{
                width: 100%;
                height: auto;
                border-radius: 24px;
                object-fit: cover;
                max-height: 380px;
                border: 1px solid var(--border);
            }}

            /* LISTS */
            .ayur-list {{
                list-style: none;
                padding: 0;
                margin: 0 0 24px 0;
            }}
            .ayur-list li {{
                position: relative;
                padding-left: 32px;
                margin-bottom: 16px;
                font-size: 16px;
                color: var(--heading);
                font-weight: 500;
            }}
            .ayur-list li::before {{
                content: '';
                position: absolute;
                left: 0;
                top: 6px;
                width: 18px;
                height: 18px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%232BC46D' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/%3E%3Cpolyline points='22 4 12 14.01 9 11.01'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
            }}
            
            /* THERAPY CARDS */
            .ayur-therapy-grid {{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-top: 32px;
            }}
            @media (max-width: 768px) {{
                .ayur-therapy-grid {{ grid-template-columns: 1fr; }}
            }}
            .ayur-therapy-card {{
                display: flex;
                flex-direction: column;
                background: #F8FAFC;
                border-radius: 24px;
                border: 1px solid var(--border);
                overflow: hidden;
                transition: all 0.3s ease;
            }}
            .ayur-therapy-card:hover {{
                transform: translateY(-4px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
                border-color: rgba(43, 196, 109, 0.3);
            }}
            .ayur-therapy-card-img {{
                width: 100%;
                height: 180px;
                object-fit: cover;
            }}
            .ayur-therapy-card-body {{
                padding: 24px;
                flex: 1;
                display: flex;
                flex-direction: column;
            }}
            .ayur-therapy-num {{
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 32px;
                font-weight: 800;
                color: rgba(43, 196, 109, 0.15);
                line-height: 1;
                margin-bottom: 12px;
            }}
            .ayur-therapy-name {{
                font-size: 17px;
                font-weight: 700;
                color: var(--heading);
                margin-bottom: 8px;
            }}
            .ayur-therapy-desc {{
                font-size: 14.5px;
                color: var(--body-text);
                line-height: 1.6;
            }}
            
            /* INTEGRATION PILLS */
            .ayur-integration-pills {{
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                margin-top: 32px;
            }}
            .ayur-pill {{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 10px 18px;
                border-radius: 100px;
                color: #ffffff;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
            }}
            .ayur-pill:hover {{
                background: rgba(43, 196, 109, 0.2);
                border-color: #2BC46D;
            }}

            /* BENEFITS 3 COL */
            .ayur-benefits-grid {{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin-top: 32px;
            }}
            @media (max-width: 860px) {{ .ayur-benefits-grid {{ grid-template-columns: 1fr 1fr; }} }}
            @media (max-width: 520px) {{ .ayur-benefits-grid {{ grid-template-columns: 1fr; }} }}

            .ayur-benefit-col {{
                background: #F8FAFC;
                border: 1px solid var(--border);
                border-radius: 24px;
                padding: 24px;
                transition: all 0.3s ease;
            }}
            .ayur-benefit-col:hover {{
                border-color: rgba(43, 196, 109, 0.3);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
            }}
            .ayur-benefit-col-title {{
                font-size: 13px;
                font-weight: 700;
                color: var(--primary-green);
                text-transform: uppercase;
                letter-spacing: 0.1em;
                margin-bottom: 16px;
                font-family: 'Plus Jakarta Sans', sans-serif;
            }}

            /* WHY LIST */
            .ayur-why-list {{
                list-style: none;
                padding: 0;
                margin: 24px 0 0 0;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }}
            .ayur-why-item {{
                display: flex;
                align-items: flex-start;
                gap: 16px;
                padding: 20px;
                background: #F8FAFC;
                border: 1px solid var(--border);
                border-radius: 20px;
                transition: all 0.3s ease;
            }}
            .ayur-why-item:hover {{
                border-color: rgba(43, 196, 109, 0.3);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
            }}
            .ayur-why-icon {{
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: rgba(43, 196, 109, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary-green);
                flex-shrink: 0;
            }}
            .ayur-why-text {{
                font-size: 15px;
                color: var(--body-text);
                line-height: 1.6;
            }}
            .ayur-why-text strong {{
                color: var(--heading);
                font-weight: 700;
                display: block;
                margin-bottom: 4px;
            }}

            /* CTA BANNER */
            .ayur-cta-section {{
                background: linear-gradient(135deg, #020C22 0%, #0a2240 60%, #0d3321 100%);
                padding: 64px 48px;
                text-align: center;
                border-radius: 36px;
            }}
            .ayur-cta-title {{
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 32px;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 16px;
            }}
            .ayur-cta-desc {{
                font-size: 16px;
                color: rgba(255, 255, 255, 0.8);
                line-height: 1.6;
                margin-bottom: 32px;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }}
            .ayur-cta-buttons {{
                display: flex;
                gap: 16px;
                justify-content: center;
                flex-wrap: wrap;
            }}
            .ayur-btn-primary {{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 14px 28px;
                background: var(--primary-green);
                color: #ffffff;
                border-radius: 100px;
                font-size: 15px;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s ease;
            }}
            .ayur-btn-primary:hover {{
                background: #24b260;
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(43, 196, 109, 0.3);
            }}
            .ayur-btn-ghost {{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 14px 28px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: #ffffff;
                border-radius: 100px;
                font-size: 15px;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s ease;
            }}
            .ayur-btn-ghost:hover {{
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }}

            /* MOBILE STICKY CTA */
            .ayur-sticky-bottom-cta {{
                display: none;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(2, 12, 34, 0.97);
                backdrop-filter: blur(12px);
                border-top: 1px solid rgba(255, 255, 255, 0.12);
                z-index: 1999;
                padding: 10px 20px;
            }}
            .ayur-sticky-bottom-cta-grid {{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
                max-width: 460px;
                margin: 0 auto;
            }}
            .ayur-bottom-cta-btn {{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 3px;
                height: 50px;
                border-radius: 12px;
                font-size: 11px;
                font-weight: 600;
                text-decoration: none;
                color: rgba(255, 255, 255, 0.75);
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.12);
                transition: all 0.2s ease;
                justify-content: center;
            }}
            .ayur-bottom-cta-btn.primary {{
                background: var(--primary-green);
                color: #ffffff;
                border: none;
            }}
            @media (max-width: 768px) {{
                .ayur-sticky-bottom-cta {{ display: block; }}
            }}
        </style>

        <!-- BANNER -->
        <section class="ayur-hero">
            <img src="{banner_img}" alt="{name} Banner" class="ayur-hero-bg">
            <div class="ayur-hero-overlay"></div>
            <div class="ayur-banner-container">
                <div class="ayur-hero-content-wrapper">
                    <div class="ayur-hero-badge"><i data-lucide="shield-check" size="16"></i> {category_name}</div>
                    <h1 class="ayur-hero-title">{name}</h1>
                    <p class="ayur-hero-desc">{subtitle}</p>
                </div>
            </div>
        </section>

        {sec1_html}
        {sec2_html}
        {sec3_html}
        {sec4_html}
        {sec5_html}
        {sec6_html}
        {sec7_html}
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



            /* WHITE SECTION CARD */
            .ayur-section {
                background: #ffffff;
                padding: 52px 40px;
                border-bottom: 1px solid #f0f0f0;
            }
            .ayur-section:last-child { border-bottom: none; }
            @media (max-width: 768px) { .ayur-section { padding: 36px 20px; } }

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
                color: #101828;
                line-height: 1.22;
                letter-spacing: -0.02em;
                margin-bottom: 16px;
            }
            @media (max-width: 768px) { .ayur-sec-title { font-size: 21px; } }

            /* BODY TEXT */
            .ayur-sec-body {
                font-size: 15px;
                line-height: 1.78;
                color: #475467;
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
                color: #344054;
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
                border: 1px solid #eaecf0;
                overflow: hidden;
                transition: box-shadow 0.25s ease, transform 0.25s ease;
                background: #ffffff;
            }
            .ayur-therapy-card:hover {
                box-shadow: 0 8px 24px rgba(0,0,0,0.08);
                transform: translateY(-3px);
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
                color: #101828;
                margin-bottom: 7px;
                font-family: 'Plus Jakarta Sans', sans-serif;
                line-height: 1.3;
            }
            .ayur-therapy-desc {
                font-size: 13.5px;
                color: #475467;
                line-height: 1.58;
            }

            /* INTEGRATION SECTION — dark bg */
            .ayur-section.dark-bg {
                background: #020C22;
            }
            .ayur-section.dark-bg .ayur-sec-title { color: #ffffff; }
            .ayur-section.dark-bg .ayur-sec-body { color: rgba(255,255,255,0.70); }

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
                background: #f8fafc;
                border: 1px solid #eaecf0;
                border-radius: 20px;
                padding: 22px;
                transition: all 0.25s ease;
            }
            .ayur-benefit-col:hover {
                border-color: rgba(43,196,109,0.35);
                box-shadow: 0 4px 16px rgba(43,196,109,0.1);
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
            .ayur-benefit-col .ayur-list li { color: #344054; }

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
                background: #f8fafc;
                border: 1px solid #eaecf0;
                border-radius: 16px;
                transition: all 0.25s ease;
            }
            .ayur-why-item:hover {
                border-color: rgba(43,196,109,0.3);
                box-shadow: 0 4px 14px rgba(43,196,109,0.08);
            }
            .ayur-why-icon {
                width: 34px; height: 34px;
                border-radius: 50%;
                background: rgba(43,196,109,0.12);
                display: flex; align-items: center; justify-content: center;
                color: var(--primary-green);
                flex-shrink: 0;
            }
            .ayur-why-text { font-size: 14px; color: #475467; line-height: 1.58; }
            .ayur-why-text strong { color: #101828; font-weight: 600; display: block; margin-bottom: 2px; }

            /* CTA BANNER */
            .ayur-cta-section {
                background: linear-gradient(135deg, #020C22 0%, #0a2240 60%, #0d3321 100%);
                padding: 56px 40px;
                text-align: center;
                border-radius: 0;
            }
            .ayur-cta-title {
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 28px; font-weight: 700;
                color: #ffffff; margin-bottom: 14px;
            }
            .ayur-cta-desc {
                font-size: 15px; color: rgba(255,255,255,0.72);
                line-height: 1.65; margin-bottom: 32px;
                max-width: 520px; margin-left: auto; margin-right: auto;
            }
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

            /* MOBILE STICKY CTA */
            .ayur-sticky-bottom-cta {
                display: none;
                position: fixed; bottom: 0; left: 0; right: 0;
                background: rgba(2,12,34,0.97); backdrop-filter: blur(12px);
                border-top: 1px solid rgba(255,255,255,0.12);
                z-index: 1999; padding: 10px 20px;
            }
            .ayur-sticky-bottom-cta-grid {
                display: grid; grid-template-columns: repeat(3,1fr);
                gap: 10px; max-width: 460px; margin: 0 auto;
            }
            .ayur-bottom-cta-btn {
                display: flex; flex-direction: column; align-items: center;
                gap: 3px; height: 50px; border-radius: 12px;
                font-size: 11px; font-weight: 600; text-decoration: none;
                color: rgba(255,255,255,0.75);
                background: rgba(255,255,255,0.08);
                border: 1px solid rgba(255,255,255,0.12);
                transition: all 0.2s ease; justify-content: center;
                font-family: 'Inter', sans-serif;
            }
            .ayur-bottom-cta-btn.primary { background: var(--primary-green); color: #ffffff; border: none; }
            @media (max-width: 768px) {
                .ayur-sticky-bottom-cta { display: block; }
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



                <!-- 1. Introduction -->
                <div class="ayur-section">
                    <span class="ayur-sec-label">The Legacy</span>
                    <h2 class="ayur-sec-title">Ayurveda Therapy at Ayurgreen Hospital</h2>
                    <div class="ayur-intro-grid">
                        <div class="ayur-sec-body">
                            <p>At Ayurgreen Hospital, Ayurveda is not just a traditional treatment — it is an essential part of a scientifically guided recovery journey. With over 25 years of expertise in neuro and orthopedic rehabilitation, the hospital blends the wisdom of Ayurveda with modern medical advancements to support patients in regaining strength, mobility, and confidence.</p>
                            <p>Rooted in the principle of balancing the body, mind, and soul, Ayurveda plays a powerful role in treatment for neurological disorders, especially when combined with advanced rehabilitation techniques. This integrated approach reflects Ayurgreen's philosophy of <em style="color: #101828; font-style: italic;">"Happiness in Healthcare"</em>, ensuring patients experience both healing and hope.</p>
                        </div>
                        <img src="Assets/rehab/th_ayurveda.webp" alt="Authentic Kerala Ayurveda treatment at Ayurgreen Hospital" class="ayur-intro-grid-img">
                    </div>
                </div>

                <!-- 2. Neurological Recovery -->
                <div class="ayur-section">
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

                <!-- 3. Key Therapies -->
                <div class="ayur-section">
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

                <!-- 4. Integration with Modern Rehab (dark bg) -->
                <div class="ayur-section dark-bg">
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

                <!-- 5. Benefits -->
                <div class="ayur-section">
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

                <!-- 6. Why Choose Ayurgreen -->
                <div class="ayur-section">
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

                <!-- 7. CTA -->
                <div class="ayur-cta-section">
                    <h2 class="ayur-cta-title">Start Your Recovery Journey</h2>
                    <p class="ayur-cta-desc">Consult with our clinical experts and Ayurvedic scholars to design your customized integrated recovery pathway.</p>
                    <div class="ayur-cta-buttons">
                        <a href="index.html#consultation" class="ayur-btn-primary">Book Consultation <i data-lucide="calendar" size="16"></i></a>
                        <a href="https://wa.me/918080808080" target="_blank" class="ayur-btn-ghost">WhatsApp <i data-lucide="message-square" size="16"></i></a>
                        <a href="tel:+918080808080" class="ayur-btn-ghost">Call Now <i data-lucide="phone" size="16"></i></a>
                    </div>
                </div>



    </main>
"""







# Create pages from lists
all_dynamic_pages = []

for svc in therapies_list:
    html = generate_service_html(svc, "Therapies", therapies_list)
    all_dynamic_pages.append((svc['filename'], html))

for svc in departments_list:
    if svc['filename'] not in ['ayurveda.html']: # Skip ayurveda.html to keep it untouched
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
