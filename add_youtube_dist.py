import os
import glob

linkedin_str = """                        <a href="https://www.linkedin.com/company/ayurgreen-hospitals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style="display: flex; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <img src="Assets/linkedin.webp" alt="LinkedIn" width="28" height="28" style="object-fit: contain; display: block;">
                        </a>"""

youtube_str = """
                        <!-- <a href="https://www.flaticon.com/free-icons/youtube" title="youtube icons">Youtube icons created by Md Tanvirul Haque - Flaticon</a> -->
                        <a href="https://youtube.com/@ayurgreenhospitals?si=Drm6iQvEmxhoxU5l-" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style="display: flex; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <img src="Assets/youtube.svg" alt="YouTube" width="28" height="28" style="object-fit: contain; display: block;" title="Youtube icons created by Md Tanvirul Haque - Flaticon">
                        </a>"""

html_files = glob.glob("dist/*.html")
updated = 0

for file in html_files:
    with open(file, 'r') as f:
        content = f.read()
    
    if linkedin_str in content and "youtube.com/@ayurgreenhospitals" not in content:
        content = content.replace(linkedin_str, linkedin_str + youtube_str)
        with open(file, 'w') as f:
            f.write(content)
        updated += 1

print(f"Total files updated in dist/: {updated}")
