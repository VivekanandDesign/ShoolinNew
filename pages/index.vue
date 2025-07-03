<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <!-- Animated Background -->
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
          <div class="shape shape-6"></div>
        </div>
        <div class="grid-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-line" data-text="Professional Legal">Professional Legal</span>
            <span class="title-line" data-text="Consultancy Services">Consultancy Services</span>
          </h1>
          <p class="hero-subtitle">
            Expert legal guidance with integrity, professionalism, and comprehensive solutions 
            for your business and personal legal needs.
          </p>
          <div class="hero-buttons">
            <nuxt-link to="/services" class="btn btn-primary">
              <span>Our Services</span>
              <div class="btn-animation"></div>
            </nuxt-link>
            <nuxt-link to="/contact" class="btn btn-secondary">
              <span>Get Consultation</span>
              <div class="btn-animation"></div>
            </nuxt-link>
          </div>
        </div>
        <div class="hero-visual">
          <div class="legal-icon-container">
            <div class="legal-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M12 1L2 5.75V7H22V5.75L12 1ZM10 3.25C10 3.11 10.09 3 10.24 3H13.76C13.91 3 14 3.11 14 3.25V4H10V3.25ZM5 9V18H3V20H21V18H19V9H17V18H15V9H13V18H11V9H9V18H7V9H5ZM2 21V23H22V21H2Z"/>
              </svg>
            </div>
            <div class="icon-rings">
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
              <div class="ring ring-3"></div>
            </div>
          </div>
          <div class="floating-elements">
            <div class="element element-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
              </svg>
            </div>
            <div class="element element-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M15.5 1H7.5C6.12 1 5 2.12 5 3.5V20.5C5 21.88 6.12 23 7.5 23H15.5C16.88 23 18 21.88 18 20.5V3.5C18 2.12 16.88 1 15.5 1ZM11.5 14C9.84 14 8.5 12.66 8.5 11C8.5 9.34 9.84 8 11.5 8C13.16 8 14.5 9.34 14.5 11C14.5 12.66 13.16 14 11.5 14ZM7 16.5C7 15.12 8.12 14 9.5 14H13.5C14.88 14 16 15.12 16 16.5V17H7V16.5Z"/>
              </svg>
            </div>
            <div class="element element-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section class="features-section">
      <!-- Advanced Background Elements -->
      <div class="features-background">
        <div class="floating-particles">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-3"></div>
          <div class="particle particle-4"></div>
          <div class="particle particle-5"></div>
          <div class="particle particle-6"></div>
        </div>
        <div class="features-pattern"></div>
        <div class="gradient-orbs">
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
        </div>
      </div>
      
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Excellence & Innovation</div>
          <h2 class="section-title">
            <span class="title-decoration">Why Choose</span>
            <span class="title-highlight">Shoolin Consultancy</span>
          </h2>
          <p class="section-subtitle">
            Excellence, integrity, and innovation define our approach to legal consultancy.
            We deliver exceptional results through expertise and dedication.
          </p>
          <div class="title-decoration-line">
            <div class="decoration-line"></div>
            <div class="decoration-dot"></div>
            <div class="decoration-line"></div>
          </div>
        </div>
        
        <div class="features-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-card-inner">
              <div class="card-number">01</div>
              <div class="feature-icon-wrapper">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div class="icon-background expert-guidance-bg"></div>
                <div class="icon-particles">
                  <div class="particle particle-1"></div>
                  <div class="particle particle-2"></div>
                  <div class="particle particle-3"></div>
                </div>
                <div class="icon-ring-outer"></div>
                <div class="icon-ring-inner"></div>
              </div>
              <div class="feature-content">
                <h3>Expert Guidance</h3>
                <p>Comprehensive legal expertise across multiple practice areas with professional excellence and decades of combined experience.</p>
                <ul class="feature-benefits">
                  <li><span class="benefit-icon">✓</span> Multi-disciplinary expertise</li>
                  <li><span class="benefit-icon">✓</span> Proven track record</li>
                  <li><span class="benefit-icon">✓</span> Strategic solutions</li>
                </ul>
                <div class="feature-stats-mini">
                  <div class="mini-stat" data-count="500" data-suffix="+">
                    <span class="mini-number">0</span>
                    <span class="mini-label">Cases</span>
                  </div>
                </div>
              </div>
              <div class="card-glow"></div>
              <div class="card-border-animation"></div>
            </div>
          </div>
          
          <div class="feature-card featured-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-card-inner">
              <div class="card-number">02</div>
              <div class="feature-icon-wrapper">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M15.5 12c2.5 0 4.5 2 4.5 4.5 0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5m-3-4C12.5 10 12.5 8 9 8c0 0-1.47 0-2.26.91C6.6 9.03 2 15.5 2 15.5l7.87 7.88S16 19.3 16.62 18.74c.59-.54 1.38-2.26 1.38-2.26.22-4.62-2-6.48-5.5-6.48z"/>
                  </svg>
                </div>
                <div class="icon-background trusted-partnership-bg"></div>
                <div class="icon-particles">
                  <div class="particle particle-1"></div>
                  <div class="particle particle-2"></div>
                  <div class="particle particle-3"></div>
                </div>
                <div class="icon-ring-outer"></div>
                <div class="icon-ring-inner"></div>
              </div>
              <div class="feature-content">
                <h3>Trusted Partnership</h3>
                <p>Building lasting relationships based on trust, transparency, and exceptional service delivery that exceeds expectations.</p>
                <ul class="feature-benefits">
                  <li><span class="benefit-icon">✓</span> Long-term relationships</li>
                  <li><span class="benefit-icon">✓</span> Transparent communication</li>
                  <li><span class="benefit-icon">✓</span> Client-first approach</li>
                </ul>
                <div class="feature-stats-mini">
                  <div class="mini-stat" data-count="98" data-suffix="%">
                    <span class="mini-number">0</span>
                    <span class="mini-label">Success</span>
                  </div>
                </div>
              </div>
              <div class="card-glow"></div>
              <div class="card-border-animation"></div>
            </div>
          </div>
          
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-card-inner">
              <div class="card-number">03</div>
              <div class="feature-icon-wrapper">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v1h4v-1zm0 3H8v1h8v-1zm0 3H8v1h8v-1z"/>
                  </svg>
                </div>
                <div class="icon-background regulatory-compliance-bg"></div>
                <div class="icon-particles">
                  <div class="particle particle-1"></div>
                  <div class="particle particle-2"></div>
                  <div class="particle particle-3"></div>
                </div>
                <div class="icon-ring-outer"></div>
                <div class="icon-ring-inner"></div>
              </div>
              <div class="feature-content">
                <h3>Regulatory Compliance</h3>
                <p>Ensuring full compliance with Bar Council of India regulations and maintaining the highest ethical standards in practice.</p>
                <ul class="feature-benefits">
                  <li><span class="benefit-icon">✓</span> Full BCI compliance</li>
                  <li><span class="benefit-icon">✓</span> Ethical practice standards</li>
                  <li><span class="benefit-icon">✓</span> Professional integrity</li>
                </ul>
                <div class="feature-stats-mini">
                  <div class="mini-stat" data-count="24/7" data-suffix="">
                    <span class="mini-number">0</span>
                    <span class="mini-label">Support</span>
                  </div>
                </div>
              </div>
              <div class="card-glow"></div>
              <div class="card-border-animation"></div>
            </div>
          </div>
        </div>
        
        <div class="features-stats">
          <div class="stat-item" data-aos="zoom-in" data-aos-delay="400">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </div>
            <div class="stat-number">0</div>
            <div class="stat-label">Cases Handled</div>
            <div class="stat-progress">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="stat-item" data-aos="zoom-in" data-aos-delay="500">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M16 3H8C6.9 3 6 3.9 6 5v3c0 2.55 1.67 4.7 4 5.42v2.08c-1.17.35-2 1.44-2 2.67V19h8v-0.83c0-1.22-.83-2.31-2-2.67v-2.08c2.33-.72 4-2.87 4-5.42V5c0-1.1-.9-2-2-2zm0 8c0 2.21-1.79 4-4 4s-4-1.79-4-4V5h8v6z"/>
              </svg>
            </div>
            <div class="stat-number">0</div>
            <div class="stat-label">Success Rate</div>
            <div class="stat-progress">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="stat-item" data-aos="zoom-in" data-aos-delay="600">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/>
              </svg>
            </div>
            <div class="stat-number">0</div>
            <div class="stat-label">Years Experience</div>
            <div class="stat-progress">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="stat-item" data-aos="zoom-in" data-aos-delay="700">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-13H13v6l5.25 3.15-.75 1.23-6-3.6V7z"/>
              </svg>
            </div>
            <div class="stat-number">0</div>
            <div class="stat-label">Support Available</div>
            <div class="stat-progress">
              <div class="progress-bar"></div>
            </div>
          </div>
        </div>
        
        <div class="features-cta">
          <nuxt-link to="/about" class="btn btn-primary btn-cta">
            <span>Discover Our Excellence</span>
            <div class="btn-animation"></div>
            <div class="btn-arrow">→</div>
          </nuxt-link>
          <nuxt-link to="/contact" class="btn btn-secondary btn-cta">
            <span>Start Your Journey</span>
            <div class="btn-animation"></div>
            <div class="btn-arrow">→</div>
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- Services Overview Section -->
    <section class="services-overview">
      <div class="services-background">
        <div class="services-pattern"></div>
        <div class="services-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Expertise & Excellence</div>
          <h2 class="section-title">
            <span class="title-decoration">Comprehensive</span>
            <span class="title-highlight">Legal Solutions</span>
          </h2>
          <p class="section-subtitle">
            Professional legal services tailored to meet your specific needs with
            the highest standards of integrity and excellence.
          </p>
        </div>
        
        <div class="services-content">
          <div class="services-text">
            <p class="services-intro">
              At Shoolin Consultancy, we provide professional legal services across various practice areas. 
              Our experienced team is committed to delivering exceptional results while maintaining the 
              highest standards of professional ethics.
            </p>
            
            <div class="services-grid">
              <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M10 20H6V4h7v5h5v3.1l2-2V8l-6-6H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h4v-2zm10.2-7c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1-2.1-2.1 1-1c.1-.1.2-.2.4-.2zm0 3.9L14.1 23H12v-2.1l6.1-6.1 2.1 2.1z" />
                  </svg>
                </div>
                <h3>Corporate Law & Compliance</h3>
                <p>Expert guidance on corporate structuring, regulatory compliance, and governance frameworks.</p>
                <div class="service-hover-info">
                  <ul>
                    <li>Company formations</li>
                    <li>Regulatory frameworks</li>
                    <li>Governance structures</li>
                  </ul>
                </div>
              </div>
              
              <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <h3>Business Advisory Services</h3>
                <p>Strategic legal counsel for businesses at all stages, from startups to established enterprises.</p>
                <div class="service-hover-info">
                  <ul>
                    <li>Contract negotiations</li>
                    <li>Business strategy</li>
                    <li>Risk management</li>
                  </ul>
                </div>
              </div>
              
              <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v1h4v-1zm0 3H8v1h8v-1zm0 3H8v1h8v-1z" />
                  </svg>
                </div>
                <h3>Legal Documentation</h3>
                <p>Precise and comprehensive legal documentation services tailored to your specific requirements.</p>
                <div class="service-hover-info">
                  <ul>
                    <li>Contract drafting</li>
                    <li>Agreement reviews</li>
                    <li>Legal audits</li>
                  </ul>
                </div>
              </div>
              
              <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                <div class="service-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
                <h3>Litigation Support</h3>
                <p>Expert representation and strategic advice for all your litigation and dispute resolution needs.</p>
                <div class="service-hover-info">
                  <ul>
                    <li>Case preparation</li>
                    <li>Arbitration</li>
                    <li>Court representation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="services-action">
              <nuxt-link to="/services" class="btn btn-outline btn-animated">
                <span>View All Services</span>
                <div class="btn-animation"></div>
                <div class="btn-arrow">→</div>
              </nuxt-link>
            </div>
          </div>
          
          <div class="services-visual">
            <div class="service-highlights">
              <div class="highlight-item" data-aos="fade-left" data-aos-delay="100">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" />
                  </svg>
                </div>
                <span class="highlight-number">10+</span>
                <span class="highlight-text">Years Experience</span>
                <div class="highlight-progress">
                  <div class="progress-bar"></div>
                </div>
              </div>
              
              <div class="highlight-item" data-aos="fade-left" data-aos-delay="200">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z" />
                  </svg>
                </div>
                <span class="highlight-number">100%</span>
                <span class="highlight-text">Compliance</span>
                <div class="highlight-progress">
                  <div class="progress-bar"></div>
                </div>
              </div>
              
              <div class="highlight-item" data-aos="fade-left" data-aos-delay="300">
                <div class="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-13H13v6l5.25 3.15-.75 1.23-6-3.6V7z" />
                  </svg>
                </div>
                <span class="highlight-number">24/7</span>
                <span class="highlight-text">Support</span>
                <div class="highlight-progress">
                  <div class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Professional Legal Consultation?</h2>
          <p>Contact us today to discuss your legal requirements and how we can assist you.</p>
          <div class="cta-buttons">
            <nuxt-link to="/contact" class="btn btn-primary">Contact Us</nuxt-link>
            <nuxt-link to="/about" class="btn btn-secondary">Learn More</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // Stats for counter animation
      stats: [
        { id: 'cases', target: 500, current: 0, suffix: '', animationDone: false },
        { id: 'success', target: 98, current: 0, suffix: '%', animationDone: false },
        { id: 'experience', target: 15, current: 0, suffix: '', animationDone: false },
        { id: 'support', target: 0, current: 0, suffix: '', animationDone: false } // Special case for "24/7"
      ],
      observer: null,
      miniStatsObserver: null
    }
  },
  mounted() {
    // Set up Intersection Observer to trigger animations when elements are visible
    this.setupIntersectionObserver()
    
    // Set up observer for mini stats
    this.setupMiniStatsObserver()
  },
  methods: {
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('stat-item')) {
              // Get the index of the stat item
              const statElements = Array.from(document.querySelectorAll('.stat-item'))
              const index = statElements.indexOf(entry.target)
              
              if (index !== -1 && index < this.stats.length) {
                if (this.stats[index].id === 'support') {
                  // Special case for "24/7" support
                  this.stats[index].animationDone = true
                  
                  // Add animated class for progress bar
                  entry.target.classList.add('animated')
                  
                  setTimeout(() => {
                    const el = entry.target.querySelector('.stat-number')
                    if (el) el.textContent = '24/7'
                  }, 500)
                } else if (!this.stats[index].animationDone) {
                  this.animateCounter(index, entry.target)
                }
              }
            }
          }
        })
      }, {
        threshold: 0.2 // Trigger when at least 20% of the element is visible
      })

      // Observe all stat items
      document.querySelectorAll('.stat-item').forEach(item => {
        this.observer.observe(item)
      })
    },
    animateCounter(index, targetElement) {
      const stat = this.stats[index]
      const duration = 2000 // Animation duration in ms
      const steps = 60 // Number of steps to take
      const stepValue = stat.target / steps
      const stepTime = duration / steps
      const numberElement = targetElement.querySelector('.stat-number')
      
      // Mark this animation as started to prevent duplicate animations
      this.stats[index].animationDone = true
      
      // Add animated class to trigger progress bar animation
      targetElement.classList.add('animated')
      
      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current >= stat.target) {
          current = stat.target
          clearInterval(timer)
        }
        
        // Update the DOM with the new value
        if (numberElement) {
          numberElement.textContent = Math.round(current) + stat.suffix
        }
        
        // Update the reactive state
        this.stats[index].current = Math.round(current)
      }, stepTime)
    },
    setupMiniStatsObserver() {
      this.miniStatsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const miniStat = entry.target;
            const numberElement = miniStat.querySelector('.mini-number');
            
            if (numberElement && !miniStat.classList.contains('animated')) {
              miniStat.classList.add('animated');
              
              const countTarget = miniStat.dataset.count;
              const suffix = miniStat.dataset.suffix || '';
              
              // Special case for "24/7" support
              if (countTarget === "24/7") {
                setTimeout(() => {
                  numberElement.textContent = "24/7";
                }, 500);
                return;
              }
              
              // Regular numeric counter
              const target = parseInt(countTarget, 10);
              if (isNaN(target)) return;
              
              const duration = 2000;
              const steps = 60;
              const stepValue = target / steps;
              const stepTime = duration / steps;
              
              let current = 0;
              const timer = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                
                numberElement.textContent = Math.round(current) + suffix;
              }, stepTime);
            }
          }
        });
      }, {
        threshold: 0.2
      });
      
      // Observe all mini-stat elements
      document.querySelectorAll('.mini-stat').forEach(item => {
        this.miniStatsObserver.observe(item);
      });
    }
  },
  beforeDestroy() {
    // Clean up the observers when component is destroyed
    if (this.observer) {
      this.observer.disconnect()
    }
    if (this.miniStatsObserver) {
      this.miniStatsObserver.disconnect()
    }
  },
  head() {
    return {
      title: 'Shoolin Consultancy - Professional Legal Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Professional legal consultancy services with expert guidance, regulatory compliance, and comprehensive solutions for business and personal legal needs.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  font-family: 'Poppins', sans-serif;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(220, 220, 220, 0.3) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(220, 220, 220, 0.3) 0%, transparent 30%);
}

/* Animated Background */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  transform: rotate(45deg);
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 20%;
  right: 15%;
  animation-delay: 1s;
  border-radius: 50%;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
  transform: rotate(30deg);
}

