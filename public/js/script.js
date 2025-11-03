// Usamos window.onload para esperar que TODO (incluyendo imágenes) cargue
window.onload = () => {

    // Añadimos un retraso
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }
        // Hacemos visible el body
        document.body.classList.add('loaded');
    }, 1500); // <-- ¡Aquí está la magia! 1500ms = 1.5 segundos

};

document.addEventListener('DOMContentLoaded', function() {

    AOS.init({
        duration: 600,
        once: true,
        offset: 50,
    });

    // Script para Menú Móvil
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            mobileMenu.classList.toggle('hidden');
            menuButton.setAttribute('aria-expanded', !isExpanded);
        });
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Inicializar Swiper
    try {
        const swiper = new Swiper('.testimonial-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } catch (e) {
        console.error("Error al inicializar Swiper: ", e);
    }

    // Script "Volver Arriba"
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
    }

    // Script Contadores
    const statsSection = document.getElementById('stats');
    let hasAnimated = false;
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const updateCount = () => {
                const currentCount = +counter.innerText;
                const inc = Math.max(Math.ceil(target / speed), 1);

                if (currentCount < target) {
                    counter.innerText = Math.min(currentCount + inc, target);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    }
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounters();
                    hasAnimated = true;
                    observer.unobserve(statsSection);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // Lógica Split Screen
    const panelLeft = document.getElementById('panel-left');
    const panelRight = document.getElementById('panel-right');
    if (panelLeft && panelRight) {
        panelLeft.addEventListener('click', () => {
            panelLeft.classList.remove('md:w-1/2', 'md:w-[25%]', 'panel-shrunk');
            panelLeft.classList.add('md:w-[75%]', 'panel-expanded');
            panelRight.classList.remove('md:w-1/2', 'md:w-[75%]', 'panel-expanded');
            panelRight.classList.add('md:w-[25%]', 'panel-shrunk');
        });
        panelRight.addEventListener('click', () => {
            panelRight.classList.remove('md:w-1/2', 'md:w-[25%]', 'panel-shrunk');
            panelRight.classList.add('md:w-[75%]', 'panel-expanded');
            panelLeft.classList.remove('md:w-1/2', 'md:w-[75%]', 'panel-expanded');
            panelLeft.classList.add('md:w-[25%]', 'panel-shrunk');
        });
    }

    // Lógica Barra de Progreso
    const readProgressBar = document.getElementById('read-progress-bar');
    function updateProgressBar() {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollHeight > clientHeight) {
            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            readProgressBar.style.width = `${scrollPercent}%`;
        }
    }
    if (readProgressBar) {
        window.addEventListener('scroll', updateProgressBar);
    }

    // Lógica de Modal
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                openModal(modal);
            }
        });
    });
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Lógica de Cursor Personalizado
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function(e) {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';

            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        });

        const hoverElements = document.querySelectorAll('a, button, [data-modal-target], .icon-rotate, .swiper-pagination-bullet, .panel, summary, [type="submit"], details, .card-glow, .logo-marquee-track svg');
        hoverElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-grow');
            });
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-grow');
            });
        });
    }

    // Lógica de Botón Magnético
    const magneticElements = document.querySelectorAll('.magnetic');
    const strength = 50;

    magneticElements.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x / rect.width * strength}px, ${y / rect.height * strength}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });

    // Lógica de GSAP
    try {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Animación de la línea de tiempo del Proceso
        const processTimeline = document.getElementById('process-timeline');
        if (processTimeline) {
            gsap.fromTo(processTimeline,
                { height: 0 },
                {
                    height: "100%",
                    duration: 1.5,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: "#process",
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: false,
                        once: true
                    }
                }
            );
        }

        // 2. Animación Parallax de "Sobre Nosotros"
        const aboutImage = document.getElementById('about-image-wrapper');
        if (aboutImage) {
            gsap.to(aboutImage, {
                yPercent: -20, // Mueve la imagen hacia arriba un 20% de su altura
                ease: "none",
                scrollTrigger: {
                    trigger: "#about",
                    start: "top bottom", // Cuando la parte superior de #about toca la parte inferior de la ventana
                    end: "bottom top", // Cuando la parte inferior de #about toca la parte superior de la ventana
                    scrub: true // Conecta la animación al scroll
                }
            });
        }

    } catch (e) {
        console.error("Error al inicializar GSAP: ", e);
    }

});
