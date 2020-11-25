'use strict'

const weatherBtn = document.getElementById("weatherBtn");
const weatherInfo = document.getElementById("weatherInfo");
const cityNameTextBox = document.getElementById("cityName");

weatherInfo.innerText = "Loading...";

weatherBtn.addEventListener("click", getWeatherData);

async function getWeatherData() {
    //grab the value in the text box
    let cityName = cityNameTextBox.value;
    const weatherUrl = "http://localhost:3000/v1/weather?city=";
    
    //check if cityName is valid
    if(!cityName){
        weatherInfo.innerText = "Error: No city name provided";
    }

    //make a call to the endpoint
    try{
        const response = await fetch(`${weatherUrl}${cityName}`, {mode: 'no-cors'});
        //TODO: Bug - hitting a cors issue here
        if(response.ok){
            const data = await response.json();
            let weatherData = data[0];
            weatherInfo.innerText = JSON.stringify(weatherData);
        }else{
            weatherInfo.innerText = `Error getting data: ${response.status}.`
        }
    }catch(error){
        weatherInfo.innerText = `Error on client: ${error}.`
        console.error(error);
    }
}