<template>
  <div class="reservations bg-gradient-to-br from-secondary-50 via-primary-50 to-secondary-100 min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div class="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div class="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      <div class="container-custom text-center text-white relative z-10">
        <h1 class="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">Make a Reservation</h1>
        <p class="text-xl max-w-2xl mx-auto animate-fade-in-up delay-200">
          Book your table online and secure your spot for an unforgettable dining experience
        </p>
      </div>
    </section>

    <!-- Multi-Step Reservation Form -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto">
          <!-- Progress Bar -->
          <div class="flex items-center mb-10 px-5 md:px-0">
            <div class="w-full">
              <div class="hidden md:flex items-center">
                <div v-for="(step, idx) in steps" :key="step.label" class="flex-1 flex items-center">
                  <div :class="['w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 transform hover:scale-110',
                    currentStep > idx ? 'bg-primary-600 text-white border-primary-600 shadow-lg' : 
                    currentStep === idx ? 'bg-white text-primary-700 border-primary-600 shadow-xl ring-4 ring-primary-200 animate-pulse' : 
                    'bg-secondary-100 text-secondary-400 border-secondary-200 hover:bg-secondary-200']">
                    <component :is="currentStep > idx ? CheckIcon : step.icon" class="w-6 h-6" />
                  </div>
                  <div v-if="idx < steps.length - 1" class="flex-1 h-1 bg-secondary-200 mx-3 rounded-full overflow-hidden">
                    <div :class="['h-1 transition-all duration-500 ease-out rounded-full', currentStep > idx ? 'bg-gradient-to-r from-primary-500 to-primary-600' : '']"></div>
                  </div>
                </div>
              </div>
              <!-- Mobile Progress Bar -->
              <div class="md:hidden flex flex-col items-center space-y-4">
                <div class="flex items-center space-x-3">
                  <div v-for="(step, idx) in steps" :key="step.label" class="flex flex-col items-center">
                    <div :class="['w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 transform hover:scale-110',
                      currentStep > idx ? 'bg-primary-600 text-white border-primary-600 shadow-lg' : 
                      currentStep === idx ? 'bg-white text-primary-700 border-primary-600 shadow-xl ring-4 ring-primary-200 animate-pulse' : 
                      'bg-secondary-100 text-secondary-400 border-secondary-200 hover:bg-secondary-200']">
                      <component :is="currentStep > idx ? CheckIcon : step.icon" class="w-6 h-6" />
                    </div>
                    <span class="text-xs mt-2 text-secondary-600 font-medium">{{ step.label }}</span>
                  </div>
                </div>
                <div class="text-sm font-medium text-secondary-700 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  Step {{ currentStep + 1 }} of {{ steps.length }}: {{ steps[currentStep].description }}
                </div>
              </div>
            </div>
          </div>

          <div class="md:px-0 px-5">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <!-- Step 1: Details -->
              <transition name="slide-fade" mode="out-in">
                <div v-if="currentStep === 0" key="step-1" class="bg-white/95 rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-md border border-primary-100 transform hover:scale-[1.01] transition-all duration-300">
                  <div class="flex items-center mb-8">
                    <div class="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mr-4 shadow-lg">
                      <CalendarDaysIcon class="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 class="text-2xl md:text-3xl font-serif font-bold text-secondary-900">Reservation Details</h2>
                      <p class="text-secondary-600">Choose your preferred date and time</p>
                    </div>
                  </div>
                  
                  <div class="mb-6">
                    <label class="block text-sm font-semibold text-secondary-700 mb-3 flex items-center">
                      <CalendarDaysIcon class="w-5 h-5 mr-2 text-primary-600" />
                      Date *
                    </label>
                    <input v-model="form.date" type="date" required :min="minDate" 
                           class="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 text-lg font-medium hover:border-primary-300" />
                  </div>
                  
                  <div class="mb-6">
                    <label class="block text-sm font-semibold text-secondary-700 mb-3 flex items-center">
                      <ClockIcon class="w-5 h-5 mr-2 text-primary-600" />
                      Time *
                    </label>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <button v-for="timeSlot in availableTimes" :key="timeSlot.time" type="button"
                        :class="['relative px-4 py-4 rounded-xl border-2 transition-all duration-200 text-sm md:text-base font-medium transform hover:scale-105 hover:shadow-md',
                          selectedTime === timeSlot.time ? 
                            'bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-600 shadow-lg ring-4 ring-primary-200' : 
                            'bg-white text-secondary-700 border-secondary-200 hover:border-primary-300 hover:bg-primary-50']"
                        @click="selectTime(timeSlot.time)">
                        <span class="flex items-center justify-center">
                          {{ timeSlot.time }}
                          <StarIcon v-if="timeSlot.popular" class="w-4 h-4 ml-1 text-yellow-400" />
                        </span>
                        <span v-if="timeSlot.popular" class="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">Popular</span>
                      </button>
                    </div>
                  </div>
                  
                  <div class="mb-6">
                    <label class="block text-sm font-semibold text-secondary-700 mb-3 flex items-center">
                      <UsersIcon class="w-5 h-5 mr-2 text-primary-600" />
                      Party Size *
                    </label>
                    <div class="grid grid-cols-3 md:grid-cols-5 gap-3">
                      <button v-for="party in partySizes" :key="party.size" type="button"
                        :class="['relative px-4 py-4 rounded-xl border-2 transition-all duration-200 text-sm md:text-base font-medium transform hover:scale-105 hover:shadow-md',
                          selectedPartySize === party.size ? 
                            'bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-600 shadow-lg ring-4 ring-primary-200' : 
                            'bg-white text-secondary-700 border-secondary-200 hover:border-primary-300 hover:bg-primary-50']"
                        @click="selectPartySize(party.size)">
                        <div class="flex flex-col items-center">
                          <span class="text-lg mb-1">{{ party.icon }}</span>
                          <span class="text-xs">{{ party.label }}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div class="flex justify-end mt-10 space-x-4">
                    <button type="button" 
                            class="px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                            @click="nextStep" 
                            :disabled="!form.date || !form.time || !form.partySize">
                      Next Step
                      <ArrowRightIcon class="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </div>

                <!-- Step 2: Contact -->
                <div v-else-if="currentStep === 1" key="step-2" class="bg-white/95 rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-md border border-primary-100 transform hover:scale-[1.01] transition-all duration-300">
                  <div class="flex items-center mb-8">
                    <div class="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mr-4 shadow-lg">
                      <UserCircleIcon class="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 class="text-2xl md:text-3xl font-serif font-bold text-secondary-900">Your Information</h2>
                      <p class="text-secondary-600">Tell us about yourself</p>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div class="relative">
                      <label class="block text-sm font-semibold text-secondary-700 mb-3">First Name *</label>
                      <input v-model="form.firstName" type="text" required 
                             class="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 text-lg font-medium hover:border-primary-300" 
                             placeholder="Enter your first name" />
                    </div>
                    <div class="relative">
                      <label class="block text-sm font-semibold text-secondary-700 mb-3">Last Name *</label>
                      <input v-model="form.lastName" type="text" required 
                             class="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 text-lg font-medium hover:border-primary-300" 
                             placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div class="mb-6">
                    <label class="block text-sm font-semibold text-secondary-700 mb-3">Email Address *</label>
                    <input v-model="form.email" type="email" required 
                           class="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 text-lg font-medium hover:border-primary-300" 
                           placeholder="your.email@example.com" />
                  </div>
                  
                  <div class="mb-6">
                    <label class="block text-sm font-semibold text-secondary-700 mb-3">Phone Number *</label>
                    <input v-model="form.phone" type="tel" required 
                           class="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 text-lg font-medium hover:border-primary-300" 
                           placeholder="(555) 123-4567" />
                  </div>
                  
                  <div class="flex justify-between mt-10 space-x-4">
                    <button type="button" 
                            class="px-8 py-4 text-lg font-semibold shadow-lg bg-secondary-100 hover:bg-secondary-200 text-secondary-700 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl" 
                            @click="prevStep">
                      ← Back
                    </button>
                    <button type="button" 
                            class="px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                            @click="nextStep" 
                            :disabled="!form.firstName || !form.lastName || !form.email || !form.phone">
                      Next Step
                      <ArrowRightIcon class="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </div>

                <!-- Step 3: Extras -->
                <div v-else-if="currentStep === 2" key="step-3" class="bg-white/95 rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-md border border-primary-100 transform hover:scale-[1.01] transition-all duration-300">
                  <div class="flex items-center mb-8">
                    <div class="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mr-4 shadow-lg">
                      <ChatBubbleLeftRightIcon class="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 class="text-2xl md:text-3xl font-serif font-bold text-secondary-900">Special Requests</h2>
                      <p class="text-secondary-600">Any special requirements or preferences</p>
                    </div>
                  </div>
                  
                  <div class="mb-6">
                    <label class="block text-sm font-semibold text-secondary-700 mb-3">Special Occasion</label>
                    <select v-model="form.occasion" 
                            class="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 text-lg font-medium hover:border-primary-300">
                      <option value="">Select occasion (optional)</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div class="mb-6">
                    <label class="block text-sm font-semibold text-secondary-700 mb-3">Special Requests</label>
                    <textarea v-model="form.specialRequests" rows="4" 
                              class="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-400 transition-all duration-200 text-lg font-medium hover:border-primary-300 resize-none" 
                              placeholder="Any special requests, dietary requirements, or preferences..."></textarea>
                  </div>
                  
                  <div class="flex justify-between mt-10 space-x-4">
                    <button type="button" 
                            class="px-8 py-4 text-lg font-semibold shadow-lg bg-secondary-100 hover:bg-secondary-200 text-secondary-700 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl" 
                            @click="prevStep">
                      ← Back
                    </button>
                    <button type="button" 
                            class="px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl" 
                            @click="nextStep">
                      Next Step
                      <ArrowRightIcon class="w-5 h-5 ml-2 inline" />
                    </button>
                  </div>
                </div>

                <!-- Step 4: Review & Confirm -->
                <div v-else-if="currentStep === 3" key="step-4" class="bg-white/95 rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-md border border-primary-100 transform hover:scale-[1.01] transition-all duration-300">
                  <div class="flex items-center mb-8">
                    <div class="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mr-4 shadow-lg">
                      <CheckCircleIcon class="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 class="text-2xl md:text-3xl font-serif font-bold text-secondary-900">Review & Confirm</h2>
                      <p class="text-secondary-600">Please review your reservation details</p>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 mb-8 border border-primary-100 shadow-lg">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="space-y-3">
                        <div class="flex items-center">
                          <CalendarDaysIcon class="w-5 h-5 mr-3 text-primary-600" />
                          <span class="font-semibold">Date:</span>
                          <span class="ml-2 text-secondary-700">{{ form.date }}</span>
                        </div>
                        <div class="flex items-center">
                          <ClockIcon class="w-5 h-5 mr-3 text-primary-600" />
                          <span class="font-semibold">Time:</span>
                          <span class="ml-2 text-secondary-700">{{ form.time }}</span>
                        </div>
                        <div class="flex items-center">
                          <UsersIcon class="w-5 h-5 mr-3 text-primary-600" />
                          <span class="font-semibold">Party Size:</span>
                          <span class="ml-2 text-secondary-700">{{ form.partySize }}</span>
                        </div>
                      </div>
                      <div class="space-y-3">
                        <div class="flex items-center">
                          <UserCircleIcon class="w-5 h-5 mr-3 text-primary-600" />
                          <span class="font-semibold">Name:</span>
                          <span class="ml-2 text-secondary-700">{{ form.firstName }} {{ form.lastName }}</span>
                        </div>
                        <div class="flex items-center">
                          <svg class="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                          <span class="font-semibold">Email:</span>
                          <span class="ml-2 text-secondary-700">{{ form.email }}</span>
                        </div>
                        <div class="flex items-center">
                          <svg class="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          <span class="font-semibold">Phone:</span>
                          <span class="ml-2 text-secondary-700">{{ form.phone }}</span>
                        </div>
                      </div>
                    </div>
                    <div v-if="form.occasion || form.specialRequests" class="mt-4 pt-4 border-t border-primary-200">
                      <div v-if="form.occasion" class="flex items-center mb-2">
                        <StarIcon class="w-5 h-5 mr-3 text-primary-600" />
                        <span class="font-semibold">Occasion:</span>
                        <span class="ml-2 text-secondary-700">{{ form.occasion }}</span>
                      </div>
                      <div v-if="form.specialRequests" class="flex items-start">
                        <ChatBubbleLeftRightIcon class="w-5 h-5 mr-3 text-primary-600 mt-1" />
                        <div>
                          <span class="font-semibold">Special Requests:</span>
                          <p class="ml-2 text-secondary-700">{{ form.specialRequests }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex justify-between mt-10 space-x-4">
                    <button type="button" 
                            class="px-8 py-4 text-lg font-semibold shadow-lg bg-secondary-100 hover:bg-secondary-200 text-secondary-700 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl" 
                            @click="prevStep">
                      ← Back
                    </button>
                    <button type="submit" 
                            class="px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center" 
                            :disabled="isSubmitting">
                      <span v-if="isSubmitting" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                      <span v-else class="flex items-center">
                        Confirm Reservation
                        <CheckIcon class="w-5 h-5 ml-2" />
                      </span>
                    </button>
                  </div>
                </div>
              </transition>
            </form>
          </div>

          <!-- Confirmation Modal -->
          <transition name="fade">
            <div v-if="showConfirmation" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-fade-in-up md:mx-0 mx-5 border border-primary-100 transform scale-100">
                <div class="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <CheckIcon class="w-12 h-12 text-white" />
                </div>
                <h3 class="text-2xl md:text-3xl font-serif font-bold mb-4 text-secondary-900">Reservation Confirmed!</h3>
                <p class="mb-8 text-secondary-600 leading-relaxed">
                  Thank you, <span class="font-semibold text-primary-600">{{ form.firstName }}</span>. Your table is booked for <span class="font-semibold text-primary-600">{{ form.partySize }}</span> on <span class="font-semibold text-primary-600">{{ form.date }}</span> at <span class="font-semibold text-primary-600">{{ form.time }}</span>.
                </p>
                <p class="mb-8 text-sm text-secondary-500">
                  We will send a confirmation email with all the details shortly.
                </p>
                <button class="px-8 py-4 text-lg font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl" 
                        @click="showConfirmation = false">
                  Close
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Information Panel -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <!-- Hours -->
            <div class="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-primary-100 transform hover:scale-[1.02] transition-all duration-300">
              <h3 class="text-2xl font-serif font-bold text-secondary-900 mb-6 flex items-center">
                <ClockIcon class="w-7 h-7 mr-3 text-primary-600" />
                Opening Hours
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(hours, day) in openingHours" :key="day" 
                     class="flex justify-between items-center p-3 bg-secondary-50 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                  <span class="font-semibold text-secondary-700">{{ day }}</span>
                  <span class="text-secondary-600 font-medium">{{ hours }}</span>
                </div>
              </div>
            </div>

            <!-- Policies -->
            <div class="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-primary-100 transform hover:scale-[1.02] transition-all duration-300">
              <h3 class="text-2xl font-serif font-bold text-secondary-900 mb-6 flex items-center">
                <svg class="w-7 h-7 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                Reservation Policies
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-start p-4 bg-secondary-50 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                  <CheckIcon class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-secondary-900 mb-1">15-Minute Grace Period</h4>
                    <p class="text-sm text-secondary-600">Reservations are held for 15 minutes past the booking time</p>
                  </div>
                </div>
                <div class="flex items-start p-4 bg-secondary-50 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                  <CheckIcon class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-secondary-900 mb-1">24-Hour Cancellation</h4>
                    <p class="text-sm text-secondary-600">Cancellations must be made 24 hours in advance</p>
                  </div>
                </div>
                <div class="flex items-start p-4 bg-secondary-50 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                  <CheckIcon class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-secondary-900 mb-1">Smart Casual Dress</h4>
                    <p class="text-sm text-secondary-600">Smart casual dress code is required</p>
                  </div>
                </div>
                <div class="flex items-start p-4 bg-secondary-50 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                  <CheckIcon class="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-secondary-900 mb-1">Children's Menu</h4>
                    <p class="text-sm text-secondary-600">Children's menu available upon request</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-xl border border-primary-100 transform hover:scale-[1.02] transition-all duration-300">
              <h3 class="text-2xl font-serif font-bold text-secondary-900 mb-6 flex items-center">
                <svg class="w-7 h-7 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Need Help?
              </h3>
              <p class="text-secondary-600 mb-6">
                For special requests or large parties, please contact us directly.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-center p-4 bg-white/80 rounded-xl hover:bg-white transition-colors duration-200">
                  <svg class="w-6 h-6 mr-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div>
                    <div class="font-semibold text-secondary-900">Phone</div>
                    <div class="text-secondary-600">(555) 123-4567</div>
                  </div>
                </div>
                <div class="flex items-center p-4 bg-white/80 rounded-xl hover:bg-white transition-colors duration-200">
                  <svg class="w-6 h-6 mr-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <div class="font-semibold text-secondary-900">Email</div>
                    <div class="text-secondary-600">reservations@lacuisine.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CalendarDaysIcon, UserCircleIcon, ChatBubbleLeftRightIcon, CheckCircleIcon, ClockIcon, UsersIcon } from '@heroicons/vue/24/outline'
