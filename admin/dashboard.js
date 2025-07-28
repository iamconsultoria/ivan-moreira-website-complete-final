// Admin Dashboard JavaScript
class AdminDashboard {
    constructor() {
        this.init();
    }

    init() {
        this.checkAuthentication();
        this.initializeTheme();
        this.bindEvents();
        this.loadDashboardData();
    }

    checkAuthentication() {
        const session = localStorage.getItem('admin_session');
        if (!session) {
            window.location.href = '/admin/';
            return;
        }

        const sessionData = JSON.parse(session);
        const now = new Date().getTime();
        
        // Check if session is still valid (24 hours)
        if (now - sessionData.timestamp > 24 * 60 * 60 * 1000) {
            localStorage.removeItem('admin_session');
            window.location.href = '/admin/';
            return;
        }
    }

    initializeTheme() {
        const theme = localStorage.getItem('theme') || 'light';
        this.setTheme(theme);
        this.updateThemeIcon();
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const theme = localStorage.getItem('theme') || 'light';
        const lightIcon = document.querySelector('.light-icon');
        const darkIcon = document.querySelector('.dark-icon');
        
        if (theme === 'dark') {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline';
        } else {
            lightIcon.style.display = 'inline';
            darkIcon.style.display = 'none';
        }
    }

    bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = localStorage.getItem('theme') || 'light';
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        }

        // Logout
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }

        // Form submissions
        this.bindFormEvents();

        // Modal close on outside click
        this.bindModalEvents();
    }

    bindFormEvents() {
        // New post form
        const newPostForm = document.getElementById('new-post-form');
        if (newPostForm) {
            newPostForm.addEventListener('submit', (e) => this.handleNewPost(e));
        }

        // Edit content form
        const editContentForm = document.getElementById('edit-content-form');
        if (editContentForm) {
            editContentForm.addEventListener('submit', (e) => this.handleEditContent(e));
        }

        // Site settings form
        const siteSettingsForm = document.getElementById('site-settings-form');
        if (siteSettingsForm) {
            siteSettingsForm.addEventListener('submit', (e) => this.handleSiteSettings(e));
        }

        // Image upload
        const imageUpload = document.getElementById('image-upload');
        if (imageUpload) {
            imageUpload.addEventListener('change', (e) => this.handleImageUpload(e));
        }
    }

    bindModalEvents() {
        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target.id);
            }
        });

        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal[style*="block"]');
                if (openModal) {
                    this.closeModal(openModal.id);
                }
            }
        });
    }

    loadDashboardData() {
        // Load and display dashboard statistics
        this.updateDashboardStats();
        this.loadRecentPosts();
        this.loadServices();
    }

    updateDashboardStats() {
        // In a real implementation, this would fetch data from an API
        const stats = {
            posts: 12,
            services: 3,
            events: 8,
            views: '2.4K'
        };

        document.getElementById('posts-count').textContent = stats.posts;
        document.getElementById('services-count').textContent = stats.services;
        document.getElementById('events-count').textContent = stats.events;
        document.getElementById('views-count').textContent = stats.views;
    }

    loadRecentPosts() {
        // In a real implementation, this would fetch from an API
        const posts = [
            {
                title: 'The Future of Project Management: AI Integration',
                date: 'March 15, 2024',
                category: 'AI & Technology',
                status: 'published'
            },
            {
                title: 'Digital Transformation Strategies for 2024',
                date: 'Draft',
                category: 'Digital Transformation',
                status: 'draft'
            }
        ];

        // Posts are already rendered in HTML for this demo
        console.log('Posts loaded:', posts);
    }

    loadServices() {
        // In a real implementation, this would fetch from an API
        const services = [
            {
                title: 'Digital Transformation Consulting',
                description: 'Strategic guidance for comprehensive digital transformation'
            },
            {
                title: 'Strategic Project Management',
                description: 'AI-enhanced project management methodologies'
            },
            {
                title: 'Executive Consulting & Advisory',
                description: 'C-level strategic advisory services'
            }
        ];

        // Services are already rendered in HTML for this demo
        console.log('Services loaded:', services);
    }

    async handleNewPost(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const postData = {
            title: formData.get('post-title') || document.getElementById('post-title').value,
            category: formData.get('post-category') || document.getElementById('post-category').value,
            excerpt: formData.get('post-excerpt') || document.getElementById('post-excerpt').value,
            content: formData.get('post-content') || document.getElementById('post-content').value,
            image: formData.get('post-image') || document.getElementById('post-image').value,
            date: new Date().toISOString(),
            status: 'draft'
        };

        try {
            // In a real implementation, this would send to an API
            console.log('Creating new post:', postData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.showNotification('Post created successfully!', 'success');
            this.closeModal('new-post-modal');
            e.target.reset();
            
            // Refresh the posts list
            this.loadRecentPosts();
            
        } catch (error) {
            console.error('Error creating post:', error);
            this.showNotification('Error creating post. Please try again.', 'error');
        }
    }

    async handleEditContent(e) {
        e.preventDefault();
        
        const contentData = {
            siteTitle: document.getElementById('site-title').value,
            siteDescription: document.getElementById('site-description').value,
            heroTitle: document.getElementById('hero-title').value,
            heroSubtitle: document.getElementById('hero-subtitle').value
        };

        try {
            // In a real implementation, this would send to an API
            console.log('Updating site content:', contentData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.showNotification('Content updated successfully!', 'success');
            this.closeModal('edit-content-modal');
            
        } catch (error) {
            console.error('Error updating content:', error);
            this.showNotification('Error updating content. Please try again.', 'error');
        }
    }

    async handleSiteSettings(e) {
        e.preventDefault();
        
        const settingsData = {
            contactEmail: document.getElementById('contact-email').value,
            contactPhone: document.getElementById('contact-phone').value,
            linkedinUrl: document.getElementById('linkedin-url').value,
            twitterUrl: document.getElementById('twitter-url').value,
            analyticsId: document.getElementById('analytics-id').value
        };

        try {
            // In a real implementation, this would send to an API
            console.log('Updating site settings:', settingsData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            this.showNotification('Settings updated successfully!', 'success');
            this.closeModal('site-settings-modal');
            
        } catch (error) {
            console.error('Error updating settings:', error);
            this.showNotification('Error updating settings. Please try again.', 'error');
        }
    }

    async handleImageUpload(e) {
        const files = Array.from(e.target.files);
        
        if (files.length === 0) return;

        try {
            for (const file of files) {
                // Validate file
                if (!file.type.startsWith('image/')) {
                    this.showNotification(`${file.name} is not a valid image file.`, 'error');
                    continue;
                }

                if (file.size > 5 * 1024 * 1024) { // 5MB limit
                    this.showNotification(`${file.name} is too large. Maximum size is 5MB.`, 'error');
                    continue;
                }

                // In a real implementation, this would upload to a server
                console.log('Uploading image:', file.name);
                
                // Simulate upload
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            
            this.showNotification(`${files.length} image(s) uploaded successfully!`, 'success');
            
            // Refresh images grid
            this.loadImagesGrid();
            
        } catch (error) {
            console.error('Error uploading images:', error);
            this.showNotification('Error uploading images. Please try again.', 'error');
        }
    }

    loadImagesGrid() {
        // In a real implementation, this would fetch the updated images list
        console.log('Refreshing images grid');
    }

    logout() {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('admin_session');
            window.location.href = '/admin/';
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-out'
        });

        // Set background color based on type
        const colors = {
            success: '#34C759',
            error: '#FF3B30',
            warning: '#FF9500',
            info: '#007AFF'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Modal management functions (global scope for onclick handlers)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AdminDashboard();
});

// Auto-save functionality for forms
class AutoSave {
    constructor() {
        this.saveInterval = 30000; // 30 seconds
        this.init();
    }

    init() {
        this.bindAutoSave();
    }

    bindAutoSave() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    this.saveFormData(form.id, input.name || input.id, input.value);
                });
            });
        });

        // Load saved data on page load
        this.loadSavedData();
    }

    saveFormData(formId, fieldName, value) {
        if (!formId || !fieldName) return;
        
        const savedData = JSON.parse(localStorage.getItem('admin_autosave') || '{}');
        if (!savedData[formId]) {
            savedData[formId] = {};
        }
        savedData[formId][fieldName] = value;
        savedData[formId].lastSaved = new Date().toISOString();
        
        localStorage.setItem('admin_autosave', JSON.stringify(savedData));
    }

    loadSavedData() {
        const savedData = JSON.parse(localStorage.getItem('admin_autosave') || '{}');
        
        Object.keys(savedData).forEach(formId => {
            const form = document.getElementById(formId);
            if (!form) return;
            
            const formData = savedData[formId];
            Object.keys(formData).forEach(fieldName => {
                if (fieldName === 'lastSaved') return;
                
                const field = form.querySelector(`[name="${fieldName}"], #${fieldName}`);
                if (field && formData[fieldName]) {
                    field.value = formData[fieldName];
                }
            });
        });
    }

    clearSavedData(formId) {
        const savedData = JSON.parse(localStorage.getItem('admin_autosave') || '{}');
        if (savedData[formId]) {
            delete savedData[formId];
            localStorage.setItem('admin_autosave', JSON.stringify(savedData));
        }
    }
}

// Initialize auto-save
document.addEventListener('DOMContentLoaded', () => {
    new AutoSave();
});

