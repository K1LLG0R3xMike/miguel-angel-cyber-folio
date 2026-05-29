
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Terminal, Search, Monitor } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Ciberseguridad Ofensiva",
      description: "Conocimiento en pentesting y análisis de vulnerabilidades"
    },
    {
      icon: Terminal,
      title: "Kali Linux",
      description: "Experiencia con herramientas de pentesting avanzadas"
    },
    {
      icon: Search,
      title: "Herramientas Especializadas",
      description: "Burp Suite, Gobuster, Nikto y más"
    },
    {
      icon: Monitor,
      title: "Monitoreo",
      description: "Implementación de soluciones con Wazuh"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Sobre <span className="text-red-400">Mí</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy un estudiante de Ingeniería de Sistemas en constante formación, 
                con una pasión especial por la <span className="text-red-400 font-semibold">ciberseguridad ofensiva</span>. 
                Mi enfoque principal está en el pentesting, donde utilizo herramientas 
                especializadas como <span className="text-red-400">Kali Linux</span> como 
                plataforma principal.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                He desarrollado experiencia práctica con herramientas como 
                <span className="text-red-400"> Burp Suite</span>, 
                <span className="text-red-400"> Gobuster</span> y 
                <span className="text-red-400"> Nikto</span> para el análisis de 
                vulnerabilidades. Además, he trabajado en proyectos de monitoreo 
                y detección utilizando <span className="text-red-400">Wazuh</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Mi objetivo es contribuir al fortalecimiento de la seguridad
                informática a través de la identificación proactiva de vulnerabilidades
                y el desarrollo de soluciones innovadoras.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                También tengo experiencia en monitoreo y observabilidad de sistemas,
                utilizando plataformas como <span className="text-red-400">Zabbix</span>,
                <span className="text-red-400"> Matomo</span> y
                <span className="text-red-400"> Grafana</span> para el seguimiento
                del rendimiento de infraestructura, análisis de tráfico web y
                visualización de métricas en tiempo real.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <CardContent className="p-6 text-center space-y-3">
                    <item.icon className="w-8 h-8 text-red-400 mx-auto" />
                    <h3 className="font-semibold text-sm text-white">{item.title}</h3>
                    <p className="text-xs text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
