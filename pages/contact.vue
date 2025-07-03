<template>
  <div class="contact-page">
    <div class="container">
      <h1>Contact Us</h1>
      
      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We welcome your inquiries and are here to provide information about our services. 
            Please note that initial contact does not establish an attorney-client relationship.
          </p>
          
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-text">
                <h3>Office Address</h3>
                <p>Professional Business Center<br>Mumbai, Maharashtra, India</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-text">
                <h3>Phone</h3>
                <p>Available during business hours<br>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-text">
                <h3>Email</h3>
                <p>info@shoolinconsultancy.org<br>Response within 24-48 hours</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div class="contact-text">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 2:00 PM<br>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-section">
          <ContactForm />
        </div>
      </div>
      
      <div class="important-notice">
        <h3>Important Legal Notice</h3>
        <p>
          <strong>Disclaimer:</strong> Submission of this form does not create an attorney-client relationship. 
          Do not include confidential or sensitive information in your message. Any communication through this 
          form is for general inquiry purposes only and should not be construed as legal advice.
        </p>
        <p>
          In compliance with Bar Council of India regulations, we do not advertise or solicit legal work. 
          All information is provided for educational purposes only.
        </p>
      </div>
      
      <div class="google-reviews-section">
        <h2>Client Feedback</h2>
        <GoogleReviews />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import GoogleReviews from '@/components/GoogleReviews.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactForm,
    GoogleReviews
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
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: 2rem 0;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.contact-info h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000000;
  border-bottom: 2px solid #000000;
  padding-bottom: 0.5rem;
}

.contact-info > p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333333;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 8px;
  background: #f9f9f9;
}

.contact-icon {
  font-size: 1.5rem;
  min-width: 30px;
}

.contact-text h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000000;
}

.contact-text p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #333333;
  margin: 0;
}

.contact-form-section {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 2rem;
}

.important-notice {
  background: #f5f5f5;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.important-notice h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000000;
}

.important-notice p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 1rem;
}

.important-notice p:last-child {
  margin-bottom: 0;
}

.google-reviews-section {
  margin-top: 3rem;
}

.google-reviews-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: #000000;
  border-bottom: 2px solid #000000;
  padding-bottom: 0.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-item {
    padding: 0.8rem;
  }
  
  .contact-form-section {
    padding: 1.5rem;
  }
  
  .important-notice {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
  
  .contact-form-section {
    padding: 1rem;
  }
  
  .important-notice {
    padding: 1rem;
  }
}
</style>