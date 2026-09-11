import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = "573238092856";
    const text = encodeURIComponent(
      `Hola, soy ${formData.name}.\n\n${formData.message}\n\nMi correo: ${formData.email}`
    );
    const url = `https://wa.me/${phone}?text=${text}`;

    const opened = window.open(url, "_blank", "noopener,noreferrer");

    if (opened) {
      toast({
        title: "Abriendo WhatsApp",
        description: "Se abrió una pestaña para enviar tu mensaje. Si no ves nada, escríbeme a miguelrc055@gmail.com.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "No se pudo abrir WhatsApp",
        description: "Tu navegador bloqueó la ventana. Escríbeme directamente a miguelrc055@gmail.com.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "miguelrc055@gmail.com",
      href: "mailto:miguelrc055@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/K1LLG0R3xMike",
      href: "https://github.com/K1LLG0R3xMike"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Miguel Ángel Rodríguez",
      href: "https://www.linkedin.com/in/miguel-angel-rodríguez-04171827b"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Contácta<span className="text-red-400">me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-white">
                  <MessageSquare className="w-6 h-6 text-red-400" />
                  <span>Envía un mensaje</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu.email@ejemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto o consulta..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background border-border resize-none text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    Al enviar se abrirá WhatsApp con tu mensaje. ¿Prefieres correo?{" "}
                    <a href="mailto:miguelrc055@gmail.com" className="text-red-400 underline">
                      miguelrc055@gmail.com
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-white">Información de contacto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-border/50 hover:border-red-400/50 transition-colors group"
                    >
                      <info.icon className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-white">{info.label}</p>
                        <p className="text-sm text-gray-300">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-white">¿Buscas colaborar?</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Estoy siempre interesado en proyectos de ciberseguridad, 
                    desarrollo de software y oportunidades de aprendizaje. 
                    No dudes en contactarme para discutir ideas o posibles colaboraciones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-400/10 text-red-400 px-2 py-1 rounded">
                      Pentesting
                    </span>
                    <span className="text-xs bg-red-400/10 text-red-400 px-2 py-1 rounded">
                      Desarrollo
                    </span>
                    <span className="text-xs bg-red-400/10 text-red-400 px-2 py-1 rounded">
                      Investigación
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
