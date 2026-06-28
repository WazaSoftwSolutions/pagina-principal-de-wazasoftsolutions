'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Usamos sessionStorage para persistir el estado de "cargado" en esta pestaña/sesión
        const hasLoaded = sessionStorage.getItem('app-loaded');
        
        if (hasLoaded) {
            document.body.classList.add('loaded');
            setIsVisible(false);
            return;
        }

        // Si es la primera vez, mostrar el loader
        setIsVisible(true);

        const hide = () => {
            const gsap = (window as any).gsap;
            const preloader = document.getElementById('preloader');
            const curtainLeft = document.getElementById('curtain-left');
            const curtainRight = document.getElementById('curtain-right');

            if (gsap && preloader && curtainLeft && curtainRight) {
                const tl = gsap.timeline();
                tl.to(preloader, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        preloader.style.display = 'none';
                        setIsVisible(false);
                        sessionStorage.setItem('app-loaded', 'true');
                        document.body.classList.add('loaded');
                    }
                });
                tl.to([curtainLeft, curtainRight], {
                    x: (i: number) => i === 0 ? '-101%' : '101%',
                    duration: 0.8,
                    ease: "power3.inOut"
                }, "-=0.3");
            } else {
                // Failsafe
                if (preloader) preloader.style.display = 'none';
                setIsVisible(false);
                sessionStorage.setItem('app-loaded', 'true');
                document.body.classList.add('loaded');
            }
        };

        const timeout = setTimeout(hide, 500);
        return () => clearTimeout(timeout);
    }, []);

    // Si no es visible, no renderizar nada
    // Nota: Inicializamos isVisible en false y solo lo ponemos a true en el useEffect
    // si no hay marca en sessionStorage. Esto evita el "flash" del loader en navegaciones.
    if (!isVisible) return null;

    return (
        <>
            <div id="preloader">
                <img src="/assets/images/WSLGV01BT.png" alt="Logo WazaDevs" className="logo-pulse" />
            </div>
            <div id="curtain-left" className="curtain"></div>
            <div id="curtain-right" className="curtain"></div>
        </>
    );
}
