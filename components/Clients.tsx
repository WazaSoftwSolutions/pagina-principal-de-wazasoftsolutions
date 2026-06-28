import ScrollReveal from './ScrollReveal';

export default function Clients() {
    const categories = [
        "CIRCUITOS", "API's", "ANDROID", "IOS", "WINDOWS", "DB's",
        "IA", "FRONTEND", "BACKEND", "DOMINIOS", "HOSTING", "SOPORTE"
    ];

    return (
        <section id="clients" className="py-16 bg-gray-50" role="region" aria-labelledby="clients-title">
            <div className="container mx-auto px-6">
                <ScrollReveal animation="fade-up">
                    <h3 id="clients-title" className="text-center text-xl font-semibold text-gray-600 mb-10">
                        Cualquier tipo de requerimiento
                    </h3>
                </ScrollReveal>

                <div className="logo-marquee">
                    <div className="logo-marquee-track">
                        {/* Primera copia */}
                        {categories.map((cat, i) => (
                            <div key={`cat1-${i}`}>
                                <svg viewBox="0 0 128 35" xmlns="http://www.w3.org/2000/svg">
                                    <text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">
                                        {cat}
                                    </text>
                                </svg>
                            </div>
                        ))}
                        {/* Segunda copia para el efecto infinito */}
                        {categories.map((cat, i) => (
                            <div key={`cat2-${i}`}>
                                <svg viewBox="0 0 128 35" xmlns="http://www.w3.org/2000/svg">
                                    <text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">
                                        {cat}
                                    </text>
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
