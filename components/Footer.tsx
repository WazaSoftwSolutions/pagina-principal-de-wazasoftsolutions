export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200" role="contentinfo">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">

                    <div className="md:col-span-2">
                        <a href="#" className="flex items-center gap-3 mb-4" aria-label="Página de inicio de WazaDevs">
                            <img src="/assets/images/WSLGV01BT.png" alt="Logo WazaDevs" className="h-8 w-8" />
                            <span className="font-extrabold text-2xl text-black">WazaDevs</span>
                        </a>
                        <p className="text-gray-600 max-w-md">Convertimos tus ideas en soluciones de software robustas,
                            escalables y diseñadas exclusivamente para tus necesidades.</p>
                        <p className="text-gray-500 text-sm mt-8">&copy; {new Date().getFullYear()} WazaDevs. Todos los derechos reservados.</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Servicios</a></li>
                            <li><a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Proyectos</a></li>
                            <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">Nosotros</a></li>
                            <li><a href="#team" className="text-gray-600 hover:text-black transition-colors">Integrantes</a></li>
                            <li><a href="#faq" className="text-gray-600 hover:text-black transition-colors">FAQ</a></li>
                        </ul>

                        <h4 className="font-bold text-lg mb-4 mt-8">Contacto</h4>
                        <ul className="space-y-3">
                            <li><a href="mailto:wazasoftsolutions@gmail.com" className="text-gray-600 hover:text-black transition-colors">wazasoftsolutions@gmail.com</a></li>
                            <li>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/WazaDevs" className="magnetic text-gray-500 hover:text-black transition-transform duration-200 ease-out icon-rotate" aria-label="GitHub de WazaDevs">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.84-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.73 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                                    </a>
                                    <a href="#" className="magnetic text-gray-500 hover:text-black transition-transform duration-200 ease-out icon-rotate" aria-label="LinkedIn de WazaDevs">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm-8 19H6v-9h5v9Zm-2.5-10.88c-.9 0-1.63-.72-1.63-1.62s.73-1.62 1.63-1.62 1.63.72 1.63 1.62-.73 1.62-1.63 1.62ZM18 19h-4.99v-4.5c0-1.28.62-2.12 1.85-2.12 1.17 0 1.64.87 1.64 2.12V19H18Z"/></svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Suscríbete</h4>
                        <p className="text-gray-600 mb-4 text-sm">Recibe nuestros insights y noticias de tecnología.</p>
                        <form className="flex">
                            <input type="email" placeholder="tu@email.com" className="w-full p-3 rounded-l-lg border-gray-300 border focus:outline-none focus:ring-1 focus:ring-black text-sm text-black" required />
                            <button type="submit" className="bg-black text-white p-3 rounded-r-lg font-bold hover:bg-gray-800 transition-colors">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    );
}
