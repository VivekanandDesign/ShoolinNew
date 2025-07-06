<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <!-- Animated Background with Legal Elements -->
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
        <div class="grid-overlay"></div>
        <div class="legal-particles">
          <div class="particle particle-1">📱</div>
          <div class="particle particle-2">📨</div>
          <div class="particle particle-3">🏛️</div>
          <div class="particle particle-4">📞</div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <!-- Central Hero Text -->
          <div class="hero-main">
            <div class="chapter-number">Chapter 04</div>
            <h1 class="story-title">
              <span class="title-line" data-text="Let's Connect">Let's Connect</span>
              <span class="title-line" data-text="With Us">With Us</span>
            </h1>
            <div class="story-subtitle">We're Ready to Assist You</div>
            
            <!-- Central Legal Icon -->
            <div class="hero-visual-center">
              <div class="legal-icon-container">
                <div class="legal-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
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
              <span>Scroll to reach out</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-container">
      <div class="container">
        <!-- Office Locations Section -->
        <div class="office-locations-section">
          <div class="section-header">
            <span class="section-tag">Where To Find Us</span>
            <h2>Our Office Locations</h2>
            <p class="section-description">Visit us at any of our 6 offices across Bangalore</p>
          </div>
          
          <div class="office-grid">
            <div class="office-card" v-for="(office, index) in officeLocations" :key="index">
              <div class="office-image">
                <img :src="office.image" :alt="office.name" @error="handleImageError" />
                <div class="image-overlay"></div>
              </div>
              <div class="office-content">
                <h3>{{ office.name }}</h3>
                <p class="office-address">{{ office.address }}</p>
                <p class="office-specialty">{{ office.specialty }}</p>
                <div class="office-hours">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
                  </svg>
                  <span>{{ office.hours }}</span>
                </div>
              </div>
              <div class="office-action">
                <button class="direction-btn">
                  <span>Get Directions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Information Section -->
        <div class="contact-section">
          <div class="section-header">
            <span class="section-tag">Get In Touch</span>
            <h2>Contact Information</h2>
          </div>
          
          <div class="contact-cards">
            <div class="contact-card" v-for="(item, index) in contactInfo" :key="index">
              <div class="card-icon">
                <div class="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path :d="item.icon" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <h3>{{ item.title }}</h3>
                <p v-html="item.details"></p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Book Appointment CTA Section -->
        <div class="appointment-cta-section">
          <div class="appointment-cta-container">
            <div class="cta-content">
              <div class="cta-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                </svg>
              </div>
              <div class="cta-text">
                <h3>Need Legal Consultation?</h3>
                <p>Schedule a meeting with our legal experts to discuss your specific needs and get personalized advice.</p>
              </div>
              <div class="cta-button">
                <button @click="goToTeamPage" class="book-appointment-btn">
                  Book Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonials Section -->
        <div class="testimonials-section">
          <div class="section-header">
            <span class="section-tag">Our Reputation</span>
            <h2>Client Testimonials</h2>
          </div>
          
          <div class="reviews-container">
            <GoogleReviews />
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="contact-form-section">
          <div class="section-header">
            <span class="section-tag">Get in Touch</span>
            <h2>Send Us a Message</h2>
            <p class="section-description">Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          
          <div class="form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleReviews from '@/components/GoogleReviews.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'ContactPage',
  components: {
    GoogleReviews,
    ContactForm
  },
  data() {
    return {
      officeLocations: [
        {
          name: 'Koramangala Branch',
          address: '80 Feet Road, 4th Block, Koramangala, Bangalore - 560034',
          specialty: 'Corporate Law & Commercial Contracts',
          hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
          image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&h=450&fit=crop&q=80'
        },
        {
          name: 'Whitefield Branch',
          address: 'Phoenix Marketcity, Whitefield Main Road, Bangalore - 560066',
          specialty: 'Real Estate & Property Law',
          hours: 'Mon-Fri: 9:00 AM - 6:30 PM',
          image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=450&fit=crop&q=80'
        },
        {
          name: 'Indiranagar Branch',
          address: '100 Feet Road, Indiranagar, Bangalore - 560038',
          specialty: 'Startups & Business Advisory',
          hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
          image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=450&fit=crop&q=80'
        },
        {
          name: 'MG Road Branch',
          address: 'Trinity Circle, MG Road, Bangalore - 560001',
          specialty: 'Civil Litigation & Dispute Resolution',
          hours: 'Mon-Fri: 8:30 AM - 6:00 PM',
          image: 'https://images.unsplash.com/photo-1564540583246-934409427776?w=800&h=450&fit=crop&q=80'
        },
        {
          name: 'Electronic City Branch',
          address: 'Phase 1, Electronic City, Bangalore - 560100',
          specialty: 'Technology Law & IP Protection',
          hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
          image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=450&fit=crop&q=80'
        },
        {
          name: 'Jayanagar Branch',
          address: '4th Block, Jayanagar, Bangalore - 560011',
          specialty: 'Family Law & Estate Planning',
          hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=450&fit=crop&q=80'
        }
      ],
      contactInfo: [
        {
          title: 'Office Address',
          icon: 'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z',
          details: 'Professional Business Center<br>Mumbai, Maharashtra, India'
        },
        {
          title: 'Contact Number',
          icon: 'M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z',
          details: 'Available during business hours<br>Monday - Friday: 9:00 AM - 6:00 PM'
        },
        {
          title: 'Email Address',
          icon: 'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z',
          details: 'info@shoolinconsultancy.org<br>Response within 24-48 hours'
        },
        {
          title: 'Business Hours',
          icon: 'M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z',
          details: 'Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 2:00 PM<br>Sunday: Closed'
        }
      ]
    }
  },
  mounted() {
    // Animation initialization for elements
    // No need to call initAnimations as we're using CSS animations
  },
  head() {
    return {
      title: 'Contact Us - Shoolin Consultancy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Shoolin Consultancy for legal consultation inquiries. Professional legal services with ethical practice standards.'
        }
      ]
    }
  },
  methods: {
    goToTeamPage() {
      // Navigate to team page where they can select a team member to book with
      this.$router.push('/team');
    },
    handleImageError(event) {
      // Fallback for image loading errors
      event.target.src = 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=450&fit=crop&q=80';
    }
  }
}
</script>

