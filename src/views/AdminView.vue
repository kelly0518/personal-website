<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { logout } from '../firebase/auth'
import { useProjects, addProject, deleteProject, useProfile, updateProfile, updateProject } from '../firebase/db'

const router = useRouter()
const { projects, error } = useProjects()
const { profile } = useProfile()
const activeTab = ref('projects') // 'projects' | 'profile'

// Project Form Data
const editingId = ref<string | null>(null)
const newProject = ref({
  title: '',
  description: '',
  category: 'Web',
  tags: '',
  image: '', // URL
  link: ''
})

const isSubmitting = ref(false)
const message = ref<{ type: 'success' | 'error', text: string } | null>(null)

const handleLogout = async () => {
  await logout()
  router.push('/login')
}

// Project Actions
const handleSubmitProject = async () => {
  isSubmitting.value = true
  message.value = null
  
  try {
    const tagsArray = newProject.value.tags.split(',').map(t => t.trim()).filter(t => t)
    
    // Sanitize payload to remove undefined
    const payload = {
      title: newProject.value.title || '',
      description: newProject.value.description || '',
      category: newProject.value.category || 'Web',
      image: newProject.value.image || '',
      link: newProject.value.link || '',
      tags: tagsArray
    }

    console.log('Submitting Project:', { id: editingId.value, payload })

    // Force Token Refresh to prevent stale auth hangs
    const { auth } = await import('../firebase/config')
    if (auth.currentUser) {
      console.log('Refreshing token...')
      await auth.currentUser.getIdToken(true)
    }

    if (editingId.value) {
      // Update existing
      console.log('Calling updateProject...')
      await updateProject(editingId.value, payload)
      console.log('Update finished.')
      message.value = { type: 'success', text: 'Project updated successfully!' }
    } else {
      // Create new
      console.log('Calling addProject...')
      await addProject(payload)
      console.log('Create finished.')
      message.value = { type: 'success', text: 'Project created successfully!' }
    }

    // Clear form and success message after a brief delay
    setTimeout(() => {
       message.value = null
       resetForm()
    }, 1500)

  } catch (e: any) {
    console.error(e)
    message.value = { type: 'error', text: e.message || 'Failed to save project' }
  } finally {
    isSubmitting.value = false
  }
}

