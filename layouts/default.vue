<template>
    <div>
        <header class="shadow-sm bg-white"> 
            <nav class="container mx-auto flex justify-between items-center p-4">
                <NuxtLink to="/" class="font-bold">Jay Clothing</NuxtLink>
                <ul class="flex space-x-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav> 
        </header>

        <!-- This is where the page content will be rendered -->
        <div class="container mx-auto p-4">
            <!-- <slot /> -->
            <NuxtPage />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color: #42b983;
    }
</style>