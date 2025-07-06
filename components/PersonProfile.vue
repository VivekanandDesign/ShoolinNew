<template>
  <div class="person-profile-overlay" v-if="person" @click="closeProfile">
    <div class="person-profile-modal" @click.stop>
      <button class="close-btn" @click="closeProfile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
        </svg>
      </button>
      
      <div class="profile-content">
        <!-- Header Section -->
        <div class="profile-header">
          <div class="profile-photo">
            <img v-if="person.photo" :src="person.photo" :alt="person.name" />
            <div v-else class="default-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60" fill="currentColor">
                <path :d="person.iconPath"></path>
              </svg>
            </div>
            <div class="profile-badge" v-if="person.isLeadership">{{ person.badge }}</div>
          </div>
          
          <div class="profile-info">
            <h1 class="profile-name">{{ person.name }}</h1>
            <h2 class="profile-position">{{ person.position }}</h2>
            <div class="profile-location">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
              </svg>
              {{ person.location || 'Mumbai, India' }}
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="profile-section">
          <h3 class="section-title">About</h3>
          <p class="profile-description">{{ person.description }}</p>
          <p class="profile-bio">{{ person.bio || getDefaultBio() }}</p>
        </div>

        <!-- Experience Section -->
        <div class="profile-section">
          <h3 class="section-title">Experience</h3>
          <div class="experience-item">
            <h4>{{ person.position }}</h4>
            <p class="company">Shoolin Consultancy</p>
            <p class="duration">{{ person.experience || '5+ years' }}</p>
            <p class="exp-description">{{ person.experienceDetails || getDefaultExperience() }}</p>
          </div>
        </div>

        <!-- Expertise Section -->
        <div class="profile-section">
          <h3 class="section-title">Areas of Expertise</h3>
          <div class="expertise-grid">
            <div class="expertise-item" v-for="skill in person.skills" :key="skill">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
              </svg>
              {{ skill }}
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="profile-section">
          <h3 class="section-title">Education</h3>
          <div class="education-item">
            <h4>{{ person.education || 'LLB, LLM' }}</h4>
            <p class="institution">{{ person.institution || 'National Law University' }}</p>
            <p class="graduation">{{ person.graduationYear || 'Class of 2015' }}</p>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="profile-section">
          <h3 class="section-title">Contact</h3>
          <div class="contact-info">
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
              </svg>
              {{ person.email || getDefaultEmail() }}
            </div>
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
              </svg>
              {{ person.phone || '+91 98765 43210' }}
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="profile-actions">
          <button class="action-btn primary-btn" @click="bookConsultation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"/>
            </svg>
            Book Consultation
          </button>
          <button class="action-btn secondary-btn" @click="downloadCV">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            Download Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonProfile',
  props: {
    person: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeProfile() {
      this.$emit('close')
    },
    bookConsultation() {
      this.$emit('book-consultation', this.person)
      this.closeProfile()
    },
    downloadCV() {
      // Generate and download CV logic
      console.log('Download CV for:', this.person.name)
    },
    getDefaultBio() {
      return `${this.person.name} brings extensive experience in legal practice with a focus on delivering exceptional client service. Known for analytical thinking, attention to detail, and commitment to achieving the best outcomes for clients.`
    },
    getDefaultExperience() {
      return `Leading complex legal matters and providing strategic counsel to clients across various industries. Specializes in regulatory compliance, contract negotiation, and dispute resolution.`
    },
    getDefaultEmail() {
      const name = this.person.name.toLowerCase().replace(/\s+/g, '.')
      return `${name}@shoolin.com`
    }
  }
}
</script>

<style scoped>
.person-profile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;
}

.person-profile-modal {
  background: white;
  border-radius: 20px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease-out;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  color: white;
}

.profile-content {
  padding: 2rem;
}

/* Header Section */
.profile-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
}

.profile-photo {
  position: relative;
  flex-shrink: 0;
}

.profile-photo img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f0f0f0;
}

.default-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #f0f0f0;
}

.profile-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(135deg, #000, #333);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.profile-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin: 0;
  line-height: 1.2;
}

.profile-position {
  font-size: 1.3rem;
  font-weight: 500;
  color: #666;
  margin: 0;
}

.profile-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 1rem;
  margin-top: 1rem;
}

/* Sections */
.profile-section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

.profile-description {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.profile-bio {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Experience */
.experience-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #000;
}

.experience-item h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  margin: 0 0 0.5rem 0;
}

.company {
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  margin: 0 0 0.25rem 0;
}

.duration {
  font-size: 0.9rem;
  color: #888;
  margin: 0 0 1rem 0;
}

.exp-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

/* Expertise */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.expertise-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
}

.expertise-item:hover {
  background: #000;
  color: white;
  transform: translateY(-2px);
}

.expertise-item svg {
  color: #4CAF50;
  flex-shrink: 0;
}

.expertise-item:hover svg {
  color: #4CAF50;
}

/* Education */
.education-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #333;
}

.education-item h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  margin: 0 0 0.5rem 0;
}

.institution {
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  margin: 0 0 0.25rem 0;
}

.graduation {
  font-size: 0.9rem;
  color: #888;
  margin: 0;
}

/* Contact */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: #555;
}

.contact-item svg {
  color: #666;
  flex-shrink: 0;
}

/* Actions */
.profile-actions {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #f0f0f0;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border: 2px solid;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.primary-btn {
  background: #000;
  border-color: #000;
  color: white;
}

.primary-btn:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.secondary-btn {
  background: transparent;
  border-color: #ccc;
  color: #666;
}

.secondary-btn:hover {
  border-color: #000;
  color: #000;
  background: rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .person-profile-modal {
    width: 95%;
    max-height: 95vh;
  }
  
  .profile-content {
    padding: 1.5rem;
  }
  
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .profile-photo img,
  .default-avatar {
    width: 120px;
    height: 120px;
  }
  
  .profile-name {
    font-size: 2rem;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .profile-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .profile-content {
    padding: 1rem;
  }
  
  .profile-name {
    font-size: 1.8rem;
  }
  
  .profile-position {
    font-size: 1.1rem;
  }
  
  .profile-photo img,
  .default-avatar {
    width: 100px;
    height: 100px;
  }
}
</style>
