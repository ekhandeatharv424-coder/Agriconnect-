// ======================================
// AgriConnect Government Schemes
// Part 1
// ======================================

const schemes = {

"pm kisan":{
name:"PM Kisan Samman Nidhi",
benefit:"₹6000 per year financial assistance.",
eligibility:"All eligible farmers",
documents:"Aadhaar, Bank Account, Land Record",
website:"https://pmkisan.gov.in"
},

"pm fasal bima":{
name:"Pradhan Mantri Fasal Bima Yojana",
benefit:"Crop insurance against natural disasters.",
eligibility:"All Farmers",
documents:"Aadhaar, Bank Passbook, Land Record",
website:"https://pmfby.gov.in"
},

"pm kusum":{
name:"PM Kusum Scheme",
benefit:"Solar Pump Subsidy",
eligibility:"Farmers",
documents:"Aadhaar, Land Record",
website:"https://pmkusum.mnre.gov.in"
},

"soil health card":{
name:"Soil Health Card",
benefit:"Free Soil Testing",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://soilhealth.dac.gov.in"
},

"e nam":{
name:"e-NAM",
benefit:"Online Agriculture Market",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://www.enam.gov.in"
},

"kisan credit card":{
name:"Kisan Credit Card",
benefit:"Low Interest Agriculture Loan",
eligibility:"Farmers",
documents:"Aadhaar, PAN",
website:"https://www.myscheme.gov.in"
},

"mahadbt":{
name:"MahaDBT Farmer Scheme",
benefit:"Subsidy on Agricultural Equipment",
eligibility:"Maharashtra Farmers",
documents:"Aadhaar, 7/12, Bank Passbook",
website:"https://mahadbt.maharashtra.gov.in"
},

"pmksy":{
name:"Pradhan Mantri Krishi Sinchai Yojana",
benefit:"Irrigation Support",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://pmksy.gov.in"
},

"tractor subsidy":{
name:"Tractor Subsidy Scheme",
benefit:"Subsidy for Tractor Purchase",
eligibility:"Farmers",
documents:"Aadhaar, Land Record",
website:"https://mahadbt.maharashtra.gov.in"
},

"drip irrigation":{
name:"Drip Irrigation Subsidy",
benefit:"50-80% Subsidy",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://mahadbt.maharashtra.gov.in"
},

"sprinkler":{
name:"Sprinkler Irrigation Scheme",
benefit:"Subsidy on Sprinkler System",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://mahadbt.maharashtra.gov.in"
},

"solar pump":{
name:"Solar Pump Scheme",
benefit:"Solar Pump Installation",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://pmkusum.mnre.gov.in"
},

"seed subsidy":{
name:"Seed Subsidy Scheme",
benefit:"Certified Seeds at Subsidized Rate",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://agricoop.nic.in"
},

"farm pond":{
name:"Farm Pond Scheme",
benefit:"Water Storage Assistance",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://mahadbt.maharashtra.gov.in"
},

"organic farming":{
name:"Organic Farming Scheme",
benefit:"Organic Farming Promotion",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://pgsindia-ncof.gov.in"
},
"national horticulture mission":{
name:"National Horticulture Mission",
benefit:"Fruit & Vegetable Cultivation Support",
eligibility:"Farmers",
documents:"Aadhaar, Land Record",
website:"https://nhb.gov.in"
},

"dairy farming":{
name:"Dairy Farming Scheme",
benefit:"Loan & Subsidy for Dairy Farm",
eligibility:"Farmers",
documents:"Aadhaar, Bank Account",
website:"https://www.nabard.org"
},

"goat farming":{
name:"Goat Farming Scheme",
benefit:"Financial Assistance for Goat Farming",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://www.nabard.org"
},

"poultry farming":{
name:"Poultry Farming Scheme",
benefit:"Loan & Subsidy",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://www.nabard.org"
},

"fish farming":{
name:"Fish Farming Scheme",
benefit:"Subsidy for Fisheries",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://dof.gov.in"
},

"bee keeping":{
name:"National Beekeeping Scheme",
benefit:"Bee Box & Honey Production Support",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://nbb.gov.in"
},

"mushroom farming":{
name:"Mushroom Farming Scheme",
benefit:"Training & Financial Support",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://www.nabard.org"
},

"sericulture":{
name:"Sericulture Scheme",
benefit:"Silk Farming Assistance",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://csb.gov.in"
},

"bamboo mission":{
name:"National Bamboo Mission",
benefit:"Bamboo Plantation Subsidy",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://nbm.nic.in"
},

"bio fertilizer":{
name:"Bio Fertilizer Promotion Scheme",
benefit:"Organic Bio Fertilizer Support",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://agricoop.nic.in"
},

"vermicompost":{
name:"Vermicompost Scheme",
benefit:"Subsidy for Vermicompost Unit",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://agricoop.nic.in"
},

"polyhouse":{
name:"Polyhouse Subsidy Scheme",
benefit:"Polyhouse Construction Subsidy",
eligibility:"Farmers",
documents:"Aadhaar, Land Record",
website:"https://nhb.gov.in"
},

"greenhouse":{
name:"Greenhouse Farming Scheme",
benefit:"Protected Cultivation Support",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://nhb.gov.in"
},

"cold storage":{
name:"Cold Storage Scheme",
benefit:"Cold Storage Construction Assistance",
eligibility:"Farmers/FPO",
documents:"Aadhaar",
website:"https://www.nabard.org"
},

"warehouse":{
name:"Warehouse Scheme",
benefit:"Warehouse Construction Loan",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://www.nabard.org"
},
"fpo":{
name:"Farmer Producer Organization (FPO)",
benefit:"Financial support for Farmer Groups",
eligibility:"Registered Farmer Groups",
documents:"Aadhaar, Registration Certificate",
website:"https://sfacindia.com"
},

"animal husbandry":{
name:"Animal Husbandry Infrastructure Development Fund",
benefit:"Loan for Dairy & Animal Infrastructure",
eligibility:"Farmers & Entrepreneurs",
documents:"Aadhaar, Bank Details",
website:"https://dahd.nic.in"
},

"pm matsya sampada":{
name:"PM Matsya Sampada Yojana",
benefit:"Financial Assistance for Fisheries",
eligibility:"Fish Farmers",
documents:"Aadhaar, Bank Account",
website:"https://dof.gov.in"
},

"millet mission":{
name:"National Millet Mission",
benefit:"Promotion of Millet Cultivation",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://millets.icar.gov.in"
},

"medicinal plants":{
name:"Medicinal Plants Scheme",
benefit:"Support for Medicinal Plant Farming",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://nmpb.nic.in"
},

"crop diversification":{
name:"Crop Diversification Programme",
benefit:"Financial Support for Crop Change",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://agricoop.nic.in"
},

"custom hiring center":{
name:"Custom Hiring Center",
benefit:"Farm Machinery on Rent",
eligibility:"Farmers & FPO",
documents:"Aadhaar",
website:"https://agrimachinery.nic.in"
},

"agri clinic":{
name:"Agri Clinic & Agri Business Centre",
benefit:"Training & Loan Assistance",
eligibility:"Agriculture Graduates",
documents:"Aadhaar",
website:"https://acabcmis.gov.in"
},

"national livestock mission":{
name:"National Livestock Mission",
benefit:"Support for Livestock Development",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://nlm.udyamimitra.in"
},

"silage scheme":{
name:"Silage Promotion Scheme",
benefit:"Support for Fodder Preservation",
eligibility:"Livestock Farmers",
documents:"Aadhaar",
website:"https://dahd.nic.in"
},

"fodder development":{
name:"Fodder Development Scheme",
benefit:"Financial Assistance for Fodder",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://dahd.nic.in"
},

"water conservation":{
name:"Water Conservation Scheme",
benefit:"Support for Water Saving",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://jalshakti-dowr.gov.in"
},

"micro irrigation":{
name:"Micro Irrigation Scheme",
benefit:"Subsidy on Micro Irrigation",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://pmksy.gov.in"
},

"rainwater harvesting":{
name:"Rainwater Harvesting Scheme",
benefit:"Water Storage Assistance",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://jalshakti-dowr.gov.in"
},

"agro forestry":{
name:"Agro Forestry Scheme",
benefit:"Tree Plantation Assistance",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://agricoop.nic.in"
},
"organic certification":{
name:"Organic Certification Scheme",
benefit:"Certification Support",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://pgsindia-ncof.gov.in"
},

"farmer pension":{
name:"PM Kisan Maandhan Yojana",
benefit:"₹3000 Monthly Pension",
eligibility:"18-40 Years Farmers",
documents:"Aadhaar, Bank Account",
website:"https://maandhan.in"
},

"agri infrastructure fund":{
name:"Agriculture Infrastructure Fund",
benefit:"Loan with Interest Subsidy",
eligibility:"Farmers, FPO",
documents:"Aadhaar",
website:"https://agriinfra.dac.gov.in"
},

"natural farming":{
name:"Natural Farming Mission",
benefit:"Support for Chemical-Free Farming",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://agricoop.nic.in"
},

"digital agriculture":{
name:"Digital Agriculture Mission",
benefit:"Digital Farming Support",
eligibility:"Farmers",
documents:"Aadhaar",
website:"https://agricoop.nic.in"
}

};