.shape-4 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 25%;
  animation-delay: 3s;
  border-radius: 50%;
}

.shape-5 {
  width: 120px;
  height: 60px;
  top: 40%;
  left: 80%;
  animation-delay: 4s;
  border-radius: 30px;
}

.shape-6 {
  width: 70px;
  height: 70px;
  bottom: 10%;
  right: 10%;
  animation-delay: 5s;
  transform: rotate(60deg);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-text {
  animation: slideInLeft 1s ease-out;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  perspective: 1000px;
}

.title-line {
  display: block;
  position: relative;
  animation: titleReveal 1.5s ease-out forwards;
  opacity: 0;
  transform: translateY(50px);
}

.title-line:nth-child(1) {
  animation-delay: 0.2s;
}

.title-line:nth-child(2) {
  animation-delay: 0.4s;
}

.title-line::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 2s infinite;
}

@keyframes titleReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  animation: fadeInUp 1s ease-out 0.6s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.8s both;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: slideInRight 1s ease-out 0.4s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.legal-icon-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

.legal-icon {
  font-size: 8rem;
  z-index: 3;
  position: relative;
  width: 150px;
  height: 150px;
  animation: iconFloat 4s ease-in-out infinite, iconRotate 20s linear infinite;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
  transform-style: preserve-3d;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0px) rotateX(0deg);
  }
  50% {
    transform: translateY(-20px) rotateX(10deg);
  }
}

