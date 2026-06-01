// src/components/Public/FormRegistro/RegistrationForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    id: "",
    email: "",
    contraseña: "",
    programa: "",
    metodoPago: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fields = [
    { name: "nombre", label: "Nombre:", type: "text" },
    { name: "edad", label: "Edad:", type: "number" },
    { name: "id", label: "Id:", type: "text" },
    { name: "email", label: "Email:", type: "email" },
    { name: "contraseña", label: "Contraseña:", type: "password" },
  ];

  return (
    // CAMBIO 1: Quitamos el 'max-w-lg' restrictivo y dejamos que use el 'w-full' del padre de forma fluida
    <form className="w-full flex flex-col space-y-5 py-4">
      <h2 className="text-5xl font-Title1 text-[#00B4F4] mb-6 tracking-wide text-center">
        Registro
      </h2>

      {/* Campos de texto */}
      {fields.map((field) => (
        // CAMBIO 2: 'grid grid-cols-3' es mucho más estable que los porcentajes fijos en flexbox para alinear texto e inputs
        <div key={field.name} className="grid grid-cols-3 items-center gap-4">
          <label
            htmlFor={field.name}
            className="text-xl font-normal text-black text-right pr-2"
          >
            {field.label}
          </label>
          {/* CAMBIO 3: El input ahora toma 2 de las 3 columnas disponibles (col-span-2) ocupando todo su espacio */}
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="col-span-2 p-3 bg-[#E0F9F8] rounded-2xl text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00B4F4] transition-all"
          />
        </div>
      ))}

      {/* Select: Programa */}
      <div className="grid grid-cols-3 items-center gap-4">
        <label
          htmlFor="programa"
          className="text-xl font-normal text-black text-right pr-2"
        >
          Programa:
        </label>
        <div className="col-span-2 relative">
          <select
            name="programa"
            id="programa"
            value={formData.programa}
            onChange={handleChange}
            className="w-full p-3 bg-[#E0F9F8] rounded-2xl text-lg text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#00B4F4]"
          >
            <option value="">Seleccionar...</option>
            <option value="1">Principiante</option>
            <option value="2">Intermedio</option>
            <option value="3">Avanzado/Competitivo</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-cyan-600">
            <svg
              className="fill-current h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Select: Método de pago */}
      <div className="grid grid-cols-3 items-center gap-4">
        <label
          htmlFor="metodoPago"
          className="text-xl font-normal text-black text-right pr-2"
        >
          Método de pago:
        </label>
        <div className="col-span-2 relative">
          <select
            name="metodoPago"
            id="metodoPago"
            value={formData.metodoPago}
            onChange={handleChange}
            className="w-full p-3 bg-[#E0F9F8] rounded-2xl text-lg text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#00B4F4]"
          >
            <option value="">Seleccionar...</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de crédito/débito</option>
            <option value="paypal">PayPal</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-cyan-600">
            <svg
              className="fill-current h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Botones */}
      {/* CAMBIO 4: justify-end para empujarlos a la derecha tal como se ve en la muestra original */}
      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="submit"
          className="px-6 py-3 bg-[#00B4F4] text-white font-bold rounded-full shadow hover:bg-cyan-500 transition-all"
        >
          Crear Cuenta
        </button>
        <button
          type="button"
          className="px-6 py-3 bg-white text-[#00B4F4] font-bold rounded-full border-2 border-[#00B4F4] hover:bg-cyan-50 transition-all"
          onClick={() => navigate("/login")}
        >
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
