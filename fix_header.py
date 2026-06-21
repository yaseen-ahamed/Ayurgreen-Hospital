import os
import glob

html_files = glob.glob('*.html')
count = 0

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "top: 12px !important;" in content and "body:has(.ayur-hero-wrapper) .hero-header" in content:
        # replace just the top: 12px !important; part inside that rule
        # we can just use a simple string replace if it's uniquely formatted,
        # but to be safe:
        old_str = """        body:has(.ayur-hero-wrapper) .hero-header {
            left: clamp(32px, 5vw, 64px) !important;
            right: clamp(32px, 5vw, 64px) !important;
            top: 12px !important;
        }"""
        new_str = """        body:has(.ayur-hero-wrapper) .hero-header {
            left: clamp(32px, 5vw, 64px) !important;
            right: clamp(32px, 5vw, 64px) !important;
            top: clamp(32px, 4vw, 48px) !important;
        }"""
        if old_str in content:
            content = content.replace(old_str, new_str)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1
            print(f"Fixed {file}")

print(f"Total files fixed: {count}")
