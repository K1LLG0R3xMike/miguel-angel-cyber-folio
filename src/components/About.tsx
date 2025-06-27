
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Terminal, Search, Monitor } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Ciberseguridad Ofensiva",
      description: "Especialización en pentesting y análisis de vulnerabilidades"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sobre <span className="text-primary">Mí</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy un estudiante de Ingeniería de Sistemas en constante formación, 
                con una pasión especial por la <span className="text-primary font-semibold">ciberseguridad ofensiva</span>. 
                Mi enfoque principal está en el pentesting, donde utilizo herramientas 
                especializadas como <span className="text-primary">Kali Linux</span> como 
                plataforma principal.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                He desarrollado experiencia práctica con herramientas como 
                <span className="text-primary"> Burp Suite</span>, 
                <span className="text-primary"> Gobuster</span> y 
                <span className="text-primary"> Nikto</span> para el análisis de 
                vulnerabilidades. Además, he trabajado en proyectos de monitoreo 
                y detección utilizando <span className="text-primary">Wazuh</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi objetivo es contribuir al fortalecimiento de la seguridad 
                informática a través de la identificación proactiva de vulnerabilidades 
                y el desarrollo de soluciones innovadoras.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
                  <CardContent className="p-6 text-center space-y-3">
                    <item.icon className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
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
