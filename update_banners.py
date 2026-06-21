import re

updates = {
    "psychological-problems.html": ("#F3E8FF", "Psychological%20Problems.png", "Psychological Problems"),
    "spinal-cord-injury.html": ("#E0F2F1", "Spinal%20Cord%20Injury.png", "Spinal Cord Injury"),
    "quadriplegia-paraplegia.html": ("#FFE0B2", "Quadriplegia%20%26%20Paraplegia.png", "Quadriplegia & Paraplegia"),
    "cerebral-palsy.html": ("#E3F2FD", "Cerebral%20Palsy.png", "Cerebral Palsy"),
    "disc-spine-problems.html": ("#E8F5E9", "Disc%20%26%20Spine%20Problems.png", "Disc & Spine Problems"),
    "post-covid-complications.html": ("#FFF9C4", "Post-Covid%20Complications.png", "Post-Covid Complications"),
    "rheumatoid-arthritis.html": ("#FFCDD2", "Rheumatoid%20Arthritis.png", "Rheumatoid Arthritis"),
    "autism.html": ("#E0F7FA", "Autism.png", "Autism"),
    "traumatic-brain-injury.html": ("#E8EAF6", "Traumatic%20Brain%20Injury.png", "Traumatic Brain Injury"),
    "post-surgical-complications.html": ("#DCEDC8", "Post-Surgical%20Complications.png", "Post-Surgical Complications"),
    "parkinsons-disease.html": ("#D7CCC8", "Parkinson%27s%20Disease.png", "Parkinson's Disease"),
    "sciatica.html": ("#C5CAE9", "Sciatica.png", "Sciatica"),
    "muscular-dystrophy.html": ("#FFCCBC", "Muscular%20Dystrophy.png", "Muscular Dystrophy"),
    "developmental-delay.html": ("#FFECB3", "Developmental%20Delay.png", "Developmental Delay"),
    "psychiatry.html": ("#B2EBF2", "Psychiatry.png", "Psychiatry"),
}

for file, (color, img_path, alt_text) in updates.items():
    try:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
            
        pattern = r'<div class="ayur-hero-banner" style="background-image: url\([^)]+\);">\s*<div class="ayur-hero-overlay"></div>\s*<div class="ayur-container">'
        
        replacement = f'''<div class="ayur-hero-banner" style="background-color: {color}; position: relative; overflow: hidden;">
                <img src="Assets/AG%20Sub-pages%20Banner/{img_path}" alt="{alt_text}" style="position: absolute; right: 0; bottom: 0; height: 100%; width: auto; max-width: 35%; object-fit: contain; z-index: 1;">
                <div class="ayur-hero-overlay" style="z-index: 2;"></div>
                <div class="ayur-container" style="position: relative; z-index: 3;">'''
        
        new_content = re.sub(pattern, replacement, content, count=1)
        
        if new_content != content:
            with open(file, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {file}")
        else:
            print(f"Regex didn't match in {file}")
            
    except Exception as e:
        print(f"Error processing {file}: {e}")

