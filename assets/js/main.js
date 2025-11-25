/**
 * BEE TRAINING ACADEMY - MAIN JAVASCRIPT
 * Mobile-first, Progressive Enhancement
 */

// ============================================
// LANGUAGE SYSTEM
// ============================================

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('bee-academy-lang') || 'en';
        this.translations = {};
        this.init();
    }

    init() {
        this.loadLanguage(this.currentLang);
        this.setupLanguageToggle();
    }

    loadLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('bee-academy-lang', lang);
        this.updateUI();
    }

    updateUI() {
        // Update all elements with data-en and data-mn attributes
        document.querySelectorAll('[data-en]').forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update language button
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            const enSpan = langBtn.querySelector('.lang-en');
            const mnSpan = langBtn.querySelector('.lang-mn');

            if (this.currentLang === 'en') {
                enSpan.style.display = 'inline';
                mnSpan.style.display = 'none';
            } else {
                enSpan.style.display = 'none';
                mnSpan.style.display = 'inline';
            }
        }

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Dispatch event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    }

    setupLanguageToggle() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'mn' : 'en';
        this.loadLanguage(this.currentLang);

        // Add a little animation feedback
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                langBtn.style.transform = 'scale(1)';
            }, 100);
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// ============================================
// PROGRESS TRACKING
// ============================================

class ProgressTracker {
    constructor() {
        this.progress = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem('bee-academy-progress');
        return saved ? JSON.parse(saved) : {
            modules: {},
            quizzes: {},
            completedSections: []
        };
    }

    saveProgress() {
        localStorage.setItem('bee-academy-progress', JSON.stringify(this.progress));
    }

    markModuleComplete(moduleId) {
        this.progress.modules[moduleId] = {
            completed: true,
            completedAt: new Date().toISOString()
        };
        this.saveProgress();
        this.updateModuleUI(moduleId);
    }

    isModuleComplete(moduleId) {
        return this.progress.modules[moduleId]?.completed || false;
    }

    updateModuleUI(moduleId) {
        // Update module card UI based on completion
        // This will be called when modules are loaded
    }

    getCompletionPercentage() {
        const totalModules = 4; // Update based on actual module count
        const completedCount = Object.keys(this.progress.modules).filter(
            key => this.progress.modules[key].completed
        ).length;
        return Math.round((completedCount / totalModules) * 100);
    }
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

class SearchManager {
    constructor() {
        this.searchIndex = [];
        this.init();
    }

    init() {
        // Build search index from content
        this.buildSearchIndex();
        this.setupSearchInput();
    }

    buildSearchIndex() {
        // This will be populated with content from all pages
        // For now, we'll add basic structure
        this.searchIndex = [
            { title: 'Cleaning Kit', url: '#cleaning-kit', keywords: ['equipment', 'supplies', 'tools'] },
            { title: 'Keys', url: '#keys', keywords: ['access', 'lockbox', 'property'] },
            { title: 'Linens', url: '#linens', keywords: ['bedding', 'towels', 'sheets'] },
            // More will be added dynamically
        ];
    }

    setupSearchInput() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value);
            });
        }
    }

    performSearch(query) {
        if (!query || query.length < 2) {
            this.clearResults();
            return;
        }

        const results = this.searchIndex.filter(item => {
            const searchText = `${item.title} ${item.keywords.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });

        this.displayResults(results);
    }

    displayResults(results) {
        // Display search results in UI
        console.log('Search results:', results);
    }

    clearResults() {
        // Clear search results
    }
}

// ============================================
// ANALYTICS & TRACKING
// ============================================

class AnalyticsManager {
    constructor() {
        this.events = [];
        this.init();
    }

    init() {
        this.trackPageView();
        this.setupEventTracking();
    }

    trackPageView() {
        this.trackEvent('page_view', {
            page: window.location.pathname,
            timestamp: new Date().toISOString()
        });
    }

    trackEvent(eventName, data = {}) {
        const event = {
            name: eventName,
            data: data,
            timestamp: new Date().toISOString()
        };

        this.events.push(event);

        // Store locally
        this.saveEvents();

        // Send to analytics (if configured)
        this.sendToAnalytics(event);
    }

    saveEvents() {
        const recentEvents = this.events.slice(-100); // Keep last 100 events
        localStorage.setItem('bee-academy-events', JSON.stringify(recentEvents));
    }

    sendToAnalytics(event) {
        // Send to Google Analytics or custom analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', event.name, event.data);
        }
    }

    setupEventTracking() {
        // Track module clicks
        document.querySelectorAll('.module-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const moduleCard = e.target.closest('.module-card');
                const moduleTitle = moduleCard?.querySelector('h3')?.textContent;
                this.trackEvent('module_click', { module: moduleTitle });
            });
        });

        // Track resource clicks
        document.querySelectorAll('.resource-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const resourceTitle = card.querySelector('h3')?.textContent;
                this.trackEvent('resource_click', { resource: resourceTitle });
            });
        });
    }
}

// ============================================
// OFFLINE SUPPORT (PWA)
// ============================================

class OfflineManager {
    constructor() {
        this.init();
    }

    init() {
        if ('serviceWorker' in navigator) {
            this.registerServiceWorker();
        }
        this.checkOnlineStatus();
    }

    async registerServiceWorker() {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('Service Worker registered:', registration);
        } catch (error) {
            console.log('Service Worker registration failed:', error);
        }
    }

    checkOnlineStatus() {
        window.addEventListener('online', () => {
            this.showNotification('You are back online! 🌐', 'success');
        });

        window.addEventListener('offline', () => {
            this.showNotification('You are offline. Some features may be limited. 📵', 'warning');
        });
    }

    showNotification(message, type = 'info') {
        // Create and show notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#27AE60' : type === 'warning' ? '#E67E22' : '#3498DB'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideUp 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

const utils = {
    // Debounce function for search
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    },

    // Smooth scroll to element
    scrollTo(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Copy to clipboard
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            console.error('Failed to copy:', err);
            return false;
        }
    }
};

// ============================================
// INITIALIZATION
// ============================================

let app = {};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    app.language = new LanguageManager();
    app.progress = new ProgressTracker();
    app.search = new SearchManager();
    app.analytics = new AnalyticsManager();
    app.offline = new OfflineManager();

    // Make app globally available for debugging
    window.beeAcademy = app;

    console.log('🐝 Bee Training Academy initialized!');
});

// ============================================
// GLOBAL EVENT LISTENERS
// ============================================

// Handle hash changes for navigation
window.addEventListener('hashchange', () => {
    app.analytics?.trackEvent('navigation', { hash: window.location.hash });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, ProgressTracker, SearchManager, AnalyticsManager, utils };
}
