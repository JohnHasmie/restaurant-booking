<template>
  <footer class="bg-secondary-900 text-white">
    <div class="container-custom">
      <div class="py-16 px-0 md:px-0">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Mobile padding wrapper for all columns -->
          <div class="lg:col-span-2 px-5 md:px-0 mb-8 md:mb-0">
            <!-- Restaurant Info -->
            <div class="flex items-center space-x-2 mb-6">
              <div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span class="text-white font-serif text-xl font-bold">L</span>
              </div>
              <span class="text-2xl font-serif font-bold text-white">La Cuisine</span>
            </div>
            <p class="text-secondary-300 mb-6 max-w-md">
              Experience the art of fine dining with our award-winning chefs and exceptional service. 
              We combine traditional techniques with modern innovation to create unforgettable dining experiences.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="px-5 md:px-0 mb-8 md:mb-0">
            <!-- Quick Links -->
            <h3 class="text-lg font-serif font-semibold mb-6">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <router-link to="/" class="text-secondary-300 hover:text-white transition-colors duration-200">
                  Home
                </router-link>
              </li>
              <li>
                <router-link to="/menu" class="text-secondary-300 hover:text-white transition-colors duration-200">
                  Our Menu
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="text-secondary-300 hover:text-white transition-colors duration-200">
                  About Us
                </router-link>
              </li>
              <li>
                <router-link to="/reservations" class="text-secondary-300 hover:text-white transition-colors duration-200">
                  Reservations
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-secondary-300 hover:text-white transition-colors duration-200">
                  Contact
                </router-link>
              </li>
            </ul>
          </div>
          <div class="px-5 md:px-0">
            <!-- Contact Info -->
            <h3 class="text-lg font-serif font-semibold mb-6">Contact Info</h3>
            <div class="space-y-3">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p class="text-secondary-300">123 Gourmet Street</p>
                  <p class="text-secondary-300">Culinary District, NY 10001</p>
                </div>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-secondary-300">(555) 123-4567</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-secondary-300">info@lacuisine.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-secondary-800 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-secondary-400 text-sm mb-4 md:mb-0">
            © 2024 La Cuisine. All rights reserved.
          </div>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-secondary-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" class="text-secondary-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" class="text-secondary-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script> 