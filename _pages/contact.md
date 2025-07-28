---
layout: default
title: Contact Ivan Moreira
description: Get in touch to discuss your digital transformation, project management, or strategic consulting needs.
permalink: /contact/
---

<section class="page-hero">
    <div class="page-hero-container">
        <h1 class="page-title">Let's Transform Together</h1>
        <p class="page-subtitle">Ready to accelerate your organization's transformation journey?</p>
    </div>
</section>

<section class="contact-main">
    <div class="contact-container">
        <div class="contact-content">
            <div class="contact-info">
                <h2>Get in Touch</h2>
                <p>I'm here to help you navigate complex transformations and achieve exceptional results. Whether you're looking for strategic consulting, project management expertise, or speaking engagements, let's start the conversation.</p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">📧</div>
                        <div class="method-details">
                            <h3>Email</h3>
                            <p>{{ site.contact.email }}</p>
                            <a href="mailto:{{ site.contact.email }}" class="method-link">Send Email</a>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">📞</div>
                        <div class="method-details">
                            <h3>Phone</h3>
                            <p>{{ site.contact.phone }}</p>
                            <a href="tel:{{ site.contact.phone }}" class="method-link">Call Now</a>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">🌍</div>
                        <div class="method-details">
                            <h3>Location</h3>
                            <p>{{ site.contact.address }}</p>
                            <span class="method-note">Available worldwide</span>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">💼</div>
                        <div class="method-details">
                            <h3>LinkedIn</h3>
                            <p>Connect professionally</p>
                            <a href="{{ site.data.site.social.linkedin }}" class="method-link" target="_blank">View Profile</a>
                        </div>
                    </div>
                </div>
                
                <div class="response-time">
                    <h3>Response Time</h3>
                    <p>I typically respond to inquiries within 24 hours during business days. For urgent matters, please call directly.</p>
                </div>
            </div>
            
            <div class="contact-form-section">
                <form class="contact-form">
                    <h2>Send a Message</h2>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name *</label>
                            <input type="text" id="firstName" name="firstName" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="lastName">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="company">Company/Organization</label>
                        <input type="text" id="company" name="company">
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    
                    <div class="form-group">
                        <label for="inquiryType">Type of Inquiry *</label>
                        <select id="inquiryType" name="inquiryType" required>
                            <option value="">Select inquiry type</option>
                            <option value="consulting">Strategic Consulting</option>
                            <option value="project-management">Project Management</option>
                            <option value="digital-transformation">Digital Transformation</option>
                            <option value="speaking">Speaking Engagement</option>
                            <option value="training">Training & Workshops</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="timeline">Project Timeline</label>
                        <select id="timeline" name="timeline">
                            <option value="">Select timeline</option>
                            <option value="immediate">Immediate (within 1 month)</option>
                            <option value="short-term">Short-term (1-3 months)</option>
                            <option value="medium-term">Medium-term (3-6 months)</option>
                            <option value="long-term">Long-term (6+ months)</option>
                            <option value="planning">Planning phase</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="budget">Budget Range</label>
                        <select id="budget" name="budget">
                            <option value="">Select budget range</option>
                            <option value="under-25k">Under $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k-250k">$100,000 - $250,000</option>
                            <option value="250k-plus">$250,000+</option>
                            <option value="discuss">Prefer to discuss</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="6" placeholder="Please describe your project, challenges, or questions in detail..." required></textarea>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="newsletter" value="yes">
                            <span class="checkmark"></span>
                            Subscribe to newsletter for insights on digital transformation and project management
                        </label>
                    </div>
                    
                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="privacy" value="yes" required>
                            <span class="checkmark"></span>
                            I agree to the <a href="/privacy/" target="_blank">privacy policy</a> and terms of service *
                        </label>
                    </div>
                    
                    <button type="submit" class="cta-button primary">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>

<section class="consultation-info">
    <div class="consultation-container">
        <h2 class="section-title">Free Initial Consultation</h2>
        
        <div class="consultation-content">
            <div class="consultation-details">
                <h3>What to Expect</h3>
                <ul>
                    <li><strong>30-minute discovery call</strong> to understand your challenges and objectives</li>
                    <li><strong>Initial assessment</strong> of your current state and transformation needs</li>
                    <li><strong>Strategic recommendations</strong> for potential approaches and solutions</li>
                    <li><strong>Clear next steps</strong> and proposal for engagement if there's a good fit</li>
                </ul>
                
                <h3>Who Should Schedule</h3>
                <ul>
                    <li>C-level executives and senior leaders</li>
                    <li>Project managers and transformation leaders</li>
                    <li>Organizations planning digital transformation</li>
                    <li>Event organizers seeking speakers</li>
                </ul>
            </div>
            
            <div class="consultation-cta">
                <h3>Ready to Get Started?</h3>
                <p>Schedule your complimentary consultation to explore how we can accelerate your transformation journey.</p>
                <a href="https://calendly.com/ivanmoreira" class="cta-button primary" target="_blank">Schedule Consultation</a>
                <p class="consultation-note">Or use the contact form above to share more details about your needs.</p>
            </div>
        </div>
    </div>
