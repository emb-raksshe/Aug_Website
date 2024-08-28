<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="flex flex-col space-y-2">
        <label for="name" class="font-semibold text-gray-700">Name:</label>
        <input v-model="form.name" type="text" id="name" class="p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required>
      </div>
      <div class="flex flex-col space-y-2">
        <label for="email" class="font-semibold text-gray-700">Email:</label>
        <input v-model="form.email" type="email" id="email" class="p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500" required>
      </div>
      <div class="flex flex-col space-y-2">
        <label for="message" class="font-semibold text-gray-700">Message:</label>
        <textarea v-model="form.message" id="message" class="p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500" rows="4" required></textarea>
      </div>
      <button type="submit" class="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition">Send</button>
      <p v-if="status.message" :class="['text-center mt-4', status.type === 'success' ? 'text-green-500' : 'text-red-500']">{{ status.message }}</p>
    </form>
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
      status: {
        message: '',
        type: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Save form data to localStorage
      localStorage.setItem('contactFormData', JSON.stringify(this.form));

      // Provide feedback to the user
      this.status.message = 'Your message has been saved locally!';
      this.status.type = 'success';

      // Clear the form
      this.form = { name: '', email: '', message: '' };
    }
  }
}
</script>