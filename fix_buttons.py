import glob
import re

files = glob.glob('*.html') + glob.glob('dist/*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Update button CSS
    css_replacement = """            .ayur-btn-primary, .ayur-btn-glass { display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%) !important; border: 1px solid rgba(255, 255, 255, 0.3) !important; border-top: 1px solid rgba(255, 255, 255, 0.5) !important; border-left: 1px solid rgba(255, 255, 255, 0.5) !important; color: #ffffff !important; padding: 14px 28px; border-radius: 40px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 2px 4px 0 rgba(255, 255, 255, 0.3) !important; backdrop-filter: blur(16px) saturate(120%); -webkit-backdrop-filter: blur(16px) saturate(120%); }
            .ayur-btn-primary:hover, .ayur-btn-glass:hover { background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%) !important; border-color: rgba(255, 255, 255, 0.5) !important; transform: translateY(-3px); box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2), inset 0 2px 6px 0 rgba(255, 255, 255, 0.4) !important; }"""

    # We will replace the original css lines for these buttons
    content = re.sub(r'\.ayur-btn-primary\s*\{.*?\}\s*\.ayur-btn-primary:hover\s*\{.*?\}\s*\.ayur-btn-glass\s*\{.*?\}\s*\.ayur-btn-glass:hover\s*\{.*?\}', css_replacement, content, flags=re.DOTALL)
    
    # Wait, the regex might fail if spaces don't match. Let's do string replace if possible.
    # A safer regex:
    content = re.sub(r'\.ayur-btn-primary\s*\{[^\}]+\}\s*\.ayur-btn-primary:hover\s*\{[^\}]+\}\s*\.ayur-btn-glass\s*\{[^\}]+\}\s*\.ayur-btn-glass:hover\s*\{[^\}]+\}', css_replacement, content)

    # Now update the icons in the CTA section
    # WhatsApp icon
    content = re.sub(
        r'<img\s+src="Assets/Whatsapp%20Icon\.png"[^>]+>',
        r'<img src="Assets/Whatsapp%20Icon.png" alt="WhatsApp" style="width: 22px; height: 22px; object-fit: contain; vertical-align: middle; filter: brightness(0) invert(1);">',
        content
    )
    
    # Other icons size in the CTA section
    # The CTA section buttons look like: Book Consultation <i data-lucide="calendar" size="18"></i>
    content = re.sub(r'data-lucide="calendar" size="18"', 'data-lucide="calendar" size="22"', content)
    content = re.sub(r'data-lucide="phone" size="18"', 'data-lucide="phone" size="22"', content)

    with open(f, 'w') as file:
        file.write(content)
