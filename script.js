// Menu Mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando fetch para enviar para um backend
    
    // Simulação de envio
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    
    console.log('Dados do formulário:', formValues);
    
    // Limpar formulário
    this.reset();
    
    // Mostrar mensagem de sucesso
    alert('Mensagem enviada com sucesso!');
});

// Animação de scroll suave para elementos
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.skill-card, .about-content, .contact-content').forEach((el) => {
    observer.observe(el);
});

// Adicionar classe de animação quando o elemento estiver visível
document.querySelectorAll('.animate').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Atualizar ano do copyright
document.querySelector('footer p').textContent = `© ${new Date().getFullYear()} Leonardo Rosa. Todos os direitos reservados.`;

// Configuração das partículas
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#2563eb'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Efeito de digitação
const text = "Desenvolvedor & Suporte em TI";
const typingText = document.getElementById('typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Iniciar efeito de digitação quando a página carregar
window.addEventListener('load', typeWriter); 