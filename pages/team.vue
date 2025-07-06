<template>
  <div class="team-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <!-- Animated Background with Legal Elements -->
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
          <div class="shape shape-6"></div>
        </div>
        <div class="grid-overlay"></div>
        <div class="legal-particles">
          <div class="particle particle-1">👥</div>
          <div class="particle particle-2">⚖️</div>
          <div class="particle particle-3">🎯</div>
          <div class="particle particle-4">💼</div>
          <div class="particle particle-5">🏆</div>
          <div class="particle particle-6">📚</div>
        </div>
      </div>
      
      <div class="container">
        <div class="hero-content" ref="heroContent">
          <!-- Central Hero Text -->
          <div class="hero-main">
            <div class="chapter-number">Chapter 03</div>
            <h1 class="story-title">
              <span class="title-line" data-text="Meet Our">Meet Our</span>
              <span class="title-line" data-text="Legal Team">Legal Team</span>
            </h1>
            <div class="story-subtitle">Excellence Through Expertise & Dedication</div>
            
            <!-- 3D Team Icon Visual - Centered -->
            <div class="hero-visual-center">
              <div class="team-icon-container">
                <div class="team-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
                    <path d="M16 4C18.21 4 20 5.79 20 8S18.21 12 16 12 12 10.21 12 8 13.79 4 16 4ZM16 14C20.42 14 24 15.79 24 18V20H8V18C8 15.79 11.58 14 16 14ZM8 4C10.21 4 12 5.79 12 8S10.21 12 8 12 4 10.21 4 8 5.79 4 8 4ZM8 14C12.42 14 16 15.79 16 18V20H0V18C0 15.79 3.58 14 8 14Z"/>
                  </svg>
                </div>
                <div class="icon-rings">
                  <div class="ring ring-1"></div>
                  <div class="ring ring-2"></div>
                  <div class="ring ring-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Content Section -->
    <div class="team-content">
      <div class="container">
        <!-- Team Introduction -->
        <div class="story-chapter" ref="introChapter">
          <div class="chapter-header">
            <div class="chapter-number">Our Foundation</div>
            <h2 class="chapter-title">Professional Excellence</h2>
            <p class="chapter-subtitle">
              Meet our dedicated team of legal professionals committed to delivering exceptional service 
              while maintaining the highest standards of professional ethics and regulatory compliance.
            </p>
          </div>
        </div>

        <!-- Team Members -->
        <div class="story-chapter hidden-section" ref="teamChapter">
          <div class="chapter-header">
            <div class="chapter-number">Our Experts</div>
            <h2 class="chapter-title">Legal Professionals</h2>
            <p class="chapter-subtitle">Experienced legal minds dedicated to your success</p>
          </div>
          
          <div class="team-grid">
            <div class="team-member" v-for="member in teamMembers" :key="member.id">
              <div class="team-member-inner">
                <div class="member-avatar">
                  <div class="avatar-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                      <path :d="member.iconPath"></path>
                    </svg>
                  </div>
                  <div class="avatar-bg"></div>
                </div>
                <h3 class="member-name">{{ member.name }}</h3>
                <p class="member-title">{{ member.title }}</p>
                <p class="member-description">{{ member.description }}</p>
                <div class="member-specializations">
                  <ul class="specialization-list">
                    <li v-for="spec in member.specializations" :key="spec">
                      <span class="spec-bullet">→</span>
                      {{ spec }}
                    </li>
                  </ul>
                </div>
                <div class="member-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- People Section -->
        <div class="story-chapter" ref="peopleChapter">
          <div class="chapter-header">
            <div class="chapter-number">Our People</div>
            <h2 class="chapter-title">Leadership & Team</h2>
            <p class="chapter-subtitle">Meet the dedicated professionals who drive our success</p>
          </div>
          
          <div class="people-grid">
            <div class="person-card" v-for="person in people" :key="person.id">
              <div class="person-card-inner">
                <div class="person-avatar">
                  <div class="avatar-circle">
                    <img 
                      v-if="person.photo" 
                      :src="person.photo" 
                      :alt="person.name" 
                      class="person-photo"
                      @error="handleImageError"
                      loading="lazy"
                    />
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path :d="person.iconPath"></path>
                    </svg>
                  </div>
                  <div class="person-badge" v-if="person.isLeadership">{{ person.badge }}</div>
                </div>
                <div class="person-info">
                  <h3 class="person-name">{{ person.name }}</h3>
                  <p class="person-position">{{ person.position }}</p>
                  <p class="person-description">{{ person.description }}</p>                <div class="person-skills" v-if="person.skills">
                  <div class="skill-tag" v-for="skill in person.skills" :key="skill">
                    {{ skill }}
                  </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="person-actions">
                  <button class="action-btn consultation-btn" @click="bookConsultation(person)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"/>
                    </svg>
                    Book Consultation
                  </button>
                  <button class="action-btn know-more-btn" @click="knowMore(person)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
                    </svg>
                    Know More
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Team Values -->
        <div class="story-chapter values-section" ref="valuesChapter">
          <div class="chapter-header">
            <div class="chapter-number">Our Principles</div>
            <h2 class="chapter-title">Core Values</h2>
            <p class="chapter-subtitle">The principles that guide our professional practice</p>
          </div>
          
          <div class="values-grid">
            <div class="value-item" v-for="value in values" :key="value.title">
              <div class="value-icon-wrapper">
                <div class="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                    <path :d="value.iconPath"></path>
                  </svg>
                </div>
                <div class="value-icon-bg"></div>
              </div>
              <h3 class="value-title">{{ value.title }}</h3>
              <p class="value-description">{{ value.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- Office & Team Gallery -->
        <div class="story-chapter gallery-section" ref="galleryChapter">
          <div class="chapter-header">
            <div class="chapter-number">Our Culture</div>
            <h2 class="chapter-title">Office Life & Celebrations</h2>
            <p class="chapter-subtitle">Glimpses of our vibrant workplace and team events</p>
          </div>
          
          <div class="gallery-tabs">
            <button 
              :class="['tab-btn', { active: activeGalleryTab === 'office' }]" 
              @click="setGalleryTab('office')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z" />
              </svg>
              Office Spaces
            </button>
            <button 
              :class="['tab-btn', { active: activeGalleryTab === 'events' }]" 
              @click="setGalleryTab('events')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
              </svg>
              Events & Celebrations
            </button>
            <button 
              :class="['tab-btn', { active: activeGalleryTab === 'team' }]" 
              @click="setGalleryTab('team')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
              </svg>
              Team Outings
            </button>
          </div>
          
          <div class="gallery-content">
            <!-- Office Spaces Gallery -->
            <div class="gallery-grid" v-show="activeGalleryTab === 'office'" ref="officeGallery">
              <div v-for="(image, index) in officeGallery" :key="'office-'+index" class="gallery-item" :class="{'initial-visible': activeGalleryTab === 'office'}">
                <div class="gallery-image-container" @click="openLightbox(officeGallery, index)">
                  <img :src="image.url" :alt="image.caption" loading="lazy" @error="handleImageError" />
                  <div class="gallery-overlay">
                    <div class="gallery-caption">{{ image.caption }}</div>
                    <div class="gallery-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Events & Celebrations Gallery -->
            <div class="gallery-grid" v-show="activeGalleryTab === 'events'" ref="eventsGallery">
              <div v-for="(image, index) in eventsGallery" :key="'event-'+index" class="gallery-item" :class="{'initial-visible': activeGalleryTab === 'events'}">
                <div class="gallery-image-container" @click="openLightbox(eventsGallery, index)">
                  <img :src="image.url" :alt="image.caption" loading="lazy" @error="handleImageError" />
                  <div class="gallery-overlay">
                    <div class="gallery-caption">{{ image.caption }}</div>
                    <div class="gallery-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Team Outings Gallery -->
            <div class="gallery-grid" v-show="activeGalleryTab === 'team'" ref="teamGallery">
              <div v-for="(image, index) in teamOutingsGallery" :key="'team-'+index" class="gallery-item" :class="{'initial-visible': activeGalleryTab === 'team'}">
                <div class="gallery-image-container" @click="openLightbox(teamOutingsGallery, index)">
                  <img :src="image.url" :alt="image.caption" loading="lazy" @error="handleImageError" />
                  <div class="gallery-overlay">
                    <div class="gallery-caption">{{ image.caption }}</div>
                    <div class="gallery-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Lightbox Modal -->
          <div class="lightbox-modal" v-if="lightbox.visible" @click="closeLightbox">
            <div class="lightbox-container" @click.stop>
              <div class="lightbox-header">
                <h3 class="lightbox-title">{{ lightbox.currentImage?.caption }}</h3>
                <button class="lightbox-close" @click="closeLightbox">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </button>
              </div>
              <div class="lightbox-content">
                <button class="lightbox-nav prev" v-if="lightbox.images.length > 1" @click.stop="prevImage">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                  </svg>
                </button>
                <img :src="lightbox.currentImage?.url" :alt="lightbox.currentImage?.caption" class="lightbox-image" />
                <button class="lightbox-nav next" v-if="lightbox.images.length > 1" @click.stop="nextImage">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </button>
              </div>
              <div class="lightbox-caption">
                <p>{{ lightbox.currentImage?.description }}</p>
              </div>
            </div>
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
          content: 'Meet our dedicated team of legal professionals at Shoolin Consultancy. Experienced lawyers committed to professional excellence and client success.'
        }
      ]
    }
  },
  data() {
    return {
      activeGalleryTab: 'office',
      lightbox: {
        visible: false,
        images: [],
        currentIndex: 0,
        currentImage: null
      },
      teamMembers: [
        {
          id: 1,
          name: 'Senior Legal Advisor',
          title: 'Principal Consultant & Managing Partner',
          initials: 'SLA',
          iconPath: 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V21C11 21.6 11.4 22 12 22S13 21.6 13 21V11C14.1 11 15 10.1 15 9V7H21ZM7 10V12H5V10H7ZM19 10V12H17V10H19Z',
          description: 'Seasoned legal professional with extensive expertise in corporate law, regulatory compliance, and strategic business advisory. Leader in complex legal matters with proven track record.',
          specializations: [
            'Regulatory Compliance & Risk Management',
            'Contract Negotiation & Drafting',
            'Strategic Business Advisory',
            'Mergers & Acquisitions'
          ]
        },
        {
          id: 2,
          name: 'Legal Consultant',
          title: 'Associate Consultant & Litigation Specialist',
          initials: 'LC',
          iconPath: 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V21C11 21.6 11.4 22 12 22S13 21.6 13 21V11C14.1 11 15 10.1 15 9ZM6 18C6 16.9 6.9 16 8 16S10 16.9 10 18V22H6V18ZM14 18C14 16.9 14.9 16 16 16S18 16.9 18 18V22H14V18Z',
          description: 'Dedicated legal professional specializing in litigation support, legal research, and comprehensive documentation services. Expert in dispute resolution and client advocacy.',
          specializations: [
            'Litigation Support & Strategy',
            'Legal Research & Analysis',
            'Dispute Resolution & Mediation',
            'Legal Documentation & Drafting',
            'Client Relations & Advisory'
          ]
        },
        {
          id: 3,
          name: 'Corporate Advisor',
          title: 'Business Law Specialist & Startup Counsel',
          initials: 'CA',
          iconPath: 'M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V21C11 21.6 11.4 22 12 22S13 21.6 13 21V11C14.1 11 15 10.1 15 9ZM16 12C17.1 12 18 12.9 18 14S17.1 16 16 16S14 15.1 14 14S14.9 12 16 12ZM8 12C9.1 12 10 12.9 10 14S9.1 16 8 16S6 15.1 6 14S6.9 12 8 12Z',
          description: 'Expert in corporate governance and business law with specialized focus on startup ecosystem, SME advisory, and emerging business legal frameworks.',
          specializations: [
            'Corporate Governance & Compliance',
            'Startup Legal Advisory',
            'Business Formation & Structuring',
            'Investment & Funding Legal Support',
            'Due Diligence & Risk Assessment'
          ]
        }
      ],
      people: [
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
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 4,
          name: 'Kavya Reddy',
          position: 'Intellectual Property Specialist',
          description: 'Specialist in IP law, trademark registration, and patent litigation with a focus on technology sector.',
          isLeadership: false,
          skills: ['IP Law', 'Patent Litigation', 'Technology Law'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 5,
          name: 'Vikram Singh',
          position: 'Litigation Manager',
          description: 'Experienced litigator with a strong track record in commercial disputes and arbitration proceedings.',
          isLeadership: false,
          skills: ['Litigation', 'Arbitration', 'Commercial Disputes'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 6,
          name: 'Neha Gupta',
          position: 'Employment Law Advisor',
          description: 'Specialized in employment law, workplace policies, and HR compliance across various industries.',
          isLeadership: false,
          skills: ['Employment Law', 'HR Compliance', 'Policy Development'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 7,
          name: 'Rohit Kumar',
          position: 'Tax Law Consultant',
          description: 'Expert in direct and indirect taxation with deep knowledge of GST, income tax, and international tax law.',
          isLeadership: false,
          skills: ['Tax Law', 'GST', 'International Taxation'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 8,
          name: 'Sneha Jain',
          position: 'Banking & Finance Associate',
          description: 'Specialist in banking law, financial regulations, and capital market transactions.',
          isLeadership: false,
          skills: ['Banking Law', 'Financial Regulations', 'Capital Markets'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 9,
          name: 'Aditya Verma',
          position: 'Real Estate Legal Advisor',
          description: 'Experienced in real estate transactions, property law, and regulatory approvals for development projects.',
          isLeadership: false,
          skills: ['Real Estate Law', 'Property Transactions', 'Regulatory Approvals'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 10,
          name: 'Divya Krishnan',
          position: 'Environmental Law Specialist',
          description: 'Expert in environmental compliance, sustainability law, and regulatory frameworks for green initiatives.',
          isLeadership: false,
          skills: ['Environmental Law', 'Sustainability', 'Regulatory Compliance'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 11,
          name: 'Manish Agarwal',
          position: 'Data Privacy Officer',
          description: 'Specialist in data protection laws, privacy compliance, and cybersecurity legal frameworks.',
          isLeadership: false,
          skills: ['Data Privacy', 'GDPR Compliance', 'Cybersecurity Law'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 12,
          name: 'Pooja Nair',
          position: 'Family Law Counselor',
          description: 'Compassionate legal advisor specializing in family law, matrimonial disputes, and child custody matters.',
          isLeadership: false,
          skills: ['Family Law', 'Matrimonial Disputes', 'Child Custody'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 13,
          name: 'Karthik Raman',
          position: 'Immigration Law Expert',
          description: 'Experienced in immigration law, visa applications, and international mobility solutions for businesses.',
          isLeadership: false,
          skills: ['Immigration Law', 'Visa Processing', 'International Mobility'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
        },
        {
          id: 14,
          name: 'Riya Shah',
          position: 'Junior Associate',
          description: 'Rising legal professional with expertise in research, documentation, and client support across multiple practice areas.',
          isLeadership: false,
          skills: ['Legal Research', 'Documentation', 'Client Support'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'
        }
      ],
      officeGallery: [
        {
          url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&q=80',
          caption: 'Main Reception Area',
          description: 'The welcoming reception area at our Koramangala office, designed to provide a comfortable and professional atmosphere for our clients.'
        },
        {
          url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80',
          caption: 'Conference Room',
          description: 'Our modern conference facility equipped with state-of-the-art technology for client meetings and team collaborations.'
        },
        {
          url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
          caption: 'Open Workspace',
          description: 'Our collaborative open workspace designed to foster teamwork and communication among our legal professionals.'
        },
        {
          url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=600&fit=crop&q=80',
          caption: 'Private Client Consultation Room',
          description: 'Dedicated consultation rooms ensuring privacy and comfort for sensitive client discussions.'
        },
        {
          url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop&q=80',
          caption: 'Research & Library Area',
          description: 'Our extensive legal library and research center with comprehensive resources for case preparation.'
        },
        {
          url: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&h=600&fit=crop&q=80',
          caption: 'Executive Office',
          description: 'The executive office space where our leadership team works on strategic initiatives.'
        }
      ],
      eventsGallery: [
        {
          url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&q=80',
          caption: 'Annual Award Ceremony 2025',
          description: 'Celebrating excellence at our annual awards night recognizing outstanding contributions from team members.'
        },
        {
          url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
          caption: 'Team Building Workshop',
          description: 'Our legal professionals participating in collaborative problem-solving exercises during our quarterly team building event.'
        },
        {
          url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop&q=80',
          caption: 'Company Anniversary Celebration',
          description: 'The Shoolin team celebrating our 10th anniversary with a special gala dinner event.'
        },
        {
          url: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop&q=80',
          caption: 'Legal Knowledge Seminar',
          description: 'Our monthly knowledge sharing seminar series featuring expert speakers and interactive discussions.'
        },
        {
          url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&q=80',
          caption: 'Diwali Celebrations',
          description: 'The office decorated for Diwali celebrations with the team enjoying festive activities.'
        },
        {
          url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&q=80',
          caption: 'New Year Party',
          description: 'Ringing in the New Year with colleagues at our annual company celebration.'
        }
      ],
      teamOutingsGallery: [
        {
          url: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&h=600&fit=crop&q=80',
          caption: 'Team Retreat in Goa',
          description: 'Our annual team retreat combining strategic planning with relaxation at the beautiful beaches of Goa.'
        },
        {
          url: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=800&h=600&fit=crop&q=80',
          caption: 'Trekking Adventure',
          description: 'The Shoolin team exploring nature during our adventure trek in the Western Ghats.'
        },
        {
          url: 'https://images.unsplash.com/photo-1526307616774-60d0098f7642?w=800&h=600&fit=crop&q=80',
          caption: 'Charity Marathon',
          description: 'Team members participating in the annual charity run supporting education for underprivileged children.'
        },
        {
          url: 'https://images.unsplash.com/photo-1517457210348-703d41c330c4?w=800&h=600&fit=crop&q=80',
          caption: 'Corporate Cricket Match',
          description: 'Our team during the inter-corporate cricket tournament where we secured second place.'
        },
        {
          url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&q=80',
          caption: 'Cultural Day Outing',
          description: 'Exploring local heritage sites as part of our cultural appreciation initiative.'
        },
        {
          url: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&h=600&fit=crop&q=80',
          caption: 'Leadership Offsite',
          description: 'Our leadership team during the annual strategic planning retreat in Coorg.'
        }
      ],
      values: [
        {
          icon: '🎯',
          iconPath: 'M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12S9.79 8 12 8 16 9.79 16 12 14.21 16 12 16ZM12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10Z',
          title: 'Excellence',
          description: 'Committed to delivering the highest quality legal services with meticulous attention to detail and unwavering dedication to client success.'
        },
        {
          icon: '🤝',
          iconPath: 'M11 4C13.21 4 15 5.79 15 8S13.21 12 11 12 7 10.21 7 8 8.79 4 11 4ZM11 14C15.42 14 19 15.79 19 18V20H3V18C3 15.79 6.58 14 11 14ZM20.5 14.5V16H19V14.5H20.5ZM18.5 9.5C18.5 10.6 17.6 11.5 16.5 11.5S14.5 10.6 14.5 9.5 15.4 7.5 16.5 7.5 18.5 8.4 18.5 9.5ZM24 16V18C24 18.6 23.6 19 23 19H21V16H24Z',
          title: 'Integrity',
          description: 'Maintaining the highest ethical standards and professional accountability in all interactions while building lasting relationships based on trust.'
        },
        {
          icon: '📚',
          iconPath: 'M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 8H7V10H17V8ZM17 12H7V14H17V12ZM14 16H7V18H14V16Z',
          title: 'Knowledge',
          description: 'Continuous learning and staying updated with latest legal developments, regulations, and industry best practices to serve clients better.'
        },
        {
          icon: '⚡',
          iconPath: 'M7 2V13H10V22L17 10H13L17 2H7Z',
          title: 'Innovation',
          description: 'Embracing modern legal methodologies and technology while respecting traditional legal principles and established practices.'
        }
      ]
    }
  },
  mounted() {
    this.initializeAnimations()
    this.setupScrollObserver()
    
    // Ensure initial gallery tab items are visible
    this.$nextTick(() => {
      // Set initial gallery items to visible state
      if (this.$refs.officeGallery) {
        const initialItems = this.$refs.officeGallery.querySelectorAll('.gallery-item');
        initialItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate-in');
          }, 1000 + (index * 100)); // Delay initial animation to let page load
        });
      }
    });
  },
  methods: {
    initializeAnimations() {
      // Initial fade-in for hero content
      const heroContent = this.$refs.heroContent
      if (heroContent) {
        setTimeout(() => {
          heroContent.classList.add('animate-in')
        }, 300)
      }
    },
    setupScrollObserver() {
      const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            
            // Animate team members with stagger
            if (entry.target.classList.contains('story-chapter')) {
              const teamMembers = entry.target.querySelectorAll('.team-member')
              teamMembers.forEach((member, index) => {
                setTimeout(() => {
                  member.classList.add('animate-in')
                }, index * 200)
              })
              
              // Animate people cards with stagger
              const peopleCards = entry.target.querySelectorAll('.person-card')
              peopleCards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('animate-in')
                }, index * 150)
              })
              
              // Animate value items with stagger
              const valueItems = entry.target.querySelectorAll('.value-item')
              valueItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-in')
                }, index * 150)
              })
              
              // Animate gallery items with stagger
              const galleryItems = entry.target.querySelectorAll('.gallery-item')
              galleryItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-in')
                }, index * 100)
              })
            }
          }
        })
      }, observerOptions)

      // Observe all chapters
      const chapters = this.$refs
      Object.keys(chapters).forEach(key => {
        if (key.includes('Chapter')) {
          observer.observe(chapters[key])
        }
      })
      
      // Ensure gallery section is observed
      if (this.$refs.galleryChapter) {
        observer.observe(this.$refs.galleryChapter)
      }
    },
    handleImageError(event) {
      console.log('Image failed to load:', event.target.src)
      // Hide the image and show the SVG fallback
      event.target.style.display = 'none'
    },
    bookConsultation(person) {
      // Navigate to consultation booking page
      this.$router.push(`/consultation/${person.id}`)
    },
    knowMore(person) {
      // Navigate to person profile page
      this.$router.push(`/profile/${person.id}`)
    },
    setGalleryTab(tab) {
      this.activeGalleryTab = tab;
      // Allow the DOM to update before animating new items
      this.$nextTick(() => {
        // Get the appropriate gallery ref based on active tab
        let galleryRef = null;
        if (tab === 'office') galleryRef = this.$refs.officeGallery;
        if (tab === 'events') galleryRef = this.$refs.eventsGallery;
        if (tab === 'team') galleryRef = this.$refs.teamGallery;
        
        if (galleryRef) {
          const galleryItems = galleryRef.querySelectorAll('.gallery-item');
          galleryItems.forEach((item, index) => {
            // Reset animation state
            item.classList.remove('animate-in');
            // Re-apply animation with staggered delay
            setTimeout(() => {
              item.classList.add('animate-in');
            }, 50 + (index * 100)); // Start animations a bit quicker
          });
        }
      });
    },
    openLightbox(images, index) {
      this.lightbox.images = images;
      this.lightbox.currentIndex = index;
      this.lightbox.currentImage = images[index];
      this.lightbox.visible = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightbox.visible = false;
      document.body.style.overflow = '';
    },
    nextImage() {
      const newIndex = (this.lightbox.currentIndex + 1) % this.lightbox.images.length;
      this.lightbox.currentIndex = newIndex;
      this.lightbox.currentImage = this.lightbox.images[newIndex];
    },
    prevImage() {
      const newIndex = (this.lightbox.currentIndex - 1 + this.lightbox.images.length) % this.lightbox.images.length;
      this.lightbox.currentIndex = newIndex;
      this.lightbox.currentImage = this.lightbox.images[newIndex];
    }
  }
}
</script>

