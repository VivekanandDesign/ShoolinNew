<template>
  <div class="home">
    <!-- Hero Section - Elegant Legal Professional Design -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="justice-symbol">
          <div class="scales-of-justice">
            <div class="scale-beam"></div>
            <div class="scale-left"></div>
            <div class="scale-right"></div>
          </div>
        </div>
        <div class="floating-elements">
          <div class="legal-pattern"></div>
          <div class="elegant-particles">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
          </div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-icon">⚖</span>
            <span class="badge-text">Excellence in Legal Practice</span>
          </div>
          
          <h1 class="hero-title">
            <span class="title-main">Justice Through</span>
            <span class="title-emphasis">Expert Advocacy</span>
            <span class="title-subtitle">Shoolin Legal Consultancy</span>
          </h1>
          
          <p class="hero-description">
            Delivering comprehensive legal solutions with unwavering commitment to excellence, 
            integrity, and client success. Where expertise meets dedication in pursuit of justice.
          </p>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number" data-target="500">0</span>
              <span class="stat-label">Cases Won</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number" data-target="15">0</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number" data-target="98">0</span><span class="stat-suffix">%</span>
              <span class="stat-label">Success Rate</span>
            </div>
          </div>
          
          <div class="hero-actions">
            <nuxt-link to="/contact" class="btn btn-primary">
              <span>Schedule Consultation</span>
              <span class="btn-icon">→</span>
            </nuxt-link>
            <nuxt-link to="/services" class="btn btn-secondary">
              <span>Explore Services</span>
              <span class="btn-icon">⚖</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal Expertise Section -->
    <section class="expertise-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Areas of Legal Excellence</h2>
          <p class="section-subtitle">
            Comprehensive legal services delivered with precision, integrity, and deep understanding of Indian jurisprudence
          </p>
        </div>
        
        <div class="expertise-grid">
          <div class="expertise-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon">⚖</div>
            <h3>Civil Litigation</h3>
            <p>Expert representation in civil disputes, contract enforcement, and property matters with strategic litigation approach.</p>
            <div class="card-accent"></div>
          </div>
          
          <div class="expertise-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">🏢</div>
            <h3>Corporate Law</h3>
            <p>Comprehensive business legal solutions including compliance, contracts, mergers, and corporate governance.</p>
            <div class="card-accent"></div>
          </div>
          
          <div class="expertise-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-icon">👥</div>
            <h3>Family Law</h3>
            <p>Sensitive handling of matrimonial disputes, divorce proceedings, child custody, and family settlements.</p>
            <div class="card-accent"></div>
          </div>
          
          <div class="expertise-card" data-aos="fade-up" data-aos-delay="400">
            <div class="card-icon">🏠</div>
            <h3>Property Law</h3>
            <p>Complete property legal services from documentation to dispute resolution and title verification.</p>
            <div class="card-accent"></div>
          </div>
          
          <div class="expertise-card" data-aos="fade-up" data-aos-delay="500">
            <div class="card-icon">⚔</div>
            <h3>Criminal Defense</h3>
            <p>Robust criminal defense representation ensuring protection of rights and fair legal proceedings.</p>
            <div class="card-accent"></div>
          </div>
          
          <div class="expertise-card" data-aos="fade-up" data-aos-delay="600">
            <div class="card-icon">📋</div>
            <h3>Legal Consultation</h3>
            <p>Strategic legal advice and consultation services for individuals and businesses across various legal matters.</p>
            <div class="card-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="choose-us-section">
      <div class="container">
        <div class="choose-content">
          <div class="choose-text">
            <h2 class="section-title">Why Choose Shoolin Consultancy?</h2>
            <div class="features-list">
              <div class="feature-item" data-aos="fade-right" data-aos-delay="100">
                <div class="feature-icon">✓</div>
                <div class="feature-content">
                  <h4>Proven Track Record</h4>
                  <p>15+ years of successful legal practice with hundreds of cases resolved favorably</p>
                </div>
              </div>
              
              <div class="feature-item" data-aos="fade-right" data-aos-delay="200">
                <div class="feature-icon">⚖</div>
                <div class="feature-content">
                  <h4>Expert Legal Team</h4>
                  <p>Qualified advocates with specialized expertise in diverse areas of law</p>
                </div>
              </div>
              
              <div class="feature-item" data-aos="fade-right" data-aos-delay="300">
                <div class="feature-icon">🛡</div>
                <div class="feature-content">
                  <h4>Client-Centric Approach</h4>
                  <p>Personalized legal strategies tailored to your specific needs and circumstances</p>
                </div>
              </div>
              
              <div class="feature-item" data-aos="fade-right" data-aos-delay="400">
                <div class="feature-icon">💼</div>
                <div class="feature-content">
                  <h4>Professional Excellence</h4>
                  <p>Commitment to highest ethical standards and professional integrity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="choose-visual" data-aos="fade-left" data-aos-delay="300">
            <div class="legal-emblem">
              <div class="emblem-outer">
                <div class="emblem-inner">
                  <div class="scales-icon">⚖</div>
                </div>
              </div>
              <div class="emblem-text">Excellence in Practice</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Client Testimonials</h2>
          <p class="section-subtitle">What our clients say about our legal services and expertise</p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p>"Exceptional legal expertise and professional service. They handled our corporate legal matters with great precision and care."</p>
              <div class="testimonial-author">
                <strong>— Corporate Client</strong>
                <span>Business Law Case</span>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p>"Outstanding representation in our property dispute. Professional, knowledgeable, and achieved the best possible outcome."</p>
              <div class="testimonial-author">
                <strong>— Property Owner</strong>
                <span>Property Dispute Resolution</span>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card" data-aos="fade-up" data-aos-delay="300">
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p>"Compassionate and skilled handling of our family legal matter. They made a difficult process much easier to navigate."</p>
              <div class="testimonial-author">
                <strong>— Family Client</strong>
                <span>Family Law Matter</span>
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
          <div class="cta-icon">⚖</div>
          <h2>Ready for Expert Legal Consultation?</h2>
          <p>Get professional legal advice tailored to your specific needs. Schedule your consultation today.</p>
          <div class="cta-actions">
            <nuxt-link to="/contact" class="btn btn-primary btn-large">
              <span>Schedule Consultation</span>
              <span class="btn-icon">→</span>
            </nuxt-link>
            <nuxt-link to="/services" class="btn btn-secondary btn-large">
              <span>View All Services</span>
              <span class="btn-icon">⚖</span>
            </nuxt-link>
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
      // Counter animation
      observers: [],
      animatedCounters: new Set()
    }
  },
  mounted() {
    this.initCounterAnimations()
  },
  beforeDestroy() {
    // Clean up observers
    this.observers.forEach(observer => observer.disconnect())
  },
  methods: {
    initCounterAnimations() {
      const counters = document.querySelectorAll('[data-target]')
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animatedCounters.has(entry.target)) {
            this.animatedCounters.add(entry.target)
            this.animateCounter(entry.target)
          }
        })
      }, { threshold: 0.5 })

      counters.forEach(counter => observer.observe(counter))
      this.observers.push(observer)
    },
    
    animateCounter(element) {
      const target = parseInt(element.dataset.target)
      const duration = 2000
      const start = 0
      const startTime = performance.now()
      
      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(start + (target - start) * easeOut)
        
        element.textContent = current
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          element.textContent = target
        }
      }
      
      requestAnimationFrame(updateCounter)
    }
  },
  head() {
    return {
      title: 'Shoolin Legal Consultancy - Expert Legal Services in India',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Professional legal consultancy services in India. Expert advocates providing comprehensive legal solutions for civil, criminal, corporate, family, and property law matters.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'legal consultancy, advocate, lawyer, legal services, civil law, criminal law, corporate law, family law, property law, India'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Modern Professional Legal Design */
.home {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #000000;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section - Elegant Legal Professional Design */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.justice-symbol {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  opacity: 0.1;
  pointer-events: none;
}

.scales-of-justice {
  width: 200px;
  height: 200px;
  position: relative;
  animation: floatGentle 6s ease-in-out infinite;
}

.scale-beam {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 4px;
  background: #ffffff;
  transform: translate(-50%, -50%);
  border-radius: 2px;
}

.scale-left,
.scale-right {
  position: absolute;
  top: 60%;
  width: 30px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top: none;
  border-radius: 0 0 15px 15px;
}

.scale-left {
  left: 20%;
  animation: scaleBalance 4s ease-in-out infinite;
}

.scale-right {
  right: 20%;
  animation: scaleBalance 4s ease-in-out infinite reverse;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.legal-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(30deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: patternShift 20s linear infinite;
}

.elegant-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: particleFloat 8s infinite ease-in-out;
}

.particle:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle:nth-child(2) {
  top: 70%;
  left: 80%;
  animation-delay: 2s;
}

.particle:nth-child(3) {
  top: 40%;
  left: 60%;
  animation-delay: 4s;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  text-align: left;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  animation: fadeInUp 1s ease-out 0.2s both;
}

.badge-icon {
  font-size: 1.2rem;
  color: #ffffff;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.title-main {
  color: #ffffff;
  font-weight: 300;
  font-size: 0.6em;
  animation: slideInLeft 1s ease-out 0.4s both;
}

.title-emphasis {
  background: linear-gradient(135deg, #ffffff, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  animation: slideInLeft 1s ease-out 0.6s both;
}

.title-subtitle {
  font-size: 0.4em;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 0.5rem;
  animation: slideInLeft 1s ease-out 0.8s both;
}

.hero-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
  animation: fadeInUp 1s ease-out 1s both;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 1.2s both;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
}

.stat-suffix {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.5rem;
}

.stat-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.3);
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 1.4s both;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  min-height: 56px;
  font-family: inherit;
}

