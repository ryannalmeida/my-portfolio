import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import Skills from '@/react-app/components/Skills';
import Projects from '@/react-app/components/Projects';
import About from '@/react-app/components/About';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020204] overflow-hidden">
      <Navbar />
      {/* Background Layer */}
      <div className="glow-mesh" />
      <div className="noise-field" />
      
      {/* Dynamic Beams System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="beam left-[5%]" style={{ animationDelay: '0s', animationDuration: '10s' }} />
        <div className="beam left-[15%]" style={{ animationDelay: '3s', animationDuration: '12s' }} />
        <div className="beam left-[25%]" style={{ animationDelay: '1s', animationDuration: '8s' }} />
        <div className="beam left-[45%]" style={{ animationDelay: '5s', animationDuration: '15s' }} />
        <div className="beam left-[65%]" style={{ animationDelay: '2s', animationDuration: '9s' }} />
        <div className="beam left-[85%]" style={{ animationDelay: '4s', animationDuration: '13s' }} />
        <div className="beam left-[95%]" style={{ animationDelay: '6s', animationDuration: '11s' }} />
      </div>

      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}


