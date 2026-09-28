// ======================================================
// AGRICONNECT - LIVE AGRICULTURAL MARKET
// ======================================================

// API KEY
const API_KEY =
"579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b";

// DATA.GOV RESOURCE
const RESOURCE_ID =
"9ef84268-d588-465a-a308-a864a43d0070";

// API LIMIT PER REQUEST
const PAGE_SIZE = 10;

// Number of pages to fetch automatically
const INITIAL_PAGES = 10;

// Store current records
let currentRecords = [];


// ======================================================
// SEARCH MARKET
// ======================================================

async function searchMarket() {

    const input = document.getElementById("cropSearch");

    const result = document.getElementById("marketResult");

    if (!input || !result) {
        alert("Market page elements not found.");
        return;
    }

    const crop = input.value.trim();

    if (crop === "") {
        alert("Please Enter Crop Name");
        return;
    }

    result.style.display = "block";

    result.innerHTML = `
        <div style="text-align:center;padding:25px;">
            <h2>🔄 Loading Market Data...</h2>
            <p>Searching multiple markets for <b>${escapeHTML(crop)}</b></p>
        </div>
    `;

    currentRecords = [];

    try {

        // Fetch multiple pages
        const allRecords =
            await fetchMultiplePages(crop, INITIAL_PAGES);

        if (!allRecords || allRecords.length === 0) {

            result.innerHTML = `
                <div style="padding:25px;text-align:center;">
                    <h2>❌ No Data Found</h2>

                    <p>
                        No market data was found for
                        <b>${escapeHTML(crop)}</b>.
                    </p>

                    <p>
                        Try names such as:
                        Tomato, Onion, Potato, Wheat, Rice
                    </p>
                </div>
            `;

            return;
        }

        currentRecords = removeDuplicates(allRecords);

        displayMarketResults(
            crop,
            currentRecords
        );

    }

    catch (error) {

        console.error("Market API Error:", error);

        result.innerHTML = `
            <div style="padding:25px;text-align:center;">

                <h2>⚠️ Market API Error</h2>

                <p>
                    Unable to retrieve market information.
                </p>

                <p>
                    Please check your internet connection
                    and try again.
                </p>

            </div>
        `;
    }
}


// ======================================================
// FETCH MULTIPLE API PAGES
// ======================================================

async function fetchMultiplePages(crop, numberOfPages) {

    let allRecords = [];

    for (let page = 0; page < numberOfPages; page++) {

        const offset = page * PAGE_SIZE;

        const url =
            `https://api.data.gov.in/resource/${RESOURCE_ID}` +
            `?api-key=${API_KEY}` +
            `&format=json` +
            `&limit=${PAGE_SIZE}` +
            `&offset=${offset}` +
            `&filters[commodity]=${encodeURIComponent(crop)}`;

        try {

            const response = await fetch(url);

            if (!response.ok) {
                console.log(
                    "API response error:",
                    response.status
                );
                continue;
            }

            const data = await response.json();

            if (
                data &&
                Array.isArray(data.records)
            ) {

                allRecords =
                    allRecords.concat(data.records);

                console.log(
                    `Page ${page + 1}:`,
                    data.records.length,
                    "records"
                );

                // If fewer than 10 records,
                // probably reached the end.
                if (data.records.length < PAGE_SIZE) {
                    break;
                }
            }

        }

        catch (error) {

            console.log(
                `Error loading page ${page + 1}`,
                error
            );
        }
    }

    return allRecords;
}


// ======================================================
// REMOVE DUPLICATE MARKET RECORDS
// ======================================================

function removeDuplicates(records) {

    const unique = [];

    const seen = new Set();

    records.forEach(item => {

        const key =
            `${item.market || ""}|` +
            `${item.district || ""}|` +
            `${item.state || ""}|` +
            `${item.arrival_date || ""}`;

        if (!seen.has(key)) {

            seen.add(key);

            unique.push(item);
        }
    });

    return unique;
}


// ======================================================
// DISPLAY MARKET RESULTS
// ======================================================

