const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf-8');

// 1. Update the HTML structure of the cards
content = content.replace(/<div class="story-card-video-wrap">[\s\S]*?<video class="story-card-video"[^>]*src="([^"]+)"[^>]*>[\s\S]*?<a href="([^"]+)" class="story-open-ig-btn"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, (match, videoSrc, igLink) => {
    return `<div class="story-card-video-wrap">
                                    <video class="story-card-video"
                                        src="${videoSrc}"
                                        loop playsinline preload="metadata" muted></video>
                                    <button class="story-play-overlay-btn" aria-label="Play Video">
                                        <svg viewBox="0 0 68 48" width="48" height="48">
                                            <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#E1306C"></path>
                                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                                        </svg>
                                    </button>
                                    <div class="story-card-overlay-bottom">
                                        <div class="story-card-controls">
                                            <a href="${igLink}" class="story-open-ig-btn" target="_blank" title="Watch on Instagram">
                                                <i data-lucide="instagram" size="14"></i>
                                                <span>Open in Instagram</span>
                                            </a>
                                            <button class="story-mini-play-btn" aria-label="Play/Pause">
                                                <i data-lucide="play" size="14"></i>
                                            </button>
                                            <button class="story-mute-btn" aria-label="Mute/Unmute">
                                                <i data-lucide="volume-x" size="14"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
});

// 2. Update CSS
const cssPattern = /\.story-card\s*\{[\s\S]*?\.story-mini-play-btn:hover\s*\{[^}]+\}/;

const newCSS = `.story-card {
            flex: 0 0 auto;
            scroll-snap-align: start;
            border-radius: 16px;
            background: #fff;
            padding: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            position: relative;
            cursor: pointer;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            box-sizing: border-box;
        }

        .story-card:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .story-card.is-clone {
            /* Clones are identical */
        }

        .story-card-video-wrap {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            overflow: hidden;
            background: #000;
        }

        .story-card-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .story-play-overlay-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            border: none;
            background: transparent;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 2;
        }
        
        .story-play-overlay-btn svg {
            filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
            transition: transform 0.2s;
        }
        
        .story-play-overlay-btn:hover svg {
            transform: scale(1.1);
        }

        .story-card.playing .story-play-overlay-btn {
            opacity: 0;
            pointer-events: none;
        }

        .story-card-overlay-bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 40px 12px 12px 12px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            z-index: 3;
            pointer-events: none;
        }

        .story-card-controls {
            display: flex;
            align-items: center;
            gap: 8px;
            pointer-events: auto;
        }

        .story-open-ig-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            color: #fff !important;
            text-decoration: none;
            font-size: 11px;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        .story-open-ig-btn:hover {
            background: rgba(0, 0, 0, 0.8);
            border-color: rgba(255, 255, 255, 0.4);
        }

        .story-mini-play-btn, .story-mute-btn {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            flex-shrink: 0;
        }

        .story-mini-play-btn:hover, .story-mute-btn:hover {
            background: rgba(0, 0, 0, 0.8);
        }`;

content = content.replace(cssPattern, newCSS);

// 3. Update the JavaScript to handle the new mute button logic
const jsReplace = `const miniPlay = card.querySelector('.story-mini-play-btn');`;
const jsNew = `const miniPlay = card.querySelector('.story-mini-play-btn');
                const muteBtn = card.querySelector('.story-mute-btn');
                
                if (muteBtn) {
                    muteBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        video.muted = !video.muted;
                        const icon = video.muted ? 'volume-x' : 'volume-2';
                        muteBtn.innerHTML = \`<i data-lucide="\${icon}" size="14"></i>\`;
                        lucide.createIcons();
                    });
                }`;

content = content.replace(jsReplace, jsNew);

fs.writeFileSync('index.html', content, 'utf-8');
console.log('Update complete.');
