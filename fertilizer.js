// ======================================
// AgriConnect Fertilizer Recommendation
// fertilizer.js
// ======================================

function recommendFertilizer() {

const crop = document.getElementById("crop").value;
const soil = document.getElementById("soil").value;
const season = document.getElementById("season").value;

if(crop=="" || soil=="" || season==""){
alert("Please select Crop, Soil and Season.");
return;
}

let fertilizer="";
let quantity="";
let time="";
let irrigation="";
let advice="";

// ================= Crop Wise =================

switch(crop){

case "Tomato":
fertilizer="NPK 19:19:19";
quantity="50 Kg / Acre";
time="20 Days After Planting";
irrigation="Light Irrigation";
advice="Spray Micronutrients every 15 days.";
break;

case "Onion":
fertilizer="NPK 20:20:20";
quantity="45 Kg / Acre";
time="15 Days";
irrigation="Immediate Irrigation";
advice="Use Zinc if needed.";
break;

case "Potato":
fertilizer="DAP + Urea";
quantity="80 Kg / Acre";
time="25 Days";
irrigation="Keep Soil Moist";
advice="Avoid excess Nitrogen.";
break;

case "Rice":
fertilizer="Urea + DAP";
quantity="100 Kg / Acre";
time="Tillering Stage";
irrigation="Standing Water";
advice="Split Nitrogen into 3 doses.";
break;

case "Wheat":
fertilizer="Urea";
quantity="90 Kg / Acre";
time="21 Days";
irrigation="After Fertilizer";
advice="Apply before irrigation.";
break;

case "Maize":
fertilizer="NPK 20:20:0";
quantity="70 Kg / Acre";
time="25 Days";
irrigation="Medium";
advice="Use Zinc Sulphate.";
break;

case "Soybean":
fertilizer="DAP";
quantity="50 Kg / Acre";
time="At Sowing";
irrigation="Low";
advice="Don't overuse Nitrogen.";
break;

case "Cotton":
fertilizer="NPK 12:32:16";
quantity="75 Kg / Acre";
time="30 Days";
irrigation="Moderate";
advice="Apply Potash during flowering.";
break;

case "Sugarcane":
fertilizer="Urea + Potash";
quantity="120 Kg / Acre";
time="45 Days";
irrigation="Heavy";
advice="Split fertilizer application.";
break;

case "Banana":
fertilizer="NPK 10:26:26";
quantity="100 Kg / Acre";
time="Every 30 Days";
irrigation="Drip Recommended";
advice="Add Organic Compost.";
break;

case "Mango":
fertilizer="Organic Compost + NPK";
quantity="25 Kg / Tree";
time="Before Flowering";
irrigation="Deep";
advice="Prune dead branches.";
break;

case "Grapes":
fertilizer="NPK 19:19:19";
quantity="60 Kg / Acre";
time="Before Fruiting";
irrigation="Controlled";
advice="Maintain proper pruning.";
break;

case "Groundnut":
fertilizer="Gypsum + DAP";
quantity="60 Kg / Acre";
time="Flowering";
irrigation="Light";
advice="Use Calcium.";
break;

case "Tur":
fertilizer="DAP";
quantity="40 Kg / Acre";
time="At Sowing";
irrigation="Low";
advice="Use Rhizobium Culture.";
break;

case "Moong":
fertilizer="DAP";
quantity="35 Kg / Acre";
time="At Sowing";
irrigation="Light";
advice="Avoid Waterlogging.";
break;

case "Urad":
fertilizer="DAP";
quantity="35 Kg / Acre";
time="At Sowing";
irrigation="Low";
advice="Maintain Drainage.";
break;

case "Jowar":
fertilizer="Urea";
quantity="50 Kg / Acre";
time="30 Days";
irrigation="Medium";
advice="Use Compost.";
break;

case "Bajra":
fertilizer="NPK 20:20:0";
quantity="45 Kg / Acre";
time="25 Days";
irrigation="Low";
advice="Suitable for Dry Regions.";
break;

case "Sunflower":
fertilizer="NPK 15:15:15";
quantity="60 Kg / Acre";
time="20 Days";
irrigation="Regular";
advice="Use Boron.";
break;

case "Chilli":
fertilizer="NPK 19:19:19";
quantity="40 Kg / Acre";
time="20 Days";
irrigation="Regular";
advice="Spray Micronutrients.";
break;

default:
fertilizer="General NPK";
quantity="50 Kg / Acre";
time="As Recommended";
irrigation="Normal";
advice="Consult Agriculture Officer.";

}

// ================= Soil Advice =================

let smartAdvice="";

switch(soil){

case "Black Soil":
smartAdvice+="Black Soil is nutrient rich. Add Organic Compost.\n";
break;

case "Red Soil":
smartAdvice+="Red Soil needs Nitrogen & Phosphorus.\n";
break;

case "Loamy Soil":
smartAdvice+="Loamy Soil is ideal for balanced farming.\n";
break;

case "Sandy Soil":
smartAdvice+="Apply fertilizer in split doses.\n";
break;

case "Clay Soil":
smartAdvice+="Improve drainage before fertilizer.\n";
break;

case "Alluvial Soil":
smartAdvice+="Apply Potash during flowering.\n";
break;

}

// ================= Season Advice =================

switch(season){

case "Kharif":
smartAdvice+="Apply before heavy rainfall.";
break;

case "Rabi":
smartAdvice+="Irrigate after fertilizer application.";
break;

case "Zaid":
smartAdvice+="Increase irrigation in hot weather.";
break;

}

// ================= Display =================

document.getElementById("fertilizer").innerHTML=fertilizer;
document.getElementById("quantity").innerHTML=quantity;
document.getElementById("time").innerHTML=time;
document.getElementById("irrigation").innerHTML=irrigation;
document.getElementById("advice").innerHTML=advice+"<br><br>"+smartAdvice;

document.getElementById("result").style.display="block";

}

// ======================================
// PDF Download
// ======================================

async function downloadPDF(){

const {jsPDF}=window.jspdf;

const pdf=new jsPDF();

pdf.setFontSize(18);
pdf.text("AgriConnect Fertilizer Report",20,20);

pdf.setFontSize(12);

pdf.text("Crop : "+document.getElementById("crop").value,20,40);
pdf.text("Soil : "+document.getElementById("soil").value,20,50);
pdf.text("Season : "+document.getElementById("season").value,20,60);
pdf.text("Fertilizer : "+document.getElementById("fertilizer").textContent,20,75);
pdf.text("Quantity : "+document.getElementById("quantity").textContent,20,85);
pdf.text("Best Time : "+document.getElementById("time").textContent,20,95);
pdf.text("Irrigation : "+document.getElementById("irrigation").textContent,20,105);

pdf.save("AgriConnect_Fertilizer_Report.pdf");

}