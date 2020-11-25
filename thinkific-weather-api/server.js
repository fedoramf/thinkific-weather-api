const express = require('express')
const app = express()
const port = 3000
const weatherApi = require('./v1/weather-api.js')
//vars below was for deployment to Netlify
const router = express.Router();
const serverless = require('serverless-http');

app.get('/', (req, res) => {
  res.send('Hello Weather App!')
})

//Routes
app.use("/v1/weather", weatherApi)

//always specify the port to listen on
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);