// Portfolio JavaScript - Professional Implementation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initScrollAnimations();
    initCounters();
    initVisitorCounter();
    initTypingEffect();
    initSmoothScrolling();
    updateYear();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active navigation on scroll
    window.addEventListener('scroll', throttle(() => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 100));
    
    // Smooth scroll on navigation click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll-based animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Special handling for timeline items
                if (entry.target.classList.contains('timeline-item')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
                
                // Special handling for project cards
                if (entry.target.classList.contains('project-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 150;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(`
        .project-card,
        .timeline-item,
        .contact-card,
        .tech-icon,
        .code-block,
        .stats-card
    `);
    
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Animated counters
function initCounters() {
    const counters = [
        { id: 'projects-count', target: 15, suffix: '+' },
        { id: 'experience-years', target: 2, suffix: '+' }
    ];
    
    const animateCounter = (element, target, suffix = '') => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 40);
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = counters.find(c => c.id === entry.target.id);
                if (counter) {
                    animateCounter(entry.target, counter.target, counter.suffix);
                    counterObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
            counterObserver.observe(element);
        }
    });
}

// Typing effect for code block
function initTypingEffect() {
    const codeLines = [
        '// I like to make things',
        'const buildingSomething = () => {',
        '  return "amazing projects";',
        '};',
        '',
        '// Always learning new tech',
        'const skills = [...frontend, ...backend];'
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    const codeElement = document.querySelector('.code-content');
    const cursor = document.querySelector('.typing-cursor');
    
    if (!codeElement || !cursor) return;
    
    function typeCode() {
        if (currentLine < codeLines.length) {
            const line = codeLines[currentLine];
            
            if (currentChar < line.length) {
                // Create or update the current line element
                let lineElement = codeElement.children[currentLine];
                if (!lineElement) {
                    lineElement = document.createElement('div');
                    codeElement.appendChild(lineElement);
                }
                
                lineElement.innerHTML = highlightSyntax(line.substring(0, currentChar + 1));
                currentChar++;
                setTimeout(typeCode, 50);
            } else {
                currentLine++;
                currentChar = 0;
                setTimeout(typeCode, 500);
            }
        } else {
            // Restart after a pause
            setTimeout(() => {
                codeElement.innerHTML = '';
                currentLine = 0;
                currentChar = 0;
                typeCode();
            }, 3000);
        }
    }
    
    function highlightSyntax(text) {
        return text
            .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
            .replace(/(const|let|var|function|return)/g, '<span class="text-purple-400">$1</span>')
            .replace(/(["'].*?["'])/g, '<span class="text-green-400">$1</span>')
            .replace(/(\w+)(?=\s*=)/g, '<span class="text-blue-400">$1</span>');
    }
    
    // Start typing effect when code block is visible
    const codeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeCode, 1000);
                codeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    codeObserver.observe(codeElement.parentElement);
}

// Visitor counter
async function initVisitorCounter() {
    try {
        const response = await fetch("https://visitor-tracker.aroy262692.workers.dev/visit");
        
        if (!response.ok) {
            throw new Error('Failed to fetch visitor count');
        }
        
        const data = await response.json();
        const counterElement = document.getElementById('visitor-counter');
        
        if (counterElement && data.totalVisitors && data.totalUniqueVisitors) {
            // Animate the counter appearance
            counterElement.style.opacity = '0';
            counterElement.textContent = `Visitors: ${data.totalVisitors} | Unique: ${data.totalUniqueVisitors}`;
            
            // Fade in the counter
            setTimeout(() => {
                counterElement.style.transition = 'opacity 0.5s ease';
                counterElement.style.opacity = '1';
            }, 500);
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement) {
            counterElement.textContent = 'Visitor counter temporarily unavailable';
            counterElement.style.opacity = '0.5';
        }
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update current year
function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Enhanced hover effects for tech icons
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        const rate = scrolled * -0.3;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
}, 10));

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Preload critical images
function preloadImages() {
    const images = [
        'https://avatars.githubusercontent.com/u/115141578?v=4'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
preloadImages();

// Handle form submissions (if contact form is added later)
function handleFormSubmission(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual implementation)
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.classList.add('bg-green-600');
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('bg-green-600');
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Enhanced accessibility
function enhanceAccessibility() {
    // Add focus indicators for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Announce page changes for screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
    
    // Announce section changes
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.id || 'section';
                announcer.textContent = `Entered ${sectionName} section`;
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialize accessibility enhancements
enhanceAccessibility();

// Console easter egg for developers
console.log(`
%c🚀 Hey there, fellow developer! 

Thanks for checking out my portfolio. 
If you're interested in collaborating or have any questions about the code, 
feel free to reach out!

- Anish Roy
`, 'color: #3b82f6; font-size: 14px; font-weight: bold;');

console.log(`
%cTech Stack Used:
• HTML5 & Semantic Markup
• Tailwind CSS + Custom CSS
• Vanilla JavaScript (ES6+)
• Intersection Observer API
• CSS Grid & Flexbox
• Font Awesome Icons
• Google Fonts (Inter & JetBrains Mono)
`, 'color: #10b981; font-size: 12px;');