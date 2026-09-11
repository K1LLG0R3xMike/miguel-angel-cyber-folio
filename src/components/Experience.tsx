import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const jobs = [
    {
      role: "Práctica Estudiantil · Desarrollo y Automatización",
      company: "Celsia S.A.",
      period: "Ene 2026 – Jul 2026",
      duration: "6 meses",
      summary:
        "Desarrollo de software, automatización y apoyo en ingeniería para el monitoreo de activos de infraestructura.",
      achievements: [
        "Desarrollé un agente de IA para Zabbix orientado al análisis automatizado del monitoreo.",
        "Construí una plataforma de automatización de pruebas de penetración potenciada con IA, orquestando el flujo completo de escaneo a ataque.",
        "Realicé el mapeo detallado de la infraestructura crítica de la compañía en Zabbix.",
      ],
      stack: ["Zabbix", "Python", "IA / LLM", "Automatización", "Linux"],
    },
  ];

  const education = [
    {
      title: "Ingeniería de Sistemas",
      place: "Universidad de San Buenaventura",
      period: "2022 – 2026",
      note: "Último semestre",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Experiencia y <span className="text-red-400">Formación</span>
          </h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <Card
                key={`${job.company}-${job.role}`}
                className="hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="flex items-start space-x-3 text-white">
                        <Briefcase className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                        <span className="leading-tight">{job.role}</span>
                      </CardTitle>
                      <p className="text-gray-300 pl-9">{job.company}</p>
                    </div>
                    <div className="pl-9 md:pl-0 md:text-right text-sm text-gray-400 flex-shrink-0">
                      <p>{job.period}</p>
                      <p>{job.duration}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{job.summary}</p>

                  <ul className="space-y-2 text-gray-300 leading-relaxed">
                    {job.achievements.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-red-400 mt-1 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {job.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs text-white border-white/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {education.map((edu) => (
              <Card
                key={edu.title}
                className="hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="flex items-start space-x-3 text-white">
                        <GraduationCap className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                        <span className="leading-tight">{edu.title}</span>
                      </CardTitle>
                      <p className="text-gray-300 pl-9">{edu.place}</p>
                    </div>
                    <div className="pl-9 md:pl-0 md:text-right text-sm text-gray-400 flex-shrink-0">
                      <p>{edu.period}</p>
                      <p>{edu.note}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
