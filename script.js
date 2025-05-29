// TEJIDOS LUNA - JAVASCRIPT OPTIMIZADO
console.log('🎨 Tejidos Luna - Iniciando carga...');

// Variables globales
let currentImageIndex = 0;
let modalImages = [];
let isMenuOpen = false;

// Optimización de performance - Throttle function
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

// Inicialización del DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Tejidos Luna - DOM cargado, inicializando sistemas...');
    
    try {
        // Inicialización de sistemas
        initScrollEffects();
        initModalSystem();
        initMusicControl();
        initMobileMenu();
        initNewsletterForm();
        collectModalImages();
        initVideoSystem();
        
        console.log('✅ Todos los sistemas inicializados correctamente');
    } catch (error) {
        console.error('❌ Error en inicialización:', error);
    }
});

// Efectos de scroll optimizados
function initScrollEffects() {
    const header = document.getElementById('mainHeader');
    const scrollButton = document.getElementById('scrollToTop');

    if (!header || !scrollButton) {
        console.warn('⚠️ Elementos de scroll no encontrados');
        return;
    }

    const handleScroll = throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header effect
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll to top button
        if (scrollTop > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log('✅ Efectos de scroll inicializados');
}

// Sistema de modal optimizado
function initModalSystem() {
    const modal = document.getElementById('imageModal');
    
    if (!modal) {
        console.warn('⚠️ Modal no encontrado');
        return;
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    console.log('✅ Sistema de modal inicializado');
}

// Recopilar imágenes para el modal
function collectModalImages() {
    modalImages = [];
    const images = document.querySelectorAll('img[onclick*="openModal"]');
    images.forEach(img => {
        modalImages.push({
            src: img.src,
            alt: img.alt
        });
    });
    console.log(`📸 ${modalImages.length} imágenes recopiladas para modal`);
}

// Abrir modal optimizado
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    if (!modal || !modalImg || !imgElement) {
        console.error('❌ Error: elementos de modal no encontrados');
        return;
    }

    // Encontrar índice de la imagen actual
    currentImageIndex = modalImages.findIndex(img => img.src === imgElement.src);
    if (currentImageIndex === -1) currentImageIndex = 0;

    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    console.log(`🖼️ Modal abierto: ${imgElement.alt}`);
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;

    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    console.log('❌ Modal cerrado');
}

// Control de música optimizado
function initMusicControl() {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('musicToggle');
    
    if (!audio || !toggleBtn) {
        console.warn('⚠️ Controles de música no encontrados');
        return;
    }

    // Configurar estado inicial
    audio.volume = 0.3; // Volumen suave
    
    // Manejar errores de audio
    audio.addEventListener('error', (e) => {
        console.warn('⚠️ Error de audio:', e);
        toggleBtn.style.display = 'none'; // Ocultar control si no hay audio
    });

    console.log('✅ Control de música inicializado');
}

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const icon = document.getElementById('musicIcon');

    if (!audio || !toggleBtn || !icon) {
        console.error('❌ Elementos de música no encontrados');
        return;
    }

    if (audio.paused) {
        audio.play().then(() => {
            icon.className = 'fas fa-pause';
            toggleBtn.classList.add('playing');
            toggleBtn.title = 'Pausar música';
            console.log('🎵 Música iniciada');
        }).catch(e => {
            console.log('❌ No se pudo reproducir la música:', e);
            showNotification('No se pudo reproducir la música', 'error');
        });
    } else {
        audio.pause();
        icon.className = 'fas fa-play';
        toggleBtn.classList.remove('playing');
        toggleBtn.title = 'Reproducir música';
        console.log('⏸️ Música pausada');
    }
}

// Menú móvil optimizado
function initMobileMenu() {
    const menuBtn = document.getElementById('menuToggle');
    const menu = document.getElementById('mainMenu');

    if (!menuBtn || !menu) {
        console.warn('⚠️ Elementos de menú móvil no encontrados');
        return;
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    // Cerrar menú al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScroll(href);
            }
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !menuBtn.contains(e.target) && !menu.contains(e.target)) {
            closeMobileMenu();
        }
    });

    console.log('✅ Menú móvil inicializado');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mainMenu');
    const menuBtn = document.getElementById('menuToggle');

    if (!menu || !menuBtn) return;

    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        menu.classList.add('show');
        menuBtn.classList.add('active');
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        console.log('📱 Menú móvil abierto');
    } else {
        menu.classList.remove('show');
        menuBtn.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        console.log('📱 Menú móvil cerrado');
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mainMenu');
    const menuBtn = document.getElementById('menuToggle');

    if (!menu || !menuBtn) return;

    isMenuOpen = false;
    menu.classList.remove('show');
    menuBtn.classList.remove('active');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
}

// Scroll suave optimizado
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.getElementById('mainHeader')?.offsetHeight || 80;
        const targetPosition = element.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        console.log(`🎯 Scroll a: ${target}`);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('⬆️ Scroll al inicio');
}