.btn-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

.btn-primary {
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.btn-primary:hover {
  background: #000000;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.btn-secondary {
  background: transparent;
  color: #ffffff;
  border-color: #ffffff;
}

.btn-secondary:hover {
  background: #ffffff;
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
  min-height: 64px;
}

/* Focus styles for accessibility */
.btn:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

/* Section Styles */
.expertise-section,
.choose-us-section,
.testimonials-section {
  padding: 6rem 0;
  background: #ffffff;
}

.choose-us-section {
  background: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #000000;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

/* Expertise Grid */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.expertise-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #000000;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: block;
}

.expertise-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
}

.expertise-card p {
  color: #666666;
  line-height: 1.6;
  margin-bottom: 0;
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #000000, #666666);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.expertise-card:hover .card-accent {
  transform: scaleX(1);
}

/* Choose Us Section */
.choose-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.choose-text .section-title {
  text-align: left;
  margin-bottom: 2rem;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: #000000;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.feature-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.5rem;
}

.feature-content p {
  color: #666666;
  margin: 0;
}

.choose-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.legal-emblem {
  text-align: center;
}

.emblem-outer {
  width: 200px;
  height: 200px;
  border: 3px solid #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  position: relative;
  animation: emblemRotate 20s linear infinite;
}

.emblem-outer::before {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.emblem-inner {
  width: 120px;
  height: 120px;
  background: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scales-icon {
  font-size: 3rem;
  color: #ffffff;
  animation: floatGentle 3s ease-in-out infinite;
}

.emblem-text {
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.875rem;
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  position: relative;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.quote-icon {
  font-size: 4rem;
  color: #000000;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: serif;
}

.testimonial-content p {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author strong {
  display: block;
  color: #000000;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.testimonial-author span {
  color: #666666;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: #ffffff;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
  animation: floatGentle 3s ease-in-out infinite;
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.cta-content p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Animations */
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

@keyframes floatGentle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  25% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-5px) translateX(-5px);
    opacity: 0.6;
  }
  75% {
    transform: translateY(15px) translateX(15px);
    opacity: 0.7;
  }
}

@keyframes patternShift {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(50px, 50px);
  }
}

@keyframes scaleBalance {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@keyframes emblemRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-stats {
    gap: 1.5rem;
  }
  
  .choose-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .choose-text .section-title {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .hero-section {
    min-height: 90vh;
    text-align: center;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .stat-divider {
    width: 50px;
    height: 1px;
  }
  
  .hero-actions {
    justify-content: center;
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cta-actions .btn {
    width: 100%;
  }
  
  .justice-symbol {
    display: none;
  }
}

@media (max-width: 480px) {
  .expertise-section,
  .choose-us-section,
  .testimonials-section,
  .cta-section {
    padding: 4rem 0;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .expertise-card,
  .testimonial-card {
    padding: 2rem;
  }
  
  .hero-stats {
    margin-bottom: 2rem;
  }
}

/* Accessibility Enhancements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-contrast: high) {
  .btn {
    border-width: 3px;
    font-weight: 800;
  }
  
  .expertise-card,
  .testimonial-card {
    border-width: 2px;
  }
}

/* Focus indicators for keyboard navigation */
.btn:focus-visible,
.expertise-card:focus-visible,
.testimonial-card:focus-visible {
  outline: 3px solid #000000;
  outline-offset: 2px;
}

/* High contrast text for better readability */
.hero-description,
.section-subtitle,
.expertise-card p,
.feature-content p,
.testimonial-content p {
  font-weight: 400;
}

/* Enhanced touch targets for mobile */
@media (hover: none) and (pointer: coarse) {
  .btn {
    min-height: 60px;
    padding: 1.25rem 2.5rem;
  }
}
</style>

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
  background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 70%, transparent 100%);
  border-radius: 50%;
  animation: particleFloat 12s ease-in-out infinite, particlePulse 6s ease-in-out infinite;
  box-shadow: 
    0 0 20px rgba(0, 0, 0, 0.05),
    inset 0 1px 2px rgba(255, 255, 255, 0.3);
  z-index: 1;
}

.floating-particles .particle-1 {
  top: 15%;
  left: 8%;
  width: 16px;
  height: 16px;
  animation-delay: 0s;
}

.floating-particles .particle-2 {
  top: 25%;
  right: 12%;
  width: 22px;
  height: 22px;
  animation-delay: 2s;
  animation-duration: 14s;
}

.floating-particles .particle-3 {
  bottom: 35%;
  left: 18%;
  width: 12px;
  height: 12px;
  animation-delay: 4s;
  animation-duration: 16s;
}

.floating-particles .particle-4 {
  top: 65%;
  right: 25%;
  width: 18px;
  height: 18px;
  animation-delay: 1s;
  animation-duration: 10s;
}

.floating-particles .particle-5 {
  bottom: 15%;
  right: 8%;
  width: 14px;
  height: 14px;
  animation-delay: 3s;
  animation-duration: 13s;
}

.floating-particles .particle-6 {
  top: 45%;
  left: 3%;
  width: 20px;
  height: 20px;
  animation-delay: 5s;
  animation-duration: 9s;
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
    transform: translateY(0) translateX(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-40px) translateX(30px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translateY(-10px) translateX(50px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translateY(30px) translateX(25px) rotate(270deg) scale(1.05);
  }
}

@keyframes particlePulse {
  0%, 100% {
    opacity: 0.6;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
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

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 50%, #000000 100%);
  color: #ffffff;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin: 0 auto 2.5rem;
  position: relative;
  overflow: hidden;
  width: fit-content;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.2) inset,
    0 -1px 0 rgba(0, 0, 0, 0.2) inset;
  text-transform: uppercase;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transform: perspective(1000px) rotateX(0deg);
  transition: all 0.3s ease;
}

.section-badge:hover {
  transform: perspective(1000px) rotateX(-2deg) translateY(-2px);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    0 1px 0 rgba(255, 255, 255, 0.3) inset;
}

.badge-icon {
  font-size: 1.2rem;
  animation: badgeIconSpin 4s ease-in-out infinite;
}

.badge-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: badgeShine 3s ease-in-out infinite;
  pointer-events: none;
}

@keyframes badgeIconSpin {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
}

@keyframes badgeShine {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

.section-title {
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.title-decoration {
  display: block;
  color: #777777;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 0.8rem;
  opacity: 0;
  transform: translateY(30px);
  animation: titleSlideIn 1s ease-out 0.3s forwards;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.title-highlight {
  display: block;
  color: #000000;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: titleSlideIn 1s ease-out 0.5s forwards;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, #000000, transparent);
  animation: underlineExpand 1.2s ease-out 1s forwards;
  border-radius: 2px;
}

.title-accent {
  display: block;
  color: #555555;
  font-size: 1.1rem;
  font-weight: 400;
  font-style: italic;
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out 0.9s forwards;
  letter-spacing: 0.05em;
}

.section-subtitle {
  font-size: 1.4rem;
  color: #666666;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out 0.7s forwards;
  font-weight: 300;
  letter-spacing: 0.02em;
}

.title-decoration-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;
}

.decoration-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000000, transparent);
  opacity: 0;
  animation: lineExpand 1s ease-out 1.2s forwards;
  border-radius: 1px;
}

.decoration-diamond {
  font-size: 1.2rem;
  color: #000000;
  opacity: 0;
  animation: fadeInScale 1s ease-out 1.4s forwards;
  transform: scale(0) rotate(0deg);
}
@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes underlineExpand {
  from {
    width: 0;
  }
  to {
    width: 120px;
  }
}

@keyframes lineExpand {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 80px;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(45deg);
  }
}

@keyframes lineExpand {
  to { opacity: 1; }
}

@keyframes dotPop {
  to { opacity: 1; transform: scale(1.2); }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 5;
  padding: 0 2rem;
  align-items: start;
}

.feature-card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  /* Fixed height and spacing */
  min-height: 320px;
  max-height: 350px;
  margin-bottom: 2rem;
  justify-content: flex-start;
  align-items: center;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-color: #d0d0d0;
}

.feature-icon {
  font-size: 2.5rem;
  color: #000000;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;
}

.feature-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1.2rem;
  line-height: 1.3;
  text-align: center;
  flex-shrink: 0;
}