function displayMarketResults(crop, records) {

    const result =
        document.getElementById("marketResult");

    let html = "";

    html += `
        <div class="market-header">

            <h2>🌾 ${escapeHTML(crop.toUpperCase())}</h2>

            <p>
                📊 Markets Found:
                <b>${records.length}</b>
            </p>

        </div>
    `;


    records.forEach((item, index) => {

        const market =
            item.market || "Not Available";

        const district =
            item.district || "Not Available";

        const state =
            item.state || "Not Available";

        const variety =
            item.variety || "Not Available";

        const grade =
            item.grade || "Not Available";

        const minPrice =
            item.min_price || "N/A";

        const maxPrice =
            item.max_price || "N/A";

        const modalPrice =
            item.modal_price || "N/A";

        const date =
            item.arrival_date || "Not Available";


        html += `

        <div class="market-card"
             style="
                background:#ffffff;
                margin:15px 0;
                padding:20px;
                border-radius:14px;
                box-shadow:0 4px 15px rgba(0,0,0,0.10);
                border-left:5px solid #2e7d32;
             ">

            <h3>
                📍 ${escapeHTML(market)}
            </h3>

            <p>
                <b>🏙 District:</b>
                ${escapeHTML(district)}
            </p>

            <p>
                <b>🌎 State:</b>
                ${escapeHTML(state)}
            </p>

            <p>
                <b>🌱 Variety:</b>
                ${escapeHTML(variety)}
            </p>

            <p>
                <b>⭐ Grade:</b>
                ${escapeHTML(grade)}
            </p>

            <hr>

            <p>
                <b>💰 Minimum Price:</b>
                ₹${escapeHTML(minPrice)}
            </p>

            <p>
                <b>💰 Maximum Price:</b>
                ₹${escapeHTML(maxPrice)}
            </p>

            <p>
                <b>💰 Modal Price:</b>
                ₹${escapeHTML(modalPrice)}
            </p>

            <p>
                <b>📅 Arrival Date:</b>
                ${escapeHTML(date)}
            </p>

        </div>

        `;

    });


    html += `

        <div style="
            text-align:center;
            padding:20px;
            margin-top:20px;
        ">

            <p style="color:#555;">
                Showing available records returned
                by the Government Market API.
            </p>

        </div>

    `;


    result.innerHTML = html;
}


// ======================================================
// RESET
// ======================================================

function resetMarket() {

    const input =
        document.getElementById("cropSearch");

    const result =
        document.getElementById("marketResult");

    if (input) {
        input.value = "";
    }

    if (result) {

        result.style.display = "none";

        result.innerHTML = `
            <h2>Market Information</h2>

            <p>
                Search a crop to view market details.
            </p>
        `;
    }

    currentRecords = [];
}


// ======================================================
// ENTER KEY SUPPORT
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById("cropSearch");

        if (input) {

            input.addEventListener(
                "keypress",
                function (event) {

                    if (event.key === "Enter") {

                        searchMarket();

                    }

                }
            );

        }

    }
);


// ======================================================
// PDF DOWNLOAD
// ======================================================

async function downloadMarketPDF() {

    const result =
        document.getElementById("marketResult");

    if (
        !result ||
        result.innerText.includes("Search a crop")
    ) {

        alert(
            "Please search a crop first."
        );

        return;
    }


    if (
        typeof window.jspdf === "undefined"
    ) {

        alert(
            "PDF library is not loaded."
        );

        return;
    }


    const { jsPDF } =
        window.jspdf;

    const pdf =
        new jsPDF();


    pdf.setFontSize(18);

    pdf.text(
        "AgriConnect Live Market Report",
        15,
        20
    );


    pdf.setFontSize(10);


    const text =
        result.innerText;


    const lines =
        pdf.splitTextToSize(
            text,
            180
        );


    pdf.text(
        lines,
        15,
        35
    );


    pdf.save(
        "AgriConnect_Market_Report.pdf"
    );
}


// ======================================================
// AUTOCOMPLETE CROPS
// ======================================================

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


// ======================================================
// CREATE AUTOCOMPLETE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const input =
            document.getElementById(
                "cropSearch"
            );

        if (!input) return;


        input.setAttribute(
            "list",
            "cropList"
        );


        const dataList =
            document.createElement(
                "datalist"
            );


        dataList.id =
            "cropList";


        cropSuggestions.forEach(
            function (crop) {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value =
                    crop;

                dataList.appendChild(
                    option
                );

            }
        );


        document.body.appendChild(
            dataList
        );

    }
);


// ======================================================
// SECURITY - HTML ESCAPE
// ======================================================

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}