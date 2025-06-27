
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <Header />
      <Hero />
      <div className="section-gradient">
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
