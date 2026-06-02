function MisionVision() {
  return (
    // CORRECCIÓN: Ahora es 'flex-col' por defecto (móvil) y 'md:flex-row' en escritorio
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-center mx-auto px-4">
      
      {/* Bloque de Misión */}
      <div className="bg-[#07E1FF] text-white p-6 md:p-8 rounded-3xl flex flex-col items-center text-center shadow-md flex-1">
        <h2 className="text-3xl md:text-4xl text-[#5EFFF8] font-Title1 tracking-wide opacity-90 mb-4">
          Misión
        </h2>
        <p className="text-sm md:text-base font-Text1 text-[#FFFBF4] leading-relaxed max-w-xl">
          Formar patinadores integrales mediante un entrenamiento técnico,
          seguro y divertido, fomentando valores como la disciplina, el
          respeto y el trabajo en equipo, mientras promovemos el desarrollo
          físico y personal de cada estudiante.
        </p>
      </div>

      {/* Bloque de Visión */}
      <div className="bg-[#5EFFF8] text-white p-6 md:p-8 rounded-3xl flex flex-col items-center text-center shadow-md flex-1">
        <h2 className="text-3xl md:text-4xl font-Title1 text-[#07B2FF] tracking-wide opacity-90 mb-4">
          Visión
        </h2>
        <p className="text-sm md:text-base font-Text1 text-[#FFFBF4] leading-relaxed max-w-xl">
          Ser una academia de patinaje reconocida por la excelencia en la
          formación de deportistas, impulsando el talento y la pasión por el
          patinaje, y convirtiéndonos en un referente en el desarrollo
          deportivo y humano de nuestros estudiantes.
        </p>
      </div>

    </div>
  );
}

export default MisionVision;