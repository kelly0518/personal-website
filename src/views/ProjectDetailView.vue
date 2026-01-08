<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { type Project } from '../firebase/db'

const route = useRoute()
const projectId = route.params.id as string

const project = ref<Project | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

// Static Data (Mirroring ProjectsSection)
const staticProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Redesign',
    description: 'A complete overhaul of a fashion retailer\'s online store, focusing on mobile conversion and user experience. This project involved extensive user research, wireframing, and iterative testing to ensure a seamless shopping journey.',
    category: 'UI/UX Design',
    tags: ['Figma', 'Prototyping', 'User Testing'],
    image: '',
    link: '#',
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Finance Dashboard',
    description: 'Real-time analytics dashboard for a fintech startup, visualizing complex data streams. Key challenges included performance optimization for large datasets and creating an intuitive data visualization language.',
    category: 'Web Development',
    tags: ['Vue.js', 'D3.js', 'Tailwind'],
    image: '',
    link: '#',
    createdAt: Date.now()
  },
  {
    id: '3',
    title: 'Travel App',
    description: 'Mobile application for itinerary planning and local recommendations. Utilizes geolocation and social features to help travelers discover hidden gems.',
    category: 'Mobile App',
    tags: ['iOS', 'Swift', 'MapKit'],
    image: '',
    link: '#',
    createdAt: Date.now()
  }
]

const fetchProject = async () => {
  loading.value = true
  error.value = null
  // Simulate network delay for realism
  setTimeout(() => {
    const found = staticProjects.find(p => p.id === projectId)
    if (found) {
      project.value = found
    } else {
      error.value = 'Project not found'
    }
    loading.value = false
  }, 300)
}

onMounted(fetchProject)

watch(() => route.params.id, (newId) => {
  if (newId) {
    window.location.reload() 
  }
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

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-20 text-gray-500">
        <span class="material-symbols-outlined text-4xl animate-spin">refresh</span>
        <p class="mt-4">Loading project details...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error || !project" class="text-center py-20 text-gray-500">
        <span class="material-symbols-outlined text-4xl mb-4">error</span>
        <h2 class="text-xl font-bold">Project Not Found</h2>
        <p class="mt-2 text-sm">{{ error }}</p>
      </div>

      <!-- Project Content -->
      <div v-else>
        <!-- Project Header -->
        <div class="mb-12">
          <div class="flex items-center gap-4 mb-4">
            <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 text-sm font-medium border border-gray-200 dark:border-slate-700">
              {{ project.category }}
            </span>
            <span class="text-sm text-gray-400">
               {{ new Date(project.createdAt).toLocaleDateString() }}
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
          <div v-if="!project.image || !project.image.startsWith('http')" class="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-gray-300/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
          
          <img v-if="project.image && project.image.startsWith('http')" :src="project.image" class="w-full h-full object-cover" :alt="project.title" />
          <span v-else class="material-symbols-outlined text-9xl text-gray-400 dark:text-slate-600 transition-transform group-hover:scale-110 duration-700">
            valid_image_url_needed
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
              <a v-if="project.link" :href="project.link" target="_blank" class="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-black dark:hover:border-white transition-colors group shadow-sm">
                <span class="font-medium text-gray-700 dark:text-slate-200">Visit Project</span>
                <span class="material-symbols-outlined text-gray-400 dark:text-slate-500 group-hover:text-black dark:group-hover:text-white">open_in_new</span>
              </a>
              <div v-else class="text-gray-500 text-sm italic">
                No external links provided.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
