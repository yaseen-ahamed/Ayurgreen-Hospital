import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Update video tags
def update_video(match):
    src = match.group(1)
    if not src.endswith('#t=0.001'):
        src += '#t=0.001'
    return f'src="{src}"\n                                        loop playsinline preload="metadata" muted></video>'

content = re.sub(
    r'src="([^"]+)"\s*\n\s*loop playsinline preload="none" muted></video>',
    update_video,
    content
)

# Update overlays
def update_overlay(match):
    ig_link = match.group(1)
    return f'''<div class="story-card-overlay">
                                        <div class="story-card-bottom">
                                            <a href="{ig_link}" class="story-open-ig-btn" target="_blank" title="Watch on Instagram">
                                                <i data-lucide="instagram" size="18"></i>
                                                <span>Open in Instagram</span>
                                            </a>
                                        </div>
                                    </div>'''

content = re.sub(
    r'<div class="story-card-overlay">.*?<a href="([^"]+)" class="story-open-ig-btn".*?</a>.*?</div>\s*</div>\s*</div>',
    update_overlay,
    content,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