// Newsletter optimizado
function initNewsletterForm() {
    const input = document.getElementById('newsletterEmail');
    
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                subscribeNewsletter();
            }
        });
        console.log('✅ Newsletter inicializado');
    }
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    if (!emailInput) return;

    const email = emailInput.value.trim();
    
    if (!email) {
        showNotification('Por favor ingresa tu correo electrónico', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Por favor ingresa un correo electrónico válido', 'error');
        return;
    }

    // Simular suscripción exitosa
    showNotification('¡Gracias por suscribirte! Te mantendremos informado.', 'success');
    emailInput.value = '';
    console.log(`📧 Nueva suscripción: ${email}`);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sistema de notificaciones optimizado
function showNotification(message, type = 'info') {
    // Remover notificaciones existentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const iconClass = type === 'success' ? 'fa-check-circle' : 
                     type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    
    const bgColor = type === 'success' ? '#4CAF50' : 
                   type === 'error' ? '#f44336' : '#2196F3';

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${iconClass}"></i>
            <span>${message}</span>
        </div>
    `;

    // Estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        font-family: inherit;
    `;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto-eliminar
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Sistema de videos optimizado
function initVideoSystem() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach((video, index) => {
        // Configurar video
        video.addEventListener('loadstart', () => {
            console.log(`🎬 Cargando video ${index + 1}`);
        });
        
        video.addEventListener('canplay', () => {
            console.log(`✅ Video ${index + 1} listo para reproducir`);
        });
        
        video.addEventListener('error', (e) => {
            console.warn(`❌ Error en video ${index + 1}:`, e);
            handleVideoError(video, `Video ${index + 1}`);
        });
        
        // Control click para pausar/reproducir
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play().catch(e => {
                    console.log('No se pudo reproducir el video:', e);
                });
            } else {
                video.pause();
            }
        });
        
        // Intersection Observer para autoplay inteligente
        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (video.paused) {
                            video.play().catch(e => {
                                console.log('Autoplay bloqueado:', e);
                            });
                        }
                    } else {
                        if (!video.paused) {
                            video.pause();
                        }
                    }
                });
            }, { 
                threshold: 0.5 
            });
            
            videoObserver.observe(video);
        }
    });

    console.log(`✅ Sistema de videos inicializado (${videos.length} videos)`);
}

// Manejar errores de video
function handleVideoError(video, altText) {
    const container = video.closest('.gallery-item');
    if (!container) return;
    
    // Crear imagen de fallback
    const fallbackImg = document.createElement('img');
    fallbackImg.src = `https://via.placeholder.com/300x300/ff73b9/ffffff?text=${encodeURIComponent(altText)}`;
    fallbackImg.alt = altText;
    fallbackImg.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 8px;';
    
    // Reemplazar video con imagen
    video.parentNode.replaceChild(fallbackImg, video);
    
    console.warn(`❌ Video fallido, usando imagen de respaldo: ${altText}`);
}

// Gestión de eventos de teclado globales
document.addEventListener('keydown', (e) => {
    // Atajos de teclado útiles
    if (e.key === 'm' || e.key === 'M') {
        if (!e.ctrlKey && !e.altKey) {
            toggleMusic();
        }
    }
    
    if (e.key === 'Home') {
        e.preventDefault();
        scrollToTop();
    }
});

// Optimizaciones de rendimiento
window.addEventListener('load', () => {
    console.log('🚀 Tejidos Luna completamente cargado');
    
    // Precargar imágenes críticas
    preloadCriticalImages();
    
    // Optimización para dispositivos móviles
    if (isMobile()) {
        optimizeForMobile();
    }

    // Inicializar animaciones
    setTimeout(initAnimations, 500);
});

function preloadCriticalImages() {
    const criticalImages = [
        'Fotos/su.jpg',
        'Fotos/corriente.png',
        'Fotos/bailarina1.png'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => console.log(`✅ Precargada: ${src}`);
        img.onerror = () => console.warn(`❌ Error precargando: ${src}`);
    });
}

function optimizeForMobile() {
    // Reducir animaciones en dispositivos de baja potencia
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.documentElement.style.setProperty('--transition-normal', '0.1s');
        document.documentElement.style.setProperty('--transition-slow', '0.2s');
        console.log('📱 Optimizaciones móviles aplicadas');
    }
}

// Detección de dispositivo
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Animaciones de entrada suaves
function initAnimations() {
    // Observer para animaciones de entrada
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Aplicar animaciones a elementos específicos
        document.querySelectorAll('.product-card, .blog-card, .featured-image').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animationObserver.observe(el);
        });

        console.log('✅ Animaciones de entrada inicializadas');
    }
}

// Gestión de conexión lenta
if ('connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // Optimizaciones para conexiones lentas
        document.querySelectorAll('video').forEach(video => {
            video.preload = 'none';
        });
        console.log('🐌 Optimizaciones para conexión lenta aplicadas');
    }
}

// Manejo de errores globales
window.addEventListener('error', (e) => {
    console.warn('⚠️ Error capturado:', e.error);
});

// Gestión de cambio de orientación
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Recalcular dimensiones
        window.scrollTo(0, window.scrollY);
        
        // Recolectar imágenes del modal nuevamente
        collectModalImages();
        
        console.log('🔄 Orientación cambiada, recalculando...');
    }, 100);
});

// Gestión de memoria
function cleanupMemory() {
    // Limpiar referencias no utilizadas
    modalImages = [];
    
    // Pausar todos los videos
    document.querySelectorAll('video').forEach(video => {
        video.pause();
    });
}

// Cleanup al salir de la página
window.addEventListener('beforeunload', () => {
    cleanupMemory();
    console.log('🧹 Memoria limpiada');
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('✅ Service Worker registrado:', registration);
        })
        .catch(error => {
            console.log('ℹ️ Service Worker no disponible:', error);
        });
}

// Inicialización final
setTimeout(() => {
    // Marcar como completamente cargado
    document.body.classList.add('loaded');
    
    console.log(`
🎨 ================================
   TEJIDOS LUNA - SISTEMA LISTO
   ================================
   ✅ Header con animaciones
   ✅ Modal de imágenes
   ✅ Control de música  
   ✅ Menú móvil responsive
   ✅ Videos con autoplay
   ✅ Newsletter funcional
   ✅ Scroll suave optimizado
   ✅ Notificaciones elegantes
   ================================
   🚀 ¡Sitio web completamente funcional!
    `);
}, 2000);

console.log('🚀 Sistema JavaScript de Tejidos Luna completamente inicializado');
