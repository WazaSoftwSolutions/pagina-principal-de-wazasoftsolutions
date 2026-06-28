import ScrollReveal from './ScrollReveal';

export default function WhyUs() {
    const advantages = [
        {
            title: "Totalmente a Medida",
            desc: "No usamos plantillas. Cada línea de código está diseñada para resolver sus desafíos específicos.",
            delay: 100,
            icon: (
                <svg className="w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5M3.75 3v16.5M16.5 3c.906 0 1.638.45 2.12.984M16.5 3v4.875c0 .621-.504 1.125-1.125 1.125H13.5M16.5 3v1.875m0 1.875c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3.75c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125z" />
                </svg>
            )
        },
        {
            title: "Calidad Garantizada",
            desc: "Implementamos pruebas rigurosas y estándares de código para entregar un producto final robusto.",
            delay: 200,
            icon: (
                <svg className="w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
            )
        },
        {
            title: "Soporte Continuo",
            desc: "Nuestra relación no termina con la entrega. Ofrecemos soporte y mantenimiento continuo.",
            delay: 300,
            icon: (
                <svg className="w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Diseño y UX Moderno",
            desc: "Creemos que el software potente también debe ser intuitivo y fácil de usar.",
            delay: 400,
            icon: (
                <svg className="w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            )
        }
    ];

    return (
        <section id="why-us" className="py-20 bg-black dot-pattern relative text-white overflow-hidden" role="region" aria-labelledby="why-us-title">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-black to-transparent opacity-80"></div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal animation="fade-up">
                    <h2 id="why-us-title" className="text-3xl font-bold text-center mb-12">El Valor de WazaDevs</h2>
                </ScrollReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {advantages.map((adv, i) => (
                        <ScrollReveal key={i} animation="fade-up" delay={adv.delay} className="relative">
                            <div className="absolute -top-6 -left-6 icon-rotate">
                                <div className="bg-white p-3 rounded-xl">
                                    {adv.icon}
                                </div>
                            </div>
                            <div className="card-glow glass-advantage p-8 rounded-2xl ml-4 mt-4">
                                <h3 className="text-xl font-bold mb-3 mt-6">{adv.title}</h3>
                                <p className="text-gray-300">{adv.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
