import React from "react";
import img from "../../../assets/hero-skaters.png";

export default function HeroSection() {
  return (
    // Quitamos max-w-lg y dejamos que controle el tamaño el padre en Login.jsx
    <div className="flex flex-col items-start justify-center w-full relative">
      {/* Contenedor de Textos */}
      <div className="mb-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-Title1 text-[#00b0ff] tracking-tight leading-none">
          Rodar Academia
        </h1>
        <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-Text1 text-gray-800 tracking-wide">
          Pasión sobre ruedas
        </p>
      </div>

      {/* Contenedor de la Imagen - Ahora más grande */}
      <div className="w-full max-w-lg lg:max-w-xl overflow-hidden md:-mt-37.5 relative z-10">
        <img
          src={img}
          alt="Patinadores de velocidad de Rodar Academia"
          className="w-full h-auto object-cover object-center drop-shadow-md"
        />
      </div>
    </div>
  );
}