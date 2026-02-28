<template>
  <div class="bg-card rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
    
    <img :src="project.image" class="w-full h-40 object-cover" />

    <div class="p-5">
      <h3 class="text-xl font-semibold mb-2">
        {{ project.title }}
      </h3>

      <p class="text-gray-400 mb-4">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="t in project.tech"
          :key="t"
          class="bg-gray-800 px-2 py-1 rounded text-xs"
        >
          {{ t }}
        </span>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
</script>