<style scoped>
/* Reset and Base Styles */
.team-page {
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  color: #000000;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(220, 220, 220, 0.3) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(220, 220, 220, 0.3) 0%, transparent 30%);
  overflow: hidden;
}

/* Animated Background */
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
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  transform: rotate(45deg);
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 20%;
  right: 15%;
  animation-delay: 1s;
  border-radius: 50%;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
  transform: rotate(30deg);
}

.shape-4 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 30%;
  animation-delay: 3s;
  border-radius: 50%;
}

.shape-5 {
  width: 120px;
  height: 120px;
  bottom: 10%;
  right: 10%;
  animation-delay: 4s;
  transform: rotate(60deg);
}

.shape-6 {
  width: 50px;
  height: 50px;
  top: 30%;
  left: 30%;
  animation-delay: 5s;
  border-radius: 20px;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
}

.legal-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.2;
  animation: particle-float 8s ease-in-out infinite;
}

.particle-1 {
  top: 15%;
  left: 20%;
  animation-delay: 0s;
}

.particle-2 {
  top: 25%;
  right: 20%;
  animation-delay: 2s;
}

.particle-3 {
  bottom: 30%;
  left: 15%;
  animation-delay: 4s;
}

.particle-4 {
  bottom: 15%;
  right: 25%;
  animation-delay: 6s;
}

