<template>
  <div class="google-reviews">
    <div class="reviews-header">
      <div class="rating-summary">
        <div class="stars-display">
          <span v-for="star in 5" :key="star" class="star">★</span>
          <span class="rating-number">5.0</span>
        </div>
        <p>Based on <span>{{ totalReviews }}</span> verified client reviews</p>
      </div>
    </div>
    
    <div class="reviews-grid">
      <div class="review-card" v-for="review in reviews" :key="review.id">
        <div class="quote-mark">"</div>
        <div class="review-content">
          <p>{{ review.text }}</p>
        </div>
        <div class="review-footer">
          <div class="reviewer-profile">
            <div class="reviewer-avatar" :style="{ backgroundImage: review.avatar ? `url(${review.avatar})` : 'none' }">
              <span v-if="!review.avatar">{{ review.initials }}</span>
            </div>
            <div class="reviewer-details">
              <h4>{{ review.name }}</h4>
              <span class="reviewer-position">{{ review.position }}</span>
              <div class="review-stars">
                <span v-for="star in review.rating" :key="star" class="star">★</span>
              </div>
            </div>
          </div>
          <div class="review-meta">
            <div class="review-date">{{ review.date }}</div>
            <div class="review-location" v-if="review.location">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              <span>{{ review.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="google-link-section">
      <p class="review-disclaimer">
        These are selected testimonials from our valued clients. Results may vary based on individual circumstances.
      </p>
      <a 
        :href="googleReviewsUrl" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="google-reviews-button"
      >
        <span class="google-icon">G</span>
        View All Reviews on Google
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleReviews',
  data() {
    return {
      googleReviewsUrl: 'https://g.co/kgs/nWDZJsz',
      totalReviews: 87,
      reviews: [
        {
          id: 1,
          name: 'Arjun Mehta',
          initials: 'AM',
          position: 'CEO, TechInnovate Solutions',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
          rating: 5,
          date: 'May 15, 2025',
          location: 'Bangalore',
          text: 'Shoolin Consultancy has been instrumental in guiding our tech startup through complex regulatory challenges. Their expertise in corporate governance and intellectual property protection allowed us to scale with confidence. I highly recommend their services to any growing business.'
        },
        {
          id: 2,
          name: 'Priya Sharma',
          initials: 'PS',
          position: 'Managing Director, Sharma Enterprises',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80',
          rating: 5,
          date: 'April 22, 2025',
          location: 'Indiranagar',
          text: 'The team at Shoolin Consultancy provided exceptional guidance during our company restructuring. Their attention to detail and thorough understanding of corporate law ensured a smooth transition. Their proactive approach to legal challenges has saved us both time and resources.'
        },
        {
          id: 3,
          name: 'Rajiv Kumar',
          initials: 'RK',
          position: 'Property Developer',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
          rating: 5,
          date: 'March 10, 2025',
          location: 'Whitefield',
          text: 'I\'ve worked with several legal consultants in the past, but Shoolin stands out for their expertise in real estate law. Their comprehensive due diligence process has helped us avoid numerous pitfalls in property acquisitions. Their team is responsive, professional and delivers results consistently.'
        },
        {
          id: 4,
          name: 'Ananya Desai',
          initials: 'AD',
          position: 'Startup Founder',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80',
          rating: 5,
          date: 'June 5, 2025',
          location: 'Koramangala',
          text: 'As a first-time entrepreneur, navigating the legal landscape was daunting until I found Shoolin Consultancy. Their startup advisory services provided clear guidance on business structure, compliance, and investor agreements. They have a remarkable ability to explain complex legal concepts in simple terms.'
        },
        {
          id: 5,
          name: 'Vikram Singhania',
          initials: 'VS',
          position: 'Director of Operations, Global Logistics Ltd.',
          avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&fit=crop&q=80',
          rating: 5,
          date: 'February 18, 2025',
          location: 'MG Road',
          text: 'Shoolin Consultancy has been our trusted legal partner for over three years. Their team\'s expertise in international trade regulations and dispute resolution has been invaluable as we expanded our operations across Asia. Their strategic legal advice has directly contributed to our business success.'
        },
        {
          id: 6,
          name: 'Neha Kapoor',
          initials: 'NK',
          position: 'Financial Advisor',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
          rating: 5,
          date: 'May 30, 2025',
          location: 'Electronic City',
          text: 'I\'ve recommended Shoolin Consultancy to several of my clients requiring estate planning and wealth management advice. The feedback has been consistently positive. Their team combines legal expertise with financial acumen to deliver holistic solutions tailored to individual needs.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.google-reviews {
  font-family: 'Poppins', sans-serif;
  padding: 1rem 0 0;
  background-color: transparent;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header styling with rating summary */
.reviews-header {
  margin: 1.5rem 0;
  text-align: center;
  position: relative;
}

.rating-summary {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 1.5rem 3rem;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
}

.rating-summary::before,
.rating-summary::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background: #000;
  top: -5px;
  transform: rotate(45deg);
  z-index: -1;
}

.rating-summary::before {
  left: 20px;
}

.rating-summary::after {
  right: 20px;
}

.stars-display {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.stars-display .star {
  color: #fff;
  font-size: 1.3rem;
  margin-right: 0.2rem;
}

.rating-number {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;
  letter-spacing: 0.5px;
}

.rating-summary p {
  font-size: 0.9rem;
  margin: 0;
  letter-spacing: 0.3px;
}

.rating-summary p span {
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 2px;
}

/* Grid layout for testimonials */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin: 2rem 0 3rem;
  padding: 1.5rem 0.5rem 1rem; /* Added bottom padding to ensure space between grid and footer */
  align-items: stretch;
  min-height: 520px; /* Ensuring minimum height for grid container */
}

/* Individual review card styling */
.review-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 0.5rem;
  max-height: 450px; /* Reduced max-height for better consistency */
}

.review-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  border-color: rgba(0, 0, 0, 0.3);
}

.quote-mark {
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 5rem;
  font-family: 'Georgia', serif;
  line-height: 0;
  color: rgba(0, 0, 0, 0.05);
  font-weight: bold;
}

.review-content {
  flex-grow: 1;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 140px; /* Reduced height to ensure consistent card sizing */
}

.review-content p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Reduced to 4 lines for better consistency */
  line-clamp: 4; /* Standard property */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Review footer with reviewer details */
.review-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.reviewer-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.reviewer-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #fff;
}

.reviewer-details {
  display: flex;
  flex-direction: column;
}

.reviewer-details h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #000;
  margin: 0 0 0.2rem 0;
}

.reviewer-position {
  font-size: 0.75rem; /* Slightly smaller font */
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.5rem;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px; /* Reduced max-width to prevent layout issues */
}

.review-stars {
  display: flex;
  gap: 0.1rem;
}

.review-stars .star {
  color: #000;
  font-size: 0.7rem;
}

.review-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.review-date {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
}

.review-location {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
}

.review-location svg {
  fill: rgba(0, 0, 0, 0.5);
}

/* Google reviews link section */
.google-link-section {
  text-align: center;
  padding: 2.5rem 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
}

.review-disclaimer {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5rem;
  font-style: italic;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.google-reviews-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: #000;
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.google-reviews-button:hover {
  background: #222;
  transform: translateY(-2px);
}

.google-icon {
  background: #fff;
  color: #000;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Responsive styles */
@media (max-width: 1100px) {
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 1.5rem 0 2.5rem;
  }
  
  .review-card {
    max-height: 480px; /* Adjusted for tablet view */
  }
  
  .review-content {
    max-height: 160px; /* Slightly more space for content on tablets */
  }
}

@media (max-width: 768px) {
  .reviews-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0.5rem 0.5rem 1rem;
    margin: 1rem 0 2.5rem;
  }
  
  .review-card {
    max-height: 480px; /* Fixed height on mobile for consistency */
    margin-bottom: 1rem;
  }
  
  .review-content {
    max-height: 160px; /* Controlled height on mobile */
  }
  
  .review-content p {
    -webkit-line-clamp: 5; /* Limited to 5 lines for mobile */
    line-clamp: 5;
    font-size: 0.9rem;
  }
  
  .rating-summary {
    padding: 1.2rem 2rem;
  }
  
  .rating-summary::before,
  .rating-summary::after {
    width: 30px;
    height: 30px;
  }
  
  .review-card {
    padding: 1.5rem;
  }
  
  .quote-mark {
    font-size: 4rem;
  }
  
  .reviewer-avatar {
    width: 45px;
    height: 45px;
  }
  
  .google-reviews-button {
    padding: 0.7rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .reviews-header {
    margin-bottom: 1.5rem;
  }
  
  .reviews-grid {
    gap: 1.5rem;
  }
  
  .review-card {
    padding: 1.2rem;
    max-height: 450px; /* Adjusted for smaller screens */
  }
  
  .review-footer {
    flex-direction: column;
    gap: 1rem;
  }
  
  .review-meta {
    align-items: flex-start;
    margin-left: 60px; /* Aligns with the reviewer profile indentation */
  }
  
  .review-content p {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .reviewer-avatar {
    width: 40px;
    height: 40px;
  }
}
</style>