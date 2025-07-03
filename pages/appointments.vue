<template>
  <div class="appointments">
    <h1>Book an Appointment</h1>
    <AppointmentForm />
  </div>
</template>

<script>
import AppointmentForm from '@/components/AppointmentForm.vue';

export default {
  components: {
    AppointmentForm
  }
}
</script>

<style scoped>
.appointments {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
</style>