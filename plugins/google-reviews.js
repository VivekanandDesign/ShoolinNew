// Google Reviews Plugin for Shoolin Consultancy
// This plugin provides sample reviews and Google Reviews integration

export const sampleReviews = [
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
];

// Function to get sample reviews (for compatibility)
export const fetchReviews = async () => {
  // Return sample reviews instead of making API calls
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleReviews);
    }, 100);
  });
};

// Google Reviews URL for Shoolin Consultancy
export const googleReviewsUrl = 'https://g.co/kgs/nWDZJsz';

// Plugin export for Nuxt
export default ({ app }, inject) => {
  // Inject the reviews functionality into the Vue app
  inject('googleReviews', {
    fetchReviews,
    sampleReviews,
    googleReviewsUrl
  });
};