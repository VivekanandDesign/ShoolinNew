<template>
  <div class="appointment-form">
    <h2>Book an Appointment</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" v-model="formData.date" required />
      </div>
      <div>
        <label for="time">Time:</label>
        <input type="time" v-model="formData.time" required />
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="submissionStatus" class="status-message">
      {{ submissionStatus }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        date: '',
        time: ''
      },
      submissionStatus: ''
    };
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to your backend
      // For demonstration, we'll just log it and show a success message
      console.log('Appointment Data:', this.formData);
      this.submissionStatus = 'Appointment booked successfully!';
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        date: '',
        time: ''
      };
    }
  }
};
</script>

<style scoped>
.appointment-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin: 10px 0 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #000;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

.status-message {
  margin-top: 10px;
  text-align: center;
  color: green;
}
</style>