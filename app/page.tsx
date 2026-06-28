import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Clients from '../components/Clients';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Stats from '../components/Stats';
import Process from '../components/Process';
import Tech from '../components/Tech';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Effects from '../components/Effects';

export default function Home() {
    return (
        <>
            <Effects />
            <Navbar />
            <main>
                <Header />
                <Clients />
                <Services />
                <WhyUs />
                <Stats />
                <Process />
                <Tech />
                <Portfolio />
                <About />
                <Team />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />

            {/* Botón Volver Arriba */}
            <a href="#" id="back-to-top"
                className="magnetic fixed bottom-10 right-10 p-4 bg-black text-white rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-gray-800 z-50 transform hover:scale-110"
                aria-label="Volver arriba">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </a>
        </>
    );
}
