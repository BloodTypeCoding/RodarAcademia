import Navbar from "../components/Public/Navbar.jsx";
import { Hero } from "../components/Public/Hero.jsx";
import MisionVision from "../components/Public/Mision&Vision.jsx";
import SeccionEventos from "../components/Public/eventos.jsx";
import React from "react";
import GaleriaCard from "../components/Public/GaleriaCard.jsx";
import SeccionServicios from "../components/Public/SeccionServicios.jsx";
import FooterInfo from "../components/Public/FooterInfo.jsx";
import Testimonios from "../components/Public/Testimonios.jsx";

function Public() {
  return (
    // CORRECCIÓN: Agregado 'flex' y un 'gap-16' para dar espacio vertical limpio
    <div className="flex flex-col gap-16 min-h-screen bg-[#FFFBF4] py-8">
      <Navbar />
      <Hero />
      <MisionVision />
      <SeccionEventos />
      <GaleriaCard />
      <SeccionServicios />
      <Testimonios />
      <FooterInfo />
    </div>
  );
}

export default Public;
