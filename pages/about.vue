<template>
  <div class="about-page">
    <div class="container">
      <h1>About Shoolin Consultancy</h1>
      
      <section class="about-content">
        <div class="about-text">
          <h2>Our Story</h2>
          <p>
            Shoolin Consultancy is a premier legal consultancy firm committed to providing 
            exceptional legal services while maintaining the highest standards of professional 
            ethics and compliance with Bar Council of India regulations.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            To deliver comprehensive legal solutions with integrity, expertise, and dedication 
            to our clients' success. We strive to build lasting relationships based on trust 
            and exceptional service delivery.
          </p>
          
          <h2>Our Values</h2>
          <ul>
            <li>Professional Excellence</li>
            <li>Ethical Practice</li>
            <li>Client-Centric Approach</li>
            <li>Continuous Innovation</li>
            <li>Regulatory Compliance</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: 'About Us - Shoolin Consultancy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn about Shoolin Consultancy - a premier legal consultancy firm committed to professional excellence and ethical practice.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
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

.about-content {
  background: #ffffff;
  padding: 2rem;
  border: 2px solid #000000;
  border-radius: 8px;
}

.about-text h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #000000;
  border-bottom: 2px solid #000000;
  padding-bottom: 0.5rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333333;
}

.about-text ul {
  list-style: none;
  padding: 0;
}

.about-text li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #cccccc;
  font-size: 1.1rem;
  color: #333333;
}

.about-text li:before {
  content: "▶";
  margin-right: 0.5rem;
  color: #000000;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  .about-content {
    padding: 1rem;
  }
  
  .about-text h2 {
    font-size: 1.5rem;
  }
  
  .about-text p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  .about-content {
    padding: 0.8rem;
  }
}
</style>
