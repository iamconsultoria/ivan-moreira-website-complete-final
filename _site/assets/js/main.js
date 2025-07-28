// Theme management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Mobile menu management
class MobileMenu {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        
        if (navMenu && mobileToggle) {
            if (this.isOpen) {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.backgroundColor = 'var(--background-primary)';
                navMenu.style.padding = 'var(--spacing-lg)';
                navMenu.style.borderTop = '1px solid var(--border-color)';
                mobileToggle.classList.add('active');
            } else {
                navMenu.style.display = '';
                navMenu.style.flexDirection = '';
                navMenu.style.position = '';
                navMenu.style.top = '';
                navMenu.style.left = '';
                navMenu.style.right = '';
                navMenu.style.backgroundColor = '';
                navMenu.style.padding = '';
                navMenu.style.borderTop = '';
                mobileToggle.classList.remove('active');
            }
        }
    }

    bindEvents() {
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => this.toggle());
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const navbar = document.querySelector('.navbar');
            if (this.isOpen && navbar && !navbar.contains(e.target)) {
                this.toggle();
            }
        });

        // Close menu when window is resized to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isOpen) {
                this.toggle();
            }
        });
    }
}

// Smooth scrolling for anchor links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

// Navbar scroll effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollY = window.scrollY;
        this.init();
    }

    init() {
        if (this.navbar) {
            this.bindEvents();
        }
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    this.navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
                }
            } else {
                this.navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    this.navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                }
            }
            
            this.lastScrollY = currentScrollY;
        });
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                }
            );
            
            this.observeElements();
        }
    }

    observeElements() {
        const elements = document.querySelectorAll('.stat-item, .service-card, .blog-card, .testimonial-card');
        elements.forEach(el => {
            if (this.observer) {
                this.observer.observe(el);
            }
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                if (this.observer) {
                    this.observer.unobserve(entry.target);
                }
            }
        });
    }
}

// Contact form handling
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            // Here you would typically send the form data to your backend
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            this.showMessage('Thank you! Your message has been sent successfully.', 'success');
            this.form.reset();
        } catch (error) {
            // Show error message
            this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    showMessage(message, type) {
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        
        // Insert message after form
        this.form.parentNode.insertBefore(messageEl, this.form.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 5000);
    }
}

// Newsletter subscription
class Newsletter {
    constructor() {
        this.forms = document.querySelectorAll('.newsletter-form');
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e, form));
        });
    }

    async handleSubmit(e, form) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;
        
        try {
            // Here you would typically send the email to your newsletter service
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            this.showMessage(form, 'Thank you for subscribing!', 'success');
            form.reset();
        } catch (error) {
            // Show error message
            this.showMessage(form, 'Sorry, there was an error. Please try again.', 'error');
        } finally {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    showMessage(form, message, type) {
        const messageEl = document.createElement('div');
        messageEl.className = `newsletter-message ${type}`;
        messageEl.textContent = message;
        
        // Insert message after form
        form.parentNode.insertBefore(messageEl, form.nextSibling);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.parentNode.removeChild(messageEl);
            }
        }, 3000);
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    preloadCriticalResources() {
        // Preload critical images
        const criticalImages = [
            '/assets/images/ivan-hero.jpg',
            '/assets/images/ivan-profile.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new MobileMenu();
    new SmoothScroll();
    new NavbarScroll();
    new AnimationObserver();
    new ContactForm();
    new Newsletter();
    new PerformanceOptimizer();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any animations or heavy operations
    } else {
        // Resume operations
    }
});

// Export for potential use in other scripts
window.IvanMoreiraWebsite = {
    ThemeManager,
    MobileMenu,
    SmoothScroll,
    NavbarScroll,
    AnimationObserver,
    ContactForm,
    Newsletter,
    PerformanceOptimizer
};

