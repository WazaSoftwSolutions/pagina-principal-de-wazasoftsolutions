export default function Header() {
    return (
        <header className="relative min-h-screen bg-gray-200 overflow-hidden flex items-center" role="banner">
            <div className="parallax-bg"></div>
            <div className="hero-blob"></div>
            <div className="particles">
                <div className="particle" style={{ width: '4px', height: '4px', left: '10%', animationDelay: '0s' }}></div>
                <div className="particle" style={{ width: '6px', height: '6px', left: '20%', animationDelay: '2s' }}></div>
                <div className="particle" style={{ width: '4px', height: '4px', left: '30%', animationDelay: '4s' }}></div>
                <div className="particle" style={{ width: '8px', height: '8px', left: '40%', animationDelay: '1s' }}></div>
                <div className="particle" style={{ width: '5px', height: '5px', left: '50%', animationDelay: '3s' }}></div>
                <div className="particle" style={{ width: '4px', height: '4px', left: '60%', animationDelay: '5s' }}></div>
                <div className="particle" style={{ width: '7px', height: '7px', left: '70%', animationDelay: '2.5s' }}></div>
                <div className="particle" style={{ width: '5px', height: '5px', left: '80%', animationDelay: '1.5s' }}></div>
                <div className="particle" style={{ width: '6px', height: '6px', left: '90%', animationDelay: '3.5s' }}></div>
            </div>

            <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center relative z-10">
                <div className="glass-logo rounded-3xl p-4 inline-block mb-8 reveal-text" style={{ animationDelay: '0.1s'}}>
                    <img src="/assets/images/WSLGV01BT.png" alt="Logo principal de Waza Devs" className="w-64" />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4 gradient-text reveal-text"
                    style={{ animationDelay: '0.3s' }}>
                    Software profesional, hecho a tu medida.
                </h1>
                <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-2xl reveal-text" style={{ animationDelay: '0.5s'}}>
                    En WazaDevs convertimos tus ideas en soluciones de software robustas, escalables y diseñadas
                    exclusivamente para tus necesidades.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-text"
                    style={{ animationDelay: '0.7s' }}>
                    <a href="#contact"
                        className="magnetic btn-shine bg-black text-white py-3 sm:py-4 px-6 sm:px-10 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                        Inicia tu Proyecto
                    </a>
                    <a href="#services"
                        className="magnetic btn-shine bg-white text-black border-2 border-black py-3 sm:py-4 px-6 sm:px-10 rounded-xl font-bold text-base sm:text-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110">
                        Ver Servicios
                    </a>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </header>
    );
}