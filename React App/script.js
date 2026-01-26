// --- Parallax Effect for Madhubani Animals ---
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Cheetah moves subtly to stay within view
    const cheetah = document.querySelector('.cheetah');
    if(cheetah) {
        cheetah.style.transform = `translateY(${scrolled * -0.05}px)`;
    }
    
    // Fish swims higher up
    const fish = document.querySelector('.fish');
    if(fish) {
        // Subtle swimming horizontal motion
        fish.style.transform = `translateX(${scrolled * 0.03}px) rotate(-10deg)`;
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});