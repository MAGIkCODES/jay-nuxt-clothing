export default defineEventHandler( async () => {
    // You can access query parameters
    // const { name } = getQuery(event)

    // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const data = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_lzXJMuKUnBV8r9IjjIM1GKvFX54Jtxd9FQDd3AEQ')

    return { 
        data
        // message: `Hello, ${name}! you are ${age} years old.`
    }
})