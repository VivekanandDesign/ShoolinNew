<template>
  <div class="about-page">
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
          <div class="particle particle-2">📜</div>
          <div class="particle particle-3">🏛️</div>
          <div class="particle particle-4">📋</div>
          <div class="particle particle-5">⚖️</div>
          <div class="particle particle-6">📖</div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content" ref="heroContent">
          <!-- Central Hero Text -->
          <div class="hero-main">
            <div class="chapter-number">Chapter 01</div>
            <h1 class="story-title">
              <span class="title-line" data-text="The Shoolin">The Shoolin</span>
              <span class="title-line" data-text="Legacy">Legacy</span>
            </h1>
            <div class="story-subtitle">A Journey of Legal Excellence</div>
            
            <!-- 3D Legal Icon Visual - Centered -->
            <div class="hero-visual-center">
              <div class="legal-icon-container">
                <div class="legal-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM4 13L5.5 17.5L10 16L5.5 14.5L4 13ZM20 13L18.5 17.5L14 16L18.5 14.5L20 13Z"/>
                  </svg>
                </div>
                <div class="icon-rings">
                  <div class="ring ring-1"></div>
                  <div class="ring ring-2"></div>
                  <div class="ring ring-3"></div>
                </div>
              </div>
            </div>
            
            <div class="scroll-indicator">
              <div class="scroll-line"></div>
              <span>Scroll to continue the story</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Story Timeline -->
    <div class="story-container">
      <div class="container">
        <div class="timeline">
          <!-- Beginning Chapter -->
          <div class="story-chapter" ref="chapter1">
            <div class="chapter-marker">
              <div class="chapter-dot"></div>
              <div class="chapter-line"></div>
            </div>
            <div class="chapter-content">
              <div class="chapter-header">
                <span class="chapter-tag">The Beginning</span>
                <h2>Our Genesis</h2>
              </div>
              <div class="story-text">
                <p>
                  In the pursuit of legal excellence, Shoolin Consultancy was born from a vision 
                  to bridge the gap between traditional legal practice and modern client needs. 
                  Our journey began with a simple yet powerful belief: that every legal challenge 
                  deserves innovative solutions grounded in ethical practice.
                </p>
                <p>
                  Founded on the principles of integrity and professional excellence, we committed 
                  ourselves to maintaining the highest standards while adhering to Bar Council of 
                  India regulations and professional ethics.
                </p>
              </div>
            </div>
          </div>

          <!-- Mission Chapter -->
          <div class="story-chapter" ref="chapter2">
            <div class="chapter-marker">
              <div class="chapter-dot"></div>
              <div class="chapter-line"></div>
            </div>
            <div class="chapter-content">
              <div class="chapter-header">
                <span class="chapter-tag">Our Purpose</span>
                <h2>The Mission We Embrace</h2>
              </div>
              <div class="story-text">
                <p>
                  Every great story has a purpose, and ours is clear: to deliver comprehensive 
                  legal solutions that not only meet but exceed our clients' expectations. We 
                  believe in the power of dedication, expertise, and unwavering integrity.
                </p>
                <p>
                  Our mission extends beyond mere legal representation. We strive to build 
                  lasting relationships based on trust, transparency, and exceptional service 
                  delivery that stands the test of time.
                </p>
              </div>
            </div>
          </div>

          <!-- Values Chapter -->
          <div class="story-chapter" ref="chapter3">
            <div class="chapter-marker">
              <div class="chapter-dot"></div>
              <div class="chapter-line"></div>
            </div>
            <div class="chapter-content">
              <div class="chapter-header">
                <span class="chapter-tag">Our Foundation</span>
                <h2>The Values That Guide Us</h2>
              </div>
              <div class="story-text">
                <p>
                  Like pillars supporting a grand structure, our values form the foundation 
                  of everything we do. These principles guide our decisions, shape our actions, 
                  and define our character as legal professionals.
                </p>
                <div class="values-grid">
                  <div class="value-item" v-for="(value, index) in values" :key="index" ref="valueItems">
                    <div class="value-number">{{ String(index + 1).padStart(2, '0') }}</div>
                    <div class="value-content">
                      <h3>{{ value.title }}</h3>
                      <p>{{ value.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Future Chapter -->
          <div class="story-chapter" ref="chapter4">
            <div class="chapter-marker">
              <div class="chapter-dot final-dot"></div>
            </div>
            <div class="chapter-content">
              <div class="chapter-header">
                <span class="chapter-tag">Looking Forward</span>
                <h2>The Story Continues</h2>
              </div>
              <div class="story-text">
                <p>
                  Our story doesn't end here. With each client we serve, each case we handle, 
                  and each challenge we overcome, we add new chapters to the Shoolin legacy. 
                  We remain committed to evolving with the times while staying true to our core values.
                </p>
                <p>
                  The future holds endless possibilities, and we're excited to write the next 
                  chapters of our story with you as part of our journey.
                </p>
                <div class="story-cta">
                  <nuxt-link to="/contact" class="cta-button">
                    <span>Begin Your Chapter With Us</span>
                    <div class="button-arrow">→</div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      values: [
        {
          title: 'Professional Excellence',
          description: 'Maintaining the highest standards of legal practice and service delivery in every aspect of our work.'
        },
        {
          title: 'Ethical Practice',
          description: 'Upholding moral principles and professional integrity in all our legal proceedings and client interactions.'
        },
        {
          title: 'Client-Centric Approach',
          description: 'Placing our clients\' needs and success at the center of everything we do, ensuring personalized solutions.'
        },
        {
          title: 'Continuous Innovation',
          description: 'Embracing modern methodologies while respecting traditional legal frameworks and practices.'
        },
        {
          title: 'Regulatory Compliance',
          description: 'Strictly adhering to Bar Council of India regulations and maintaining professional accountability.'
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
            
            // Animate value items with stagger
            if (entry.target.classList.contains('story-chapter')) {
              const valueItems = entry.target.querySelectorAll('.value-item')
              valueItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-in')
                }, index * 200)
              })
            }
          }
        })
      }, observerOptions)

      // Observe all chapters
      const chapters = this.$refs
      Object.keys(chapters).forEach(key => {
        if (key.startsWith('chapter')) {
          observer.observe(chapters[key])
        }
      })
    }
  },
  head() {
    return {
      title: 'Our Story - Shoolin Consultancy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Discover the story behind Shoolin Consultancy - a journey of legal excellence, ethical practice, and unwavering commitment to client success.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Reset and Base Styles */
.about-page {
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

/* Legal Particles */
.legal-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.legal-particles .particle {
  position: absolute;
  font-size: 1.5rem;
  animation: particleFloat 8s ease-in-out infinite;
  opacity: 0.6;
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
}

.particle-1 {
  top: 15%;
  left: 15%;
  animation-delay: 0s;
}

.particle-2 {
  top: 25%;
  right: 20%;
  animation-delay: 1.5s;
}

.particle-3 {
  bottom: 25%;
  left: 10%;
  animation-delay: 3s;
}

.particle-4 {
  top: 50%;
  right: 15%;
  animation-delay: 4.5s;
}

.particle-5 {
  bottom: 15%;
  right: 25%;
  animation-delay: 6s;
}

.particle-6 {
  top: 70%;
  left: 20%;
  animation-delay: 7.5s;
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

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-15px) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translateY(-5px) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translateY(-20px) rotate(270deg) scale(1.05);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  animation: slideInCenter 1.2s ease-out;
}

.hero-main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@keyframes slideInCenter {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chapter-number {
  font-size: 0.875rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 1rem;
  font-weight: 400;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.story-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000000;
  line-height: 1.1;
  letter-spacing: -2px;
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
  animation-delay: 0.4s;
}

.title-line:nth-child(2) {
  animation-delay: 0.6s;
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

@keyframes slideInCenter {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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

.story-subtitle {
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 4rem;
  font-weight: 300;
  animation: fadeInUp 1s ease-out 0.8s both;
}

/* Hero Visual Elements - Centered */
.hero-visual-center {
  position: relative;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleIn 1.5s ease-out 0.8s both;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8) rotateY(45deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotateY(0deg);
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
  width: 180px;
  height: 180px;
  animation: iconFloat 4s ease-in-out infinite, iconRotate 25s linear infinite;
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));
  transform-style: preserve-3d;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.legal-icon:hover {
  transform: scale(1.1) rotateY(15deg);
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.2));
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0px) rotateX(0deg);
  }
  25% {
    transform: translateY(-15px) rotateX(5deg);
  }
  50% {
    transform: translateY(-25px) rotateX(10deg);
  }
  75% {
    transform: translateY(-15px) rotateX(5deg);
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
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-top-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.15);
  animation: ringRotate 8s linear infinite;
}

