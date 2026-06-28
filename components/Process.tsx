import ScrollReveal from './ScrollReveal';

export default function Process() {
    return (
        <section id="process" className="py-20 bg-gray-100 overflow-hidden" role="region" aria-labelledby="process-title">
            <div className="container mx-auto px-6">
                <ScrollReveal animation="fade-up">
                    <h2 id="process-title" className="text-3xl font-bold text-center mb-12">Nuestro Proceso Simplificado</h2>
                </ScrollReveal>
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div id="process-timeline" className="hidden md:block absolute left-1/2 -ml-px w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                        
                        <ScrollReveal animation="fade-right" className="md:flex md:items-center md:justify-start mb-12">
                            <div className="md:w-1/2 md:pr-8">
                                <h3 className="text-2xl font-bold mb-2">01. Descubrimiento y Análisis</h3>
                                <p className="text-gray-700">Escuchamos sus ideas y analizamos sus requisitos. Definimos el alcance, los objetivos y la estrategia tecnológica del proyecto.</p>
                            </div>
                            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 md:text-right">
                                <span className="text-6xl font-extrabold text-gray-200 tracking-tighter" aria-hidden="true">01</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" className="md:flex md:items-center md:flex-row-reverse mb-12">
                            <div className="md:w-1/2 md:pl-8">
                                <h3 className="text-2xl font-bold mb-2">02. Diseño y Desarrollo</h3>
                                <p className="text-gray-700">Creamos prototipos y diseñamos la experiencia de usuario (UI/UX). Nuestros desarrolladores construyen el software con código limpio y eficiente.</p>
                            </div>
                            <div className="md:w-1/2 md:pr-8 mt-4 md:mt-0 md:text-left">
                                <span className="text-6xl font-extrabold text-gray-200 tracking-tighter" aria-hidden="true">02</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-right" className="md:flex md:items-center md:justify-start mb-12">
                            <div className="md:w-1/2 md:pr-8">
                                <h3 className="text-2xl font-bold mb-2">03. Pruebas y Despliegue</h3>
                                <p className="text-gray-700">Realizamos pruebas exhaustivas para asegurar la calidad y eliminar errores. Desplegamos la solución en un entorno de producción seguro.</p>
                            </div>
                            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 md:text-right">
                                <span className="text-6xl font-extrabold text-gray-200 tracking-tighter" aria-hidden="true">03</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left" className="md:flex md:items-center md:flex-row-reverse">
                            <div className="md:w-1/2 md:pl-8">
                                <h3 className="text-2xl font-bold mb-2">04. Soporte y Crecimiento</h3>
                                <p className="text-gray-700">Ofrecemos mantenimiento continuo, soporte técnico y planes de mejora para que su software evolucione con su negocio.</p>
                            </div>
                            <div className="md:w-1/2 md:pr-8 mt-4 md:mt-0 md:text-left">
                                <span className="text-6xl font-extrabold text-gray-200 tracking-tighter" aria-hidden="true">04</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
