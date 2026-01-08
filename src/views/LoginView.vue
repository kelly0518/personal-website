<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const isPending = ref(false)
const router = useRouter()

const handleSubmit = async () => {
  error.value = ''
  isPending.value = true
  
  try {
    await login(email.value, password.value)
    router.push('/admin')
  } catch (err: any) {
    console.error(err)
    // Show specific error code to help debugging
    error.value = `Login failed: ${err.code || err.message}`
  } finally {
    isPending.value = false
  }
}
</script>

<template>
  <div class="min-h-screen pt-24 pb-12 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cream dark:bg-slate-900 transition-colors duration-300">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white font-display">
        Admin Login
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white dark:bg-slate-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200 dark:border-slate-700">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required v-model="email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" required v-model="password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white sm:text-sm">
            </div>
          </div>

          <div v-if="error" class="text-red-600 text-sm text-center font-medium">
            {{ error }}
          </div>

          <div>
            <button type="submit" :disabled="isPending"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="isPending">Signing in...</span>
              <span v-else>Sign in</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
