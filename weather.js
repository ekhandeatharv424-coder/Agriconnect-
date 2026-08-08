// =====================================
// AgriConnect Live Weather
// weather.js
// =====================================

const API_KEY = "5356a797691b0039140a943e9da55b43";

let city = "Nashik";

// Get Weather
async function getWeather() {

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("location").textContent =
            data.name + ", " + data.sys.country;

        document.getElementById("temperature").textContent =
            data.main.temp + " °C";

        document.getElementById("condition").textContent =
            data.weather[0].main;

        document.getElementById("humidity").textContent =
            data.main.humidity + " %";

        document.getElementById("wind").textContent =
            data.wind.speed + " m/s";

    }

    catch (error) {

        console.error(error);

        alert("Unable to fetch weather. Check city name or internet connection.");

        document.getElementById("location").textContent = "--";
        document.getElementById("temperature").textContent = "--";
        document.getElementById("condition").textContent = "--";
        document.getElementById("humidity").textContent = "--";
        document.getElementById("wind").textContent = "--";
    }

}

// Search City
function changeCity() {

    const input = document.getElementById("cityInput");

    if (!input) return;

    const value = input.value.trim();

    if (value.length === 0) {
        alert("Please enter a city name.");
        input.focus();
        return;
    }

    city = value;
    getWeather();
}

// Enter key support
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("cityInput");

    if (input) {

        input.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {
                changeCity();
            }

        });

    }

    getWeather();

});