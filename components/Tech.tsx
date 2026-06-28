import ScrollReveal from './ScrollReveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default function Tech() {
    return (
        <section id="tech" className="py-20 bg-white relative overflow-hidden" role="region" aria-labelledby="tech-title">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gray-300 opacity-20 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300 opacity-20 rounded-full blur-3xl" aria-hidden="true"></div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal animation="fade-up">
                    <h2 id="tech-title" className="text-3xl font-bold text-center mb-16">Tecnologías Clave</h2>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full! mx-auto">
                    
                    {/* Lenguajes */}
                    <ScrollReveal animation="fade-up" delay={50} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-code"></i> Lenguajes
                        </h3>
                        <div className="tech-grid">
                            {[
                                { name: "JavaScript", icon: "javascript/javascript-original.svg" },
                                { name: "Python", icon: "python/python-original.svg" },
                                { name: "C#", icon: "csharp/csharp-original.svg" },
                                { name: "PHP", icon: "php/php-original.svg" },
                                { name: "SQL", icon: "azuresqldatabase/azuresqldatabase-original.svg" },
                                { name: "HTML/CSS", icon: "html5/html5-original.svg" },
                                { name: "Solidity", icon: "solidity/solidity-original.svg" },
                                { name: "Swift", icon: "swift/swift-original.svg" },
                                { name: "Kotlin", icon: "kotlin/kotlin-original.svg" },
                            ].map((tech, i) => (
                                <div key={i} className="tech-grid-item group">
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}`} alt={tech.name} className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                    <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Frameworks */}
                    <ScrollReveal animation="fade-up" delay={100} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-layer-group"></i> Frameworks
                        </h3>
                        <div className="tech-grid">
                            {[
                                { name: "React", icon: "react/react-original.svg" },
                                { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
                                { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg" },
                                { name: "FastAPI", icon: "fastapi/fastapi-original.svg" },
                                { name: ".NET", icon: "dotnetcore/dotnetcore-original.svg" },
                                { name: "Express", icon: "express/express-original.svg" },
                                { name: "NextJS", icon: "nextjs/nextjs-original.svg" },
                            ].map((tech, i) => (
                                <div key={i} className="tech-grid-item group">
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}`} alt={tech.name} className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                    <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Bases de Datos */}
                    <ScrollReveal animation="fade-up" delay={150} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-database"></i> Bases de Datos
                        </h3>
                        <div className="tech-grid">
                            {[
                                { name: "SQL Server", icon: "microsoftsqlserver/microsoftsqlserver-original.svg" },
                                { name: "Postgres", icon: "postgresql/postgresql-original.svg" },
                                { name: "MySQL", icon: "mysql/mysql-original.svg" },
                                { name: "Firebase", icon: "firebase/firebase-original.svg" },
                                { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
                                { name: "Prisma", icon: "prisma/prisma-original.svg" },
                                { name: "SQLite", icon: "sqlite/sqlite-original.svg" },
                                { name: "Redis", icon: "redis/redis-original.svg" },
                            ].map((tech, i) => (
                                <div key={i} className="tech-grid-item group">
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}`} alt={tech.name} className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                    <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Infraestructura */}
                    <ScrollReveal animation="fade-up" delay={150} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-cloud"></i> Infraestructura
                        </h3>
                        <div className="tech-grid">
                            {[
                                { name: "Azure", icon: "azure/azure-original.svg" },
                                { name: "Cloudflare", icon: "cloudflare/cloudflare-original.svg" },
                                { name: "Docker", icon: "docker/docker-original.svg" },
                                { name: "Netlify", icon: "netlify/netlify-original.svg" },
                                { name: "Vercel", icon: "vercel/vercel-original.svg" },
                                { name: "Railway", icon: "railway/railway-original.svg", style: { filter: 'brightness(0)'}}
                            ].map((tech, i) => (
                                <div key={i} className="tech-grid-item group">
                                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}`} alt={tech.name} className="h-10 w-10 group-hover:scale-110 transition-transform" style={tech.style} />
                                    <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">{tech.name}</span>
                                </div>
                            ))}
                            <div className="flex flex-col items-center group">
                                <img src="/assets/icons/huggingface.png" alt="hugging-face" className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">Hugging Face</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Integraciones */}
                    <ScrollReveal animation="fade-up" delay={200} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-link"></i> Integraciones
                        </h3>
                        <div className="tech-grid">
                            {[
                                { name: 'Spotify', icon: 'spotify.png', style: {} },
                                { name: 'Web Store', icon: 'chromewebstore.png', style: {} },
                                { name: 'Maps API', icon: 'googlemaps.png', style: {} },
                                { name: 'Ethereum', icon: 'ethereum.png', style: {} },
                                { name: 'Stripe', icon: 'stripe.png', style: {} },
                            ].map((tech, i) => (
                                <div key={i} className="tech-grid-item group">
                                    <img src={`/assets/icons/${tech.icon}`} alt={tech.name} className="h-10 w-10 group-hover:scale-110 transition-transform" style={tech.style} />
                                    <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">{tech.name}</span>
                                </div>
                            ))}

                            <div className="tech-grid-item group">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" alt="OAuth" className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter">OAuth 2.0</span>
                            </div>
                            <div className="tech-grid-item group">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter">Jira API</span>
                            </div>
                            <div className="tech-grid-item group">
                                <img src="/assets/icons/metamask.png" alt="OAuth" className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter">Meta Mask</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Otros */}
                    <ScrollReveal animation="fade-up" delay={250} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                            <i className="fa-solid fa-ellipsis"></i> Otros
                        </h3>
                        <div className="tech-grid">
                            <div className="tech-grid-item group">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" alt="IoT" className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter">Arduino</span>
                            </div>
                            <div className="tech-grid-item group">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="h-10 w-10 group-hover:scale-110 transition-transform" />
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter">Figma</span>
                            </div>
                            <div className="tech-grid-item group">
                                <div className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                    <FontAwesomeIcon icon={ faBrain} />
                                </div>
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">AI Training</span>
                            </div>
                            <div className="tech-grid-item group">
                                <div className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                    <FontAwesomeIcon icon={ faMicrochip} />
                                </div>
                                <span className="text-md mt-2 font-bold text-gray-500 tracking-tighter text-center">ESP32</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
