import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
    const testimonials = [
        {
            initials: "GF",
            company: "Gestión de Flotilla",
            sector: "Logística",
            quote: "La implementación del sistema redujo nuestros tiempos de entrega en un 25% y nos dio visibilidad total de la flota. Una herramienta indispensable.",
            role: "Director de Operaciones",
            business: "Empresa de Logística y Transporte",
            color: "bg-black"
        },
        {
            initials: "DG",
            company: "Digirack",
            sector: "Salud / Lab",
            quote: "Gracias a Digirack, eliminamos los errores humanos en el seguimiento de muestras. La integración con hardware IoT fue impecable.",
            role: "Directora de Laboratorio",
            business: "Laboratorio Clínico Especializado",
            color: "bg-blue-900"
        },
        {
            initials: "AA",
            company: "App de Analíticas",
            sector: "Business Intelligence",
            quote: "Transformaron nuestros datos crudos en un tablero de control visual impresionante. Ahora tomamos decisiones estratégicas basadas en métricas reales.",
            role: "Gerente de Proyectos",
            business: "Empresa de Transporte",
            color: "bg-purple-900"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden" role="region" aria-labelledby="testimonials-title">
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none"></div>

            <ScrollReveal animation="fade-up" className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Lo que dicen nuestros clientes</span>
                    <h2 id="testimonials-title" className="text-4xl md:text-5xl font-extrabold mt-2 text-black">Impacto Real en Negocios Reales</h2>
                </div>

                <div className="swiper testimonial-slider max-w-5xl mx-auto pb-12">
                    <div className="swiper-wrapper">
                        {testimonials.map((t, i) => (
                            <div key={i} className="swiper-slide px-4 h-auto">
                                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center h-full hover:shadow-lg transition-shadow duration-300">
                                    <div className="md:w-1/3 flex flex-col items-center">
                                        <div className={`w-24 h-24 rounded-full ${t.color} text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg`}>
                                            {t.initials}
                                        </div>
                                        <h4 className="font-bold text-xl text-center">{t.company}</h4>
                                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-1 text-center">{t.sector}</p>
                                    </div>
                                    <div className="md:w-2/3 border-l-0 md:border-l border-gray-200 md:pl-8 text-center md:text-left">
                                        <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed italic">
                                            "{t.quote}"
                                        </blockquote>
                                        <div className="mt-6">
                                            <p className="font-bold text-black text-lg">{t.role}</p>
                                            <p className="text-gray-600">{t.business}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </ScrollReveal>
        </section>
    );
}
