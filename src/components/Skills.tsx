
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Smartphone, Shield, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Lenguajes de Programación",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "Frameworks y Librerías",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "Keras", level: 65 },
        { name: "scikit-learn", level: 75 },
        { name: "OpenCV", level: 60 }
      ]
    },
    {
      icon: Smartphone,
      title: "Desarrollo Frontend Móvil",
      skills: [
        { name: "Ionic", level: 70 },
        { name: "Angular", level: 65 },
        { name: "React", level: 70 }
      ]
    },
    {
      icon: Shield,
      title: "Herramientas de Seguridad",
      skills: [
        { name: "Kali Linux", level: 85 },
        { name: "Burp Suite", level: 80 },
        { name: "Nikto", level: 75 },
        { name: "Gobuster", level: 70 },
        { name: "Wazuh", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Habilidades <span className="text-primary">Técnicas</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <category.icon className="w-6 h-6 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
