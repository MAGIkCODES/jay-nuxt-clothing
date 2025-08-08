<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto flex justify-between items-center p-4">
                <NuxtLink to="/products" class="font-bold">Jay Clothing Brand</NuxtLink>
            </nav> 
        </header>

        <!-- This is where the page content will be rendered -->
        <div class="container mx-auto p-4">
            <!-- <slot /> -->
            <NuxtPage />
        </div>

        <footer class="container flex justify-center mx-auto bg-gray-100 p-4 mt-8 border-t-2">
            <ul class="flex space-x-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    
</style>