@keyframes iconRotate {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

.icon-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring {
  position: absolute;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: rgba(0, 0, 0, 0.3);
  animation: ringRotate 8s linear infinite;
}

.ring-1 {
  width: 200px;
  height: 200px;
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.ring-2 {
  width: 250px;
  height: 250px;
  top: -125px;
  left: -125px;
  animation-delay: 1s;
  animation-direction: reverse;
}

.ring-3 {
  width: 300px;
  height: 300px;
  top: -150px;
  left: -150px;
  animation-delay: 2s;
}

@keyframes ringRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  animation: elementFloat 6s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
  color: #000;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.element-1 {
  top: 10%;
  right: 20%;
  animation-delay: 0s;
}

.element-2 {
  bottom: 20%;
  right: 30%;
  animation-delay: 2s;
}

.element-3 {
  top: 60%;
  right: 10%;
  animation-delay: 4s;
}

@keyframes elementFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  33% {
    transform: translateY(-15px) rotate(5deg) scale(1.1);
  }
  66% {
    transform: translateY(5px) rotate(-5deg) scale(0.95);
  }
}

/* Button Styles */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid #000000;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.btn span {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.btn-animation {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.btn:hover .btn-animation {
  left: 100%;
}

.btn-primary {
  background-color: #000000;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background-color: #333333;
  transform: translateY(-5px) rotateX(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(-2px) rotateX(2deg);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.btn-secondary:hover {
  background-color: #000000;
  color: #ffffff;
  transform: translateY(-5px) rotateX(5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.btn-secondary:active {
  transform: translateY(-2px) rotateX(2deg);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-outline {
  background-color: transparent;
  color: #000000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn-outline:hover {
  background-color: #000000;
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

/* Features Section */
.features-section {
  padding: 5rem 2rem 8rem;
  margin-top: -4rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 25%, #ffffff 50%, #f5f5f5 75%, #ffffff 100%);
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(240, 240, 240, 0.8) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(240, 240, 240, 0.8) 0%, transparent 40%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, transparent 60%);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.03);
}

.features-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-particles .particle {
  position: absolute;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  animation: particleFloat 8s ease-in-out infinite, particlePulse 4s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.floating-particles .particle-1 {
  top: 10%;
  left: 10%;
  width: 12px;
  height: 12px;
  animation-delay: 0s;
}

.floating-particles .particle-2 {
  top: 20%;
  right: 15%;
  width: 18px;
  height: 18px;
  animation-delay: 2s;
  animation-duration: 10s;
}

.floating-particles .particle-3 {
  bottom: 30%;
  left: 20%;
  width: 8px;
  height: 8px;
  animation-delay: 4s;
  animation-duration: 12s;
}

.floating-particles .particle-4 {
  top: 60%;
  right: 30%;
  width: 15px;
  height: 15px;
  animation-delay: 1s;
  animation-duration: 9s;
}

.floating-particles .particle-5 {
  bottom: 10%;
  right: 10%;
  width: 10px;
  height: 10px;
  animation-delay: 3s;
  animation-duration: 11s;
}

.floating-particles .particle-6 {
  top: 40%;
  left: 5%;
  width: 14px;
  height: 14px;
  animation-delay: 5s;
  animation-duration: 7s;
}

.features-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 75% 25%, rgba(0, 0, 0, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 25% 75%, rgba(0, 0, 0, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.02) 0%, transparent 40%);
  animation: patternShift 20s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-30px) translateX(20px) rotate(90deg);
  }
  50% {
    transform: translateY(0) translateX(40px) rotate(180deg);
  }
  75% {
    transform: translateY(30px) translateX(20px) rotate(270deg);
  }
}

@keyframes particlePulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%);
  animation: orbFloat 15s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  bottom: 20%;
  right: -150px;
  animation-delay: 5s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 10s;
}

