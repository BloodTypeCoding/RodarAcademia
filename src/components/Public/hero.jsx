// src/components/Hero.jsx
import React from 'react';
import heroSkaters from '../../assets/hero-skaters.png'; // Asegúrate de que esta imagen tenga fondo transparente para un mejor efecto visual
import { Navigate, useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-150 flex items-center bg-[#FFFBF4] overflow-hidden px-10 md:px-20" id='inicio'>
      
      {/* Contenedor de Texto y Formas */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
        
        {/* Título y Subtítulo */}
        <div className="mb-10">
          <h1 className="text-6xl md:text-8xl font-Title1 text-[#00D1FF] leading-none tracking-tight">
            Rodar Academia
          </h1>
          <p className="text-2xl md:text-3xl text-slate-800 font-Text1 ml-2 mt-2">
            Pasión sobre ruedas
          </p>
        </div>

        {/* Barra de Acción Estilo Cápsula */}
        <div className="relative w-full max-w-2xl">
          {/* Forma Cian Principal (Botones) */}
          <div className="relative z-20 flex items-center bg-[#00D1FF] rounded-full px-12 py-6 shadow-lg w-fit">
            <button className="text-white font-Enlaces font-bold text-sm uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer" onClick={() => navigate('/login')}>
              Iniciar Sesión
            </button>
            
            {/* Divisor vertical */}
            <div className="h-8 w-px bg-white/40 mx-8"></div>
            
            <button className="text-white font-Enlaces font-bold text-sm uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer" onClick={() => navigate('/register')}>
              Inscríbete
            </button>
          </div>

          {/* Forma Decorativa 1 (Azul medio detrás) */}
          <div className="absolute top-1/2 left-40 -translate-y-1/2 w-[120%] h-20 bg-[#36EFFF] rounded-full -z-20 opacity-70"></div>
          
          {/* Forma Decorativa 2 (Celeste muy claro abajo) */}
          <div className="absolute top-full left-0 -mt-2 w-[110%] h-24 bg-[#E0FBFB] rounded-full -z-10"></div>
        </div>
      </div>

      {/* Imagen de Patinadores - Posicionada a la derecha */}
      <div className="absolute right-10 bottom-0 w-1/2 lg:w-[55%] z-30 pointer-events-none">
        <img 
          src={heroSkaters} // Asegúrate de que el PNG tenga fondo transparente
          alt="Patinadores" 
          className="w-full h-auto object-contain object-bottom scale-70 origin-bottom-right"
        />
      </div>

    </section>
  );
};