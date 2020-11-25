const express = require('express')
const app = express()
const port = 3000
const weather = require('./v1/weather.js')

app.get('/', (req, res) => {
  res.send('Hello Weather App!')
})

//Routes
app.use("/v1/weather", weather)

//always specify the port to listen on
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})