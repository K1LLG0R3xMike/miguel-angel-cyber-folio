import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Code, Linkedin, MessageCircle, FileText } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/miguel-angel-rodr%C3%ADguez-04171827b";
const WHATSAPP_URL =
  "https://wa.me/573238092856?text=" +
  encodeURIComponent("Hola Miguel, vi tu portafolio y me gustaría hablar contigo.");

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 code-pattern opacity-20"></div>

      <div className="container mx-auto px-4 pt-24 pb-10 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-center gap-6 md:gap-12 text-center md:text-left">
          {/* Info principal: en celular los botones van antes del párrafo para que se vean sin hacer scroll */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-4">
              <div className="hidden md:flex justify-start space-x-4 mb-6">
                <Shield className="w-8 h-8 text-white animate-pulse" />
                <Code className="w-8 h-8 text-white animate-pulse" />
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-1 md:pb-3">
                Miguel Ángel Rodríguez C.
              </h1>

              <h2 className="text-lg md:text-2xl lg:text-3xl text-white font-medium md:py-2 md:pt-1">
                Pentester Junior (eJPT) · Monitoreo y desarrollo
              </h2>
            </div>

            <p className="order-last md:order-none text-base md:text-xl text-white/80 max-w-3xl mx-auto md:mx-0 leading-relaxed">
              Estudiante de Ingeniería de Sistemas con tesis sustentada y certificación eJPT.
              Hice mi práctica en el equipo de Observabilidad de CELSIA, monitoreando servicios
              con Zabbix y Grafana y automatizando con Python. Me muevo entre la seguridad
              ofensiva y el desarrollo: construyo herramientas y evalúo cómo se rompen.
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto sm:flex sm:flex-row sm:flex-wrap sm:max-w-none sm:w-auto sm:gap-3 sm:justify-center md:justify-start md:mx-0">
              <Button
                asChild
                size="lg"
                className="col-span-2 bg-red-600 hover:bg-red-700 text-white px-8 sm:px-4 py-3 text-lg sm:text-base border border-red-500"
              >
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  Conectar en LinkedIn
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-500 text-white hover:bg-green-600 hover:text-white px-4 py-3 text-base"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-red-400 text-white hover:bg-red-600 hover:text-white px-4 py-3 text-base"
              >
                <a href="/cv-miguel-rodriguez.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Ver CV
                </a>
              </Button>
            </div>
          </div>

          {/* Foto personal */}
          <div className="flex-shrink-0 md:mb-0 group transition-all duration-300 flex justify-center items-center">
            <div className="relative w-36 h-36 md:w-80 md:h-80 flex items-center justify-center">
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
                src="/fotoPortafolio.jpeg"
                alt="Retrato de Miguel Ángel Rodríguez Correa"
                width={320}
                height={320}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-36 h-36 md:w-80 md:h-80 rounded-full object-cover shadow-xl relative z-10 group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block animate-bounce mt-12">
          <ArrowDown className="w-6 h-6 text-white mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
