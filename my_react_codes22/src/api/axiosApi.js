let url = 'https://jsonplaceholder.typicode.com/posts'
const axios  = require('axios')
axios.get(url).then((response)=>{
    console.log(response.data[0])
})