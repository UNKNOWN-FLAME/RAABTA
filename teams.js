// --- Navbar Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('expanded');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});

// --- Optional: Smooth Scroll Animation for Team Members ---
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    teamMembers.forEach(member => {
        observer.observe(member);
    });
});