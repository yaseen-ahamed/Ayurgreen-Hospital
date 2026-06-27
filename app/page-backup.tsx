"use client";

import React, { useEffect } from "react";
import DifferentNationsSection from "@/components/ui/scroll-morph-hero";
import { galleryImages } from "../gallery_data.js";

export default function Home() {
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


    // ─── Mobile drawer menu toggle ───
    function initMobileMenu() {
        const menuBtn = document.getElementById('menu-btn');
        const drawer = document.getElementById('mobile-menu-drawer');
        const closeBtn = document.getElementById('mobile-menu-close-btn');
        const backdrop = document.getElementById('mobile-menu-backdrop');
        const triggers = document.querySelectorAll('.mobile-nav-trigger');

        if (!menuBtn || !drawer || !backdrop) return;

        function openMenu() {
            drawer!.classList.add('active');
            backdrop!.classList.add('active');
            drawer!.setAttribute('aria-hidden', 'false');
            backdrop!.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            drawer!.classList.remove('active');
            backdrop!.classList.remove('active');
            drawer!.setAttribute('aria-hidden', 'true');
            backdrop!.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (window.innerWidth > 1024) return;
            if (drawer!.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);

        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        triggers.forEach(trigger => {
            trigger.addEventListener('click', function (this: HTMLElement, e) {
                e.preventDefault();
                const parent = this.parentElement!;
                const content = parent.querySelector('.mobile-nav-dropdown-content') as HTMLElement;
                const icon = this.querySelector('[data-lucide="chevron-down"]') as HTMLElement;

                const isActive = parent.classList.toggle('active');
                if (isActive) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) icon.style.transform = 'rotate(180deg)';
                } else {
                    content.style.maxHeight = '0px';
                    if (icon) icon.style.transform = 'rotate(0deg)';
                }
            });
        });
    }
    initMobileMenu();


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
      import('../main.js').then((module) => {
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
    <div className="w-full relative">
      

    {/*  Pixel-Level Match Hero Section  */}
    <section className="hero-canvas-wrapper" id="hero-section" aria-label="Hero Slider Banner">
        <h1 className="sr-only">Ayurgreen Hospital – Integrated Ortho-Neuro Rehabilitation &amp; Ayurveda Hospital in Kerala
        </h1>
        <div className="hero-canvas-card">
            <img src="Assets/ayurgreen-hospital.webp"
                alt="Front view of Ayurgreen Hospital, integrated ortho-neuro rehabilitation and Ayurveda center in Kerala, India"
                className="hero-img active" width="2726" height="1536" loading="eager" />
            <picture>
                <source media="(max-width: 768px)" srcSet="Assets/ag-home-banner-mobile.png" />
                <img src="Assets/Rehab_Stories_Banner.webp"
                    alt="Ayurgreen Hospital patient recovery success stories and integrated rehabilitation journey in Kerala"
                    className="hero-img" width="2612" height="1469" loading="eager" />
            </picture>
            <div className="hero-overlay-gradient"></div>

            <header className="hero-header">
                <div className="header-left">
                    <nav className="nav-pills-container">
                        <div className="nav-item-wrapper">
                            <a href="about.html" className="individual-pill">About Us <i data-lucide="chevron-down"
                                    size="14"></i></a>
                            <div className="nav-dropdown">
                                <a href="about.html"><i data-lucide="award" size="14" style={{ "color": "#FFD700" }}></i> Our
                                    Legacy</a>
                                <a href="#"><i data-lucide="activity" size="14" style={{ "color": "#9C27B0" }}></i> Admire</a>
                                <a href="about.html"><i data-lucide="users" size="14" style={{ "color": "#4CAF50" }}></i>
                                    Multidisciplinary Team</a>
                                <a href="about.html#facilities"><i data-lucide="building" size="14"
                                        style={{ "color": "#2196F3" }}></i>
                                    Facilities</a>
                            </div>
                        </div>

                        <div className="nav-item-wrapper">
                            <a href="javascript:void(0)" className="individual-pill">Specialities <i
                                    data-lucide="chevron-down" size="14"></i></a>
                            <div className="nav-dropdown mega-menu-3-col">
                                <a href="stroke-rehab.html"><i data-lucide="activity" size="14"
                                        style={{ "color": "#E91E63" }}></i> Stroke</a>
                                <a href="spinal-cord-injury.html"><i data-lucide="bone" size="14"
                                        style={{ "color": "#9C27B0" }}></i>
                                    Spinal Cord Injury</a>
                                <a href="traumatic-brain-injury.html"><i data-lucide="brain" size="14"
                                        style={{ "color": "#FF9800" }}></i>
                                    Traumatic Brain Injury</a>
                                <a href="hemiplegia.html"><i data-lucide="person-standing" size="14"
                                        style={{ "color": "#00BCD4" }}></i>
                                    Hemiplegia</a>
                                <a href="quadriplegia-paraplegia.html"><i data-lucide="accessibility" size="14"
                                        style={{ "color": "#3F51B5" }}></i>
                                    Quadriplegia &amp; Paraplegia</a>
                                <a href="post-surgical-complications.html"><i data-lucide="stethoscope" size="14"
                                        style={{ "color": "#009688" }}></i>
                                    Post-Surgical Complications</a>
                                <a href="motor-neuron-diseases.html"><i data-lucide="network" size="14"
                                        style={{ "color": "#607D8B" }}></i>
                                    Motor Neuron Diseases</a>
                                <a href="cerebral-palsy.html"><i data-lucide="flower-2" size="14"
                                        style={{ "color": "#E040FB" }}></i>
                                    Cerebral Palsy</a>
                                <a href="parkinsons-disease.html"><i data-lucide="zap" size="14"
                                        style={{ "color": "#FFEB3B" }}></i>
                                    Parkinson's Disease</a>
                                <a href="myopathy.html"><i data-lucide="dna" size="14" style={{ "color": "#8BC34A" }}></i>
                                    Myopathy</a>
                                <a href="disc-spine-problems.html"><i data-lucide="git-commit" size="14"
                                        style={{ "color": "#FF5722" }}></i> Disc &amp;
                                    Spine Problems</a>
                                <a href="sciatica.html"><i data-lucide="zap-off" size="14" style={{ "color": "#795548" }}></i>
                                    Sciatica</a>
                                <a href="obesity.html"><i data-lucide="scale" size="14" style={{ "color": "#F44336" }}></i>
                                    Obesity</a>
                                <a href="post-covid-complications.html"><i data-lucide="shield-alert" size="14"
                                        style={{ "color": "#FFC107" }}></i>
                                    Post-Covid Complications</a>
                                <a href="muscular-dystrophy.html"><i data-lucide="heart-pulse" size="14"
                                        style={{ "color": "#E91E63" }}></i> Muscular
                                    Dystrophy</a>
                                <a href="osteoarthritis.html"><i data-lucide="target" size="14"
                                        style={{ "color": "#9E9E9E" }}></i>
                                    Osteoarthritis</a>
                                <a href="rheumatoid-arthritis.html"><i data-lucide="flame" size="14"
                                        style={{ "color": "#FF5722" }}></i>
                                    Rheumatoid Arthritis</a>
                                <a href="developmental-delay.html"><i data-lucide="sprout" size="14"
                                        style={{ "color": "#8BC34A" }}></i>
                                    Developmental Delay</a>
                                <a href="psychological-problems.html"><i data-lucide="lightbulb" size="14"
                                        style={{ "color": "#FFEB3B" }}></i>
                                    Psychological Problems</a>
                                <a href="autism.html"><i data-lucide="heart" size="14" style={{ "color": "#E91E63" }}></i>
                                    Autism</a>
                                <a href="psychiatry.html"><i data-lucide="brain" size="14" style={{ "color": "#9C27B0" }}></i>
                                    Psychiatry</a>
                            </div>
                        </div>

                        <div className="nav-item-wrapper">
                            <a href="javascript:void(0)" className="individual-pill">Departments <i
                                    data-lucide="chevron-down" size="14"></i></a>
                            <div className="nav-dropdown mega-menu-3-col">
                                <a href="ayurveda.html"><i data-lucide="leaf" size="14" style={{ "color": "#4CAF50" }}></i>
                                    Ayurveda</a>
                                <a href="physiotherapy.html"><i data-lucide="dumbbell" size="14"
                                        style={{ "color": "#FF9800" }}></i>
                                    Physiotherapy</a>
                                <a href="robotic-rehab.html"><i data-lucide="bot" size="14" style={{ "color": "#00BCD4" }}></i>
                                    Robotic Rehabilitation</a>
                                <a href="occupational-therapy.html"><i data-lucide="puzzle" size="14"
                                        style={{ "color": "#9C27B0" }}></i>
                                    Occupational Therapy</a>
                                <a href="speech-therapy.html"><i data-lucide="message-circle" size="14"
                                        style={{ "color": "#2196F3" }}></i>
                                    Speech Therapy</a>
                                <a href="virtual-reality.html"><i data-lucide="headset" size="14"
                                        style={{ "color": "#E91E63" }}></i>
                                    Virtual Reality</a>
                                <a href="yoga-meditation.html"><i data-lucide="sun" size="14"
                                        style={{ "color": "#FFC107" }}></i>
                                    Yoga and Meditation</a>
                                <a href="acupuncture.html"><i data-lucide="map-pin" size="14"
                                        style={{ "color": "#F44336" }}></i>
                                    Acupuncture</a>
                                <a href="reflexology.html"><i data-lucide="footprints" size="14"
                                        style={{ "color": "#795548" }}></i>
                                    Reflexology</a>
                                <a href="hydro-therapy.html"><i data-lucide="waves" size="14"
                                        style={{ "color": "#03A9F4" }}></i>
                                    Hydro / Aquatic Therapy</a>
                                <a href="pediatrics.html"><i data-lucide="baby" size="14" style={{ "color": "#E040FB" }}></i>
                                    Pediatrics</a>
                                <a href="slimming-treatment.html"><i data-lucide="ruler" size="14"
                                        style={{ "color": "#009688" }}></i>
                                    Slimming Treatment</a>
                                <a href="pain-management.html"><i data-lucide="shield-plus" size="14"
                                        style={{ "color": "#4CAF50" }}></i> Pain
                                    Management</a>
                                <a href="diet-nutrition.html"><i data-lucide="utensils" size="14"
                                        style={{ "color": "#FF5722" }}></i> Diet &amp;
                                    Nutrition</a>
                                <a href="counseling.html"><i data-lucide="heart-handshake" size="14"
                                        style={{ "color": "#E91E63" }}></i>
                                    Counseling</a>
                                <a href="dentistry.html"><i data-lucide="smile" size="14" style={{ "color": "#00BCD4" }}></i>
                                    Dentistry</a>
                                <a href="modern-medicine.html"><i data-lucide="pill" size="14"
                                        style={{ "color": "#9C27B0" }}></i>
                                    Modern Medicine</a>
                                <a href="assistive-devices.html"><i data-lucide="accessibility" size="14"
                                        style={{ "color": "#3F51B5" }}></i>
                                    Assistive Devices</a>
                            </div>
                        </div>

                        <div className="nav-item-wrapper">
                            <a href="rehab-village.html" className="individual-pill">Rehab Village</a>
                        </div>
                    </nav>
                </div>

                <a href="index.html" className="header-center-link">
                    <img src="Assets/Ayurgreen_Logo.webp" alt="Ayurgreen Hospital logo" width="1656" height="1344" />
                </a>

                <div className="header-right">
                    <div className="nav-item-wrapper">
                        <a href="javascript:void(0)" className="individual-pill specializations-pill">
                            <span className="pill-text-wrapper">Modern Int<span
                                    className="pill-text-expandable">egrations</span></span>
                            <i data-lucide="chevron-down" size="14"></i>
                        </a>
                        <div className="nav-dropdown">
                            <a href="neurology.html"><i data-lucide="brain-circuit" size="14"
                                    style={{ "color": "#607D8B" }}></i>
                                Neurology</a>
                            <a href="neurosurgery.html"><i data-lucide="microscope" size="14"
                                    style={{ "color": "#009688" }}></i>
                                Neurosurgery</a>
                            <a href="orthopedic.html"><i data-lucide="hammer" size="14" style={{ "color": "#795548" }}></i>
                                Orthopedic</a>
                            <a href="ent.html"><i data-lucide="ear" size="14" style={{ "color": "#FF9800" }}></i> ENT</a>
                            <a href="general-medicine.html"><i data-lucide="syringe" size="14"
                                    style={{ "color": "#F44336" }}></i>
                                General Medicine</a>
                            <a href="urology.html"><i data-lucide="droplet" size="14" style={{ "color": "#03A9F4" }}></i>
                                Urology</a>
                            <a href="cardiology.html"><i data-lucide="heart" size="14" style={{ "color": "#E91E63" }}></i>
                                Cardiology</a>
                            <a href="respiratory-therapy.html"><i data-lucide="wind" size="14"
                                    style={{ "color": "#00BCD4" }}></i>
                                Respiratory Therapy</a>
                            <a href="neuro-psychology.html"><i data-lucide="brain" size="14"
                                    style={{ "color": "#9C27B0" }}></i> Neuro
                                Psychology</a>
                        </div>
                    </div>
                    <a href="international-patients.html" className="individual-pill">International Patients</a>
                    <a href="#consultation" className="header-cta-pill">Book an appointment <span className="arrow-btn"><i
                                data-lucide="arrow-up-right" size="14"></i></span></a>
                    <div className="nav-item-wrapper bw-menu-wrapper">
                        <button className="menu-btn" id="menu-btn" aria-label="Open Navigation Menu"><i data-lucide="menu"
                                size="18"></i></button>
                        <div className="bw-nav-dropdown">
                            <a href="#life-gallery-trigger">Life at Ayurgreen</a>
                            <a href="#stories-relearning">Stories of Relearning</a>
                            <a href="about.html">Careers</a>
                            <a href="about.html">News &amp; Events</a>
                            <a href="about.html">Insights</a>
                            <a href="#">Insurance</a>
                            <a href="#">CSR Policy</a>
                        </div>
                    </div>
                </div>
            </header>

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

    <main>

        {/*  International Destination Section (React Component)  */}
        <DifferentNationsSection />
        

        {/*  Understanding Ayurgreen Section  */}
        <section id="understanding-pin-trigger" aria-label="Understanding Ayurgreen">
            <div className="understanding-pin-content">
                {/*  Title Reveal  */}
                <h2 className="understanding-title premium-title">Understanding Ayurgreen</h2>

                {/*  Storytelling Layout  */}
                <div className="storytelling-layout">
                    {/*  Left/Center: Video Container  */}
                    <div className="storytelling-video-box">
                        <div className="ayurgreen-video-container"
                            style={{ "position": "relative", "width": "100%", "height": "100%", "borderRadius": "24px", "overflow": "hidden", "display": "block", "aspectRatio": "16/9", "cursor": "pointer" }}>

                            <style dangerouslySetInnerHTML={{ __html: `
                                .ayurgreen-video-container:hover .custom-player-controls {
                                    opacity: 1 !important;
                                    transform: translateY(0) scale(1) !important;
                                    filter: blur(0px) !important;
                                    pointer-events: auto !important;
                                }

                                .ayurgreen-video-container:hover #video-progress-handle {
                                    opacity: 1 !important;
                                }
                            ` }} />

                            <video id="ayurgreen-promo-video" src="Assets/Ayurgreen_Hospitals.webm" autoPlay loop
                                muted playsInline
                                style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }}
                                title="Ayurgreen Hospital Promotional Video"
                                aria-label="Ayurgreen Hospital Promotional Video"></video>

                            {/*  Modern Blur Controls Container  */}
                            <div className="custom-player-controls"
                                style={{ "position": "absolute", "bottom": "0", "left": "0", "right": "0", "margin": "16px auto", "width": "calc(100% - 32px)", "maxWidth": "500px", "zIndex": "20", "background": "rgba(17, 17, 17, 0.6)", "backdropFilter": "blur(12px)", "WebkitBackdropFilter": "blur(12px)", "borderRadius": "16px", "padding": "12px 16px", "border": "1px solid rgba(255, 255, 255, 0.1)", "opacity": "0", "transform": "translateY(10px) scale(0.98)", "filter": "blur(5px)", "transition": "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)", "pointerEvents": "none", "boxShadow": "0 10px 30px rgba(0, 0, 0, 0.3)" }}>

                                {/*  Timeline Slider Row  */}
                                <div style={{ "display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px" }}>
                                    <span id="video-current-time"
                                        style={{ "color": "#fff", "fontSize": "11px", "fontWeight": "500", "fontFamily": "monospace", "minWidth": "32px" }}>0:00</span>
                                    <div id="video-progress-container" role="slider" aria-label="Video Progress Slider"
                                        aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} tabIndex={0}
                                        style={{ "flex": "1", "height": "4px", "background": "rgba(255, 255, 255, 0.2)", "borderRadius": "999px", "position": "relative", "cursor": "pointer", "display": "flex", "alignItems": "center" }}>
                                        <div id="video-progress-bar"
                                            style={{ "height": "100%", "background": "#fff", "borderRadius": "999px", "width": "0%" }}>
                                        </div>
                                        <div id="video-progress-handle"
                                            style={{ "width": "8px", "height": "8px", "borderRadius": "50%", "background": "#fff", "position": "absolute", "left": "0%", "transform": "translateX(-50%)", "opacity": "0", "transition": "opacity 0.2s" }}>
                                        </div>
                                    </div>
                                    <span id="video-duration"
                                        style={{ "color": "#fff", "fontSize": "11px", "fontWeight": "500", "fontFamily": "monospace", "minWidth": "32px", "textAlign": "right" }}>0:00</span>
                                </div>

                                {/*  Action Buttons Row  */}
                                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between" }}>
                                    <div style={{ "display": "flex", "alignItems": "center", "gap": "16px" }}>
                                        {/*  Play/Pause Button  */}
                                        <button id="video-play-btn" aria-label="Play Video"
                                            style={{ "background": "none", "border": "none", "cursor": "pointer", "color": "#fff", "padding": "0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "32px", "height": "32px", "borderRadius": "8px", "transition": "background 0.2s" }}
                                            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.background = 'none'; }}>
                                            <i data-lucide="play" size="18" aria-hidden="true"></i>
                                        </button>

                                        {/*  Mute/Volume Controls  */}
                                        <div style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                                            <button id="video-mute-btn" aria-label="Unmute Video"
                                                style={{ "background": "none", "border": "none", "cursor": "pointer", "color": "#fff", "padding": "0", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "32px", "height": "32px", "borderRadius": "8px", "transition": "background 0.2s" }}
                                                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                                                onMouseOut={(e) => { e.currentTarget.style.background = 'none'; }}>
                                                <i data-lucide="volume-x" size="18" aria-hidden="true"></i>
                                            </button>

                                            {/*  Volume Slider  */}
                                            <div id="video-volume-container" role="slider" aria-label="Volume Slider"
                                                aria-valuemin={0} aria-valuemax={100} aria-valuenow={60} tabIndex={0}
                                                style={{ "width": "80px", "height": "4px", "background": "rgba(255, 255, 255, 0.2)", "borderRadius": "999px", "position": "relative", "cursor": "pointer", "display": "flex", "alignItems": "center" }}>
                                                <div id="video-volume-bar"
                                                    style={{ "height": "100%", "background": "#fff", "borderRadius": "999px", "width": "60%" }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Script removed from JSX and moved to useEffect */}
                        </div>
                    </div>

                    {/*  Right: Text Card Overlay  */}
                    <div className="storytelling-card">
                        <p className="story-para">
                            At Ayurgreen Hospitals, we know that healing is not only physical. When someone goes
                            through illness, injury, or long periods of recovery, it affects emotions, confidence,
                            family, and everyday life. That is why we believe care should feel comforting, personal,
                            and human.
                        </p>
                        <p className="story-para">
                            Ayurgreen was built with the idea that people recover better when they feel understood,
                            supported, and cared for with patience. By bringing together Ayurveda, rehabilitation,
                            modern therapies, and compassionate healthcare professionals, we create an environment
                            where recovery feels less stressful and more hopeful.
                        </p>
                        <p className="story-para">
                            For many families, Ayurgreen becomes more than a hospital. It becomes a place where
                            small improvements are celebrated, strength is rebuilt slowly, and people are encouraged
                            to move forward with confidence and dignity.
                        </p>

                        <div className="story-cta-wrap">
                            <a href="about.html" className="intl-pill-btn"
                                style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.5px", "padding": "4px 4px 4px 16px" }}>
                                MORE ABOUT US <div className="intl-pill-icon"
                                    style={{ "width": "28px", "height": "28px", "marginLeft": "12px" }}><i
                                        data-lucide="arrow-up-right" size="14"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  ADMIRE Section  */}
        <section id="admire-ecosystem-section" aria-label="ADMIRE Ecosystem">
            {/*  Background Blobs for soft color depths  */}
            <div className="admire-bg-blob admire-blob-1"></div>
            <div className="admire-bg-blob admire-blob-2"></div>
            <div className="admire-bg-blob admire-blob-3"></div>

            <div className="admire-container">

                {/*  Section Header  */}
                <div className="admire-header">
                    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "24px" }}>
                        <img src="Assets/Logo/ADMIRE Logo.webp"
                            alt="ADMIRE (Advanced Modalities in Rehabilitative Engineering) Logo" width="281"
                            height="155" loading="lazy" style={{ "height": "90px", "width": "auto", "objectFit": "contain" }} />
                        <div style={{ "textAlign": "left", "borderLeft": "2px solid #10b981", "paddingLeft": "20px" }}>
                            <h2 className="premium-title" style={{ "margin": "0" }}>
                                Advanced Modalities in<br />Rehabilitative Engineering</h2>
                        </div>
                    </div>
                    <p className="admire-intro-text">
                        ADMIRE represents Ayurgreen Hospital's 25 years of experience in neuro-rehabilitation, bringing
                        together Ayurveda, Physiotherapy, Occupational Therapy, Speech Therapy, Robotics, and modern
                        medicine under one integrated, patient-centered approach designed to restore independence.
                    </p>
                </div>

                {/*  Infographic Grid  */}
                <div className="admire-grid">
                    {/*  SVG Connecting Flow Lines  */}
                    <svg className="admire-connecting-lines" viewBox="0 0 1000 600" preserveAspectRatio="none"
                        aria-hidden="true">
                        {/*  Path from Card 1 (Top Left) to Center  */}
                        <path id="path-teal" d="M 220 150 C 350 150, 320 300, 500 300" stroke="rgba(20, 184, 166, 0.2)"
                            strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                        {/*  Path from Card 2 (Bottom Left) to Center  */}
                        <path id="path-amber" d="M 220 450 C 350 450, 320 300, 500 300" stroke="rgba(245, 158, 11, 0.2)"
                            strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                        {/*  Path from Card 3 (Top Right) to Center  */}
                        <path id="path-indigo" d="M 780 150 C 650 150, 680 300, 500 300" stroke="rgba(79, 70, 229, 0.2)"
                            strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                        {/*  Path from Card 4 (Bottom Right) to Center  */}
                        <path id="path-emerald" d="M 780 450 C 650 450, 680 300, 500 300"
                            stroke="rgba(5, 150, 105, 0.2)" strokeWidth="2" fill="none" strokeDasharray="10 5"></path>
                    </svg>

                    {/*  LEFT COLUMN (Pillar 1 & 2)  */}
                    <div className="admire-col left-col">
                        {/*  Pillar 1: Integrated Healing  */}
                        <div className="admire-info-card admire-card-teal" id="admire-card-1">
                            <span className="card-badge">01 / Integrated</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="activity" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Integrated Healing</h3>
                            <p className="admire-card-desc">
                                ADMIRE combines robotic rehabilitation, physiotherapy, occupational therapy, speech
                                therapy, Ayurveda, yoga, acupuncture, and emotional healing into one connected recovery
                                system.
                            </p>
                        </div>

                        {/*  Pillar 2: Human-Centered Recovery  */}
                        <div className="admire-info-card admire-card-amber" id="admire-card-2">
                            <span className="card-badge">02 / Compassion</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="heart" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Human-Centered Recovery</h3>
                            <p className="admire-card-desc">
                                ADMIRE believes recovery is not only physical. Patients heal better when they feel
                                emotionally supported, understood, and cared for with compassion.
                            </p>
                        </div>
                    </div>

                    {/*  CENTER COLUMN (Image centerpiece + floating tags + CTA)  */}
                    <div className="admire-col center-col">
                        <div className="admire-center-visual-wrapper">
                            {/*  Floating tags orbiting central image  */}
                            <div className="admire-tag-pill float-1" style={{ "top": "15px", "left": "-45px" }}>Robotics</div>
                            <div className="admire-tag-pill float-2" style={{ "top": "35px", "right": "-40px" }}>Ayur Medicine</div>
                            <div className="admire-tag-pill float-3" style={{ "bottom": "45px", "left": "-50px" }}>Physiotherapy</div>
                            <div className="admire-tag-pill float-4" style={{ "bottom": "25px", "right": "-45px" }}>Occupational
                                Therapy</div>

                            {/*  Central image framed  */}
                            <div className="admire-center-image-frame" id="admire-centerpiece">
                                <img src="Assets/Programs/Virtual Reality.webp"
                                    alt="Therapist guiding a patient through Virtual Reality cognitive rehabilitation session at Ayurgreen Hospital"
                                    width="1024" height="576" loading="lazy" />
                            </div>
                        </div>

                        {/*  CTA Button Centered below visual centerpiece  */}
                        <div style={{ "display": "flex", "justifyContent": "center", "position": "relative", "zIndex": "5" }}>
                            <a href="#" className="intl-pill-btn"
                                style={{ "fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.5px", "padding": "4px 4px 4px 16px", "borderColor": "#d1fae5" }}>
                                REHABILITATION PROCESS
                                <div className="intl-pill-icon"
                                    style={{ "background": "#000", "width": "28px", "height": "28px", "marginLeft": "12px" }}>
                                    <i data-lucide="arrow-up-right" size="14"></i>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/*  RIGHT COLUMN (Pillar 3 & 4)  */}
                    <div className="admire-col right-col">
                        {/*  Pillar 3: Collaborative Rehabilitation  */}
                        <div className="admire-info-card admire-card-indigo" id="admire-card-3">
                            <span className="card-badge">03 / Synergy</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="users" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Collaborative Rehabilitation</h3>
                            <p className="admire-card-desc">
                                Doctors, therapists, caregivers, support staff, and families work together as one
                                rehabilitation ecosystem to create better recovery experiences.
                            </p>
                        </div>

                        {/*  Pillar 4: Transformation Through Care  */}
                        <div className="admire-info-card admire-card-emerald" id="admire-card-4">
                            <span className="card-badge">04 / Growth</span>
                            <div className="card-icon-wrapper">
                                <i data-lucide="sparkles" size="24"></i>
                            </div>
                            <h3 className="admire-card-title">Transformation Through Care</h3>
                            <p className="admire-card-desc">
                                ADMIRE focuses on helping patients rebuild movement, independence, confidence, and
                                quality of life through compassionate rehabilitation.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/*  Your Journey to Rehabilitation  */}
        <section id="rehabilitation-journey" aria-label="Rehabilitation Journey"
            style={{ "padding": "80px 0", "background": "#fff" }}>
            <div style={{ "maxWidth": "1800px", "padding": "0 48px", "margin": "0 auto", "boxSizing": "border-box" }}>

                {/*  Title  */}
                <div style={{ "textAlign": "center", "marginBottom": "48px" }}>
                    <h2 className="rehab-journey-title premium-title">Rehabilitation Journey</h2>
                </div>

                {/*  Tab List  */}
                <div style={{ "display": "flex", "justifyContent": "center", "marginBottom": "36px" }}>
                    <div role="tablist" aria-label="Rehabilitation Options"
                        style={{ "display": "inline-flex", "background": "#fff", "border": "1px solid #e5e7eb", "borderRadius": "9999px", "padding": "4px", "gap": "4px", "boxShadow": "0 1px 4px rgba(0,0,0,0.06)" }}>
                        <button id="tab-btn-programs" className="rehab-tab-btn active-tab"
                            onClick={() => (window as any).switchRehabTab?.('programs')} role="tab" aria-selected="true"
                            aria-controls="tab-content-programs">
                            <i data-lucide="activity" aria-hidden="true"></i> Specialities
                        </button>
                        <button id="tab-btn-therapies" className="rehab-tab-btn" onClick={() => (window as any).switchRehabTab?.('therapies')}
                            role="tab" aria-selected="false" aria-controls="tab-content-therapies">
                            <i data-lucide="leaf" aria-hidden="true"></i> Departments
                        </button>
                    </div>
                </div>

                {/*  Programs Tab  */}
                <div id="tab-content-programs" className="rehab-tab-content tab-visible" role="tabpanel"
                    aria-labelledby="tab-btn-programs">
                    <div className="rehab-slider-clip" id="clip-programs">
                        <div className="rehab-cards-scroll" id="scroll-programs">
                            <a href="stroke-rehab.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Stroke.webp"
                                    alt="Stroke Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Stroke Rehabilitation</h3>
                                    <p className="rehab-card-desc">A highly aggressive, time-sensitive integrated treatment
                                        pathway utilizing brain plasticity to recover lost motor, speech, and cognitive
                                        functions post-stroke.</p>
                                </div>
                            </a>

                            <a href="spinal-cord-injury.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Spinal Cord Injury.webp"
                                    alt="Spinal Cord Injury Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Spinal Cord Injury</h3>
                                    <p className="rehab-card-desc">Rebuilding trunk control, sensory awareness, and mobility
                                        post-spinal trauma through integrated physical and traditional therapies.</p>
                                </div>
                            </a>

                            <a href="traumatic-brain-injury.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Traumatic Brain Injury.webp"
                                    alt="Traumatic Brain Injury Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Traumatic Brain Injury</h3>
                                    <p className="rehab-card-desc">Complex sensory, physical, and cognitive retraining
                                        protocols to help reorganize neural circuits post-head trauma.</p>
                                </div>
                            </a>

                            <a href="hemiplegia.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Hemiplegia.webp"
                                    alt="Hemiplegia Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Hemiplegia</h3>
                                    <p className="rehab-card-desc">Targeted active movement, sensory integration, and
                                        traditional heat therapies to improve unilateral motor deficit control.</p>
                                </div>
                            </a>

                            <a href="quadriplegia-paraplegia.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Quadriplegia &amp; Paraplegia.webp"
                                    alt="Quadriplegia &amp; Paraplegia Rehabilitation at Ayurgreen Hospital"
                                    loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Quadriplegia &amp; Paraplegia</h3>
                                    <p className="rehab-card-desc">Aggressive physical restoration, autonomic regulation,
                                        and sensory stimulations to regain maximum lifestyle independence.</p>
                                </div>
                            </a>

                            <a href="post-surgical-complications.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Post-Surgical Complications.webp"
                                    alt="Post-Surgical Complications Rehabilitation at Ayurgreen Hospital"
                                    loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Post-Surgical Complications</h3>
                                    <p className="rehab-card-desc">Correcting joint stiffness, relieving nerve impingements,
                                        and speeding tissue healing after orthopedic or neurosurgery.</p>
                                </div>
                            </a>

                            <a href="motor-neuron-diseases.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Motor Neuron Disease.webp"
                                    alt="Motor Neuron Diseases Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Motor Neuron Diseases</h3>
                                    <p className="rehab-card-desc">Providing neurological nourishment, muscle spasm control,
                                        and custom exercises to maintain function and manage progression.</p>
                                </div>
                            </a>

                            <a href="cerebral-palsy.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Cerebral Palsy.webp"
                                    alt="Cerebral Palsy Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Cerebral Palsy</h3>
                                    <p className="rehab-card-desc">Specialized pediatric neurodevelopmental therapies to
                                        help reduce rigid muscle stiffness and assist milestone achievements.</p>
                                </div>
                            </a>

                            <a href="parkinsons-disease.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Parkinson's Disease.webp"
                                    alt="Parkinson's Disease Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Parkinson's Disease</h3>
                                    <p className="rehab-card-desc">Delaying progression and maintaining active motor
                                        coordination through tailored Ayurvedic protocols and sensory exercises.</p>
                                </div>
                            </a>

                            <a href="myopathy.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Myopathy.webp"
                                    alt="Myopathy Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Myopathy</h3>
                                    <p className="rehab-card-desc">Nourishing muscle tissue, boosting strength, and
                                        prescribing safe mobility protocols to manage active muscle weakness.</p>
                                </div>
                            </a>

                            <a href="disc-spine-problems.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Disc &amp; Spine Problems.webp"
                                    alt="Disc &amp; Spine Problems treatment at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Disc &amp; Spine Problems</h3>
                                    <p className="rehab-card-desc">Non-surgical spinal decompression, specialized manual
                                        therapies, and herbal oil wraps to restore structural spine alignment.</p>
                                </div>
                            </a>

                            <a href="sciatica.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Sciatica.webp"
                                    alt="Sciatica treatment at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Sciatica</h3>
                                    <p className="rehab-card-desc">Relieving sciatic nerve compression, reducing radiating
                                        pain, and rebuilding core strength to prevent future flare-ups.</p>
                                </div>
                            </a>

                            <a href="obesity.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Obesity.webp"
                                    alt="Obesity treatment at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Obesity</h3>
                                    <p className="rehab-card-desc">Scientific metabolic control, customized Ayurvedic powder
                                        massages, low-impact exercise, and customized diet plans.</p>
                                </div>
                            </a>

                            <a href="post-covid-complications.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Post-Covid Complications.webp"
                                    alt="Post-Covid Complications Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Post-Covid Complications</h3>
                                    <p className="rehab-card-desc">Restoring respiratory capacity, addressing muscular
                                        fatigue, and rebuilding full biological immune health.</p>
                                </div>
                            </a>

                            <a href="muscular-dystrophy.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Muscular Dystrophy.webp"
                                    alt="Muscular Dystrophy Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Muscular Dystrophy</h3>
                                    <p className="rehab-card-desc">Providing muscular nutrition, maintaining joint range,
                                        and custom gentle exercises to slow functional muscle decline.</p>
                                </div>
                            </a>

                            <a href="osteoarthritis.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Osteoarthritis.webp"
                                    alt="Osteoarthritis Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Osteoarthritis</h3>
                                    <p className="rehab-card-desc">Natural joint lubrication therapies, muscle
                                        strengthening, and cartilage support to relieve joint pain and stiffness.</p>
                                </div>
                            </a>

                            <a href="rheumatoid-arthritis.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Rheumatoid Arthritis.webp"
                                    alt="Rheumatoid Arthritis Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Rheumatoid Arthritis</h3>
                                    <p className="rehab-card-desc">Regulating immune response, calming active joint
                                        inflammation, and maintaining coordinate joint range of motion.</p>
                                </div>
                            </a>

                            <a href="developmental-delay.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Developmental Delay.webp"
                                    alt="Developmental Delay Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Developmental Delay</h3>
                                    <p className="rehab-card-desc">Pediatric milestone tracking and customized
                                        motor-cognitive stimulation to assist functional age achievements.</p>
                                </div>
                            </a>

                            <a href="psychological-problems.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Psychological Problems.webp"
                                    alt="Psychological Problems Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Psychological Problems</h3>
                                    <p className="rehab-card-desc">Integrated mental health care, biofeedback sessions,
                                        relaxation, and wellness counseling to improve emotional balance.</p>
                                </div>
                            </a>

                            <a href="autism.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Autism.webp"
                                    alt="Autism Rehabilitation at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Autism</h3>
                                    <p className="rehab-card-desc">Pediatric sensory integration, motor coordination
                                        retraining, and gentle behavioral guidance protocols.</p>
                                </div>
                            </a>

                            <a href="psychiatry.html" className="rehab-card">
                                <img src="Assets/AG Sub-pages Banner/Psychiatry.webp"
                                    alt="Psychiatry at Ayurgreen Hospital" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Psychiatry</h3>
                                    <p className="rehab-card-desc">Comprehensive clinical support, medication management,
                                        stress reduction, and integrated psychiatric guidance.</p>
                                </div>
                            </a>
                        </div>
                    </div>{/*  /clip-programs  */}
                    {/*  Slide nav  */}
                    <div className="rehab-slider-nav">
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-programs', -1)}
                            id="btn-prev-programs" aria-label="Previous Programs"><i data-lucide="chevron-left"
                                size="20" aria-hidden="true"></i></button>
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-programs',  1)}
                            id="btn-next-programs" aria-label="Next Programs"><i data-lucide="chevron-right" size="20"
                                aria-hidden="true"></i></button>
                    </div>
                </div>

                {/*  Therapies Tab  */}
                <div id="tab-content-therapies" className="rehab-tab-content" role="tabpanel"
                    aria-labelledby="tab-btn-therapies" aria-hidden="true">
                    <div className="rehab-slider-clip" id="clip-therapies">
                        <div className="rehab-cards-scroll" id="scroll-therapies">

                            <a href="ayurveda.html" className="rehab-card">
                                <img src="Assets/rehab/th_ayurveda.webp"
                                    alt="Authentic Kerala Ayurveda oil treatment at Ayurgreen Hospital" width="768"
                                    height="576" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Ayurveda</h3>
                                    <p className="rehab-card-desc">Authentic Kerala Ayurveda for deep systemic healing and
                                        detoxification.</p>
                                </div>
                            </a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Physiotherapy
                                Expert-guided physical rehabilitation for strength,
                                mobility and function.</a>

                            <a href="robotic-rehab.html" className="rehab-card">
                                <img src="Assets/rehab/th_robotic.webp"
                                    alt="High-repetition sensor-guided robotic gait training session" width="5333"
                                    height="4000" loading="lazy" />
                                <div className="rehab-card-gradient"></div>
                                <div className="rehab-card-arrow"><i data-lucide="arrow-up-right" size="16"
                                        style={{ "color": "#111" }} aria-hidden="true"></i></div>
                                <div className="rehab-card-know-more"><i data-lucide="arrow-up-right" size="14"
                                        aria-hidden="true"></i> Know
                                    more</div>
                                <div className="rehab-card-body">
                                    <h3 className="rehab-card-title">Robotic Rehabilitation</h3>
                                    <p className="rehab-card-desc">Advanced exoskeletons retraining neural pathways through
                                        precision movement.</p>
                                </div>
                            </a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Occupational Therapy
                                Restoring independence in daily living activities and
                                work skills.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Speech Therapy
                                Communication and swallowing rehabilitation by certified
                                specialists.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Virtual Reality
                                Immersive VR environments for engaging, gamified
                                neurological recovery.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Hydro / Aquatic Therapy
                                Water-based therapy easing pain and rebuilding strength
                                with minimal stress.</a>

                            <a href="javascript:void(0)" className="rehab-card"
                                style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>Know
                                more

                                Cycle Therapy
                                Motorised cycling to improve limb coordination and
                                cardiovascular endurance.</a>

                        </div>
                    </div>{/*  /clip-therapies  */}
                    {/*  Slide nav  */}
                    <div className="rehab-slider-nav">
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-therapies', -1)}
                            id="btn-prev-therapies" aria-label="Previous Therapies"><i data-lucide="chevron-left"
                                size="20" aria-hidden="true"></i></button>
                        <button className="rehab-slider-btn" onClick={() => (window as any).slideCards?.('scroll-therapies',  1)}
                            id="btn-next-therapies" aria-label="Next Therapies"><i data-lucide="chevron-right" size="20"
                                aria-hidden="true"></i></button>
                    </div>
                </div>

            </div>
        </section>

        {/*  Rehab Village Banner Section  */}
        <section className="rv-banner-section" id="rehab-village" aria-label="Rehab Village"
            style={{ "padding": "80px 0", "background": "#ffffff" }}>
            <div style={{ "width": "96%", "maxWidth": "1400px", "margin": "0 auto" }}>

                <style dangerouslySetInnerHTML={{ __html: `
                    .rv-hero-banner {
                        background: #ffffff;
                        padding: 0;
                        position: relative;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .rv-hero-top {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        max-width: 800px;
                        margin: 0 auto 60px auto;
                    }

                    .rv-inline-badge {
                        display: inline-flex;
                        align-items: center;
                        background: #f8fafc;
                        padding: 8px 36px 8px 8px;
                        border-radius: 60px;
                        border: 1px solid #e2e8f0;
                        margin-bottom: 32px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
                    }

                    .rv-inline-badge img {
                        width: 56px;
                        height: 56px;
                        border-radius: 50%;
                        object-fit: cover;
                        margin-right: 16px;
                        border: 2px solid #fff;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    }

                    .rv-inline-badge .badge-text {
                        font-size: 15px;
                        font-weight: 800;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: #0f172a;
                    }

                    .rv-inline-badge .badge-dot {
                        width: 6px;
                        height: 6px;
                        background: #059669;
                        border-radius: 50%;
                        margin: 0 16px;
                    }

                    .rv-inline-badge .badge-highlight {
                        font-size: 15px;
                        font-weight: 700;
                        color: #059669;
                        letter-spacing: 0.5px;
                    }

                    .rv-title {
                        margin-bottom: 24px;
                    }

                    .rv-desc {
                        font-size: 16px;
                        color: var(--text-muted);
                        line-height: 1.7;
                        margin-bottom: 0;
                        font-weight: 400;
                        max-width: 650px;
                    }

                    /* Button styling */
                    .rv-explore-btn {
                        font-size: 14px;
                        font-weight: 800;
                        padding: 8px 8px 8px 24px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        background: #ffffff;
                        color: #111827;
                        border-radius: 50px;
                        border: 2px solid #e0ffe4;
                        text-decoration: none;
                        letter-spacing: 1px;
                        transition: all 0.3s ease;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
                        white-space: nowrap;
                    }

                    .rv-explore-btn .btn-icon-circle {
                        width: 36px;
                        height: 36px;
                        background: #000000;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: 16px;
                        transition: transform 0.3s ease;
                        color: #ffffff;
                    }

                    .rv-explore-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
                        border-color: #bbf7d0;
                    }

                    .rv-explore-btn:hover .btn-icon-circle {
                        transform: scale(1.05) translate(2px, -2px);
                    }

                    .rv-cards-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 20px;
                        margin-bottom: 40px;
                        width: 100%;
                    }

                    .rv-vibrant-card {
                        padding: 32px 28px;
                        border-radius: 24px;
                        color: #fff;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        min-height: 180px;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
                        cursor: pointer;
                        border: none;
                        position: relative;
                        overflow: hidden;
                        text-align: left;
                    }

                    .rv-vibrant-card h3,
                    .rv-vibrant-card p {
                        color: #ffffff !important;
                    }

                    .rv-vibrant-card.dark-text h3,
                    .rv-vibrant-card.dark-text p {
                        color: #0f172a !important;
                    }

                    .rv-vibrant-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
                    }

                    .rv-vibrant-icon-bg {
                        position: absolute;
                        top: -15px;
                        right: -15px;
                        width: 90px;
                        height: 90px;
                        background: rgba(255, 255, 255, 0.15);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.4s ease;
                    }

                    .rv-vibrant-card:hover .rv-vibrant-icon-bg {
                        transform: scale(1.15);
                    }

                    .rv-vibrant-card.dark-text .rv-vibrant-icon-bg {
                        background: rgba(0, 0, 0, 0.06);
                    }

                    .rv-vibrant-title {
                        font-family: var(--font-body);
                        font-size: 16px;
                        font-weight: 700;
                        margin-bottom: 10px;
                        line-height: 1.3;
                        position: relative;
                        z-index: 2;
                    }

                    .rv-vibrant-desc {
                        font-family: var(--font-body);
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 1.5;
                        opacity: 0.9;
                        position: relative;
                        z-index: 2;
                    }

                    .rv-stats-horizontal {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #ffffff;
                        padding: 20px 24px 20px 48px;
                        border-radius: 100px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
                        border: 1px solid rgba(0, 0, 0, 0.08);
                        width: 100%;
                    }

                    .rv-stats-left {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        flex: 1;
                    }

                    .rv-stats-divider {
                        width: 1px;
                        height: 48px;
                        background: #e2e8f0;
                        margin: 0 32px;
                    }

                    .rv-stat-pill {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        text-align: left;
                    }

                    .rv-stat-pill-icon {
                        color: #10b981;
                        background: #ecfdf5;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .rv-stat-pill-text strong {
                        display: block;
                        font-size: var(--heading-sm);
                        font-family: var(--font-heading);
                        color: var(--text-dark);
                        line-height: var(--heading-line-height);
                        font-weight: var(--heading-weight);
                    }

                    .rv-stat-pill-text span {
                        font-family: var(--font-body);
                        font-size: 11px;
                        color: var(--text-muted);
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                        margin-top: 4px;
                        display: block;
                    }

                    @media (max-width: 1280px) {
                        .rv-stats-horizontal {
                            flex-direction: column;
                            border-radius: 36px;
                            padding: 32px;
                            gap: 32px;
                        }

                        .rv-stats-left {
                            flex-wrap: wrap;
                            justify-content: center;
                            gap: 32px;
                        }

                        .rv-stats-divider {
                            width: 100%;
                            height: 1px;
                            margin: 0;
                        }
                    }

                    @media (max-width: 1180px) {
                        .rv-cards-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .rv-title {
                            font-size: 40px;
                        }
                    }

                    @media (max-width: 640px) {
                        .rv-cards-grid {
                            grid-template-columns: repeat(2, 1fr) !important;
                            gap: 12px !important;
                        }

                        .rv-vibrant-card {
                            padding: 20px 14px !important;
                            min-height: 140px !important;
                            border-radius: 16px !important;
                        }

                        .rv-vibrant-title {
                            font-size: clamp(12.5px, 3.5vw, 14.5px) !important;
                            margin-bottom: 6px !important;
                        }

                        .rv-vibrant-desc {
                            font-size: clamp(10.5px, 2.8vw, 11.5px) !important;
                            line-height: 1.4 !important;
                        }

                        .rv-vibrant-icon-bg {
                            width: 54px !important;
                            height: 54px !important;
                            top: -8px !important;
                            right: -8px !important;
                        }

                        .rv-vibrant-icon-bg svg {
                            width: 20px !important;
                            height: 20px !important;
                        }

                        .rv-stats-horizontal {
                            padding: 24px;
                        }

                        .rv-hero-banner {
                            padding: 0;
                        }

                        .rv-title {
                            font-size: 34px;
                        }

                        .rv-stat-pill {
                            flex-direction: column;
                            text-align: center;
                            gap: 10px;
                        }

                        .rv-inline-badge {
                            padding: 4px 16px 4px 4px;
                        }
                    }
                ` }} />

                <div className="rv-hero-banner">
                    {/*  Top Content  */}
                    <div className="rv-hero-top">
                        <div
                            style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "24px", "marginBottom": "24px" }}>
                            <img src="Assets/Logo/Rehab Village.webp"
                                alt="Rehab Village logo – Community-based long term rehabilitation accommodation at Ayurgreen Hospital"
                                width="1600" height="1600" loading="lazy"
                                style={{ "height": "90px", "width": "auto", "objectFit": "contain", "borderRadius": "50%" }} />
                            <div style={{ "textAlign": "left", "borderLeft": "2px solid #10b981", "paddingLeft": "20px" }}>
                                <h2 className="rv-title premium-title" style={{ "margin": "0" }}>
                                    Rehab Village
                                </h2>
                            </div>
                        </div>

                        <p className="rv-desc">
                            Designed for patients who need a comfortable and affordable place to stay near the hospital
                            while continuing their treatment. This initiative encourages health awareness within the
                            local community, creating a supportive environment.
                        </p>
                    </div>

                    {/*  8 Vibrant Cards Grid  */}
                    <div className="rv-cards-grid">
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #ff7300" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="bed-double" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Hospital Rooms Fully Occupied</h3>
                            <p className="rv-vibrant-desc">Stay nearby in verified homestays and continue daily sessions.
                            </p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #00c08b" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="calendar-clock" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Long-Term Treatment</h3>
                            <p className="rv-vibrant-desc">A stable nearby home base for weeks or months of rehab.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #7756b5" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="wallet" size="36" style={{ "opacity": "0.8" }}></i>
                            </div>
                            <h3 className="rv-vibrant-title">Affordable Stay Option</h3>
                            <p className="rv-vibrant-desc">Budget-friendly accommodation without compromising quality.</p>
                        </div>
                        <div className="rv-vibrant-card dark-text"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #c0f249", "color": "#000" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="tree-pine" size="36"
                                    style={{ "opacity": "0.6" }}></i></div>
                            <h3 className="rv-vibrant-title">Homely Over Clinical</h3>
                            <p className="rv-vibrant-desc">A quieter, more natural environment over a clinical setting.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #8b0042" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="shield-check" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Verified &amp; Trusted Stays</h3>
                            <p className="rv-vibrant-desc">Hospital-approved homestays, villas, and apartments.</p>
                        </div>
                        <div className="rv-vibrant-card dark-text"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), #ffc82e", "color": "#000" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="users" size="36" style={{ "opacity": "0.6" }}></i>
                            </div>
                            <h3 className="rv-vibrant-title">Stay with Family</h3>
                            <p className="rv-vibrant-desc">Live with loved ones during recovery, reducing isolation.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #2563eb" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="sun" size="36" style={{ "opacity": "0.8" }}></i>
                            </div>
                            <h3 className="rv-vibrant-title">Calm Recovery Environment</h3>
                            <p className="rv-vibrant-desc">A peaceful atmosphere that supports emotional wellbeing.</p>
                        </div>
                        <div className="rv-vibrant-card"
                            style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), #db2777" }}>
                            <div className="rv-vibrant-icon-bg"><i data-lucide="heart-handshake" size="36"
                                    style={{ "opacity": "0.8" }}></i></div>
                            <h3 className="rv-vibrant-title">Community-Style Living</h3>
                            <p className="rv-vibrant-desc">Shared experiences with fellow patients create belonging.</p>
                        </div>
                    </div>

                    {/*  Stats Horizontal Band  */}
                    <div className="rv-stats-horizontal">
                        <div className="rv-stats-left">
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="map-pin" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>2 kms</strong><span>From Hospital</span></div>
                            </div>
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="accessibility" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>Wheelchair</strong><span>Access</span></div>
                            </div>
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="car" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>Transportation</strong><span>&amp; Food
                                        services</span></div>
                            </div>
                            <div className="rv-stat-pill">
                                <div className="rv-stat-pill-icon"><i data-lucide="stethoscope" size="24"></i></div>
                                <div className="rv-stat-pill-text"><strong>Daily</strong><span>Doctor's visit</span></div>
                            </div>
                        </div>
                        <div className="rv-stats-divider"></div>
                        <div className="rv-stats-right">
                            <a href="rehab-village.html" className="rv-explore-btn">
                                EXPLORE REHAB VILLAGE
                                <div className="btn-icon-circle">
                                    <i data-lucide="arrow-up-right" size="20" strokeWidth="2.5"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/*  Stories of Relearning Section  */}
        <section className="stories-relearning-section" id="stories-relearning" aria-label="Stories of Relearning">
            <div className="stories-container">
                {/*  GSAP Scroll-linked Expanding Background  */}
                <div className="stories-bg-shape"></div>
                <div className="stories-content-wrap">
                    <div className="stories-header">
                        <h2 className="stories-title premium-title text-white">Stories of Relearning</h2>
                        <img src="Assets/Rehab_Process_Transparent.webp"
                            alt="Integrated rehabilitation recovery process steps at Ayurgreen Hospital"
                            className="stories-header-img" width="1408" height="156" loading="lazy" />
                    </div>

                    <div className="stories-gallery">
                        <div className="story-photo photo-1">
                            <img src="Assets/Patients/IMG_0265.webp"
                                alt="Patient during neurological rehabilitation therapy at Ayurgreen Hospital"
                                width="2976" height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-2">
                            <img src="Assets/Patients/IMG_0279.webp"
                                alt="Stroke patient rebuilding motor skills with physiotherapist" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-3">
                            <img src="Assets/Patients/IMG_0463.webp"
                                alt="Patient undergoing advanced gait training rehabilitation" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-4">
                            <img src="Assets/Patients/IMG_4304.webp"
                                alt="Robotic-assisted walking recovery session for spinal cord injury" width="2976"
                                height="1984" loading="lazy" style={{ "transform": "rotate(-90deg) scale(1.3)" }} />
                        </div>
                        <div className="story-photo photo-5">
                            <img src="Assets/Patients/IMG_9205.webp"
                                alt="Patient performing cognitive and physical exercises" width="2976" height="1984"
                                loading="lazy" />
                        </div>
                        <div className="story-photo photo-6">
                            <img src="Assets/Patients/IMG_9229.webp"
                                alt="Occupational therapy session for restoring hand mobility" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                        <div className="story-photo photo-7">
                            <img src="Assets/Patients/IMG_9291.webp"
                                alt="Patient practicing balance and coordination exercises" width="2976" height="1984"
                                loading="lazy" />
                        </div>
                        <div className="story-photo photo-8">
                            <img src="Assets/Patients/IMG_9302.webp"
                                alt="Patient celebration of recovery milestones with clinical team" width="2976"
                                height="1984" loading="lazy" />
                        </div>
                    </div>

                    {/*  Video Stories Slider  */}
                    <div className="stories-videos-wrap">

                        <div className="rehab-slider-clip" id="clip-videos">
                            <div className="stories-videos-scroll" id="scroll-videos">
                            </div>
                        </div>

                        {/*  Slide nav  */}
                        <div className="rehab-slider-nav" style={{ "marginTop": "20px", "justifyContent": "center" }}>
                            <button className="rehab-slider-btn" onClick={() => (window as any).slideVideos?.(-1)} id="btn-prev-videos"
                                aria-label="Previous patient video story"><i data-lucide="chevron-left" size="20"
                                    aria-hidden="true"></i></button>
                            <button className="rehab-slider-btn" onClick={() => (window as any).slideVideos?.(1)} id="btn-next-videos"
                                aria-label="Next patient video story"><i data-lucide="chevron-right" size="20"
                                    aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>{/*  End stories-content-wrap  */}

            </div>
        </section>

        {/*  Life at Ayurgreen Premium Image Wall Section  */}
        <section className="life-gallery-section" id="life-gallery-trigger" aria-label="Life at Ayurgreen Gallery">
            <div className="life-gallery-header">
                <h2 className="life-gallery-title premium-title">Life at Ayurgreen</h2>
            </div>
            <div className="gallery-wrapper">
                {/*  Top Row: Moves Left  */}
                <div className="gallery-row-container top-row-container">
                    <div className="gallery-row" id="gallery-row-top">
                        {/*  Dynamically loaded WebP images  */}
                    </div>
                </div>

                {/*  Bottom Row: Moves Right  */}
                <div className="gallery-row-container bottom-row-container">
                    <div className="gallery-row" id="gallery-row-bottom">
                        {/*  Dynamically loaded WebP images  */}
                    </div>
                </div>
            </div>
        </section>

        {/*  Ayurgreen Ecosystem Section  */}
        <section id="ayurgreen-ecosystem-section" className="eco-section" aria-label="Ayurgreen Ecosystem">
            <div className="eco-container">
                {/*  Section Header (Rehab Village Inspired)  */}
                <div className="eco-hero-top"
                    style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "maxWidth": "800px", "margin": "0 auto 60px auto" }}>
                    <h2 className="premium-title" style={{ "marginBottom": "24px" }}>
                        Ayurgreen Ecosystem
                    </h2>

                    <p className="eco-desc"
                        style={{ "fontSize": "16px", "color": "var(--text-muted)", "lineHeight": "1.7", "marginBottom": "0", "fontWeight": "400", "maxWidth": "700px" }}>
                        Ayurgreen is more than a hospital. It is a growing ecosystem of healthcare, education, research,
                        hospitality, and social impact initiatives working together with a shared vision of creating
                        happier, healthier lives.
                    </p>
                </div>

                {/*  Entity Grid  */}
                <div className="eco-grid">
                    {/*  Card 1: Ayurgreen Hospitals  */}
                    <div className="eco-card" data-eco-card="hospitals"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #059669" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/Logomark Ayurgreen.webp" alt="Ayurgreen Hospitals Logo"
                                width="379" height="401" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen Hospitals</h3>
                        <p className="eco-card-desc">
                            Centre of Excellence in Ortho-Neuro Rehabilitation, combining advanced rehabilitation,
                            Ayurveda, therapy, and integrated healthcare to restore independence and quality of life.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE HOSPITALS
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 2: Getwell Hospitals  */}
                    <div className="eco-card" data-eco-card="getwell"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #2563eb" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/Getwell Logo.webp" alt="Getwell Hospitals Logo"
                                width="150" height="150" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Getwell Hospitals</h3>
                        <p className="eco-card-desc">
                            Providing accessible and comprehensive healthcare services with a patient-centered approach
                            to treatment, wellness, and recovery.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE GETWELL
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 3: Niramaya Hospital  */}
                    <div className="eco-card" data-eco-card="niramaya"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #0d9488" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/logo Niramaya.webp" alt="Niramaya Hospital Logo"
                                width="2364" height="524" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Niramaya Hospital</h3>
                        <p className="eco-card-desc">
                            Delivering compassionate healthcare services while extending Ayurgreen’s mission of holistic
                            healing and community well-being.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE NIRAMAYA
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 4: Green Health Herbals  */}
                    <div className="eco-card" data-eco-card="herbals"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #15803d" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/Green Health Logo.webp" alt="Green Health Herbals Logo"
                                width="150" height="38" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Green Health Herbals</h3>
                        <p className="eco-card-desc">
                            Manufacturing authentic Ayurvedic medicines and herbal formulations inspired by traditional
                            wisdom and quality-focused practices.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE GREEN HEALTH
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 5: Ayurgreen College of Life Sciences  */}
                    <div className="eco-card" data-eco-card="college"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #4f46e5" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/Ayurgreen College.webp"
                                alt="Ayurgreen College of Life Sciences Logo" width="250" height="250" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen College of Life Sciences</h3>
                        <p className="eco-card-desc">
                            Preparing future healthcare professionals through education, practical training, and
                            academic excellence.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE COLLEGE
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 6: Ayurgreen Scientifica  */}
                    <div className="eco-card" data-eco-card="scientifica"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #7c3aed" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/ayurgreen Scientifica Logo.webp"
                                alt="Ayurgreen Scientifica Logo" width="173" height="300" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen Scientifica</h3>
                        <p className="eco-card-desc">
                            Driving research, innovation, and evidence-based advancement by connecting traditional
                            knowledge with modern healthcare science.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE SCIENTIFICA
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 7: Shadarasa  */}
                    <div className="eco-card" data-eco-card="shadarasa"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #db2777" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/Shadrasa Logo.webp" alt="Shadarasa Logo" width="150"
                                height="120" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Shadarasa</h3>
                        <p className="eco-card-desc">
                            Promoting healthy living through thoughtfully prepared food inspired by wellness and
                            balanced nutrition.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE SHADARASA
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 8: Kafe Kizil  */}
                    <div className="eco-card" data-eco-card="kizil"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #ea580c" }}>
                        <div className="eco-card-logo-badge">
                            <i data-lucide="coffee" size="28" className="eco-placeholder-coffee"
                                style={{ "color": "#ea580c" }}></i>
                        </div>
                        <h3 className="eco-card-title">Kafe Kizil</h3>
                        <p className="eco-card-desc">
                            A welcoming space for patients, families, visitors, and the community to relax, connect, and
                            refresh.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE KAFE KIZIL
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 9: Ayurgreen Foundation  */}
                    <div className="eco-card" data-eco-card="foundation"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #b91c1c" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/AG Foundation Logo.webp"
                                alt="Ayurgreen Foundation Logo" width="150" height="72" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">Ayurgreen Foundation</h3>
                        <p className="eco-card-desc">
                            Creating meaningful social impact through healthcare accessibility, community welfare
                            initiatives, and charitable programs.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE FOUNDATION
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>

                    {/*  Card 10: ACFHE  */}
                    <div className="eco-card" data-eco-card="acfhe"
                        style={{ "background": "linear-gradient(135deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 100%), #0284c7" }}>
                        <div className="eco-card-logo-badge">
                            <img src="Assets/Ayurgreen Ecosystem/ACFHE Logo.webp" alt="ACFHE Logo" width="1563"
                                height="648" loading="lazy" />
                        </div>
                        <h3 className="eco-card-title">ACFHE</h3>
                        <p className="eco-card-desc">
                            Developing hospitality professionals through specialized training focused on service
                            excellence, professionalism, and people-centered experiences.
                        </p>
                        <a href="#" className="eco-cta-btn">
                            EXPLORE ACFHE
                            <div className="btn-icon-circle">
                                <i data-lucide="arrow-up-right" size="16"></i>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        </section>

        {/*  Our Associations Section  */}
        <section className="assoc-section" id="our-associations" aria-label="Our Associations">
            <div className="assoc-container">
                <div className="assoc-header">
                    <h2 className="premium-title">Our Associations</h2>
                    <p className="assoc-subtitle">Trusted Partnerships &amp; Collaborations That Strengthen Our Mission</p>
                </div>

                <div className="assoc-marquee-wrapper">
                    <div className="assoc-marquee-track">
                        {/*  Set 1  */}
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/AMAI Logo.webp" alt="AMAI" width="954" height="974"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Ahma-Logo.webp" alt="AHMA" width="600" height="600"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Aura-Malabar-Logo.webp" alt="Aura Malabar" width="1024"
                                height="315" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Blood Bank Perinthalmanna Logo.webp"
                                alt="Blood Bank Perinthalmanna" width="150" height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/CII Logo.webp" alt="CII" width="209" height="65"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ILA Foundation Logo.webp" alt="ILA Foundation" width="150"
                                height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/National Ayurvedic Medical Association.webp"
                                alt="National Ayurvedic Medical Association" width="941" height="363" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ayurveda promotion society logo.webp"
                                alt="Ayurveda Promotion Society" width="253" height="90" loading="lazy" />
                        </div>

                        {/*  Set 2 (duplicate for seamless loop)  */}
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/AMAI Logo.webp" alt="AMAI" width="954" height="974"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Ahma-Logo.webp" alt="AHMA" width="600" height="600"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Aura-Malabar-Logo.webp" alt="Aura Malabar" width="1024"
                                height="315" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/Blood Bank Perinthalmanna Logo.webp"
                                alt="Blood Bank Perinthalmanna" width="150" height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/CII Logo.webp" alt="CII" width="209" height="65"
                                loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ILA Foundation Logo.webp" alt="ILA Foundation" width="150"
                                height="150" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/National Ayurvedic Medical Association.webp"
                                alt="National Ayurvedic Medical Association" width="941" height="363" loading="lazy" />
                        </div>
                        <div className="assoc-logo-item">
                            <img src="Assets/Our Associations/ayurveda promotion society logo.webp"
                                alt="Ayurveda Promotion Society" width="253" height="90" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    {/* Script removed from JSX and moved to useEffect */}


    {/*  Minimalist White Footer  */}
    <style dangerouslySetInnerHTML={{ __html: `
        .minimal-footer {
            background-color: #ffffff;
            color: #333333;
            padding: 60px 0 20px;
            font-family: var(--font-body), sans-serif;
            border-top: 1px solid #eaeaea;
            position: relative;
            z-index: 10;
        }

        .minimal-footer .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        .minimal-footer-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }

        @media (max-width: 992px) {
            .minimal-footer-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 768px) {
            .minimal-footer-grid {
                grid-template-columns: 1fr;
                gap: 32px;
            }
        }

        .minimal-footer-col h4 {
            font-family: var(--font-heading), sans-serif;
            font-size: 18px;
            font-weight: 600;
            color: #111827;
            margin-bottom: 20px;
        }

        .minimal-footer-logo {
            width: 180px;
            height: auto;
            margin-bottom: 16px;
        }

        .minimal-footer-text {
            font-size: 14.5px;
            line-height: 1.6;
            color: #4b5563;
            margin-bottom: 20px;
        }

        .minimal-social-row {
            display: flex;
            gap: 12px;
        }

        .minimal-social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #f3f4f6;
            color: #4b5563;
            transition: all 0.2s ease;
        }

        .minimal-social-icon:hover {
            background-color: #10b981;
            color: #ffffff;
        }

        .minimal-footer-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .minimal-footer-links a {
            color: #4b5563;
            text-decoration: none;
            font-size: 15px;
            transition: color 0.2s ease;
        }

        .minimal-footer-links a:hover {
            color: #10b981;
        }

        .minimal-contact-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 16px;
            color: #4b5563;
            font-size: 14.5px;
            line-height: 1.5;
        }

        .minimal-contact-item a {
            color: #4b5563;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .minimal-contact-item a:hover {
            color: #10b981;
        }

        .minimal-contact-icon {
            color: #10b981;
            flex-shrink: 0;
            margin-top: 2px;
        }

        .footer-map-container iframe {
            border-radius: 12px;
            width: 100%;
            height: 180px;
            border: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .minimal-footer-bottom {
            border-top: 1px solid #f3f4f6;
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13.5px;
            color: #6b7280;
        }

        .minimal-footer-bottom-links {
            display: flex;
            gap: 20px;
        }

        .minimal-footer-bottom-links a {
            color: #6b7280;
            text-decoration: none;
        }

        .minimal-footer-bottom-links a:hover {
            color: #10b981;
        }

        @media (max-width: 640px) {
            .minimal-footer-bottom {
                flex-direction: column;
                gap: 16px;
                text-align: center;
            }
        }
    ` }} />
    <footer className="minimal-footer">
        <div className="container">
            <div className="minimal-footer-grid">
                {/*  Column 1: Brand & About  */}
                <div className="minimal-footer-col">
                    <a href="index.html">
                        <img src="Assets/Ayurgreen_Logo.webp" alt="Ayurgreen Hospital Logo" className="minimal-footer-logo"
                            width="1656" height="1344" loading="lazy" />
                    </a>
                    <p className="minimal-footer-text">
                        India's pioneer in Integrated Ortho-Neuro Rehabilitation, fusing cutting-edge robotic tech with
                        traditional Kerala Ayurveda to restore movement and dignity.
                    </p>
                    <div className="minimal-social-row" style={{ "alignItems": "center", "gap": "16px" }}>
                        <a href="https://www.facebook.com/ayurvedahealthcare" target="_blank" rel="noopener noreferrer"
                            aria-label="Facebook" style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="Assets/facebook.webp" alt="Facebook" width="28" height="28"
                                style={{ "objectFit": "contain", "display": "block" }} />
                        </a>
                        <a href="https://www.instagram.com/ayurgreen_hospitals/" target="_blank"
                            rel="noopener noreferrer" aria-label="Instagram"
                            style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="Assets/instagram.webp" alt="Instagram" width="34" height="34"
                                style={{ "objectFit": "contain", "display": "block" }} />
                        </a>
                        <a href="https://www.linkedin.com/company/ayurgreen-hospitals/" target="_blank"
                            rel="noopener noreferrer" aria-label="LinkedIn"
                            style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="Assets/linkedin.webp" alt="LinkedIn" width="28" height="28"
                                style={{ "objectFit": "contain", "display": "block" }} />
                        </a>
                        {/*  <a href="https://www.flaticon.com/free-icons/youtube" title="youtube icons">Youtube icons created by Md Tanvirul Haque - Flaticon</a>  */}
                        <a href="https://youtube.com/@ayurgreenhospitals?si=Drm6iQvEmxhoxU5l-" target="_blank"
                            rel="noopener noreferrer" aria-label="YouTube"
                            style={{ "display": "flex", "transition": "transform 0.2s ease" }}
                            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
                            <img src="Assets/youtube.webp" alt="YouTube" width="28" height="28"
                                style={{ "objectFit": "contain", "display": "block" }}
                                title="Youtube icons created by Md Tanvirul Haque - Flaticon" />
                        </a>
                    </div>
                </div>

                {/*  Column 2: Quick Links & Contact  */}
                <div className="minimal-footer-col">
                    <h4>Quick Links</h4>
                    <div className="minimal-footer-links" style={{ "marginBottom": "24px" }}>
                        <a href="about.html">About Us</a>
                        <a href="rehab-village.html">Rehab Village</a>
                        <a href="javascript:void(0)"
                            style={{ "cursor": "default", "pointerEvents": "none", "textDecoration": "none" }}>All Specialities</a>
                        <a href="international-patients.html">International Patients</a>
                    </div>
                    <h4>Contact Us</h4>
                    <div className="minimal-contact-item">
                        <i data-lucide="phone" size="16" className="minimal-contact-icon"></i>
                        <div>
                            <a href="tel:+918943055555" style={{ "display": "block", "marginBottom": "4px" }}>+91 89430 55555</a>
                            <a href="https://wa.me/918943055555" target="_blank" rel="noopener noreferrer"
                                style={{ "color": "#10b981", "fontSize": "13.5px", "display": "inline-flex", "alignItems": "center", "gap": "4px" }}>
                                <img src="Assets/logo.webp" alt="WhatsApp" width="16" height="16"
                                    style={{ "objectFit": "contain", "marginTop": "-2px" }} /> WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="minimal-contact-item">
                        <i data-lucide="mail" size="16" className="minimal-contact-icon"></i>
                        <a href="mailto:info@ayurgreenhospitals.com">info@ayurgreenhospitals.com</a>
                    </div>
                </div>

                {/*  Column 3: Location Map  */}
                <div className="minimal-footer-col">
                    <h4>Our Location</h4>
                    <div className="minimal-contact-item" style={{ "marginBottom": "12px" }}>
                        <i data-lucide="map-pin" size="16" className="minimal-contact-icon"></i>
                        <span>Kavilpadi, Edappal – Tirur Road,<br />Vattamkulam, Kerala - 679582</span>
                    </div>
                    <div className="footer-map-container">
                        <iframe
                            src="https://www.google.com/maps?q=Ayurgreen+Hospital,+Vattamkulam,+Kerala&amp;output=embed"
                            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className="minimal-footer-bottom">
                <div>© 2026 Ayurgreen Hospital. All Rights Reserved.</div>
                <div className="minimal-footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    {/*  Interactive Mobile Menu Drawer  */}
    <div className="mobile-menu-drawer" id="mobile-menu-drawer" aria-hidden="true" role="dialog" aria-modal="true"
        aria-label="Mobile Navigation Menu">
        <div className="mobile-menu-header">
            <a href="index.html" className="mobile-menu-logo-link">
                <img src="Assets/Ayurgreen_Logo.webp" alt="Ayurgreen Hospital logo" className="mobile-menu-logo"
                    width="1656" height="1344" loading="lazy" />
            </a>
            <button className="mobile-menu-close-btn" id="mobile-menu-close-btn" aria-label="Close Navigation Menu">
                <i data-lucide="x" size="24"></i>
            </button>
        </div>
        <div className="mobile-menu-content">
            <nav className="mobile-menu-nav">
                {/*  Accordions  */}
                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">About Us <i data-lucide="chevron-down" size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="about.html"><i data-lucide="award" size="16" style={{ "color": "#FFD700" }}></i> Our
                            Legacy</a>
                        <a href="#"><i data-lucide="activity" size="16" style={{ "color": "#9C27B0" }}></i> Admire</a>
                        <a href="about.html"><i data-lucide="users" size="16" style={{ "color": "#4CAF50" }}></i>
                            Multidisciplinary Team</a>
                        <a href="about.html#facilities"><i data-lucide="building" size="16" style={{ "color": "#2196F3" }}></i>
                            Facilities</a>
                    </div>
                </div>

                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">Specialities <i data-lucide="chevron-down"
                            size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="stroke-rehab.html"><i data-lucide="activity" size="16" style={{ "color": "#E91E63" }}></i>
                            Stroke Rehabilitation</a>
                        <a href="spinal-cord-injury.html"><i data-lucide="bone" size="16" style={{ "color": "#9C27B0" }}></i>
                            Spinal Cord Injury</a>
                        <a href="traumatic-brain-injury.html"><i data-lucide="brain" size="16"
                                style={{ "color": "#FF9800" }}></i> Traumatic Brain Injury</a>
                        <a href="hemiplegia.html"><i data-lucide="person-standing" size="16"
                                style={{ "color": "#00BCD4" }}></i> Hemiplegia</a>
                        <a href="quadriplegia-paraplegia.html"><i data-lucide="accessibility" size="16"
                                style={{ "color": "#3F51B5" }}></i> Quadriplegia &amp; Paraplegia</a>
                        <a href="post-surgical-complications.html"><i data-lucide="stethoscope" size="16"
                                style={{ "color": "#009688" }}></i> Post-Surgical Complications</a>
                        <a href="motor-neuron-diseases.html"><i data-lucide="network" size="16"
                                style={{ "color": "#607D8B" }}></i> Motor Neuron Diseases</a>
                        <a href="cerebral-palsy.html"><i data-lucide="flower-2" size="16" style={{ "color": "#E040FB" }}></i>
                            Cerebral Palsy</a>
                        <a href="parkinsons-disease.html"><i data-lucide="zap" size="16" style={{ "color": "#FFEB3B" }}></i>
                            Parkinson's Disease</a>
                        <a href="myopathy.html"><i data-lucide="dna" size="16" style={{ "color": "#8BC34A" }}></i> Myopathy</a>
                        <a href="disc-spine-problems.html"><i data-lucide="git-commit" size="16"
                                style={{ "color": "#FF5722" }}></i> Disc &amp; Spine Problems</a>
                        <a href="sciatica.html"><i data-lucide="zap-off" size="16" style={{ "color": "#795548" }}></i>
                            Sciatica</a>
                        <a href="obesity.html"><i data-lucide="scale" size="16" style={{ "color": "#F44336" }}></i> Obesity</a>
                        <a href="post-covid-complications.html"><i data-lucide="shield-alert" size="16"
                                style={{ "color": "#FFC107" }}></i> Post-Covid Complications</a>
                        <a href="muscular-dystrophy.html"><i data-lucide="heart-pulse" size="16"
                                style={{ "color": "#E91E63" }}></i> Muscular Dystrophy</a>
                        <a href="osteoarthritis.html"><i data-lucide="target" size="16" style={{ "color": "#9E9E9E" }}></i>
                            Osteoarthritis</a>
                        <a href="rheumatoid-arthritis.html"><i data-lucide="flame" size="16"
                                style={{ "color": "#FF5722" }}></i> Rheumatoid Arthritis</a>
                        <a href="developmental-delay.html"><i data-lucide="sprout" size="16"
                                style={{ "color": "#8BC34A" }}></i> Developmental Delay</a>
                        <a href="psychological-problems.html"><i data-lucide="lightbulb" size="16"
                                style={{ "color": "#FFEB3B" }}></i> Psychological Problems</a>
                        <a href="autism.html"><i data-lucide="heart" size="16" style={{ "color": "#E91E63" }}></i> Autism</a>
                        <a href="psychiatry.html"><i data-lucide="brain" size="16" style={{ "color": "#9C27B0" }}></i>
                            Psychiatry</a>
                    </div>
                </div>

                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">Departments <i data-lucide="chevron-down" size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="ayurveda.html"><i data-lucide="leaf" size="16" style={{ "color": "#4CAF50" }}></i>
                            Ayurveda</a>
                        <a href="physiotherapy.html"><i data-lucide="dumbbell" size="16" style={{ "color": "#FF9800" }}></i>
                            Physiotherapy</a>
                        <a href="robotic-rehab.html"><i data-lucide="bot" size="16" style={{ "color": "#00BCD4" }}></i> Robotic
                            Rehabilitation</a>
                        <a href="occupational-therapy.html"><i data-lucide="puzzle" size="16"
                                style={{ "color": "#9C27B0" }}></i> Occupational Therapy</a>
                        <a href="speech-therapy.html"><i data-lucide="message-circle" size="16"
                                style={{ "color": "#2196F3" }}></i> Speech Therapy</a>
                        <a href="virtual-reality.html"><i data-lucide="headset" size="16" style={{ "color": "#E91E63" }}></i>
                            Virtual Reality</a>
                        <a href="yoga-meditation.html"><i data-lucide="sun" size="16" style={{ "color": "#FFC107" }}></i> Yoga
                            and Meditation</a>
                        <a href="acupuncture.html"><i data-lucide="map-pin" size="16" style={{ "color": "#F44336" }}></i>
                            Acupuncture</a>
                        <a href="reflexology.html"><i data-lucide="footprints" size="16" style={{ "color": "#795548" }}></i>
                            Reflexology</a>
                        <a href="hydro-therapy.html"><i data-lucide="waves" size="16" style={{ "color": "#03A9F4" }}></i> Hydro
                            / Aquatic Therapy</a>
                        <a href="pediatrics.html"><i data-lucide="baby" size="16" style={{ "color": "#E040FB" }}></i>
                            Pediatrics</a>
                        <a href="slimming-treatment.html"><i data-lucide="ruler" size="16" style={{ "color": "#009688" }}></i>
                            Slimming Treatment</a>
                        <a href="pain-management.html"><i data-lucide="shield-plus" size="16"
                                style={{ "color": "#4CAF50" }}></i> Pain Management</a>
                        <a href="diet-nutrition.html"><i data-lucide="utensils" size="16" style={{ "color": "#FF5722" }}></i>
                            Diet &amp; Nutrition</a>
                        <a href="counseling.html"><i data-lucide="heart-handshake" size="16"
                                style={{ "color": "#E91E63" }}></i> Counseling</a>
                        <a href="dentistry.html"><i data-lucide="smile" size="16" style={{ "color": "#00BCD4" }}></i>
                            Dentistry</a>
                        <a href="modern-medicine.html"><i data-lucide="pill" size="16" style={{ "color": "#9C27B0" }}></i>
                            Modern Medicine</a>
                        <a href="assistive-devices.html"><i data-lucide="accessibility" size="16"
                                style={{ "color": "#3F51B5" }}></i> Assistive Devices</a>
                    </div>
                </div>

                <a href="rehab-village.html" className="mobile-nav-link">Rehab Village</a>

                <div className="mobile-nav-group">
                    <button className="mobile-nav-trigger">Modern Integrations <i data-lucide="chevron-down"
                            size="16"></i></button>
                    <div className="mobile-nav-dropdown-content">
                        <a href="neurology.html"><i data-lucide="brain-circuit" size="16" style={{ "color": "#607D8B" }}></i>
                            Neurology</a>
                        <a href="neurosurgery.html"><i data-lucide="microscope" size="16" style={{ "color": "#009688" }}></i>
                            Neurosurgery</a>
                        <a href="orthopedic.html"><i data-lucide="hammer" size="16" style={{ "color": "#795548" }}></i>
                            Orthopedic</a>
                        <a href="ent.html"><i data-lucide="ear" size="16" style={{ "color": "#FF9800" }}></i> ENT</a>
                        <a href="general-medicine.html"><i data-lucide="syringe" size="16" style={{ "color": "#F44336" }}></i>
                            General Medicine</a>
                        <a href="urology.html"><i data-lucide="droplet" size="16" style={{ "color": "#03A9F4" }}></i>
                            Urology</a>
                        <a href="cardiology.html"><i data-lucide="heart" size="16" style={{ "color": "#E91E63" }}></i>
                            Cardiology</a>
                        <a href="respiratory-therapy.html"><i data-lucide="wind" size="16" style={{ "color": "#00BCD4" }}></i>
                            Respiratory Therapy</a>
                        <a href="neuro-psychology.html"><i data-lucide="brain" size="16" style={{ "color": "#9C27B0" }}></i>
                            Neuro Psychology</a>
                    </div>
                </div>

                <a href="international-patients.html" className="mobile-nav-link">International Patients</a>

                {/*  Quick secondary links  */}
                <div className="mobile-menu-secondary-divider"></div>
                <a href="#life-gallery-trigger" className="mobile-nav-link-secondary">Life at Ayurgreen</a>
                <a href="#stories-relearning" className="mobile-nav-link-secondary">Stories of Relearning</a>
                <a href="about.html" className="mobile-nav-link-secondary">Careers</a>
                <a href="about.html" className="mobile-nav-link-secondary">News &amp; Events</a>
                <a href="about.html" className="mobile-nav-link-secondary">Insights</a>
            </nav>
            <div className="mobile-menu-footer">
                <a href="#consultation" className="mobile-menu-cta-btn">
                    <span>Book an Appointment</span>
                    <i data-lucide="arrow-up-right" size="16"></i>
                </a>
            </div>
        </div>
    </div>
    <div className="mobile-menu-backdrop" id="mobile-menu-backdrop" aria-hidden="true"></div>

    
    
    {/* Script removed from JSX and moved to useEffect */}




    </div>
  );
}
