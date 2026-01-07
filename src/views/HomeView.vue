<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <!-- Show a preview of projects on Home, or just the Hero? 
         User asked for specific pages, so keeping Home mostly Hero + Intro.
         Reusing ProjectsSection for now but could limit it to "Featured" later. -->
    <ProjectsSection />
  </div>
</template>
