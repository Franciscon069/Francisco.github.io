<template>
  <section id="projects" class="bg-bg text-text py-20">
    <div class="max-w-6xl mx-auto px-6">

      <h2 class="text-3xl font-bold mb-10">
        Proyectos
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          :project="p"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue"
import { projects } from "../data/projects"
</script>