import React, { useState } from "react";

// Interfaces/Contratos de datos (Documentación interna)
// item: { id: number, url: string, title: string, description: string }

const imagesData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800", // Reemplazar con tus rutas reales
    title: "Competencia interclases mayo",
    description:
      "Evidencias fotográficas de nuestra jornada de competencias interclases del mes de mayo.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
    title: "Entrenamiento técnico de velocidad",
    description:
      "Nuestros atletas perfeccionando la postura aerodinámica en pista.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    title: "Grupo formativo infantil",
    description:
      "Fomentando el compañerismo y la disciplina desde los primeros pasos.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    title: "Taller de patinaje artístico",
    description:
      "Explorando la expresión corporal y la creatividad sobre ruedas.",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800",
    title: "Competencia interclases mayo",
    description:
      "Evidencias fotográficas de nuestra jornada de competencias interclases del mes de mayo.",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    title: "Entrenamiento técnico de velocidad",
    description:
      "Nuestros atletas perfeccionando la postura aerodinámica en pista.",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
    title: "Grupo formativo infantil",
    description:
      "Fomentando el compañerismo y la disciplina desde los primeros pasos.",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    title: "Taller de patinaje artístico",
    description:
      "Explorando la expresión corporal y la creatividad sobre ruedas.",
  }
];

function GaleriaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImage = imagesData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleSelectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-[#FFFDF9]">
      {/* Título de la Sección */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-Title1 text-[#00A3FF] tracking-wide uppercase">
          Galería
        </h2>
      </div>

      {/* Contenedor Principal en Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Columna Izquierda: Visualizador Principal (Ocupa 7 de 12 columnas) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="relative group aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-sm">
            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />

            {/* Botón Izquierdo (Flecha) */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-black/70 hover:text-black p-2 transition-colors focus:outline-none"
              aria-label="Imagen anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Botón Derecho (Flecha) */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-black/70 hover:text-black p-2 transition-colors focus:outline-none"
              aria-label="Siguiente imagen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Información de la Imagen Seleccionada */}
          <div className="bg-[#EAEAEA] p-6 rounded-2xl shadow-inner min-h-30 flex flex-col justify-center">
            <h3 className="text-xl font-Text1 text-black mb-2 font-medium">
              {activeImage.title}
            </h3>
            <p className="text-gray-700 font-normal leading-relaxed font-Text1 text-sm md:text-base">
              {activeImage.description}
            </p>
          </div>
        </div>

        {/* Línea Divisoria Vertical (Solo visible en pantallas grandes) */}
        <div className="hidden lg:block lg:col-span-1 justify-self-center h-full w-[1px] bg-gray-300 min-h-[500px]" />

        {/* Columna Derecha: Grid de Miniaturas (Ocupa 4 de 12 columnas) */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {imagesData.map((image, index) => {
              const isSelected = index === currentIndex;
              return (
                <button
                  key={image.id}
                  onClick={() => handleSelectImage(index)}
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden focus:outline-none transition-all duration-300 ${
                    isSelected
                      ? "ring-4 ring-[#00A3FF] ring-offset-2 scale-[0.98]"
                      : "hover:opacity-85"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GaleriaSection;
