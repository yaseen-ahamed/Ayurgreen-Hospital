const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf-8');

// Update video tags
content = content.replace(/src="([^"]+)"\s*\n\s*loop playsinline preload="none" muted><\/video>/g, (match, src) => {
    if (!src.endsWith('#t=0.001')) {
        src += '#t=0.001';
    }
    return `src="${src}"\n                                        loop playsinline preload="metadata" muted></video>`;
});

// Update overlays
content = content.replace(/<div class="story-card-overlay">[\s\S]*?<a href="([^"]+)" class="story-open-ig-btn"[^>]*>[\s\S]*?<\/a>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, (match, igLink) => {
    return `<div class="story-card-overlay">
                                        <div class="story-card-bottom">
                                            <a href="${igLink}" class="story-open-ig-btn" target="_blank" title="Watch on Instagram">
                                                <i data-lucide="instagram" size="18"></i>
                                                <span>Open in Instagram</span>
                                            </a>
                                        </div>
                                    </div>`;
});

fs.writeFileSync('index.html', content, 'utf-8');
console.log('Update complete.');
