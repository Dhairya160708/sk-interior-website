// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Hero Animations
const heroTl = gsap.timeline();

heroTl.to('#hero-title', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo.out'
})
.to('#hero-desc', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'expo.out'
}, '-=1')
.to('.hero-btns', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'expo.out'
}, '-=0.8');

// Section Reveals
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    const title = section.querySelector('.section-title');
    const content = section.querySelector('.container > div');

    if (title) {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: 'expo.out'
        });
    }

    if (content) {
        gsap.from(content, {
            scrollTrigger: {
                trigger: content,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.2
        });
    }
});

// Gallery Swiper Initialization
const gallerySwiper = new Swiper(".gallerySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Testimonials Swiper Initialization
const testimonialsSwiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

// Package Card Hover Animation
const cards = document.querySelectorAll('.package-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
