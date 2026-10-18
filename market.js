// ======================================================
// AGRICONNECT - LIVE AGRICULTURAL MARKET
// ======================================================

const API_KEY =
"579b464db66ec23bdd000001128a8d3c566a491a552c5b8d7693d05c";

const RESOURCE_ID =
"9ef84268-d588-465a-a308-a864a43d0070";

let currentRecords = [];


// ======================================================
// SEARCH MARKET
// ======================================================

async function searchMarket() {

    const input =
        document.getElementById("cropSearch");

    const result =
        document.getElementById("marketResult");


    if (!input || !result) {

        alert("Market page elements not found.");
        return;

    }


    const crop =
        input.value.trim();


    if (crop === "") {

        alert("Please enter crop name.");
        input.focus();
        return;

    }


    // ==========================================
    // LOADING
    // ==========================================

    result.style.display = "block";

    result.innerHTML = `

        <div style="
            text-align:center;
            padding:30px;
        ">

            <div style="
                font-size:45px;
            ">
                🔄
            </div>

            <h2>
                Loading Market Rates...
            </h2>

            <p>
                Finding multiple markets for
                <b>${escapeHTML(crop)}</b>
            </p>

            <p style="color:#777;">
                Please wait...
            </p>

        </div>

    `;


    currentRecords = [];


    try {

        // ==========================================
        // SINGLE API REQUEST
        // ==========================================

        const url =
            `https://api.data.gov.in/resource/${RESOURCE_ID}` +
            `?api-key=${API_KEY}` +
            `&format=json` +
            `&limit=100` +
            `&filters[commodity]=${encodeURIComponent(crop)}`;


        console.log("Market API:", url);


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "API Error " + response.status
            );

        }


        const data =
            await response.json();


        console.log("Market API Response:", data);


        if (
            !data ||
            !Array.isArray(data.records) ||
            data.records.length === 0
        ) {

            result.innerHTML = `

                <div style="
                    text-align:center;
                    padding:30px;
                ">

                    <h2>
                        ❌ No Market Data Found
                    </h2>

                    <p>
                        No market data found for
                        <b>${escapeHTML(crop)}</b>.
                    </p>

                    <p style="color:#777;">
                        Try:
                        Tomato, Onion, Potato,
                        Wheat, Rice, Soybean
                    </p>

                </div>

            `;

            return;

        }


        // ==========================================
        // REMOVE DUPLICATES
        // ==========================================

        currentRecords =
            removeDuplicates(data.records);


        // ==========================================
        // DISPLAY
        // ==========================================

        displayMarketResults(
            crop,
            currentRecords
        );


    }

    catch(error) {

        console.error(
            "Market API Error:",
            error
        );


        result.innerHTML = `

            <div style="
                text-align:center;
                padding:30px;
            ">

                <h2>
                    ⚠️ Market API Error
                </h2>

                <p>
                    Market data load होत नाही.
                </p>

                <p style="color:#777;">
                    Internet connection किंवा
                    Government API temporarily unavailable.
                </p>

                <button
                    onclick="searchMarket()"
                    style="
                        padding:12px 25px;
                        background:#2e7d32;
                        color:white;
                        border:none;
                        border-radius:8px;
                        cursor:pointer;
                    "
                >
                    🔄 Try Again
                </button>

            </div>

        `;

    }

}


// ======================================================
// REMOVE DUPLICATES
// ======================================================

function removeDuplicates(records) {

    const unique = [];

    const seen = new Set();


    records.forEach(function(item) {

        const key =
            `${item.market || ""}|` +
            `${item.district || ""}|` +
            `${item.state || ""}|` +
            `${item.variety || ""}|` +
            `${item.arrival_date || ""}`;


        if (!seen.has(key)) {

            seen.add(key);

            unique.push(item);

        }

    });


    return unique;

}


// ======================================================
// DISPLAY MULTIPLE MARKET RESULTS
// ======================================================