// ======================================
// SEARCH SCHEME
// ======================================

function searchScheme(){

const input=document.getElementById("schemeSearch").value.toLowerCase().trim();

const result=document.getElementById("schemeResult");

if(input==""){

alert("Please Enter Scheme Name");

return;

}

if(schemes[input]){

const s=schemes[input];

result.style.display="block";

result.innerHTML=`

<h2>${s.name}</h2>

<p><b>Benefit :</b> ${s.benefit}</p>

<p><b>Eligibility :</b> ${s.eligibility}</p>

<p><b>Documents :</b> ${s.documents}</p>

<p><b>Official Website :</b><br>
<a href="${s.website}" target="_blank">${s.website}</a></p>

`;

}else{

result.style.display="block";

result.innerHTML=`

<h2>❌ Scheme Not Found</h2>

<p>Try another scheme name.</p>

`;

}

}

// ======================================
// APPLY NOW
// ======================================

function applyScheme(){

const input=document.getElementById("schemeSearch").value.toLowerCase().trim();

if(input=="" || !schemes[input]){

alert("Search Scheme First");

return;

}

window.open(schemes[input].website,"_blank");

}

// ======================================
// RESET
// ======================================

function resetScheme(){

document.getElementById("schemeSearch").value="";

document.getElementById("schemeResult").style.display="none";

}

// ======================================
// PDF DOWNLOAD
// ======================================

async function downloadSchemePDF(){

const input=document.getElementById("schemeSearch").value.toLowerCase().trim();

if(input=="" || !schemes[input]){

alert("Search Scheme First");

return;

}

const {jsPDF}=window.jspdf;

const pdf=new jsPDF();

const s=schemes[input];

pdf.setFontSize(18);

pdf.text("AgriConnect Government Scheme",20,20);

pdf.setFontSize(12);

pdf.text("Scheme : "+s.name,20,40);

pdf.text("Benefit : "+s.benefit,20,55);

pdf.text("Eligibility : "+s.eligibility,20,70);

pdf.text("Documents : "+s.documents,20,85);

pdf.text("Website : "+s.website,20,100);

pdf.save("Government_Scheme.pdf");

}