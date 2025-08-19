// Game Portfolio Script
class GamePortfolio {
    constructor() {
        this.currentLevel = 1;
        this.soundEnabled = true;
        this.scrollPosition = 0;
        this.sections = [];
        this.particles = [];
        
        this.init();
    }

    init() {
        this.setupLoading();
        this.setupSections();
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupParticles();
        this.setupTypingEffect();
        this.setupSoundEffects();
        this.setupProgressBar();
        this.setupSkillBars();
        
        // Start the game after loading
        setTimeout(() => this.startGame(), 2000);
    }

    setupLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        const progressBar = document.querySelector('.loading-progress');
        
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(loadingInterval);
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 500);
            }
        }, 100);
    }

    setupSections() {
        this.sections = [
            { id: 'hero', level: 1, name: 'START' },
            { id: 'about', level: 2, name: 'ABOUT' },
            { id: 'skills', level: 3, name: 'SKILLS' },
            { id: 'experience', level: 4, name: 'QUEST' },
            { id: 'projects', level: 5, name: 'ACHIEVEMENTS' },
            { id: 'contact', level: 6, name: 'CONTACT' }
        ];
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const target = item.getAttribute('data-target');
                this.scrollToSection(target);
                this.playSound('click');
            });
        });

        // Update active nav item on scroll
        window.addEventListener('scroll', () => {
            this.updateNavigation();
            this.updateProgressBar();
            this.updateCurrentLevel();
        });
    }

    setupScrollAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSection(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.game-section').forEach(section => {
            observer.observe(section);
        });

        // Parallax effect
        window.addEventListener('scroll', () => {
            this.handleParallax();
        });
    }

    setupParticles() {
        const particlesContainer = document.getElementById('particles');
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = '#00ff88';
            particle.style.borderRadius = '50%';
            particle.style.opacity = Math.random();
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            particlesContainer.appendChild(particle);
            this.particles.push(particle);
        }

        // Animate particles
        setInterval(() => {
            this.animateParticles();
        }, 100);
    }

    setupTypingEffect() {
        const texts = [
            'Full Stack Developer',
            'Game Enthusiast',
            'Problem Solver',
            'Creative Coder'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typedElement = document.getElementById('typed-text');
        
        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        };
        
        type();
    }

    setupSoundEffects() {
        const soundToggle = document.getElementById('sound-toggle');
        
        soundToggle.addEventListener('click', () => {
            this.soundEnabled = !this.soundEnabled;
            soundToggle.innerHTML = this.soundEnabled ? 
                '<i class="fas fa-volume-up"></i>' : 
                '<i class="fas fa-volume-mute"></i>';
        });

        // Add click sounds to interactive elements
        document.querySelectorAll('button, .nav-item, .contact-item, .project-link').forEach(element => {
            element.addEventListener('click', () => this.playSound('click'));
        });

        document.querySelectorAll('.project-card, .stat-card, .quest-content').forEach(element => {
            element.addEventListener('mouseenter', () => this.playSound('hover'));
        });
    }

    setupProgressBar() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            const progressBar = document.getElementById('progress-bar');
            
            progressBar.style.width = (scrollPercent * 100) + '%';
        });
    }

    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const skillLevel = bar.getAttribute('data-skill');
                bar.style.width = skillLevel + '%';
            });
        };

        // Animate when skills section is visible
        const skillsSection = document.getElementById('skills');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateSkillBars, 500);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    startGame() {
        document.body.classList.add('game-started');
        
        // Start button functionality
        const startButton = document.getElementById('start-adventure');
        startButton.addEventListener('click', () => {
            this.scrollToSection('about');
            this.playSound('levelUp');
        });

        // Add hover effects
        this.addHoverEffects();
    }

    scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    updateNavigation() {
        const scrollPosition = window.scrollY;
        const navItems = document.querySelectorAll('.nav-item');
        
        this.sections.forEach((section, index) => {
            const element = document.getElementById(section.id);
            if (element) {
                const offsetTop = element.offsetTop - 100;
                const offsetBottom = offsetTop + element.offsetHeight;
                
                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    navItems.forEach(item => item.classList.remove('active'));
                    navItems[index]?.classList.add('active');
                }
            }
        });
    }

    updateCurrentLevel() {
        const scrollPosition = window.scrollY;
        const levelIndicator = document.getElementById('current-level');
        
        this.sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                const offsetTop = element.offsetTop - 200;
                const offsetBottom = offsetTop + element.offsetHeight;
                
                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    if (this.currentLevel !== section.level) {
                        this.currentLevel = section.level;
                        levelIndicator.textContent = `LEVEL ${section.level}`;
                        this.playSound('levelUp');
                        this.createLevelUpEffect();
                    }
                }
            }
        });
    }

    updateProgressBar() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const progressBar = document.getElementById('progress-bar');
        
        progressBar.style.width = (scrollPercent * 100) + '%';
    }

    animateSection(section) {
        const elements = section.querySelectorAll('.stat-card, .skill-category, .quest-item, .project-card');
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
                this.playSound('appear');
            }, index * 200);
        });
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    animateParticles() {
        this.particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
                particle.style.top = '-10px';
                particle.style.left = Math.random() * 100 + '%';
            }
        });
    }

    addHoverEffects() {
        // Add glow effect on hover
        document.querySelectorAll('.project-card, .stat-card, .contact-item').forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.boxShadow = '';
            });
        });

        // Character sprite interaction
        const heroAvatar = document.getElementById('hero-avatar');
        heroAvatar.addEventListener('click', () => {
            heroAvatar.style.animation = 'none';
            setTimeout(() => {
                heroAvatar.style.animation = 'float 3s ease-in-out infinite';
            }, 100);
            this.playSound('click');
        });
    }

    createLevelUpEffect() {
        const effect = document.createElement('div');
        effect.innerHTML = '🎉 LEVEL UP! 🎉';
        effect.style.position = 'fixed';
        effect.style.top = '50%';
        effect.style.left = '50%';
        effect.style.transform = 'translate(-50%, -50%)';
        effect.style.fontSize = '2rem';
        effect.style.fontWeight = 'bold';
        effect.style.color = '#00ff88';
        effect.style.textShadow = '0 0 20px #00ff88';
        effect.style.zIndex = '10000';
        effect.style.pointerEvents = 'none';
        effect.style.animation = 'fadeInOut 2s ease-in-out';
        
        document.body.appendChild(effect);
        
        setTimeout(() => {
            document.body.removeChild(effect);
        }, 2000);
    }

    playSound(type) {
        if (!this.soundEnabled) return;
        
        // Create audio context for sound effects
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        const soundMap = {
            click: { frequency: 800, duration: 0.1 },
            hover: { frequency: 600, duration: 0.05 },
            levelUp: { frequency: 1000, duration: 0.3 },
            appear: { frequency: 400, duration: 0.2 }
        };
        
        const sound = soundMap[type];
        if (!sound) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = sound.frequency;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + sound.duration);
    }
}

