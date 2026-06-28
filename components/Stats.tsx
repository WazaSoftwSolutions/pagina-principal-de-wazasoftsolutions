import ScrollReveal from './ScrollReveal';

export default function Stats() {
    return (
        <section id="stats" className="py-20 bg-white" role="region" aria-label="Estadísticas de la compañía">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-12">
                    <div className="grid md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">

                        <ScrollReveal animation="fade-up" delay={100} className="pt-8 md:pt-0">
                            <span className="block text-6xl font-extrabold text-black counter tracking-tighter"
                                data-target="15">15</span>
                            <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mt-4">Proyectos Completados</span>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={200} className="pt-8 md:pt-0">
                            <span className="block text-6xl font-extrabold text-black counter tracking-tighter"
                                data-target="4">4</span>
                            <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mt-4">Clientes Satisfechos</span>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={300} className="pt-8 md:pt-0">
                            <span className="block text-6xl font-extrabold text-black counter tracking-tighter"
                                data-target="12000">12000</span>
                            <span className="block text-sm font-bold text-gray-500 uppercase tracking-widest mt-4">Líneas de Código</span>
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </section>
    );
}
