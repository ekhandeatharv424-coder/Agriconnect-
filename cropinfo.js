// ======================================
// AgriConnect Crop Information System
// cropinfo.js
// ======================================

const cropData = {

"Tomato":{
soil:"Black Soil / Loamy Soil",
climate:"20°C - 30°C",
water:"500-700 mm",
fertilizer:"NPK 19:19:19",
harvest:"90-120 Days",
yield:"25-35 Ton/ha",
states:"Maharashtra, Karnataka, Andhra Pradesh"
},

"Potato":{
soil:"Loamy Soil",
climate:"15°C - 25°C",
water:"500-700 mm",
fertilizer:"DAP + Potash",
harvest:"90-110 Days",
yield:"20-30 Ton/ha",
states:"Uttar Pradesh, Punjab, Bihar"
},

"Onion":{
soil:"Black Soil",
climate:"18°C - 28°C",
water:"350-550 mm",
fertilizer:"NPK 20:20:20",
harvest:"100-130 Days",
yield:"20-25 Ton/ha",
states:"Maharashtra, Karnataka, Gujarat"
},

"Rice":{
soil:"Clay / Alluvial Soil",
climate:"20°C - 35°C",
water:"1200-1500 mm",
fertilizer:"Urea + DAP",
harvest:"110-150 Days",
yield:"4-6 Ton/ha",
states:"West Bengal, Punjab, Chhattisgarh"
},

"Wheat":{
soil:"Alluvial Soil",
climate:"10°C - 25°C",
water:"450-650 mm",
fertilizer:"Urea",
harvest:"120-140 Days",
yield:"3-5 Ton/ha",
states:"Punjab, Haryana, Uttar Pradesh"
},

"Cotton":{
soil:"Black Soil",
climate:"25°C - 35°C",
water:"700-1200 mm",
fertilizer:"NPK 12:32:16",
harvest:"160-180 Days",
yield:"2-3 Ton/ha",
states:"Maharashtra, Gujarat, Telangana"
},

"Sugarcane":{
soil:"Loamy Soil",
climate:"20°C - 35°C",
water:"1500-2500 mm",
fertilizer:"Urea + Potash",
harvest:"10-18 Months",
yield:"70-100 Ton/ha",
states:"Uttar Pradesh, Maharashtra, Karnataka"
},

"Soybean":{
soil:"Black Soil",
climate:"20°C - 30°C",
water:"500-700 mm",
fertilizer:"DAP",
harvest:"90-120 Days",
yield:"1.5-2.5 Ton/ha",
states:"Madhya Pradesh, Maharashtra, Rajasthan"
},

"Groundnut":{
soil:"Sandy Loam",
climate:"25°C - 30°C",
water:"500-700 mm",
fertilizer:"Gypsum + DAP",
harvest:"100-120 Days",
yield:"2-3 Ton/ha",
states:"Gujarat, Andhra Pradesh, Tamil Nadu"
},

"Banana":{
soil:"Loamy Soil",
climate:"20°C - 35°C",
water:"1200-2200 mm",
fertilizer:"NPK 10:26:26",
harvest:"11-14 Months",
yield:"40-60 Ton/ha",
states:"Tamil Nadu, Maharashtra, Gujarat"
},

// ===== Additional Crops =====

"Chilli":{
soil:"Loamy Soil",
climate:"20°C - 32°C",
water:"600-800 mm",
fertilizer:"NPK 19:19:19",
harvest:"120-150 Days",
yield:"8-12 Ton/ha",
states:"Andhra Pradesh, Karnataka, Maharashtra"
},

"Tur":{
soil:"Black Soil",
climate:"20°C - 30°C",
water:"500-700 mm",
fertilizer:"DAP",
harvest:"150-180 Days",
yield:"1-2 Ton/ha",
states:"Maharashtra, Karnataka, Madhya Pradesh"
},

"Moong":{
soil:"Loamy Soil",
climate:"25°C - 35°C",
water:"300-500 mm",
fertilizer:"DAP",
harvest:"60-80 Days",
yield:"0.8-1.5 Ton/ha",
states:"Rajasthan, Maharashtra, Karnataka"
},

"Urad":{
soil:"Loamy Soil",
climate:"25°C - 35°C",
water:"350-550 mm",
fertilizer:"DAP",
harvest:"70-90 Days",
yield:"0.7-1.2 Ton/ha",
states:"Maharashtra, Uttar Pradesh, Madhya Pradesh"
},

"Jowar":{
soil:"Black Soil",
climate:"25°C - 35°C",
water:"400-600 mm",
fertilizer:"Urea",
harvest:"100-120 Days",
yield:"2-4 Ton/ha",
states:"Maharashtra, Karnataka, Telangana"
},

"Bajra":{
soil:"Sandy Soil",
climate:"25°C - 35°C",
water:"300-500 mm",
fertilizer:"NPK 20:20:0",
harvest:"80-100 Days",
yield:"1.5-3 Ton/ha",
states:"Rajasthan, Haryana, Gujarat"
},

"Sunflower":{
soil:"Loamy Soil",
climate:"20°C - 30°C",
water:"500-700 mm",
fertilizer:"NPK 15:15:15",
harvest:"90-110 Days",
yield:"1.5-2.5 Ton/ha",
states:"Karnataka, Maharashtra, Andhra Pradesh"
},

"Cabbage":{
soil:"Loamy Soil",
climate:"15°C - 25°C",
water:"400-600 mm",
fertilizer:"NPK 20:20:20",
harvest:"80-100 Days",
yield:"25-40 Ton/ha",
states:"West Bengal, Bihar, Odisha"
},

"Cauliflower":{
soil:"Loamy Soil",
climate:"15°C - 25°C",
water:"450-650 mm",
fertilizer:"NPK 20:20:20",
harvest:"90-120 Days",
yield:"20-35 Ton/ha",
states:"West Bengal, Bihar, Uttar Pradesh"
},

"Brinjal":{
soil:"Loamy Soil",
climate:"20°C - 30°C",
water:"500-700 mm",
fertilizer:"NPK 19:19:19",
harvest:"100-140 Days",
yield:"25-35 Ton/ha",
states:"West Bengal, Maharashtra, Karnataka"
},

"Okra":{
soil:"Loamy Soil",
climate:"22°C - 35°C",
water:"400-600 mm",
fertilizer:"NPK 19:19:19",
harvest:"50-70 Days",
yield:"8-15 Ton/ha",
states:"Uttar Pradesh, Bihar, Maharashtra"
},

"Carrot":{
soil:"Sandy Loam",
climate:"15°C - 25°C",
water:"350-550 mm",
fertilizer:"NPK 12:32:16",
harvest:"90-120 Days",
yield:"20-30 Ton/ha",
states:"Punjab, Haryana, Karnataka"
},

"Cucumber":{
soil:"Loamy Soil",
climate:"20°C - 30°C",
water:"450-650 mm",
fertilizer:"NPK 20:20:20",
harvest:"50-70 Days",
yield:"15-25 Ton/ha",
states:"Karnataka, Maharashtra, Andhra Pradesh"
},

"Papaya":{
soil:"Loamy Soil",
climate:"22°C - 35°C",
water:"800-1200 mm",
fertilizer:"NPK 10:26:26",
harvest:"8-12 Months",
yield:"40-60 Ton/ha",
states:"Andhra Pradesh, Gujarat, Karnataka"
},

"Orange":{
soil:"Well Drained Loamy Soil",
climate:"15°C - 30°C",
water:"900-1200 mm",
fertilizer:"Organic Compost + NPK",
harvest:"8-10 Months",
yield:"15-25 Ton/ha",
states:"Maharashtra, Madhya Pradesh, Punjab"
},

"Pomegranate":{
soil:"Loamy Soil",
climate:"20°C - 35°C",
water:"500-700 mm",
fertilizer:"NPK 19:19:19",
harvest:"6-7 Months",
yield:"10-15 Ton/ha",
states:"Maharashtra, Karnataka, Gujarat"
},

"Turmeric":{
soil:"Loamy Soil",
climate:"20°C - 30°C",
water:"1200-1500 mm",
fertilizer:"Organic Compost + NPK",
harvest:"8-9 Months",
yield:"20-25 Ton/ha",
states:"Telangana, Maharashtra, Tamil Nadu"
},

"Ginger":{
soil:"Loamy Soil",
climate:"22°C - 30°C",
water:"1200-1500 mm",
fertilizer:"Organic Compost + NPK",
harvest:"8-10 Months",
yield:"15-20 Ton/ha",
states:"Kerala, Karnataka, Meghalaya"
},

"Coriander":{
soil:"Loamy Soil",
climate:"15°C - 25°C",
water:"300-500 mm",
fertilizer:"NPK 15:15:15",
harvest:"45-60 Days",
yield:"1-2 Ton/ha",
states:"Rajasthan, Madhya Pradesh, Gujarat"
},

"Mustard":{
soil:"Alluvial Soil",
climate:"10°C - 25°C",
water:"350-550 mm",
fertilizer:"NPK 20:20:0",
harvest:"110-140 Days",
yield:"1.2-2 Ton/ha",
states:"Rajasthan, Uttar Pradesh, Haryana"
}
};

function getCropInfo(){

const crop=document.getElementById("crop").value;

if(crop==""){
alert("Please select a crop.");
return;
}

const info=cropData[crop];

document.getElementById("soil").textContent=info.soil;
document.getElementById("climate").textContent=info.climate;
document.getElementById("water").textContent=info.water;
document.getElementById("fertilizer").textContent=info.fertilizer;
document.getElementById("harvest").textContent=info.harvest;
document.getElementById("yield").textContent=info.yield;
document.getElementById("states").textContent=info.states;

document.getElementById("result").style.display="block";

}

function searchCrop() {

    let input = document.getElementById("searchCrop").value.toLowerCase();

    let select = document.getElementById("crop");

    for (let i = 0; i < select.options.length; i++) {

        let txt = select.options[i].text.toLowerCase();

        if (txt.includes(input)) {

            select.selectedIndex = i;
            return;

        }

    }

}