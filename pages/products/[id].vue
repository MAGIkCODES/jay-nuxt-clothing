<template>
  <div class="mx-auto p-6">
    <!-- Loading state -->
    <div
      v-if="pending"
      class="flex justify-center items-center py-10"
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
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>

    <!-- Product details -->
    <div
      v-else
      class="w-full bg-white shadow-md rounded-lg p-6 space-y-4 border border-gray-200"
    >
      <ProductDetails :product="product" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

definePageMeta({
  layout: "products",
});

const route = useRoute();

const { 
  data: product, 
  pending
} = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`,
  { 
    key: `product-${route.params.id}` 
  }
);

if (!product.value || Object.keys(product.value).length === 0) {
  throw createError({
    statusCode: 404,
    statusMessage: `Product not found: / ${route.params.id}`,
  });
}

</script>

<style scoped></style>
