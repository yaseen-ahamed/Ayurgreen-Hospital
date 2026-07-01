import { mountSidebarGlow } from './mount-sidebar-glow';

function init() {
    mountSidebarGlow();
    // Initialize Lucide Icons
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons({
        strokeWidth: 1.5,
        attrs: {
          'aria-hidden': 'true'
        }
      });
    }
  
    // Sticky Header Logic
    const header = document.querySelector('.hero-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Dropdown hover handling is largely managed by CSS,
    // but we add classes for touch devices or specific logic if needed
    
    // Smooth reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Hero Slider Logic
    const slides = document.querySelectorAll('.hero-img');
    const ctaText = document.getElementById('hero-cta-text');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const heroTitle = document.getElementById('hero-title');
    const heroSub = document.getElementById('hero-sub');
    
    if(slides.length > 0) {
        let currentSlide = 0;
        const ctaLabels = ["Stroke Rehabilitation", "Stroke Rehabilitation"];
        const headlines = [
            "India’s First Robotic Integrated Neuro Rehabilitation Hospital",
            "Stories of Relearning"
        ];
        const subContents = [
            "India's integrated robotic-assisted ortho-neuro rehabilitation hospital combining advanced rehabilitation technology with Ayurveda and multidisciplinary care.",
            `<img src="/Assets/Rehab_Process_Transparent.webp" alt="Rehab Process Steps" width="1408" height="156" style="max-width: 100%; height: auto; display: block; margin-top: 24px;">`
        ];
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            
            if(ctaText && ctaLabels[index]) {
                ctaText.textContent = ctaLabels[index];
            }
            if(heroTitle && headlines[index]) {
                heroTitle.textContent = headlines[index];
            }
            if(heroSub && subContents[index]) {
                heroSub.innerHTML = subContents[index];
            }
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        if(slides.length > 1) {
            let slideInterval = setInterval(nextSlide, 5000);
            
            const resetInterval = () => {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            };
            
            if(nextBtn) {
                nextBtn.addEventListener('click', () => {
                    nextSlide();
                    resetInterval();
                });
            }
            if(prevBtn) {
                prevBtn.addEventListener('click', () => {
                    prevSlide();
                    resetInterval();
                });
            }
        }
    }

    // Sidebar Drawer Toggle for Mobile
    const sidebarToggle = document.querySelector('.mobile-sidebar-toggle');
    const sidebar = document.querySelector('.ayur-sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    if (sidebarToggle && sidebar) {
        let overlay = sidebarOverlay;
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);
        }
        
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        });
        
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    }

    // FAQ Accordion Logic
    const faqTriggers = document.querySelectorAll('.ayur-faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.ayur-faq-item');
            const content = item.querySelector('.ayur-faq-content');
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            document.querySelectorAll('.ayur-faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.ayur-faq-content');
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                    }
                }
            });
            
            if (isActive) {
                item.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Initialize Search
    initSearch();
}

