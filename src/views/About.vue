<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div class="container-custom text-center text-white">
        <h1 class="text-5xl font-serif font-bold mb-4">Our Story</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Discover the passion and tradition behind La Cuisine's exceptional dining experience
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-serif font-bold text-secondary-900 mb-6">
              A Culinary Journey Since 1995
            </h2>
            <p class="text-lg text-secondary-600 mb-6">
              La Cuisine was born from a simple dream: to create a dining experience that combines 
              the warmth of traditional hospitality with the innovation of modern cuisine. What 
              started as a small family restaurant has grown into one of the city's most beloved 
              culinary destinations.
            </p>
            <p class="text-lg text-secondary-600 mb-6">
              Our founder, Chef Marco Rossi, brought his passion for authentic Italian cuisine 
              and his vision for creating memorable dining experiences. Today, we continue to 
              honor his legacy while embracing new culinary trends and techniques.
            </p>
            <p class="text-lg text-secondary-600">
              Every dish we serve tells a story - of tradition, innovation, and the love we have 
              for creating exceptional food that brings people together.
            </p>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant Interior"
              class="rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-1">25+</div>
                <div class="text-secondary-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-secondary-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-secondary-900 mb-4">
            Our Values
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            The principles that guide everything we do at La Cuisine
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-serif font-semibold text-secondary-900 mb-4">Passion</h3>
            <p class="text-secondary-600">
              We pour our hearts into every dish, treating each meal as an opportunity to create 
              something extraordinary for our guests.
            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-serif font-semibold text-secondary-900 mb-4">Quality</h3>
            <p class="text-secondary-600">
              From the ingredients we select to the service we provide, we never compromise on 
              quality in any aspect of our restaurant.
            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-serif font-semibold text-secondary-900 mb-4">Community</h3>
            <p class="text-secondary-600">
              We believe in the power of bringing people together through food, creating a 
              welcoming space where memories are made.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-secondary-900 mb-4">
            Meet Our Team
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            The talented individuals who make La Cuisine an exceptional dining destination
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-serif font-semibold text-secondary-900 mb-2">
                {{ member.name }}
              </h3>
              <p class="text-primary-600 font-medium mb-3">{{ member.position }}</p>
              <p class="text-secondary-600 text-sm">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-custom text-center text-white">
        <h2 class="text-4xl font-serif font-bold mb-12">
          Awards & Recognition
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="award in awards"
            :key="award.id"
            class="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <div class="text-4xl mb-4">🏆</div>
            <h3 class="text-xl font-serif font-semibold mb-2">{{ award.title }}</h3>
            <p class="text-sm opacity-90">{{ award.year }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainability Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Sustainable Ingredients"
              class="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 class="text-4xl font-serif font-bold text-secondary-900 mb-6">
              Commitment to Sustainability
            </h2>
            <p class="text-lg text-secondary-600 mb-6">
              We believe in responsible dining that respects our planet and supports local 
              communities. Our commitment to sustainability extends to every aspect of our 
              operation.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-secondary-700">Locally sourced ingredients from sustainable farms</span>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-secondary-700">Zero-waste kitchen practices</span>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-secondary-700">Energy-efficient equipment and lighting</span>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-secondary-700">Compostable packaging and eco-friendly cleaning products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    const teamMembers = [
      {
        id: 1,
        name: 'Chef Marco Rossi',
        position: 'Executive Chef & Owner',
        description: 'With over 25 years of culinary experience, Chef Marco brings his passion for authentic Italian cuisine to every dish.',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 2,
        name: 'Sofia Martinez',
        position: 'Head Chef',
        description: 'Sofia specializes in modern interpretations of classic dishes, bringing creativity and innovation to our menu.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 3,
        name: 'David Chen',
        position: 'Pastry Chef',
        description: 'David creates our exquisite desserts, combining traditional techniques with contemporary presentation.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 4,
        name: 'Maria Rodriguez',
        position: 'Restaurant Manager',
        description: 'Maria ensures every guest receives exceptional service and a memorable dining experience.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 5,
        name: 'James Wilson',
        position: 'Sommelier',
        description: 'James curates our extensive wine list, helping guests find the perfect pairing for their meal.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 6,
        name: 'Lisa Thompson',
        position: 'Service Director',
        description: 'Lisa leads our front-of-house team, ensuring impeccable service standards and guest satisfaction.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]

    const awards = [
      { id: 1, title: 'Best Fine Dining', year: '2023' },
      { id: 2, title: 'Chef of the Year', year: '2022' },
      { id: 3, title: 'Wine Excellence', year: '2021' },
      { id: 4, title: 'Service Award', year: '2020' }
    ]

    return {
      teamMembers,
      awards
    }
  }
}
</script> 