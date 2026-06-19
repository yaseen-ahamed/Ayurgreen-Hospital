import re

with open('build_pages.py', 'r') as f:
    content = f.read()

# 1. Re-add padding-left: 48px !important; to .ayur-hero-content
content = content.replace(
    'padding-left: 0 !important;',
    'padding-left: 48px !important;'
)

# 2. Replace the SVG WhatsApp icon with the PNG image
# Match the current WhatsApp span which we set to just <span class="arrow-btn"><svg...></svg></span>
png_html = '<span class="arrow-btn" style="background: transparent; padding: 0; display: inline-flex; align-items: center; justify-content: center;"><img src="Assets/whatsapp-icon-3953.png" alt="WhatsApp" style="width: 32px; height: 32px; object-fit: contain;"></span>'

content = re.sub(
    r'<span class="arrow-btn">\s*<svg[^>]*>.*?</svg>\s*</span>',
    png_html,
    content,
    flags=re.DOTALL
)

with open('build_pages.py', 'w') as f:
    f.write(content)
