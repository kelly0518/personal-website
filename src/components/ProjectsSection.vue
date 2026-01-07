<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack shopping experience built with Vue 3 and Node.js.',
    tags: ['Vue', 'Node.js', 'Tailwind'],
    image: 'shopping_cart',
    link: '/project/ecommerce'
  },
  {
    title: 'Task Management App',
    description: 'Productivity tool for teams with real-time updates.',
    tags: ['React', 'Firebase', 'TypeScript'],
    image: 'checklist',
    link: '/project/task-manager'
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather visualizations using public APIs.',
    tags: ['JavaScript', 'API', 'CSS'],
    image: 'sunny',
    link: '/project/weather-dashboard'
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern portfolio website with glassmorphism design.',
    tags: ['Vue 3', 'Vite', 'Tailwind'],
    image: 'person',
    link: '/project/portfolio'
  },
  {
    title: 'Finance Tracker',
    description: 'Mobile-first expense tracking application.',
    tags: ['React Native', 'Expo', 'SQLite'],
    image: 'attach_money',
    link: '/project/finance-tracker'
  }
]
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

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        <div v-for="(project, index) in projects" :key="index" class="group relative bg-white dark:bg-gray-300 p-4 pb-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-rotate-1 hover:scale-[1.02]">
          <!-- Polaroid Image Area -->
          <div class="aspect-square w-full bg-gray-100 dark:bg-gray-100 mb-6 overflow-hidden flex items-center justify-center border border-gray-100 dark:border-gray-200 transition-colors">
            <span class="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-gray-500 transition-colors">image</span>
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
            
            <router-link :to="project.link" class="inline-block mt-2 text-sm font-bold text-black dark:text-black border-b-2 border-black dark:border-black hover:text-gray-600 hover:border-gray-600 transition-all">
              View Project
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
