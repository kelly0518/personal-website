<script setup lang="ts">
</script>

<template>
  <section id="about" class="py-24 bg-cream dark:bg-slate-900 text-gray-900 dark:text-white relative transition-colors duration-300">
    <div class="container mx-auto px-6 max-w-6xl">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium bg-gray-200/50 dark:bg-slate-800/50 px-4 py-1.5 rounded-full w-fit">
            <span class="material-symbols-outlined text-sm">person</span>
            About Me
          </div>
          <h2 class="text-4xl font-bold font-display text-gray-900 dark:text-white">Passionate about creating purposeful software.</h2>
          <p class="text-gray-600 dark:text-slate-400 leading-relaxed text-lg">
            I am a dedicated developer based in [Location], specializing in building exceptional web applications. With a strong foundation in [Tech Stack], I love to turn complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <div class="pt-4">
             <div class="grid grid-cols-2 gap-6">
                <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <h3 class="text-3xl font-bold text-black dark:text-white mb-1">3+</h3>
                  <p class="text-gray-500 dark:text-slate-400 text-sm">Years Experience</p>
                </div>
                <div class="p-4 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <h3 class="text-3xl font-bold text-black dark:text-white mb-1">20+</h3>
                  <p class="text-gray-500 dark:text-slate-400 text-sm">Projects Completed</p>
                </div>
             </div>
          </div>
        </div>

        <!-- Visual/Image -->
        <div class="relative">
             <div class="absolute -inset-4 bg-gray-200 dark:bg-slate-800 rounded-2xl opacity-50 blur-xl"></div>
             <div class="relative aspect-square rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 overflow-hidden flex items-center justify-center shadow-sm transition-colors duration-300">
                <!-- Replace with actual Image later -->
                <span class="material-symbols-outlined text-9xl text-gray-300 dark:text-slate-600">terminal</span>
             </div>
        </div>
      </div>
    </div>
  </section>
</template>
