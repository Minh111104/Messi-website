// Enhanced Messi Fan Club JavaScript

// Initialize the page with smooth animations
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations
    animateElements();
    
    // Add confetti effect to the page
    addConfettiEffect();
});

// Show welcome message with enhanced animations
function showWelcome() {
    const container = document.querySelector('.container');
    const welcomeMessage = document.getElementById('welcome-message');
    
    // Animate out the question section
    container.style.transform = 'scale(0.8)';
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.display = 'none';
        
        // Show welcome message with animation
        welcomeMessage.style.display = 'block';
        welcomeMessage.style.opacity = '0';
        welcomeMessage.style.transform = 'translateY(30px)';
        
        // Trigger entrance animation
        setTimeout(() => {
            welcomeMessage.style.transition = 'all 0.8s ease';
            welcomeMessage.style.opacity = '1';
            welcomeMessage.style.transform = 'translateY(0)';
            
            // Animate stat cards
            animateStatCards();
            
            // Trigger celebration effects
            triggerCelebration();
        }, 100);
    }, 300);
}

// Enhanced button movement with better physics
function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Add shake animation first
    noBtn.style.animation = 'shake 0.5s ease-in-out';
    
    // Change position to absolute for movement
    noBtn.style.position = 'fixed';
    
    // Calculate new positions with boundary checking
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    
    let newLeft, newTop;
    let attempts = 0;
    const maxAttempts = 10;
    
    do {
        newLeft = Math.floor(Math.random() * (viewportWidth - buttonWidth));
        newTop = Math.floor(Math.random() * (viewportHeight - buttonHeight));
        attempts++;
    } while (
        attempts < maxAttempts && 
        (Math.abs(newLeft - parseInt(noBtn.style.left || 0)) < 100 || 
         Math.abs(newTop - parseInt(noBtn.style.top || 0)) < 100)
    );
    
    // Ensure button stays within viewport
    newLeft = Math.max(0, Math.min(newLeft, viewportWidth - buttonWidth));
    newTop = Math.max(0, Math.min(newTop, viewportHeight - buttonHeight));
    
    // Smooth movement animation
    noBtn.style.transition = 'all 0.3s ease';
    noBtn.style.left = `${newLeft}px`;
    noBtn.style.top = `${newTop}px`;
    
    // Increase Yes button size with animation
    const yesBtn = document.getElementById('yes-btn');
    const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.transition = 'all 0.3s ease';
    yesBtn.style.fontSize = `${currentSize + 3}px`;
    yesBtn.style.transform = 'scale(1.1)';
    
    // Reset Yes button scale after animation
    setTimeout(() => {
        yesBtn.style.transform = 'scale(1)';
    }, 300);
    
    // Add floating effect to No button
    noBtn.style.animation = 'float 2s ease-in-out infinite';
}

// Animate stat cards entrance
function animateStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
}

// Trigger celebration effects
function triggerCelebration() {
    // Add celebration animation to welcome title
    const welcomeTitle = document.querySelector('.welcome-title');
    welcomeTitle.style.animation = 'celebrate 1s ease-in-out';
    
    // Add sparkle effects
    addSparkles();
    
    // Play celebration sound (if available)
    playCelebrationSound();
}

// Add sparkle effects
function addSparkles() {
    const welcomeSection = document.querySelector('.welcome-section');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createSparkle(welcomeSection);
        }, i * 100);
    }
}

// Create individual sparkle
function createSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: absolute;
        font-size: 20px;
        color: #ffd700;
        pointer-events: none;
        z-index: 1000;
        animation: sparkleFloat 2s ease-out forwards;
    `;
    
    // Random position
    const rect = container.getBoundingClientRect();
    sparkle.style.left = Math.random() * rect.width + 'px';
    sparkle.style.top = Math.random() * rect.height + 'px';
    
    container.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 2000);
}

// Animate elements on page load
function animateElements() {
    const elements = document.querySelectorAll('.hero-title, .hero-description, .question-card');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Add confetti effect to the page
function addConfettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 100);
    }
}

// Create individual confetti piece
function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        top: -10px;
        left: ${Math.random() * window.innerWidth}px;
        z-index: 999;
        pointer-events: none;
        animation: confettiFall 3s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
        }
    }, 3000);
}

// Play celebration sound (placeholder for future enhancement)
function playCelebrationSound() {
    // This could be enhanced with actual audio files
    console.log('🎉 Celebration time! 🎉');
}

// Reset page functionality
function resetPage() {
    const container = document.querySelector('.container');
    const welcomeMessage = document.getElementById('welcome-message');
    
    // Hide welcome message
    welcomeMessage.style.opacity = '0';
    welcomeMessage.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
        
        // Show question section again
        container.style.display = 'block';
        container.style.opacity = '0';
        container.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.8s ease';
            container.style.opacity = '1';
            container.style.transform = 'scale(1)';
        }, 100);
    }, 300);
    
    // Reset button positions
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    
    noBtn.style.position = 'relative';
    noBtn.style.left = 'auto';
    noBtn.style.top = 'auto';
    noBtn.style.animation = 'none';
    
    yesBtn.style.fontSize = '1.1rem';
}

// Add CSS animations dynamically
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes celebrate {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        @keyframes sparkleFloat {
            0% { 
                opacity: 1; 
                transform: translateY(0) rotate(0deg); 
            }
            100% { 
                opacity: 0; 
                transform: translateY(-100px) rotate(360deg); 
            }
        }
        
        @keyframes confettiFall {
            0% { 
                transform: translateY(-10px) rotate(0deg); 
                opacity: 1; 
            }
            100% { 
                transform: translateY(${window.innerHeight}px) rotate(720deg); 
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize dynamic styles
addDynamicStyles();

// Add smooth scrolling for better UX
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

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Reset page on Escape key
        resetPage();
    }
});

// Add touch support for mobile devices
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Swipe up to reset (if on welcome page)
    if (Math.abs(diffY) > Math.abs(diffX) && diffY > 50) {
        const welcomeMessage = document.getElementById('welcome-message');
        if (welcomeMessage.style.display !== 'none') {
            resetPage();
        }
    }
});
