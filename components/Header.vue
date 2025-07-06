<template>
  <header class="main-header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <nuxt-link to="/" class="logo-link" @click="closeMobileMenu">
            <h1>Shoolin Consultancy</h1>
          </nuxt-link>
        </div>
        <nav class="main-nav" :class="{ 'mobile-nav-open': isMobileMenuOpen }">
          <ul>
            <li><nuxt-link to="/" @click="closeMobileMenu">Home</nuxt-link></li>
            <li><nuxt-link to="/about" @click="closeMobileMenu">About</nuxt-link></li>
            <li><nuxt-link to="/services" @click="closeMobileMenu">Services</nuxt-link></li>
            <li><nuxt-link to="/team" @click="closeMobileMenu">Team</nuxt-link></li>
            <li><nuxt-link to="/contact" @click="closeMobileMenu">Contact</nuxt-link></li>
          </ul>
        </nav>
        <div 
          class="mobile-menu-toggle" 
          :class="{ 'menu-open': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          role="button"
          aria-label="Toggle mobile menu"
          tabindex="0"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-menu-overlay" 
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      console.log('Mobile menu toggled:', this.isMobileMenuOpen)
      // Prevent body scroll when menu is open
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      document.body.style.overflow = ''
      console.log('Mobile menu closed')
    }
  },
  mounted() {
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.closeMobileMenu()
      }
    })
  },
  beforeDestroy() {
    // Clean up body overflow when component is destroyed
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.main-header {
  background-color: #ffffff !important;
  border-bottom: 2px solid #000000;
  padding: 1rem 0;
  font-family: 'Poppins', sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: transparent;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: relative;
}

.logo h1 {
  color: #000000 !important;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-shadow: none;
}

.logo-link {
  text-decoration: none;
  color: #000000 !important;
}

.logo-link:hover {
  text-decoration: none;
  color: #000000 !important;
}

.main-nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.main-nav a {
  text-decoration: none;
  color: #000000 !important;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.main-nav a:hover {
  background-color: #000000 !important;
  color: #ffffff !important;
}

.main-nav a.nuxt-link-active {
  background-color: #000000 !important;
  color: #ffffff !important;
}

/* Desktop: Hide mobile menu toggle by default */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 0.5rem;
  z-index: 1001;
  background: transparent !important;
  border: none !important;
  outline: none !important;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #000000 !important;
  transition: all 0.3s ease;
  transform-origin: center;
  display: block;
}

/* Hamburger animation */
.mobile-menu-toggle.menu-open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.menu-open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.menu-open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5) !important;
  z-index: 999;
  backdrop-filter: blur(2px);
}

/* Tablet and Mobile Navigation - Starting from 1024px and below */
@media (max-width: 1024px) {
  .header-content {
    flex-wrap: nowrap;
  }
  
  .main-nav {
    position: fixed !important;
    top: 0;
    right: -100%;
    width: 320px;
    height: 100vh;
    background-color: #ffffff !important;
    border-left: 2px solid #000000;
    transition: right 0.3s ease;
    z-index: 1001 !important;
    padding-top: 5rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    display: block !important;
  }
  
  .main-nav.mobile-nav-open {
    right: 0 !important;
  }
  
  .main-nav ul {
    flex-direction: column;
    gap: 0;
    margin: 0;
    padding: 0;
    align-items: stretch;
  }
  
  .main-nav li {
    width: 100%;
  }
  
  .main-nav a {
    display: block;
    padding: 1.2rem 2rem;
    border-bottom: 1px solid #f0f0f0;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 0;
    width: 100%;
    text-align: left;
  }
  
  .main-nav a:hover {
    background-color: #f8f8f8 !important;
    color: #000000 !important;
    padding-left: 2.5rem;
  }
  
  .main-nav a.nuxt-link-active {
    background-color: #000000 !important;
    color: #ffffff !important;
    border-left: 4px solid #333333;
  }
  
  .mobile-menu-toggle {
    display: flex !important;
    position: relative;
    background: none !important;
    border: none !important;
    cursor: pointer;
  }
  
  .logo h1 {
    font-size: 1.4rem;
  }
}

/* Mobile Phones - 768px and below */
@media (max-width: 768px) {
  .main-nav {
    width: 280px;
  }
  
  .logo h1 {
    font-size: 1.3rem;
  }
}

/* Small Mobile Phones - 480px and below */
@media (max-width: 480px) {
  .main-nav {
    width: 100%;
  }
  
  .main-nav a {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
  
  .main-nav a:hover {
    padding-left: 2rem;
  }
  
  .logo h1 {
    font-size: 1.1rem;
  }
}

/* Extra Small Mobile - 320px and below */
@media (max-width: 320px) {
  .container {
    padding: 0 0.5rem;
  }
  
  .logo h1 {
    font-size: 1rem;
  }
  
  .mobile-menu-toggle {
    padding: 0.25rem;
  }
  
  .mobile-menu-toggle span {
    width: 20px;
    height: 2px;
  }
}
</style>