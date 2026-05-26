import LoginForm from "../components/Public/Login/LoginForm";
import HeroSection from "../components/Public/Login/HeroSection";
import React from "react";
import FooterInfo from "../components/Public/FooterInfo";

export default function Login() {
  return (
    <div className="bg-[#FFFBF4] min-h-screen flex flex-col justify-between">
      {/* Contenedor principal responsive */}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 p-6 md:p-12 max-w-7xl mx-auto w-full">
        
        {/* Sección de la izquierda (Hero) con más peso visual */}
        <div className="w-full md:w-3/5 flex justify-center md:justify-end">
          <HeroSection />
        </div>

        {/* Sección de la derecha (Formulario) con tamaño controlado */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <LoginForm />
        </div>

      </div>
      <FooterInfo />
    </div>
  );
}