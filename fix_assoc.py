import glob

old_css = """        .assoc-marquee-wrapper {
            position: relative;
            overflow: hidden;
            width: 100%;"""

new_css = """        .assoc-marquee-wrapper {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding: 20px 0; /* Prevents shadow and scale clipping */"""

count = 0
for file in glob.glob("*.html"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        
    if old_css in content:
        content = content.replace(old_css, new_css)
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1
        print(f"Updated CSS in {file}")

print(f"Updated CSS in {count} files")

# Now let's swap the sections in index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

assoc_start = idx_content.find('        <!-- Our Associations Section -->')
eco_start = idx_content.find('        <!-- Ayurgreen Ecosystem Section -->')
main_end = idx_content.find('    </main>')

if assoc_start != -1 and eco_start != -1 and main_end != -1 and assoc_start < eco_start < main_end:
    assoc_block = idx_content[assoc_start:eco_start]
    eco_block = idx_content[eco_start:main_end]
    
    new_idx_content = idx_content[:assoc_start] + eco_block + assoc_block + idx_content[main_end:]
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_idx_content)
    print("Swapped sections in index.html")
else:
    print("Could not find section markers in index.html for swapping!")

