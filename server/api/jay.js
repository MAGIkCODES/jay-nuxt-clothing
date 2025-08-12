export default defineEventHandler( async () => {
    const currencyApiKey = useRuntimeConfig().currencyApiKey

    // You can access query parameters
    // const { name } = getQuery(event)

    // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const data = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyApiKey}`)

    return { 
        data
        // message: `Hello, ${name}! you are ${age} years old.`
    }
})