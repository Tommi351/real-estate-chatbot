const express = require('express')
const app = express()
const port = 5000

app.use(() => {
     console.log('WE GOT A NEW REQUEST!')
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})