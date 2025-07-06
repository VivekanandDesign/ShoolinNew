<template>
  <div class="services-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <!-- Animated Background with Legal Elements -->
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
        <div class="legal-particles">
          <div class="particle particle-1">⚖️</div>
          <div class="particle particle-2">📋</div>
          <div class="particle particle-3">🏛️</div>
          <div class="particle particle-4">📄</div>
          <div class="particle particle-5">💼</div>
          <div class="particle particle-6">📊</div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content" ref="heroContent">
          <!-- Central Hero Text -->
          <div class="hero-main">
            <div class="chapter-number">Chapter 02</div>
            <h1 class="story-title">
              <span class="title-line" data-text="Our Professional">Our Professional</span>
              <span class="title-line" data-text="Services">Services</span>
            </h1>
            <div class="story-subtitle">Excellence in Every Legal Solution</div>
            
            <!-- 3D Services Icon Visual - Centered -->
            <div class="hero-visual-center">
              <div class="services-icon-container">
                <div class="services-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H12V12H7V10ZM7 13H17V15H7V13ZM7 16H17V18H7V16ZM7 6H17V8H7V6Z"/>
                  </svg>
                </div>
                <div class="icon-rings">
                  <div class="ring ring-1"></div>
                  <div class="ring ring-2"></div>
                  <div class="ring ring-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Content Section -->
    <div class="services-content">
      <div class="container">
        <!-- Services Grid -->
        <div class="story-chapter" ref="servicesChapter">
          <div class="chapter-header">
            <div class="chapter-number">Our Expertise</div>
            <h2 class="chapter-title">Professional Legal Services</h2>
            <p class="chapter-subtitle">Comprehensive solutions tailored to your legal needs</p>
          </div>
          
          <div class="services-grid">        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-card-inner">
            <div class="service-icon-wrapper">
              <div class="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                  <path :d="service.iconPath"></path>
                </svg>
              </div>
              <div class="service-icon-bg"></div>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                <span class="feature-bullet">→</span>
                {{ feature }}
              </li>
            </ul>
            <div class="service-overlay"></div>
          </div>
        </div>
          </div>
        </div>
        
        <!-- Disclaimer Section -->
        <div class="story-chapter disclaimer-section" ref="disclaimerChapter">
          <div class="chapter-header">
            <div class="chapter-number">Important Notice</div>
            <h3 class="disclaimer-title">Professional Standards & Compliance</h3>
          </div>
          <div class="disclaimer-content">
            <p>
              In compliance with Bar Council of India regulations, we do not advertise or solicit legal work. 
              All information provided is for educational purposes only and should not be construed as legal advice.
              We maintain the highest standards of professional ethics and regulatory compliance in all our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  head() {
    return {
      title: 'Our Services - Shoolin Consultancy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore our comprehensive legal services at Shoolin Consultancy. Professional legal consultation and advisory services with excellence and integrity.'
        }
      ]
    }
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: '⚖️',
          iconPath: 'M12 2L14.5 8.5L22 9L16.5 14L18 21.5L12 18L6 21.5L7.5 14L2 9L9.5 8.5L12 2ZM12 6.5L10.5 10.5L6.5 11L9.5 13.5L8.5 17.5L12 15.5L15.5 17.5L14.5 13.5L17.5 11L13.5 10.5L12 6.5Z',
          title: 'Legal Consultation',
          description: 'Professional legal advice and strategic consultation services for complex legal matters with comprehensive analysis and expert guidance.',
          features: [
            'Business Law Advisory & Strategic Planning',
            'Contract Review & Risk Analysis',
            'Regulatory Compliance Assessment',
            'Legal Documentation & Drafting',
            'Risk Management Solutions'
          ]
        },
        {
          id: 2,
          icon: '📋',
          iconPath: 'M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3ZM19 19H5V5H19V19ZM17 8H7V10H17V8ZM17 12H7V14H17V12ZM14 16H7V18H14V16Z',
          title: 'Corporate Legal Services',
          description: 'Comprehensive corporate legal solutions for businesses of all sizes, from emerging startups to established multinational enterprises.',
          features: [
            'Company Formation & Structuring',
            'Corporate Governance Excellence',
            'Mergers & Acquisitions Strategy',
            'Regulatory Compliance Management',
            'Board Advisory & Legal Counsel'
          ]
        },
        {
          id: 3,
          icon: '🏛️',
          iconPath: 'M6 19H8V21H16V19H18V17H6V19ZM18 7V15H6V7L12 1L18 7ZM8 9H10V13H8V9ZM12 9H14V13H12V9ZM16 9V13H14V9H16Z',
          title: 'Litigation & Dispute Resolution',
          description: 'Expert litigation support and alternative dispute resolution services with strategic approach and comprehensive case preparation.',
          features: [
            'Civil & Commercial Litigation',
            'Alternative Dispute Resolution',
            'Arbitration & Mediation Services',
            'Legal Research & Case Strategy',
            'Appellate Court Representation'
          ]
        },
        {
          id: 4,
          icon: '📄',
          iconPath: 'M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM9 13V19H7V13H9ZM15 15V19H17V15H15ZM11 11V19H13V11H11Z',
          title: 'Legal Documentation Services',
          description: 'Professional legal documentation, drafting, and compliance services ensuring precision, accuracy, and regulatory adherence.',
          features: [
            'Contract Drafting & Negotiation',
            'Legal Agreements & MOUs',
            'Policy Development & Implementation',
            'Compliance Documentation',
            'Legal Opinion & Advisory Letters'
          ]
        }
      ]
    }
  },
  mounted() {
    this.initializeAnimations()
    this.setupScrollObserver()
  },
  methods: {
    initializeAnimations() {
      // Initial fade-in for hero content
      const heroContent = this.$refs.heroContent
      if (heroContent) {
        setTimeout(() => {
          heroContent.classList.add('animate-in')
        }, 300)
      }
    },
    setupScrollObserver() {
      const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            
            // Animate service cards with stagger
            if (entry.target.classList.contains('story-chapter')) {
              const serviceCards = entry.target.querySelectorAll('.service-card')
              serviceCards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate-in')
                }, index * 200)
              })
            }
          }
        })
      }, observerOptions)

      // Observe all chapters
      const chapters = this.$refs
      Object.keys(chapters).forEach(key => {
        if (key.includes('Chapter')) {
          observer.observe(chapters[key])
        }
      })
    }
  }
}
</script>

