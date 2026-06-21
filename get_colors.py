import re
from PIL import Image
import os
import urllib.parse

files = [
    "stroke-rehab.html", "spinal-cord-injury.html", "traumatic-brain-injury.html",
    "hemiplegia.html", "quadriplegia-paraplegia.html", "post-surgical-complications.html",
    "motor-neuron-diseases.html", "cerebral-palsy.html", "parkinsons-disease.html",
    "myopathy.html", "disc-spine-problems.html", "sciatica.html", "obesity.html",
    "post-covid-complications.html", "muscular-dystrophy.html", "osteoarthritis.html",
    "rheumatoid-arthritis.html", "developmental-delay.html", "psychological-problems.html",
    "autism.html", "psychiatry.html"
]

known_colors = {
    "psychological-problems.html": "#F3E8FF",
    "spinal-cord-injury.html": "#E0F2F1",
    "quadriplegia-paraplegia.html": "#FFE0B2",
    "cerebral-palsy.html": "#E3F2FD",
    "disc-spine-problems.html": "#E8F5E9",
    "post-covid-complications.html": "#FFF9C4",
    "rheumatoid-arthritis.html": "#FFCDD2",
    "autism.html": "#E0F7FA",
    "traumatic-brain-injury.html": "#E8EAF6",
    "post-surgical-complications.html": "#DCEDC8",
    "parkinsons-disease.html": "#D7CCC8",
    "sciatica.html": "#C5CAE9",
    "muscular-dystrophy.html": "#FFCCBC",
    "developmental-delay.html": "#FFECB3",
    "psychiatry.html": "#B2EBF2",
}

colors = {}

for file in files:
    if file in known_colors:
        colors[file] = known_colors[file]
        continue
        
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        match = re.search(r'<div class="ayur-hero-banner"[^>]*background-image:\s*url\((["\']?)(.*?)\1\)', content)
        if match:
            img_url = match.group(2)
            # URL unquote
            img_path = urllib.parse.unquote(img_url)
            if os.path.exists(img_path):
                img = Image.open(img_path)
                rgb = img.convert('RGB').getpixel((10, 10))
                colors[file] = f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}".upper()
            else:
                print(f"Image not found: {img_path}")
        else:
            print(f"No background image found in {file}")
            
    except Exception as e:
        print(f"Error on {file}: {e}")

for f, c in colors.items():
    print(f'"{f}": "{c}",')