</section>

<section class="faq-section">
    <div class="faq-container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        
        <div class="faq-grid">
            <div class="faq-item">
                <h3>What types of projects do you typically work on?</h3>
                <p>I specialize in digital transformation initiatives, complex project management, AI integration strategies, and organizational change management. Projects range from startup scaling to enterprise-wide transformations.</p>
            </div>
            
            <div class="faq-item">
                <h3>Do you work with international clients?</h3>
                <p>Yes, I work with clients globally and have experience across diverse markets and cultures. I'm comfortable with remote collaboration and international travel when needed.</p>
            </div>
            
            <div class="faq-item">
                <h3>What is your typical engagement model?</h3>
                <p>Engagements vary based on needs - from short-term strategic advisory to long-term transformation partnerships. I offer flexible models including project-based, retainer, and hybrid arrangements.</p>
            </div>
            
            <div class="faq-item">
                <h3>How do you measure success?</h3>
                <p>Success is measured through clearly defined KPIs established at project start, including business impact metrics, stakeholder satisfaction, and sustainable capability development.</p>
            </div>
            
            <div class="faq-item">
                <h3>What industries do you have experience in?</h3>
                <p>I've worked across technology, financial services, healthcare, manufacturing, retail, and government sectors. My methodologies are adaptable to various industry contexts.</p>
            </div>
            
            <div class="faq-item">
                <h3>Do you provide training and workshops?</h3>
                <p>Yes, I offer customized training programs, workshops, and masterclasses on project management, digital transformation, and leadership development for teams and organizations.</p>
            </div>
        </div>
    </div>
</section>

<section class="social-proof">
    <div class="social-container">
        <h2 class="section-title">Trusted by Leading Organizations</h2>
        
        <div class="client-logos">
            <div class="logo-item">TechCorp Global</div>
            <div class="logo-item">Innovation Labs</div>
            <div class="logo-item">Global Dynamics</div>
            <div class="logo-item">Future Systems</div>
            <div class="logo-item">Digital Solutions Inc</div>
            <div class="logo-item">Transform Co</div>
        </div>
        
        <div class="social-stats">
            <div class="stat-item">
                <div class="stat-number">200+</div>
                <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">95%</div>
                <div class="stat-label">Client Satisfaction</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Speaking Engagements</div>
            </div>
        </div>
    </div>
</section>

<style>
/* Contact page specific styles */
.contact-main {
    padding: var(--spacing-3xl) 0;
}

.contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
}

.contact-methods {
    margin: var(--spacing-2xl) 0;
}

.contact-method {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
    padding: var(--spacing-lg);
    background-color: var(--background-secondary);
    border-radius: var(--radius-lg);
}

.method-icon {
    font-size: var(--font-size-2xl);
    min-width: 50px;
}

.method-details h3 {
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.method-link {
    color: var(--primary-color);
    font-weight: 600;
    text-decoration: none;
}

.method-note {
    font-size: var(--font-size-sm);
    color: var(--text-tertiary);
}

.contact-form {
    background-color: var(--background-secondary);
    padding: var(--spacing-2xl);
    border-radius: var(--radius-xl);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
}

.form-group {
    margin-bottom: var(--spacing-lg);
}

.form-group label {
    display: block;
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
    color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background-color: var(--background-primary);
    color: var(--text-primary);
    font-family: var(--font-family);
    transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.checkbox-group {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
}

.checkbox-label {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    cursor: pointer;
    font-size: var(--font-size-sm);
    line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
    width: auto;
    margin: 0;
}

.consultation-info {
    padding: var(--spacing-3xl) 0;
    background-color: var(--background-secondary);
}

.consultation-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.consultation-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    align-items: start;
}

.consultation-details ul {
    list-style: none;
    padding: 0;
}

.consultation-details li {
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--border-color);
}

.consultation-cta {
    background-color: var(--background-primary);
    padding: var(--spacing-2xl);
    border-radius: var(--radius-xl);
    text-align: center;
}

.consultation-note {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    margin-top: var(--spacing-md);
}

.faq-section {
    padding: var(--spacing-3xl) 0;
}

.faq-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: var(--spacing-2xl);
}

.faq-item {
    background-color: var(--background-secondary);
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
}

.faq-item h3 {
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
}

.social-proof {
    padding: var(--spacing-3xl) 0;
    background-color: var(--background-secondary);
}

.social-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    text-align: center;
}

.client-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-lg);
    margin: var(--spacing-2xl) 0;
}

.logo-item {
    padding: var(--spacing-lg);
    background-color: var(--background-primary);
    border-radius: var(--radius-md);
    font-weight: 600;
    color: var(--text-secondary);
}

.social-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
}

@media (max-width: 768px) {
    .contact-content,
    .consultation-content {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .faq-grid {
        grid-template-columns: 1fr;
    }
}
</style>

