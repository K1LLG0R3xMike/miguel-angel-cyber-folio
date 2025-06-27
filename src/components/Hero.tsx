import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Code, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 code-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
          {/* Info principal */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                <Shield className="w-8 h-8 text-white animate-pulse" />
                <Code className="w-8 h-8 text-white animate-pulse" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Miguel Ángel Rodríguez Correa
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-medium">
                Estudiante de Ingeniería de Sistemas enfocado en Ciberseguridad
              </h2>
            </div>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto md:mx-0 leading-relaxed">
              Apasionado por la seguridad informática y el desarrollo de software. 
              Especializado en pentesting, análisis de vulnerabilidades y programación 
              con Python, C++ y Java.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg border border-red-500"
              >
                Contactar
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-red-400 text-white hover:bg-red-600 hover:text-white px-8 py-3 text-lg"
                onClick={() => window.open('#', '_blank')}
              >
                Ver CV
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-blue-500 text-white hover:bg-blue-600 hover:text-white px-8 py-3 text-lg flex items-center gap-2"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Foto personal */}
          <div className="flex-shrink-0 mt-10 md:mt-0">
            <img
              src="/yo.jpg" // Cambia por la ruta real de tu foto en public/
              alt="Miguel Ángel Rodríguez Correa"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </div>

        <div className="animate-bounce mt-12">
          <ArrowDown className="w-6 h-6 text-white mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
