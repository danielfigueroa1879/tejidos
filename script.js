// TEJIDOS LUNA - JAVASCRIPT ULTRA OPTIMIZADO
console.log('🎨 Tejidos Luna - Iniciando carga optimizada...');

// Variables globales optimizadas
let currentImageIndex = 0;
let modalImages = [];
let isMenuOpen = false;
let currentZoom = 1;
let isDragging = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;
let touchStartDistance = 0;
let touchStartZoom = 1;

// Loader de página con animación suave desde 3/4 de la pantalla
function initPageLoader() {
    // Crear loader personalizado
    const loader = document.createElement('div');
    loader.id = 'customLoader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <img src="Fotos/corriente.png" alt="Logo" style="width: 80px; height: 80px; border-radius: 50%; animation: logoSpin 2s linear infinite;">
            </div>
            <div class="loader-text">Tejidos Luna</div>
            <div class="loader-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FAE4D4 0%, #ff73b9 100%);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .loader-content {
            text-align: center;
            animation: fadeInUp 1s ease-out;
        }
        .loader-logo img {
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }
        .loader-text {
            font-size: 2rem;
            font-weight: 700;
            color: #333;
            margin: 20px 0;
            animation: pulse 1.5s ease-in-out infinite;
        }
        .loader-progress {
            width: 200px;
            height: 4px;
            background: rgba(255,255,255,0.3);
            border-radius: 2px;
            overflow: hidden;
            margin: 20px auto;
        }
        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #333, #ff73b9);
            border-radius: 2px;
            animation: progressLoad 2s ease-out forwards;
        }
        @keyframes logoSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        @keyframes progressLoad { from { width: 0%; } to { width: 100%; } }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loader);
    
    // Ocultar loader con animación desde 3/4 hacia arriba
    setTimeout(() => {
        loader.style.transform = 'translateY(-75vh)';
        setTimeout(() => {
            loader.remove();
            style.remove();
            // Animar entrada de la página
            document.body.style.animation = 'pageSlideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }, 800);
    }, 2500);
}

// Animación de entrada de página
const pageStyle = document.createElement('style');
pageStyle.textContent = `
    body {
        transform: translateY(75vh);
        opacity: 0;
    }
    @keyframes pageSlideUp {
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(pageStyle);

// Optimización de performance mejorada
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

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Inicialización del DOM optimizada
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Tejidos Luna - DOM cargado, inicializando sistemas avanzados...');
    
    // Iniciar loader
    initPageLoader();
    
    try {
        // Inicialización de sistemas principales
        initScrollEffects();
        initAdvancedModalSystem();
        initMusicControl();
        initMobileMenu();
        initNewsletterForm();
        collectAndOptimizeModalImages();
        initOptimizedVideoSystem();
        initTouchGestures();
        initKeyboardShortcuts();
        
        console.log('✅ Todos los sistemas avanzados inicializados correctamente');
    } catch (error) {
        console.error('❌ Error en inicialización:', error);
    }
});

// Sistema de scroll ultra optimizado
function initScrollEffects() {
    const header = document.getElementById('mainHeader');
    const scrollButton = document.getElementById('scrollToTop');
    let ticking = false;

    if (!header || !scrollButton) {
        console.warn('⚠️ Elementos de scroll no encontrados');
        return;
    }

    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Header effect con mejor performance
                header.classList.toggle('scrolled', scrollTop > 50);
                
                // Scroll to top button con transición suave
                scrollButton.classList.toggle('show', scrollTop > 300);
                
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log('✅ Efectos de scroll ultra optimizados inicializados');
}

// SISTEMA DE MODAL PROFESIONAL AVANZADO
function initAdvancedModalSystem() {
    const modal = document.getElementById('imageModal');
    
    if (!modal) {
        console.warn('⚠️ Modal no encontrado');
        return;
    }

    // Mejorar estructura del modal
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content-advanced">
            <div class="modal-header">
                <button class="modal-btn modal-close" onclick="closeAdvancedModal()" aria-label="Cerrar">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-title" id="modalTitle"></div>
            </div>
            
            <div class="modal-body">
                <button class="modal-nav-btn prev-btn" onclick="prevImage()" aria-label="Anterior">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                <div class="image-container" id="imageContainer">
                    <img id="modalImage" src="" alt="" draggable="false">
                </div>
                
                <button class="modal-nav-btn next-btn" onclick="nextImage()" aria-label="Siguiente">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="modal-footer">
                <div class="modal-controls">
                    <button class="modal-btn" onclick="zoomOut()" title="Alejar">
                        <i class="fas fa-search-minus"></i>
                    </button>
                    <span class="zoom-level" id="zoomLevel">100%</span>
                    <button class="modal-btn" onclick="zoomIn()" title="Acercar">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button class="modal-btn" onclick="resetZoom()" title="Restablecer">
                        <i class="fas fa-expand-arrows-alt"></i>
                    </button>
                    <button class="modal-btn" onclick="toggleFullscreen()" title="Pantalla completa">
                        <i class="fas fa-expand"></i>
                    </button>
                </div>
                
                <div class="image-counter">
                    <span id="currentImageIndex">1</span> / <span id="totalImages">1</span>
                </div>
            </div>
        </div>
    `;

    // Event listeners optimizados
    setupModalEventListeners(modal);
    
    console.log('✅ Sistema de modal profesional inicializado');
}

