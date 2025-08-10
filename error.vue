<template>
  <div class="m-7 max-w-sm mx-auto text-center card p-6">
    <p class="m-7 text-7xl font-bold text-green-600">{{ error.statusCode }}</p>
    <p class="m-7 text-6xl">Ooops.</p>
    <p class="m-7 text-green-600">{{ error.message }}</p>
    <button class="btn mt-4" @click="handleClearError">Go back to home</button>
  </div>
</template>

<script setup>
  defineProps(["error"]);

  const handleClearError = () => clearError({
    redirect: '/'
  });

  
</script>

<style scoped>
</style> 
