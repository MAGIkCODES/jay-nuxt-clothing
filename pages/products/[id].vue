<template>
    <div>
       <h4>product details for {{ id }}</h4> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam hic doloribus ducimus omnis nulla qui debitis tempora asperiores quo?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params;

    definePageMeta({
        layout: 'products'
    })
</script>


<style scoped>
    h4 {
        margin-bottom: 20px;
        /* color: #333; */
        font-size: 2rem;
    }

    p {
        margin: 20px 0;
        line-height: 1.6;
    }
</style>