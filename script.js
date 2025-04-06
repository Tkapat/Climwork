// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Update cart count
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// Add to cart functionality
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
        
        // Animation feedback
        button.textContent = 'Added!';
        button.style.backgroundColor = '#27ae60';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '#2ecc71';
        }, 1000);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Video lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target.querySelector('iframe');
                // Remove the lazy loading for Google Drive videos as they handle it themselves
                if (iframe) {
                    iframe.style.opacity = '1';
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    videoCards.forEach(card => observer.observe(card));
});

// Mobile menu toggle (for future implementation)
const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').prepend(mobileMenuButton);

mobileMenuButton.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}); 