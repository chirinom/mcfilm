<template>
  <div>
    <h2>Request Form</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="size">Size:</label>
        <select id="size" v-model="formData.size" @change="onSizeChange" required>
          <option value="small">Small (40cm x 60cm)</option>
          <option value="medium">Medium (60cm x 80cm)</option>
          <option value="large">Large (80cm x 110cm)</option>
          <option value="custom">Custom</option>
        </select>
        <div v-if="formData.size === 'custom'">
          <label for="customWidth">Width (cm):</label>
          <input type="number" id="customWidth" v-model="formData.customWidth" required />
          <label for="customHeight">Height (cm):</label>
          <input type="number" id="customHeight" v-model="formData.customHeight" required />
        </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>
      <button type="submit">Send Request</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        size: 'small',
        customWidth: '',
        customHeight: '',
        email: '',
        phone: '',
      },
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData)
    },
    onSizeChange() {
      if (this.formData.size !== 'custom') {
        this.formData.customWidth = ''
        this.formData.customHeight = ''
      }
    },
  },
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 5px;
}
</style>
