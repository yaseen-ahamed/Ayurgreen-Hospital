import glob

html_files = glob.glob("*.html")
updated = 0

old_str = '<img src="Assets/instagram.webp" alt="Instagram" width="28" height="28" style="object-fit: contain; display: block;">'
new_str = '<img src="Assets/instagram.webp" alt="Instagram" width="34" height="34" style="object-fit: contain; display: block;">'

for file in html_files:
    with open(file, 'r') as f:
        content = f.read()
    
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(file, 'w') as f:
            f.write(content)
        updated += 1
        print(f"Updated {file}")

print(f"Total files updated: {updated}")
