---
layout: default
title: Blog & Articles
description: Thought leadership articles on digital transformation, AI-enhanced project management, and strategic consulting insights.
permalink: /blog/
---

<section class="page-hero">
    <div class="page-hero-container">
        <h1 class="page-title">Blog & Articles</h1>
        <p class="page-subtitle">Insights on digital transformation, AI, and project management excellence</p>
    </div>
</section>

<section class="blog-featured">
    <div class="blog-container">
        <h2 class="section-title">Featured Articles</h2>
        
        <div class="featured-grid">
            {% assign featured_posts = site.posts | where: "featured", true | limit: 2 %}
            {% for post in featured_posts %}
            <article class="featured-article">
                <div class="featured-image">
                    <img src="{{ post.image | default: '/assets/images/blog-default.jpg' }}" alt="{{ post.title }}">
                </div>
                <div class="featured-content">
                    <div class="article-meta">
                        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                        <span class="article-category">{{ post.category }}</span>
                        <span class="read-time">{{ post.read_time | default: "5 min read" }}</span>
                    </div>
                    <h3 class="article-title">{{ post.title }}</h3>
                    <p class="article-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
                    <a href="{{ post.url }}" class="cta-button secondary">Read Full Article</a>
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<section class="blog-categories">
    <div class="blog-container">
        <h2 class="section-title">Article Categories</h2>
        
        <div class="categories-grid">
            <div class="category-card">
                <div class="category-icon">🤖</div>
                <h3>AI & Technology</h3>
                <p>Exploring the intersection of artificial intelligence and business transformation.</p>
                <div class="category-count">8 Articles</div>
            </div>
            
            <div class="category-card">
                <div class="category-icon">🎯</div>
                <h3>Project Management</h3>
                <p>Best practices, methodologies, and innovations in project delivery excellence.</p>
                <div class="category-count">12 Articles</div>
            </div>
            
            <div class="category-card">
                <div class="category-icon">🔄</div>
                <h3>Digital Transformation</h3>
                <p>Strategic insights on organizational change and digital evolution.</p>
                <div class="category-count">10 Articles</div>
            </div>
            
            <div class="category-card">
                <div class="category-icon">👑</div>
                <h3>Leadership</h3>
                <p>Leadership principles and practices for the digital age.</p>
                <div class="category-count">6 Articles</div>
            </div>
        </div>
    </div>
</section>

<section class="blog-articles">
    <div class="blog-container">
        <h2 class="section-title">Latest Articles</h2>
        
        <div class="articles-grid">
            {% for post in site.posts limit: 9 %}
            <article class="blog-card">
                <div class="blog-image">
                    <img src="{{ post.image | default: '/assets/images/blog-default.jpg' }}" alt="{{ post.title }}">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
                        <span class="blog-category">{{ post.category }}</span>
                    </div>
                    <h3 class="blog-title">{{ post.title }}</h3>
                    <p class="blog-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
                    <div class="blog-footer">
                        <span class="read-time">{{ post.read_time | default: "5 min read" }}</span>
                        <a href="{{ post.url }}" class="blog-link">Read More</a>
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>
        
        <div class="pagination">
            <div class="pagination-info">
                Showing 1-9 of {{ site.posts.size }} articles
            </div>
            <div class="pagination-controls">
                <button class="pagination-btn" disabled>Previous</button>
                <span class="pagination-current">1</span>
                <button class="pagination-btn">Next</button>
            </div>
        </div>
    </div>
</section>

<section class="newsletter-signup">
    <div class="newsletter-container">
        <div class="newsletter-content">
            <h2 class="newsletter-title">Stay Updated</h2>
            <p class="newsletter-description">Subscribe to receive the latest insights on digital transformation, AI, and project management directly in your inbox.</p>
            
            <form class="newsletter-form">
                <div class="form-group">
                    <input type="email" placeholder="Enter your email address" required>
                    <button type="submit" class="cta-button primary">Subscribe</button>
                </div>
                <p class="newsletter-privacy">No spam, unsubscribe at any time. Read our <a href="/privacy/">privacy policy</a>.</p>
            </form>
        </div>
    </div>
</section>

<section class="blog-archive">
    <div class="blog-container">
        <h2 class="section-title">Article Archive</h2>
        
        <div class="archive-filters">
            <div class="filter-group">
                <label for="year-filter">Year:</label>
                <select id="year-filter">
                    <option value="">All Years</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label for="category-filter">Category:</label>
                <select id="category-filter">
                    <option value="">All Categories</option>
                    <option value="ai-technology">AI & Technology</option>
                    <option value="project-management">Project Management</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="leadership">Leadership</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label for="search-filter">Search:</label>
                <input type="text" id="search-filter" placeholder="Search articles...">
            </div>
        </div>
        
        <div class="archive-list">
            {% for post in site.posts %}
            <div class="archive-item" data-year="{{ post.date | date: '%Y' }}" data-category="{{ post.category | slugify }}">
                <div class="archive-date">{{ post.date | date: "%b %d, %Y" }}</div>
                <div class="archive-content">
                    <h3 class="archive-title"><a href="{{ post.url }}">{{ post.title }}</a></h3>
                    <p class="archive-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
                    <div class="archive-meta">
                        <span class="archive-category">{{ post.category }}</span>
                        <span class="archive-read-time">{{ post.read_time | default: "5 min read" }}</span>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<section class="contact-cta">
    <div class="contact-cta-container">
        <div class="contact-cta-content">
            <h2 class="contact-cta-title">Have a Topic Suggestion?</h2>
            <p class="contact-cta-description">I'm always interested in exploring new topics and answering questions from the community. Share your ideas or questions.</p>
            <a href="/contact/" class="cta-button primary">Suggest a Topic</a>
        </div>
    </div>
</section>

<script>
// Blog filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const yearFilter = document.getElementById('year-filter');
    const categoryFilter = document.getElementById('category-filter');
    const searchFilter = document.getElementById('search-filter');
    const archiveItems = document.querySelectorAll('.archive-item');
    
    function filterArticles() {
        const selectedYear = yearFilter.value;
        const selectedCategory = categoryFilter.value;
        const searchTerm = searchFilter.value.toLowerCase();
        
        archiveItems.forEach(item => {
            const itemYear = item.dataset.year;
            const itemCategory = item.dataset.category;
            const itemText = item.textContent.toLowerCase();
            
            const yearMatch = !selectedYear || itemYear === selectedYear;
            const categoryMatch = !selectedCategory || itemCategory === selectedCategory;
            const searchMatch = !searchTerm || itemText.includes(searchTerm);
            
            if (yearMatch && categoryMatch && searchMatch) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    yearFilter.addEventListener('change', filterArticles);
    categoryFilter.addEventListener('change', filterArticles);
    searchFilter.addEventListener('input', filterArticles);
});
</script>

