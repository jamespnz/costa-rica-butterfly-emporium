/**
 * Costa Rica Butterfly Emporium
 * Trilingual Language Toggle (EN/ES/JA)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language from localStorage or default to English
    const savedLang = localStorage.getItem('butterfly-emporium-lang') || 'en';
    setLanguage(savedLang);
    
    // Language toggle button handlers
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('butterfly-emporium-lang', lang);
        });
    });
});

/**
 * Set the page language and update all translatable elements
 * @param {string} lang - Language code ('en', 'es', or 'ja')
 */
function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active state on language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-en]');
    translatableElements.forEach(el => {
        const translation = el.dataset[lang];
        if (translation) {
            el.textContent = translation;
        }
    });
    
    // Update page title based on language
    const titles = {
        en: 'Costa Rica Butterfly Emporium | Wholesale Specimens',
        es: 'Emporio de Mariposas Costa Rica | Especímenes al Por Mayor',
        ja: 'コスタリカ蝶専門店 | 卸売標本'
    };
    document.title = titles[lang] || titles.en;
    
    // Update meta description
    const descriptions = {
        en: 'Premium wholesale butterfly specimens from Costa Rica. Sustainably sourced Morpho, Owl, Glasswing and rare tropical butterflies for museums, collectors and exhibitions worldwide.',
        es: 'Especímenes de mariposas al por mayor de primera calidad de Costa Rica. Mariposas Morpho, Búho, Alas de Cristal y mariposas tropicales raras obtenidas de manera sostenible para museos, coleccionistas y exposiciones en todo el mundo.',
        ja: 'コスタリカからの高品質な蝶の卸売標本。持続可能な方法で調達されたモルフォ蝶、フクロウチョウ、グラスウィング、希少な熱帯蝶を世界中の博物館、コレクター、展示会に提供。'
    };
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = descriptions[lang] || descriptions.en;
    }
}

/**
 * Smooth scroll for anchor links (if needed in future)
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/**
 * Lazy loading enhancement for images
 * Falls back gracefully if native lazy loading isn't supported
 */
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src; // Trigger load
    });
} else {
    // Fallback for browsers without native lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

/**
 * Header scroll effect - subtle background change
 */
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
}, { passive: true });

/**
 * Card hover animation enhancement
 */
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
});

/**
 * Intersection Observer for scroll animations (optional enhancement)
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to cards
document.querySelectorAll('.card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});
