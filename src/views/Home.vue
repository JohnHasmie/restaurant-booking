<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      
      <div class="relative z-20 text-center text-white px-4">
        <h1 class="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
          Welcome to <span class="text-gradient">La Cuisine</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Experience the art of fine dining with our award-winning chefs and exceptional service
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <router-link to="/reservations" class="btn-primary text-lg px-8 py-4">
            Book Your Table
          </router-link>
          <router-link to="/menu" class="btn-secondary text-lg px-8 py-4">
            View Our Menu
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-secondary-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-secondary-900 mb-4">
            Why Choose La Cuisine?
          </h2>
          <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
            We combine traditional techniques with modern innovation to create unforgettable dining experiences
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold mb-3">Award-Winning Menu</h3>
            <p class="text-secondary-600">
              Our carefully curated menu features seasonal ingredients and innovative dishes that have earned us numerous culinary awards.
            </p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold mb-3">Expert Service</h3>
            <p class="text-secondary-600">
              Our professional staff ensures every guest receives personalized attention and an exceptional dining experience.
            </p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold mb-3">Elegant Atmosphere</h3>
            <p class="text-secondary-600">
              Enjoy your meal in our beautifully designed dining room with perfect lighting and comfortable seating.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offers Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-custom text-center text-white">
        <h2 class="text-4xl font-serif font-bold mb-6">
          Special Offers
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Join us for our weekly special events and exclusive dining experiences
        </p>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-2xl font-serif font-semibold mb-4">Wine & Dine Wednesday</h3>
            <p class="mb-4">50% off on selected wines with any main course</p>
            <p class="text-sm opacity-90">Every Wednesday, 6 PM - 9 PM</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 class="text-2xl font-serif font-semibold mb-4">Chef's Table Experience</h3>
            <p class="mb-4">Exclusive 7-course tasting menu with wine pairing</p>
            <p class="text-sm opacity-90">Fridays & Saturdays by reservation only</p>
          </div>
        </div>
        
        <div class="mt-12">
          <router-link to="/reservations" class="btn-secondary text-lg px-8 py-4">
            Reserve Your Spot
          </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-serif font-bold text-secondary-900 mb-4">
            What Our Guests Say
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-secondary-50 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-secondary-700 mb-4">
              "The best dining experience I've had in years. The food was exceptional and the service was impeccable."
            </p>
            <div class="font-semibold text-secondary-900">- Sarah Johnson</div>
          </div>

          <div class="bg-secondary-50 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-secondary-700 mb-4">
              "Perfect for special occasions. The atmosphere is elegant and the wine selection is outstanding."
            </p>
            <div class="font-semibold text-secondary-900">- Michael Chen</div>
          </div>

          <div class="bg-secondary-50 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-secondary-700 mb-4">
              "The chef's table experience was unforgettable. Each dish was a work of art and tasted even better than it looked."
            </p>
            <div class="font-semibold text-secondary-900">- Emily Rodriguez</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script> 