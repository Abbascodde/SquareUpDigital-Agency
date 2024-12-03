// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu functionality can be added here
    
    // Add scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
});

 
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
});

// Logo slider interaction
document.addEventListener('DOMContentLoaded', function() {
    const logoSlide = document.querySelector('.logos-slide');
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    if (logoSlide) {
        // Mouse events for desktop
        logoSlide.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            logoSlide.style.animationPlayState = 'paused';
            startX = e.pageX - logoSlide.offsetLeft;
            scrollLeft = logoSlide.scrollLeft;
        });

        logoSlide.addEventListener('mouseleave', () => {
            isMouseDown = false;
            logoSlide.style.animationPlayState = 'running';
        });

        logoSlide.addEventListener('mouseup', () => {
            isMouseDown = false;
            logoSlide.style.animationPlayState = 'running';
        });

        logoSlide.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - logoSlide.offsetLeft;
            const walk = (x - startX) * 2;
            logoSlide.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        logoSlide.addEventListener('touchstart', (e) => {
            logoSlide.style.animationPlayState = 'paused';
        });

        logoSlide.addEventListener('touchend', () => {
            logoSlide.style.animationPlayState = 'running';
        });
    }
});

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeLogoSlider();
    initializeSmoothScroll();
    initializeScrollAnimations();
});

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuButton || !mobileMenu) return;

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Logo slider functionality
function initializeLogoSlider() {
    const logoSlide = document.querySelector('.logos-slide');
    if (!logoSlide) return;

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
        isMouseDown = true;
        logoSlide.style.animationPlayState = 'paused';
        startX = e.pageX - logoSlide.offsetLeft;
        scrollLeft = logoSlide.scrollLeft;
    };

    const handleMouseLeave = () => {
        isMouseDown = false;
        logoSlide.style.animationPlayState = 'running';
    };

    const handleMouseUp = () => {
        isMouseDown = false;
        logoSlide.style.animationPlayState = 'running';
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - logoSlide.offsetLeft;
        const walk = (x - startX) * 2;
        logoSlide.scrollLeft = scrollLeft - walk;
    };

    // Desktop events
    logoSlide.addEventListener('mousedown', handleMouseDown);
    logoSlide.addEventListener('mouseleave', handleMouseLeave);
    logoSlide.addEventListener('mouseup', handleMouseUp);
    logoSlide.addEventListener('mousemove', handleMouseMove);

    // Mobile events
    logoSlide.addEventListener('touchstart', () => {
        logoSlide.style.animationPlayState = 'paused';
    });

    logoSlide.addEventListener('touchend', () => {
        logoSlide.style.animationPlayState = 'running';
    });
}

// Smooth scrolling
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
}

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const answer = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');

            // Toggle the current item
            answer.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');

            // Optional: Close other open items
            const otherItems = document.querySelectorAll('.faq-item');
            otherItems.forEach(item => {
                if (item !== faqItem) {
                    const otherAnswer = item.querySelector('.faq-answer');
                    const otherIcon = item.querySelector('.faq-icon');
                    otherAnswer.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                }
            });
        });
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const subject = this.querySelector('#subject').value;
            const message = this.querySelector('#message').value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }

            // Here you would typically send the email to your server
            // For now, we'll just show a success message
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
});