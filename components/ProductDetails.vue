<template>
    <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Image -->
            <div class="p-4 md:p-7 flex justify-center">
                <img
                    :src="product.image"
                    alt="product image"
                    class="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
                />
            </div>

            <!-- Details -->
            <div class="p-4 md:p-7">
                <h2 class="text-2xl md:text-4xl my-4 md:my-7">{{ product.title }}</h2>
                <p class="text-lg md:text-xl my-4 md:my-7 font-semibold text-green-600">Price - ${{ product.price }}</p>
                <div class="text-gray-700 mb-4 md:mb-7 w-full border-b-2 border-gray-200 pb-4 md:pb-7">
                    <h3 class="font-bold">{{ product.description }}</h3>
                </div>
                <p class="mb-4 md:mb-7 inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">{{ product.category }}</p>
            </div>
  </div>
</div>

</template>

<script setup>
    const { product } = defineProps(['product']);

</script>