import { CheckIcon, StarIcon } from '@heroicons/vue/24/solid'

const isSubmitting = ref(false)
const showConfirmation = ref(false)
const currentStep = ref(0)
const selectedTime = ref('')
const selectedPartySize = ref('')
const steps = [
  { label: 'Details', icon: CalendarDaysIcon, description: 'Choose your date and time' },
  { label: 'Contact', icon: UserCircleIcon, description: 'Tell us about yourself' },
  { label: 'Extras', icon: ChatBubbleLeftRightIcon, description: 'Special requests' },
  { label: 'Review', icon: CheckCircleIcon, description: 'Confirm your booking' }
]

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  partySize: '',
  occasion: '',
  specialRequests: ''
})

const availableTimes = [
  { time: '11:30 AM', available: true, popular: false },
  { time: '12:00 PM', available: true, popular: true },
  { time: '12:30 PM', available: true, popular: false },
  { time: '1:00 PM', available: true, popular: false },
  { time: '1:30 PM', available: true, popular: false },
  { time: '2:00 PM', available: true, popular: false },
  { time: '5:30 PM', available: true, popular: false },
  { time: '6:00 PM', available: true, popular: true },
  { time: '6:30 PM', available: true, popular: false },
  { time: '7:00 PM', available: true, popular: true },
  { time: '7:30 PM', available: true, popular: false },
  { time: '8:00 PM', available: true, popular: true },
  { time: '8:30 PM', available: true, popular: false },
  { time: '9:00 PM', available: true, popular: false }
]

