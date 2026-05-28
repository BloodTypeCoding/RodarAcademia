import React, { useState } from "react";

export default function AdminDashboard() {
  const [active, setActive] = useState("usuarios");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("es");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const translations = {
    es: {
      usuarios: "Usuarios",
      cursos: "Cursos",
      reportes: "Reportes",
      configuraciones: "Configuraciones",
      buscar: "Buscar...",
      adminPanel: "Vista administrativa",
      metricas: "Tarjetas métricas globales",
      cerrarSesion: "Cerrar sesión",
      nuevo: "+ Nuevo",
      claro: "Claro",
      oscuro: "Oscuro",
      activadas: "Activadas",
      desactivadas: "Desactivadas",
      idioma: "Idioma",
      tema: "Tema",
      notificaciones: "Notificaciones",
      cambiar: "Cambiar",
    },
    en: {
      usuarios: "Users",
      cursos: "Courses",
      reportes: "Reports",
      configuraciones: "Settings",
      buscar: "Search...",
      adminPanel: "Administrative view",
      metricas: "Global metric cards",
      cerrarSesion: "Log out",
      nuevo: "+ New",
      claro: "Light",
      oscuro: "Dark",
      activadas: "Enabled",
      desactivadas: "Disabled",
      idioma: "Language",
      tema: "Theme",
      notificaciones: "Notifications",
      cambiar: "Change",
    },
  };

  const t = translations[language];

  const configuraciones = [
    {
      nombre: t.idioma,
      valor: language === "es" ? "Español" : "English",
      accion: t.cambiar,
    },
    {
      nombre: t.tema,
      valor: theme === "light" ? t.claro : t.oscuro,
      accion: t.cambiar,
    },
    {
      nombre: t.notificaciones,
      valor: notificationsEnabled ? t.activadas : t.desactivadas,
      accion: "switch",
    },
  ];

  

  const handleConfigAction = (index) => {
    if (index === 0) {
      setLanguage((prev) => (prev === "es" ? "en" : "es"));
    }

    if (index === 1) {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  const userRows = language === "es"
    ? [
        ["Pedro Gómez", "pedro@email.com", "Administrador", "Activo"],
        ["Laura Díaz", "laura@email.com", "Instructor", "Activo"],
        ["Carlos Ruiz", "carlos@email.com", "Estudiante", "Inactivo"],
      ]
    : [
        ["Pedro Gómez", "pedro@email.com", "Administrator", "Active"],
        ["Laura Díaz", "laura@email.com", "Instructor", "Active"],
        ["Carlos Ruiz", "carlos@email.com", "Student", "Inactive"],
      ];

  const courseRows =
  language === "es"
    ? [
        [
          "Patinaje Básico",
          "Clases desde cero, técnica básica y preparación física.",
          "$120.000",
          "35",
        ],
        [
          "Patinaje Intermedio",
          "Mejora de técnica, velocidad y resistencia.",
          "$150.000",
          "42",
        ],
        [
          "Patinaje Avanzado",
          "Entrenamiento para competir, perfeccionar técnica y aumentar resistencia.",
          "$110.000",
          "28",
        ],
      ]
    : [
        [
          "Basic Skating",
          "Beginner classes, basic technique and physical preparation.",
          "$120.000",
          "35",
        ],
        [
          "Intermediate Skating",
          "Improvement of technique, speed and endurance.",
          "$150.000",
          "42",
        ],
        [
          "Advanced Skating",
          "Training for competitions, advanced technique and endurance.",
          "$110.000",
          "28",
        ],
      ];

  const reportRows = language === "es"
    ? [
        ["R-011", "Error en el sistema de horarios", "07/05/2026", "Pendiente"],
        ["R-012", "Problema en la pasarela de pagos", "06/05/2026", "Completado"],
        ["R-013", "Imposibilidad de cancelar matrícula", "05/05/2026", "Completado"],
      ]
    : [
        ["R-011", "System schedule error", "07/05/2026", "Pending"],
        ["R-012", "Payment gateway issue", "06/05/2026", "Completed"],
        ["R-013", "Unable to cancel enrollment", "05/05/2026", "Completed "],
      ];

  const sections = {
    usuarios: {
      title: t.usuarios,
      headers:
        language === "es"
          ? ["Nombre", "Correo", "Rol", "Estado"]
          : ["Name", "Email", "Role", "Status"],
      rows: userRows,
    },

    cursos: {
      title: t.cursos,
      headers:
        language === "es"
          ? ["Curso", "Descripción", "Precio", "Estudiantes"]
          : ["Course", "Description", "Price", "Students"],
      rows: courseRows,
    },

    reportes: {
      title: t.reportes,
      headers:
        language === "es"
          ? ["ID", "Reporte", "Fecha", "Estado"]
          : ["ID", "Report", "Date", "Status"],
      rows: reportRows,
    },

    configuraciones: {
      title:
        language === "es"
          ? "Configuraciones Generales"
          : "General Settings",
      headers:
        language === "es"
          ? ["Configuración", "", "Acción"]
          : ["Setting", "", "Action"],
      rows: configuraciones.map((config) => [
        config.nombre,
        config.valor,
        config.accion,
      ]),
    },
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden border grid grid-cols-[260px_1fr] transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <aside
          className={`border-r p-5 flex flex-col justify-between transition-all duration-300 ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-neutral-100 border-gray-200"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                A
              </div>

              <div>
                <h1
                  className={`font-bold text-xl ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Admin Panel
                </h1>

                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {t.adminPanel}
                </p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                ["usuarios", t.usuarios],
                ["cursos", t.cursos],
                ["reportes", t.reportes],
                ["configuraciones", t.configuraciones],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-medium ${
                    active === key
                      ? "bg-cyan-500 text-white shadow-lg"
                      : theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600"
                      : "bg-white hover:bg-cyan-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-semibold transition-all">
            {t.cerrarSesion}
          </button>
        </aside>

        <main className="p-8">
          <div className="flex items-center justify-between mb-8 gap-4">
            <input
              type="text"
              placeholder={t.buscar}
              className={`flex-1 rounded-2xl px-5 py-3 outline-none border transition-all ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            />

            <div className="flex items-center gap-3 bg-cyan-500 text-white px-5 py-3 rounded-2xl shadow-lg">
              <span className="font-medium">Admin</span>
            </div>
          </div>

          <div className="mb-8">
            <div
              className={`rounded-2xl py-3 shadow-md border mb-5 text-center transition-all ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {t.metricas}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[
                language === "es"
                ? ["Usuarios activos", "152"]
                : ["Active users", "152"],
                language === "es"
                ? ["Cursos publicados", "3"]
                : ["Published courses", "3"],
                language === "es"
                ? ["Ingresos trimestrales", "17.140.000"]
                : ["Quarterly income", "17.140.000"],
                language === "es"
                ? ["Inscripciones hoy", "15"]
                : ["Today's enrollments", "15"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="bg-cyan-500 text-white rounded-3xl p-5 shadow-xl border border-cyan-600"
                >
                  <p className="text-lg font-semibold text-center">{title}</p>

                  <div className="flex justify-center items-center mt-5">
                    <h2
                      className={`font-bold tracking-wide text-center ${
                        title === "Ingresos trimestrales"
                          ? "text-2xl"
                          : "text-3xl"
                      }`}
                    >
                      {value}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`border rounded-3xl shadow-md overflow-hidden transition-all ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div
              className={`px-6 py-5 border-b flex items-center justify-between ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <h2 className="text-2xl font-bold text-cyan-500">
                {sections[active].title}
              </h2>

              {active !== "reportes" && active !== "configuraciones" && (
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl transition-all font-medium">
                  {t.nuevo}
                </button>
              )}
            </div>

            <div className="overflow-x-auto">
              {active === "configuraciones" ? (
                <table className="w-full table-fixed border-collapse">
                  <colgroup>
                    <col className="w-[260px]" />
                    <col className="w-[220px]" />
                    <col className="w-[220px]" />
                  </colgroup>

                  <thead>
                    <tr
                      className={`transition-all ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <th className="py-4 pl-4 text-left font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                        {language === "es" ? "Configuración" : "Setting"}
                      </th>

                      <th className="py-4 font-semibold"></th>

                      <th className="py-4 text-center font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                        {language === "es" ? "Acción" : "Action"}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {configuraciones.map((config, index) => (
                      <tr
                        key={index}
                        className={`border-t transition-all ${
                          theme === "dark"
                            ? "border-gray-700 hover:bg-gray-700"
                            : "border-gray-100 hover:bg-cyan-50"
                        }`}
                      >
                        <td
                          className={`py-4 pl-4 pr-6 text-left overflow-hidden whitespace-nowrap text-ellipsis ${
                            theme === "dark"
                              ? "text-white"
                              : "text-gray-700"
                          }`}
                        >
                          {config.nombre}
                        </td>

                        <td
                          className={`py-4 px-6 overflow-hidden whitespace-nowrap text-ellipsis ${
                            theme === "dark"
                              ? "text-white"
                              : "text-gray-700"
                          }`}
                        >
                          <div className="w-full text-left">
                            {config.valor}
                          </div>
                        </td>

                        <td className="py-4">
                          <div className="flex justify-center items-center w-full">
                            {config.accion === "switch" ? (
                              <button
                                onClick={toggleNotifications}
                                className={`w-14 h-7 rounded-full flex items-center px-1 transition-all ${
                                  notificationsEnabled
                                    ? "bg-cyan-500 justify-end"
                                    : "bg-gray-400 justify-start"
                                }`}
                              >
                                <div className="w-5 h-5 bg-white rounded-full"></div>
                              </button>
                            ) : (
                              <button
                                onClick={() => handleConfigAction(index)}
                                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap"
                              >
                                {config.accion}
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full border-collapse">
                  <thead>
                    <tr
                      className={`transition-all ${
                        theme === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {sections[active].headers.map((header) => (
                        <th
                          key={header}
                          className="px-6 py-4 font-semibold text-left"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {sections[active].rows.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-t transition-all ${
                          theme === "dark"
                            ? "border-gray-700 hover:bg-gray-700"
                            : "border-gray-100 hover:bg-cyan-50"
                        }`}
                      >
                        {row.map((cell, idx) => (
                          <td
                            key={idx}
                            className={`px-6 py-4 ${
                              theme === "dark"
                                ? "text-white"
                                : "text-gray-700"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
