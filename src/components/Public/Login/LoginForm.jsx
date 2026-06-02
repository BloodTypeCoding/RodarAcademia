import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "admin@rodar.com" &&
      password === "admin2026"
    ) {
      setError("");
      navigate("/admin");
    } else {
      setError("Cuenta inexistente o credenciales no válidas");
    }
  };

  return (
    <div className="w-full max-w-md p-6 flex flex-col items-center">
      <h2 className="text-4xl font-Title1 text-[#00b2ff] mb-8 tracking-wide text-center">
        Inicio de sesión
      </h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-Text1 text-gray-800 min-w-27.5 text-right">
            Email:
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#e0fbf7] border-none rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00b2ff] transition-all"
            required
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-Text1 text-gray-800 min-w-27.5 text-right">
            Contraseña:
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#e0fbf7] border-none rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00b2ff] transition-all"
            required
          />
        </div>

        {error && (
          <div className="relative mt-2 bg-[#f87171] text-white text-center py-6 px-8 rounded-2xl shadow-md">
            <button
              type="button"
              onClick={() => setError("")}
              className="absolute top-2 right-3 font-bold"
            >
              ✕
            </button>

            <p className="text-base font-medium">
              {error}
            </p>
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#00b2ff] hover:bg-[#0092d1] text-white font-Text1 font-bold py-2 px-10 rounded-full shadow-md transition-all"
          >
            Ingresa
          </button>
        </div>
      </form>
    </div>
  );
}