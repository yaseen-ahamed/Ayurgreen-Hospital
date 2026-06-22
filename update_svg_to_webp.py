import glob

html_files = glob.glob("*.html")
updated = 0

for file in html_files:
    with open(file, 'r') as f:
        content = f.read()
    
    if "youtube.svg" in content:
        content = content.replace("youtube.svg", "youtube.webp")
        with open(file, 'w') as f:
            f.write(content)
        updated += 1
        print(f"Updated {file}")

print(f"Total files updated: {updated}")
