<template>
    <div>
       <h2>About</h2> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam hic doloribus ducimus omnis nulla qui debitis tempora asperiores quo?</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam hic doloribus ducimus omnis nulla qui debitis tempora asperiores quo?</p>

       <div>
        <p>{{ data }}</p>
       </div>
    </div>
</template>

<script setup> 
    const { data } = await useFetch('/api/jay')
    
    // Example of using useFetch with a POST request
    // const { data } = await useFetch('/api/jay?name=jay', {
    //     method: 'post',
    //     body: {
    //         age: '30'
    //     }
    // })
</script>


<style scoped>
    h2 {
        margin-bottom: 20px;
        /* color: #333; */
        font-size: 2rem;
    }

    p {
        margin: 20px 0;
        line-height: 1.6;
    }
</style>