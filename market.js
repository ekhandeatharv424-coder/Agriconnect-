// ======================================
// AgriConnect Live Market API
// ======================================

const API_KEY = "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b";

const RESOURCE_ID = "9ef84268-d588-465a-a308-a864a43d0070";

// ======================================

async function searchMarket() {

    const crop = document.getElementById("cropSearch").value.trim();

    if (crop === "") {
        alert("Please Enter Crop Name");
        return;
    }

    const result = document.getElementById("marketResult");

    result.style.display = "block";

    result.innerHTML = "<h2>Loading...</h2>";

    const url =
`https://api.data.gov.in/resource/${RESOURCE_ID}?api-key=${API_KEY}&format=json&limit=10&filters[commodity]=${encodeURIComponent(crop)}`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        if (!data.records || data.records.length === 0) {

            result.innerHTML = `
            <h2>❌ No Data Found</h2>
            <p>No market data available for <b>${crop}</b></p>
            `;

            return;

        }

        let html = `<h2>🌾 ${crop.toUpperCase()}</h2>`;

        data.records.forEach(item => {

            html += `

            <hr>

            <p><b>📍 Market :</b> ${item.market}</p>

            <p><b>🏙 District :</b> ${item.district}</p>

            <p><b>🌎 State :</b> ${item.state}</p>

            <p><b>💰 Min Price :</b> ₹${item.min_price}</p>

            <p><b>💰 Max Price :</b> ₹${item.max_price}</p>

            <p><b>💰 Modal Price :</b> ₹${item.modal_price}</p>

            <p><b>📅 Date :</b> ${item.arrival_date}</p>

            `;

        });

        result.innerHTML = html;

    }

    catch(error){

        console.log(error);

        result.innerHTML = `
        <h2>Server Error</h2>
        <p>Please Try Again.</p>
        `;

    }

}
// ======================================
// RESET
// ======================================

function resetMarket() {

    document.getElementById("cropSearch").value = "";

    document.getElementById("marketResult").style.display = "none";

    document.getElementById("marketResult").innerHTML =
    "<h2>Market Information</h2><p>Search a crop to view market details.</p>";

}

// ======================================
// ENTER KEY SEARCH
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("cropSearch");

    if (input) {

        input.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {

                searchMarket();

            }

        });

    }

});

// ======================================
// DOWNLOAD PDF
// ======================================

async function downloadMarketPDF() {

    const result =
    document.getElementById("marketResult").innerText;

    if (result.includes("Search a crop")) {

        alert("Search Market First");

        return;

    }

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.setFontSize(18);

    pdf.text("AgriConnect Live Market Report",15,20);

    const lines =
    pdf.splitTextToSize(result,180);

    pdf.setFontSize(12);

    pdf.text(lines,15,35);

    pdf.save("Market_Report.pdf");

}

// ======================================
// AUTOCOMPLETE
// ======================================

const cropSuggestions = [

"Tomato",
"Onion",
"Potato",
"Wheat",
"Rice",
"Maize",
"Soybean",
"Cotton",
"Groundnut",
"Banana",
"Grapes",
"Mango",
"Papaya",
"Pomegranate",
"Orange",
"Tur",
"Moong",
"Urad",
"Jowar",
"Bajra",
"Chilli"

];

const input =
document.getElementById("cropSearch");

if(input){

input.setAttribute("list","cropList");

const dataList =
document.createElement("datalist");

dataList.id="cropList";

cropSuggestions.forEach(function(crop){

const option =
document.createElement("option");

option.value=crop;

dataList.appendChild(option);

});

document.body.appendChild(dataList);

}