<template>
  <header class="main-header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <nuxt-link to="/" class="logo-link">
            <h1>Shoolin Consultancy</h1>
          </nuxt-link>
        </div>
        <nav class="main-nav">
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/services">Services</nuxt-link></li>
            <li><nuxt-link to="/team">Team</nuxt-link></li>
            <li><nuxt-link to="/appointments">Appointments</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </nav>
        <div class="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.main-header {
  background-color: #ffffff;
  border-bottom: 2px solid #000000;
  padding: 1rem 0;
  font-family: 'Poppins', sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  color: #000000;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.logo-link {
  text-decoration: none;
  color: #000000;
}

.logo-link:hover {
  text-decoration: none;
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
  color: #000000;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.main-nav a:hover {
  background-color: #000000;
  color: #ffffff;
}

.main-nav a.nuxt-link-active {
  background-color: #000000;
  color: #ffffff;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #000000;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
  }
  
  .main-nav {
    display: none;
    width: 100%;
    order: 3;
  }
  
  .main-nav ul {
    flex-direction: column;
    gap: 0;
    margin-top: 1rem;
    border-top: 1px solid #000000;
    padding-top: 1rem;
  }
  
  .main-nav a {
    display: block;
    padding: 0.8rem 0;
    border-bottom: 1px solid #eeeeee;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .logo h1 {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .logo h1 {
    font-size: 1.1rem;
  }
  
  .main-nav a {
    font-size: 0.9rem;
  }
}
</style>