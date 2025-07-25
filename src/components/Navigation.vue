<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="container-custom px-5 md:px-0">
      <div class="flex justify-between items-center py-4 md:py-4 py-6">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <span class="text-white font-serif text-xl font-bold">L</span>
          </div>
          <span class="text-2xl font-serif font-bold text-primary-600">La Cuisine</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
            active-class="text-primary-600"
          >
            {{ item.name }}
          </router-link>
          <router-link 
            to="/reservations" 
            class="btn-primary"
          >
            Book a Table
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-secondary-200 py-4 px-5"
      >
        <div class="flex flex-col space-y-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 rounded-lg px-4 py-3 text-base"
            active-class="text-primary-600"
          >
            {{ item.name }}
          </router-link>
          <router-link 
            to="/reservations" 
            @click="closeMobileMenu"
            class="btn-primary text-center rounded-lg px-4 py-3 text-base"
          >
            Book a Table
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Navigation',
  setup() {
    const isMobileMenuOpen = ref(false)

    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'Menu', path: '/menu' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ]

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    return {
      isMobileMenuOpen,
      navItems,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script> 