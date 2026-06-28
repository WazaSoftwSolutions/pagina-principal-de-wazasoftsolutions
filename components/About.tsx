import ScrollReveal from './ScrollReveal';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden" role="region" aria-labelledby="about-title">
            <div className="container px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div id="about-image-wrapper" className="overlay-effect rounded-lg shadow-xl">
                        <img loading="lazy"
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&q=80&w=1470&auto=format&fit=crop"
                            alt="Equipo de desarrollo de software trabajando en oficina"
                            className="rounded-lg object-cover w-full h-full" />
                    </div>

                    <ScrollReveal animation="fade-left" className="mt-8 md:mt-0">
                        <span id="about-title" className="text-black font-semibold">SOBRE NOSOTROS</span>
                        <h2 className="text-3xl font-bold my-4">Somos su socio tecnológico estratégico</h2>
                        <p className="text-gray-700 text-lg mb-4 text-balance">
                            En WazaDevs, no solo escribimos código. Construimos relaciones. Entendemos que cada
                            cliente es único, y por eso nos dedicamos a crear <strong>software a la medida</strong> que
                            resuelva problemas reales y genere valor tangible.
                        </p>
                        <p className="text-gray-700 text-lg text-balance">
                            Nuestro equipo de expertos utiliza las últimas tecnologías para entregar productos robustos,
                            escalables y fáciles de usar. Su éxito es nuestro objetivo.
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
