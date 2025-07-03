<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <div v-if="submitted" class="success-message">
      Your message has been sent successfully!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      // Here you would typically handle form submission, e.g., sending data to an API
      this.submitted = true;
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

.contact-form h2 {
  text-align: center;
}

.contact-form div {
  margin-bottom: 15px;
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 4px;
}

.contact-form button {
  background-color: #000;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.contact-form .success-message {
  color: green;
  text-align: center;
  margin-top: 15px;
}
</style>