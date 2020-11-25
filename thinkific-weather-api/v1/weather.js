const express = require('express');
const router = express.Router();
const sanitizer = require('sanitizer')
const weatherData = require('../src/data.js')

getWeatherData = (cityName) => {
    return weatherData.data.filter(city => city.cityName == cityName);
}

router.get('/', (req, res)=>{
    //sanitize data coming in
    const cityName = sanitizer.sanitize(req.query.city);
    //check if the query param was sent in
    if(cityName){
        try{
            //perhaps here would be where the DB call would be made to get the data
            const weatherData = getWeatherData(cityName);
            //validate weather data
            if (weatherData.length != 0) {
                res.send(JSON.stringify(weatherData));
            } else {
                //we dont have the data for that city or its misspelled
                res.status(400).send(`No weather data availble for ${cityName}`);
            }
        }catch(error){
            res.status(500).send(`Internal Server Error: ${error}.`);
        }
        
    }else{
        res.status(400).send("No city specified as a query param.")
    }
    
})


module.exports = router;