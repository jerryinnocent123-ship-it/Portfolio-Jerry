// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Variables
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const projectCards = document.querySelectorAll('.project-card');
    const skillBars = document.querySelectorAll('.skill-bar');
    const contactForm = document.getElementById('contactForm');
    const currentYearSpan = document.getElementById('currentYear');
    const scrollTopBtn = document.createElement('button');

    // Initialisation
    init();

    function init() {
        // Mettre l'année courante dans le footer
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }

        // Créer le bouton scroll to top
        createScrollTopButton();

        // Événements
        setupEventListeners();

        // Vérifier la position de scroll au chargement
        checkScroll();

        // Observer les sections pour les animations
        observeSections();

        // Observer les cartes de projets
        observeProjects();

        // Animer les barres de compétences si visibles
        animateSkillsOnLoad();

        // Dans la fonction init(), ajoutez :
initThemeToggle();

// Ajoutez cette nouvelle fonction
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Vérifier si un thème est déjà sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.classList.add('dark');
    }
    
    // Gérer le clic sur le bouton
    themeToggle.addEventListener('click', function() {
        this.classList.toggle('dark');
        document.body.classList.toggle('dark-mode');
        
        // Sauvegarder la préférence
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}
    }

    // Créer le bouton scroll to top
    function createScrollTopButton() {
        scrollTopBtn.className = 'scroll-top';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.setAttribute('aria-label', 'Retour en haut');
        document.body.appendChild(scrollTopBtn);

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Configurer les écouteurs d'événements
    function setupEventListeners() {
        // Menu hamburger
        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }

        // Navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Scroll events
        window.addEventListener('scroll', function() {
            checkScroll();
            updateActiveNavLink();
        });

        // Formulaire
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        // Click outside menu to close
        document.addEventListener('click', function(e) {
            if (navMenu && navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // Observer les sections pour les animations
    function observeSections() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Si c'est la section compétences, animer les barres
                    if (entry.target.id === 'skills') {
                        animateSkillBars();
                    }
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Observer les projets
    function observeProjects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.2 });

        projectCards.forEach(card => {
            observer.observe(card);
        });
    }

    // Animer les barres de compétences
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width') || '0';
            bar.style.width = width + '%';
        });
    }

    // Animer les barres au chargement si visibles
    function animateSkillsOnLoad() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection && isElementInViewport(skillsSection)) {
            animateSkillBars();
        }
    }

    // Vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Gérer le scroll
    function checkScroll() {
        // Header background change
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll to top button
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }

    // Mettre à jour le lien actif dans la navigation
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Toggle menu mobile
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    // Fermer le menu mobile
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // Gérer la soumission du formulaire
    function handleFormSubmit(e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.submit-btn');
        const formMessage = document.getElementById('formMessage');
        
        // Récupérer les champs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Valider les champs
        let isValid = true;

        [name, email, subject, message].forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        // Valider l'email
        if (email.value.trim() && !isValidEmail(email.value)) {
            email.classList.add('error');
            isValid = false;
        }

        if (!isValid) {
            showFormMessage('Veuillez remplir tous les champs correctement.', 'error');
            return;
        }

        // Simuler l'envoi du formulaire
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span> Envoi...';

        setTimeout(() => {
            // Réinitialiser le formulaire
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer le message';
            
            // Afficher le message de succès
            showFormMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.', 'success');
            
            // Cacher le message après 5 secondes
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1500);
    }

    // Afficher un message dans le formulaire
    function showFormMessage(text, type) {
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = text;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
    }

    // Valider l'email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animation des titres au survol
    const titles = document.querySelectorAll('.section-title, .category-title');
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Ajouter une classe pour les éléments au survol
    const cards = document.querySelectorAll('.project-card, .contact-method');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animation des tags de compétences
    const tags = document.querySelectorAll('.tech-tag, .tool-tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Prévenir le rechargement de la page sur les liens vides
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.error);
});

// Support pour le mode hors-ligne
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function(error) {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}
