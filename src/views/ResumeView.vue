<script setup lang="ts">
</script>

<template>
  <div class="pt-32 min-h-screen bg-cream dark:bg-slate-900 text-gray-900 dark:text-white container mx-auto px-6 max-w-4xl transition-colors duration-300">
    <div class="bg-white dark:bg-slate-800 rounded-3xl p-12 border border-gray-200 dark:border-slate-700 text-center shadow-sm">
      <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        Resume / CV
      </h1>
      
      <p class="text-xl text-gray-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
        Download my resume to see a detailed history of my experience, skills, and education.
      </p>

      <div class="flex flex-col md:flex-row gap-6 justify-center">
        <a href="#" class="group px-8 py-4 bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-gray-200 dark:shadow-none flex items-center justify-center gap-3">
          <span class="material-symbols-outlined">download</span>
          <span>Download PDF</span>
        </a>
        
        <a href="#" class="group px-8 py-4 bg-white hover:bg-gray-50 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-xl font-bold transition-all border border-gray-300 dark:border-slate-600 hover:border-black dark:hover:border-white flex items-center justify-center gap-3 text-gray-900 dark:text-white">
          <span class="material-symbols-outlined text-gray-900 dark:text-white">visibility</span>
          <span>View Online</span>
        </a>
      </div>

      <div class="mt-16 text-left border-t border-gray-200 dark:border-slate-700 pt-12">
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Quick Overview</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-lg text-gray-900 dark:text-white">Senior Frontend Developer</h3>
              <p class="text-gray-500 dark:text-slate-400">Tech Corp Inc.</p>
            </div>
            <span class="text-sm text-gray-400 dark:text-slate-500">2023 - Present</span>
          </div>
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-lg text-gray-900 dark:text-white">Web Developer</h3>
              <p class="text-gray-500 dark:text-slate-400">Creative Agency</p>
            </div>
            <span class="text-sm text-gray-400 dark:text-slate-500">2021 - 2023</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
