
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground" style={{
      background: 'linear-gradient(135deg, rgb(12, 7, 7) 0%, rgb(20, 10, 10) 25%, rgb(25, 12, 12) 50%, rgb(20, 10, 10) 75%, rgb(12, 7, 7) 100%)'
    }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-red-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="section-gradient">
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
