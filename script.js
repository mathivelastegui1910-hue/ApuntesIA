// Smooth scroll behavior
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

// Toggle topic content
function toggleTopic(element) {
    const content = element.querySelector('.topic-content');
    const isVisible = content.style.display !== 'none';
    
    // Close all other topics
    document.querySelectorAll('.topic-card').forEach(card => {
        if (card !== element) {
            card.querySelector('.topic-content').style.display = 'none';
        }
    });
    
    // Toggle current topic
    if (isVisible) {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
        content.style.animation = 'slideInDown 0.3s ease-out';
    }
}

// Function to scroll to topics section
function scrollToTemas() {
    const temasSection = document.getElementById('temas');
    temasSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe topic cards for animation
document.querySelectorAll('.topic-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Observe resource items for animation
document.querySelectorAll('.resource-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(item);
});

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.querySelectorAll('.topic-card').forEach(card => {
            card.querySelector('.topic-content').style.display = 'none';
        });
    }
});

// Mobile menu toggle (if needed in future)
function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('.navbar');
    
    // Add mobile-responsive features here
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // Adjust navbar for mobile
        } else {
            // Reset navbar for desktop
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    
    // Log page load
    console.log('ApuntesIA website loaded successfully!');
});

// Add page analytics (optional)
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
}

// Track topic clicks
document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', function() {
        const topicTitle = this.querySelector('h3').textContent;
        trackEvent('topic_clicked', { topic: topicTitle });
    });
});
