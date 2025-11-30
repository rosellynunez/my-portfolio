// TYPED-OUTPUT
document.addEventListener('DOMContentLoaded', function() {
    var options = {
      strings: [
        "design interfaces that delight 🎨",
        "craft experiences that captivate 🚀",
        "build design systems that scale 🛠️"
      ],
      typeSpeed: 50,  // Velocidad de escritura un poco más rápida
      backSpeed: 40,  // Borra más rápido
      backDelay: 1200, // Menos pausa antes de borrar
      startDelay: 300,  // Menos espera inicial
      loop: true,
      showCursor: true
    };
  
    new Typed("#typed-output", options);
  });

// MENU MOBILE OVERLAY
const toggleButton = document.querySelector('.navbar-toggler');
const toggleText = document.querySelector('#menu-style');
const overlay = document.getElementById('menu-overlay');

// Muestra/oculta el overlay y cambia el texto del botón
toggleButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Verifica si el overlay está activo
  const isOverlayActive = overlay.classList.contains('active');
  
  // Muestra/oculta el overlay y cambia el texto del botón
  if (isOverlayActive) {
    overlay.classList.remove('active');
    toggleText.textContent = 'MENU';
  } else {
    overlay.classList.add('active');
    toggleText.textContent = 'CLOSE';
  }
});

// Cierra el overlay al hacer clic en un enlace
document.querySelectorAll('.overlay-menu a').forEach(link => {
  link.addEventListener('click', function() {
    overlay.classList.remove('active');
    toggleText.textContent = 'MENU';
  });
});

// Cierra el menú cuando se cambia a modo escritorio
window.addEventListener('resize', function() {
  if (window.innerWidth >= 992) {
    overlay.classList.remove('active');
    toggleText.textContent = 'MENU';
  }
});

// NAVBAR SCROLL
document.addEventListener('DOMContentLoaded', function() {
  // Solo ejecuta si existe la navbar en la página
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});

// for home
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // Retrasa cada línea 200ms para un efecto escalonado
      }
    });
  }, { threshold: 0.3 }); // Se activa cuando el 30% del elemento es visible

  elements.forEach((el) => observer.observe(el));
});


// for about me page
document.addEventListener("DOMContentLoaded", function () {
  const highlights = document.querySelectorAll(".spotlight");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Agrega la clase cuando entra en la vista
        }
      });
    },
    { threshold: 0.9 } // Se activa cuando el 90% del elemento está visible
  );

  highlights.forEach((el) => observer.observe(el));
});


// CONFIGURACIÓN - REEMPLAZA ESTO CON TU ID REAL
const CLARITY_PROJECT_ID = 'rc9pe4uosu';

// 1. Configurar Google Consent Mode por defecto (sin consentimiento)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
});

// 2. Mostrar banner si no hay decisión previa
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookieBanner').style.display = 'block';
    } else if (localStorage.getItem('cookieConsent') === 'accepted') {
        // Si ya aceptó antes, cargar Clarity inmediatamente
        loadClarityWithConsent();
    }
});

// 3. Funciones para manejar consentimiento
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieBanner').style.display = 'none';
    
    // Actualizar consentimiento y cargar Clarity
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
    loadClarityWithConsent();
    
    console.log('Cookies aceptadas - Clarity activado');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    document.getElementById('cookieBanner').style.display = 'none';
    
    // Mantener consentimiento denegado
    console.log('Cookies rechazadas - Clarity no se cargará');
}

// 4. Función para cargar Clarity con consentimiento
function loadClarityWithConsent() {
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
}