// --- Liquid Glass Search Feature ---
function initSearch() {
    // 1. Inject trigger buttons
    const nav = document.querySelector('.nav-pills-container');
    if (nav && !document.getElementById('search-trigger-desktop')) {
        const searchWrapper = document.createElement('div');
        searchWrapper.className = 'nav-item-wrapper search-wrapper desktop-only-search';
        searchWrapper.innerHTML = `
            <button id="search-trigger-desktop" class="individual-pill search-trigger-btn" aria-label="Search website" style="padding: clamp(6px, 1vw, 10px) clamp(10px, 1.2vw, 12px); border-radius: 40px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.25); color: #fff; cursor: pointer; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: inline-flex; align-items: center; justify-content: center; height: 100%; border-style: solid; outline: none;">
                <i data-lucide="search" size="14"></i>
            </button>
        `;
        nav.appendChild(searchWrapper);
    }

    const headerRight = document.querySelector('.header-right');
    const menuBtnWrapper = document.querySelector('.bw-menu-wrapper');
    if (headerRight && menuBtnWrapper && !document.getElementById('search-trigger-mobile')) {
        const searchWrapper = document.createElement('div');
        searchWrapper.className = 'nav-item-wrapper search-wrapper mobile-only-search';
        searchWrapper.style.marginRight = '8px';
        searchWrapper.innerHTML = `
            <button id="search-trigger-mobile" class="menu-btn search-trigger-btn" aria-label="Search website" style="background: #fff; color: #000; width: clamp(38px, 4vw, 44px); height: clamp(38px, 4vw, 44px); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none; cursor: pointer; outline: none; transition: transform 0.2s;">
                <i data-lucide="search" size="18"></i>
            </button>
        `;
        headerRight.insertBefore(searchWrapper, menuBtnWrapper);
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Inject Modal Styles (Liquid Glass Theme)
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .search-wrapper:hover .individual-pill .lucide,
        .search-wrapper:hover .search-trigger-btn .lucide {
            transform: none !important;
        }
        .search-trigger-btn {
            transition: all 0.2s ease !important;
        }
        .search-wrapper:hover .individual-pill,
        .search-trigger-btn:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            border-color: rgba(255, 255, 255, 0.5) !important;
        }
        @media (min-width: 1251px) {
            .mobile-only-search { display: none !important; }
        }
        @media (max-width: 1250px) {
            .desktop-only-search { display: none !important; }
            .mobile-only-search { display: flex !important; }
        }

        .search-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(4, 7, 18, 0.7);
            backdrop-filter: blur(28px);
            -webkit-backdrop-filter: blur(28px);
            z-index: 10000;
            display: none;
            justify-content: center;
            align-items: flex-start;
            padding-top: 10vh;
            opacity: 0;
        }

        .search-modal-container {
            width: 92%;
            max-width: 720px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 24px;
            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6), 
                        inset 0 1px 1px rgba(255, 255, 255, 0.1),
                        0 0 30px rgba(43, 196, 109, 0.08);
            overflow: hidden;
            color: #fff;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            display: flex;
            flex-direction: column;
            transform: scale(0.94) translateY(-30px);
            opacity: 0;
        }

        @media (max-width: 768px) {
            .search-modal-overlay {
                padding-top: 0;
            }
            .search-modal-container {
                width: 100vw;
                height: 100vh;
                max-width: 100vw;
                border-radius: 0;
                border: none;
            }
        }

        .search-input-wrapper {
            display: flex;
            align-items: center;
            padding: 22px 26px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            gap: 16px;
            position: relative;
        }

        .search-input-icon {
            color: rgba(255, 255, 255, 0.45);
        }

        .search-input-wrapper input {
            flex: 1;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            outline: none;
            padding: 0;
            width: 100%;
        }

        .search-input-wrapper input::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }

        .search-kbd-hint {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 6px;
            padding: 2px 6px;
            font-size: 10px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 0.5px;
            user-select: none;
        }

        @media (max-width: 768px) {
            .search-kbd-hint {
                display: none;
            }
        }

        .search-close-btn {
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.2s;
            padding: 6px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .search-close-btn:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.08);
            transform: rotate(90deg);
        }

        .search-categories-bar {
            display: flex;
            gap: 8px;
            padding: 14px 26px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            overflow-x: auto;
            white-space: nowrap;
            scrollbar-width: none;
        }

        .search-categories-bar::-webkit-scrollbar {
            display: none;
        }

        .category-pill {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
            color: rgba(255, 255, 255, 0.65);
            padding: 6px 14px;
            border-radius: 30px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            outline: none;
        }

        .category-pill:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.15);
            color: #fff;
            transform: translateY(-1px);
        }

        .category-pill.active {
            background: #2BC46D;
            border-color: #2BC46D;
            color: #030a06;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(43, 196, 109, 0.25);
        }

        .search-results-wrapper {
            max-height: 60vh;
            overflow-y: auto;
            padding: 22px 26px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        @media (max-width: 768px) {
            .search-results-wrapper {
                max-height: calc(100vh - 130px);
            }
        }

        .search-results-wrapper::-webkit-scrollbar {
            width: 6px;
        }

        .search-results-wrapper::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }

        .search-result-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .search-result-group-title {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: rgba(255, 255, 255, 0.4);
            margin-bottom: 4px;
            padding-left: 4px;
        }

        .search-result-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 18px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            text-decoration: none;
            color: inherit;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            cursor: pointer;
            gap: 16px;
        }

        .search-result-item:hover, 
        .search-result-item.selected {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05);
            transform: translateX(4px);
        }

        .search-result-item-left {
            display: flex;
            align-items: center;
            gap: 14px;
            flex: 1;
        }

        .search-result-icon-wrapper {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
            flex-shrink: 0;
        }

        .search-result-icon-wrapper svg {
            flex-shrink: 0;
        }

        .search-result-item[data-cat="Treatments"] .search-result-icon-wrapper { background: rgba(147, 51, 234, 0.12); border-color: rgba(147, 51, 234, 0.25); color: #c084fc; }
        .search-result-item[data-cat="Conditions"] .search-result-icon-wrapper { background: rgba(239, 68, 68, 0.12); border-color: rgba(239, 68, 68, 0.25); color: #f87171; }
        .search-result-item[data-cat="Specialities"] .search-result-icon-wrapper { background: rgba(59, 130, 246, 0.12); border-color: rgba(59, 130, 246, 0.25); color: #60a5fa; }
        .search-result-item[data-cat="Technologies"] .search-result-icon-wrapper { background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.25); color: #34d399; }
        .search-result-item[data-cat="Departments"] .search-result-icon-wrapper { background: rgba(245, 158, 11, 0.12); border-color: rgba(245, 158, 11, 0.25); color: #fbbf24; }
        .search-result-item[data-cat="Doctors"] .search-result-icon-wrapper { background: rgba(236, 72, 153, 0.12); border-color: rgba(236, 72, 153, 0.25); color: #f472b6; }
        .search-result-item[data-cat="Facilities"] .search-result-icon-wrapper { background: rgba(6, 182, 212, 0.12); border-color: rgba(6, 182, 212, 0.25); color: #22d3ee; }
        .search-result-item[data-cat="Rehab Village"] .search-result-icon-wrapper { background: rgba(244, 63, 94, 0.12); border-color: rgba(244, 63, 94, 0.25); color: #fb7185; }
        .search-result-item[data-cat="FAQs"] .search-result-icon-wrapper { background: rgba(100, 116, 139, 0.12); border-color: rgba(100, 116, 139, 0.25); color: #94a3b8; }
        .search-result-item[data-cat="Blogs"] .search-result-icon-wrapper { background: rgba(124, 58, 237, 0.12); border-color: rgba(124, 58, 237, 0.25); color: #a78bfa; }
        .search-result-item[data-cat="Pages"] .search-result-icon-wrapper { background: rgba(107, 114, 128, 0.12); border-color: rgba(107, 114, 128, 0.25); color: #9ca3af; }

        .search-result-text {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .search-result-badge {
            align-self: flex-start;
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 2px 6px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.06);
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 2px;
        }

        .search-result-item[data-cat="Treatments"] .search-result-badge { color: #d8b4fe; background: rgba(147, 51, 234, 0.15); }
        .search-result-item[data-cat="Conditions"] .search-result-badge { color: #fca5a5; background: rgba(239, 68, 68, 0.15); }
        .search-result-item[data-cat="Specialities"] .search-result-badge { color: #93c5fd; background: rgba(59, 130, 246, 0.15); }
        .search-result-item[data-cat="Technologies"] .search-result-badge { color: #6ee7b7; background: rgba(16, 185, 129, 0.15); }
        .search-result-item[data-cat="Departments"] .search-result-badge { color: #fde047; background: rgba(245, 158, 11, 0.15); }
        .search-result-item[data-cat="Doctors"] .search-result-badge { color: #fbcfe8; background: rgba(236, 72, 153, 0.15); }
        .search-result-item[data-cat="Facilities"] .search-result-badge { color: #67e8f9; background: rgba(6, 182, 212, 0.15); }
        .search-result-item[data-cat="Rehab Village"] .search-result-badge { color: #fecdd3; background: rgba(244, 63, 94, 0.15); }
        .search-result-item[data-cat="FAQs"] .search-result-badge { color: #cbd5e1; background: rgba(100, 116, 139, 0.15); }
        .search-result-item[data-cat="Blogs"] .search-result-badge { color: #ddd6fe; background: rgba(124, 58, 237, 0.15); }
        .search-result-item[data-cat="Pages"] .search-result-badge { color: #e5e7eb; background: rgba(107, 114, 128, 0.15); }

        .search-result-title {
            font-size: 15px;
            font-weight: 600;
            color: #fff;
        }

        .search-result-desc {
            font-size: 12.5px;
            color: rgba(255, 255, 255, 0.45);
            line-height: 1.4;
        }

        .search-result-cta {
            font-size: 12px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.4);
            display: flex;
            align-items: center;
            gap: 4px;
            flex-shrink: 0;
            transition: all 0.2s;
            opacity: 0;
            transform: translateX(-4px);
        }

        .search-result-item:hover .search-result-cta,
        .search-result-item.selected .search-result-cta {
            opacity: 1;
            transform: translateX(0);
            color: #2BC46D;
        }

        .search-empty-state {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 10px 4px;
        }

        .search-section-title {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: rgba(255, 255, 255, 0.35);
            margin-bottom: 12px;
        }

        .search-popular-list, .search-recent-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
        }

        .popular-search-item, .recent-search-item {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 10px 14px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 13.5px;
            font-weight: 500;
            text-align: left;
            cursor: pointer;
            transition: all 0.2s;
            outline: none;
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
        }

        .popular-search-item svg, .recent-search-item svg {
            flex-shrink: 0;
        }

        .popular-search-item:hover, .recent-search-item:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.12);
            color: #fff;
            transform: translateY(-1px);
        }

        .search-highlight {
            color: #2BC46D;
            background: rgba(43, 196, 109, 0.1);
            font-weight: 600;
            padding: 1px 3px;
            border-radius: 3px;
        }

        .search-did-you-mean {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .search-did-you-mean-title {
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.6);
        }

        .search-did-you-mean-suggestions {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .did-you-mean-btn {
            background: rgba(43, 196, 109, 0.1);
            border: 1px solid rgba(43, 196, 109, 0.2);
            color: #2BC46D;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .did-you-mean-btn:hover {
            background: #2BC46D;
            color: #030a06;
            box-shadow: 0 4px 12px rgba(43, 196, 109, 0.25);
            transform: translateY(-1px);
        }

        .search-loading, .search-error-msg {
            text-align: center;
            padding: 40px 16px;
            color: rgba(255, 255, 255, 0.4);
            font-size: 14px;
            font-weight: 500;
        }

        .search-suggested-section {
            background: rgba(43, 196, 109, 0.05);
            border: 1px solid rgba(43, 196, 109, 0.15);
            border-radius: 18px;
            padding: 16px;
            margin-bottom: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .search-suggested-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .suggested-item {
            background: rgba(255, 255, 255, 0.03) !important;
            border-color: rgba(255, 255, 255, 0.05) !important;
            margin-bottom: 0 !important;
        }

        .suggested-item:hover, .suggested-item.selected {
            background: rgba(255, 255, 255, 0.08) !important;
            border-color: rgba(255, 255, 255, 0.15) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // 3. Inject Modal Markup
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'search-modal-overlay';
    modalOverlay.id = 'search-modal';
    modalOverlay.innerHTML = `
        <div class="search-modal-container">
            <div class="search-input-wrapper">
                <i data-lucide="search" size="20" class="search-input-icon"></i>
                <input type="text" id="search-input" placeholder="Search treatments, departments, doctors, conditions, specialities, technologies, facilities, FAQs..." autocomplete="off">
                <span class="search-kbd-hint">ESC</span>
                <button class="search-close-btn" id="search-close" aria-label="Close search">
                    <i data-lucide="x" size="20"></i>
                </button>
            </div>
            
            <div class="search-categories-bar">
                <button class="category-pill active" data-category="all">All</button>
                <button class="category-pill" data-category="Treatments">Treatments</button>
                <button class="category-pill" data-category="Conditions">Conditions</button>
                <button class="category-pill" data-category="Departments">Departments</button>
                <button class="category-pill" data-category="Specialities">Specialities</button>
                <button class="category-pill" data-category="Technologies">Technologies</button>
                <button class="category-pill" data-category="Doctors">Doctors</button>
                <button class="category-pill" data-category="Facilities">Facilities</button>
                <button class="category-pill" data-category="Rehab Village">Rehab Village</button>
                <button class="category-pill" data-category="FAQs">FAQs</button>
                <button class="category-pill" data-category="Blogs">Blogs</button>
                <button class="category-pill" data-category="Pages">Pages</button>
            </div>

            <div class="search-results-wrapper" id="search-results">
                <!-- Initial list of suggestions inside js -->
            </div>
        </div>
    `;
    document.body.appendChild(modalOverlay);
    
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Synonym Search Dictionary
    const SYNONYMS = {
        'stroke': ['brain stroke', 'cva', 'hemiplegia', 'stroke rehabilitation', 'paralysis'],
        'brain stroke': ['stroke', 'cva', 'hemiplegia', 'stroke rehabilitation'],
        'cva': ['stroke', 'brain stroke', 'hemiplegia', 'stroke rehabilitation'],
        'hemiplegia': ['stroke', 'brain stroke', 'cva', 'paralysis'],
        'speech problem': ['speech therapy', 'dysphagia management', 'slurred speech', 'difficulty speaking', 'aphasia', 'dysarthria'],
        'difficulty speaking': ['speech therapy', 'speech problem', 'slurred speech', 'aphasia', 'dysarthria'],
        'slurred speech': ['speech therapy', 'speech problem', 'difficulty speaking', 'stroke rehab', 'parkinsons'],
        'walking difficulty': ['gait dysfunction', 'mobility impairment', 'robotic gait training', 'sci rehabilitation', 'parkinson', 'balance disorder', 'physiotherapy'],
        'mobility impairment': ['walking difficulty', 'gait dysfunction', 'robotic gait training', 'sci', 'physiotherapy'],
        'gait dysfunction': ['walking difficulty', 'mobility impairment', 'robotic gait training', 'physiotherapy'],
        'hand weakness': ['stroke', 'cervical myelopathy', 'sci', 'occupational therapy', 'arm weakness', 'dexterity'],
        'medical visa': ['international patient services', 'visa assistance', 'accommodation', 'travel support', 'travel desk'],
        'visa': ['medical visa', 'international patient services', 'visa assistance', 'travel support'],
        'parkinson': ['parkinson\'s disease', 'neuro rehabilitation', 'physiotherapy', 'occupational therapy', 'speech therapy', 'robotic rehabilitation', 'huber 360']
    };

    // Symptom Search Mapping
    const SYMPTOMS_MAP = {
        'hand weakness': ['stroke-rehab.html', 'myopathy.html', 'spinal-cord-injury.html', 'occupational-therapy.html'],
        'arm weakness': ['stroke-rehab.html', 'spinal-cord-injury.html', 'occupational-therapy.html'],
        'slurred speech': ['speech-therapy.html', 'stroke-rehab.html', 'parkinsons-disease.html'],
        'difficulty speaking': ['speech-therapy.html', 'stroke-rehab.html', 'parkinsons-disease.html'],
        'difficulty swallowing': ['speech-therapy.html'],
        'walking difficulty': ['parkinsons-disease.html', 'stroke-rehab.html', 'spinal-cord-injury.html', 'robotic-rehab.html', 'physiotherapy.html'],
        'balance issue': ['physiotherapy.html', 'robotic-rehab.html', 'yoga-meditation.html'],
        'back pain': ['sciatica.html', 'disc-spine-problems.html', 'physiotherapy.html', 'pain-management.html'],
        'joint pain': ['osteoarthritis.html', 'rheumatoid-arthritis.html', 'ayurveda.html', 'pain-management.html']
    };

    // Levenshtein suggestable terms
    const SUGGESTABLE_TERMS = [
        'stroke rehabilitation',
        'parkinson\'s disease',
        'physiotherapy',
        'neuro rehabilitation',
        'robotic rehabilitation',
        'occupational therapy',
        'speech therapy',
        'ayurveda',
        'rehab village',
        'international patients',
        'spinal cord injury'
    ];

    // Category CTAs
    const CTAS = {
        Treatments: 'View Program',
        Conditions: 'Learn More',
        Specialities: 'View Speciality',
        Technologies: 'Learn More',
        Departments: 'Visit Department',
        Doctors: 'View Profile',
        Facilities: 'Learn More',
        'Rehab Village': 'Explore Village',
        FAQs: 'View FAQ',
        Blogs: 'Read Article',
        Pages: 'Visit Page'
    };

    // Medical Concept Ontology mapping for intelligent semantic suggestions
    const MEDICAL_CONCEPTS = [
        {
            keywords: ['speaking', 'speech', 'slurred', 'talk', 'talking', 'voice', 'swallow', 'swallowing', 'dysphagia', 'communication', 'stutter', 'aphasia', 'dysarthria'],
            suggestions: [
                { title: 'Speech Therapy', url: 'speech-therapy.html', category: 'Specialities', icon: '🏃' },
                { title: 'Stroke Rehabilitation', url: 'stroke-rehab.html', category: 'Treatments', icon: '🧠' },
                { title: 'Dysphagia Management FAQ', url: 'speech-therapy.html#faq-is-swallowing-therapy-part-of-speech-pathology', category: 'FAQs', icon: '❓' }
            ]
        },
        {
            keywords: ['walking', 'walk', 'gait', 'foot', 'leg', 'movement', 'run', 'balance', 'fall', 'mobility', 'paralysis', 'weakness', 'hemiplegia', 'quadriplegia', 'limp'],
            suggestions: [
                { title: 'Robotic Gait Trainer', url: 'robotic-rehab.html#robotic-gait-trainer', category: 'Technologies', icon: '🤖' },
                { title: 'Physiotherapy', url: 'physiotherapy.html', category: 'Specialities', icon: '🏃' },
                { title: 'Stroke Rehabilitation', url: 'stroke-rehab.html', category: 'Treatments', icon: '🧠' },
                { title: 'Parkinson\'s Disease', url: 'parkinsons-disease.html', category: 'Treatments', icon: '🧠' },
                { title: 'Spinal Cord Injury', url: 'spinal-cord-injury.html', category: 'Treatments', icon: '🧠' }
            ]
        },
        {
            keywords: ['hand', 'arm', 'finger', 'grip', 'hold', 'reach', 'dexterity', 'weakness', 'eating', 'dressing', 'writing'],
            suggestions: [
                { title: 'Occupational Therapy', url: 'occupational-therapy.html', category: 'Specialities', icon: '🏃' },
                { title: 'Stroke Rehabilitation', url: 'stroke-rehab.html', category: 'Treatments', icon: '🧠' },
                { title: 'Robotic Arm Trainer', url: 'robotic-rehab.html#robotic-arm-trainer', category: 'Technologies', icon: '🤖' }
            ]
        },
        {
            keywords: ['visa', 'passport', 'medical visa', 'travel', 'flight', 'ticket', 'airport', 'hotel', 'stay', 'accommodation', 'mosque', 'foreigner', 'international', 'arab', 'gulf'],
            suggestions: [
                { title: 'International Patient Services', url: 'international-patients.html', category: 'Facilities', icon: '🏨' },
                { title: 'Visa Assistance', url: 'international-patients.html#visa-assistance', category: 'Facilities', icon: '🏨' },
                { title: 'Accommodation Options', url: 'international-patients.html#accommodation', category: 'Facilities', icon: '🏨' }
            ]
        },
        {
            keywords: ['pain', 'back', 'neck', 'spine', 'sci', 'disc', 'lumbago', 'sciatica', 'slip', 'ache', 'sore', 'joint', 'arthritis', 'knee', 'stiffness'],
            suggestions: [
                { title: 'Pain Management', url: 'pain-management.html', category: 'Specialities', icon: '🏃' },
                { title: 'Disc & Spine Problems', url: 'disc-spine-problems.html', category: 'Treatments', icon: '🧠' },
                { title: 'Sciatica Treatment', url: 'sciatica.html', category: 'Treatments', icon: '🧠' },
                { title: 'Physiotherapy', url: 'physiotherapy.html', category: 'Specialities', icon: '🏃' },
                { title: 'Osteoarthritis Program', url: 'osteoarthritis.html', category: 'Treatments', icon: '🧠' }
            ]
        }
    ];

    // 4. Variables & Event Listeners
    let searchIndex = null;
    let isLoading = false;
    let selectedCategory = 'all';
    let selectedIndex = -1;
    let currentResults = [];

    const triggers = document.querySelectorAll('.search-trigger-btn');
    const modal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('search-close');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    const categoryPills = document.querySelectorAll('.category-pill');

    async function loadIndex() {
        if (searchIndex || isLoading) return;
        isLoading = true;
        resultsContainer.innerHTML = '<div class="search-loading">Loading search database...</div>';
        try {
            const response = await fetch('/search-index.json');
            searchIndex = await response.json();
            renderInitialState();
        } catch (err) {
            console.error("Failed to load search index:", err);
            resultsContainer.innerHTML = '<div class="search-error-msg">Failed to load search database. Please refresh.</div>';
        } finally {
            isLoading = false;
        }
    }

    // Map URLs and categories to the same Lucide icons used in the header nav dropdown
    function getLucideIconForItem(item) {
        const url = (item.url || '').split('#')[0].split('?')[0];
        const cat = item.category || '';

        // URL-specific icons — exact matches from the nav dropdown
        const urlIconMap = {
            'stroke-rehab.html':              { icon: 'activity',          color: '#E91E63' },
            'spinal-cord-injury.html':        { icon: 'bone',              color: '#9C27B0' },
            'traumatic-brain-injury.html':    { icon: 'brain',             color: '#FF9800' },
            'hemiplegia.html':                { icon: 'person-standing',   color: '#00BCD4' },
            'quadriplegia-paraplegia.html':   { icon: 'accessibility',     color: '#3F51B5' },
            'post-surgical-complications.html': { icon: 'stethoscope',     color: '#009688' },
            'motor-neuron-diseases.html':     { icon: 'network',           color: '#607D8B' },
            'cerebral-palsy.html':            { icon: 'flower-2',         color: '#E040FB' },
            'parkinsons-disease.html':        { icon: 'zap',               color: '#FFEB3B' },
            'myopathy.html':                  { icon: 'dna',               color: '#8BC34A' },
            'disc-spine-problems.html':       { icon: 'git-commit',        color: '#FF5722' },
            'sciatica.html':                  { icon: 'zap-off',           color: '#795548' },
            'obesity.html':                   { icon: 'scale',             color: '#F44336' },
            'post-covid-complications.html':  { icon: 'shield-alert',      color: '#FFC107' },
            'muscular-dystrophy.html':        { icon: 'heart-pulse',       color: '#E91E63' },
            'osteoarthritis.html':            { icon: 'target',            color: '#9E9E9E' },
            'rheumatoid-arthritis.html':      { icon: 'flame',             color: '#FF5722' },
            'developmental-delay.html':       { icon: 'sprout',            color: '#8BC34A' },
            'psychological-problems.html':    { icon: 'lightbulb',         color: '#FFEB3B' },
            'autism.html':                    { icon: 'heart',             color: '#E91E63' },
            'psychiatry.html':               { icon: 'brain',             color: '#9C27B0' },
            'ayurveda.html':                  { icon: 'leaf',              color: '#4CAF50' },
            'physiotherapy.html':             { icon: 'dumbbell',          color: '#FF9800' },
            'robotic-rehab.html':             { icon: 'bot',               color: '#00BCD4' },
            'occupational-therapy.html':      { icon: 'puzzle',            color: '#9C27B0' },
            'speech-therapy.html':            { icon: 'message-circle',    color: '#2196F3' },
            'virtual-reality.html':           { icon: 'headset',           color: '#E91E63' },
            'yoga-meditation.html':           { icon: 'sun',               color: '#FFC107' },
            'acupuncture.html':               { icon: 'map-pin',           color: '#F44336' },
            'reflexology.html':              { icon: 'footprints',         color: '#795548' },
            'hydro-therapy.html':             { icon: 'waves',             color: '#03A9F4' },
            'pediatrics.html':               { icon: 'baby',              color: '#E040FB' },
            'slimming-treatment.html':        { icon: 'ruler',             color: '#009688' },
            'pain-management.html':           { icon: 'shield-plus',       color: '#4CAF50' },
            'diet-nutrition.html':            { icon: 'utensils',          color: '#FF5722' },
            'counseling.html':               { icon: 'heart-handshake',   color: '#E91E63' },
            'dentistry.html':                { icon: 'smile',             color: '#00BCD4' },

            'assistive-devices.html':         { icon: 'accessibility',     color: '#3F51B5' },
            'neurology.html':                { icon: 'brain-circuit',     color: '#607D8B' },
            'neurosurgery.html':             { icon: 'microscope',        color: '#009688' },
            'orthopedic.html':               { icon: 'hammer',            color: '#795548' },
            'ent.html':                       { icon: 'ear',               color: '#FF9800' },
            'general-medicine.html':          { icon: 'syringe',           color: '#F44336' },
            'urology.html':                   { icon: 'droplet',           color: '#03A9F4' },
            'cardiology.html':               { icon: 'heart',             color: '#E91E63' },
            'respiratory-therapy.html':       { icon: 'wind',              color: '#00BCD4' },
            'neuro-psychology.html':          { icon: 'brain',             color: '#9C27B0' },
            'rehab-village.html':             { icon: 'tree-pine',         color: '#4CAF50' },
            'international-patients.html':    { icon: 'plane',             color: '#2196F3' },
            'about.html':                     { icon: 'award',             color: '#FFD700' },
            'index.html':                     { icon: 'home',              color: '#4CAF50' },
        };

        // Category fallbacks for items without specific URL matches
        const catIconMap = {
            'Treatments':    { icon: 'activity',    color: '#E91E63' },
            'Conditions':    { icon: 'stethoscope', color: '#FF9800' },
            'Departments':   { icon: 'building-2',  color: '#2196F3' },
            'Specialities':  { icon: 'dumbbell',    color: '#FF9800' },
            'Technologies':  { icon: 'bot',         color: '#00BCD4' },
            'Doctors':       { icon: 'user-round',  color: '#E91E63' },
            'Facilities':    { icon: 'building',    color: '#2196F3' },
            'Rehab Village': { icon: 'tree-pine',   color: '#4CAF50' },
            'FAQs':          { icon: 'help-circle', color: '#9C27B0' },
            'Blogs':         { icon: 'book-open',   color: '#FF9800' },
            'Pages':         { icon: 'file-text',   color: '#607D8B' },
        };

        const match = urlIconMap[url] || catIconMap[cat] || { icon: 'file-text', color: '#607D8B' };
        return `<i data-lucide="${match.icon}" style="color: ${match.color}; width: 16px; height: 16px;"></i>`;
    }

    function renderInitialState() {
        selectedIndex = -1;
        currentResults = [];
        
        let html = '<div class="search-empty-state">';
        
        // Popular searches
        html += `
            <div>
                <div class="search-section-title">Popular Searches</div>
                <div class="search-popular-list">
                    <button class="popular-search-item" data-query="Stroke Rehabilitation"><i data-lucide="activity" style="color: #E91E63; width: 14px; height: 14px;"></i> Stroke Rehabilitation</button>
                    <button class="popular-search-item" data-query="Parkinson's Disease"><i data-lucide="zap" style="color: #FFEB3B; width: 14px; height: 14px;"></i> Parkinson's Treatment</button>
                    <button class="popular-search-item" data-query="Speech Therapy"><i data-lucide="message-circle" style="color: #2196F3; width: 14px; height: 14px;"></i> Speech Therapy</button>
                    <button class="popular-search-item" data-query="Robotic Rehabilitation"><i data-lucide="bot" style="color: #00BCD4; width: 14px; height: 14px;"></i> Robotic Rehabilitation</button>
                    <button class="popular-search-item" data-query="Physiotherapy"><i data-lucide="dumbbell" style="color: #FF9800; width: 14px; height: 14px;"></i> Physiotherapy</button>
                    <button class="popular-search-item" data-query="Rehab Village"><i data-lucide="tree-pine" style="color: #4CAF50; width: 14px; height: 14px;"></i> Rehab Village</button>
                </div>
            </div>
        `;

        // Recently viewed
        const recents = getRecents();
        if (recents && recents.length > 0) {
            html += `
                <div class="search-recent-section">
                    <div class="search-section-title">Recently Viewed</div>
                    <div class="search-recent-list">
            `;
            recents.forEach(item => {
                html += `
                    <a href="${item.url}" class="recent-search-item" data-recent-url="${item.url}">
                        ${getLucideIconForItem(item)} ${item.title}
                    </a>
                `;
            });
            html += `
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        resultsContainer.innerHTML = html;

        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Bind clicks to suggestions
        resultsContainer.querySelectorAll('.popular-search-item').forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.getAttribute('data-query');
                performSearch();
            });
        });

        resultsContainer.querySelectorAll('.recent-search-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const url = btn.getAttribute('href');
                const recents = getRecents();
                const matched = recents.find(r => r.url === url);
                if (matched) {
                    saveRecent(matched);
                }
            });
        });
    }

    function openSearch() {
        document.body.style.overflow = 'hidden';
        
        if (window.gsap) {
            gsap.set(modal, { display: 'flex' });
            gsap.timeline()
                .to(modal, { opacity: 1, duration: 0.3, ease: 'power2.out' })
                .to(modal.querySelector('.search-modal-container'), {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power3.out'
                }, '-=0.15');
        } else {
            modal.style.display = 'flex';
            modal.style.opacity = '1';
            const container = modal.querySelector('.search-modal-container');
            container.style.opacity = '1';
            container.style.transform = 'scale(1) translateY(0)';
        }

        setTimeout(() => input.focus(), 100);
        loadIndex();
    }

    function closeSearch() {
        document.body.style.overflow = '';
        input.value = '';
        selectedCategory = 'all';
        categoryPills.forEach(p => p.classList.remove('active'));
        document.querySelector('.category-pill[data-category="all"]').classList.add('active');

        if (window.gsap) {
            gsap.timeline({
                onComplete: () => {
                    modal.style.display = 'none';
                }
            })
            .to(modal.querySelector('.search-modal-container'), {
                scale: 0.94,
                y: -30,
                opacity: 0,
                duration: 0.25,
                ease: 'power2.in'
            })
            .to(modal, { opacity: 0, duration: 0.2, ease: 'power2.in' }, '-=0.1');
        } else {
            modal.style.display = 'none';
        }
        selectedIndex = -1;
    }

    triggers.forEach(t => t.addEventListener('click', openSearch));
    closeBtn.addEventListener('click', closeSearch);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSearch();
    });

    // Handle Category Filter Click
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedCategory = pill.getAttribute('data-category');
            performSearch();
        });
    });

    // 5. Intelligent Search Logic
    let debounceTimer;
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(performSearch, 80);
    });

    function cleanQuestion(query) {
        // Strip question helper words to reveal semantic search terms
        return query
            .replace(/\b(can|be|treated|is|there|a|cure|for|how|long|does|take|to|what|why|should|who|do|help|after)\b/gi, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function performSearch() {
        let query = input.value.trim().toLowerCase();
        if (!query) {
            renderInitialState();
            return;
        }

        if (!searchIndex) return;

        // Clean query if it is a question
        const isQuestion = query.includes('?') || query.startsWith('how') || query.startsWith('can') || query.startsWith('is');
        const semanticQuery = isQuestion ? cleanQuestion(query) : query;

        const tokens = semanticQuery.split(/\s+/).filter(t => t.length > 0);
        
        // Find synonyms for any of the tokens
        let expandedTokens = [...tokens];
        tokens.forEach(tok => {
            // Direct match check first
            if (SYNONYMS[tok]) {
                expandedTokens.push(...SYNONYMS[tok]);
            }
            // Substring check for tokens of length >= 3
            if (tok.length >= 3) {
                for (const [key, synList] of Object.entries(SYNONYMS)) {
                    if (key.includes(tok) || tok.includes(key)) {
                        expandedTokens.push(...synList);
                        expandedTokens.push(key);
                    }
                }
            }
        });
        expandedTokens = Array.from(new Set(expandedTokens));

        // Find matching symptoms
        let symptomMatches = [];
        for (const [symptom, urls] of Object.entries(SYMPTOMS_MAP)) {
            const symptomLower = symptom.toLowerCase();
            if (semanticQuery.includes(symptomLower) || (semanticQuery.length >= 3 && symptomLower.includes(semanticQuery))) {
                symptomMatches.push(...urls);
            } else {
                tokens.forEach(tok => {
                    if (tok.length >= 3 && symptomLower.includes(tok)) {
                        symptomMatches.push(...urls);
                    }
                });
            }
        }
        symptomMatches = Array.from(new Set(symptomMatches));

        const matches = [];

        searchIndex.forEach(item => {
            let score = 0;
            const titleLower = item.title.toLowerCase();
            const descLower = item.desc.toLowerCase();
            const contentLower = item.content.toLowerCase();
            const urlLower = item.url.toLowerCase();

            // Filter category first
            if (selectedCategory !== 'all' && item.category !== selectedCategory) {
                return;
            }

            // Title matches tokens
            tokens.forEach(tok => {
                if (titleLower.includes(tok)) {
                    score += 250;
                }
                if (descLower.includes(tok)) {
                    score += 80;
                }
                if (contentLower.includes(tok)) {
                    score += 15;
                }
            });

            // Exact match
            if (titleLower === semanticQuery) {
                score += 600;
            } else if (titleLower.includes(semanticQuery)) {
                score += 350;
            }

            // Synonym matches
            expandedTokens.forEach(exp => {
                if (titleLower.includes(exp)) {
                    score += 120;
                }
                if (contentLower.includes(exp)) {
                    score += 10;
                }
            });

            // Symptom / country matches
            symptomMatches.forEach(urlMatch => {
                if (urlLower.includes(urlMatch)) {
                    score += 400; // Force high boost for matches containing specified treatments
                }
            });

            // Specific category matching boost
            if (tokens.some(tok => item.category.toLowerCase().includes(tok))) {
                score += 100;
            }

            if (score > 0) {
                // Generate snippet highlight anchor
                let snippet = item.desc;
                let firstMatchIdx = -1;
                tokens.forEach(tok => {
                    const idx = contentLower.indexOf(tok);
                    if (idx !== -1 && (firstMatchIdx === -1 || idx < firstMatchIdx)) {
                        firstMatchIdx = idx;
                    }
                });

                if (firstMatchIdx !== -1 && firstMatchIdx < contentLower.length) {
                    const start = Math.max(0, firstMatchIdx - 40);
                    const end = Math.min(item.content.length, firstMatchIdx + 100);
                    snippet = item.content.substring(start, end);
                    if (start > 0) snippet = '...' + snippet;
                    if (end < item.content.length) snippet += '...';
                }

                matches.push({ item, score, snippet });
            }
        });

        // Sort by score
        matches.sort((a, b) => b.score - a.score);

        // Find intelligent medical concept suggestions
        let conceptSuggestions = [];
        MEDICAL_CONCEPTS.forEach(concept => {
            const hasKeyword = concept.keywords.some(kw => {
                const kwLower = kw.toLowerCase();
                if (semanticQuery.length >= 3) {
                    return kwLower.includes(semanticQuery) || semanticQuery.includes(kwLower);
                }
                return kwLower === semanticQuery;
            });
            
            let tokenMatch = false;
            if (!hasKeyword && tokens.length > 1) {
                tokenMatch = concept.keywords.some(kw => {
                    const kwLower = kw.toLowerCase();
                    return tokens.some(tok => {
                        if (tok.length >= 3) {
                            return kwLower.includes(tok) || tok.includes(kwLower);
                        }
                        return kwLower === tok;
                    });
                });
            }

            if (hasKeyword || tokenMatch) {
                concept.suggestions.forEach(sug => {
                    if (!conceptSuggestions.some(s => s.title === sug.title)) {
                        conceptSuggestions.push(sug);
                    }
                });
            }
        });

        if (matches.length === 0 && conceptSuggestions.length === 0) {
            renderDidYouMean(query);
            return;
        }

        renderResults(matches, tokens, conceptSuggestions);
    }

    function getLevenshteinDistance(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        matrix[i][j - 1] + 1,     // insertion
                        matrix[i - 1][j] + 1      // deletion
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    function renderDidYouMean(query) {
        selectedIndex = -1;
        currentResults = [];

        // Compute similar keywords
        const suggestions = SUGGESTABLE_TERMS.filter(term => {
            const dist = getLevenshteinDistance(query, term);
            return dist <= 5 || term.includes(query) || query.includes(term);
        }).slice(0, 3);

        let html = `
            <div class="search-did-you-mean">
                <div class="search-did-you-mean-title">No results found for "<strong>${input.value}</strong>".</div>
        `;
        
        if (suggestions.length > 0) {
            html += `
                <div class="search-did-you-mean-title">Did you mean:</div>
                <div class="search-did-you-mean-suggestions">
            `;
            suggestions.forEach(sug => {
                html += `<button class="did-you-mean-btn" data-sug="${sug}">${sug}</button>`;
            });
            html += `
                </div>
            `;
        } else {
            html += `
                <div class="search-did-you-mean-title">Try searching for other treatments, specialities, or symptoms like "Stroke Rehabilitation", "walking difficulty" or "robotic rehab".</div>
            `;
        }

        html += `</div>`;
        resultsContainer.innerHTML = html;

        resultsContainer.querySelectorAll('.did-you-mean-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                input.value = btn.getAttribute('data-sug');
                performSearch();
            });
        });
    }

    function renderResults(matches, tokens, conceptSuggestions = []) {
        selectedIndex = -1;
        // Merge suggested items at the beginning of currentResults
        currentResults = [...conceptSuggestions, ...matches.map(m => m.item)];

        let html = '';

        if (conceptSuggestions.length > 0) {
            html += `<div class="search-suggested-section">`;
            html += `<div class="search-section-title" style="color: #2BC46D; margin-bottom: 4px;">💡 Maybe this is what you're looking for:</div>`;
            html += `<div class="search-suggested-list">`;
            
            conceptSuggestions.forEach((sug, idx) => {
                const ctaText = CTAS[sug.category] || 'View Detail';
                html += `
                    <a href="${sug.url}" class="search-result-item suggested-item" data-index="${idx}" data-cat="${sug.category}">
                        <div class="search-result-item-left">
                            <div class="search-result-icon-wrapper">
                                ${getLucideIconForItem(sug)}
                            </div>
                            <div class="search-result-text">
                                <span class="search-result-badge">${sug.category}</span>
                                <div class="search-result-title">${sug.title}</div>
                            </div>
                        </div>
                        <div class="search-result-cta" style="opacity: 1; transform: translateX(0); color: #2BC46D;">
                            ${ctaText} <i data-lucide="arrow-right" size="14"></i>
                        </div>
                    </a>
                `;
            });
            html += `</div></div>`;
        }

        // Group by category
        const groups = {};
        matches.forEach((match, indexInMatches) => {
            const cat = match.item.category;
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push({ match, indexInMatches });
        });

        // Render groups in deterministic order of categories
        const catOrder = ['Treatments', 'Conditions', 'Specialities', 'Departments', 'Technologies', 'Doctors', 'Facilities', 'Rehab Village', 'FAQs', 'Blogs', 'Pages'];
        
        catOrder.forEach(cat => {
            if (groups[cat]) {
                html += `<div class="search-result-group">`;
                html += `<div class="search-result-group-title">${cat}</div>`;
                
                groups[cat].forEach(({ match, indexInMatches }) => {
                    const item = match.item;
                    let title = item.title;
                    let snippet = match.snippet || '';

                    // Highlight matched words
                    tokens.forEach(tok => {
                        if (tok.length > 1) {
                            const regex = new RegExp('(' + tok.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'gi');
                            title = title.replace(regex, '<mark class="search-highlight">$1</mark>');
                            snippet = snippet.replace(regex, '<mark class="search-highlight">$1</mark>');
                        }
                    });

                    const ctaText = CTAS[item.category] || 'View Detail';
                    const globalIdx = conceptSuggestions.length + indexInMatches;

                    html += `
                        <a href="${item.url}" class="search-result-item" data-index="${globalIdx}" data-cat="${item.category}">
                            <div class="search-result-item-left">
                                <div class="search-result-icon-wrapper">
                                    ${getLucideIconForItem(item)}
                                </div>
                                <div class="search-result-text">
                                    <span class="search-result-badge">${item.category}</span>
                                    <div class="search-result-title">${title}</div>
                                    ${snippet ? `<div class="search-result-desc">${snippet}</div>` : ''}
                                </div>
                            </div>
                            <div class="search-result-cta">
                                ${ctaText} <i data-lucide="arrow-right" size="14"></i>
                            </div>
                        </a>
                    `;
                });
                
                html += `</div>`;
            }
        });

        resultsContainer.innerHTML = html;
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Bind clicks to items to save recent searches
        resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', (e) => {
                const idx = parseInt(el.getAttribute('data-index'));
                const clickedItem = currentResults[idx];
                if (clickedItem) {
                    saveRecent(clickedItem);
                }
            });
        });
    }

    // 6. Keyboard & Mouse Selection Handlers
    window.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'flex') {
            // Meta+K or Ctrl+K to open
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            return;
        }

        const items = resultsContainer.querySelectorAll('.search-result-item');

        if (e.key === 'Escape') {
            e.preventDefault();
            closeSearch();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (items.length > 0) {
                if (selectedIndex < items.length - 1) {
                    if (selectedIndex >= 0) items[selectedIndex].classList.remove('selected');
                    selectedIndex++;
                    items[selectedIndex].classList.add('selected');
                    items[selectedIndex].scrollIntoView({ block: 'nearest' });
                }
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (items.length > 0) {
                if (selectedIndex > 0) {
                    items[selectedIndex].classList.remove('selected');
                    selectedIndex--;
                    items[selectedIndex].classList.add('selected');
                    items[selectedIndex].scrollIntoView({ block: 'nearest' });
                }
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (items.length > 0) {
                const targetIndex = selectedIndex >= 0 ? selectedIndex : 0;
                items[targetIndex].click();
                const link = items[targetIndex].getAttribute('href');
                if (link) window.location.href = link;
            }
        }
    });

    // 7. Recent Items Management (localStorage)
    function getRecents() {
        try {
            return JSON.parse(localStorage.getItem('ayurgreen_recent_searches')) || [];
        } catch (e) {
            return [];
        }
    }

    function saveRecent(item) {
        try {
            let recents = getRecents();
            // Filter out existing matching URL
            recents = recents.filter(r => r.url !== item.url);
            // Put latest on top
            recents.unshift({
                url: item.url,
                title: item.title,
                icon: item.icon,
                category: item.category
            });
            // Limit to 5
            recents = recents.slice(0, 5);
            localStorage.setItem('ayurgreen_recent_searches', JSON.stringify(recents));
        } catch (e) {
            console.warn("Storage write blocked:", e);
        }
    }

    // 8. Dynamic hash listener to open FAQs on page arrival/hashchange
    function checkAndOpenHashFAQ() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#faq-')) {
            // Find accordion item
            const id = hash.substring(1);
            let targetEl = document.getElementById(id);
            
            // If targetEl not directly found, search containing faq-item by slug
            if (!targetEl) {
                const faqs = document.querySelectorAll('.ayur-faq-item');
                faqs.forEach(faq => {
                    const text = faq.querySelector('.ayur-faq-trigger').textContent;
                    const slug = `faq-${slugify(text.substring(0, 30))}`;
                    if (slug === id) {
                        targetEl = faq;
                    }
                });
            }

            if (targetEl) {
                const trigger = targetEl.querySelector('.ayur-faq-trigger');
                const content = targetEl.querySelector('.ayur-faq-content');
                
                if (trigger && content) {
                    // Close others
                    document.querySelectorAll('.ayur-faq-item').forEach(otherItem => {
                        if (otherItem !== targetEl) {
                            otherItem.classList.remove('active');
                            const otherContent = otherItem.querySelector('.ayur-faq-content');
                            if (otherContent) otherContent.style.maxHeight = null;
                        }
                    });

                    // Activate target
                    targetEl.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    
                    // Smooth scroll to it
                    setTimeout(() => {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 300);
                }
            }
        }
    }

    // Bind hashchange events
    window.addEventListener('hashchange', checkAndOpenHashFAQ);
    setTimeout(checkAndOpenHashFAQ, 400); // Trigger once loaded
}

if (typeof window !== 'undefined') {
    window.initAyurgreen = init;
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}