<style scoped>
/* Reset and Base Styles */
.services-page {
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  color: #000000;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(220, 220, 220, 0.3) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(220, 220, 220, 0.3) 0%, transparent 30%);
  overflow: hidden;
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
  right: 30%;
  animation-delay: 3s;
  border-radius: 50%;
}

.shape-5 {
  width: 120px;
  height: 120px;
  bottom: 10%;
  right: 10%;
  animation-delay: 4s;
  transform: rotate(60deg);
}

.shape-6 {
  width: 50px;
  height: 50px;
  top: 30%;
  left: 30%;
  animation-delay: 5s;
  border-radius: 20px;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

.legal-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.2;
  animation: particle-float 8s ease-in-out infinite;
}

.particle-1 {
  top: 15%;
  left: 20%;
  animation-delay: 0s;
}

.particle-2 {
  top: 25%;
  right: 20%;
  animation-delay: 2s;
}

.particle-3 {
  bottom: 30%;
  left: 15%;
  animation-delay: 4s;
}

.particle-4 {
  bottom: 15%;
  right: 25%;
  animation-delay: 6s;
}

.particle-5 {
  top: 50%;
  left: 10%;
  animation-delay: 1s;
}

.particle-6 {
  top: 70%;
  right: 10%;
  animation-delay: 5s;
}

/* Hero Content */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
}

.hero-content {
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

.hero-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.chapter-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 0 2rem;
}

.chapter-number::before,
.chapter-number::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30px;
  height: 1px;
  background-color: #000;
}

.chapter-number::before {
  left: 0;
}

.chapter-number::after {
  right: 0;
}

.story-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  position: relative;
  display: block;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: text-shimmer 3s ease-in-out infinite;
}

.story-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  color: #666;
  letter-spacing: 1px;
  margin-top: 1rem;
}

/* 3D Services Icon */
.hero-visual-center {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-icon-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  animation: icon-float 4s ease-in-out infinite;
}

.services-icon svg {
  width: 40px;
  height: 40px;
  color: white;
}