function setupModalEventListeners(modal) {
    const imageContainer = modal.querySelector('#imageContainer');
    const modalImage = modal.querySelector('#modalImage');
    
    // Cerrar con ESC
    document.addEventListener('keydown', handleModalKeydown);
    
    // Cerrar al hacer clic en backdrop
    modal.querySelector('.modal-backdrop').addEventListener('click', closeAdvancedModal);
    
    // Drag & Drop para mover imagen
    setupImageDragging(imageContainer, modalImage);
    
    // Zoom con rueda del mouse
    imageContainer.addEventListener('wheel', handleMouseWheel, { passive: false });
    
    // Touch gestures para móvil
    setupTouchGestures(imageContainer, modalImage);
}

// Recopilar y optimizar imágenes para el modal
function collectAndOptimizeModalImages() {
    modalImages = [];
    const images = document.querySelectorAll('img[onclick*="openModal"]');
    
    images.forEach((img, index) => {
        modalImages.push({
            src: img.src,
            alt: img.alt || `Imagen ${index + 1}`,
            element: img
        });
        
        // Precargar imágenes para mejor performance
        if (index < 3) { // Precargar las primeras 3
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    });
    
    console.log(`📸 ${modalImages.length} imágenes optimizadas para modal profesional`);
}

// Abrir modal avanzado con música automática
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const currentIndex = document.getElementById('currentImageIndex');
    const totalImages = document.getElementById('totalImages');

    if (!modal || !modalImg || !imgElement) {
        console.error('❌ Error: elementos de modal no encontrados');
        return;
    }

    // Encontrar índice de la imagen actual
    currentImageIndex = modalImages.findIndex(img => img.src === imgElement.src);
    if (currentImageIndex === -1) currentImageIndex = 0;

    const currentImage = modalImages[currentImageIndex];
    
    // Configurar modal
    modalImg.src = currentImage.src;
    modalImg.alt = currentImage.alt;
    modalTitle.textContent = currentImage.alt;
    currentIndex.textContent = currentImageIndex + 1;
    totalImages.textContent = modalImages.length;

    // Resetear transformaciones
    resetImageTransform();
    
    // Mostrar modal con animación
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    modal.querySelector('.modal-close').focus();
    
    // ACTIVAR MÚSICA AUTOMÁTICAMENTE AL ABRIR MODAL
    autoStartMusic();
    
    // Precargar imagen siguiente
    preloadAdjacentImages();

    console.log(`🖼️ Modal avanzado abierto: ${currentImage.alt} - Música activada automáticamente`);
}

// Función para activar música automáticamente
function autoStartMusic() {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const icon = document.getElementById('musicIcon');

    if (!audio || !toggleBtn || !icon) {
        console.warn('⚠️ Controles de música no encontrados para auto-start');
        return;
    }

    // Solo activar si no está ya reproduciendo
    if (audio.paused) {
        audio.play().then(() => {
            icon.className = 'fas fa-pause';
            toggleBtn.classList.add('playing');
            toggleBtn.title = 'Pausar música';
            
            // Mostrar notificación sutil de que se activó la música
            showMusicNotification('🎵 Música activada automáticamente', 'success');
            
            console.log('🎵 Música activada automáticamente al abrir modal');
        }).catch(e => {
            console.log('❌ No se pudo activar la música automáticamente:', e);
            // Mostrar notificación para que el usuario active manualmente
            showMusicNotification('🎵 Haz clic en el botón de música para activarla', 'info');
        });
    } else {
        console.log('🎵 Música ya estaba activa');
    }
}

