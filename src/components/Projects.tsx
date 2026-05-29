
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Escaner De Vulnerabilidades Web y Analisis de Vectores de ataque",
      description: "Herramienta automatizada para el análisis de seguridad en aplicaciones web utilizando técnicas de pentesting y análisis estático de código.",
      technologies: ["Python", "Burp Suite API", "SQLMap", "BeautifulSoup"],
      status: "Completado",
      type: "Ciberseguridad",
      github: "https://github.com/K1LLG0R3xMike/SecTestVK.git",
      demo: null,
      isPrivate: false,
      hideDemo: true
    },
    {
      title: "Monitor de Red con Wazuh",
      description: "Implementación de un sistema de monitoreo y detección de intrusiones utilizando Wazuh para análisis de logs y detección de amenazas en tiempo real.",
      technologies: ["Wazuh", "ELK Stack", "Python", "Linux"],
      status: "Completado",
      type: "Monitoreo",
      github: null,
      demo: null,
      isPrivate: true,
      hideDemo: false
    },
    {
      title: "Aplicación de Machine Learning para Detección de Malware",
      description: "Modelo de clasificación utilizando técnicas de aprendizaje automático para identificar patrones de comportamiento malicioso en archivos ejecutables.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas"],
      status: "En desarrollo",
      type: "IA/ML",
      github: null,
      demo: null,
      isPrivate: true,
      hideDemo: false
    },
    {
      title: "App Móvil de Gestión de Emprendimiento",
      description: "Aplicación híbrida desarrollada con Ionic y Angular para la gestión de emprendimientos, inventarios y actividades empresariales con interfaz intuitiva.",
      technologies: ["Ionic", "Angular", "TypeScript", "Firebase"],
      status: "Completado",
      type: "Desarrollo Móvil",
      github: "https://github.com/K1LLG0R3xMike/AppEmprendedores_movil2.git",
      demo: "https://app-emprendedores-movil2.vercel.app/login",
      isPrivate: false,
      hideDemo: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "En desarrollo":
        return "bg-white/10 text-white border-white/20";
      default:
        return "bg-red-400/10 text-red-400 border-red-400/20";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Ciberseguridad":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      case "Monitoreo":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "IA/ML":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "Desarrollo Móvil":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      default:
        return "bg-red-400/10 text-red-400 border-red-400/20";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Proyectos <span className="text-red-400">Destacados</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 flex flex-col">
                <CardHeader>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg leading-tight pr-4 text-white">
                        {project.title}
                      </CardTitle>
                      {project.isPrivate && (
                        <Lock className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col space-y-4">
                  <p className="text-gray-300 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs text-white border-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3 pt-2">
                      {project.github ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 text-white border-white/20 hover:bg-white/10"
                        >
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="flex-1 text-gray-400 border-gray-400/20" disabled>
                          <Github className="w-4 h-4 mr-2" />
                          {project.isPrivate ? "Privado" : "Próximamente"}
                        </Button>
                      )}
                      
                      {!project.hideDemo &&
                        (project.demo ? (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="flex-1 text-white border-white/20 hover:bg-white/10"
                          >
                            <a href={project.demo} target="_blank" rel="noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="flex-1 text-gray-400 border-gray-400/20" disabled>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Sin demo
                          </Button>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              ¿Interesado en colaborar o conocer más detalles sobre estos proyectos?
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Contactar para más información
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
