<template>
  <section class="min-h-screen flex items-center relative overflow-hidden bg-cream dark:bg-slate-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content: Text -->
        <div class="text-left z-10">
          <h1 class="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight font-display leading-tight">
            Product<br>Designer
          </h1>
          <p class="text-xl text-gray-500 dark:text-slate-400 mb-8 max-w-md font-light">
            Crafting intuitive and beautiful digital experiences that solve real problems.
          </p>
          
          <div class="flex gap-4">
            <a href="#projects" class="px-8 py-3 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-gray-200 dark:shadow-none flex items-center gap-2">
              View Work
              <span class="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
            <a href="#contact" class="px-8 py-3 bg-transparent border border-gray-300 dark:border-slate-700 hover:border-black dark:hover:border-white text-gray-900 dark:text-white rounded-full font-medium transition-all">
              Contact Me
            </a>
          </div>
        </div>

        <!-- Right Content: Image Placeholder -->
        <div class="relative z-10 flex justify-center md:justify-end">
          <div class="relative w-full max-w-md aspect-[4/5] bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden flex items-center justify-center group transition-colors duration-300">
            <!-- Decorative Elements -->
             <div class="absolute inset-0 bg-gray-50 dark:bg-slate-900/50 opacity-50"></div>
             
             <!-- Placeholder Icon/Text -->
             <div class="text-center z-10 transition-transform duration-700 group-hover:scale-105">
                <span class="material-symbols-outlined text-8xl text-gray-300 dark:text-slate-600 mb-4">image</span>
                <p class="text-gray-400 dark:text-slate-500 font-medium">Image Placeholder</p>
             </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white dark:bg-blue-600/10 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gray-100 dark:bg-purple-600/10 rounded-full blur-3xl opacity-60 translate-x-1/4 translate-y-1/4"></div>
    </div>
  </section>
</template>

<style scoped>
/* Add any custom animations here if tailwind animate-pulse isn't enough */
</style>
