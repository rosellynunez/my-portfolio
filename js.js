const temaOscuro = () => {
    // Cambia el tema a oscuro
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    // Cambia el icono a sol 🌞 (bi-sun-fill)
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");

    document.querySelector("#contact-me").classList.remove("claro");
    document.querySelector("#contact-me").classList.add("oscuro");

    document.querySelector(".rounded-block").classList.remove("claro");
    document.querySelector(".rounded-block").classList.add("oscuro");

    // Cambia color de los h1, h2, h3
    document.querySelectorAll("h1, h2, h3").forEach((element) => {
    element.style.color = "white"; // contraste para el tema oscuro
    });
    
    // Change color of #typed-output
    document.querySelector("#typed-output").style.color = "white";
};

const temaClaro = () => {
     // Cambia el tema a claro
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    // Cambia el icono a luna 🌛(bi-moon-fill)
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");

    document.querySelector("#contact-me").classList.remove("oscuro");
    document.querySelector("#contact-me").classList.add("claro");

    document.querySelector(".rounded-block").classList.remove("oscuro");
    document.querySelector(".rounded-block").classList.add("claro");

    // Cambiar color de los h1, h2, h3
    document.querySelectorAll("h1, h2, h3").forEach((element) => {
    element.style.color = "black"; // contraste para el tema oscuro
    });

    // Change color of #typed-output
    document.querySelector("#typed-output").style.color = "black";
};

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
};

document.addEventListener('DOMContentLoaded', function() {
    var options = {
      strings: [
        "to build scalable design systems for future growth 🛠️",
        "to design user interfaces that delight 🚀",
        "to empower them with data-driven UX strategies 🌟",
        "to craft user experiences that enhance engagement 📈"
      ],
      typeSpeed: 60,
      backSpeed: 25,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    };
  
    var typed = new Typed("#typed-output", options);
  });

  document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {  // Cambia el valor si quieres que el efecto ocurra antes o después
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  
  function toggleMenu(toggler) {
    toggler.classList.toggle("open");
    
    // Alternar entre la palabra "MENU" y la "X"
    const menuText = toggler.querySelector('.navbar-toggler-text');
    if (toggler.classList.contains("open")) {
        menuText.style.display = 'none'; // Oculta "MENU" cuando está abierto
    } else {
        menuText.style.display = 'inline-block'; // Muestra "MENU" cuando está cerrado
    }
}