<style scoped>
/* Main Styles */
.contact-page {
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  color: #000000;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.floating-shapes .shape {
  position: absolute;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation: float-slow 20s infinite alternate ease-in-out;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation: float-slow 15s infinite alternate-reverse ease-in-out;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 30%;
  left: 10%;
  animation: float-slow 18s infinite alternate ease-in-out;
}

.shape-4 {
  width: 180px;
  height: 180px;
  bottom: 20%;
  right: 15%;
  animation: float-slow 22s infinite alternate-reverse ease-in-out;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 1;
}

.legal-particles .particle {
  position: absolute;
  opacity: 0.2;
  font-size: 2rem;
  animation: float-particle 20s infinite alternate ease-in-out;
}

.particle-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.particle-2 {
  top: 70%;
  left: 20%;
  animation-delay: -4s;
}

.particle-3 {
  top: 30%;
  right: 15%;
  animation-delay: -8s;
}

.particle-4 {
  top: 60%;
  right: 20%;
  animation-delay: -12s;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.hero-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.chapter-number {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  opacity: 0.6;
  position: relative;
}

.chapter-number:after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: #000;
  margin: 0.5rem auto;
}

.story-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 1rem;
  text-transform: uppercase;
  position: relative;
}

.title-line {
  display: block;
  position: relative;
  overflow: hidden;
}

.title-line:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.story-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  opacity: 0.7;
}

.hero-visual-center {
  width: 120px;
  height: 120px;
  margin: 2rem 0;
  position: relative;
}

.legal-icon-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.legal-icon {
  width: 80px;
  height: 80px;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: pulse 2s infinite;
}

.icon-rings .ring {
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring-1 {
  width: 100%;
  height: 100%;
  animation: ring-rotate 20s linear infinite;
}

.ring-2 {
  width: 80%;
  height: 80%;
  border-style: dashed;
  animation: ring-rotate 15s linear infinite reverse;
}

.ring-3 {
  width: 60%;
  height: 60%;
  border-style: dotted;
  animation: ring-rotate 10s linear infinite;
}

.scroll-indicator {
  margin-top: 3rem;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fade-in-out 2s ease-in-out infinite;
}

.scroll-line {
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  margin-bottom: 0.5rem;
}

/* Contact Container */
.contact-container {
  padding: 6rem 0;
}

/* Section Styling */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.section-tag {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  position: relative;
}

.section-tag:after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background: #000;
  margin: 0.5rem auto;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
}

/* Contact Cards */
.contact-section {
  margin-bottom: 6rem;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-card {
  padding: 2rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-color: #000;
}

.card-icon {
  margin-bottom: 1.5rem;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.card-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
}

/* Form Section */
/* Form section removed */

/* Testimonials Section */
/* Appointment CTA Section */
.appointment-cta-section {
  padding: 5rem 0;
  position: relative;
  margin: 2rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.01));
}

.appointment-cta-section::before,
.appointment-cta-section::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