@keyframes orbFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-30px) translateX(20px);
  }
  50% {
    transform: translateY(-10px) translateX(-20px);
  }
  75% {
    transform: translateY(-40px) translateX(10px);
  }
}

@keyframes patternShift {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-badge {
  display: block;
  padding: 0.6rem 1.8rem;
  background: linear-gradient(135deg, #000000, #333333);
  color: #ffffff;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0 auto 1.8rem;
  position: relative;
  overflow: hidden;
  width: fit-content;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: badgeShine 3s ease-in-out infinite;
}

@keyframes badgeShine {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  line-height: 1.2;
}

.title-decoration {
  display: block;
  color: #666666;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: titleSlideIn 1s ease-out 0.3s forwards;
}

.title-highlight {
  display: block;
  color: #000000;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: titleSlideIn 1s ease-out 0.5s forwards;
  margin-bottom: 0.5rem;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, #000000, #666666);
  animation: underlineExpand 1s ease-out 1s forwards;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #666666;
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out 0.7s forwards;
}

.title-decoration-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000000, transparent);
  opacity: 0;
  animation: lineExpand 1s ease-out 1.2s forwards;
}

.decoration-dot {
  width: 8px;
  height: 8px;
  background: #000000;
  border-radius: 50%;
  opacity: 0;
  animation: dotPop 0.5s ease-out 1.5s forwards;
}

