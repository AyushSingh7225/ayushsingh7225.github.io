// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const toggleEmoji = document.querySelector('.toggle-emoji');
const toggleText = darkModeToggle.querySelector('span:last-child');

// Check for saved theme preference or default to dark mode
const currentTheme = 'dark'; // Default to dark since your original design was dark

darkModeToggle.addEventListener('click', () => {
    if (body.dataset.theme === 'light') {
        body.dataset.theme = 'dark';
        toggleEmoji.textContent = '🌙';
        toggleText.textContent = 'Dark Mode';
    } else {
        body.dataset.theme = 'light';
        toggleEmoji.textContent = '☀️';
        toggleText.textContent = 'Light Mode';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all tip cards for scroll animations
document.querySelectorAll('.tip-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// Smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add parallax effect to hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add loading animation when page loads
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add smooth hover effects for images
document.querySelectorAll('.tip-image, .overview-image, .hero-image').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// Add click ripple effect for buttons
darkModeToggle.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('fade-in');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});