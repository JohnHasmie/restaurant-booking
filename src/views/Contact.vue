<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div class="container-custom text-center text-white">
        <h1 class="text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Get in touch with us for reservations, special events, or any questions you may have
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="text-3xl font-serif font-bold text-secondary-900 mb-6">
              Send Us a Message
            </h2>
            
            <form @submit.prevent="submitContactForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-secondary-700 mb-2">
                    First Name *
                  </label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-secondary-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-700 mb-2">
                  Phone Number
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-700 mb-2">
                  Subject *
                </label>
                <select
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="private-event">Private Event</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Address -->
            <div class="bg-secondary-50 rounded-xl p-6">
              <h3 class="text-xl font-serif font-semibold text-secondary-900 mb-4">
                Visit Us
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p class="font-medium text-secondary-900">La Cuisine Restaurant</p>
                    <p class="text-secondary-600">123 Gourmet Street</p>
                    <p class="text-secondary-600">Culinary District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Details -->
            <div class="bg-secondary-50 rounded-xl p-6">
              <h3 class="text-xl font-serif font-semibold text-secondary-900 mb-4">
                Get in Touch
              </h3>
              <div class="space-y-4">
                <div class="flex items-center text-secondary-700">
                  <svg class="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div class="flex items-center text-secondary-700">
                  <svg class="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>info@lacuisine.com</span>
                </div>
                <div class="flex items-center text-secondary-700">
                  <svg class="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Mon-Sun: 5:00 PM - 11:00 PM</span>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="bg-secondary-50 rounded-xl p-6">
              <h3 class="text-xl font-serif font-semibold text-secondary-900 mb-4">
                Follow Us
              </h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="bg-secondary-50 rounded-xl p-6">
              <h3 class="text-xl font-serif font-semibold text-secondary-900 mb-4">
                Find Us
              </h3>
              <div class="bg-secondary-200 rounded-lg h-64 flex items-center justify-center">
                <div class="text-center text-secondary-600">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"/>
                  </svg>
                  <p class="text-lg font-medium">Interactive Map</p>
                  <p class="text-sm">123 Gourmet Street, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-secondary-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-secondary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            Find answers to common questions about dining at La Cuisine
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-lg"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center text-left"
            >
              <h3 class="text-lg font-serif font-semibold text-secondary-900">
                {{ faq.question }}
              </h3>
              <svg
                :class="[
                  'w-6 h-6 text-primary-600 transition-transform duration-200',
                  openFaqs.includes(index) ? 'rotate-180' : ''
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div
              v-show="openFaqs.includes(index)"
              class="mt-4 text-secondary-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const isSubmitting = ref(false)
    const openFaqs = ref([])
    
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    const faqs = [
      {
        question: 'Do you accept walk-ins?',
        answer: 'While we do accept walk-ins when space is available, we highly recommend making a reservation to ensure you have a table, especially during peak hours and weekends.'
      },
      {
        question: 'What is your dress code?',
        answer: 'We maintain a smart casual dress code. We ask guests to avoid wearing shorts, flip-flops, or overly casual attire to maintain the elegant atmosphere of our restaurant.'
      },
      {
        question: 'Do you accommodate dietary restrictions?',
        answer: 'Absolutely! We\'re happy to accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and other special dietary needs. Please let us know when making your reservation.'
      },
      {
        question: 'Can I host a private event at La Cuisine?',
        answer: 'Yes! We offer private dining options for special occasions, corporate events, and celebrations. Our private dining room can accommodate up to 20 guests. Please contact us for more information.'
      },
      {
        question: 'Do you offer gift certificates?',
        answer: 'Yes, we offer gift certificates in various denominations. They make perfect gifts for food lovers and can be purchased online or at the restaurant.'
      }
    ]

    const submitContactForm = async () => {
      isSubmitting.value = true
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message
      alert('Thank you for your message! We will get back to you within 24 hours.')
      
      // Reset form
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
      
      isSubmitting.value = false
    }

    const toggleFaq = (index) => {
      const faqIndex = openFaqs.value.indexOf(index)
      if (faqIndex > -1) {
        openFaqs.value.splice(faqIndex, 1)
      } else {
        openFaqs.value.push(index)
      }
    }

    return {
      form,
      isSubmitting,
      faqs,
      openFaqs,
      submitContactForm,
      toggleFaq
    }
  }
}
</script> 