<template>
  <div>
    <div
      v-if="pending"
      class="flex items-center justify-center text-center py-10"
      aria-busy="true"
    >
      <svg
        class="animate-spin h-8 w-8 text-green-500 mb-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="status"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>

    <!-- Products grid -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ProductCard } from '#components';

definePageMeta({
  layout: "products",
});

const {
  data: products,
  pending,
  error,
} = await useFetch("https://fakestoreapi.com/products", {
  key: "products",
  lazy: true, 
});

// Console log the products when they are fetched
// if (products.value) {
//   console.log("Fetched products:", products.value);
// }

if (error.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: "Products not found" 
  });
}


</script>

<style scoped>
h2 {
  font-size: 2rem;
}
</style>
