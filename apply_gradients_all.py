import glob
import re
import os
import urllib.parse
from PIL import Image

known_colors = {
    "psychological-problems.html": "#C1FF72",
    "spinal-cord-injury.html": "#5CE1E6",
    "quadriplegia-paraplegia.html": "#FFE0B2",
    "cerebral-palsy.html": "#E3F2FD",
    "disc-spine-problems.html": "#E8F5E9",
    "post-covid-complications.html": "#8C52FF",
    "rheumatoid-arthritis.html": "#FFCDD2",
    "autism.html": "#E0F7FA",
    "traumatic-brain-injury.html": "#47D88A",
    "post-surgical-complications.html": "#FF914D",
    "parkinsons-disease.html": "#D7CCC8",
    "sciatica.html": "#C5CAE9",
    "muscular-dystrophy.html": "#FFCCBC",
    "developmental-delay.html": "#FFECB3",
    "psychiatry.html": "#B2EBF2",
}

def is_light(hex_color):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 6:
        r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
        l = 0.2126 * r + 0.7152 * g + 0.0722 * b
        return l > 140
    return True

colors = {}

for file in glob.glob("*.html"):
    if file == "index.html" or file == "therapies.html" or file == "rehab-village.html":
        continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Only process files that have ayur-hero-banner
    if 'class="ayur-hero-banner"' not in content:
        continue

    # Try to find inline background-color first
    bg_match = re.search(r'<div class="ayur-hero-banner"[^>]*background-color:\s*(#[A-Fa-f0-9]{3,6})', content)
    if bg_match:
        colors[file] = bg_match.group(1).upper()
        continue

    # Try background-image
    img_match = re.search(r'<div class="ayur-hero-banner"[^>]*background-image:\s*url\((["\']?)(.*?)\1\)', content)
    if img_match:
        img_url = img_match.group(2)
        img_path = urllib.parse.unquote(img_url)
        if os.path.exists(img_path):
            img = Image.open(img_path)
            rgb = img.convert('RGB').getpixel((10, 10))
            colors[file] = f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}".upper()
            continue
        else:
            print(f"Image not found: {img_path}")

    # If no background-color and image fails, try known_colors
    if file in known_colors:
        colors[file] = known_colors[file]
        continue

    # Check if there is an img tag inside
    img_tag = re.search(r'<div class="ayur-hero-banner"[^>]*>.*?<img[^>]*src=(["\']?)(.*?)\1', content, re.DOTALL)
    if img_tag:
        img_url = img_tag.group(2)
        img_path = urllib.parse.unquote(img_url)
        if os.path.exists(img_path):
            img = Image.open(img_path)
            rgb = img.convert('RGB').getpixel((10, 10))
            colors[file] = f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}".upper()

# Optional: manually fix some colors that are too white
if "stroke-rehab.html" in colors and colors["stroke-rehab.html"] == "#FFFFFF":
    colors["stroke-rehab.html"] = "#FDF2F8"

print("dict = {")
for f, c in colors.items():
    print(f'    "{f}": "{c}",')
print("}")

