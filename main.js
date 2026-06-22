import { mountSidebarGlow } from './mount-sidebar-glow';

document.addEventListener('DOMContentLoaded', () => {
    mountSidebarGlow();
    // Initialize Lucide Icons
    lucide.createIcons({
      strokeWidth: 1.5,
      attrs: {
        'aria-hidden': 'true'
      }
    });
  
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
            `<img src="Assets/Rehab_Process_Transparent.webp" alt="Rehab Process Steps" width="1408" height="156" style="max-width: 100%; height: auto; display: block; margin-top: 24px;">`
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
});

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
            background: rgba(5, 8, 20, 0.65);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 12vh;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .search-modal-overlay.open {
            opacity: 1;
            visibility: visible;
        }
        .search-modal-container {
            width: 90%;
            max-width: 680px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 28px;
            box-shadow: 0 35px 70px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            transform: translateY(-24px) scale(0.96);
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: hidden;
            color: #fff;
            font-family: 'Inter', sans-serif;
            backdrop-filter: blur(35px);
            -webkit-backdrop-filter: blur(35px);
        }
        .search-modal-overlay.open .search-modal-container {
            transform: translateY(0) scale(1);
        }
        .search-input-wrapper {
            display: flex;
            align-items: center;
            padding: 20px 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            gap: 16px;
        }
        .search-input-wrapper input {
            flex: 1;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            outline: none;
        }
        .search-input-wrapper input::placeholder {
            color: rgba(255, 255, 255, 0.35);
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
            background: rgba(255, 255, 255, 0.1);
        }
        .search-results-wrapper {
            max-height: 52vh;
            overflow-y: auto;
            padding: 20px 24px;
        }
        .search-results-wrapper::-webkit-scrollbar {
            width: 6px;
        }
        .search-results-wrapper::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.12);
            border-radius: 3px;
        }
        .search-result-group {
            margin-bottom: 24px;
        }
        .search-result-group:last-child {
            margin-bottom: 0;
        }
        .search-result-group-title {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #2BC46D;
            margin-bottom: 10px;
            padding-left: 6px;
            opacity: 0.9;
        }
        .search-result-item {
            display: block;
            padding: 14px 18px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.03);
            margin-bottom: 8px;
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            text-decoration: none;
        }
        .search-result-item:hover, .search-result-item.selected {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateX(4px);
        }
        .search-result-item-title {
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 4px;
        }
        .search-result-item-heading {
            font-size: 12px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .search-result-item-snippet {
            font-size: 12.5px;
            color: rgba(255, 255, 255, 0.45);
            line-height: 1.5;
        }
        .search-highlight {
            color: #2BC46D;
            font-weight: 600;
            background: rgba(43, 196, 109, 0.12);
            padding: 1px 4px;
            border-radius: 4px;
        }
        .search-no-results, .search-loading {
            text-align: center;
            padding: 40px 16px;
            color: rgba(255, 255, 255, 0.4);
            font-size: 14px;
            font-weight: 500;
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
                <i data-lucide="search" size="18" style="color: rgba(255, 255, 255, 0.4);"></i>
                <input type="text" id="search-input" placeholder="Search anything available in the website..." autocomplete="off">
                <button class="search-close-btn" id="search-close" aria-label="Close search">
                    <i data-lucide="x" size="18"></i>
                </button>
            </div>
            <div class="search-results-wrapper" id="search-results">
                <div class="search-no-results">Type keywords to search...</div>
            </div>
        </div>
    `;
    document.body.appendChild(modalOverlay);
    
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 4. Variables & Event Listeners
    let searchIndex = null;
    let isLoading = false;
    const triggers = document.querySelectorAll('.search-trigger-btn');
    const modal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('search-close');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    let selectedIndex = -1;

    async function loadIndex() {
        if (searchIndex || isLoading) return;
        isLoading = true;
        resultsContainer.innerHTML = '<div class="search-loading">Loading search database...</div>';
        try {
            const response = await fetch('/search-index.json');
            searchIndex = await response.json();
            resultsContainer.innerHTML = '<div class="search-no-results">Type keywords to search...</div>';
        } catch (err) {
            console.error("Failed to load search index:", err);
            resultsContainer.innerHTML = '<div class="search-no-results" style="color: #ff6b6b;">Failed to load search database.</div>';
        } finally {
            isLoading = false;
        }
    }

    function openSearch() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => input.focus(), 100);
        loadIndex();
    }

    function closeSearch() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        input.value = '';
        resultsContainer.innerHTML = '<div class="search-no-results">Type keywords to search...</div>';
        selectedIndex = -1;
    }

    triggers.forEach(t => t.addEventListener('click', openSearch));
    closeBtn.addEventListener('click', closeSearch);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSearch();
    });

    // 5. Search Logic
    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (!query) {
            resultsContainer.innerHTML = '<div class="search-no-results">Type keywords to search...</div>';
            selectedIndex = -1;
            return;
        }
        if (!searchIndex) return;

        const keywords = query.split(/\s+/).filter(k => k.length > 0);
        const matches = [];

        searchIndex.forEach(page => {
            let score = 0;
            let matchedHeading = null;
            let snippet = '';

            let firstMatchIndex = -1;
            let allKeywordsMatch = true;

            keywords.forEach(kw => {
                let kwMatched = false;

                if (page.title.toLowerCase().includes(kw)) {
                    score += 100;
                    kwMatched = true;
                }

                if (page.desc && page.desc.toLowerCase().includes(kw)) {
                    score += 30;
                    kwMatched = true;
                }

                page.headings.forEach(heading => {
                    if (heading.text.toLowerCase().includes(kw)) {
                        score += 50;
                        kwMatched = true;
                        if (!matchedHeading) {
                            matchedHeading = heading;
                        }
                    }
                });

                const idx = page.content.toLowerCase().indexOf(kw);
                if (idx !== -1) {
                    score += 5;
                    kwMatched = true;
                    if (firstMatchIndex === -1 || idx < firstMatchIndex) {
                        firstMatchIndex = idx;
                    }
                }

                if (!kwMatched) {
                    allKeywordsMatch = false;
                }
            });

            if (allKeywordsMatch && score > 0) {
                // Generate snippet
                if (firstMatchIndex !== -1) {
                    const start = Math.max(0, firstMatchIndex - 50);
                    const end = Math.min(page.content.length, firstMatchIndex + 80);
                    snippet = page.content.substring(start, end);
                    if (start > 0) snippet = '...' + snippet;
                    if (end < page.content.length) snippet = snippet + '...';
                } else if (page.desc) {
                    snippet = page.desc;
                }

                matches.push({ page, score, matchedHeading, snippet });
            }
        });

        // Sort by score
        matches.sort((a, b) => b.score - a.score);

        if (matches.length === 0) {
            resultsContainer.innerHTML = '<div class="search-no-results">No results found for "' + input.value + '"</div>';
            selectedIndex = -1;
            return;
        }

        // Render matches
        let html = '';
        html += '<div class="search-result-group">';
        html += '<div class="search-result-group-title">Search Results (' + matches.length + ')</div>';

        matches.forEach((m, idx) => {
            const url = m.matchedHeading && m.matchedHeading.id ? `${m.page.url}#${m.matchedHeading.id}` : m.page.url;
            
            let headingPath = m.page.title.split('|')[0].trim();
            if (m.matchedHeading) {
                headingPath += ' > ' + m.matchedHeading.text;
            }

            let highlightedHeading = headingPath;
            let highlightedSnippet = m.snippet;
            
            keywords.forEach(kw => {
                const regex = new RegExp('(' + kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'gi');
                highlightedHeading = highlightedHeading.replace(regex, '<mark class="search-highlight">$1</mark>');
                highlightedSnippet = highlightedSnippet.replace(regex, '<mark class="search-highlight">$1</mark>');
            });

            html += `
                <a href="${url}" class="search-result-item" data-index="${idx}">
                    <div class="search-result-item-heading">
                        <i data-lucide="file-text" size="14"></i>
                        <span>${highlightedHeading}</span>
                    </div>
                    ${highlightedSnippet ? `<div class="search-result-item-snippet">${highlightedSnippet}</div>` : ''}
                </a>
            `;
        });
        html += '</div>';

        resultsContainer.innerHTML = html;
        if (window.lucide) {
            window.lucide.createIcons();
        }
        selectedIndex = -1;
    });

    // 6. Global Keys
    window.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('open')) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            return;
        }

        if (e.key === 'Escape') {
            closeSearch();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const items = resultsContainer.querySelectorAll('.search-result-item');
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
            const items = resultsContainer.querySelectorAll('.search-result-item');
            if (items.length > 0) {
                if (selectedIndex > 0) {
                    items[selectedIndex].classList.remove('selected');
                    selectedIndex--;
                    items[selectedIndex].classList.add('selected');
                    items[selectedIndex].scrollIntoView({ block: 'nearest' });
                }
            }
        } else if (e.key === 'Enter') {
            if (selectedIndex >= 0) {
                e.preventDefault();
                const items = resultsContainer.querySelectorAll('.search-result-item');
                if (items[selectedIndex]) {
                    items[selectedIndex].click();
                }
            }
        }
    });
}




