'use client';

import ScrollReveal from './ScrollReveal';

export default function Services() {
    return (
        <section id="services" className="flex flex-col md:flex-row min-h-[70vh] overflow-hidden" role="region" aria-label="Nuestros Servicios">

            <ScrollReveal
                id="panel-left"
                animation="fade-right"
                onClick={() => {
                    const left = document.getElementById('panel-left');
                    const right = document.getElementById('panel-right');
                    if (left && right) {
                        left.classList.remove('md:w-1/2', 'md:w-[25%]', 'panel-shrunk');
                        left.classList.add('md:w-[75%]', 'panel-expanded');
                        right.classList.remove('md:w-1/2', 'md:w-[75%]', 'panel-expanded');
                        right.classList.add('md:w-[25%]', 'panel-shrunk');
                    }
                }}
                className="panel w-full md:w-1/2 bg-white text-gray-900 flex items-center justify-center p-10 cursor-pointer transition-all duration-700 ease-in-out relative"
            >
                <div className="panel-content text-center max-w-md">
                    <div className="mb-6">
                        <svg className="w-16 h-16 text-black mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                    </div>
                    <h2 className="panel-title text-3xl md:text-4xl font-extrabold mb-4 text-balance">Desarrollo Web</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Creamos aplicaciones web robustas, escalables y optimizadas para el rendimiento, desde dashboards
                        complejos hasta e-commerce.
                    </p>
                    <span
                        className="bg-black text-white py-3 px-8 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300">
                        Ver Proyectos Web
                    </span>
                </div>
            </ScrollReveal>

            <ScrollReveal
                id="panel-right"
                animation="fade-left"
                onClick={() => {
                    const left = document.getElementById('panel-left');
                    const right = document.getElementById('panel-right');
                    if (left && right) {
                        right.classList.remove('md:w-1/2', 'md:w-[25%]', 'panel-shrunk');
                        right.classList.add('md:w-[75%]', 'panel-expanded');
                        left.classList.remove('md:w-1/2', 'md:w-[75%]', 'panel-expanded');
                        left.classList.add('md:w-[25%]', 'panel-shrunk');
                    }
                }}
                className="panel w-full md:w-1/2 bg-gray-900 text-white flex items-center justify-center p-10 cursor-pointer transition-all duration-700 ease-in-out relative"
            >
                <div className="panel-content text-center max-w-md">
                    <div className="mb-6">
                        <svg className="w-16 h-16 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <h2 className="panel-title text-3xl md:text-4xl font-extrabold mb-4 text-balance">Aplicaciones Móviles</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Diseñamos experiencias móviles nativas e híbridas para iOS y Android que conectan con tus usuarios
                        dondequiera que estén.
                    </p>
                    <span
                        className="bg-white text-black py-3 px-8 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300">
                        Ver Proyectos Móviles
                    </span>
                </div>
            </ScrollReveal>

        </section>
    );
}
