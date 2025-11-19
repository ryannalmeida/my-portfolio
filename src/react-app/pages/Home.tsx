import Hero from '@/react-app/components/Hero';
import Skills from '@/react-app/components/Skills';
import Projects from '@/react-app/components/Projects';
import About from '@/react-app/components/About';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
