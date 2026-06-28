'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Effects() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        // --- 1. Inicialización de librerías externas ---
        const initLibs = () => {


            // GSAP ScrollTrigger
            if ((window as any).gsap && (window as any).ScrollTrigger) {
                const gsap = (window as any).gsap;
                const ScrollTrigger = (window as any).ScrollTrigger;
                gsap.registerPlugin(ScrollTrigger);


                if (pathname === '/') {
                    gsap.to("#process-timeline", {
                        height: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: "#process",
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                        }
                    });
                }
                ScrollTrigger.refresh();
            }

            // Swiper
            if ((window as any).Swiper) {
                new (window as any).Swiper('.testimonial-slider', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    pagination: { el: '.swiper-pagination', clickable: true },
                    autoplay: { delay: 5000 },
                    breakpoints: { 768: { slidesPerView: 1 } }
                });
            }

            // Vanilla Tilt
            if ((window as any).VanillaTilt) {
                (window as any).VanillaTilt.init(document.querySelectorAll(".card-glow"), {
                    max: 5, speed: 400, glare: true, "max-glare": 0.2, scale: 1.02
                });
                (window as any).VanillaTilt.init(document.querySelectorAll(".swiper-slide > div"), {
                    max: 3, speed: 400, glare: false, scale: 1.0
                });
            }
        };

        // --- 2. Lenis Smooth Scroll ---
        if (typeof window !== 'undefined' && (window as any).Lenis) {
            if (lenisRef.current) lenisRef.current.destroy();

            const lenis = new (window as any).Lenis({
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
            });
            lenisRef.current = lenis;

            const raf = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);

            if ((window as any).ScrollTrigger) {
                lenis.on('scroll', (window as any).ScrollTrigger.update);
            }
        }

        // --- 3. Inicializar efectos ---
        initLibs();


        // --- 4. Smooth Scroll con Delegación de Eventos ---
        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (anchor) {
                const href = anchor.getAttribute('href');
                // IMPORTANTE: Solo interceptamos si es un ancla interna (#...)
                if (href && href.startsWith('#') && href.length > 1) {
                    const targetElement = document.querySelector(href);
                    if (targetElement && lenisRef.current) {
                        e.preventDefault();
                        lenisRef.current.scrollTo(targetElement, {
                            offset: -80,
                            duration: 1.5,
                            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        });
                        // Actualizar hash en la URL sin recargar
                        window.history.pushState(null, '', href);
                    }
                }
            }
        };

        window.addEventListener('click', handleGlobalClick, { capture: true });

        // --- 5. Otros efectos persistentes ---

        // Elementos Magnéticos
        const magneticElements = document.querySelectorAll('.magnetic');
        magneticElements.forEach((el) => {
            el.addEventListener('mousemove', (e: any) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                (el as HTMLElement).style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            el.addEventListener('mouseleave', () => {
                (el as HTMLElement).style.transform = `translate(0px, 0px)`;
            });
        });

        // Contadores
        const counters = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target as HTMLElement;
                    const targetValue = parseInt(counter.getAttribute('data-target') || '0');
                    let current = 0;
                    const duration = 2000;
                    const startTime = performance.now();
                    const update = (now: number) => {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        current = progress * targetValue;
                        counter.innerText = Math.floor(current).toLocaleString();
                        if (progress < 1) requestAnimationFrame(update);
                        else counter.innerText = targetValue.toLocaleString();
                    };
                    requestAnimationFrame(update);
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => counterObserver.observe(c));

        // Barra de progreso y botón subir
        const readProgressBar = document.getElementById('read-progress-bar');
        const backToTop = document.getElementById('back-to-top');
        const handleScroll = () => {
            if (readProgressBar) {
                const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
                const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
                readProgressBar.style.width = `${scrollPercent}%`;
            }
            if (backToTop) {
                if (window.scrollY > 500) {
                    backToTop.classList.remove('opacity-0', 'invisible');
                } else {
                    backToTop.classList.add('opacity-0', 'invisible');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        // --- Cleanup ---
        return () => {
            if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
                (window as any).ScrollTrigger.getAll().forEach((t: any) => t.kill());
            }
            window.removeEventListener('click', handleGlobalClick, { capture: true });
            window.removeEventListener('scroll', handleScroll);
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
        };
    }, [pathname, searchParams]);

    return null;
}