function displayMarketResults(
    crop,
    records
) {

    const result =
        document.getElementById("marketResult");


    let html = `

        <div style="
            background:#e8f5e9;
            padding:20px;
            border-radius:14px;
            margin-bottom:20px;
            text-align:center;
        ">

            <h2 style="
                color:#1b5e20;
                margin:0 0 10px;
            ">

                🌾 ${escapeHTML(
                    crop.toUpperCase()
                )}

            </h2>

            <p style="margin:0;">

                📊
                <b>${records.length}</b>
                market records found

            </p>

        </div>

    `;


    // ==================================================
    // MARKET CARDS
    // ==================================================

    records.forEach(function(item, index) {


        const market =
            item.market || "Market Not Available";


        const district =
            item.district || "District Not Available";


        const state =
            item.state || "State Not Available";


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

            <div style="
                background:white;
                margin:15px 0;
                padding:22px;
                border-radius:15px;
                box-shadow:0 4px 15px
                    rgba(0,0,0,0.10);
                border-left:6px solid #2e7d32;
            ">


                <h3 style="
                    color:#1b5e20;
                    margin-top:0;
                ">

                    📍 ${index + 1}.
                    ${escapeHTML(market)}

                </h3>


                <p>

                    🏙️
                    <b>District:</b>
                    ${escapeHTML(district)}

                </p>


                <p>

                    🌎
                    <b>State:</b>
                    ${escapeHTML(state)}

                </p>


                <p>

                    🌱
                    <b>Variety:</b>
                    ${escapeHTML(variety)}

                </p>


                <p>

                    ⭐
                    <b>Grade:</b>
                    ${escapeHTML(grade)}

                </p>


                <hr>


                <div style="
                    display:grid;
                    grid-template-columns:
                    repeat(auto-fit,minmax(150px,1fr));
                    gap:10px;
                ">


                    <div style="
                        background:#f1f8e9;
                        padding:15px;
                        border-radius:10px;
                    ">

                        <small>
                            Minimum Price
                        </small>

                        <br>

                        <b style="
                            color:#2e7d32;
                            font-size:18px;
                        ">

                            ₹${escapeHTML(
                                minPrice
                            )}

                        </b>

                    </div>


                    <div style="
                        background:#fff8e1;
                        padding:15px;
                        border-radius:10px;
                    ">

                        <small>
                            Modal Price
                        </small>

                        <br>

                        <b style="
                            color:#ef6c00;
                            font-size:18px;
                        ">

                            ₹${escapeHTML(
                                modalPrice
                            )}

                        </b>

                    </div>


                    <div style="
                        background:#ffebee;
                        padding:15px;
                        border-radius:10px;
                    ">

                        <small>
                            Maximum Price
                        </small>

                        <br>

                        <b style="
                            color:#c62828;
                            font-size:18px;
                        ">

                            ₹${escapeHTML(
                                maxPrice
                            )}

                        </b>

                    </div>


                </div>


                <p style="
                    margin-bottom:0;
                    margin-top:15px;
                    color:#666;
                ">

                    📅
                    <b>Arrival Date:</b>
                    ${escapeHTML(date)}

                </p>


            </div>

        `;

    });


    // ==================================================
    // FOOTER
    // ==================================================

    html += `

        <div style="
            text-align:center;
            padding:20px;
            color:#666;
        ">

            <p>
                🌾 Data provided by
                Government Market API
            </p>

            <p style="font-size:13px;">
                Showing records returned by
                the official market dataset.
            </p>

        </div>

    `;


    result.innerHTML = html;

}


// ======================================================
// RESET MARKET
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

        result.style.display = "block";


        result.innerHTML = `

            <div style="
                text-align:center;
                padding:25px;
            ">

                <h2>
                    💰 Market Information
                </h2>

                <p>
                    Search a crop to view
                    multiple market rates.
                </p>

            </div>

        `;

    }


    currentRecords = [];

}


// ======================================================
// ENTER KEY
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById(
                "cropSearch"
            );


        if (input) {

            input.addEventListener(
                "keypress",
                function(event) {

                    if (
                        event.key === "Enter"
                    ) {

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
        document.getElementById(
            "marketResult"
        );


    if (
        !result ||
        currentRecords.length === 0
    ) {

        alert(
            "Please search market first."
        );

        return;

    }


    if (
        typeof window.jspdf ===
        "undefined"
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


    let y = 32;


    currentRecords.forEach(
        function(item, index) {

            const text =
                `${index + 1}. ${item.market || "N/A"} | ` +
                `${item.district || "N/A"} | ` +
                `Min: ₹${item.min_price || "N/A"} | ` +
                `Modal: ₹${item.modal_price || "N/A"} | ` +
                `Max: ₹${item.max_price || "N/A"}`;


            const lines =
                pdf.splitTextToSize(
                    text,
                    180
                );


            if (y > 270) {

                pdf.addPage();

                y = 20;

            }


            pdf.text(
                lines,
                15,
                y
            );


            y +=
                8 * lines.length;

        }
    );


    pdf.save(
        "AgriConnect_Market_Report.pdf"
    );

}


// ======================================================
// CROP AUTOCOMPLETE
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
    function() {

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
            function(crop) {

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
// HTML ESCAPE
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