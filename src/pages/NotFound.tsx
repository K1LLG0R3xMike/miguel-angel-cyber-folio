import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-red-400">404</h1>
        <p className="text-xl text-gray-300">Página no encontrada</p>
        <p className="text-sm text-gray-400">
          La ruta que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="inline-block mt-2 rounded-md bg-red-600 hover:bg-red-700 px-5 py-2 text-white transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
