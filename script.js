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

    function toggleProjects() {
    const hiddenCards = document.querySelectorAll('.project-card');
    const viewAllBtn = document.getElementById('view-all-btn');
    
    hiddenCards.forEach(card => {
        if (card.classList.contains('hidden')) {
            // Show cards
            card.classList.remove('hidden');
            card.classList.add('fade-in');
            viewAllBtn.innerHTML = `
                Show Less
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
            `;
        } else {
            // Hide cards
            card.classList.add('hidden');
            viewAllBtn.innerHTML = `
                View All Projects
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            `;
        }
    });
}

 // FAQ Functionality
 document.addEventListener('click', function(e) {
     const faqButton = e.target.closest('.faq-button');
     if (!faqButton) return;
 
     // Toggle active state of the clicked button
     const wasActive = faqButton.classList.contains('active');
     
     // Close all other FAQ items
     document.querySelectorAll('.faq-button').forEach(btn => {
         btn.classList.remove('active');
         const content = btn.nextElementSibling;
         if (content) {
             content.style.maxHeight = null;
             content.style.opacity = '0';
         }
     });
 
     // Toggle the clicked item
     if (!wasActive) {
         faqButton.classList.add('active');
         const content = faqButton.nextElementSibling;
         if (content) {
             content.style.maxHeight = content.scrollHeight + 'px';
             content.style.opacity = '1';
         }
     }
 });