.ring-1 {
  width: 240px;
  height: 240px;
  top: -120px;
  left: -120px;
  animation-delay: 0s;
  border-width: 3px;
}

.ring-2 {
  width: 300px;
  height: 300px;
  top: -150px;
  left: -150px;
  animation-delay: 1s;
  animation-direction: reverse;
  border-width: 2px;
}

.ring-3 {
  width: 360px;
  height: 360px;
  top: -180px;
  left: -180px;
  animation-delay: 2s;
  border-width: 1px;
}

@keyframes ringRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666666;
  font-size: 0.875rem;
  animation: scrollPulse 2s ease-in-out infinite;
}

.scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, transparent, #000000, transparent);
  margin-bottom: 1rem;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.5; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(10px); }
}

/* Story Container */
.story-container {
  padding: 5rem 0;
  background-color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Timeline */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

/* Story Chapters */
.story-chapter {
  display: flex;
  margin-bottom: 6rem;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.story-chapter.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.story-chapter:nth-child(even) {
  transform: translateX(50px);
}

.story-chapter:nth-child(even).animate-in {
  transform: translateX(0);
}

/* Chapter Markers */
.chapter-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
  position: relative;
}

.chapter-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000000;
  position: relative;
  z-index: 2;
  transition: all 0.5s ease;
}

