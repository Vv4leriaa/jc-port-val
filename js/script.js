// ===========================================
//  EJECUCIÓN AL CARGAR EL DOCUMENTO
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================================
    //  MENÚ DE NAVEGACIÓN
    // ===========================================
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('toggle');
        });

        navLinks.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burgerMenu.classList.remove('toggle');
                }
            });
        });
    }

    // ===========================================
    //  ANIMACIÓN DE BARRAS DE PROGRESO
    // ===========================================
    const skillBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.getElementById('habilidades');

    if (skillsSection) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const progress = bar.dataset.progress;
                        bar.style.width = progress + '%';
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(skillsSection);
    }
    
    // ===========================================
    //  VALIDACIÓN Y ENVÍO DE FORMULARIO
    // ===========================================
    const form = document.querySelector('.contact-form form');
    const contactSection = document.getElementById('contacto');
    
    if (form && contactSection) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Esto es lo que detiene el envío del formulario

            // Crea y muestra el mensaje de éxito
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo muy pronto. 😊';

            // Elimina cualquier mensaje de éxito anterior
            const oldMessage = contactSection.querySelector('.success-message');
            if (oldMessage) {
                oldMessage.remove();
            }

            contactSection.appendChild(successMessage);
            
            form.reset(); // Limpia los campos del formulario

            setTimeout(() => {
                successMessage.remove();
            }, 5000); 
        });
    }

});// ===========================================
//  VALIDACIÓN Y ENVÍO DE FORMULARIO
// ===========================================
    const form = document.querySelector('.contact-form form');
    const contactSection = document.getElementById('contacto');

    form.addEventListener('submit', function(event) {
        // Detiene el envío del formulario
        event.preventDefault();

        // Puedes añadir aquí la lógica de validación
        // Por ahora, solo mostraremos un mensaje de éxito

        // Limpia el formulario
        form.reset();

        // Crea el mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo muy pronto. 😊';

        // Elimina cualquier mensaje anterior y añade el nuevo
        const oldMessage = contactSection.querySelector('.success-message');
        if (oldMessage) {
            oldMessage.remove();
        }

        contactSection.appendChild(successMessage);

        // Hace que el mensaje desaparezca después de 5 segundos
        setTimeout(() => {
            successMessage.remove();
        }, 5000); 
    });
