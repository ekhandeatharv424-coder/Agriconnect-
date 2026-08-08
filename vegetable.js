// =====================================
// AgriConnect Vegetable Detection Demo
// vegetable.js
// =====================================

// Market Data
const marketData = {

tomato:{
price:"₹2500 / Quintal",
market:"Lasalgaon APMC",
trend:"⬆ Increasing"
},

onion:{
price:"₹3000 / Quintal",
market:"Lasalgaon APMC",
trend:"⬇ Decreasing"
},

potato:{
price:"₹1800 / Quintal",
market:"Pune APMC",
trend:"➡ Stable"
},

wheat:{
price:"₹2200 / Quintal",
market:"Nashik APMC",
trend:"⬆ Increasing"
},

rice:{
price:"₹2800 / Quintal",
market:"Nagpur APMC",
trend:"➡ Stable"
},

maize:{
price:"₹2100 / Quintal",
market:"Aurangabad APMC",
trend:"⬇ Decreasing"
},

soybean:{
price:"₹4500 / Quintal",
market:"Latur APMC",
trend:"⬆ Increasing"
},

cotton:{
price:"₹7200 / Quintal",
market:"Jalgaon APMC",
trend:"⬆ Increasing"
},

banana:{
price:"₹1800 / Quintal",
market:"Jalgaon APMC",
trend:"⬆ Increasing"
},

grapes:{
price:"₹4500 / Quintal",
market:"Nashik APMC",
trend:"➡ Stable"
},

mango:{
price:"₹6000 / Quintal",
market:"Ratnagiri APMC",
trend:"⬆ Increasing"
},

papaya:{
price:"₹2500 / Quintal",
market:"Pune APMC",
trend:"⬇ Decreasing"
},

orange:{
price:"₹3500 / Quintal",
market:"Nagpur APMC",
trend:"➡ Stable"
},

groundnut:{
price:"₹6200 / Quintal",
market:"Ahmednagar APMC",
trend:"➡ Stable"
},

sunflower:{
price:"₹5400 / Quintal",
market:"Solapur APMC",
trend:"⬇ Decreasing"
},

tur:{
price:"₹7200 / Quintal",
market:"Latur APMC",
trend:"⬆ Increasing"
},

moong:{
price:"₹7000 / Quintal",
market:"Akola APMC",
trend:"➡ Stable"
},

urad:{
price:"₹6800 / Quintal",
market:"Amravati APMC",
trend:"⬇ Decreasing"
},

jowar:{
price:"₹3100 / Quintal",
market:"Solapur APMC",
trend:"➡ Stable"
},

bajra:{
price:"₹2900 / Quintal",
market:"Ahmednagar APMC",
trend:"⬆ Increasing"
}

};

// Image Preview

const input = document.getElementById("imageInput");

if(input){

input.addEventListener("change",function(){

const file=this.files[0];

if(file){

document.getElementById("preview").src=URL.createObjectURL(file);

}

});

}

// Detection

function detectVegetable(){

const file=input.files[0];

if(!file){

alert("Please Upload Image");

return;

}

const name=file.name.toLowerCase();

let detected="";

for(let crop in marketData){

if(name.includes(crop)){

detected=crop;

break;

}

}

if(detected==""){

alert("Vegetable Not Detected.\n\nRename image like tomato.jpg, onion.jpg etc.");

return;

}

const data=marketData[detected];

document.getElementById("vegName").innerHTML=detected.toUpperCase();

document.getElementById("vegPrice").innerHTML=data.price;

document.getElementById("vegMarket").innerHTML=data.market;

document.getElementById("vegTrend").innerHTML=data.trend;

document.getElementById("vegDate").innerHTML=new Date().toLocaleDateString();

document.getElementById("result").style.display="block";

}

// PDF

async function downloadReport(){

if(document.getElementById("result").style.display=="none"){

alert("Detect Vegetable First");

return;

}

const {jsPDF}=window.jspdf;

const pdf=new jsPDF();

pdf.setFontSize(18);

pdf.text("AgriConnect Vegetable Report",20,20);

pdf.setFontSize(12);

pdf.text("Vegetable : "+document.getElementById("vegName").textContent,20,40);

pdf.text("Price : "+document.getElementById("vegPrice").textContent,20,55);

pdf.text("Market : "+document.getElementById("vegMarket").textContent,20,70);

pdf.text("Trend : "+document.getElementById("vegTrend").textContent,20,85);

pdf.text("Date : "+document.getElementById("vegDate").textContent,20,100);

pdf.save("Vegetable_Report.pdf");

}