.particle-5 {
  top: 50%;
  left: 10%;
  animation-delay: 1s;
}

.particle-6 {
  top: 70%;
  right: 10%;
  animation-delay: 5s;
}

/* Hero Content */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
}

.hero-content {
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

.hero-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.chapter-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 0 2rem;
}

.chapter-number::before,
.chapter-number::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30px;
  height: 1px;
  background-color: #000;
}

.chapter-number::before {
  left: 0;
}

.chapter-number::after {
  right: 0;
}

.story-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title-line {
  position: relative;
  display: block;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: text-shimmer 3s ease-in-out infinite;
}

.story-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  color: #666;
  letter-spacing: 1px;
  margin-top: 1rem;
}

/* 3D Team Icon */
.hero-visual-center {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-icon-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  animation: icon-float 4s ease-in-out infinite;
}

.team-icon svg {
  width: 40px;
  height: 40px;
  color: white;
}

.icon-rings {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.ring {
  position: absolute;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring-pulse 3s ease-in-out infinite;
}

.ring-1 {
  width: 100px;
  height: 100px;
  animation-delay: 0s;
}

.ring-2 {
  width: 130px;
  height: 130px;
  animation-delay: 1s;
}

.ring-3 {
  width: 160px;
  height: 160px;
  animation-delay: 2s;
}

/* Team Content Section */
.team-content {
  padding: 6rem 0;
  background-color: #ffffff;
}

.story-chapter {
  margin-bottom: 6rem;
  opacity: 1;
  transform: translateY(0);
  transition: all 1s ease-out;
}

.story-chapter.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.chapter-header {
  text-align: center;
  margin-bottom: 4rem;
}

.chapter-header .chapter-number {
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.chapter-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chapter-subtitle {
  font-size: 1.1rem;
  color: #666;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Team Grid */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
}

.team-member {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.team-member.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.team-member-inner {
  position: relative;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  text-align: center;
  transition: all 0.4s ease;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.team-member-inner:hover {
  transform: translateY(-10px);
  border-color: #000000;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.member-avatar {
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-placeholder {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  z-index: 2;
  animation: avatar-float 3s ease-in-out infinite;
}

.avatar-placeholder svg {
  color: white;
}

.avatar-bg {
  position: absolute;
  width: 110px;
  height: 110px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.4s ease;
}

.team-member-inner:hover .avatar-bg {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  transform: translate(-50%, -50%) scale(1.1);
}

.member-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
}

.member-title {
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 1.5rem;
}

.member-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.member-specializations {
  text-align: left;
}

.specialization-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.specialization-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  color: #555;
  transition: all 0.3s ease;
  line-height: 1.4;
}

.specialization-list li:hover {
  color: #000;
  transform: translateX(5px);
}

.spec-bullet {
  color: #000;
  font-weight: 600;
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05));
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: none;
}

.team-member-inner:hover .member-overlay {
  opacity: 1;
}

/* Values Section */
.values-section {
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  border-radius: 20px;
  padding: 4rem 3rem;
  border: 2px solid #f0f0f0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-item {
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(20px);
}

.value-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.value-item:hover {
  transform: translateY(-8px);
  border-color: #000000;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.value-icon-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.value-icon {
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  animation: icon-bob 3s ease-in-out infinite;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}

.value-icon svg {
  width: 36px;
  height: 36px;
  color: inherit;
  transition: all 0.3s ease;
}

.value-item:hover .value-icon svg {
  transform: scale(1.1);
  color: #333333;
}

.value-icon-bg {
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: all 0.4s ease;
}

.value-item:hover .value-icon-bg {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
  transform: translate(-50%, -50%) scale(1.2);
}

.value-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
}