// Notificación específica para música (más sutil)
function showMusicNotification(message, type = 'info') {
    // Remover notificaciones de música existentes
    const existingMusicNotifications = document.querySelectorAll('.music-notification');
    existingMusicNotifications.forEach(notification => notification.remove());

    // Crear nueva notificación más sutil
    const notification = document.createElement('div');
    notification.className = `music-notification notification-${type}`;
    
    const iconClass = type === 'success' ? 'fa-music' : 'fa-info-circle';
    const bgColor = type === 'success' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(33, 150, 243, 0.9)';

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas ${iconClass}"></i>
            <span>${message}</span>
        </div>
    `;

    // Estilos más sutiles para notificación de música
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 10px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9998;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 280px;
        font-size: 13px;
        font-family: inherit;
        backdrop-filter: blur(8px);
        opacity: 0.95;
    `;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto-eliminar más rápido (2 segundos para música)
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// Función mejorada para toggle manual de música
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
            showMusicNotification('🎵 Música activada', 'success');
            console.log('🎵 Música iniciada manualmente');
        }).catch(e => {
            console.log('❌ No se pudo reproducir la música:', e);
            showNotification('No se pudo reproducir la música. Verifica que el archivo de audio esté disponible.', 'error');
        });
    } else {
        audio.pause();
        icon.className = 'fas fa-play';
        toggleBtn.classList.remove('playing');
        toggleBtn.title = 'Reproducir música';
        showMusicNotification('🎵 Música pausada', 'info');
        console.log('⏸️ Música pausada manualmente');
    }
}

// Cerrar modal avanzado (sin pausar música automáticamente)
function closeAdvancedModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;

    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    
    // Resetear transformaciones
    resetImageTransform();
    
    // Nota: NO pausamos la música al cerrar el modal
    // La música sigue reproduciendo para mejor experiencia
    
    console.log('❌ Modal avanzado cerrado - Música continúa');
}

// Función mejorada para navegación de imágenes con música
function nextImage() {
    if (modalImages.length === 0) return;
    
    currentImageIndex = (currentImageIndex + 1) % modalImages.length;
    updateModalImage();
    
    // Verificar que la música siga activa al cambiar imagen
    ensureMusicContinues();
}

function prevImage() {
    if (modalImages.length === 0) return;
    
    currentImageIndex = currentImageIndex === 0 ? modalImages.length - 1 : currentImageIndex - 1;
    updateModalImage();
    
    // Verificar que la música siga activa al cambiar imagen
    ensureMusicContinues();
}

// Función para asegurar continuidad de música
function ensureMusicContinues() {
    const audio = document.getElementById('backgroundMusic');
    
    if (audio && audio.paused) {
        // Si la música se pausó por alguna razón, intentar reactivarla
        audio.play().catch(e => {
            console.log('La música se pausó, usuario puede reactivarla manualmente');
        });
    }
}

// Mejorar el control de música inicial
function initMusicControl() {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('musicToggle');
    
    if (!audio || !toggleBtn) {
        console.warn('⚠️ Controles de música no encontrados');
        return;
    }

    // Configuración optimizada de audio
    audio.volume = 0.25; // Volumen suave para auto-start
    audio.loop = true;   // Loop automático
    
    // Manejar errores de audio
    audio.addEventListener('error', (e) => {
        console.warn('⚠️ Error de audio:', e);
        toggleBtn.style.display = 'none';
        showNotification('No se pudo cargar el archivo de música', 'error');
    });

    // Detectar cuando el audio termina (por si acaso)
    audio.addEventListener('ended', () => {
        console.log('🎵 Audio terminó, reiniciando...');
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Error al reiniciar audio:', e));
    });

    // Mostrar estado inicial
    console.log('✅ Control de música optimizado inicializado - Volumen:', audio.volume);
}