@keyframes lineExpand {
  to { opacity: 1; }
}

@keyframes dotPop {
  to { opacity: 1; transform: scale(1.2); }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 6rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 5;
}

.feature-card {
  position: relative;
  height: 100%;
  perspective: 1000px;
  min-height: 450px;
  display: flex;
}

.featured-card {
  transform: scale(1.02);
  z-index: 3;
}

.feature-card-inner {
  position: relative;
  height: 100%;
  padding: 2.5rem 1.5rem;
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}

.feature-card:hover .feature-card-inner {
  transform: translateY(-10px) rotateX(3deg);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  border-color: #000000;
}

.featured-card .feature-card-inner {
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  border-color: #000000;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.card-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Most Popular Badge Removed */

.card-border-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  background: linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  opacity: 0;
  animation: borderAnimation 3s ease-in-out infinite;
}

@keyframes borderAnimation {
  0%, 100% { opacity: 0; transform: rotate(0deg); }
  50% { opacity: 1; transform: rotate(180deg); }
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}

.feature-card:hover .card-glow {
  opacity: 1;
}

.feature-icon-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 auto 1.8rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #f8f8f8, #ffffff);
  box-shadow: 
    inset 0 8px 16px rgba(255, 255, 255, 0.8),
    inset 0 -8px 16px rgba(0, 0, 0, 0.08),
    0 15px 30px rgba(0, 0, 0, 0.08);
}

