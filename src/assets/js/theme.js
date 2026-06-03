// ===============================
// THEME TOGGLE — DESIGN SYSTEM
// ===============================

const root = document.documentElement;
const THEME_KEY = "theme";

// 1️⃣ Aplicar tema guardado o default (dark)
const temaGuardado = localStorage.getItem(THEME_KEY) || "dark";
root.setAttribute("data-theme", temaGuardado);

// 2️⃣ Toggle de tema
const cambiarTema = () => {
  const temaActual = root.getAttribute("data-theme");
  const nuevoTema = temaActual === "light" ? "dark" : "light";

  root.setAttribute("data-theme", nuevoTema);
  localStorage.setItem(THEME_KEY, nuevoTema);

  actualizarToggle(nuevoTema);
};

// 3️⃣ Actualiza icono + texto
const actualizarToggle = (tema) => {
  const icono = document.querySelector(".icon-vibe");
  const label = document.querySelector(".btn-vibe .label");

  if (!icono || !label) return;

  icono.outerHTML = tema === "light" ? iconoClaro : iconoOscuro;
  label.textContent =
    tema === "light"
      ? "Switch to Cosmic Mode"
      : "Switch to Sunshine Mode";
};

// 4️⃣ Estado inicial del botón
actualizarToggle(temaGuardado);
