import glob

old_block = """        .ayur-hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, rgba(2, 12, 34, 0.85) 0%, rgba(2, 12, 34, 0.45) 100%),
                        radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(2, 12, 34, 0.4) 100%);
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
            z-index: 1;
        }"""

new_block = """        .ayur-hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%);
            z-index: 1;
        }"""

count = 0
for file in glob.glob("*.html"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
        
    if old_block in content:
        content = content.replace(old_block, new_block)
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1
        print(f"Updated {file}")

print(f"Updated {count} files")
