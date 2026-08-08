// ======================================
// AgriConnect AI Chatbot
// chatbot.js
// ======================================

function chatbot() {

    let question = prompt("👨‍🌾 Welcome to AgriConnect AI\n\nAsk your farming question:");

    if (question === null || question.trim() === "") {
        return;
    }

    question = question.toLowerCase().trim();

    let answer = "";

    // ==========================
    // Market Prices
    // ==========================

    if (question.includes("tomato")) {
        answer = "🍅 Tomato Price : ₹2500 per Quintal";
    }

    else if (question.includes("onion")) {
        answer = "🧅 Onion Price : ₹3000 per Quintal";
    }

    else if (question.includes("potato")) {
        answer = "🥔 Potato Price : ₹1800 per Quintal";
    }

    else if (question.includes("rice")) {
        answer = "🌾 Rice Price : ₹2800 per Quintal";
    }

    else if (question.includes("wheat")) {
        answer = "🌾 Wheat Price : ₹2200 per Quintal";
    }

    else if (question.includes("maize")) {
        answer = "🌽 Maize Price : ₹2100 per Quintal";
    }

    else if (question.includes("soybean")) {
        answer = "🌱 Soybean Price : ₹4500 per Quintal";
    }

    else if (question.includes("cotton")) {
        answer = "🧵 Cotton Price : ₹7200 per Quintal";
    }

    // ==========================
    // Weather
    // ==========================

    else if (
        question.includes("weather") ||
        question.includes("temperature") ||
        question.includes("rain")
    ) {

        answer =
        "🌤 Today's Weather\n\nTemperature : 28°C\nCondition : Sunny\nHumidity : 60%\nWind : 12 km/h";

    }

    // ==========================
    // Fertilizer
    // ==========================

    else if (question.includes("fertilizer")) {

        answer =
        "🌱 Fertilizer Recommendation\n\nUse fertilizer according to Soil Test.\n\n✔ NPK\n✔ Urea\n✔ DAP\n✔ Organic Compost";

    }

    // ==========================
    // Crop Disease
    // ==========================

    else if (
        question.includes("disease") ||
        question.includes("leaf") ||
        question.includes("pest")
    ) {

        answer =
        "🦠 Crop Disease Advice\n\nUpload Crop Image from Disease Detection Page.";

    }

    // ==========================
    // Government Schemes
    // ==========================

    else if (question.includes("scheme")) {

        answer =
        "🏛 Government Schemes\n\n1. PM Kisan\n2. PM Fasal Bima\n3. Kisan Credit Card\n4. e-NAM\n5. Soil Health Card\n\nOpen Government Scheme Page for Apply.";

    }

    // ==========================
    // Greetings
    // ==========================

    else if (
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("namaste")
    ) {

        answer =
        "🙏 Hello Farmer!\n\nHow can I help you today?";

    }

    // ==========================
    // Help
    // ==========================

    else if (question.includes("help")) {

        answer =
        "✅ You can ask:\n\n• Tomato Price\n• Weather\n• Fertilizer\n• Government Scheme\n• Disease\n• Wheat Price\n• Cotton Price";

    }

    // ==========================
    // Default
    // ==========================

    else {

        answer =
        "❌ Sorry!\n\nI don't have information about this.\n\nTry asking:\n\nTomato Price\nWeather\nFertilizer\nGovernment Scheme";

    }

    alert(answer);

}