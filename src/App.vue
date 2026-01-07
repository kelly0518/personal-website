<script setup lang="ts">
import ContactSection from './components/ContactSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Theme state
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Initialize Theme
  const savedTheme = localStorage.getItem('theme')
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="bg-cream dark:bg-slate-900 min-h-screen text-gray-900 dark:text-white selection:bg-black selection:text-white dark:selection:bg-blue-500">
    <!-- Navigation -->
    <nav :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'bg-cream/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm' : 'bg-transparent'
    ]">
      <div class="container mx-auto max-w-6xl flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold font-display text-gray-900 dark:text-white tracking-tight">
          Portfolio.
        </router-link>
        
        <ul class="hidden md:flex items-center gap-8">
          <li><router-link to="/about" class="text-sm font-bold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 transition-colors">About</router-link></li>
          <li><router-link to="/projects" class="text-sm font-bold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 transition-colors">Projects</router-link></li>
          <li><router-link to="/resume" class="text-sm font-bold text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 transition-colors">Resume</router-link></li>
          <li>
            <button @click="toggleTheme" class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white" aria-label="Toggle Theme">
              <span class="material-symbols-outlined block">
                {{ isDark ? 'light_mode' : 'dark_mode' }}
              </span>
            </button>
          </li>
        </ul>

        <!-- Mobile Menu Button (implied) -->
        <button class="md:hidden text-gray-900 dark:text-white">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      
      <!-- Contact Footer on every page -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer class="py-8 text-center text-gray-500 text-sm border-t border-gray-200 bg-white">
      <p>&copy; {{ new Date().getFullYear() }} Personal Portfolio. Built with Vue 3 & Tailwind.</p>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
