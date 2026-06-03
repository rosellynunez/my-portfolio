// MOBILE MENU (SIN BOOTSTRAP)

document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (!toggle || !mobileNav) return;

  function openMenu() {
  mobileNav.classList.add('is-open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.textContent = 'CLOSE';
  document.documentElement.classList.add('no-scroll');
}

function closeMenu() {
  mobileNav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = 'MENU';
  document.documentElement.classList.remove('no-scroll');
}

  // Toggle MENU / CLOSE
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Cerrar al hacer click en un link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  // Cerrar al hacer click en el overlay
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
      closeMenu();
    }
  });

});




document.addEventListener('DOMContentLoaded', function () {
  const phraseA = document.querySelector(".phrase-a");
  const phraseB = document.querySelector(".phrase-b");

  if (!phraseA || !phraseB) return;

  const phrases = [
    "Design meant to live beyond the mockup",
    "Design systems that grow with teams",
    "UI crafted with care and code in mind",
    "Design made to be used and maintained",
    "Interfaces built for real products"
  ];

  let index = 0;
  let showingA = true;

  phraseA.textContent = phrases[index];
  phraseA.classList.add("visible");
  index++;

  setInterval(() => {
    const nextPhrase = phrases[index];
    const visibleEl = showingA ? phraseA : phraseB;
    const hiddenEl = showingA ? phraseB : phraseA;

    hiddenEl.textContent = nextPhrase;
    hiddenEl.classList.add("visible");
    visibleEl.classList.remove("visible");

    showingA = !showingA;
    index = (index + 1) % phrases.length;

  }, 5000);
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


// CONFIGURACIÓN - ID
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



// 1 MINUTE CASE STUDY - SUMMARY TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.js-summary-toggle');
  const content = document.querySelector('.summary__content');

  if (!toggle || !content) return;

  function toggleSummary() {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
  }

  toggle.addEventListener('click', toggleSummary);

  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSummary();
    }
  });
});


// Nunca permitir scroll bloqueado en <html>
document.documentElement.style.overflow = '';
document.documentElement.classList.remove('no-scroll');







