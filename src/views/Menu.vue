<template>
  <div class="menu">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div class="container-custom text-center text-white">
        <h1 class="text-5xl font-serif font-bold mb-4">Our Menu</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Discover our carefully crafted dishes featuring the finest seasonal ingredients and innovative culinary techniques
        </p>
      </div>
    </section>

    <!-- Menu Categories -->
    <section class="section-padding">
      <div class="container-custom">
        <!-- Category Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-6 py-3 rounded-lg font-medium transition-colors duration-200',
              activeCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Menu Items -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="item in filteredMenuItems"
            :key="item.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex">
              <div class="w-32 h-32 flex-shrink-0">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-serif font-semibold text-secondary-900">
                    {{ item.name }}
                  </h3>
                  <span class="text-lg font-bold text-primary-600">
                    ${{ item.price }}
                  </span>
                </div>
                <p class="text-secondary-600 text-sm mb-3">
                  {{ item.description }}
                </p>
                <div class="flex items-center text-sm text-secondary-500">
                  <span v-if="item.spicy" class="flex items-center mr-4">
                    <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Spicy
                  </span>
                  <span v-if="item.vegetarian" class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    Vegetarian
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chef's Special -->
        <div class="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-serif font-bold text-secondary-900 mb-4">
              Chef's Special
            </h2>
            <p class="text-secondary-600 max-w-2xl mx-auto">
              Experience our signature dish, crafted with passion and the finest ingredients
            </p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/3 mb-6 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Chef's Special"
                  class="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div class="md:w-2/3 md:pl-8">
                <h3 class="text-2xl font-serif font-bold text-secondary-900 mb-3">
                  Truffle Risotto with Wild Mushrooms
                </h3>
                <p class="text-secondary-600 mb-4">
                  Our signature dish features creamy Arborio rice cooked to perfection with wild mushrooms, 
                  finished with black truffle and aged Parmesan. A true celebration of Italian cuisine.
                </p>
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-bold text-primary-600">$32</span>
                  <span class="text-sm text-secondary-500">Available daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Wine List -->
        <div class="mt-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-serif font-bold text-secondary-900 mb-4">
              Premium Beverages
            </h2>
            <p class="text-secondary-600 max-w-2xl mx-auto">
              Carefully curated non-alcoholic beverages to complement your dining experience
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="beverage in beverageList"
              :key="beverage.id"
              class="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <h3 class="text-xl font-serif font-semibold text-secondary-900 mb-2">
                {{ beverage.name }}
              </h3>
              <p class="text-secondary-600 text-sm mb-3">{{ beverage.description }}</p>
              <p class="text-primary-600 font-bold">${{ beverage.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Menu',
  setup() {
    const activeCategory = ref('appetizers')

    const categories = [
      { id: 'appetizers', name: 'Appetizers' },
      { id: 'main-courses', name: 'Main Courses' },
      { id: 'desserts', name: 'Desserts' },
      { id: 'beverages', name: 'Beverages' }
    ]

    const menuItems = [
      {
        id: 1,
        name: 'Bruschetta al Pomodoro',
        description: 'Toasted bread topped with fresh tomatoes, basil, and extra virgin olive oil',
        price: 12,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1572441713131-4d09e2c54c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: true,
        spicy: false
      },
      {
        id: 2,
        name: 'Carpaccio di Manzo',
        description: 'Thinly sliced raw beef with arugula, Parmesan, and truffle oil',
        price: 18,
        category: 'appetizers',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: false,
        spicy: false
      },
      {
        id: 3,
        name: 'Grilled Sea Bass',
        description: 'Fresh sea bass with lemon butter sauce and seasonal vegetables',
        price: 28,
        category: 'main-courses',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: false,
        spicy: false
      },
      {
        id: 4,
        name: 'Beef Tenderloin',
        description: 'Premium cut beef with red wine reduction and roasted potatoes',
        price: 34,
        category: 'main-courses',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: false,
        spicy: false
      },
      {
        id: 5,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
        price: 14,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: true,
        spicy: false
      },
      {
        id: 6,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: 16,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: true,
        spicy: false
      },
      {
        id: 7,
        name: 'Espresso',
        description: 'Rich Italian coffee served in traditional style',
        price: 4,
        category: 'beverages',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: true,
        spicy: false
      },
      {
        id: 8,
        name: 'Fresh Fruit Smoothie',
        description: 'Blend of seasonal fruits with yogurt and honey',
        price: 8,
        category: 'beverages',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        vegetarian: true,
        spicy: false
      }
    ]

    const beverageList = [
      { id: 1, name: 'Premium Arabic Coffee', description: 'Traditional cardamom-infused coffee', price: 8 },
      { id: 2, name: 'Moroccan Mint Tea', description: 'Fresh mint with green tea', price: 6 },
      { id: 3, name: 'Rose Water Lemonade', description: 'Refreshing citrus with rose essence', price: 7 },
      { id: 4, name: 'Pomegranate Mocktail', description: 'Fresh pomegranate with herbs', price: 9 },
      { id: 5, name: 'Ginger Turmeric Latte', description: 'Golden milk with fresh ginger', price: 8 },
      { id: 6, name: 'Date Shake', description: 'Rich date smoothie with almond milk', price: 7 }
    ]

    const filteredMenuItems = computed(() => {
      return menuItems.filter(item => item.category === activeCategory.value)
    })

    return {
      activeCategory,
      categories,
      menuItems,
      beverageList,
      filteredMenuItems
    }
  }
}
</script> 