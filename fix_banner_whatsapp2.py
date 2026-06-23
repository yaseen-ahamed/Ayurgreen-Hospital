import glob
import re

files = glob.glob('*.html') + glob.glob('dist/*.html')

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # We want to find the <a href="..." target="_blank" class="main-cta"> containing WhatsApp
    # and replace its <span class="arrow-btn"...>...</span> with the EXACT original tag
    
    pattern = r'(<a[^>]*class="main-cta"[^>]*>\s*<span class="cta-text">WhatsApp</span>\s*)<span class="arrow-btn"[^>]*>.*?</span>'
    
    replacement = r'\1<span class="arrow-btn" style="background: transparent; padding: 0; display: inline-flex; align-items: center; justify-content: center;"><img src="Assets/Whatsapp%20Icon.png" alt="WhatsApp" style="width: 32px; height: 32px; object-fit: contain; transform: scale(1.5);"></span>'
    
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    with open(f, 'w') as file:
        file.write(content)
