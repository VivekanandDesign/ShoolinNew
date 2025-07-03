<template>
  <div class="team-page">
    <div class="container">
      <h1>Our Team</h1>
      
      <div class="team-intro">
        <p>
          Meet our dedicated team of legal professionals committed to delivering exceptional service 
          while maintaining the highest standards of professional ethics and regulatory compliance.
        </p>
      </div>
      
      <div class="team-grid">
        <div class="team-member" v-for="member in teamMembers" :key="member.id">
          <div class="member-avatar">
            <div class="avatar-placeholder">{{ member.initials }}</div>
          </div>
          <h3>{{ member.name }}</h3>
          <p class="member-title">{{ member.title }}</p>
          <p class="member-description">{{ member.description }}</p>
          <div class="member-specializations">
            <h4>Specializations:</h4>
            <ul>
              <li v-for="spec in member.specializations" :key="spec">{{ spec }}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="team-values">
        <h2>Our Team Values</h2>
        <div class="values-grid">
          <div class="value-item" v-for="value in values" :key="value.title">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamPage',
  head() {
    return {
      title: 'Our Team - Shoolin Consultancy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Meet our dedicated team of legal professionals at Shoolin Consultancy. Experienced lawyers committed to professional excellence.'
        }
      ]
    }
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Senior Legal Advisor',
          title: 'Principal Consultant',
          initials: 'SLA',
          description: 'Experienced legal professional with extensive expertise in corporate law and regulatory compliance.',
          specializations: [
            'Corporate Law',
            'Regulatory Compliance',
            'Contract Law',
            'Business Advisory'
          ]
        },
        {
          id: 2,
          name: 'Legal Consultant',
          title: 'Associate Consultant',
          initials: 'LC',
          description: 'Dedicated legal professional specializing in litigation support and legal documentation.',
          specializations: [
            'Litigation Support',
            'Legal Documentation',
            'Research & Analysis',
            'Client Relations'
          ]
        },
        {
          id: 3,
          name: 'Corporate Advisor',
          title: 'Business Law Specialist',
          initials: 'CA',
          description: 'Expert in corporate governance and business law with focus on startup and SME advisory.',
          specializations: [
            'Corporate Governance',
            'Startup Advisory',
            'Mergers & Acquisitions',
            'Due Diligence'
          ]
        }
      ],
      values: [
        {
          icon: '🎯',
          title: 'Excellence',
          description: 'Committed to delivering the highest quality legal services with attention to detail.'
        },
        {
          icon: '🤝',
          title: 'Integrity',
          description: 'Maintaining the highest ethical standards in all our professional interactions.'
        },
        {
          icon: '📚',
          title: 'Knowledge',
          description: 'Continuous learning and staying updated with latest legal developments and regulations.'
        },
        {
          icon: '⚡',
          title: 'Innovation',
          description: 'Embracing modern approaches while respecting traditional legal principles.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.team-page {
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
  margin-bottom: 2rem;
  color: #000000;
}

.team-intro {
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
}

.team-intro p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333333;
  max-width: 800px;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.team-member {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-avatar {
  margin-bottom: 1.5rem;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: #000000;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto;
}

.team-member h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000000;
}

.member-title {
  font-size: 1rem;
  font-weight: 500;
  color: #666666;
  margin-bottom: 1rem;
}

.member-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 1.5rem;
}

.member-specializations h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.5rem;
  text-align: left;
}

.member-specializations ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.member-specializations li {
  padding: 0.3rem 0;
  font-size: 0.9rem;
  color: #333333;
  border-bottom: 1px solid #eeeeee;
}

.member-specializations li:before {
  content: "•";
  margin-right: 0.5rem;
  color: #000000;
}

.team-values {
  margin-top: 4rem;
}

.team-values h2 {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: #000000;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-item {
  background: #f9f9f9;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-item h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000000;
}

.value-item p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #333333;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  .team-intro {
    padding: 0 1rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .team-member {
    padding: 1.5rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  .team-member {
    padding: 1rem;
  }
  
  .value-item {
    padding: 1rem;
  }
}
</style>
