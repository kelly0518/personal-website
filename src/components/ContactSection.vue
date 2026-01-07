<script setup lang="ts">
</script>

<template>
  <section id="contact" class="py-24 bg-cream dark:bg-slate-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
    <!-- Decor element -->
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-gray-200/50 dark:bg-slate-700/20 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 max-w-4xl relative z-10">
      <div class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-gray-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 text-center shadow-sm">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p class="text-gray-600 dark:text-slate-300 mb-8 max-w-xl mx-auto text-lg">
          I'm currently available for freelance projects and open to new opportunities. If you have an idea or just want to say hi, feel free to reach out!
        </p>
        
        <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:hello@example.com" class="px-8 py-3 bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-gray-200 dark:shadow-none flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">mail</span>
              Send an Email
            </a>
             <a href="#" class="px-8 py-3 bg-transparent border border-gray-300 dark:border-slate-600 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-full font-medium transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-sm">open_in_new</span>
              LinkedIn
            </a>
        </div>
      </div>
    </div>
  </section>
</template>
