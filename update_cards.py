import re

colors_dict = {
    "stroke-rehab.html": "#FFFFFF",
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
    r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    l = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return l > 140

for file, color in colors_dict.items():
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
        else:
            text_color = "#ffffff"
            text_color_muted = "rgba(255, 255, 255, 0.85)"
            card_bg = "rgba(255, 255, 255, 0.05)"
            card_border = "rgba(255, 255, 255, 0.1)"
            cta_border = "rgba(255, 255, 255, 0.15)"

        # 1. .ayur-cta-section
        content = re.sub(r'(\.ayur-cta-section\s*\{[^}]*)background:\s*[^;]+;', rf'\1background: {color};', content)
        content = re.sub(r'(\.ayur-cta-section\s*\{[^}]*)border:\s*[^;]+;', rf'\1border: 1px solid {cta_border};', content)
        content = re.sub(r'(\.ayur-cta-title\s*\{[^}]*)color:\s*[^;]+;', rf'\1color: {text_color};', content)
        content = re.sub(r'(\.ayur-cta-desc\s*\{[^}]*)color:\s*[^;]+;', rf'\1color: {text_color_muted};', content)

        # 2. .ayur-tech-outer
        content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*)background-color:\s*[^;]+;', rf'\1background-color: {color};', content)
        content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*?)color:\s*[^;]+;', rf'\1color: {text_color};', content)

        # HTML inline styles inside .ayur-tech-outer
        # We find ayur-tech-outer div to the end of its section, replace inline colors
        tech_outer_match = re.search(r'<section id="technologies" class="ayur-tech-outer">.*?</section>', content, flags=re.DOTALL)
        if tech_outer_match:
            tech_html = tech_outer_match.group(0)
            tech_html = re.sub(r'<h2 class="ayur-section-title" style="color:\s*[^;]+;">', rf'<h2 class="ayur-section-title" style="color: {text_color};">', tech_html)
            tech_html = re.sub(r'<p class="ayur-section-support" style="color:\s*[^;]+;">', rf'<p class="ayur-section-support" style="color: {text_color_muted};">', tech_html)
            content = content[:tech_outer_match.start()] + tech_html + content[tech_outer_match.end():]

        # 3. .ayur-tech-card
        content = re.sub(r'(\.ayur-tech-card\s*\{[^}]*)background:\s*[^;]+;', rf'\1background: {card_bg};', content)
        content = re.sub(r'(\.ayur-tech-card\s*\{[^}]*)border:\s*[^;]+;', rf'\1border: 1px solid {card_border};', content)
        content = re.sub(r'(\.ayur-tech-card-title\s*\{[^}]*)color:\s*[^;]+;', rf'\1color: {text_color};', content)
        content = re.sub(r'(\.ayur-tech-card-desc\s*\{[^}]*)color:\s*[^;]+;', rf'\1color: {text_color_muted};', content)

        # 4. .ayur-condition-card
        content = re.sub(r'(\.ayur-condition-card\s*\{[^}]*)background:\s*[^;]+;', rf'\1background: {color};', content)
        content = re.sub(r'(\.ayur-condition-card-title\s*\{[^}]*)color:\s*[^;]+;', rf'\1color: {text_color};', content)
        content = re.sub(r'(\.ayur-condition-card-desc\s*\{[^}]*)color:\s*[^;]+;', rf'\1color: {text_color_muted};', content)

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file} (Light: {light})")
    except Exception as e:
        print(f"Error on {file}: {e}")
