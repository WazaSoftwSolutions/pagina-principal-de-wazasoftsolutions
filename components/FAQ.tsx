import ScrollReveal from './ScrollReveal';

export default function FAQ() {
    const faqs = [
        {
            q: "¿Cuánto cuesta un proyecto de software a medida?",
            a: "Cada proyecto es único. El costo depende del alcance, la complejidad de las funcionalidades y el tiempo de desarrollo. Contáctanos para una cotización gratuita."
        },
        {
            q: "¿Cuánto tiempo tarda el desarrollo?",
            a: "Un proyecto simple puede tomar de 4 a 6 semanas, mientras que soluciones más complejas pueden requerir varios meses. Seguimos un proceso ágil."
        },
        {
            q: "¿Ofrecen soporte después de la entrega?",
            a: "¡Sí! Ofrecemos planes de soporte y mantenimiento continuo para asegurar que tu software siga funcionando perfectamente y escale con tu negocio."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-gray-100" role="region" aria-labelledby="faq-title">
            <div className="container mx-auto px-6 max-w-3xl">
                <ScrollReveal animation="fade-up">
                    <h2 id="faq-title" className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100} className="space-y-6">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-colors duration-200 hover:bg-gray-50">
                            <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                                {faq.q}
                                <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-gray-700 mt-4 text-balance italic">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
