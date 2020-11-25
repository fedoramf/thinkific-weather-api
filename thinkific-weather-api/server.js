const express = require('express')
const app = express()
const port = 3000
const weather = require('./v1/weather.js')
const router = express.Router();
const serverless = require('serverless-http');

app.get('/', (req, res) => {
  res.send('Hello Weather App!')
})

//Routes
app.use("/v1/weather", weather)

//always specify the port to listen on
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);