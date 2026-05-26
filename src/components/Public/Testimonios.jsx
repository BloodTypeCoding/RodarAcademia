import React from "react";

export default function Testimonios() {
  // Datos de los testimonios basados en tu imagen
  const testimoniosData = [
    {
      id: 1,
      name: "Andrés Marulanda",
      text: "Una gran experiencia de aprendizaje, grandes maestros y compañeros. Logré mejorar mi técnica en poco tiempo.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200", // Reemplaza con tus imágenes reales
    },
    {
      id: 2,
      name: "Carlos Gómez",
      text: "Mis hijos aprendieron a patinar al poco tiempo y mejoraron sus habilidades motrices.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      id: 3,
      name: "Rigoberto Parán",
      text: "Mis nietos se ven alegres cuando ven a su instructor y a sus compañeros, son como una familia.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    },
    {
      id: 4,
      name: "Andrés Marulanda", // Nota: En tu imagen este se repite, puedes cambiarlo luego
      text: "Una gran experiencia de aprendizaje, grandes maestros y compañeros. Logré mejorar mi técnica en poco tiempo.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    },
  ];

  return (
    <section className="bg-[#FFFBF4] min-h-screen py-16 px-4 font-Text1">
      <div className="max-w-6xl mx-auto">
        {/* Título Principal */}
        <h2 className="text-4xl md:text-5xl font-Title1 text-center text-[#00A8FF] mb-12 tracking-wide">
          Testimonios
        </h2>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimoniosData.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-[#00D2FF] rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-md"
            >
              {/* Contenedor de la Imagen Circular */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                <img
                  src={testimonio.image}
                  alt={testimonio.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto del Testimonio */}
              <div className="text-white text-center sm:text-left">
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  {testimonio.name}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {testimonio.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