.icon-ring-outer,
.icon-ring-inner {
  position: absolute;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: rgba(0, 0, 0, 0.3);
  animation: ringRotate 10s linear infinite;
}

.icon-ring-outer {
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  animation-direction: normal;
}

.icon-ring-inner {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  animation-direction: reverse;
  animation-duration: 8s;
}

.feature-icon {
  font-size: 3rem;
  z-index: 3;
  position: relative;
  width: 60px;
  height: 60px;
  animation: iconPulse 4s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
  color: #000000;
}

.icon-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1;
  opacity: 0.1;
}

.expert-guidance-bg {
  background: radial-gradient(circle, rgba(50, 50, 50, 0.2) 0%, transparent 70%);
}

.trusted-partnership-bg {
  background: radial-gradient(circle, rgba(30, 30, 30, 0.2) 0%, transparent 70%);
}

.regulatory-compliance-bg {
  background: radial-gradient(circle, rgba(40, 40, 40, 0.2) 0%, transparent 70%);
}

.feature-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.feature-card h3 {
  font-size: 1.7rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1.2rem;
  position: relative;
}

.feature-card h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #000000, transparent);
  transition: all 0.5s ease;
  transform: translateX(-50%);
}

.feature-card:hover h3::after {
  width: 80px;
}

.feature-card p {
  color: #555555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.feature-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
}

