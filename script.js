// Image Preview
const cropImage = document.getElementById("cropImage");
const preview = document.getElementById("preview");

cropImage.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){
            preview.src = e.target.result;
            preview.style.display = "block";
        }

        reader.readAsDataURL(file);
    }

});

// Detect Crop Button
function detectCrop(){

    const result = document.querySelector(".result");

    result.innerHTML = `
        <h2>🌾 Crop : Tomato</h2>
        <h3>💰 Today's Price : ₹2500 / Quintal</h3>
        <h3>📍 Market : Lasalgaon</h3>
        <h3>🌦 Weather : 28°C</h3>
        <h3>🏛 Scheme : PM Kisan</h3>
    `;
}
function searchData(){

let value = document.getElementById("searchInput").value.toLowerCase();


if(value.includes("tomato")){

alert("🍅 Tomato Price: ₹2500 / Quintal");

}

else if(value.includes("pm kisan")){

alert("🏛 PM Kisan Samman Nidhi Scheme Available");

}

else{

alert("Information not found");

}

}