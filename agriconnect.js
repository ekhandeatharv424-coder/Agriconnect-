// =================================
// AgriConnect Real Weather System
// weather.js
// =================================


// OpenWeather API Key

const API_KEY = "5356a797691b0039140a943e9da55b43";


// Default City

let city = "Nashik";


// Get Weather Function

function getWeather(){


let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

fetch(url)
.then(response => response.json())
.then(data => {

    console.log(data);

    document.getElementById("temperature").innerHTML =
    data.main.temp + "°C";

    document.getElementById("condition").innerHTML =
    data.weather[0].description;

    document.getElementById("location").innerHTML =
    data.name;

    document.getElementById("humidity").innerHTML =
    data.main.humidity + "%";

    document.getElementById("wind").innerHTML =
    data.wind.speed + " m/s";

})
.catch(error => {

    console.log(error);

    alert("Weather data not found");

});

then(response => response.json())


.then(data => {


console.log(data);


// Temperature

document.getElementById("temperature").innerHTML =
data.main.temp + "°C";


// Weather Condition

document.getElementById("condition").innerHTML =
data.weather[0].description;


// Location

document.getElementById("location").innerHTML =
data.name;


// Humidity

document.getElementById("humidity").innerHTML =
data.main.humidity + "%";


// Wind Speed

document.getElementById("wind").innerHTML =
data.wind.speed + " m/s";


})



.catch(error => {


console.log(error);

alert("Weather data not found");


});


}




// Change City Function

function changeCity(){


let newCity =
document.getElementById("cityInput").value;


if(newCity!=""){


city=newCity;

getWeather();


}


}




// Load Weather Automatically

window.onload=function(){

getWeather();

}