.feature-benefits li {
  padding: 0.5rem 0;
  color: #333333;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateX(-20px);
  animation: listSlideIn 0.6s ease-out forwards;
}

.benefit-icon {
  margin-right: 1rem;
  color: #000000;
  font-weight: bold;
  font-size: 1.1rem;
}

.feature-benefits li:nth-child(1) { animation-delay: 0.1s; }
.feature-benefits li:nth-child(2) { animation-delay: 0.2s; }
.feature-benefits li:nth-child(3) { animation-delay: 0.3s; }

.feature-stats-mini {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto; /* Push to bottom of card */
}

.mini-stat {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.mini-stat::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #000000, #333333);
  transition: width 1s ease-out;
}

.mini-stat.animated::after {
  width: 100%;
}

@keyframes miniNumberFade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.mini-stat.animated .mini-number {
  animation: miniNumberFade 0.5s ease-out forwards;
}

.mini-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #000000;
}

.mini-label {
  font-size: 0.9rem;
  color: #666666;
  font-weight: 500;
}

.features-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  padding: 4rem 0;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.stat-item {
  text-align: center;
  padding: 3rem 1.5rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);
  transition: left 0.8s ease;
}

.stat-item:hover::before {
  left: 100%;
}

.stat-item:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.15);
  border-color: #000000;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  animation: iconFadeIn 1s ease-out 0.5s forwards;
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  color: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%);
  z-index: -1;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;
  display: block;
}

.stat-label {
  font-size: 1.1rem;
  color: #666666;
  font-weight: 500;
  position: relative;
  z-index: 2;
  margin-bottom: 1rem;
}

.stat-progress {
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #000000, #333333);
  width: 0;
  border-radius: 2px;
  transition: width 2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.stat-item.animated .progress-bar {
  width: 100%;
}

@keyframes iconFadeIn {
  to { opacity: 1; }
}

.features-cta {
  text-align: center;
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-cta {
  position: relative;
  overflow: hidden;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.btn:hover .btn-arrow {
  transform: translateX(5px);
}

/* Services Overview Section */
.services-overview {
  padding: 7rem 2rem 6rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #ffffff 100%);
  background-image: 
    radial-gradient(circle at 70% 30%, rgba(245, 245, 245, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 30% 70%, rgba(245, 245, 245, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, transparent 60%);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: backgroundPulse 15s ease-in-out infinite;
}

.services-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.services-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.02) 0%, transparent 30%),
    radial-gradient(circle at 75% 25%, rgba(0, 0, 0, 0.02) 0%, transparent 30%),
    radial-gradient(circle at 25% 75%, rgba(0, 0, 0, 0.02) 0%, transparent 30%),
    radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.02) 0%, transparent 30%);
  animation: patternShift 20s ease-in-out infinite;
}

.services-shapes .shape {
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  animation: shapeFloat 8s ease-in-out infinite;
}

