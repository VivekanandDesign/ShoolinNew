<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Company Info -->
        <div class="footer-section">
          <h3>Shoolin Consultancy</h3>
          <p>
            Professional legal consultancy services with expert guidance, 
            regulatory compliance, and comprehensive solutions for your legal needs.
          </p>
          <div class="social-links">
            <a :href="googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="social-link">
              <span class="google-icon">G</span>
              Google Reviews
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About Us</nuxt-link></li>
            <li><nuxt-link to="/services">Services</nuxt-link></li>
            <li><nuxt-link to="/team">Our Team</nuxt-link></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h4>Our Services</h4>
          <ul class="footer-links">
            <li>Corporate Law & Compliance</li>
            <li>Business Advisory Services</li>
            <li>Legal Documentation</li>
            <li>Litigation Support</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4>Contact Us</h4>
          <div class="contact-info">
            <p>
              <span class="contact-icon">📍</span>
              Professional Business Center<br>
              Mumbai, Maharashtra, India
            </p>
            <p>
              <span class="contact-icon">✉️</span>
              info@shoolinconsultancy.org
            </p>
            <p>
              <span class="contact-icon">🕒</span>
              Mon-Fri: 9:00 AM - 6:00 PM<br>
              Sat: 9:00 AM - 2:00 PM
            </p>
          </div>
          <nuxt-link to="/contact" class="footer-cta-btn">Get Consultation</nuxt-link>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            © {{ currentYear }} Shoolin Consultancy. All rights reserved.
          </p>
          <div class="legal-links">
            <span class="legal-notice">
              Professional legal services in compliance with Bar Council of India regulations.
            </span>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="footer-disclaimer">
        <p>
          <strong>Disclaimer:</strong> The content of this website is for informational purposes only and should not be 
          interpreted as legal advice. No attorney-client relationship is established by accessing this website. 
          In compliance with Bar Council of India regulations, we do not advertise or solicit legal work.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      googleReviewsUrl: 'https://g.co/kgs/nWDZJsz',
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.main-footer {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #000000 50%, #2a2a2a 75%, #000000 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

/* Ensure all text in footer is white */
.main-footer * {
  color: #ffffff !important;
}

/* Specific overrides for elements that should maintain their colors */
.google-icon {
  background: #ffffff !important;
  color: #000000 !important;
}

.footer-cta-btn {
  background-color: #ffffff !important;
  color: #000000 !important;
}

.main-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 
    800px 800px, 
    800px 800px, 
    600px 600px,
    50px 50px, 
    50px 50px;
  background-position: 
    0% 0%, 
    100% 100%, 
    50% 50%,
    0% 0%, 
    0% 0%;
  opacity: 0.6;
  animation: patternMove 20s ease-in-out infinite;
  pointer-events: none;
}

.main-footer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 25%, 
    rgba(255, 255, 255, 0.6) 50%, 
    rgba(255, 255, 255, 0.3) 75%, 
    transparent 100%
  );
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes patternMove {
  0%, 100% {
    background-position: 
      0% 0%, 
      100% 100%, 
      50% 50%,
      0% 0%, 
      0% 0%;
  }
  25% {
    background-position: 
      25% 25%, 
      75% 75%, 
      25% 75%,
      10px 10px, 
      -10px 10px;
  }
  50% {
    background-position: 
      50% 50%, 
      50% 50%, 
      75% 25%,
      20px 20px, 
      -20px 20px;
  }
  75% {
    background-position: 
      75% 25%, 
      25% 75%, 
      25% 75%,
      30px 10px, 
      -30px 30px;
  }
}

@keyframes shimmer {
  0%, 100% {
    opacity: 0.3;
    transform: translateX(-100%);
  }
  50% {
    opacity: 1;
    transform: translateX(100%);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
}

.footer-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.footer-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ffffff;
  padding-bottom: 0.5rem;
}

.footer-section p {
  color: #ffffff !important;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ffffff !important;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #cccccc !important;
}

.footer-links li:not(:has(a)) {
  color: #ffffff !important;
  font-size: 0.9rem;
}

.social-links {
  margin-top: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff !important;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #cccccc !important;
}

.google-icon {
  background: #ffffff;
  color: #000000;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
}

.contact-info p {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.contact-icon {
  font-size: 1rem;
  min-width: 20px;
}

.footer-cta-btn {
  display: inline-block;
  background-color: #ffffff;
  color: #000000;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.footer-cta-btn:hover {
  background-color: #cccccc;
  color: #000000;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: #ffffff !important;
  margin: 0;
  font-size: 0.9rem;
}

.legal-links {
  text-align: right;
}

.legal-notice {
  color: #ffffff !important;
  font-size: 0.8rem;
  font-style: italic;
}

.footer-disclaimer {
  background-color: #333333;
  padding: 1rem 0;
  border-top: 1px solid #555555;
}

.footer-disclaimer p {
  color: #ffffff !important;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 0;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .legal-links {
    text-align: center;
  }
  
  .footer-section h3 {
    font-size: 1.3rem;
  }
  
  .footer-section h4 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 1.5rem 0;
  }
  
  .footer-cta-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .footer-disclaimer {
    padding: 0.8rem 0;
  }
}
</style>
