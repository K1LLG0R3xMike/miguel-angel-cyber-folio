
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="text-red-400 font-bold text-xl">
            Miguel Ángel Rodríguez Correa
          </div>
          
          <p className="text-gray-300">
            Estudiante de Ingeniería de Sistemas | Especialista en Ciberseguridad
          </p>
          
          <div className="border-t border-border/50 pt-4">
            <p className="text-sm text-gray-300">
              © 2024 Miguel Ángel Rodríguez Correa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
