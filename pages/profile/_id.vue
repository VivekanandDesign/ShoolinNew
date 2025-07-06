<template>
  <div class="profile-page">
    <!-- Back Navigation -->
    <div class="back-navigation">
      <div class="container">
        <button class="back-btn" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
          </svg>
          Back to Team
        </button>
      </div>
    </div>

    <!-- Profile Content -->
    <div class="profile-content" v-if="person">
      <div class="container">
        <!-- Hero Section -->
        <div class="profile-hero">
          <div class="hero-background">
            <div class="floating-shapes">
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
              <div class="shape shape-3"></div>
            </div>
          </div>
          
          <div class="profile-header">
            <div class="profile-photo">
              <img v-if="person.photo" :src="person.photo" :alt="person.name" />
              <div v-else class="default-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" fill="currentColor">
                  <path :d="person.iconPath"></path>
                </svg>
              </div>
              <div class="profile-badge" v-if="person.isLeadership">{{ person.badge }}</div>
            </div>
            
            <div class="profile-info">
              <h1 class="profile-name">{{ person.name }}</h1>
              <h2 class="profile-position">{{ person.position }}</h2>
              <div class="profile-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                </svg>
                {{ person.location || 'Mumbai, India' }}
              </div>
              
              <!-- Quick Actions -->
              <div class="quick-actions">
                <button class="action-btn primary-btn" @click="bookConsultation">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"/>
                  </svg>
                  Book Consultation
                </button>
                <button class="action-btn secondary-btn" @click="downloadProfile">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                  Download Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Sections -->
        <div class="profile-sections">
          <!-- About Section -->
          <div class="section-card">
            <h3 class="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17C11.45,17 11,16.55 11,16C11,15.45 11.45,15 12,15C12.55,15 13,15.45 13,16C13,16.55 12.55,17 12,17M12,9A1,1 0 0,1 13,10A1,1 0 0,1 12,11A1,1 0 0,1 11,10A1,1 0 0,1 12,9Z"/>
              </svg>
              About
            </h3>
            <div class="section-content">
              <p class="profile-description">{{ person.description }}</p>
              <p class="profile-bio">{{ person.bio || getDefaultBio() }}</p>
            </div>
          </div>

          <!-- Experience Section -->
          <div class="section-card">
            <h3 class="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14Z"/>
              </svg>
              Professional Experience
            </h3>
            <div class="section-content">
              <div class="experience-item">
                <div class="experience-header">
                  <h4>{{ person.position }}</h4>
                  <span class="duration">{{ person.experience || '5+ years' }}</span>
                </div>
                <p class="company">Shoolin Consultancy</p>
                <p class="exp-description">{{ person.experienceDetails || getDefaultExperience() }}</p>
              </div>
            </div>
          </div>

          <!-- Expertise Section -->
          <div class="section-card">
            <h3 class="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
              </svg>
              Areas of Expertise
            </h3>
            <div class="section-content">
              <div class="expertise-grid">
                <div class="expertise-item" v-for="skill in person.skills" :key="skill">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  {{ skill }}
                </div>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div class="section-card">
            <h3 class="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
              </svg>
              Education
            </h3>
            <div class="section-content">
              <div class="education-item">
                <h4>{{ person.education || 'LLB, LLM' }}</h4>
                <p class="institution">{{ person.institution || 'National Law University' }}</p>
                <p class="graduation">{{ person.graduationYear || 'Class of 2015' }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="section-card">
            <h3 class="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M22,4C22,2.89 21.1,2 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"/>
              </svg>
              Contact Information
            </h3>
            <div class="section-content">
              <div class="contact-grid">
                <div class="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                  </svg>
                  <div>
                    <span class="contact-label">Email</span>
                    <a :href="`mailto:${person.email || getDefaultEmail()}`" class="contact-value">
                      {{ person.email || getDefaultEmail() }}
                    </a>
                  </div>
                </div>
                <div class="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                  </svg>
                  <div>
                    <span class="contact-label">Phone</span>
                    <a :href="`tel:${person.phone || '+919876543210'}`" class="contact-value">
                      {{ person.phone || '+91 98765 43210' }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="loading-state">
      <div class="container">
        <div class="loading-content">
          <h2>Loading Profile...</h2>
          <p>Please wait while we fetch the profile information.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      person: null,
      teamMembers: [
        // Leadership Team
        {
          id: 1,
          name: 'Rajesh Sharma',
          position: 'Chief Executive Officer',
          description: 'Visionary leader with 20+ years of experience in legal strategy and business development.',
          isLeadership: true,
          badge: 'CEO',
          skills: ['Strategic Planning', 'Leadership', 'Business Development'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
          location: 'Mumbai, India',
          experience: '20+ years',
          education: 'LLB, MBA',
          institution: 'National Law School of India University',
          graduationYear: 'Class of 1998',
          email: 'rajesh.sharma@shoolin.com',
          phone: '+91 98765 43210',
          bio: 'A distinguished legal professional and business leader with over two decades of experience in corporate law and strategic business development. Known for transforming legal challenges into business opportunities.',
          experienceDetails: 'Leading Shoolin Consultancy with a vision to provide comprehensive legal solutions. Previously held senior positions at top law firms and has been instrumental in major corporate transactions and regulatory matters.'
        },
        {
          id: 2,
          name: 'Priya Mehta',
          position: 'Head of Operations',
          description: 'Strategic operations leader ensuring efficient delivery of legal services and client satisfaction.',
          isLeadership: true,
          badge: 'HEAD',
          skills: ['Operations Management', 'Process Optimization', 'Team Leadership'],
          iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
          photo: 'https://randomuser.me/api/portraits/women/44.jpg',
          location: 'Mumbai, India',
          experience: '15+ years',
          education: 'LLB, Post Graduate Diploma in Business Management',
          institution: 'Symbiosis Law School, Pune',
          graduationYear: 'Class of 2005',
          email: 'priya.mehta@shoolin.com',
          phone: '+91 98765 43211',
          bio: 'An accomplished operations leader with extensive experience in streamlining legal processes and enhancing client satisfaction. Expert in building efficient teams and implementing best practices.',
          experienceDetails: 'Overseeing all operational aspects of Shoolin Consultancy, ensuring seamless service delivery and maintaining the highest standards of client care. Previously managed operations at leading legal firms.'
        },
        // Senior Team Members
        {
          id: 3,
          name: 'Arjun Patel',
          position: 'Senior Legal Counsel',
          description: 'Expert in corporate law with extensive experience in mergers, acquisitions, and regulatory compliance.',
          isLeadership: false,
          skills: ['Corporate Law', 'M&A', 'Compliance'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
          location: 'Mumbai, India',
          experience: '12+ years',
          education: 'LLB, LLM in Corporate Law',
          institution: 'Gujarat National Law University',
          graduationYear: 'Class of 2010',
          email: 'arjun.patel@shoolin.com',
          phone: '+91 98765 43212',
          bio: 'A seasoned corporate lawyer with expertise in complex business transactions and regulatory matters. Known for strategic thinking and innovative solutions to challenging legal issues.',
          experienceDetails: 'Specializing in corporate law, mergers & acquisitions, and regulatory compliance. Has advised numerous companies on corporate restructuring, joint ventures, and strategic investments.'
        },
        {
          id: 4,
          name: 'Kavya Reddy',
          position: 'Intellectual Property Specialist',
          description: 'Specialist in IP law, trademark registration, and patent litigation with a focus on technology sector.',
          isLeadership: false,
          skills: ['IP Law', 'Patent Litigation', 'Technology Law'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
          location: 'Bangalore, India',
          experience: '8+ years',
          education: 'LLB, LLM in Intellectual Property Law',
          institution: 'National Law School of India University',
          graduationYear: 'Class of 2014',
          email: 'kavya.reddy@shoolin.com',
          phone: '+91 98765 43213',
          bio: 'An IP law specialist with deep expertise in protecting and monetizing intellectual property rights. Passionate about technology law and innovation protection.',
          experienceDetails: 'Expertise in patent prosecution, trademark registration, copyright protection, and IP litigation. Has successfully handled major IP disputes and technology transfer agreements.'
        },
        {
          id: 5,
          name: 'Vikram Singh',
          position: 'Litigation Manager',
          description: 'Experienced litigator with a strong track record in commercial disputes and arbitration proceedings.',
          isLeadership: false,
          skills: ['Litigation', 'Arbitration', 'Commercial Disputes'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
          location: 'Delhi, India',
          experience: '10+ years',
          education: 'LLB, LLM in Dispute Resolution',
          institution: 'Faculty of Law, University of Delhi',
          graduationYear: 'Class of 2012',
          email: 'vikram.singh@shoolin.com',
          phone: '+91 98765 43214',
          bio: 'A skilled litigator with extensive courtroom experience and a strong track record in resolving complex commercial disputes through litigation and alternative dispute resolution.',
          experienceDetails: 'Specializes in commercial litigation, arbitration, and mediation. Has successfully represented clients in high-stakes disputes and has a reputation for achieving favorable outcomes.'
        },
        {
          id: 6,
          name: 'Neha Gupta',
          position: 'Employment Law Advisor',
          description: 'Specialized in employment law, workplace policies, and HR compliance across various industries.',
          isLeadership: false,
          skills: ['Employment Law', 'HR Compliance', 'Policy Development'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
          location: 'Mumbai, India',
          experience: '9+ years',
          education: 'LLB, Post Graduate Diploma in Labour Law',
          institution: 'Government Law College, Mumbai',
          graduationYear: 'Class of 2013',
          email: 'neha.gupta@shoolin.com',
          phone: '+91 98765 43215',
          bio: 'An employment law expert dedicated to creating fair and compliant workplace environments. Specializes in helping organizations navigate complex employment regulations.',
          experienceDetails: 'Expert in employment contracts, workplace investigations, disciplinary proceedings, and employment tribunal representation. Has advised numerous organizations on HR best practices.'
        },
        {
          id: 7,
          name: 'Rohit Kumar',
          position: 'Tax Law Consultant',
          description: 'Expert in direct and indirect taxation with deep knowledge of GST, income tax, and international tax law.',
          isLeadership: false,
          skills: ['Tax Law', 'GST', 'International Taxation'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
          location: 'Chennai, India',
          experience: '11+ years',
          education: 'LLB, LLM in Taxation Law',
          institution: 'The Tamil Nadu Dr. Ambedkar Law University',
          graduationYear: 'Class of 2011',
          email: 'rohit.kumar@shoolin.com',
          phone: '+91 98765 43216',
          bio: 'A tax law specialist with comprehensive knowledge of domestic and international taxation. Known for providing strategic tax planning and compliance solutions.',
          experienceDetails: 'Expertise in direct and indirect taxation, GST compliance, transfer pricing, and international tax planning. Has advised multinational corporations on complex tax matters.'
        },
        {
          id: 8,
          name: 'Sneha Jain',
          position: 'Banking & Finance Associate',
          description: 'Specialist in banking law, financial regulations, and capital market transactions.',
          isLeadership: false,
          skills: ['Banking Law', 'Financial Regulations', 'Capital Markets'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
          location: 'Mumbai, India',
          experience: '7+ years',
          education: 'LLB, LLM in Banking and Finance Law',
          institution: 'Rajiv Gandhi School of Intellectual Property Law',
          graduationYear: 'Class of 2015',
          email: 'sneha.jain@shoolin.com',
          phone: '+91 98765 43217',
          bio: 'A banking and finance law specialist with expertise in regulatory compliance and capital market transactions. Passionate about financial technology and innovative banking solutions.',
          experienceDetails: 'Specializes in banking regulations, securities law, and capital market transactions. Has advised financial institutions on regulatory compliance and structured financial products.'
        },
        {
          id: 9,
          name: 'Aditya Verma',
          position: 'Real Estate Legal Advisor',
          description: 'Experienced in real estate transactions, property law, and regulatory approvals for development projects.',
          isLeadership: false,
          skills: ['Real Estate Law', 'Property Transactions', 'Regulatory Approvals'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
          location: 'Pune, India',
          experience: '6+ years',
          education: 'LLB, Diploma in Real Estate Law',
          institution: 'Symbiosis Law School, Pune',
          graduationYear: 'Class of 2016',
          email: 'aditya.verma@shoolin.com',
          phone: '+91 98765 43218',
          bio: 'A real estate law expert with extensive experience in property transactions and development projects. Known for navigating complex regulatory landscapes in real estate.',
          experienceDetails: 'Expertise in property acquisitions, development agreements, RERA compliance, and real estate dispute resolution. Has facilitated major real estate transactions and developments.'
        },
        {
          id: 10,
          name: 'Divya Krishnan',
          position: 'Environmental Law Specialist',
          description: 'Expert in environmental compliance, sustainability law, and regulatory frameworks for green initiatives.',
          isLeadership: false,
          skills: ['Environmental Law', 'Sustainability', 'Regulatory Compliance'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
          location: 'Kochi, India',
          experience: '5+ years',
          education: 'LLB, LLM in Environmental Law',
          institution: 'School of Legal Studies, Cochin University',
          graduationYear: 'Class of 2017',
          email: 'divya.krishnan@shoolin.com',
          phone: '+91 98765 43219',
          bio: 'An environmental law specialist passionate about sustainable development and environmental protection. Dedicated to helping organizations achieve environmental compliance while promoting green initiatives.',
          experienceDetails: 'Expertise in environmental impact assessments, pollution control regulations, and sustainability compliance. Has advised corporations on environmental risk management and green certification processes.'
        },
        {
          id: 11,
          name: 'Manish Agarwal',
          position: 'Data Privacy Officer',
          description: 'Specialist in data protection laws, privacy compliance, and cybersecurity legal frameworks.',
          isLeadership: false,
          skills: ['Data Privacy', 'GDPR Compliance', 'Cybersecurity Law'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face',
          location: 'Bangalore, India',
          experience: '4+ years',
          education: 'LLB, Certificate in Data Protection and Privacy Law',
          institution: 'National Law School of India University',
          graduationYear: 'Class of 2018',
          email: 'manish.agarwal@shoolin.com',
          phone: '+91 98765 43220',
          bio: 'A data privacy expert at the forefront of digital privacy law. Specializes in helping organizations navigate the complex landscape of data protection regulations and cybersecurity compliance.',
          experienceDetails: 'Expertise in GDPR, data protection laws, privacy impact assessments, and cybersecurity compliance. Has helped numerous organizations implement robust data protection frameworks.'
        },
        {
          id: 12,
          name: 'Pooja Nair',
          position: 'Family Law Counselor',
          description: 'Compassionate legal advisor specializing in family law, matrimonial disputes, and child custody matters.',
          isLeadership: false,
          skills: ['Family Law', 'Matrimonial Disputes', 'Child Custody'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
          location: 'Thiruvananthapuram, India',
          experience: '6+ years',
          education: 'LLB, Diploma in Family Law and Mediation',
          institution: 'Government Law College, Thiruvananthapuram',
          graduationYear: 'Class of 2016',
          email: 'pooja.nair@shoolin.com',
          phone: '+91 98765 43221',
          bio: 'A compassionate family law specialist dedicated to helping families navigate difficult legal situations with sensitivity and care. Known for her empathetic approach and mediation skills.',
          experienceDetails: 'Expertise in divorce proceedings, child custody arrangements, domestic violence cases, and family mediation. Has helped numerous families achieve amicable resolutions to complex family disputes.'
        },
        {
          id: 13,
          name: 'Karthik Raman',
          position: 'Immigration Law Expert',
          description: 'Experienced in immigration law, visa applications, and international mobility solutions for businesses.',
          isLeadership: false,
          skills: ['Immigration Law', 'Visa Processing', 'International Mobility'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
          location: 'Chennai, India',
          experience: '8+ years',
          education: 'LLB, LLM in International Law',
          institution: 'The Tamil Nadu Dr. Ambedkar Law University',
          graduationYear: 'Class of 2014',
          email: 'karthik.raman@shoolin.com',
          phone: '+91 98765 43222',
          bio: 'An immigration law expert helping individuals and businesses navigate complex international mobility requirements. Passionate about facilitating global talent movement and business expansion.',
          experienceDetails: 'Expertise in work visas, business immigration, family reunification, and citizenship applications. Has successfully processed thousands of visa applications and immigration cases.'
        },
        {
          id: 14,
          name: 'Riya Shah',
          position: 'Junior Associate',
          description: 'Rising legal professional with expertise in research, documentation, and client support across multiple practice areas.',
          isLeadership: false,
          skills: ['Legal Research', 'Documentation', 'Client Support'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
          location: 'Mumbai, India',
          experience: '2+ years',
          education: 'LLB (Hons.)',
          institution: 'Government Law College, Mumbai',
          graduationYear: 'Class of 2020',
          email: 'riya.shah@shoolin.com',
          phone: '+91 98765 43223',
          bio: 'A motivated junior associate with strong research and analytical skills. Committed to learning and contributing to complex legal matters across various practice areas.',
          experienceDetails: 'Supports senior lawyers in case preparation, legal research, and client communications. Has contributed to significant cases and demonstrates strong potential for growth in the legal profession.'
        }
      ]
    }
  },
  head() {
    if (this.person) {
      return {
        title: `${this.person.name} - ${this.person.position} | Shoolin Consultancy`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Meet ${this.person.name}, ${this.person.position} at Shoolin Consultancy. ${this.person.description}`
          }
        ]
      }
    }
    return {
      title: 'Profile - Shoolin Consultancy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Professional profile of our legal team member at Shoolin Consultancy.'
        }
      ]
    }
  },
  mounted() {
    this.loadPersonProfile()
  },
  methods: {
    loadPersonProfile() {
      const personId = parseInt(this.$route.params.id)
      this.person = this.teamMembers.find(member => member.id === personId)
      
      if (!this.person) {
        // Redirect to team page if person not found
        this.$router.push('/team')
      }
    },
    goBack() {
      this.$router.push('/team')
    },
    bookConsultation() {
      // Navigate to consultation booking page
      this.$router.push(`/consultation/${this.person.id}`)
    },
    downloadProfile() {
      // Generate and download profile/CV
      console.log('Download profile for:', this.person.name)
      // You can implement PDF generation here
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
/* Base Styles */
.profile-page {
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  color: #000000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Back Navigation */
.back-navigation {
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 2px solid #000;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  outline: none;
}

.back-btn:hover {
  background: #000;
  color: white;
  transform: translateX(-5px);
}

/* Hero Section */
.profile-hero {
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border: 2px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 60%;
  right: 20%;
  animation-delay: 2s;
  border-radius: 50%;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 30%;
  left: 70%;
  animation-delay: 4s;
}

.profile-header {
  position: relative;
  z-index: 10;
  display: flex;
  gap: 3rem;
  align-items: center;
}

.profile-photo {
  position: relative;
  flex-shrink: 0;
}

.profile-photo img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #ffffff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.default-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid #ffffff;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.profile-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: linear-gradient(135deg, #000, #333);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.profile-position {
  font-size: 1.5rem;
  font-weight: 500;
  color: #666;
  margin: 0 0 1rem 0;
}

.profile-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.quick-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
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
  text-decoration: none;
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

/* Content Sections */
.profile-sections {
  padding: 4rem 0;
}

.section-card {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.section-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: #e0e0e0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.section-title svg {
  color: #666;
}

.section-content {
  line-height: 1.6;
}

/* About Section */
.profile-description {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.profile-bio {
  font-size: 1rem;
  color: #666;
}

/* Experience Section */
.experience-item {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #000;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.experience-item h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.duration {
  background: #000;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.company {
  font-size: 1.1rem;
  font-weight: 500;
  color: #666;
  margin: 0 0 1rem 0;
}

.exp-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

/* Expertise Section */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.expertise-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 10px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
}

.expertise-item:hover {
  background: #000;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.expertise-item svg {
  color: #4CAF50;
  flex-shrink: 0;
}

.expertise-item:hover svg {
  color: #4CAF50;
}

/* Education Section */
.education-item {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #333;
}

.education-item h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin: 0 0 0.5rem 0;
}

.institution {
  font-size: 1.1rem;
  font-weight: 500;
  color: #666;
  margin: 0 0 0.5rem 0;
}

.graduation {
  font-size: 1rem;
  color: #888;
  margin: 0;
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.contact-item svg {
  color: #666;
  flex-shrink: 0;
}

.contact-label {
  display: block;
  font-size: 0.9rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.contact-value {
  font-size: 1.1rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
}

.contact-value:hover {
  color: #333;
  text-decoration: underline;
}

/* Loading State */
.loading-state {
  padding: 6rem 0;
  text-align: center;
}

.loading-content h2 {
  font-size: 2rem;
  color: #000;
  margin-bottom: 1rem;
}

.loading-content p {
  font-size: 1.1rem;
  color: #666;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .profile-header {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .profile-photo img,
  .default-avatar {
    width: 150px;
    height: 150px;
  }
  
  .profile-name {
    font-size: 2.5rem;
  }
  
  .profile-position {
    font-size: 1.3rem;
  }
  
  .quick-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .section-card {
    padding: 2rem 1.5rem;
  }
  
  .experience-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .expertise-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .profile-hero {
    padding: 2rem 0;
  }
  
  .profile-name {
    font-size: 2rem;
  }
  
  .profile-position {
    font-size: 1.1rem;
  }
  
  .section-card {
    padding: 1.5rem 1rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .profile-photo img,
  .default-avatar {
    width: 120px;
    height: 120px;
  }
}
</style>
