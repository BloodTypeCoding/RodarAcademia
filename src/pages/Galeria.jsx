import Navbar from "../components/Public/Navbar";
import React from "react";
import FooterInfo from "../components/Public/FooterInfo";
import GaleriaSection from "../components/Public/Galeria/GaleriaSection";

export default function Galeria() {
  return (
    <div className="flex flex-col gap-16 min-h-screen bg-[#FFFBF4] py-8">
      <Navbar />
      <GaleriaSection />
      <FooterInfo />
    </div>
  );
}