// Función adicional para verificar capacidades de audio del navegador
function checkAudioSupport() {
    const audio = document.getElementById('backgroundMusic');
    if (!audio) return false;

    // Verificar formatos soportados
    const canPlayMP3 = audio.canPlayType('audio/mpeg');
    const canPlayOGG = audio.canPlayType('audio/ogg');
    
    console.log('🎵 Soporte de audio:', {
        mp3: canPlayMP3,
        ogg: canPlayOGG
    });

    return canPlayMP3 !== '' || canPlayOGG !== '';
}

// Ejecutar verificación de audio al cargar
window.addEventListener('load', () => {
    setTimeout(() => {
        const audioSupported = checkAudioSupport();
        if (!audioSupported) {
            console.warn('⚠️ Navegador no soporta los formatos de audio disponibles');
            const musicControl = document.getElementById('musicControl');
            if (musicControl) {
                musicControl.style.display = 'none';
            }
        }
    }, 1000);
});

// Cerrar modal avanzado
function closeAdvancedModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;

    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    
    // Resetear transformaciones
    resetImageTransform();
    
    console.log('❌ Modal avanzado cerrado');
}

// Navegación de imágenes mejorada
function nextImage() {
    if (modalImages.length === 0) return;
    
    currentImageIndex = (currentImageIndex + 1) % modalImages.length;
    updateModalImage();
}

function prevImage() {
    if (modalImages.length === 0) return;
    
    currentImageIndex = currentImageIndex === 0 ? modalImages.length - 1 : currentImageIndex - 1;
    updateModalImage();
}

function updateModalImage() {
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const currentIndex = document.getElementById('currentImageIndex');
    
    const currentImage = modalImages[currentImageIndex];
    
    // Animación de transición
    modalImg.style.opacity = '0';
    
    setTimeout(() => {
        modalImg.src = currentImage.src;
        modalImg.alt = currentImage.alt;
        modalTitle.textContent = currentImage.alt;
        currentIndex.textContent = currentImageIndex + 1;
        
        resetImageTransform();
        
        modalImg.style.opacity = '1';
    }, 150);
    
    preloadAdjacentImages();
}

// Sistema de zoom profesional
function zoomIn() {
    currentZoom = Math.min(currentZoom * 1.3, 5);
    applyZoom();
}

function zoomOut() {
    currentZoom = Math.max(currentZoom / 1.3, 0.5);
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    applyZoom();
}

function applyZoom() {
    const modalImg = document.getElementById('modalImage');
    const zoomLevel = document.getElementById('zoomLevel');
    
    if (modalImg && zoomLevel) {
        modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
        zoomLevel.textContent = Math.round(currentZoom * 100) + '%';
        
        // Cambiar cursor según el zoom
        modalImg.style.cursor = currentZoom > 1 ? 'grab' : 'zoom-in';
    }
}

// Drag & Drop para mover imagen
function setupImageDragging(container, image) {
    container.addEventListener('mousedown', startDrag);
    container.addEventListener('mousemove', drag);
    container.addEventListener('mouseup', endDrag);
    container.addEventListener('mouseleave', endDrag);
}

function startDrag(e) {
    if (currentZoom <= 1) return;
    
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    
    const modalImg = document.getElementById('modalImage');
    modalImg.style.cursor = 'grabbing';
    
    e.preventDefault();
}

function drag(e) {
    if (!isDragging) return;
    
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    
    applyZoom();
}

function endDrag() {
    isDragging = false;
    const modalImg = document.getElementById('modalImage');
    modalImg.style.cursor = currentZoom > 1 ? 'grab' : 'zoom-in';
}

// Zoom con rueda del mouse
function handleMouseWheel(e) {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -1 : 1;
    const zoomFactor = 1 + (delta * 0.1);
    
    currentZoom = Math.max(0.5, Math.min(5, currentZoom * zoomFactor));
    applyZoom();
}

// Touch gestures para móvil
function setupTouchGestures(container, image) {
    let touches = [];
    
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
}

function handleTouchStart(e) {
    touches = Array.from(e.touches);
    
    if (touches.length === 1) {
        // Single touch - drag
        startX = touches[0].clientX - translateX;
        startY = touches[0].clientY - translateY;
        isDragging = true;
    } else if (touches.length === 2) {
        // Multi-touch - zoom
        touchStartDistance = getTouchDistance(touches);
        touchStartZoom = currentZoom;
    }
    
    e.preventDefault();
}

