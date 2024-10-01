const temaOscuro = () => {
    // Cambia el tema a oscuro
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    // Cambia el icono a sol 🌞 (bi-sun-fill)
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");

    document.querySelector("#intro").classList.remove("claro");
    document.querySelector("#intro").classList.add("oscuro");

    // Cambia color de los h1, h2, h3
    document.querySelectorAll("h1, h2, h3").forEach((element) => {
    element.style.color = "white"; // contraste para el tema oscuro
    });
}

const temaClaro = () => {
     // Cambia el tema a claro
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    // Cambia el icono a luna 🌛(bi-moon-fill)
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
 
    document.querySelector("#intro").classList.remove("oscuro");
    document.querySelector("#intro").classList.add("claro");

    // Cambiar color de los h1, h2, h3
    document.querySelectorAll("h1, h2, h3").forEach((element) => {
    element.style.color = "black"; // contraste para el tema oscuro
    });
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}

document.addEventListener('DOMContentLoaded', function() {
    var options = {
      strings: [
        "to launch new websites 🚀",
        "to drive conversions 🚀",
        "to create amazing digital products 🚀"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    };
  
    var typed = new Typed("#typed-output", options);
  });