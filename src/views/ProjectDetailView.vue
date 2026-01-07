<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const projectId = route.params.id as string

// In a real app, this would come from a store or API
const projects = {
  'ecommerce': {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A comprehensive shopping experience built with Vue 3, Node.js, and a custom managed database. Features include real-time inventory, secure payments (Stripe), and an admin dashboard.',
    tags: ['Vue 3', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    image: 'shopping_cart' 
  },
  'task-manager': {
    title: 'Task Management App',
    category: 'Productivity',
    description: 'A collaborative task management tool helping teams stay organized. Supports kanban boards, real-time socket updates, and file attachments.',
    tags: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
    image: 'checklist'
  },
  'weather-dashboard': {
    title: 'Weather Dashboard',
    category: 'Data Visualization',
    description: 'Interactive weather dashboard using OpenWeatherMap API. Features interactive charts, location autodetect, and 7-day forecasting.',
    tags: ['JavaScript', 'Chart.js', 'API', 'CSS Grid'],
    image: 'sunny'
  },
  'portfolio': {
    title: 'Personal Portfolio',
    category: 'Web Design',
    description: 'The website you are looking at right now! Designed to be fast, responsive, and accessible.',
    tags: ['Vue 3', 'Vite', 'Tailwind CSS'],
    image: 'person'
  },
  'finance-tracker': {
    title: 'Finance Tracker',
    category: 'FinTech',
    description: 'Mobile-first application for tracking personal expenses and visualizing spending habits.',
    tags: ['React Native', 'Expo', 'SQLite'],
    image: 'attach_money'
  }
}

// Fallback for demo purposes if ID doesn't match
const project = computed(() => {
  return projects[projectId as keyof typeof projects] || projects['ecommerce']
})
</script>

<template>
  <div class="pt-24 min-h-screen bg-cream dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
    <div class="container mx-auto px-6 max-w-4xl">
      <!-- Back Link -->
      <router-link to="/projects" class="inline-flex items-center gap-2 text-gray-500 dark:text-slate-400 hover:text-black dark:hover:text-white mb-8 transition-colors">
        <span class="material-symbols-outlined">arrow_back</span>
        Back to Projects
      </router-link>

      <!-- Project Header -->
      <div class="mb-12">
        <div class="flex items-center gap-4 mb-4">
          <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 text-sm font-medium border border-gray-200 dark:border-slate-700">
            {{ project.category }}
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ project.title }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {{ project.description }}
        </p>
      </div>

      <!-- Feature Image / Depiction -->
      <div class="aspect-video w-full bg-gray-100 dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 flex items-center justify-center mb-12 relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        <span class="material-symbols-outlined text-9xl text-gray-400 dark:text-slate-600 transition-transform group-hover:scale-110 duration-700">
          {{ project.image }}
        </span>
      </div>

      <!-- Tech Stack -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <div class="col-span-2">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Technologies Used</h2>
          <div class="flex flex-wrap gap-3">
             <span v-for="tag in project.tags" :key="tag" class="px-4 py-2 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-300">
               {{ tag }}
             </span>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Links</h2>
          <div class="flex flex-col gap-3">
            <a href="#" class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-black dark:hover:border-white transition-colors group shadow-sm">
              <span class="font-medium text-gray-700 dark:text-slate-200">Live Demo</span>
              <span class="material-symbols-outlined text-gray-400 dark:text-slate-500 group-hover:text-black dark:group-hover:text-white">open_in_new</span>
            </a>
            <a href="#" class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-black dark:hover:border-white transition-colors group shadow-sm">
              <span class="font-medium text-gray-700 dark:text-slate-200">Source Code</span>
              <span class="material-symbols-outlined text-gray-400 dark:text-slate-500 group-hover:text-black dark:group-hover:text-white">code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
