
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Award, Clock, CheckCircle, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "eJPT - eLearnSecurity Junior Penetration Tester",
      provider: "eLearnSecurity / INE",
      status: "Completado",
      progress: 100,
      description: "Certificación fundamental en pentesting que valida habilidades en evaluación de seguridad, explotación de vulnerabilidades y análisis de redes.",
      skills: ["Penetration Testing", "Network Security", "Web Application Security", "Vulnerability Assessment"],
      credentialUrl: "https://certs.ine.com/016237ac-46c6-4190-807e-64549515f504#acc.GWhfvd2Q"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completado":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "En preparación":
        return <Clock className="w-5 h-5 text-white" />;
      default:
        return <Award className="w-5 h-5 text-red-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "En preparación":
        return "bg-white/10 text-white border-white/20";
      default:
        return "bg-red-400/10 text-red-400 border-red-400/20";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Certificaciones <span className="text-red-400">Profesionales</span>
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="space-y-2">
                      <CardTitle className="flex items-start space-x-3 text-white">
                        <Award className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                        <span className="leading-tight">{cert.name}</span>
                      </CardTitle>
                      <p className="text-gray-300">{cert.provider}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(cert.status)}
                      <Badge className={getStatusColor(cert.status)}>
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.credentialUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="text-white border-white/20 hover:bg-white/10"
                    >
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver certificación
                      </a>
                    </Button>
                  )}

                  {cert.status === "En preparación" && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-white">Progreso de preparación</span>
                        <span className="text-sm text-gray-300">{cert.progress}%</span>
                      </div>
                      <Progress value={cert.progress} className="h-2" />
                    </div>
                  )}

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-white">Habilidades cubiertas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs text-white border-white/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300">
              Constantemente expandiendo conocimientos y preparándome para nuevas certificaciones en ciberseguridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
