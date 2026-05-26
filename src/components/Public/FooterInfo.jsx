import React from "react";
import logo from "../../assets/logo-rodar.png";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

export default function FooterInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const getHref = (section) => {
    if (location.pathname === "/login") {
      return `/#${section}`;
    }

    return `#${section}`;
  };

  return (
    <footer className="w-full bg-[#E0FBEF] text-gray-800 py-8 px-6 md:px-12">
      {/* Contenedor principal adaptable */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-sm">
        {/* Bloque 1: Contacto e Identidad */}
        <div className="flex items-start gap-4">
          {/* Logo simulado */}
          <img
            src={logo}
            alt="Rodar Academia Logo"
            className="w-18 h-18 object-cover rounded-full"
          />
          <div>
            <h4 className="font-bold mb-2">Contacto:</h4>
            <ul className="space-y-1 text-xs">
              <li className="flex items-center gap-2">
                <span>📍</span> <strong>Dirección:</strong> Calle 10 #25-30
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> <strong>Teléfono:</strong> +57 300 000 0000
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> <strong>Correo:</strong>{" "}
                contacto@academiarodar.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bloque 2: Navegación (Con líneas divisorias laterales en escritorio) */}
        <div className="border-y md:border-y-0 md:border-x border-gray-300 py-4 md:py-0 md:px-8 h-full flex flex-col justify-center">
          <ul className="space-y-2 font-medium">
            <li>
              <a href={getHref("inicio")} className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href={getHref("servicios")} className="hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href={getHref("eventos")} className="hover:underline">
                Eventos
              </a>
            </li>
            <li>
              <a href={getHref("galeria")} className="hover:underline">
                Galería
              </a>
            </li>
            <li>
              <a href={getHref("testimonios")} className="hover:underline">
                Testimonios
              </a>
            </li>
          </ul>
        </div>

        {/* Bloque 3: Mapa */}
        <div className="flex justify-center justify-self-center w-full max-w-[280px]">
          <div className="w-full h-32 rounded-3xl overflow-hidden shadow-md border border-gray-200">
            {/* Puedes cambiar este iframe por el tuyo real de Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.817343277712!2d-75.567!3d6.244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>

        {/* Bloque 4: Acciones / Autenticación */}
        <div className="flex items-center justify-center md:justify-end gap-4 h-full">
          <button
            className="hover:text-blue-500 font-Enlaces transition-colors"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </button>
          {/* Línea divisoria vertical entre botones */}
          <div className="hidden md:block w-[1px] h-8 bg-gray-400"></div>
          <button
            className="hover:text-blue-500 font-Enlaces transition-colors"
            onClick={() => navigate("/register")}
          >
            Inscríbete
          </button>
        </div>
      </div>
    </footer>
  );
}
