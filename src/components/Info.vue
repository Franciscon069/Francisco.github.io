<template>
  <div class="p-4"> 
    <div>
      <h1 class="text-2xl font-bold">Sobre mi: {{ name }}</h1>
    </div>

    <div class="my-4">
      <ul class="flex space-x-4 bg-gray-100 p-2 rounded">
        <li class="nav-bar">Vue</li>
        <li class="nav-bar">Laravel</li>
        <li class="nav-bar">React</li>
        <li class="nav-bar">Html</li>
        <li class="nav-bar">TailwindCss</li>
        <li class="nav-bar">Git</li>
        <li class="nav-bar">Python</li>
        <li class="nav-bar">JavaScript</li>
      </ul>
    </div>

    <div class="grid grid-flow-col grid-rows-3 gap-4">
      <div class="row-span-3 bg-blue-200 p-4">01</div>
      <div class="col-span-2 bg-green-200 p-4">02</div>
      <div class="col-span-2 row-span-2 bg-red-200 p-4">03</div>
    </div>
  </div>
</template>

<script setup>
const name = "Francisco Javier Hermosillo Aguila"
</script>