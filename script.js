 // Wait for the DOM to be fully loaded
 document.addEventListener('DOMContentLoaded', function() {
     // Mobile menu functionality
     const mobileMenuButton = document.getElementById('mobile-menu-button');
     const mobileMenu = document.getElementById('mobile-menu');
 
     if (mobileMenuButton && mobileMenu) {
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
 
     // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             const targetId = this.getAttribute('href');
             const targetElement = document.querySelector(targetId);
             if (targetElement) {
                 targetElement.scrollIntoView({
                     behavior: 'smooth'
                 });
             }
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

 
    // FAQ functionality
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = button.querySelector('.faq-icon');
            
            // Toggle the answer visibility
            answer.classList.toggle('hidden');
            
            // Rotate the icon
            icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            
            // Close other FAQ items
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherFaqItem = otherButton.parentElement;
                    const otherAnswer = otherFaqItem.querySelector('.faq-answer');
                    const otherIcon = otherButton.querySelector('.faq-icon');
                    
                    otherAnswer.classList.add('hidden');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
        });
    });