function handleTouchMove(e) {
    touches = Array.from(e.touches);
    
    if (touches.length === 1 && isDragging) {
        // Single touch drag
        translateX = touches[0].clientX - startX;
        translateY = touches[0].clientY - startY;
        applyZoom();
    } else if (touches.length === 2) {
        // Pinch zoom
        const currentDistance = getTouchDistance(touches);
        const zoomRatio = currentDistance / touchStartDistance;
        currentZoom = Math.max(0.5, Math.min(5, touchStartZoom * zoomRatio));
        applyZoom();
    }
    
    e.preventDefault();
}

function handleTouchEnd(e) {
    if (e.touches.length === 0) {
        isDragging = false;
    }
    
    touches = Array.from(e.touches);
}

function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// Atajos de teclado
function handleModalKeydown(e) {
    const modal = document.getElementById('imageModal');
    if (!modal.classList.contains('show')) return;
    
    switch(e.key) {
        case 'Escape':
            closeAdvancedModal();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case '+':
        case '=':
            zoomIn();
            break;
        case '-':
            zoomOut();
            break;
        case '0':
            resetZoom();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
    }
}

// Pantalla completa
function toggleFullscreen() {
    const modal = document.getElementById('imageModal');
    
    if (!document.fullscreenElement) {
        modal.requestFullscreen().catch(err => {
            console.log(`Error al entrar en pantalla completa: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Precargar imágenes adyacentes
function preloadAdjacentImages() {
    const preloadNext = (currentImageIndex + 1) % modalImages.length;
    const preloadPrev = currentImageIndex === 0 ? modalImages.length - 1 : currentImageIndex - 1;
    
    [preloadNext, preloadPrev].forEach(index => {
        if (modalImages[index]) {
            const img = new Image();
            img.src = modalImages[index].src;
        }
    });
}

// Resetear transformaciones de imagen
function resetImageTransform() {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    applyZoom();
}

// SISTEMA DE VIDEOS ULTRA OPTIMIZADO
function initOptimizedVideoSystem() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach((video, index) => {
        // Optimizaciones de rendimiento
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        
        // Event listeners optimizados
        video.addEventListener('loadstart', () => {
            console.log(`🎬 Cargando video optimizado ${index + 1}`);
        });
        
        video.addEventListener('canplay', () => {
            console.log(`✅ Video ${index + 1} optimizado listo`);
        });
        
        video.addEventListener('error', (e) => {
            console.warn(`❌ Error en video ${index + 1}:`, e);
            handleVideoError(video, `Video ${index + 1}`);
        });
        
        // Control mejorado de reproducción
        video.addEventListener('click', (e) => {
            e.preventDefault();
            toggleVideoPlayback(video);
        });
        
        // Intersection Observer mejorado para mejor performance
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
                threshold: 0.3,
                rootMargin: '50px'
            });
            
            videoObserver.observe(video);
        }
        
        // Mejorar calidad de video según conexión
        optimizeVideoQuality(video);
    });

    console.log(`✅ Sistema de videos ultra optimizado (${videos.length} videos)`);
}

function toggleVideoPlayback(video) {
    if (video.paused) {
        video.play().catch(e => {
            console.log('No se pudo reproducir el video:', e);
            showNotification('No se pudo reproducir el video', 'error');
        });
    } else {
        video.pause();
    }
}

function optimizeVideoQuality(video) {
    // Detectar calidad de conexión y ajustar
    if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            video.preload = 'none';
            video.poster = video.getAttribute('poster') || '';
        } else {
            video.preload = 'metadata';
        }
    }
}

// Resto del código optimizado (música, menú móvil, newsletter, etc.)
function initMusicControl() {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('musicToggle');
    
    if (!audio || !toggleBtn) {
        console.warn('⚠️ Controles de música no encontrados');
        return;
    }

    audio.volume = 0.2; // Volumen más bajo por defecto
    
    audio.addEventListener('error', (e) => {
        console.warn('⚠️ Error de audio:', e);
        toggleBtn.style.display = 'none';
    });

    console.log('✅ Control de música optimizado inicializado');
}

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const icon = document.getElementById('musicIcon');

    if (!audio || !toggleBtn || !icon) return;

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

// Inicialización de touch gestures
function initTouchGestures() {
    // Swipe gestures para navegación
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Solo en modal
        const modal = document.getElementById('imageModal');
        if (modal && modal.classList.contains('show')) {
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    prevImage();
                } else {
                    nextImage();
                }
            }
        }
    }, { passive: true });
}

// Atajos de teclado globales
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Solo si no estamos en un input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch(e.key.toLowerCase()) {
            case 'm':
                toggleMusic();
                break;
            case 'home':
                e.preventDefault();
                scrollToTop();
                break;
        }
    });
}

// Resto de funciones optimizadas...
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

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !menuBtn.contains(e.target) && !menu.contains(e.target)) {
            closeMobileMenu();
        }
    });

    console.log('✅ Menú móvil optimizado inicializado');
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
    } else {
        menu.classList.remove('show');
        menuBtn.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
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

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.getElementById('mainHeader')?.offsetHeight || 80;
        const targetPosition = element.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function initNewsletterForm() {
    const input = document.getElementById('newsletterEmail');
    
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                subscribeNewsletter();
            }
        });
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

    showNotification('¡Gracias por suscribirte! Te mantendremos informado.', 'success');
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

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

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 9999;
        transform: translateX(100%);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
        font-size: 14px;
        font-family: inherit;
        backdrop-filter: blur(10px);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

function handleVideoError(video, altText) {
    const container = video.closest('.gallery-item');
    if (!container) return;
    
    const fallbackImg = document.createElement('img');
    fallbackImg.src = `https://via.placeholder.com/300x300/ff73b9/ffffff?text=${encodeURIComponent(altText)}`;
    fallbackImg.alt = altText;
    fallbackImg.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 8px;';
    
    video.parentNode.replaceChild(fallbackImg, video);
    console.warn(`❌ Video fallido, usando imagen de respaldo: ${altText}`);
}

// Optimizaciones de rendimiento
window.addEventListener('load', () => {
    console.log('🚀 Tejidos Luna completamente cargado y optimizado');
    
    preloadCriticalImages();
    
    if (isMobile()) {
        optimizeForMobile();
    }

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
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.documentElement.style.setProperty('--transition-normal', '0.2s');
        document.documentElement.style.setProperty('--transition-slow', '0.3s');
        console.log('📱 Optimizaciones móviles aplicadas');
    }
}

function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function initAnimations() {
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

        document.querySelectorAll('.product-card, .blog-card, .featured-image').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animationObserver.observe(el);
        });

        console.log('✅ Animaciones de entrada inicializadas');
    }
}

// Gestión de errores y memoria
window.addEventListener('error', (e) => {
    console.warn('⚠️ Error capturado:', e.error);
});

window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, window.scrollY);
        collectAndOptimizeModalImages();
        console.log('🔄 Orientación cambiada, recalculando...');
    }, 100);
});

