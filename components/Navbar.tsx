'use client';

import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 border-b border-gray-200/50 sticky top-0 z-50 backdrop-blur-md transition-all duration-300" role="navigation">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="flex items-center"
                    aria-label="Página de inicio de WazaDevs">
                    <img src="/assets/images/letters.png" alt="Logo WazaDevs" className="w-[20vw] min-w-50" />
                </a>

                <div className="hidden nav:flex! space-x-6 items-center">
                    <a href="#services" className="text-gray-700 hover:text-black font-medium transition-all duration-300">Servicios</a>
                    <a href="#portfolio" className="text-gray-700 hover:text-black font-medium transition-all duration-300">Proyectos</a>
                    <a href="#why-us" className="text-gray-700 hover:text-black font-medium transition-all duration-300">Ventajas</a>
                    <a href="#tech" className="text-gray-700 hover:text-black font-medium transition-all duration-300">Tecnologías</a>
                    <a href="#about" className="text-gray-700 hover:text-black font-medium transition-all duration-300">Nosotros</a>
                    <a href="#team" className="text-gray-700 hover:text-black font-medium transition-all duration-300">Integrantes</a>
                    <a href="#faq" className="text-gray-700 hover:text-black font-medium transition-all duration-300">FAQ</a>
                    <a href="#contact" className="bg-black text-white py-2 px-5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all duration-300">Contacto</a>
                </div>

                <div className="nav:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none" 
                        aria-label="Abrir menú móvil"
                        aria-expanded={isOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú Móvil */}
            <div className={`${isOpen ? 'block' : 'hidden'} nav:hidden bg-white shadow-lg border-t border-gray-200`}>
                <a href="#services" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">Servicios</a>
                <a href="#portfolio" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">Proyectos</a>
                <a href="#why-us" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">Ventajas</a>
                <a href="#tech" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">Tecnologías</a>
                <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">Nosotros</a>
                <a href="#team" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">Integrantes</a>
                <a href="#faq" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">FAQ</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:bg-gray-100 px-6 py-3 font-medium">Contacto</a>
            </div>
        </nav>
    );
}