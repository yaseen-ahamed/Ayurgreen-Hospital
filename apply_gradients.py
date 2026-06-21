import re
import os

colors_dict = {
    "stroke-rehab.html": "#FDF2F8", # Use a very light pink for stroke to match icon instead of pure white
    "spinal-cord-injury.html": "#E0F2F1",
    "traumatic-brain-injury.html": "#E8EAF6",
    "hemiplegia.html": "#32426E",
    "quadriplegia-paraplegia.html": "#FFE0B2",
    "post-surgical-complications.html": "#DCEDC8",
    "motor-neuron-diseases.html": "#FFDE59",
    "cerebral-palsy.html": "#E3F2FD",
    "parkinsons-disease.html": "#D7CCC8",
    "myopathy.html": "#201F1F",
    "disc-spine-problems.html": "#E8F5E9",
    "sciatica.html": "#C5CAE9",
    "obesity.html": "#D89F74",
    "post-covid-complications.html": "#FFF9C4",
    "muscular-dystrophy.html": "#FFCCBC",
    "osteoarthritis.html": "#38B6FF",
    "rheumatoid-arthritis.html": "#FFCDD2",
    "developmental-delay.html": "#FFECB3",
    "psychological-problems.html": "#F3E8FF",
    "autism.html": "#E0F7FA",
    "psychiatry.html": "#B2EBF2",
}

def is_light(hex_color):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 6:
        r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
        l = 0.2126 * r + 0.7152 * g + 0.0722 * b
        return l > 140
    return True

for file, color in colors_dict.items():
    if not os.path.exists(file):
        continue
        
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()

        light = is_light(color)
        if light:
            text_color = "var(--dark-navy)"
            text_color_muted = "var(--body-text)"
            card_bg = "rgba(0, 0, 0, 0.03)"
            card_border = "rgba(0, 0, 0, 0.08)"
            cta_border = "rgba(0, 0, 0, 0.08)"
            gradient = f"linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), {color}"
            shadow = "0 20px 50px rgba(0, 0, 0, 0.06)"
        else:
            text_color = "#ffffff"
            text_color_muted = "rgba(255, 255, 255, 0.85)"
            card_bg = "rgba(255, 255, 255, 0.05)"
            card_border = "rgba(255, 255, 255, 0.1)"
            cta_border = "rgba(255, 255, 255, 0.15)"
            gradient = f"linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), {color}"
            shadow = "0 20px 50px rgba(0, 0, 0, 0.25)"

        # 1. .ayur-cta-section
        content = re.sub(r'(\.ayur-cta-section\s*\{[^}]*?)(?:background-color|background):\s*[^;]+;', rf'\1background: {gradient};', content, flags=re.DOTALL)
        content = re.sub(r'(\.ayur-cta-section\s*\{[^}]*?)(?:box-shadow):\s*[^;]+;', rf'\1box-shadow: {shadow};', content, flags=re.DOTALL)

        # 2. .ayur-tech-outer
        content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*?)(?:background-color|background):\s*[^;]+;', rf'\1background: {gradient};', content, flags=re.DOTALL)
        
        # If there's no box-shadow in .ayur-tech-outer, let's inject it right after the background
        if 'box-shadow' not in content[content.find('.ayur-tech-outer'):content.find('}', content.find('.ayur-tech-outer'))]:
            content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*?background:\s*[^;]+;)', rf'\1 box-shadow: {shadow}; border: 1px solid {cta_border};', content, count=1)
        else:
            content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*?)(?:box-shadow):\s*[^;]+;', rf'\1box-shadow: {shadow};', content, flags=re.DOTALL)
            content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*?)(?:border):\s*[^;]+;', rf'\1border: 1px solid {cta_border};', content, flags=re.DOTALL)

        # 3. .ayur-condition-card
        content = re.sub(r'(\.ayur-condition-card\s*\{[^}]*?)(?:background-color|background):\s*[^;]+;', rf'\1background: {gradient};', content, flags=re.DOTALL)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file} (Light: {light})")
    except Exception as e:
        print(f"Error on {file}: {e}")
