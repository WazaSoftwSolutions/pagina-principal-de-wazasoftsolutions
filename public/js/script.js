window.onload = () => {

    const preloader = document.getElementById('preloader');
    const curtainLeft = document.getElementById('curtain-left');
    const curtainRight = document.getElementById('curtain-right');

    const delayBeforeCurtain = 0.5;
    const curtainDuration = 0.8;

    const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
            // Animación finalizada
        }
    });

    // Simplemente asegurarse de que el preloader sea visible un momento y luego se vaya
    if (preloader) {
        tl.to(preloader, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            onComplete: () => {
                preloader.classList.add('hidden');
            }
        });
    }

    const totalAnimDuration = tl.duration();

    // Sincronizar cortinas
    setTimeout(() => {
        gsap.timeline({
            onComplete: () => {
                document.body.classList.add('loaded');
            }
        })
            .to(curtainLeft, {
                x: '-100%',
                duration: curtainDuration,
                ease: "power3.inOut"
            }, 0)
            .to(curtainRight, {
                x: '100%',
                duration: curtainDuration,
                ease: "power3.inOut"
            }, 0);

        // Iniciar AOS después de que las cortinas se abran
        setTimeout(() => {
            AOS.refresh();
        }, curtainDuration * 1000);

    }, (totalAnimDuration * 1000));
};

document.addEventListener('DOMContentLoaded', function () {

    AOS.init({
        duration: 400,
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


    // Lógica de envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');

    if (contactForm && contactMessage) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevenir envío normal del formulario

            // Mostrar mensaje de carga
            contactMessage.className = 'mb-6 bg-blue-500 text-white px-4 py-3 rounded-lg';
            contactMessage.innerHTML = 'Enviando mensaje...';
            contactMessage.classList.remove('hidden');

            const now = new Date();
            const formattedTime = now.toLocaleString();

            document.getElementById('time').value = formattedTime;

            const serviceID = 'service_3orgoog';
            const templateID = 'template_95wsviw';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    contactMessage.className = 'mb-6 bg-green-500 text-white px-4 py-3 rounded-lg';
                    contactMessage.innerHTML = '¡Mensaje enviado exitosamente! Gracias por contactarnos. Te responderemos pronto.';
                    contactForm.reset(); // Limpiar el formulario
                }, (err) => {
                    contactMessage.className = 'mb-6 bg-red-500 text-white px-4 py-3 rounded-lg';
                    contactMessage.innerHTML = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
                });
        });
    }

    // --- Nuevas Implementaciones (Scroll Suave & Tilt) ---

    // 1. Lenis Smooth Scroll
    try {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // Manejar clics en enlaces de navegación para deslizamiento suave (Smooth Scroll)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    lenis.scrollTo(targetElement, {
                        offset: -80, // Ajuste para el header sticky
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                }
            });
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Integrar Lenis con GSAP ScrollTrigger
        if (typeof ScrollTrigger !== 'undefined') {
            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);
        }


    } catch (e) {
        console.error("Error al inicializar Lenis o Smooth Scroll:", e);
    }

    // 2. Vanilla Tilt (Efecto 3D en tarjetas)
    try {
        // Aplicar a tarjetas del portafolio (clase .card-glow)
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll(".card-glow"), {
                max: 5,              // Ángulo máximo de inclinación (sutil)
                speed: 400,          // Velocidad de la transición
                glare: true,         // Efecto de brillo
                "max-glare": 0.2,    // Opacidad máxima del brillo
                scale: 1.02,         // Zoom sutil al hacer hover
            });

            // Aplicar a tarjetas de testimonios (contenedor interno)
            // Nota: Swiper + Tilt a veces requiere cuidado, aplicamos al hijo directo del slide
            VanillaTilt.init(document.querySelectorAll(".swiper-slide > div"), {
                max: 3,
                speed: 400,
                glare: false, // Sin brillo en testimonios para mejor legibilidad
                scale: 1.0,   // Sin zoom extra
            });

        }
    } catch (e) {
        console.warn("Vanilla Tilt no pudo cargarse:", e);
    }

    // 3. Animación de revelado de texto (Títulos)
    try {
        const revealElements = document.querySelectorAll("h2");

        revealElements.forEach(element => {
            gsap.fromTo(element,
                {
                    y: 50,
                    opacity: 0,
                    skewY: 7
                },
                {
                    y: 0,
                    opacity: 1,
                    skewY: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%", // Inicia cuando el top del elemento está al 85% del viewport
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    } catch (e) {
    }

});