.value-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
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

@keyframes particle-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px) translateX(10px);
    opacity: 0.4;
  }
}

@keyframes text-shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes icon-float {
  0%, 100% {
    transform: translateY(0px) rotateY(0deg);
  }
  50% {
    transform: translateY(-10px) rotateY(5deg);
  }
}

@keyframes ring-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.6;
  }
}

@keyframes icon-bob {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes avatar-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Responsive Design */
/* Tablet */
@media (max-width: 1024px) {
  .hero-section {
    height: 90vh;
  }
  
  .team-grid {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 80vh;
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .team-member-inner {
    padding: 2.5rem 2rem;
  }
  
  .team-content {
    padding: 4rem 0;
  }
  
  .story-chapter {
    margin-bottom: 4rem;
  }
  
  .values-section {
    padding: 3rem 2rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .team-icon-container {
    width: 100px;
    height: 100px;
  }
  
  .team-icon {
    width: 60px;
    height: 60px;
  }
  
  .team-icon svg {
    width: 30px;
    height: 30px;
  }
  
  .ring-1 { width: 80px; height: 80px; }
  .ring-2 { width: 110px; height: 110px; }
  .ring-3 { width: 140px; height: 140px; }
}

@media (max-width: 480px) {
  .hero-main {
    gap: 1.5rem;
  }
  
  .chapter-number {
    font-size: 0.8rem;
    padding: 0 1.5rem;
  }
  
  .chapter-number::before,
  .chapter-number::after {
    width: 20px;
  }
  
  .story-subtitle {
    font-size: 1rem;
  }
  
  .team-member-inner {
    padding: 2rem 1.5rem;
  }
  
  .values-section {
    padding: 2rem 1.5rem;
  }
  
  .value-item {
    padding: 2rem 1.5rem;
  }
  
  .avatar-placeholder {
    width: 70px;
    height: 70px;
    font-size: 1.2rem;
  }
  
  .avatar-bg {
    width: 90px;
    height: 90px;
  }
}

/* Hidden Section */
.hidden-section {
  display: none !important;
}

/* People Section Styles */
.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.person-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  opacity: 1;
  transform: translateY(0);
}

.person-card.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.person-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #000, #333, #000);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.person-card:hover::before {
  transform: scaleX(1);
}

.person-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.1);
}

