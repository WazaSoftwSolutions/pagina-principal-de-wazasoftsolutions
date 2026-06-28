'use client';

import { useEffect } from 'react';

import ScrollReveal from './ScrollReveal';

export default function Contact() {
    useEffect(() => {
        const contactForm = document.getElementById('contact-form') as HTMLFormElement;
        const contactMessage = document.getElementById('contact-message');

        if (contactForm && (window as any).emailjs) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                
                // Mostrar estado de carga
                if (contactMessage) {
                    contactMessage.innerText = "Enviando...";
                    contactMessage.className = "mb-6 p-4 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-500/50 block";
                }

                (window as any).emailjs.sendForm('service_3orgoog', 'template_95wsviw', contactForm)
                    .then(() => {
                        if (contactMessage) {
                            contactMessage.innerText = "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.";
                            contactMessage.className = "mb-6 p-4 rounded-xl bg-green-500/20 text-green-200 border border-green-500/50 block";
                        }
                        contactForm.reset();
                    }, (error: any) => {
                        console.error('FAILED...', error);
                        if (contactMessage) {
                            contactMessage.innerText = "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.";
                            contactMessage.className = "mb-6 p-4 rounded-xl bg-red-500/20 text-red-200 border border-red-500/50 block";
                        }
                    });
            });
        }
    }, []);

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden" role="region" aria-labelledby="contact-title">
            <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

            <ScrollReveal animation="fade-up" className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-12">
                        <h2 id="contact-title" className="text-3xl md:text-5xl font-bold mb-6 text-white text-balance">
                            ¿Listo para construir algo increíble?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-xl mx-auto">
                            Completa el formulario y hablemos de su proyecto. Consulta gratuita y sin compromiso.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div id="contact-message" className="mb-6 hidden"></div>
                        <form id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative z-0">
                                <input type="text" name="user_name" id="name" required
                                    className="peer block w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none placeholder-transparent"
                                    placeholder="Nombre" />
                                <label htmlFor="name" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-left left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                    Nombre
                                </label>
                            </div>

                            <div className="relative z-0">
                                <input type="email" name="user_email" id="email" required
                                    className="peer block w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none placeholder-transparent"
                                    placeholder="E-mail" />
                                <label htmlFor="email" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-left left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                    E-mail
                                </label>
                            </div>

                            <div className="md:col-span-2 relative z-0">
                                <input type="text" name="subject" id="title"
                                    className="peer block w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none placeholder-transparent"
                                    placeholder="Asunto" />
                                <label htmlFor="title" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-left left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                    Asunto
                                </label>
                            </div>

                            <div className="md:col-span-2 relative z-0">
                                <textarea name="message" id="message" rows={6} required
                                    className="peer block w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none placeholder-transparent"
                                    placeholder="Tu Mensaje"></textarea>
                                <label htmlFor="message" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-left left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                    Tu Mensaje
                                </label>
                            </div>

                            <div className="md:col-span-2 text-center">
                                <button type="submit"
                                    className="btn-shine bg-white text-black py-4 px-10 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