// Additional CSS animations
const additionalStyles = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
    }
    
    .game-started .stat-card,
    .game-started .skill-category,
    .game-started .quest-item,
    .game-started .project-card {
        transform: translateY(50px);
        opacity: 0;
        transition: all 0.6s ease;
    }
`;

// Add additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GamePortfolio();
});

// Add some extra interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Easter egg: Konami code
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konami.join(',')) {
            // Easter egg activated!
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 3000);
            
            alert('🎮 Easter Egg Activated! Chế độ Matrix ON! 🎮');
        }
    });

    // Add mouse trail effect
    let mouseTrail = [];
    document.addEventListener('mousemove', (e) => {
        mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        // Remove old trail points
        mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
        
        // Create trail effect
        if (mouseTrail.length > 1) {
            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.width = '4px';
            trail.style.height = '4px';
            trail.style.background = '#00ff88';
            trail.style.borderRadius = '50%';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9999';
            trail.style.opacity = '0.7';
            trail.style.animation = 'fadeOut 0.5s ease-out forwards';
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 500);
        }
    });
});

// Add fadeOut animation for mouse trail
const trailStyles = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;

const trailStyleSheet = document.createElement('style');
trailStyleSheet.textContent = trailStyles;
document.head.appendChild(trailStyleSheet);