# Now apply gradients to all found files
for file, color in colors.items():
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up inline style background override from Call Now button
    content = re.sub(r'class="ayur-btn-glass"\s+style="background:\s*transparent;?"', 'class="ayur-btn-glass"', content)

    light = is_light(color)
    if light:
        text_color = "var(--dark-navy)"
        text_color_muted = "var(--body-text)"
        card_bg = "rgba(255, 255, 255, 0.45) !important"
        card_border = "rgba(255, 255, 255, 0.5) !important"
        card_hover_bg = "rgba(255, 255, 255, 0.65) !important"
        card_hover_border = "rgba(255, 255, 255, 0.7) !important"
        cta_border = "rgba(0, 0, 0, 0.08)"
        gradient = f"linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%), {color}"
        shadow = "0 20px 50px rgba(0, 0, 0, 0.06)"
    else:
        text_color = "#ffffff"
        text_color_muted = "rgba(255, 255, 255, 0.85)"
        card_bg = "rgba(0, 0, 0, 0.2) !important"
        card_border = "rgba(255, 255, 255, 0.15) !important"
        card_hover_bg = "rgba(0, 0, 0, 0.35) !important"
        card_hover_border = "rgba(255, 255, 255, 0.25) !important"
        cta_border = "rgba(255, 255, 255, 0.15)"
        gradient = f"linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), {color}"
        shadow = "0 20px 50px rgba(0, 0, 0, 0.25)"

    # Remove existing btn blocks if any to prevent duplicates or stale styles
    content = re.sub(r'\.ayur-btn-primary\s*\{[^}]*\}', '', content)
    content = re.sub(r'\.ayur-btn-primary:hover\s*\{[^}]*\}', '', content)
    content = re.sub(r'\.ayur-btn-glass\s*\{[^}]*\}', '', content)
    content = re.sub(r'\.ayur-btn-glass:hover\s*\{[^}]*\}', '', content)

    # Determine styles based on theme brightness (liquid glass theme for both primary and secondary buttons)
    if light:
        btn_styles = """
            .ayur-btn-primary { display: inline-flex; align-items: center; gap: 10px; background: rgba(255, 255, 255, 0.5) !important; border: 1px solid rgba(255, 255, 255, 0.6) !important; color: var(--dark-navy) !important; padding: 14px 28px; border-radius: 40px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
            .ayur-btn-primary:hover { background: rgba(255, 255, 255, 0.7) !important; border-color: rgba(255, 255, 255, 0.8) !important; transform: translateY(-2px); }
            .ayur-btn-glass { display: inline-flex; align-items: center; gap: 10px; background: rgba(255, 255, 255, 0.5) !important; border: 1px solid rgba(255, 255, 255, 0.6) !important; color: var(--dark-navy) !important; padding: 14px 28px; border-radius: 40px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
            .ayur-btn-glass:hover { background: rgba(255, 255, 255, 0.7) !important; border-color: rgba(255, 255, 255, 0.8) !important; transform: translateY(-2px); }
        """
    else:
        btn_styles = """
            .ayur-btn-primary { display: inline-flex; align-items: center; gap: 10px; background: rgba(255, 255, 255, 0.18) !important; border: 1px solid rgba(255, 255, 255, 0.25) !important; color: #ffffff !important; padding: 14px 28px; border-radius: 40px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
            .ayur-btn-primary:hover { background: rgba(255, 255, 255, 0.28) !important; border-color: rgba(255, 255, 255, 0.35) !important; transform: translateY(-2px); }
            .ayur-btn-glass { display: inline-flex; align-items: center; gap: 10px; background: rgba(255, 255, 255, 0.18) !important; border: 1px solid rgba(255, 255, 255, 0.25) !important; color: #ffffff !important; padding: 14px 28px; border-radius: 40px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
            .ayur-btn-glass:hover { background: rgba(255, 255, 255, 0.28) !important; border-color: rgba(255, 255, 255, 0.35) !important; transform: translateY(-2px); }
        """

    # Inject the button styles directly after the ayur-cta-btn-group selector
    content = re.sub(r'(\.ayur-cta-btn-group\s*\{[^}]*?\})', rf'\1\n{btn_styles}', content)

    # 1. .ayur-cta-section
    content = re.sub(r'(\.ayur-cta-section\s*\{[^}]*?)(?:background-color|background):\s*[^;]+;', rf'\1background: {gradient};', content, flags=re.DOTALL)
    # 2. .ayur-tech-outer
    content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*?)(?:background-color|background):\s*[^;]+;', rf'\1background: {gradient};', content, flags=re.DOTALL)
    # 3. .ayur-condition-card
    content = re.sub(r'(\.ayur-condition-card\s*\{[^}]*?)(?:background-color|background):\s*[^;]+;', rf'\1background: {gradient};', content, flags=re.DOTALL)
    # 4. .ayur-condition-card-content
    # IMPORTANT: ensure .ayur-condition-card-content has background: transparent; or isn't overriding!
    # Let's actively set it to transparent just in case!
    if '.ayur-condition-card-content' in content:
        content = re.sub(r'(\.ayur-condition-card-content\s*\{[^}]*?background(-color)?:\s*)[^;]+;', rf'\1transparent;', content, flags=re.DOTALL)

    # Apply text color changes with !important to prevent specific selector override
    content = re.sub(r'(\.ayur-cta-title\s*\{[^}]*?color:\s*)[^;]+;', rf'\1{text_color} !important;', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-cta-desc\s*\{[^}]*?color:\s*)[^;]+;', rf'\1{text_color_muted} !important;', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-tech-outer\s*\{[^}]*?color:\s*)[^;]+;', rf'\1{text_color} !important;', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-tech-card\s*\{[^}]*?background:\s*)[^;]+;', rf'\1{card_bg};', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-tech-card\s*\{[^}]*?border:\s*)[^;]+;', rf'\g<1>1px solid {card_border};', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-tech-card:hover\s*\{[^}]*?background:\s*)[^;]+;', rf'\1{card_hover_bg};', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-tech-card:hover\s*\{[^}]*?border-color:\s*)[^;]+;', rf'\1{card_hover_border};', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-tech-card-title\s*\{[^}]*?color:\s*)[^;]+;', rf'\1{text_color} !important;', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-tech-card-desc\s*\{[^}]*?color:\s*)[^;]+;', rf'\1{text_color_muted} !important;', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-condition-card-title\s*\{[^}]*?color:\s*)[^;]+;', rf'\1{text_color} !important;', content, flags=re.DOTALL)
    content = re.sub(r'(\.ayur-condition-card-desc\s*\{[^}]*?color:\s*)[^;]+;', rf'\1{text_color_muted} !important;', content, flags=re.DOTALL)
    content = re.sub(r'\.ayur-condition-card-img-wrapper\s*\{[^}]*\}', '.ayur-condition-card-img-wrapper { width: calc(100% - 24px) !important; margin: 12px 12px 0 12px !important; border-radius: 18px !important; height: 180px !important; overflow: hidden; position: relative; }', content)

    # HTML inline text color
    tech_outer_match = re.search(r'<section id="technologies" class="ayur-tech-outer">.*?</section>', content, flags=re.DOTALL)
    if tech_outer_match:
        tech_html = tech_outer_match.group(0)
        tech_html = re.sub(r'<h2 class="ayur-section-title" style="color:\s*[^;]+;">', rf'<h2 class="ayur-section-title" style="color: {text_color};">', tech_html)
        tech_html = re.sub(r'<p class="ayur-section-support" style="color:\s*[^;]+;">', rf'<p class="ayur-section-support" style="color: {text_color_muted};">', tech_html)
        content = content[:tech_outer_match.start()] + tech_html + content[tech_outer_match.end():]

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
