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

 