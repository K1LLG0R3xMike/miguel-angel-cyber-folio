
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Shield, Brain, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
  {
    icon: Code,
    title: "Lenguajes de Programación",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "C++", icon: "⚡" },
      { name: "TypeScript", icon: "🧩" },
      { name: "JavaScript", icon: "✨" },
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" }
    ]
  },
  {
    icon: Smartphone,
    title: "Frameworks de Desarrollo Web/Móvil",
    skills: [
      { name: "Ionic", icon: "📱" },
      { name: "Angular", icon: "🅰️" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "💨" },
    ]
  },
  {
    icon: Shield,
    title: "Herramientas de Seguridad",
    skills: [
      { name: "Kali Linux", icon: "🐉" },
      { name: "Burp Suite", icon: "🔍" },
      { name: "Nikto", icon: "🛡️" },
      { name: "Gobuster", icon: "🔎" },
      { name: "Wazuh", icon: "👮" }
    ]
  },
  {
    icon: Server, // Asegúrate de tener importado este ícono
    title: "Backend y Servidores",
    skills: [
      { name: "Apache HTTP Server", icon: "🌐" },
      { name: "SSH", icon: "🔐" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" }
    ]
  }
];


  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Habilidades <span className="text-red-400">Técnicas</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <category.icon className="w-6 h-6 text-red-400" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                      </div>
                    ))}
                  </div>
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
