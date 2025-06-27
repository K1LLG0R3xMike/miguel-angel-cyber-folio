import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Certificaciones", href: "#certifications" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none">
      <div className="pointer-events-auto bg-black/80 backdrop-blur-md rounded-full shadow-2xl border border-white/10 px-6 py-2 flex items-center gap-8 max-w-3xl mx-auto">
        {/* Logo o nombre */}


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-white hover:text-red-400 transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-xs bg-black/90 rounded-2xl shadow-xl border border-white/10 p-6 flex flex-col gap-4 md:hidden z-50 pointer-events-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block text-white hover:text-red-400 transition-colors text-lg font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
