<template>
  <div class="consultation-page">
    <!-- Back Navigation -->
    <div class="back-navigation">
      <div class="container">
        <button class="back-btn" @click="goBack">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
          </svg>
          Back to Team
        </button>
      </div>
    </div>

    <!-- Consultation Content -->
    <div class="consultation-content" v-if="person">
      <div class="container">
        <!-- Header Section -->
        <div class="consultation-header">
          <div class="lawyer-info">
            <div class="lawyer-photo">
              <img v-if="person.photo" :src="person.photo" :alt="person.name" />
              <div v-else class="default-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="60" height="60">
                  <path :d="person.iconPath"></path>
                </svg>
              </div>
            </div>
            
            <div class="lawyer-details">
              <h1 class="lawyer-name">{{ person.name }}</h1>
              <h2 class="lawyer-position">{{ person.position }}</h2>
              <div class="lawyer-specialties">
                <span class="specialty" v-for="skill in person.skills.slice(0, 3)" :key="skill">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Consultation Types -->
        <div class="consultation-types">
          <h3>Choose Consultation Type</h3>
          <div class="type-list">
            <div class="consultation-type" 
                 v-for="type in consultationTypes" 
                 :key="type.id"
                 :class="{ active: selectedConsultationType === type.id }"
                 @click="selectConsultationType(type.id)">
              <div class="type-icon">{{ type.icon }}</div>
              <div class="type-info">
                <div class="type-name">{{ type.name }}</div>
                <div class="type-details">
                  <span class="type-duration">{{ type.duration }} min</span>
                  <span class="type-price">₹{{ type.price.toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar Section -->
        <div class="calendar-section">
          <h3>Schedule Your Consultation</h3>
          
          <div class="calendar-container">
            <div class="calendar-navigation">
              <button class="nav-btn" @click="previousMonth" :disabled="isPreviousDisabled">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                </svg>
              </button>
              <span class="current-month">{{ currentMonthYear }}</span>
              <button class="nav-btn" @click="nextMonth">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
              </button>
            </div>

            <div class="calendar-grid">
              <div class="calendar-weekdays">
                <div class="weekday" v-for="day in weekdays" :key="day">{{ day }}</div>
              </div>
              <div class="calendar-days">
                <div 
                  class="calendar-day" 
                  v-for="date in calendarDates" 
                  :key="date.key"
                  :class="{ 
                    'other-month': !date.currentMonth,
                    'today': date.isToday,
                    'selected': selectedDate && isSameDate(selectedDate, date.date),
                    'disabled': !date.available,
                    'has-slots': date.availableSlots > 0
                  }"
                  @click="selectDate(date)">
                  <span class="date-number">{{ date.date.getDate() }}</span>
                  <div class="slots-indicator" v-if="date.availableSlots > 0">
                    {{ date.availableSlots }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Time Slots -->
          <div class="time-slots" v-if="selectedDate">
            <h4>Available Times for {{ formatSelectedDate }}</h4>
            <div class="slots-grid">
              <button 
                class="time-slot" 
                v-for="slot in availableTimeSlots" 
                :key="slot.time"
                :class="{ 
                  'selected': selectedTimeSlot === slot.time,
                  'booked': slot.booked 
                }"
                :disabled="slot.booked"
                @click="selectTimeSlot(slot)">
                {{ slot.time }}
              </button>
            </div>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="booking-form" v-if="selectedDate && selectedTimeSlot">
          <h3>Book Your Consultation</h3>
          
          <form @submit.prevent="submitBooking" class="form-content">
            <div class="form-group">
              <label for="clientName">Full Name *</label>
              <input 
                type="text" 
                id="clientName" 
                v-model="bookingForm.clientName" 
                required 
                placeholder="Enter your full name"
              >
            </div>
            <div class="form-group">
              <label for="clientEmail">Email Address *</label>
              <input 
                type="email" 
                id="clientEmail" 
                v-model="bookingForm.clientEmail" 
                required 
                placeholder="Enter your email"
              >
            </div>
            <div class="form-group">
              <label for="clientPhone">Phone Number *</label>
              <input 
                type="tel" 
                id="clientPhone" 
                v-model="bookingForm.clientPhone" 
                required 
                placeholder="+91 98765 43210"
              >
            </div>
            <div class="form-group">
              <label for="consultationReason">Purpose of Consultation *</label>
              <input 
                type="text" 
                id="consultationReason" 
                v-model="bookingForm.consultationReason" 
                required 
                placeholder="Brief description"
              >
            </div>

            <div class="form-actions">
              <button type="button" class="btn secondary" @click="clearForm">Clear</button>
              <button type="submit" class="btn primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Booking...' : 'Confirm Booking' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-else class="loading-state">
      <div class="container">
        <h2>Loading...</h2>
      </div>
    </div>

    <!-- Success Modal -->
    <div class="modal-overlay" v-if="showSuccessModal" @click="closeSuccessModal">
      <div class="success-modal" @click.stop>
        <div class="success-icon">✓</div>
        <h3>Booking Confirmed!</h3>
        <p>Your consultation has been successfully booked.</p>
        <div class="confirmation-details">
          <p><strong>Lawyer:</strong> {{ person.name }}</p>
          <p><strong>Date:</strong> {{ formatSelectedDate }}</p>
          <p><strong>Time:</strong> {{ selectedTimeSlot }}</p>
        </div>
        <button class="btn primary" @click="closeSuccessModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConsultationPage',
  data() {
    return {
      person: null,
      currentDate: new Date(),
      selectedDate: null,
      selectedTimeSlot: null,
      selectedConsultationType: 'standard',
      isSubmitting: false,
      showSuccessModal: false,
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      consultationTypes: [
        {
          id: 'quick',
          name: 'Quick Consultation',
          duration: 30,
          price: 2500,
          icon: '⚡'
        },
        {
          id: 'standard',
          name: 'Standard Consultation',
          duration: 60,
          price: 5000,
          icon: '💼'
        },
        {
          id: 'detailed',
          name: 'Detailed Consultation',
          duration: 90,
          price: 7500,
          icon: '📋'
        }
      ],
      bookingForm: {
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        consultationReason: ''
      },
      teamMembers: [
        {
          id: 1,
          name: 'Rajesh Sharma',
          position: 'Chief Executive Officer',
          skills: ['Strategic Planning', 'Leadership', 'Business Development'],
          iconPath: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
          availability: {
            workingDays: [1, 2, 3, 4, 5],
            timeSlots: ['09:00', '10:30', '14:00', '15:30'],
            unavailableDates: ['2025-07-10', '2025-07-15']
          }
        },
        {
          id: 2,
          name: 'Priya Mehta',
          position: 'Head of Operations',
          skills: ['Operations Management', 'Process Optimization', 'Team Leadership'],
          iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
          photo: 'https://randomuser.me/api/portraits/women/44.jpg',
          availability: {
            workingDays: [1, 2, 3, 4, 5],
            timeSlots: ['10:00', '11:30', '14:30', '16:00'],
            unavailableDates: ['2025-07-12', '2025-07-20']
          }
        }
      ],
      bookedSlots: [
        { date: '2025-07-08', time: '10:30', lawyerId: 1 },
        { date: '2025-07-09', time: '14:00', lawyerId: 1 },
        { date: '2025-07-08', time: '11:30', lawyerId: 2 }
      ]
    }
  },
  computed: {
    currentMonthYear() {
      return this.currentDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      })
    },
    isPreviousDisabled() {
      const today = new Date()
      const firstDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1)
      const firstDayOfDisplayMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)
      return firstDayOfDisplayMonth <= firstDayOfCurrentMonth
    },
    calendarDates() {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      const firstDay = new Date(year, month, 1)
      const startDate = new Date(firstDay)
      startDate.setDate(startDate.getDate() - firstDay.getDay())
      
      const dates = []
      const today = new Date()
      
      for (let i = 0; i < 42; i++) {
        const date = new Date(startDate)
        date.setDate(startDate.getDate() + i)
        
        const availableSlots = this.getAvailableSlots(date)
        const isCurrentMonth = date.getMonth() === month
        const isPast = date < today && !this.isSameDate(date, today)
        
        dates.push({
          key: date.toISOString(),
          date: date,
          currentMonth: isCurrentMonth,
          isToday: this.isSameDate(date, today),
          available: !isPast && isCurrentMonth && availableSlots.length > 0,
          availableSlots: availableSlots.length
        })
      }
      
      return dates
    },
    formatSelectedDate() {
      if (!this.selectedDate) return ''
      return this.selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    availableTimeSlots() {
      if (!this.selectedDate || !this.person) return []
      return this.getAvailableSlots(this.selectedDate)
    },
    selectedConsultationTypeDetails() {
      return this.consultationTypes.find(type => type.id === this.selectedConsultationType) || this.consultationTypes[1]
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
        this.$router.push('/team')
      }
    },
    goBack() {
      this.$router.push('/team')
    },
    previousMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1)
      this.selectedDate = null
      this.selectedTimeSlot = null
    },
    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1)
      this.selectedDate = null
      this.selectedTimeSlot = null
    },
    selectDate(dateObj) {
      if (!dateObj.available) return
      this.selectedDate = dateObj.date
      this.selectedTimeSlot = null
    },
    selectTimeSlot(slot) {
      if (slot.booked) return
      this.selectedTimeSlot = slot.time
    },
    selectConsultationType(typeId) {
      this.selectedConsultationType = typeId
    },
    isSameDate(date1, date2) {
      return date1.toDateString() === date2.toDateString()
    },
    formatDateString(date) {
      return date.toISOString().split('T')[0]
    },
    getAvailableSlots(date) {
      if (!this.person || !this.person.availability) return []
      
      const dayOfWeek = date.getDay()
      const dateStr = this.formatDateString(date)
      
      if (!this.person.availability.workingDays.includes(dayOfWeek)) return []
      if (this.person.availability.unavailableDates.includes(dateStr)) return []
      
      const slots = this.person.availability.timeSlots.map(time => {
        const isBooked = this.bookedSlots.some(booking => 
          booking.date === dateStr && 
          booking.time === time && 
          booking.lawyerId === this.person.id
        )
        
        return {
          time,
          booked: isBooked
        }
      })
      
      return slots
    },
    clearForm() {
      this.bookingForm = {
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        consultationReason: ''
      }
    },
    async submitBooking() {
      this.isSubmitting = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Add to booked slots
        this.bookedSlots.push({
          date: this.formatDateString(this.selectedDate),
          time: this.selectedTimeSlot,
          lawyerId: this.person.id
        })
        
        this.showSuccessModal = true
        this.clearForm()
        
      } catch (error) {
        console.error('Booking failed:', error)
        alert('Booking failed. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    },
    closeSuccessModal() {
      this.showSuccessModal = false
      this.selectedDate = null
      this.selectedTimeSlot = null
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.consultation-page {
  min-height: 100vh;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: #f9f9f9;
  color: #333;
  line-height: 1.5;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.2;
  color: #000;
}

/* Back Navigation */
.back-navigation {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 0;
  margin-bottom: 30px;
}

.back-btn {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  padding: 8px 0;
}

.back-btn svg {
  margin-right: 8px;
}

/* Header Section */
.consultation-header {
  margin-bottom: 30px;
}

.lawyer-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lawyer-photo img,
.default-avatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lawyer-name {
  font-size: 24px;
  margin: 0 0 5px;
}

.lawyer-position {
  font-size: 16px;
  margin: 0 0 10px;
  color: #666;
}

.lawyer-specialties {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.specialty {
  padding: 4px 10px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  color: #666;
}

/* Consultation Types */
.consultation-types {
  margin-bottom: 30px;
}

.type-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.consultation-type {
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 15px;
}

.consultation-type:hover {
  border-color: #999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.consultation-type.active {
  border-color: #000;
  background: #f2f2f2;
}

.type-icon {
  font-size: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  border-radius: 8px;
}

.type-name {
  font-weight: 500;
  margin-bottom: 5px;
}

.type-details {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 14px;
}

/* Calendar Section */
.calendar-section {
  margin-bottom: 30px;
}

.calendar-container {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.calendar-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.nav-btn:hover {
  background: #f2f2f2;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.current-month {
  font-size: 16px;
  font-weight: 500;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #f2f2f2;
}

.weekday {
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.calendar-day {
  position: relative;
  height: 60px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.calendar-day:nth-child(7n) {
  border-right: none;
}

.calendar-day.other-month {
  color: #ccc;
  background: #f9f9f9;
}

.calendar-day.today {
  background: #e6f7ff;
}

.calendar-day.selected {
  background: #000;
  color: #fff;
}

.calendar-day.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.calendar-day.has-slots:not(.disabled):not(.other-month) {
  background: #e6ffe6;
}

.date-number {
  font-size: 14px;
  font-weight: 500;
}

.slots-indicator {
  font-size: 11px;
  color: #4CAF50;
  margin-top: 4px;
}

.calendar-day.selected .slots-indicator {
  color: #fff;
}

/* Time Slots */
.time-slots {
  margin-top: 30px;
}

.time-slots h4 {
  margin-bottom: 15px;
}

.slots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
}

.time-slot {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.time-slot:hover:not(:disabled) {
  border-color: #999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.time-slot.selected {
  border-color: #000;
  background: #000;
  color: #fff;
}

.time-slot:disabled {
  background: #f9f9f9;
  color: #ccc;
  cursor: not-allowed;
}

/* Booking Form */
.booking-form {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e0e0e0;
}

.form-content {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus {
  border-color: #000;
  outline: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn.primary {
  background: #000;
  color: #fff;
  border: none;
}

.btn.primary:hover:not(:disabled) {
  background: #333;
}

.btn.secondary {
  background: #f2f2f2;
  color: #333;
  border: 1px solid #e0e0e0;
}

.btn.secondary:hover {
  background: #e0e0e0;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Loading State */
.loading-state {
  text-align: center;
  padding: 50px 0;
}

/* Success Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.success-modal {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.success-icon {
  width: 60px;
  height: 60px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  margin: 0 auto 20px;
}

.confirmation-details {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: left;
}

/* Responsive Design */
@media (max-width: 768px) {
  .lawyer-info {
    flex-direction: column;
    text-align: center;
  }
  
  .lawyer-specialties {
    justify-content: center;
  }
  
  .type-list {
    grid-template-columns: 1fr;
  }
  
  .calendar-day {
    height: 50px;
  }
}

@media (max-width: 480px) {
  .slots-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .calendar-weekdays,
  .calendar-days {
    font-size: 12px;
  }
}
</style>
