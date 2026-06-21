import glob

old_section = "background-color: var(--page-theme-color);"
new_section = "background-color: var(--dark-navy);"

count = 0
for file in glob.glob("*.html"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        
    if "background-color: var(--page-theme-color);" in content:
        # For .ayur-section and .ayur-therapy-card
        # Actually it's easier to just replace all occurrences.
        content = content.replace("background-color: var(--page-theme-color);", "background-color: rgba(255, 255, 255, 0.03);")
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1
        print(f"Updated {file}")

print(f"Updated {count} files")
