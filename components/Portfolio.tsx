import { projectsData } from "@/data/projects";
import ScrollReveal from './ScrollReveal';


export default function Portfolio() {
    const projects = Object.values(projectsData).map((proj, i) => ({
        id: proj.id,
        title: proj.title,
        desc: proj.description.length > 120 ? proj.description.substring(0, 117) + "..." : proj.description,
        image: Array.isArray(proj.images) ? proj.images[0] : proj.images,
        tags: [proj.category, ...proj.integrations.slice(0, 1)],
        delay: (i + 1) * 100
    }));

    return (
        <section id="portfolio" className="py-20 bg-gray-100" role="region" aria-labelledby="portfolio-title">
            <div className="container mx-auto px-6">
                <ScrollReveal animation="fade-up">
                    <h2 id="portfolio-title" className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
                </ScrollReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((proj, i) => (
                        <ScrollReveal key={proj.id} animation="fade-up" delay={proj.delay} className="h-full">
                            <a href={`/projects/${proj.id}`} className="card-glow rounded-lg shadow-lg overflow-hidden group bg-white block h-full">
                                <div className="relative overlay-effect">
                                    <img loading="lazy" src={proj.image} alt={`Imagen del Proyecto: ${proj.title}`}
                                        className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-lg font-bold">Ver Detalles</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors">{proj.title}</h3>
                                    <p className="text-gray-600 mb-5 leading-relaxed">{proj.desc}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {proj.tags.map((tag, j) => (
                                            <span key={j} className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                                        ))}
                                        <span className="text-xs font-bold px-3 py-1 bg-black text-white rounded-full">y más</span>
                                    </div>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
