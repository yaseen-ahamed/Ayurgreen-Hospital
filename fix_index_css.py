import re

with open('index.html', 'r') as f:
    content = f.read()

replacement = """        .ayur-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            box-sizing: border-box;
            width: 100%;
        }
        .ayur-hero-content {
            position: relative;
            z-index: 2;
            color: #ffffff;
            max-width: 620px;
            width: 100%;
            box-sizing: border-box;
            text-align: left;
            padding-left: 48px !important;
        }
        @media (max-width: 768px) {
            .ayur-hero-content { padding-left: 48px !important; }
        }"""

# Replace exactly the .ayur-hero-content block in index.html
target = """        .ayur-hero-content {
            position: relative;
            z-index: 2;
            color: #ffffff;
            max-width: 620px;
            width: 100%;
            box-sizing: border-box;
            text-align: left;
        }"""

if target in content:
    content = content.replace(target, replacement)
    with open('index.html', 'w') as f:
        f.write(content)
    print("Replaced successfully in index.html")
else:
    print("Target not found in index.html")