const partySizes = [
  { size: 1, icon: '👤', label: '1 Person' },
  { size: 2, icon: '👥', label: '2 People' },
  { size: 3, icon: '👥', label: '3 People' },
  { size: 4, icon: '👥', label: '4 People' },
  { size: 5, icon: '👥', label: '5 People' },
  { size: 6, icon: '👥', label: '6 People' },
  { size: 7, icon: '👥', label: '7 People' },
  { size: 8, icon: '👥', label: '8 People' },
  { size: 9, icon: '👥', label: '9 People' },
  { size: 10, icon: '👥', label: '10+ People' }
]

const openingHours = {
  'Monday': 'Closed',
  'Tuesday': '5:00 PM - 10:00 PM',
  'Wednesday': '5:00 PM - 10:00 PM',
  'Thursday': '5:00 PM - 10:00 PM',
  'Friday': '5:00 PM - 11:00 PM',
  'Saturday': '5:00 PM - 11:00 PM',
  'Sunday': '11:00 AM - 9:00 PM'
}

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const nextStep = () => {
  if (currentStep.value < steps.length - 1) currentStep.value++
}
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--
}

const selectTime = (time) => {
  selectedTime.value = time
  form.value.time = time
}

const selectPartySize = (size) => {
  selectedPartySize.value = size
  form.value.partySize = size
}

const handleSubmit = async () => {
  if (currentStep.value < steps.length - 1) {
    nextStep()
    return
  }
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  showConfirmation.value = true
  isSubmitting.value = false
  // Reset form for next booking
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    occasion: '',
    specialRequests: ''
  }
  selectedTime.value = ''
  selectedPartySize.value = ''
  currentStep.value = 0
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}
</style> 