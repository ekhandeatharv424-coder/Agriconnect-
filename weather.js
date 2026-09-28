// =====================================
// AgriConnect Smart Weather
// weather.js
// =====================================

const API_KEY = "5356a797691b0039140a943e9da55b43";

let currentLocation = "Nashik";

// =====================================
// GET WEATHER USING LATITUDE & LONGITUDE
// =====================================

async function getWeatherByCoordinates(lat, lon, locationName = "") {

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather API Error");
        }

        const data = await response.json();

        // Location
        document.getElementById("location").textContent =
            locationName ||
            `${data.name}, ${data.sys.country}`;

        // Temperature
        document.getElementById("temperature").textContent =
            Math.round(data.main.temp) + " °C";

        // Condition
        document.getElementById("condition").textContent =
            data.weather[0].description;

        // Humidity
        document.getElementById("humidity").textContent =
            data.main.humidity + " %";

        // Wind
        document.getElementById("wind").textContent =
            data.wind.speed + " m/s";

    }

    catch (error) {

        console.error(error);

        document.getElementById("location").textContent = "--";
        document.getElementById("temperature").textContent = "--";
        document.getElementById("condition").textContent = "--";
        document.getElementById("humidity").textContent = "--";
        document.getElementById("wind").textContent = "--";

        alert("Weather data मिळाला नाही. Location पुन्हा check करा.");
    }
}


// =====================================
// SEARCH LOCATION
// =====================================

async function searchLocation() {

    const input = document.getElementById("cityInput");

    if (!input) return;

    const value = input.value.trim();

    if (value.length === 0) {

        alert("Please enter city / village / area / PIN code.");
        input.focus();

        return;
    }

    currentLocation = value;

    // Loading
    document.getElementById("location").textContent = "Searching...";
    document.getElementById("temperature").textContent = "--";
    document.getElementById("condition").textContent = "Loading...";
    document.getElementById("humidity").textContent = "--";
    document.getElementById("wind").textContent = "--";


    try {

        // =====================================
        // STEP 1: GEOCODING
        // =====================================

        let geoURL;

        // PIN CODE SEARCH
        if (/^\d{6}$/.test(value)) {

            geoURL =
                `https://api.openweathermap.org/geo/1.0/zip?zip=${value},IN&appid=${API_KEY}`;

        }

        // CITY / VILLAGE / AREA SEARCH
        else {

            geoURL =
                `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(value)},IN&limit=5&appid=${API_KEY}`;

        }


        const geoResponse = await fetch(geoURL);

        if (!geoResponse.ok) {
            throw new Error("Location not found");
        }

        const geoData = await geoResponse.json();


        // =====================================
        // PIN CODE RESULT
        // =====================================

        if (/^\d{6}$/.test(value)) {

            if (!geoData.lat || !geoData.lon) {

                throw new Error("PIN location not found");

            }

            const locationName =
                `${geoData.name || value}, India`;

            await getWeatherByCoordinates(
                geoData.lat,
                geoData.lon,
                locationName
            );

            return;
        }


        // =====================================
        // CITY / VILLAGE RESULT
        // =====================================

        if (!geoData || geoData.length === 0) {

            throw new Error(
                "Location not found"
            );
        }


        // First matching location
        const place = geoData[0];

        const lat = place.lat;
        const lon = place.lon;

        const locationName =
            `${place.name}${place.state ? ", " + place.state : ""}, India`;


        // =====================================
        // STEP 2: GET WEATHER
        // =====================================

        await getWeatherByCoordinates(
            lat,
            lon,
            locationName
        );

    }

    catch (error) {

        console.error(error);

        document.getElementById("location").textContent =
            "Location Not Found";

        document.getElementById("temperature").textContent =
            "--";

        document.getElementById("condition").textContent =
            "--";

        document.getElementById("humidity").textContent =
            "--";

        document.getElementById("wind").textContent =
            "--";

        alert(
            "ही location OpenWeather मध्ये सापडली नाही.\n\n" +
            "Village / Area चे नाव किंवा 6-digit PIN code try करा."
        );
    }
}


// =====================================
// OLD FUNCTION SUPPORT
// =====================================

function changeCity() {

    searchLocation();

}


// =====================================
// ENTER KEY SUPPORT
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const input =
        document.getElementById("cityInput");

    if (input) {

        input.addEventListener(
            "keypress",
            function (e) {

                if (e.key === "Enter") {

                    searchLocation();

                }

            }
        );

    }


    // =====================================
    // DEFAULT LOCATION
    // =====================================

    searchLocationByName("Nashik");

});


// =====================================
// DEFAULT LOCATION SEARCH
// =====================================

async function searchLocationByName(placeName) {

    try {

        const geoURL =
            `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(placeName)},IN&limit=5&appid=${API_KEY}`;

        const response =
            await fetch(geoURL);

        if (!response.ok) {

            throw new Error("Location error");

        }

        const data =
            await response.json();

        if (!data || data.length === 0) {

            throw new Error("Location not found");

        }

        const place = data[0];

        await getWeatherByCoordinates(
            place.lat,
            place.lon,
            `${place.name}${place.state ? ", " + place.state : ""}, India`
        );

    }

    catch (error) {

        console.error(error);

        document.getElementById("location").textContent =
            "Nashik";

    }

}