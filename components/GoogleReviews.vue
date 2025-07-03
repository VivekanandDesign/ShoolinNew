<template>
  <div class="google-reviews">
    <div class="reviews-header">
      <h2>Client Reviews</h2>
      <p>See what our clients say about Shoolin Consultancy</p>
    </div>
    
    <div class="reviews-content">
      <div class="review-stats">
        <div class="rating-display">
          <div class="stars">
            <span v-for="star in 5" :key="star" class="star">★</span>
          </div>
          <div class="rating-text">
            <span class="rating-number">5.0</span>
            <span class="review-count">Google Reviews</span>
          </div>
        </div>
      </div>
      
      <div class="sample-reviews">
        <div class="review-card" v-for="review in sampleReviews" :key="review.id">
          <div class="review-header">
            <div class="reviewer-info">
              <div class="reviewer-avatar">{{ review.initials }}</div>
              <div class="reviewer-details">
                <h4>{{ review.name }}</h4>
                <div class="review-stars">
                  <span v-for="star in review.rating" :key="star" class="star">★</span>
                </div>
              </div>
            </div>
            <div class="review-date">{{ review.date }}</div>
          </div>
          <div class="review-content">
            <p>{{ review.text }}</p>
          </div>
        </div>
      </div>
      
      <div class="google-link-section">
        <p class="review-disclaimer">
          These are representative examples. Actual client testimonials may vary.
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
  </div>
</template>

<script>
export default {
  name: 'GoogleReviews',
  data() {
    return {
      googleReviewsUrl: 'https://g.co/kgs/nWDZJsz',
      sampleReviews: [
        {
          id: 1,
          name: 'Professional Client',
          initials: 'PC',
          rating: 5,
          date: '2 months ago',
          text: 'Excellent legal consultation services. Professional approach and thorough understanding of regulatory requirements. Highly recommended for business legal matters.'
        },
        {
          id: 2,
          name: 'Business Owner',
          initials: 'BO',
          rating: 5,
          date: '3 months ago',
          text: 'Outstanding support for corporate compliance matters. The team demonstrated deep expertise and provided clear, actionable guidance throughout our legal processes.'
        },
        {
          id: 3,
          name: 'Corporate Client',
          initials: 'CC',
          rating: 5,
          date: '4 months ago',
          text: 'Professional and reliable legal services. Excellent communication and attention to detail. Their expertise in regulatory compliance is commendable.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.google-reviews {
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
  padding: 2rem;
  border: 2px solid #000000;
  border-radius: 8px;
}

.reviews-header {
  text-align: center;
  margin-bottom: 2rem;
}

.reviews-header h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.5rem;
}

.reviews-header p {
  font-size: 1rem;
  color: #666666;
}

.review-stats {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border: 1px solid #000000;
  border-radius: 8px;
}

.rating-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.stars {
  display: flex;
  gap: 0.2rem;
}

.star {
  color: #000000;
  font-size: 1.5rem;
}

.rating-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.rating-number {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
}

.review-count {
  font-size: 0.9rem;
  color: #666666;
}

.sample-reviews {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.review-card {
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 1.5rem;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.reviewer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.reviewer-avatar {
  width: 40px;
  height: 40px;
  background: #000000;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.reviewer-details h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 0.3rem 0;
}

.review-stars {
  display: flex;
  gap: 0.1rem;
}

.review-stars .star {
  color: #000000;
  font-size: 0.9rem;
}

.review-date {
  font-size: 0.8rem;
  color: #666666;
}

.review-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333333;
  margin: 0;
}

.google-link-section {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 2px solid #000000;
}

.review-disclaimer {
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.google-reviews-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: #000000;
  color: #ffffff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.google-reviews-button:hover {
  background: #333333;
  transform: translateY(-2px);
}

.google-icon {
  background: #ffffff;
  color: #000000;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .google-reviews {
    padding: 1.5rem;
  }
  
  .rating-display {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .review-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .reviewer-info {
    width: 100%;
  }
  
  .google-reviews-button {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .google-reviews {
    padding: 1rem;
  }
  
  .review-card {
    padding: 1rem;
  }
  
  .reviewer-info {
    gap: 0.8rem;
  }
  
  .reviewer-avatar {
    width: 35px;
    height: 35px;
    font-size: 0.8rem;
  }
}
</style>