.person-card-inner {
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}

.person-avatar {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.4s ease;
  border: 3px solid rgba(0, 0, 0, 0.1);
  animation: avatar-float 3s ease-in-out infinite;
}

.person-card:hover .avatar-circle {
  background: linear-gradient(135deg, #000, #333);
  color: white;
  border-color: #000;
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.avatar-circle svg {
  transition: all 0.4s ease;
}

.person-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  transition: all 0.4s ease;
}

.person-card:hover .person-photo {
  transform: scale(1.1);
  filter: grayscale(0%) contrast(1.1);
}

.person-badge {
  background: linear-gradient(135deg, #000, #333);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: absolute;
  top: -10px;
  right: -10px;
  animation: badge-pulse 2s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0);
  }
}

.person-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.person-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;
  margin: 0;
  background: linear-gradient(135deg, #000, #333, #000);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: text-shimmer 3s ease-in-out infinite;
}

.person-position {
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.person-description {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

.person-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.skill-tag {
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
}

.person-card:hover .skill-tag {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-color: #000;
}

/* Action Buttons */
.person-actions {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border: 2px solid;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  outline: none;
}

.consultation-btn {
  border-color: #000;
  color: #000;
}

.consultation-btn:hover {
  background: #000;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.know-more-btn {
  border-color: rgba(0, 0, 0, 0.3);
  color: #666;
}

.know-more-btn:hover {
  border-color: #000;
  color: #000;
  background: rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.action-btn svg {
  transition: all 0.3s ease;
}

.consultation-btn:hover svg {
  transform: scale(1.1);
}

.know-more-btn:hover svg {
  transform: rotate(90deg);
}

/* People Section Responsive */
@media (max-width: 768px) {
  .people-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .person-card-inner {
    padding: 2rem 1.5rem;
  }
  
  .avatar-circle {
    width: 70px;
    height: 70px;
  }
  
  .avatar-circle svg {
    width: 28px;
    height: 28px;
  }
  
  .person-name {
    font-size: 1.1rem;
  }
  
  .person-position {
    font-size: 0.8rem;
  }
  
  .person-description {
    font-size: 0.85rem;
  }
  
  .person-actions {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .action-btn {
    padding: 0.6rem 0.8rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .person-card-inner {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }
  
  .avatar-circle {
    width: 60px;
    height: 60px;
  }
  
  .avatar-circle svg {
    width: 24px;
    height: 24px;
  }
  
  .person-skills {
    gap: 0.3rem;
  }
  
  .skill-tag {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
  
  .person-actions {
    gap: 0.4rem;
    margin-top: 0.8rem;
  }
  
  .action-btn {
    padding: 0.5rem 0.6rem;
    font-size: 0.7rem;
    gap: 0.3rem;
  }
  
  .action-btn svg {
    width: 14px;
    height: 14px;
  }
}

/* Gallery Section Styles */
.gallery-section {
  margin-top: 5rem;
}

.gallery-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  background: rgba(0, 0, 0, 0.03);
  transform: translateY(-2px);
}

.tab-btn.active {
  background: #000;
  color: #fff;
  border-color: #000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tab-btn svg {
  transition: all 0.3s ease;
}

.tab-btn.active svg {
  fill: #fff;
}

.gallery-content {
  margin: 0 auto 3rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 1200px;
}

.gallery-item {
  height: 280px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.gallery-item.animate-in,
.gallery-item.initial-visible {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.gallery-image-container {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.gallery-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  padding: 1.5rem;
  color: #fff;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.gallery-image-container:hover .gallery-overlay {
  opacity: 1;
}

.gallery-image-container:hover img {
  transform: scale(1.05);
}

.gallery-caption {
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
}

.gallery-icon {
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-icon svg {
  width: 18px;
  height: 18px;
  fill: #000;
}

/* Lightbox Modal */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-container {
  max-width: 90%;
  max-height: 90%;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.lightbox-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.lightbox-title {
  margin: 0;
  font-size: 1.2rem;
  color: #000;
}

.lightbox-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.lightbox-content {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-nav.prev {
  left: 15px;
}

.lightbox-nav.next {
  right: 15px;
}

.lightbox-caption {
  padding: 1rem 1.5rem;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.lightbox-caption p {
  margin: 0;
  font-size: 0.9rem;
  color: #333;
}

/* Responsive Gallery */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-tabs {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tab-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .gallery-item {
    height: 240px;
  }
  
  .lightbox-container {
    max-width: 95%;
  }
}
</style>