const handleEdit = (project: any) => {
  editingId.value = project.id
  message.value = null // Clear previous messages
  
  newProject.value = {
    title: project.title || '',
    description: project.description || '',
    category: project.category || 'Web',
    tags: (project.tags || []).join(', '),
    image: project.image || '',
    link: project.link || ''
  }
  // Scroll to top of form
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const resetForm = () => {
  editingId.value = null
  newProject.value = { title: '', description: '', category: 'Web', tags: '', image: '', link: '' }
}

const handleDelete = async (id: string) => {
  if (confirm('Are you sure you want to delete this project?')) {
    await deleteProject(id)
    if (editingId.value === id) {
      resetForm()
    }
  }
}

// Profile Actions
const handleUpdateProfile = async () => {
  isSubmitting.value = true
  message.value = null
  try {
    const payload = {
       name: profile.value.name || '',
       tagline: profile.value.tagline || '',
       description: profile.value.description || '',
       image: profile.value.image || '',
       resumeLink: profile.value.resumeLink || '',
       email: profile.value.email || ''
    }
    await updateProfile(payload)
    message.value = { type: 'success', text: 'Profile updated successfully!' }
    setTimeout(() => { message.value = null }, 2000)
  } catch (e: any) {
    console.error(e)
    message.value = { type: 'error', text: 'Failed to update profile' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white font-display">
          Admin Dashboard
        </h1>
        <button @click="handleLogout" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium transition-colors">
          Logout
        </button>
      </div>

      <!-- Tabs -->
      <div class="flex space-x-4 mb-8 border-b border-gray-200 dark:border-slate-700">
        <button 
          @click="activeTab = 'projects'"
          :class="['pb-2 px-1 text-sm font-medium border-b-2 transition-colors', activeTab === 'projects' ? 'border-black dark:border-white text-black dark:text-white' : 'border-transparent text-gray-500 hover:text-gray-700']"
        >
          Projects
        </button>
        <button 
          @click="activeTab = 'profile'"
          :class="['pb-2 px-1 text-sm font-medium border-b-2 transition-colors', activeTab === 'profile' ? 'border-black dark:border-white text-black dark:text-white' : 'border-transparent text-gray-500 hover:text-gray-700']"
        >
          Profile & Hero
        </button>
      </div>

      <!-- PROJECTS TAB -->
      <div v-if="activeTab === 'projects'" class="grid lg:grid-cols-3 gap-8">
        <!-- Add/Edit Project Form -->
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 h-fit sticky top-24">
          <div class="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-slate-700 pb-2">
             <h2 class="text-xl font-bold text-gray-900 dark:text-white">
               {{ editingId ? 'Edit Project' : 'Add New Project' }}
             </h2>
           <button v-if="editingId" @click="resetForm" class="text-xs text-gray-500 hover:text-black dark:hover:text-white underline">
               Cancel
             </button>
          </div>
          
          <div v-if="message" :class="['p-4 mb-4 rounded-md text-sm font-medium', message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700']">
            {{ message.text }}
          </div>
          
          <form @submit.prevent="handleSubmitProject" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Title</label>
              <input v-model="newProject.title" type="text" required class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black dark:focus:ring-blue-500">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
              <select v-model="newProject.category" class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
                <option value="Web">Web Development</option>
                <option value="Mobile">Mobile App</option>
                <option value="Design">UI/UX Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
              <textarea v-model="newProject.description" required rows="3" class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black dark:focus:ring-blue-500"></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tags (comma separated)</label>
              <input v-model="newProject.tags" type="text" placeholder="Vue, Tailwind, TypeScript" class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black dark:focus:ring-blue-500">
            </div>

             <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Link URL</label>
              <input v-model="newProject.link" type="url" placeholder="https://..." class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black dark:focus:ring-blue-500">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
              <input v-model="newProject.image" type="text" placeholder="https://imgur.com/..." class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black dark:focus:ring-blue-500">
            </div>

            <button type="submit" :disabled="isSubmitting" :class="['w-full py-2 px-4 text-white font-bold rounded-md transition-colors', editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200']">
              {{ isSubmitting ? 'Saving...' : (editingId ? 'Update Project' : 'Add Project') }}
            </button>
          </form>
        </div>

        <!-- Project List -->
        <div class="lg:col-span-2 space-y-6">
          <div v-if="error" class="bg-red-100 text-red-700 p-4 rounded-md">
            {{ error }}
          </div>
          
          <div class="flex justify-between items-center">
             <h2 class="text-xl font-bold text-gray-900 dark:text-white">Existing Projects ({{ projects.length }})</h2>
          </div>

          <div v-if="projects.length === 0" class="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
            <p class="text-gray-500 dark:text-slate-400 italic">No projects found.</p>
          </div>

          <div v-for="project in projects" :key="project.id" :class="['flex gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border shadow-sm items-start transition-colors', editingId === project.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200 dark:border-slate-700']">
            <!-- Thumbnail -->
             <div class="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden flex items-center justify-center">
                 <img v-if="project.image && project.image.startsWith('http')" :src="project.image" class="w-full h-full object-cover" />
                 <span v-else class="material-symbols-outlined text-gray-400">image</span>
             </div>

             <!-- Info -->
             <div class="flex-grow">
               <h3 class="font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
               <p class="text-sm text-gray-500 dark:text-slate-400 mb-2">{{ project.description }}</p>
               <div class="flex flex-wrap gap-2 text-xs">
                 <span class="bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded text-gray-600 dark:text-slate-300">{{ project.category }}</span>
                 <span v-for="tag in project.tags" :key="tag" class="text-gray-500">#{{ tag }}</span>
               </div>
             </div>

             <!-- Actions -->
             <div class="flex flex-col gap-2">
               <button @click="handleEdit(project)" class="text-blue-500 hover:text-blue-700 p-2" title="Edit">
                 <span class="material-symbols-outlined">edit</span>
               </button>
               <button @click="handleDelete(project.id!)" class="text-red-500 hover:text-red-700 p-2" title="Delete">
                 <span class="material-symbols-outlined">delete</span>
               </button>
             </div>
          </div>
        </div>
      </div>

      <!-- PROFILE TAB -->
      <div v-else class="max-w-4xl mx-auto">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Edit Profile & Hero Section</h2>
          
          <form @submit.prevent="handleUpdateProfile" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Display Name / Title</label>
                <input v-model="profile.name" type="text" class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black">
                <p class="text-xs text-gray-500 mt-1">E.g. Product Designer</p>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input v-model="profile.email" type="email" class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black">
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tagline (Subtitle)</label>
              <input v-model="profile.tagline" type="text" class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black">
              <p class="text-xs text-gray-500 mt-1">Short slogan appearing below the name.</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
              <textarea v-model="profile.description" rows="4" class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black"></textarea>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
               <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Profile Image URL</label>
                <input v-model="profile.image" type="text" placeholder="https://..." class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black">
              </div>
              
               <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume Link URL</label>
                <input v-model="profile.resumeLink" type="text" placeholder="https://..." class="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-black">
              </div>
            </div>

            <div class="pt-4 border-t border-gray-100 dark:border-slate-700">
               <button type="submit" :disabled="isSubmitting" class="w-full md:w-auto px-8 py-3 bg-black dark:bg-blue-600 text-white font-bold rounded-md hover:opacity-90 transition-opacity">
                {{ isSubmitting ? 'Saving...' : 'Save Changes' }}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
