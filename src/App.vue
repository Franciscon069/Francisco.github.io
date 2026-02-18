<script setup>

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(Response => Response.json())
  .then(data => {
    console.log(data.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

</script>

<template>
  <div>
    <h1>Pokemon List</h1>
    
  </div>
</template>
