<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    id: '1',
    title: 'E-Commerce Redesign',
    description: 'A complete overhaul of a fashion retailer\'s online store, focusing on mobile conversion and user experience.',
    category: 'UI/UX Design',
    tags: ['Figma', 'Prototyping', 'User Testing'],
    image: '', 
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Finance Dashboard',
    description: 'Real-time analytics dashboard for a fintech startup, visualizing complex data streams.',
    category: 'Web Development',
    tags: ['Vue.js', 'D3.js', 'Tailwind'],
    image: '',
    createdAt: Date.now()
  },
  {
    id: '3',
    title: 'Travel App',
    description: 'Mobile application for itinerary planning and local recommendations.',
    category: 'Mobile App',
    tags: ['iOS', 'Swift', 'MapKit'],
    image: '',
    createdAt: Date.now()
  }
])
</script>

<template>
  <section id="projects" class="py-24 bg-cream dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
          Featured Projects
        </h2>
        <p class="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
          A selection of projects that showcase my passion for building clean, efficient, and user-centric solutions.
        </p>
      </div>

      <div v-if="projects.length === 0" class="text-center text-gray-500 dark:text-slate-400 py-12">
        <span class="material-symbols-outlined text-4xl mb-2">pending</span>
        <p>Loading projects or portfolio is empty...</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        <div v-for="(project) in projects" :key="project.id" class="group relative bg-white dark:bg-gray-300 p-4 pb-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-rotate-1 hover:scale-[1.02]">
          <!-- Polaroid Image Area -->
          <div class="aspect-square w-full bg-gray-100 dark:bg-gray-100 mb-6 overflow-hidden flex items-center justify-center border border-gray-100 dark:border-gray-200 transition-colors">
            <img v-if="project.image && project.image.startsWith('http')" :src="project.image" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" :alt="project.title" />
            <span v-else class="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-500 transition-colors">image</span>
          </div>
          
          <!-- Polaroid Text Area -->
          <div class="px-2 text-center">
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-900 font-display">{{ project.title }}</h3>
            <p class="text-gray-500 dark:text-gray-600 text-sm mb-4 line-clamp-2 font-light">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 justify-center mb-4">
              <span v-for="tag in project.tags" :key="tag" class="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-200 text-gray-500 dark:text-gray-600">
                #{{ tag }}
              </span>
            </div>
            
            <router-link :to="'/project/' + project.id" class="inline-block mt-2 text-sm font-bold text-black dark:text-black border-b-2 border-black dark:border-black hover:text-gray-600 hover:border-gray-600 transition-all">
              View Project
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