.services-shapes .shape-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
  transform: rotate(30deg);
}

.services-shapes .shape-2 {
  width: 70px;
  height: 70px;
  bottom: 15%;
  left: 10%;
  animation-delay: 2s;
  border-radius: 50%;
}

.services-shapes .shape-3 {
  width: 120px;
  height: 60px;
  top: 40%;
  left: 5%;
  animation-delay: 4s;
  border-radius: 30px;
}

@keyframes shapeFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

.services-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  margin-top: 2rem;
}

.services-intro {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.7;
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 5;
}

.service-card {
  position: relative;
  padding: 2rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  justify-content: space-between;
}

.service-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #000000, #333333);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-card:hover::after {
  transform: scaleX(1);
}

.service-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: #000000;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: #000000;
  color: #ffffff;
  transform: rotateY(180deg);
}

.service-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
}

.service-card p {
  font-size: 0.95rem;
  color: #444444;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-hover-info {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  margin-top: auto;
}

.service-card:hover .service-hover-info {
  opacity: 1;
  transform: translateY(0);
}

.service-hover-info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-hover-info li {
  padding: 0.4rem 0;
  font-size: 0.9rem;
  color: #666666;
  display: flex;
  align-items: center;
}

.service-hover-info li::before {
  content: "•";
  margin-right: 0.5rem;
  color: #000000;
  font-weight: bold;
}

.services-action {
  text-align: center;
  margin-top: 2rem;
}

.btn-animated {
  position: relative;
  overflow: hidden;
}

.btn-arrow {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.btn-animated:hover .btn-arrow {
  opacity: 1;
  right: 1rem;
}

.service-highlights {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 2rem;
  margin-top: 1rem;
  max-width: 320px;
  margin-left: auto;
}

.highlight-item {
  position: relative;
  text-align: center;
  padding: 2rem 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.4s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.highlight-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 0, 0, 0.3);
}

.highlight-icon {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
}

.highlight-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #000000, #444444);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight-text {
  display: block;
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1rem;
}

.highlight-progress {
  width: 80%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  margin: 0.5rem auto 0;
  overflow: hidden;
}

.highlight-progress .progress-bar {
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, #000000, #444444);
  border-radius: 2px;
  transition: width 1.2s ease-out;
}

.highlight-item:hover .progress-bar {
  width: 100%;
}

@keyframes backgroundPulse {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
}

/* CTA Section */
.cta-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 50%, #ffffff 100%);
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(245, 245, 245, 0.6) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(245, 245, 245, 0.6) 0%, transparent 40%);
  text-align: center;
}

.cta-content h2 {
  font-size: 2.2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  color: #333333;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .legal-icon {
    font-size: 5rem;
  }
  
  .ring-1 {
    width: 150px;
    height: 150px;
    top: -75px;
    left: -75px;
  }
  
  .ring-2 {
    width: 180px;
    height: 180px;
    top: -90px;
    left: -90px;
  }
  
  .ring-3 {
    width: 210px;
    height: 210px;
    top: -105px;
    left: -105px;
  }
  
  .floating-elements {
    display: none;
  }
  
  .shape {
    opacity: 0.5;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .feature-card {
    min-height: 400px;
  }
  
  .services-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .service-card {
    min-height: 250px;
  }
  
  .service-highlights {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .highlight-item {
    padding: 1.2rem 1rem;
  }
  
  .feature-card {
    min-height: 380px;
  }
  
  .service-card {
    min-height: 230px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .legal-icon {
    font-size: 4rem;
  }
  
  .ring-1 {
    width: 120px;
    height: 120px;
    top: -60px;
    left: -60px;
  }
  
  .ring-2 {
    width: 140px;
    height: 140px;
    top: -70px;
    left: -70px;
  }
  
  .ring-3 {
    width: 160px;
    height: 160px;
    top: -80px;
    left: -80px;
  }
  
  .shape {
    transform: scale(0.7);
  }
  
  .features-section,
  .services-overview,
  .cta-section {
    padding: 2rem 1rem;
  }
  
  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .service-highlights {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .shape,
  .legal-icon,
  .ring,
  .element,
  .grid-overlay,
  .title-line::before {
    animation: none;
  }
  
  .btn:hover {
    transform: none;
  }
  
  .feature-card:hover {
    transform: none;
  }
}
</style>