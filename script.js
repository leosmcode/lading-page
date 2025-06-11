// Menu Mobile
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

// Função para toggle do menu
function toggleMenu() {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        
    
// Atualizar aria-expanded
burger.setAttribute("aria-expanded", nav.classList.contains("nav-active"));
} else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle("toggle");
}

// Event listener para o burger menu
if (burger) {
    burger.addEventListener("click", toggleMenu);
}

// Fechar menu ao clicar em um link (mobile)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");
            navLinks.forEach(link => {
                link.style.animation = "";
            });
        }
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");
            navLinks.forEach(link => {
                link.style.animation = "";
            });
        }
    }
});

// Smooth Scroll para links de navegação com duração controlável
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        let targetPosition;

        if (targetId === "#inicio") {
            targetPosition = 0; // Sempre rolar para o topo para o link 'Início'
        } else if (targetElement) {
            const headerHeight = document.querySelector("header").offsetHeight;
            targetPosition = targetElement.offsetTop - headerHeight;
        } else {
            return; // Se o elemento alvo não for encontrado, não faz nada
        }

        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duração da animação em milissegundos (1 segundo)
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * easeInOutQuad(percentage));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        // Função de easing (aceleração/desaceleração)
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
    });
});

// Formulário de Contato
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar para um backend
        
        // Simulação de envio
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        console.log("Dados do formulário:", formValues);
        
        // Limpar formulário
        this.reset();
        
        // Mostrar mensagem de sucesso
        alert("Mensagem enviada com sucesso!");
    });
}

// Animação de scroll suave para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll(".skill-card, .about-content, .contact-content, .project-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
});

// Atualizar ano do copyright
const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} Leonardo Rosa. Todos os direitos reservados.`;
}

// Efeito de digitação
const text = "Desenvolvedor Web e Suporte em TI";
const typingText = document.getElementById("typing-text");

function typeWriter() {
    if (typingText) {
        let i = 0;
        typingText.innerHTML = "";
        
        function type() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        type();
    }
}

// Iniciar efeito de digitação quando a página carregar
window.addEventListener("load", typeWriter);

// Configuração das partículas (se particles.js estiver carregado)
document.addEventListener("DOMContentLoaded", function() {
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00ff00"
                },
                shape: {
                    type: "line",
                    stroke: {
                        width: 1,
                        color: "#00ff00"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 20,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00ff00",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
});

// Melhorar performance em dispositivos móveis
if (window.innerWidth <= 768) {
    // Reduzir animações em dispositivos móveis
    document.documentElement.style.setProperty("--animation-duration", "0.3s");
    
    // Otimizar scroll
    let ticking = false;
    
    function updateScrollEffects() {
        // Adicionar efeitos de scroll otimizados aqui se necessário
        ticking = false;
    }
    
    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// Adicionar classe para indicar que o JavaScript foi carregado
document.documentElement.classList.add("js-loaded");

