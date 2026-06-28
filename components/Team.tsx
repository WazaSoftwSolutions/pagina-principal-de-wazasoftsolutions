import ScrollReveal from './ScrollReveal';

export default function Team() {
    const members = [
        {
            name: "Javier Carranza",
            role: "Desarrollador",
            img: "/assets/images/JavierCarranza.jpg",
            desc: "Desarrollador web especializado en desarrollo de API’s y aplicaciones multiplataforma, enfocado en soluciones funcionales, escalables y mantenibles.",
            linkedin: "https://www.linkedin.com/in/javier-carranza-b564a7395/",
            github: "https://github.com/JavierCarranza2203",
            delay: 100
        },
        {
            name: "Alejandro Colin",
            role: "Desarrollador",
            img: "/assets/images/AlejandroColin.jpg",
            desc: "Especializado en C#, Node.js, SQL Server y JavaScript, con experiencia en aplicaciones de escritorio (WPF) y sistemas web modernos.",
            linkedin: "#",
            github: "#",
            delay: 200
        },
        {
            name: "Ramses Garcia",
            role: "Desarrollador",
            img: "/assets/images/RamsesGarcia.jpg",
            desc: "Especializado en análisis de datos, IA y aplicaciones industriales, con experiencia en modelos de IA y diseño gráfico funcional.",
            linkedin: "https://www.linkedin.com/in/ramses-reyero-62934a391/",
            github: "https://github.com/ChenSZN",
            delay: 300
        }
    ];

    return (
        <section id="team" className="py-20 bg-gray-100 overflow-hidden" role="region" aria-labelledby="team-title">
            <div className="container mx-auto px-6">
                <ScrollReveal animation="fade-up">
                    <h2 id="team-title" className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
                </ScrollReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {members.map((member, i) => (
                        <ScrollReveal key={i} animation="fade-up" delay={member.delay} className="card-glow rounded-lg shadow-lg overflow-hidden group bg-white text-center">
                            <img loading="lazy" src={member.img} alt={`Foto de ${member.name}`}
                                className="w-32 h-32 rounded-full mx-auto mt-8 border-4 border-gray-200 shadow-md object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                <p className="text-gray-500 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-700 mb-6 px-4 group-hover:opacity-70 transition-opacity duration-300 line-clamp-4">
                                    {member.desc}
                                </p>
                                <div className="flex justify-center gap-5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    <a href={member.linkedin} target="_blank" className="text-gray-500 hover:text-black transition duration-300 icon-rotate">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5Zm-8 19H6v-9h5v9Zm-2.5-10.88c-.9 0-1.63-.72-1.63-1.62s.73-1.62 1.63-1.62 1.63.72 1.63 1.62-.73 1.62-1.63 1.62ZM18 19h-4.99v-4.5c0-1.28.62-2.12 1.85-2.12 1.17 0 1.64.87 1.64 2.12V19H18Z"/></svg>
                                    </a>
                                    <a href={member.github} target="_blank" className="text-gray-500 hover:text-black transition duration-300 icon-rotate">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-1.02-.01-1.84-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.73 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
