<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm">
      <div class="form-grid">
        <div class="form-group">
          <label for="name">Full Name</label>
          <div class="input-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
            </svg>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              placeholder="Your full name"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">Email Address</label>
          <div class="input-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>
            </svg>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              placeholder="Your email address"
            />
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label for="phone">Phone Number <span class="optional">(optional)</span></label>
        <div class="input-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path>
          </svg>
          <input 
            type="tel" 
            id="phone" 
            v-model="form.phone" 
            placeholder="Your phone number"
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <div class="input-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
            <path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z"></path>
          </svg>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject" 
            required 
            placeholder="Subject of your inquiry"
          />
        </div>
      </div>
      
      <div class="form-group message-group">
        <label for="message">Your Message</label>
        <div class="textarea-container">
          <textarea 
            id="message" 
            v-model="form.message" 
            required 
            rows="4" 
            placeholder="How can we assist you?"
          ></textarea>
        </div>
      </div>
      
      <div class="form-footer">
        <button type="submit" class="submit-btn" :disabled="submitting">
          <span v-if="!submitting">Send Message</span>
          <span v-else>Sending...</span>
          <svg v-if="!submitting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
          </svg>
          <div v-else class="spinner"></div>
        </button>
        
        <button type="button" class="book-btn" @click="navigateToTeam">
          Book Appointment
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
            <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"></path>
          </svg>
        </button>
      </div>
    </form>
    
    <div v-if="submitted" class="success-message">
      <div class="success-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path>
        </svg>
      </div>
      <h3>Thank You!</h3>
      <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      submitting: false,
      submitted: false
    };
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically handle form submission, e.g., sending data to an API
      this.submitted = true;
      this.submitting = false;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    },
    navigateToTeam() {
      // Navigate to team page where they can select a team member to book with
      this.$router.push('/team');
    }
  }
};
</script>

<style scoped>
.contact-form {
  width: 100%;
  font-family: 'Poppins', sans-serif;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 2rem;
  position: relative;
}

.message-group {
  margin-top: 0.5rem;
}

label {
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  letter-spacing: 0.3px;
}

.optional {
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
}

.input-container, .textarea-container {
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.input-container:focus-within, 
.textarea-container:focus-within {
  border-color: #000;
}

.input-container svg {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.4;
  fill: currentColor;
  transition: opacity 0.3s ease;
}

.input-container:focus-within svg,
.textarea-container:focus-within svg {
  opacity: 0.7;
}

input, textarea {
  width: 100%;
  padding: 0.8rem 0 0.8rem 2rem;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #000;
}

input::placeholder, textarea::placeholder {
  color: rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;
  transition: opacity 0.3s ease;
}

input:focus::placeholder, textarea:focus::placeholder {
  opacity: 0.5;
}

textarea {
  resize: vertical;
  min-height: 110px;
  padding: 0.8rem;
  line-height: 1.6;
  margin-top: 0.5rem;
}

.textarea-container {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-footer {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 3rem;
}

.submit-btn, .book-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 0.9rem 2rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.submit-btn {
  background: #000;
  color: #fff;
}

.book-btn {
  background: #fff;
  color: #000;
  border: 2px solid #000;
}

.submit-btn svg, .book-btn svg {
  fill: currentColor;
  transition: transform 0.3s ease;
}

.submit-btn:hover {
  background: #222;
}

.book-btn:hover {
  background: #f5f5f5;
}

.submit-btn:hover svg, .book-btn:hover svg {
  transform: translateX(3px);
}

.submit-btn:disabled {
  background: #555;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.success-message {
  background: #fafafa;
  padding: 3rem 2rem;
  text-align: center;
  animation: fade-in 0.7s ease;
  position: relative;
  margin-top: 2rem;
}

.success-message::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #000;
}

.success-icon {
  width: 70px;
  height: 70px;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 2rem;
  animation: pulse-subtle 2s infinite;
}

.success-icon svg {
  fill: #fff;
}

@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.success-message h3 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
}

.success-message p {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  max-width: 80%;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 992px) {
  .form-grid {
    gap: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.8rem;
  }
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  input, textarea {
    font-size: 0.95rem;
  }
  
  .success-message p {
    max-width: 100%;
  }
  
  .form-footer {
    flex-direction: column;
    gap: 1rem;
  }
  
  .submit-btn, .book-btn {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .submit-btn, .book-btn {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
  
  .form-footer {
    margin-top: 2rem;
  }
  
  .success-icon {
    width: 55px;
    height: 55px;
  }
  
  .success-message {
    padding: 2rem 1.5rem;
  }
  
  .success-message h3 {
    font-size: 1.4rem;
  }
  
  .success-message p {
    font-size: 0.95rem;
  }
}
</style>