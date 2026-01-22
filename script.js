// Language Toggle Functionality
document.getElementById('lang-toggle').addEventListener('click', function() {
    const enElements = document.querySelectorAll('.en');
    const hiElements = document.querySelectorAll('.hi');
    
    enElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });
    
    hiElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });
    
    // Update button text
    this.textContent = this.textContent === 'English / हिंदी' ? 'हिंदी / English' : 'English / हिंदी';
});

// Smooth Scroll for Nav Links (already handled by CSS scroll-behavior, but ensuring JS compatibility)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});