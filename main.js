document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons({
      strokeWidth: 1.5
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
        const ctaLabels = ["Start Recovery", "EXPLORE STORIES"];
        const headlines = [
            "India’s First Robotic Integrated Neuro Rehabilitation Hospital",
            "Stories of Relearning"
        ];
        const subContents = [
            "Advanced robotic rehab, Ayurveda, and multidisciplinary care designed to restore independence and quality of life.",
            `<img src="assets/Rehab_Process_Transparent.webp" alt="Rehab Process Steps" style="max-width: 100%; height: auto; display: block; margin-top: 24px;">`
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
});
