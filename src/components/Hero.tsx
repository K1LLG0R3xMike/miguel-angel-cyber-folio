
import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Code } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 code-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center space-x-4 mb-6">
              <Shield className="w-8 h-8 text-primary animate-pulse" />
              <Code className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Miguel Ángel Rodríguez Correa
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Estudiante de Ingeniería de Sistemas enfocado en Ciberseguridad
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Apasionado por la seguridad informática y el desarrollo de software. 
            Especializado en pentesting, análisis de vulnerabilidades y programación 
            con Python, C++ y Java.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Contactar
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              onClick={() => window.open('#', '_blank')}
            >
              Ver CV
            </Button>
          </div>

          <div className="animate-bounce mt-12">
            <ArrowDown className="w-6 h-6 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