.appointment-cta-section::before {
  top: 0;
}

.appointment-cta-section::after {
  bottom: 0;
}

.appointment-cta-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cta-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.cta-icon {
  width: 80px;
  height: 80px;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  color: #fff;
  position: relative;
  flex-shrink: 0;
}

.cta-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.cta-text {
  flex-grow: 1;
}

.cta-text h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
}

.cta-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}

.cta-button {
  margin-left: 2rem;
  flex-shrink: 0;
}

.book-appointment-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #000;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.book-appointment-btn:hover {
  background: #222;
  transform: translateX(5px);
}

.book-appointment-btn svg {
  transition: transform 0.3s ease;
}

.book-appointment-btn:hover svg {
  transform: translateX(3px);
}

.testimonials-section {
  padding: 4rem 0 5rem;
  position: relative;
  background-color: #fafafa;
  margin-top: 2rem;
  margin-bottom: 0;
}

.testimonials-section .section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

.reviews-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem 2.5rem; /* Added more bottom padding */
  min-height: 600px; /* Ensure container has enough height */
  display: flex;
  flex-direction: column;
}

/* Animations */
@keyframes float-slow {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(20px, 20px);
  }
}

@keyframes float-particle {
  0% {
    transform: translate(0, 0) rotate(0);
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: translate(20px, -20px) rotate(10deg);
    opacity: 0.2;
  }
}

@keyframes ring-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
  }
  70% {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

/* Office Locations Section */
.office-locations-section {
  margin-bottom: 6rem;
}

.section-description {
  text-align: center;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 1rem;
  font-weight: 300;
}

.office-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.office-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.office-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.2);
}

.office-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.office-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.office-card:hover .office-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.office-card:hover .image-overlay {
  opacity: 0.8;
  height: 70%;
}

.office-content {
  padding: 1.5rem 1.5rem 1rem;
  flex-grow: 1;
}

.office-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
  color: #000;
  position: relative;
  padding-bottom: 0.8rem;
}

.office-content h3:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background: #000;
}

.office-address {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

.office-specialty {
  font-size: 0.9rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.05);
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
}

.office-hours {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
}

.office-action {
  padding: 0 1.5rem 1.5rem;
}

.direction-btn {
  width: 100%;
  background: transparent;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.direction-btn:hover {
  background: #000;
  color: white;
}

.direction-btn svg {
  transition: transform 0.3s ease;
}

.direction-btn:hover svg {
  transform: translateX(3px);
}

@media (max-width: 992px) {
  .office-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .office-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .office-image {
    height: 180px;
  }
  
  .office-content h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .office-grid {
    grid-template-columns: 1fr;
  }
  
  .office-image {
    height: 200px;
  }
}

@keyframes fade-in-out {
  0%, 100% {
    opacity: 0.4;
    transform: translateY(0);
  }
  50% {
    opacity: 0.8;
    transform: translateY(5px);
  }
}

/* Media Queries */
@media (max-width: 992px) {
  .story-title {
    font-size: 3.2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .story-title {
    font-size: 2.5rem;
  }

  .contact-cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .contact-card {
    padding: 1.5rem;
  }
  
  .appointment-cta-section {
    padding: 3rem 0;
  }
  
  .cta-content {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }
  
  .cta-icon {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
  
  .cta-button {
    margin-left: 0;
    margin-top: 1.5rem;
  }
  
  .testimonials-section {
    padding: 3.5rem 0 5rem;
    margin-top: 2rem;
  }
  
  .testimonials-section .section-header {
    margin-bottom: 2rem;
  }

  /* Form section removed */
}

@media (max-width: 576px) {
  .container {
    padding: 0 1rem;
  }

  .hero-section {
    height: auto;
    min-height: 80vh;
  }
  
  .testimonials-section {
    padding: 3rem 0 4rem;
    margin-top: 3rem;
  }
  
  .testimonials-section .section-header {
    margin-bottom: 1.5rem;
  }

  .story-title {
    font-size: 2rem;
  }

  .hero-visual-center {
    width: 100px;
    height: 100px;
  }

  .legal-icon {
    width: 60px;
    height: 60px;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .contact-cards {
    grid-template-columns: 1fr;
  }

  /* Form section removed */
}

/* Contact Form Section */
.contact-form-section {
  padding: 5rem 0;
  background-color: #ffffff;
  position: relative;
}

.contact-form-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}

.contact-form-section .section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
}

@media (max-width: 768px) {
  .contact-form-section {
    padding: 4rem 0;
  }
  
  .contact-form-section .section-header {
    margin-bottom: 2rem;
  }
}
</style>