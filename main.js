document.addEventListener('DOMContentLoaded', () => {
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
});
