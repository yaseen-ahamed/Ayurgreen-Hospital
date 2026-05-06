import os
import re
import glob

replacements = {
    "Our Legacy": ('award', '#FFD700'),
    "Multidisciplinary Team": ('users', '#4CAF50'),
    "Facilities": ('building', '#2196F3'),
    "Stroke": ('activity', '#E91E63'),
    "Spinal Cord Injury": ('bone', '#9C27B0'),
    "Traumatic Brain Injury": ('brain', '#FF9800'),
    "Hemiplegia": ('person-standing', '#00BCD4'),
    "Quadriplegia & Paraplegia": ('accessibility', '#3F51B5'),
    "Post-Surgical Complications": ('stethoscope', '#009688'),
    "Motor Neuron Diseases": ('network', '#607D8B'),
    "Cerebral Palsy": ('flower-2', '#E040FB'),
    "Parkinson's Disease": ('zap', '#FFEB3B'),
    "Myopathy": ('dna', '#8BC34A'),
    "Disc & Spine Problems": ('git-commit', '#FF5722'),
    "Sciatica": ('zap-off', '#795548'),
    "Obesity": ('scale', '#F44336'),
    "Post-Covid Complications": ('shield-alert', '#FFC107'),
    "Muscular Dystrophy": ('heart-pulse', '#E91E63'),
    "Osteoarthritis": ('target', '#9E9E9E'),
    "Rheumatoid Arthritis": ('flame', '#FF5722'),
    "Developmental Delay": ('sprout', '#8BC34A'),
    "Psychological Problems": ('lightbulb', '#FFEB3B'),
    "Ayurveda": ('leaf', '#4CAF50'),
    "Physiotherapy": ('dumbbell', '#FF9800'),
    "Robotic Rehabilitation": ('bot', '#00BCD4'),
    "Occupational Therapy": ('puzzle', '#9C27B0'),
    "Speech Therapy": ('message-circle', '#2196F3'),
    "Virtual Reality": ('headset', '#E91E63'),
    "Yoga": ('sun', '#FFC107'),
    "Acupuncture": ('map-pin', '#F44336'),
    "Reflexology": ('footprints', '#795548'),
    "Hydro / Aquatic Therapy": ('waves', '#03A9F4'),
    "Pediatric Physiotherapy": ('baby', '#E040FB'),
    "Slimming Treatment": ('ruler', '#009688'),
    "Pain Management": ('shield-plus', '#4CAF50'),
    "Diet & Nutrition": ('utensils', '#FF5722'),
    "Counseling": ('heart-handshake', '#E91E63'),
    "Dentistry": ('smile', '#00BCD4'),
    "Modern Medicine": ('pill', '#9C27B0'),
    "Assistive Devices": ('wheelchair', '#3F51B5'),
    "Neurology": ('brain-circuit', '#607D8B'),
    "Neurosurgery": ('microscope', '#009688'),
    "Orthopedic": ('hammer', '#795548'),
    "ENT": ('ear', '#FF9800'),
    "General Medicine": ('syringe', '#F44336'),
    "Urology": ('droplet', '#03A9F4'),
    "Cardiology": ('heart', '#E91E63'),
}

html_files = glob.glob('*.html')

def replace_func(match):
    href = match.group(1)
    old_icon = match.group(2)
    text = match.group(3)
    clean_text = text.strip()
    
    if clean_text in replacements:
        new_icon, color = replacements[clean_text]
        return f'<a href="{href}"><i data-lucide="{new_icon}" size="14" style="color: {color};"></i> {clean_text}</a>'
    return match.group(0)

pattern = re.compile(r'<a href="([^"]+)"><i data-lucide="([^"]+)" size="14"></i>\s*([^<]+)</a>')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub(replace_func, content)
    
    if new_content != content:
        print(f"Updated {file}")
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
