<template>
  <div class="services-page">
    <div class="container">
      <h1>Our Services</h1>
      
      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul>
            <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
      
      <div class="disclaimer">
        <h3>Important Notice</h3>
        <p>
          In compliance with Bar Council of India regulations, we do not advertise or solicit legal work. 
          All information provided is for educational purposes only and should not be construed as legal advice.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  head() {
    return {
      title: 'Services - Shoolin Consultancy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore our comprehensive legal services at Shoolin Consultancy. Professional legal consultation and advisory services.'
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
          title: 'Legal Consultation',
          description: 'Professional legal advice and consultation services for various legal matters.',
          features: [
            'Business Law Advisory',
            'Contract Review',
            'Compliance Guidance',
            'Legal Documentation'
          ]
        },
        {
          id: 2,
          icon: '📋',
          title: 'Corporate Services',
          description: 'Comprehensive corporate legal services for businesses of all sizes.',
          features: [
            'Company Formation',
            'Corporate Governance',
            'Merger & Acquisition',
            'Regulatory Compliance'
          ]
        },
        {
          id: 3,
          icon: '🏛️',
          title: 'Litigation Support',
          description: 'Expert litigation support and representation services.',
          features: [
            'Civil Litigation',
            'Commercial Disputes',
            'Arbitration',
            'Legal Research'
          ]
        },
        {
          id: 4,
          icon: '📄',
          title: 'Documentation',
          description: 'Professional legal documentation and drafting services.',
          features: [
            'Contract Drafting',
            'Legal Agreements',
            'Policy Development',
            'Compliance Documents'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000000;
}

.service-card p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333333;
}

.service-card ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.service-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #cccccc;
  font-size: 0.9rem;
  color: #333333;
}

.service-card li:before {
  content: "✓";
  margin-right: 0.5rem;
  color: #000000;
  font-weight: bold;
}

.disclaimer {
  background: #f5f5f5;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.disclaimer h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000000;
}

.disclaimer p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333333;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .disclaimer {
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
  
  .service-card {
    padding: 1rem;
  }
  
  .disclaimer {
    padding: 1rem;
  }
}
</style>
