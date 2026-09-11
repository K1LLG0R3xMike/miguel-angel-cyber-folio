
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Terminal, Code, Monitor } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desarrollo de Software",
      description: "React, Angular, Ionic y Node.js · web y móvil"
    },
    {
      icon: Shield,
      title: "Pentester Junior (eJPT)",
      description: "Certificado en pentesting web y análisis de vulnerabilidades"
    },
    {
      icon: Monitor,
      title: "Experiencia en Celsia",
      description: "Práctica de 6 meses: automatización e IA para monitoreo con Zabbix"
    },
    {
      icon: Terminal,
      title: "Kali Linux",
      description: "Burp Suite, Gobuster, Nikto y más"
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
                Estoy cursando el último semestre de Ingeniería de Sistemas y llevo
                varios años programando en serio. Mi trabajo se mueve entre dos frentes
                que me interesan por igual: el <span className="text-red-400 font-semibold">desarrollo de software</span>
                {" "}&mdash; aplicaciones web y móviles con React, Angular, Ionic y Node.js &mdash;
                {" "}y la <span className="text-red-400 font-semibold">ciberseguridad ofensiva</span>,
                donde me formé y certifiqué como
                {" "}<span className="text-red-400">eLearnSecurity Junior Penetration Tester (eJPT)</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Durante seis meses hice mi práctica profesional en <span className="text-red-400">Celsia</span>,
                en el equipo de monitoreo de activos: desarrollé un agente de
                {" "}<span className="text-red-400">IA para Zabbix</span> que automatiza el
                análisis del monitoreo, construí una plataforma de automatización de
                {" "}<span className="text-red-400">pentesting potenciada con IA</span> (de
                escaneo a ataque) y mapeé la infraestructura crítica de la compañía en Zabbix.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                En pentesting uso <span className="text-red-400">Kali Linux</span> como
                plataforma principal y herramientas como <span className="text-red-400">Burp Suite</span>,
                {" "}<span className="text-red-400">Gobuster</span> y
                {" "}<span className="text-red-400">Nikto</span> para el análisis de
                vulnerabilidades en aplicaciones web. Mi objetivo es aportar a equipos
                donde poder escribir código y, a la vez, entender cómo se rompe.
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
