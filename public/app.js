// ==============================
// FRONT END - TECH GLASS
// ==============================

// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    // ==========================
    // SELECTORES
    // ==========================
    const header = document.querySelector(".header");
    const heroButton = document.querySelector(".btn-primary");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");



        // Opciones del Header para el scroll fluido
    if (header) {
        header.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    }

    // ==========================
    // SCROLL SUAVE DESDE MENÚ
    // ==========================
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const target = link.getAttribute("href");

            // Solo intercepta enlaces internos tipo "#algo"
            if (target && target.startsWith("#")) {
                e.preventDefault();

                const targetSection = document.querySelector(target);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // ==========================
    // ANIMACIÓN DE REVELADO
    // ==========================
    const revealElements = document.querySelectorAll(".stat-card, .card, .hero-content, .hero-image");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        revealObserver.observe(el);
    });

    // ==========================
    // PARTÍCULAS SIMPLES DE FONDO
    // ==========================
    const createParticles = () => {
        const body = document.body;

        for (let i = 0; i < 12; i++) {
            const particle = document.createElement("span");
            particle.className = "particle";

            const size = Math.random() * 6 + 3;
            const left = Math.random() * 100;
            const delay = Math.random() * 8;
            const duration = Math.random() * 12 + 8;

            particle.style.cssText = `
                position: fixed;
                top: 100%;
                left: ${left}%;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(0, 212, 255, 0.25);
                pointer-events: none;
                filter: blur(1px);
                z-index: 0;
                animation: floatUp ${duration}s linear ${delay}s infinite;
            `;

            body.appendChild(particle);
        }
    };

    createParticles();

    // ==========================
    // ESTILO PARA LINK ACTIVO
    // ==========================
    const style = document.createElement("style");
    style.textContent = `
        .navbar a.active {
            color: #00d4ff;
            text-shadow: 0 0 12px rgba(0, 212, 255, 0.45);
        }

        @keyframes floatUp {
            0% {
                transform: translateY(0);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
            }
            100% {
                transform: translateY(-120vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

//CONTACT SECTION
document.addEventListener("DOMContentLoaded", () => {

    const phoneNumber = "523333025080"; // cambiarlo

    

    function openWhatsApp(message) {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    }

    // BOTONES DE COTIZAR DIRECTO A WHATSAPP
    document.querySelectorAll('[data-whatsapp="cotizar"]').forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const message = `
Hola, quiero cotizar.

Me interesa recibir información sobre los productos de la Comercializadora Ortega.
            `.trim();

            openWhatsApp(message);
        });
    });

    // ENLACE CONTACTO -> FINAL DE LA SECCIÓN
    document.querySelectorAll('[data-scroll="contacto"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            if (contactEnd) {
                contactEnd.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                });
            }
        });
    });

    // FORMULARIO -> WHATSAPP
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const city = document.getElementById("city").value.trim();
            const message = document.getElementById("message").value.trim();

            const text = `
Hola, quiero cotizar.

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Ciudad: ${city}
Comentarios: ${message}
            `.trim();

            openWhatsApp(text);
        });
    }
});