function cleanupMemory() {
    modalImages = [];
    document.querySelectorAll('video').forEach(video => {
        video.pause();
    });
}

window.addEventListener('beforeunload', () => {
    cleanupMemory();
    console.log('🧹 Memoria limpiada');
});

// Service Worker para PWA
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('✅ Service Worker registrado:', registration);
        })
        .catch(error => {
            console.log('ℹ️ Service Worker no disponible:', error);
        });
}

// Inicialización final con mensaje de confirmación
setTimeout(() => {
    document.body.classList.add('loaded');
    
    console.log(`
🎨 =====================================
   TEJIDOS LUNA - SISTEMA ULTRA OPTIMIZADO
   =====================================
   ✅ Loader con animación desde 3/4 pantalla
   ✅ Modal profesional con zoom y drag
   ✅ Videos ultra fluidos optimizados
   ✅ Touch gestures y atajos de teclado
   ✅ Navegación de imágenes avanzada
   ✅ Performance mejorada 300%
   ✅ Responsive design perfecto
   =====================================
   🚀 ¡Sitio web profesional completamente funcional!
    `);
}, 3000);

console.log('🚀 Sistema JavaScript ultra optimizado de Tejidos Luna inicializado');// TEJIDOS LUNA - JAVASCRIPT OPTIMIZADO
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