.final-dot {
  background-color: #000000;
  box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1);
}

.chapter-line {
  width: 2px;
  height: 150px;
  background: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0.3));
  margin-top: 1rem;
}

.story-chapter:last-child .chapter-line {
  display: none;
}

/* Chapter Content */
.chapter-content {
  flex: 1;
  padding-left: 2rem;
}

.chapter-header {
  margin-bottom: 2rem;
}

.chapter-tag {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.chapter-content h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #000000;
  margin: 0;
  line-height: 1.2;
}

/* Story Text */
.story-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333333;
}

.story-text p {
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

/* Values Grid */
.values-grid {
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
}

.value-item {
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.value-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.value-item:hover {
  border-color: #000000;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.value-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin-right: 1.5rem;
  min-width: 40px;
}

.value-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.5rem;
}

.value-content p {
  font-size: 1rem;
  color: #666666;
  margin: 0;
  line-height: 1.6;
}

/* Story CTA */
.story-cta {
  margin-top: 3rem;
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000000;
  color: #ffffff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.button-arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .button-arrow {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .story-title {
    font-size: 3rem;
  }
  
  .chapter-content h2 {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .legal-icon {
    width: 150px;
    height: 150px;
  }
  
  .ring-1 {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
  }
  
  .ring-2 {
    width: 250px;
    height: 250px;
    top: -125px;
    left: -125px;
  }
  
  .ring-3 {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 90vh;
    padding: 2rem 0;
  }
  
  .story-title {
    font-size: 2.5rem;
  }
  
  .story-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  
  .hero-visual-center {
    margin: 2rem 0;
  }
  
  .legal-icon {
    width: 120px;
    height: 120px;
  }
  
  .ring-1 {
    width: 160px;
    height: 160px;
    top: -80px;
    left: -80px;
  }
  
  .ring-2 {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
  }
  
  .ring-3 {
    width: 240px;
    height: 240px;
    top: -120px;
    left: -120px;
  }
  
  .legal-particles .particle {
    font-size: 1.2rem;
  }
  
  .story-chapter {
    flex-direction: column;
    margin-bottom: 4rem;
  }
  
  .chapter-marker {
    flex-direction: row;
    margin-right: 0;
    margin-bottom: 2rem;
  }
  
  .chapter-line {
    width: 100px;
    height: 2px;
    margin-top: 0;
    margin-left: 1rem;
  }
  
  .chapter-content {
    padding-left: 0;
  }
  
  .chapter-content h2 {
    font-size: 1.75rem;
  }
  
  .story-text {
    font-size: 1rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 85vh;
  }
  
  .story-title {
    font-size: 2rem;
  }
  
  .story-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .legal-icon {
    width: 100px;
    height: 100px;
  }
  
  .ring-1 {
    width: 140px;
    height: 140px;
    top: -70px;
    left: -70px;
  }
  
  .ring-2 {
    width: 170px;
    height: 170px;
    top: -85px;
    left: -85px;
  }
  
  .ring-3 {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
  }
  
  .floating-shapes .shape {
    opacity: 0.5;
  }
  
  .shape-1, .shape-3, .shape-5 {
    width: 60px;
    height: 60px;
  }
  
  .shape-2, .shape-4, .shape-6 {
    width: 40px;
    height: 40px;
  }
  
  .chapter-content h2 {
    font-size: 1.5rem;
  }
  
  .value-item {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
  }
  
  .value-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .cta-button {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}

/* Animation Utilities */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
