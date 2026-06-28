import Link from 'next/link';

export default function ProjectNavbar() {
    return (
        <nav className="bg-white/80 border-b border-gray-200/50 sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3">
                    <img src="/assets/images/letters.png" alt="Logo" className="w-[20vw] min-w-50" />
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-black font-medium">Inicio</Link>
                    <Link href="/#portfolio" className="text-gray-700 hover:text-black font-medium">Proyectos</Link>
                    <Link href="/#contact" className="bg-black text-white py-2 px-5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all duration-300">
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}
