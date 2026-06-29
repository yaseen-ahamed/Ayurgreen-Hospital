"use client";

import React, { useEffect } from "react";
import { galleryImages } from "../../gallery_data.js";

export default function Hero() {
  useEffect(() => {
    let active = true;
    let videoSliderInterval: any;

    let handleRehabResize: () => void = () => {};
    let handleVideoResize: () => void = () => {};

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
      });
    };

    Promise.all([
      loadScript("https://unpkg.com/lucide@latest"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
    ]).then(() => {
      return loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
    }).then(() => {
      if (!active) return;

      const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    const lucide = (window as any).lucide;

    if (gsap) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // ─── Video Controls Script ───
    const initPromoVideo = () => {
        const video = document.getElementById('ayurgreen-promo-video') as HTMLVideoElement;
        const playBtn = document.getElementById('video-play-btn');
        const muteBtn = document.getElementById('video-mute-btn');
        const currentTimeText = document.getElementById('video-current-time');
        const durationText = document.getElementById('video-duration');
        const progressContainer = document.getElementById('video-progress-container');
        const progressBar = document.getElementById('video-progress-bar');
        const progressHandle = document.getElementById('video-progress-handle');
        const volumeContainer = document.getElementById('video-volume-container');
        const volumeBar = document.getElementById('video-volume-bar');

        if (!video || !playBtn || !muteBtn || !currentTimeText || !durationText || !progressContainer || !progressBar || !progressHandle || !volumeContainer || !volumeBar) return;

        let previousVolume = 0.6;
        video.volume = previousVolume;
        video.muted = true; // start muted as required by autoPlay policies

        function formatTime(seconds: number) {
            if (!isFinite(seconds)) return "0:00";
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        }

        function updatePlayIcon() {
            if (video.paused) {
                playBtn!.innerHTML = '<i data-lucide="play" size="18"></i>';
            } else {
                playBtn!.innerHTML = '<i data-lucide="pause" size="18"></i>';
            }
            if (lucide) { lucide.createIcons({ attrs: { 'aria-hidden': 'true' } }); }
        }

        function updateVolumeIcon() {
            if (video.muted || video.volume === 0) {
                muteBtn!.innerHTML = '<i data-lucide="volume-x" size="18"></i>';
                volumeBar!.style.width = '0%';
            } else {
                if (video.volume > 0.5) {
                    muteBtn!.innerHTML = '<i data-lucide="volume-2" size="18"></i>';
                } else {
                    muteBtn!.innerHTML = '<i data-lucide="volume-1" size="18"></i>';
                }
                volumeBar!.style.width = `${video.volume * 100}%`;
            }
            if (lucide) { lucide.createIcons({ attrs: { 'aria-hidden': 'true' } }); }
        }

        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            updatePlayIcon();
        });

        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            updatePlayIcon();
        });

        video.addEventListener('play', updatePlayIcon);
        video.addEventListener('pause', updatePlayIcon);

        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            video.muted = !video.muted;
            if (video.muted) {
                previousVolume = video.volume;
            } else {
                if (previousVolume === 0) previousVolume = 0.6;
                video.volume = previousVolume;
            }
            updateVolumeIcon();
        });

        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().catch(err => console.log("Autoplay blocked:", err));
                    } else {
                        video.pause();
                    }
                    updatePlayIcon();
                });
            }, { threshold: 0.25 });
            videoObserver.observe(video);
        }

        volumeContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            const rect = volumeContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = Math.min(Math.max(x / rect.width, 0), 1);
            video.volume = percentage;
            video.muted = (percentage === 0);
            if (percentage > 0) previousVolume = percentage;
            updateVolumeIcon();
        });

        video.addEventListener('timeupdate', () => {
            const current = video.currentTime;
            const duration = video.duration;
            currentTimeText.textContent = formatTime(current);

            if (isFinite(duration) && duration > 0) {
                const percentage = (current / duration) * 100;
                progressBar.style.width = `${percentage}%`;
                progressHandle.style.left = `${percentage}%`;
            }
        });

        video.addEventListener('loadedmetadata', () => {
            durationText.textContent = formatTime(video.duration);
        });

        progressContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            const duration = video.duration;
            if (isFinite(duration) && duration > 0) {
                const rect = progressContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = Math.min(Math.max(x / rect.width, 0), 1);
                video.currentTime = percentage * duration;
            }
        });

        if (isFinite(video.duration)) {
            durationText.textContent = formatTime(video.duration);
        }
        updatePlayIcon();
        updateVolumeIcon();
    };

    initPromoVideo();

    // ─── Rehab Slider & Tabs Script ───
    const initSliderWidth = (scrollId: string) => {
        const container = document.getElementById(scrollId) as any;
        const clipId = 'clip-' + scrollId.replace('scroll-', '');
        const clip = document.getElementById(clipId);
        if (!container || !clip) return;
        const gap = 18;
        const totalWidth = clip.clientWidth;

        let n = 5;
        if (totalWidth < 480) n = 1;
        else if (totalWidth < 768) n = 2;
        else if (totalWidth < 1024) n = 3;
        else if (totalWidth < 1366) n = 4;
        else n = 5;

        const cardWidth = (totalWidth - gap * (n - 1)) / n;
        container.querySelectorAll('.rehab-card').forEach((card: any) => {
            card.style.width = cardWidth + 'px';
            card.style.minWidth = cardWidth + 'px';
        });
        container._cardWidth = cardWidth;
        container._gap = gap;
        container._visibleCards = n;
        container._offset = 0;
        container.style.transition = 'none';
        container.style.transform = 'translateX(0px)';
        updateSliderNav(scrollId);
    };

    const slideCards = (scrollId: string, dir: number) => {
        const container = document.getElementById(scrollId) as any;
        if (!container) return;
        const cardWidth = container._cardWidth || 255;
        const gap = container._gap || 18;
        const n = container._visibleCards || 5;
        const total = container.querySelectorAll('.rehab-card').length;
        const maxOffset = Math.max(0, total - n);
        container._offset = Math.min(Math.max((container._offset || 0) + dir, 0), maxOffset);
        const translateX = -(container._offset * (cardWidth + gap));
        container.style.transform = 'translateX(' + translateX + 'px)';
        container.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
        updateSliderNav(scrollId);
    };

    const updateSliderNav = (scrollId: string) => {
        const tabName = scrollId.replace('scroll-', '');
        const container = document.getElementById(scrollId) as any;
        if (!container) return;
        const n = container._visibleCards || 5;
        const total = container.querySelectorAll('.rehab-card').length;
        const offset = container._offset || 0;
        const prevBtn = document.getElementById('btn-prev-' + tabName) as HTMLButtonElement;
        const nextBtn = document.getElementById('btn-next-' + tabName) as HTMLButtonElement;
        if (prevBtn) prevBtn.disabled = offset <= 0;
        if (nextBtn) nextBtn.disabled = offset >= total - n;
    };

    const switchRehabTab = (tab: string) => {
        const next = document.getElementById('tab-content-' + tab);
        const current = document.querySelector('.rehab-tab-content.tab-visible');
        if (current === next) return;

        document.querySelectorAll('.rehab-tab-btn').forEach(btn => {
            btn.classList.remove('active-tab');
            btn.setAttribute('aria-selected', 'false');
        });
        const activeBtn = document.getElementById('tab-btn-' + tab);
        if (activeBtn) {
            activeBtn.classList.add('active-tab');
            activeBtn.setAttribute('aria-selected', 'true');
        }

        if (current) {
            current.classList.remove('tab-visible');
            current.setAttribute('aria-hidden', 'true');
        }
        if (next) {
            next.classList.add('tab-visible');
            next.setAttribute('aria-hidden', 'false');
        }

        if (lucide) lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
        initSliderWidth('scroll-' + tab);
    };

    (window as any).initSliderWidth = initSliderWidth;
    (window as any).slideCards = slideCards;
    (window as any).switchRehabTab = switchRehabTab;

    initSliderWidth('scroll-programs');
    initSliderWidth('scroll-therapies');

    handleRehabResize = () => {
        ['programs', 'therapies'].forEach(t => initSliderWidth('scroll-' + t));
    };
    window.addEventListener('resize', handleRehabResize);


    // ─── Video Slider Carousel Script ───
    let videoSliderInterval: any;

    function initVideoSlider() {
        const container = document.getElementById('scroll-videos') as any;
        const clip = document.getElementById('clip-videos');
        if (!container || !clip) return;
        const gap = 20;
        const totalWidth = clip.clientWidth;

        let n = 5;
        if (totalWidth < 480) n = 1.25;
        else if (totalWidth < 768) n = 2.2;
        else if (totalWidth < 1024) n = 3.5;
        else if (totalWidth < 1280) n = 4.5;
        else n = 5.5;

        const cardWidth = (totalWidth - gap * (Math.ceil(n) - 1)) / n;

        container.querySelectorAll('.story-card').forEach((card: any) => {
            card.style.width = cardWidth + 'px';
            card.style.minWidth = cardWidth + 'px';
        });

        container._cardWidth = cardWidth;
        container._gap = gap;
        container._n = n;

        updateSliderPosition(false);
    }

    function setupInfiniteSlider() {
        const container = document.getElementById('scroll-videos') as any;
        if (!container) return;

        const originalCards = Array.from(container.children) as any[];
        if (originalCards.length === 0) return;

        const cloneCount = 6;

        for (let i = 0; i < cloneCount; i++) {
            const clone = originalCards[i % originalCards.length].cloneNode(true) as HTMLElement;
            clone.classList.add('is-clone');
            container.appendChild(clone);
        }

        for (let i = 0; i < cloneCount; i++) {
            const index = originalCards.length - 1 - (i % originalCards.length);
            const clone = originalCards[index].cloneNode(true) as HTMLElement;
            clone.classList.add('is-clone');
            container.insertBefore(clone, container.firstChild);
        }

        container._index = cloneCount;
        container._originalCount = originalCards.length;
        container._cloneCount = cloneCount;

        if (lucide) lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });

        setupVideoCardEvents(container);
    }

    function slideVideos(dir: number) {
        const container = document.getElementById('scroll-videos') as any;
        if (!container || container._sliding) return;

        const cloneCount = container._cloneCount || 6;
        const originalCount = container._originalCount || 13;

        container._sliding = true;
        container._index += dir;

        updateSliderPosition(true);

        setTimeout(() => {
            let wrapped = false;
            if (container._index >= originalCount + cloneCount) {
                container._index = cloneCount;
                wrapped = true;
            } else if (container._index < cloneCount) {
                container._index = originalCount + cloneCount - 1;
                wrapped = true;
            }

            if (wrapped) {
                updateSliderPosition(false);
            }
            container._sliding = false;
        }, 450);
    }
    (window as any).slideVideos = slideVideos;

    function updateSliderPosition(withTransition: boolean) {
        const container = document.getElementById('scroll-videos') as any;
        if (!container) return;
        const cardWidth = container._cardWidth || 200;
        const gap = container._gap || 20;
        const index = container._index || 0;

        const translateX = -(index * (cardWidth + gap));

        if (withTransition) {
            container.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
        } else {
            container.style.transition = 'none';
        }
        container.style.transform = 'translateX(' + translateX + 'px)';
    }

    const MINI_PLAY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>`;
    const MINI_PAUSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>`;

    function setMiniPlayIcon(btn: any, isPlaying: boolean) {
        if (!btn) return;
        btn.innerHTML = isPlaying ? MINI_PAUSE_SVG : MINI_PLAY_SVG;
    }

    const STORIES_DATA = [
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 1.mp4",
            instagramUrl: "https://www.instagram.com/reel/DUfjDAYAYyj/?igsh=MWp5Y2YxdHZ1ZG0yMg=="
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 2.mp4",
            instagramUrl: "https://www.instagram.com/reel/DUqTXCjCLf9/?igsh=YjNpbHltc2ZpdnFs"
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 3.mp4",
            instagramUrl: "https://www.instagram.com/reel/DVKpXc8CI2O/?igsh=ZjVlMjlnaHp6MDhz"
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 4.mp4",
            instagramUrl: "https://www.instagram.com/reel/DVNhzc7CI4s/?igsh=ODdwaDI4dGMwbW40"
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 5.mp4",
            instagramUrl: "https://www.instagram.com/reel/DVa26Hvgddv/?igsh=eWloN2s0dmZta2sx"
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 6.mp4",
            instagramUrl: "https://www.instagram.com/reel/DVnPsqkAQv2/?igsh=MTR1NWljazIzbDVmdg=="
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 7.mp4",
            instagramUrl: "https://www.instagram.com/reel/DVnoVftAYsW/?igsh=Z2R5cmZ2ODNlZmlx"
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 8.mp4",
            instagramUrl: "https://www.instagram.com/reel/DWT3WNMAU8_/?igsh=MXY0ZzZzM2xsZ3Fnaw=="
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 9.mp4",
            instagramUrl: "https://www.instagram.com/reel/DWgAjJhgUty/?igsh=MWt4OTVkcTNmbGFnNg=="
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 10.mp4",
            instagramUrl: "https://www.instagram.com/reel/DWjEZG6Aaj3/?igsh=anUyMW04cm45NW8w"
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 11.mp4",
            instagramUrl: "https://www.instagram.com/reel/DWlhRvEAf59/?igsh=MTV0Y2poajhia2Q4MQ=="
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 12.mp4",
            instagramUrl: "https://www.instagram.com/reel/DXvaUWyzm3i/?igsh=MW93a3hoMmZ5OG53"
        },
        {
            videoUrl: "/Assets/Patients/Stories of Relearning/Stories of Relearning 13.mp4",
            instagramUrl: "https://www.instagram.com/reel/DX4Knwshg8V/?igsh=cTN1emJ1MGJrdDJ2"
        }
    ];

    function getInstagramShortcode(url: string) {
        const match = url.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
        return match ? match[1] : null;
    }

    function renderDynamicStories() {
        const container = document.getElementById('scroll-videos');
        if (!container) return;

        container.innerHTML = STORIES_DATA.map(item => {
            const shortcode = getInstagramShortcode(item.instagramUrl);
            const thumbnail = `https://images.weserv.nl/?url=https://www.instagram.com/p/${shortcode}/media/?size=l`;
            return `
                <div class="story-card" data-ig="${item.instagramUrl}">
                    <div class="story-card-video-wrap">
                        <video class="story-card-video" data-src="${item.videoUrl}" poster="${thumbnail}" loop playsinline preload="none" muted></video>
                        <button class="story-play-overlay-btn" aria-label="Play Video">
                            <svg viewBox="0 0 68 48" width="48" height="48" aria-hidden="true">
                                <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#E1306C"></path>
                                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                            </svg>
                        </button>
                        <div class="story-card-overlay-bottom">
                            <div class="story-card-controls">
                                <a href="${item.instagramUrl}" class="story-open-ig-btn" target="_blank" title="Watch on Instagram">
                                    <i data-lucide="instagram" size="14"></i>
                                    <span>Open in Instagram</span>
                                </a>
                                <button class="story-mini-play-btn" aria-label="Play/Pause">
                                    <i data-lucide="play" size="14"></i>
                                </button>
                                <button class="story-mute-btn" aria-label="Mute/Unmute">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        if (lucide) {
            lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
        }
    }

    function setupVideoCardEvents(container: any) {
        container.querySelectorAll('.story-card').forEach((card: any) => {
            const video = card.querySelector('.story-card-video') as HTMLVideoElement;
            const playOverlay = card.querySelector('.story-play-overlay-btn');
            const miniPlay = card.querySelector('.story-mini-play-btn');
            const muteBtn = card.querySelector('.story-mute-btn');

            if (muteBtn) {
                muteBtn.addEventListener('click', (e: any) => {
                    e.preventDefault();
                    e.stopPropagation();
                    video.muted = !video.muted;
                    muteBtn.innerHTML = video.muted
                        ? `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>`
                        : `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
                });
            }

            const togglePlay = (e: any) => {
                if (e.target.closest('.story-open-ig-btn')) return;

                e.preventDefault();
                e.stopPropagation();

                clearInterval(videoSliderInterval);

                const isNotPlaying = video.paused || !video.src || video.src === window.location.href;

                if (isNotPlaying) {
                    document.querySelectorAll('.story-card-video').forEach((otherVideo: any) => {
                        if (otherVideo !== video) {
                            otherVideo.pause();
                            otherVideo.src = "";
                            otherVideo.load();
                            const otherCard = otherVideo.closest('.story-card');
                            otherCard.classList.remove('playing');
                            const otherMini = otherCard.querySelector('.story-mini-play-btn');
                            setMiniPlayIcon(otherMini, false);
                        }
                    });

                    if (!video.src || video.src === window.location.href) {
                        video.src = video.getAttribute('data-src') + "#t=0.001";
                        video.load();
                    }

                    video.play().catch(err => console.log("Play interrupted:", err));
                    card.classList.add('playing');
                    setMiniPlayIcon(miniPlay, true);
                } else {
                    video.pause();
                    video.src = "";
                    video.load();
                    card.classList.remove('playing');
                    setMiniPlayIcon(miniPlay, false);

                    let anyPlaying = false;
                    document.querySelectorAll('.story-card-video').forEach((v: any) => {
                        if (v.src && v.src !== "" && !v.paused) anyPlaying = true;
                    });
                    if (!anyPlaying) {
                        clearInterval(videoSliderInterval);
                        videoSliderInterval = setInterval(() => slideVideos(1), 3500);
                    }
                }
            };

            card.addEventListener('click', togglePlay);
            if (playOverlay) playOverlay.addEventListener('click', togglePlay);
            if (miniPlay) miniPlay.addEventListener('click', togglePlay);
        });
    }

    renderDynamicStories();
    setupInfiniteSlider();
    initVideoSlider();

    videoSliderInterval = setInterval(() => slideVideos(1), 3500);

    const clipVideos = document.getElementById('clip-videos');
    if (clipVideos) {
        clipVideos.addEventListener('mouseenter', () => {
            clearInterval(videoSliderInterval);
        });
        clipVideos.addEventListener('mouseleave', () => {
            let anyPlaying = false;
            document.querySelectorAll('.story-card-video').forEach((v: any) => {
                if (!v.paused) anyPlaying = true;
            });
            if (!anyPlaying) {
                clearInterval(videoSliderInterval);
                videoSliderInterval = setInterval(() => slideVideos(1), 3500);
            }
        });
    }

    handleVideoResize = () => {
        initVideoSlider();
    };
    window.addEventListener('resize', handleVideoResize);


    // ─── Life Gallery Section Script ───
    function renderLifeGallery() {
        const rowTop = document.getElementById('gallery-row-top');
        const rowBottom = document.getElementById('gallery-row-bottom');
        if (!rowTop || !rowBottom) return;

        const renderRow = (container: HTMLElement, items: string[]) => {
            const markup = items.map((src) => {
                return `<img src="${src}" class="gallery-img" alt="Life at Ayurgreen">`;
            }).join('');
            container.innerHTML = markup + markup + markup;
        };

        const topItems: string[] = [];
        const bottomItems: string[] = [];

        galleryImages.forEach((src, idx) => {
            if (idx % 2 === 0) {
                topItems.push(src);
            } else {
                bottomItems.push(src);
            }
        });

        renderRow(rowTop, topItems);
        renderRow(rowBottom, bottomItems);
    }

    function initLifeGalleryAnimation() {
        const trigger = document.getElementById('life-gallery-trigger');
        const rowTop = document.getElementById('gallery-row-top');
        const rowBottom = document.getElementById('gallery-row-bottom');
        if (!trigger || !rowTop || !rowBottom) return;

        const BASE_SPEED = 60;

        let trackTopWidth = 0;
        let trackBottomWidth = 0;

        let xTop = 0;
        let xBottom = 0;
        let direction = 1;
        let targetDirection = 1;
        let lastScrollY = window.scrollY;
        let tickerAdded = false;
        let scrollListenerAdded = false;

        const handleResizeMeasure = () => {
            trackTopWidth = 0;
            trackBottomWidth = 0;
        };
        window.addEventListener('resize', handleResizeMeasure);

        function measureTracks() {
            const tw = rowTop!.scrollWidth / 3;
            const bw = rowBottom!.scrollWidth / 3;
            if (tw > 0) trackTopWidth = tw;
            if (bw > 0) trackBottomWidth = bw;
        }

        function runTicker() {
            if (tickerAdded) return;
            tickerAdded = true;

            measureTracks();

            if (trackBottomWidth > 0) {
                xBottom = -trackBottomWidth * 0.12;
            }

            if (!scrollListenerAdded) {
                scrollListenerAdded = true;
                window.addEventListener('scroll', () => {
                    const current = window.scrollY;
                    const delta = current - lastScrollY;
                    lastScrollY = current;
                    if (delta > 0) {
                        targetDirection = 1;
                    } else if (delta < 0) {
                        targetDirection = -1;
                    }
                }, { passive: true });
            }

            if (gsap) {
                gsap.ticker.add((_time: any, deltaMs: any) => {
                    const dt = Math.min(deltaMs / 1000, 0.05);

                    if (trackTopWidth === 0 || trackBottomWidth === 0) {
                        measureTracks();
                        if (trackBottomWidth > 0 && xBottom === 0) {
                            xBottom = -trackBottomWidth * 0.12;
                        }
                        return;
                    }

                    direction += (targetDirection - direction) * Math.min(dt * 5, 1);
                    const px = BASE_SPEED * direction * dt;

                    xTop -= px;
                    xBottom += px;

                    if (xTop <= -trackTopWidth) xTop += trackTopWidth;
                    if (xTop > 0) xTop -= trackTopWidth;
                    if (xBottom >= 0) xBottom -= trackBottomWidth;
                    if (xBottom < -trackBottomWidth) xBottom += trackBottomWidth;

                    gsap.set(rowTop, { x: xTop, force3D: true });
                    gsap.set(rowBottom, { x: xBottom, force3D: true });
                });
            }
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    observer.disconnect();
                    requestAnimationFrame(() => requestAnimationFrame(runTicker));
                }
            }, { threshold: 0.01 });
            observer.observe(trigger);
        } else {
            setTimeout(runTicker, 500);
        }

        window.addEventListener('resize', measureTracks, { passive: true });

        const imgs = trigger.querySelectorAll('.gallery-img');
        imgs.forEach(img => {
            const imageEl = img as HTMLImageElement;
            if (imageEl.complete) {
                measureTracks();
            } else {
                imageEl.addEventListener('load', measureTracks, { passive: true });
            }
        });
    }

    renderLifeGallery();
    initLifeGalleryAnimation();


    // ─── Pinned Sections GSAP Animations ───
    if (gsap) {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {
            gsap.to(".understanding-title", {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#understanding-pin-trigger",
                    start: "top 95%",
                    end: "top 40%",
                    scrub: 1.0
                }
            });

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#understanding-pin-trigger",
                    start: "top top",
                    end: "+=250%",
                    pin: true,
                    scrub: 1.2,
                    invalidateOnRefresh: true
                }
            });

            tl.to(".storytelling-video-box", { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" })
                .to({}, { duration: 2.0 })
                .to(".storytelling-video-box", { xPercent: -15, scale: 0.95, duration: 1.8, ease: "power2.inOut" })
                .to(".storytelling-card", { opacity: 1, x: 0, y: 30, scale: 1, duration: 1.8, ease: "power2.out" }, "-=0.8")
                .to({}, { duration: 0.8 })
                .to(".story-para", { opacity: 1, y: 0, duration: 1.0, stagger: 0.5, ease: "power2.out" })
                .to(".story-cta-wrap", { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" }, "-=0.3")
                .to({}, { duration: 1.5 });
        });

        mm.add("(max-width: 991px)", () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#understanding-pin-trigger",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            tl.to(".understanding-title", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 })
                .to(".storytelling-video-box", { opacity: 1, scale: 1, duration: 0.8 }, "-=0.4")
                .to(".storytelling-card", { opacity: 1, scale: 1, duration: 0.8 }, "-=0.4")
                .to(".story-para", { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }, "-=0.4")
                .to(".story-cta-wrap", { opacity: 1, y: 0, duration: 0.6 }, "-=0.2");
        });

        gsap.fromTo(".stories-bg-shape",
            {
                width: "70%"
            },
            {
                width: "100%",
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".stories-relearning-section",
                    start: "top bottom-=10%",
                    end: "center center",
                    scrub: 1.2,
                    invalidateOnRefresh: true
                }
            }
        );

        let admireMM = gsap.matchMedia();

        admireMM.add("(min-width: 992px)", () => {
            let admireTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#admire-ecosystem-section",
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse"
                }
            });

            gsap.set("#admire-centerpiece", { scale: 0.9, opacity: 0 });
            gsap.set([".left-col .admire-info-card", ".right-col .admire-info-card"], { opacity: 0, y: 35 });
            gsap.set(".admire-tag-pill", { scale: 0, opacity: 0 });
            gsap.set(".admire-connecting-lines path", { opacity: 0 });

            admireTl.to("#admire-centerpiece", { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.2)" }, 0)
                .to(".admire-connecting-lines path", { opacity: 1, duration: 0.5, stagger: 0.1 }, 0)
                .to([".left-col .admire-info-card", ".right-col .admire-info-card"], { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, 0)
                .to(".admire-tag-pill", { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: "back.out(1.5)" }, 0.2);

            gsap.to(".left-col #admire-card-1", {
                y: -25,
                scrollTrigger: {
                    trigger: "#admire-ecosystem-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            });
            gsap.to(".left-col #admire-card-2", {
                y: 15,
                scrollTrigger: {
                    trigger: "#admire-ecosystem-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            });
            gsap.to(".right-col #admire-card-3", {
                y: -15,
                scrollTrigger: {
                    trigger: "#admire-ecosystem-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            });
            gsap.to(".right-col #admire-card-4", {
                y: 25,
                scrollTrigger: {
                    trigger: "#admire-ecosystem-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2
                }
            });

            let flowAnim = gsap.to(".admire-connecting-lines path", {
                strokeDashoffset: -30,
                duration: 2.5,
                repeat: -1,
                ease: "none"
            });

            return () => {
                flowAnim.kill();
            };
        });

        admireMM.add("(max-width: 991px)", () => {
            let admireTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#admire-ecosystem-section",
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            gsap.set(["#admire-centerpiece", ".admire-info-card", ".admire-tag-pill"], { opacity: 0, y: 30 });

            admireTl.to("#admire-centerpiece", { opacity: 1, y: 0, duration: 0.6 })
                .to(".admire-tag-pill", { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08 }, "-=0.3")
                .to(".admire-info-card", { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, "-=0.3");
        });
    }

    // ─── Ecosystem redirection ───
    const ECOSYSTEM_URLS: any = {
        hospitals: '#',
        getwell: '#',
        niramaya: '#',
        herbals: '#',
        college: '#',
        scientifica: '#',
        shadarasa: '#',
        kizil: '#',
        foundation: '#',
        acfhe: '#'
    };

    function initEcosystemRedirection() {
        Object.keys(ECOSYSTEM_URLS).forEach(key => {
            const card = document.querySelector(`[data-eco-card="${key}"]`);
            if (card) {
                const cta = card.querySelector('.eco-cta-btn') as HTMLAnchorElement;
                if (cta) {
                    cta.href = ECOSYSTEM_URLS[key];
                }

                card.addEventListener('click', (e) => {
                    if ((e.target as HTMLElement).closest('.eco-cta-btn')) return;

                    const url = ECOSYSTEM_URLS[key];
                    if (url && url !== '#' && url !== '') {
                        window.location.href = url;
                    }
                });
            }
        });
        if (lucide) {
            lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
        }
    }
    initEcosystemRedirection();


    // ─── Swipe gesture support for sliders ───
    function addSwipeSupport(clipId: string, onSwipeLeft: any, onSwipeRight: any) {
        const clip = document.getElementById(clipId);
        if (!clip) return;

        let touchStartX = 0;
        let touchEndX = 0;
        const threshold = 40;

        clip.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        clip.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diffX = touchEndX - touchStartX;
            if (Math.abs(diffX) > threshold) {
                if (diffX < 0) {
                    if (onSwipeLeft) onSwipeLeft();
                } else {
                    if (onSwipeRight) onSwipeRight();
                }
            }
        }, { passive: true });
    }

    addSwipeSupport('clip-programs',
        () => slideCards('scroll-programs', 1),
        () => slideCards('scroll-programs', -1)
    );
    addSwipeSupport('clip-therapies',
        () => slideCards('scroll-therapies', 1),
        () => slideCards('scroll-therapies', -1)
    );
    addSwipeSupport('clip-videos',
        () => slideVideos(1),
        () => slideVideos(-1)
    );



    // ─── Weather fetch widget ───
    async function fetchWeather() {
        try {
            const response = await fetch('https://wttr.in/Edappal?format=j1');
            const data = await response.json();
            if (data && data.current_condition && data.current_condition.length > 0) {
                const temp = data.current_condition[0].temp_C;
                const el = document.getElementById('weather-temp');
                if (el) el.innerText = `${temp}°C`;
            }
        } catch (error) {
            console.error("Failed to fetch weather data", error);
        }
    }
    fetchWeather();


    // ─── Compile & execute main.js logic ───
      import('../../main.js').then((module) => {
          // Module runs its setup code immediately
      });
    });


    // ─── Cleanup listeners on unmount ───
    return () => {
        window.removeEventListener('resize', handleRehabResize);
        window.removeEventListener('resize', handleVideoResize);
        clearInterval(videoSliderInterval);
    };
  }, []);

  return (
    <>
<section className="hero-canvas-wrapper" id="hero-section" aria-label="Hero Slider Banner">
        <h1 className="sr-only">Ayurgreen Hospital – Integrated Ortho-Neuro Rehabilitation &amp; Ayurveda Hospital in Kerala
        </h1>
        <div className="hero-canvas-card">
            <img src="/Assets/ayurgreen-hospital.webp"
                alt="Front view of Ayurgreen Hospital, integrated ortho-neuro rehabilitation and Ayurveda center in Kerala, India"
                className="hero-img active" width="2726" height="1536" loading="eager" />
            <picture>
                <source media="(max-width: 768px)" srcSet="/Assets/ag-home-banner-mobile.png" />
                <img src="/Assets/Rehab_Stories_Banner.webp"
                    alt="Ayurgreen Hospital patient recovery success stories and integrated rehabilitation journey in Kerala"
                    className="hero-img" width="2612" height="1469" loading="eager" />
            </picture>
            <div className="hero-overlay-gradient"></div>

            <div className="main-content-block fade-up" style={{ "transitionDelay": "0.1s" }}>
                <h2 className="main-title" id="hero-title">India’s First Robotic Integrated Neuro Rehabilitation Hospital
                </h2>
                <div className="main-sub" id="hero-sub" style={{ "marginTop": "16px" }}>
                    Advanced robotic rehab, Ayurveda, and multidisciplinary care designed to restore independence and
                    quality of life.
                </div>
            </div>


            <div className="weather-widget fade-up" style={{ "transitionDelay": "0.15s" }} id="weather-widget">
                <div className="weather-icon"><i data-lucide="cloud-sun" size="20"></i></div>
                <div>
                    <div className="weather-temp" id="weather-temp">--°C</div>
                    <div className="weather-loc">Ayurgreen, Kerala</div>
                </div>
            </div>
            <div className="bottom-left-badge fade-up" style={{ "transitionDelay": "0.2s" }}>
                <div className="badge-avatars">
                    <img src="https://flagcdn.com/w80/ae.webp" alt="United Arab Emirates flag" width="32" height="32" />
                    <img src="https://flagcdn.com/w80/sa.webp" alt="Saudi Arabia flag" width="32" height="32" />
                    <img src="https://flagcdn.com/w80/om.webp" alt="Oman flag" width="32" height="32" />
                    <img src="https://flagcdn.com/w80/qa.webp" alt="Qatar flag" width="32" height="32" />
                    <div className="plus-icon"><i data-lucide="check" size="14"></i></div>
                </div>
                <span>PATIENTS FROM 50+ COUNTRIES</span>
            </div>

            <div className="bottom-right-action fade-up" style={{ "transitionDelay": "0.3s" }}>
                <a href="stroke-rehab.html" className="main-cta"><span className="cta-text" id="hero-cta-text">Stroke
                        Rehabilitation</span>
                    <span className="arrow-btn"><i data-lucide="arrow-up-right" size="14"></i></span></a>
            </div>

            <div className="hero-slider-nav fade-up" style={{ "transitionDelay": "0.3s" }}>
                <button className="slider-nav-btn" id="hero-prev" aria-label="Previous Slide"><i data-lucide="arrow-left"
                        size="18"></i></button>
                <button className="slider-nav-btn" id="hero-next" aria-label="Next Slide"><i data-lucide="arrow-right"
                        size="18"></i></button>
            </div>
        </div>
    </section>
    </>
  );
}