.feature-card p {
  color: #666666;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Enhanced icon animations */
@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

.feature-icon {
  animation: iconPulse 4s ease-in-out infinite;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  background: rgba(0, 0, 0, 0.08);
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

.strategic-innovation-bg {
  background: radial-gradient(circle, rgba(35, 35, 35, 0.2) 0%, transparent 70%);
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
  margin-right: 0.8rem;
  font-size: 1.2rem;
  display: inline-block;
  width: 24px;
  text-align: center;
}

.feature-benefits li:nth-child(1) { animation-delay: 0.1s; }
.feature-benefits li:nth-child(2) { animation-delay: 0.2s; }
.feature-benefits li:nth-child(3) { animation-delay: 0.3s; }
.feature-benefits li:nth-child(4) { animation-delay: 0.4s; }

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

/* Services Section */
.services-section {
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
@media (max-width: 1024px) {
  .features-grid {
    gap: 1.5rem;
  }
}

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
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }
  
  .btn {
    width: 100%;
    min-width: auto;
    padding: 1.2rem 2rem;
    font-size: 1.1rem;
    text-align: center;
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
    gap: 2.5rem;
    max-width: 600px;
    padding: 0 1.5rem;
    margin-bottom: 3rem;
  }
  
  .feature-card {
    padding: 2rem 1.5rem;
    min-height: 280px;
    max-height: 320px;
    margin-bottom: 1.5rem;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
  
  .feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  .feature-card p {
    font-size: 0.95rem;
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