.icon-rings {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.ring {
  position: absolute;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring-pulse 3s ease-in-out infinite;
}

.ring-1 {
  width: 100px;
  height: 100px;
  animation-delay: 0s;
}

.ring-2 {
  width: 130px;
  height: 130px;
  animation-delay: 1s;
}

.ring-3 {
  width: 160px;
  height: 160px;
  animation-delay: 2s;
}

/* Services Content Section */
.services-content {
  padding: 6rem 0;
  background-color: #ffffff;
}

.story-chapter {
  margin-bottom: 6rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

.story-chapter.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.chapter-header {
  text-align: center;
  margin-bottom: 4rem;
}

.chapter-header .chapter-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.chapter-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chapter-subtitle {
  font-size: 1.1rem;
  color: #666;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 4rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.service-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.service-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.service-card-inner {
  position: relative;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  text-align: center;
  transition: all 0.4s ease;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 450px;
}

.service-card-inner:hover {
  transform: translateY(-10px);
  border-color: #000000;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-icon-wrapper {
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}

.service-icon {
  position: relative;
  z-index: 2;
  animation: icon-bob 3s ease-in-out infinite;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  margin: 0 auto;
}

.service-icon svg {
  width: 48px;
  height: 48px;
  color: inherit;
  transition: all 0.3s ease;
}

.service-card-inner:hover .service-icon svg {
  transform: scale(1.1);
  color: #333333;
}

.service-icon-bg {
  position: absolute;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.4s ease;
}

.service-card-inner:hover .service-icon-bg {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  transform: translate(-50%, -50%) scale(1.2);
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
  position: relative;
}

.service-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  color: #555;
  transition: all 0.3s ease;
  line-height: 1.5;
  padding: 0.5rem 0;
}

.service-features li:hover {
  color: #000;
  transform: translateX(5px);
}

.feature-bullet {
  color: #000;
  font-weight: 600;
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05));
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
}

.service-card-inner:hover .service-overlay {
  opacity: 1;
}

/* Disclaimer Section */
.disclaimer-section {
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  border-radius: 20px;
  padding: 3rem;
  border: 2px solid #f0f0f0;
  text-align: center;
}

.disclaimer-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
}

.disclaimer-content {
  max-width: 800px;
  margin: 0 auto;
}

.disclaimer-content p {
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes particle-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) translateX(10px);
    opacity: 0.4;
  }
}

@keyframes text-shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes icon-float {
  0%, 100% {
    transform: translateY(0px) rotateY(0deg);
  }
  50% {
    transform: translateY(-10px) rotateY(5deg);
  }
}

@keyframes ring-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.6;
  }
}

@keyframes icon-bob {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .services-grid {
    gap: 2rem;
    max-width: 900px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 80vh;
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
  }
  
  .service-card-inner {
    padding: 2.5rem 2rem;
  }
  
  .services-content {
    padding: 4rem 0;
  }
  
  .story-chapter {
    margin-bottom: 4rem;
  }
  
  .services-icon-container {
    width: 100px;
    height: 100px;
  }
  
  .services-icon {
    width: 60px;
    height: 60px;
  }
  
  .services-icon svg {
    width: 40px;
    height: 40px;
  }
  
  .service-icon-bg {
    width: 100px;
    height: 100px;
  }
  
  .service-icon-wrapper {
    height: 100px;
    margin-bottom: 1.5rem;
  }
  
  .service-icon {
    width: 70px;
    height: 70px;
  }
  
  .ring-1 { width: 80px; height: 80px; }
  .ring-2 { width: 110px; height: 110px; }
  .ring-3 { width: 140px; height: 140px; }
}

@media (max-width: 480px) {
  .hero-main {
    gap: 1.5rem;
  }
  
  .chapter-number {
    font-size: 0.8rem;
    padding: 0 1.5rem;
  }
  
  .chapter-number::before,
  .chapter-number::after {
    width: 20px;
  }
  
  .story-subtitle {
    font-size: 1rem;
  }
  
  .disclaimer-section {
    padding: 2rem 1.5rem;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
  }
  
  .service-icon-wrapper {
    height: 80px;
    margin-bottom: 1.2rem;
  }
  
  .service-icon-bg {
    width: 80px;
    height: 80px;
  }
}
</style>
