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
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-center gap-12 text-center md:text-left">
          {/* Info principal */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                <Shield className="w-8 h-8 text-white animate-pulse" />
                <Code className="w-8 h-8 text-white animate-pulse" />
              </div>
              
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-3">
                Miguel Rodríguez 
                </h1>
              
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-medium py-2 pt-1">
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
          <div className="flex-shrink-0 mb-10 md:mb-0 group transition-all duration-300 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Media luna animada */}
              <span
                className="absolute inset-0 z-20 pointer-events-none"
                aria-hidden="true"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 320 320"
                  className="w-full h-full"
                >
                  <path
                    d="M160 20
                      a140 140 0 1 1 0 280
                      a120 120 0 1 0 0-280"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="10"
                    className="origin-center transition-transform duration-500 group-hover:rotate-45"
                    style={{ filter: "drop-shadow(0 0 16px #ef4444aa)" }}
                  />
                </svg>
              </span>
              <img
                src="/imagenIA.png"
                alt="Miguel Ángel Rodríguez Correa"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl relative z-10 group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-300"
              />
            </div>
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
