// ===============================
// AgriConnect Notification System
// notification.js
// ===============================

const notifications = [

{
title: "Market Price Updated",
message: "Today's Tomato price has increased."
},

{
title: "Weather Alert",
message: "Heavy rain expected tomorrow."
},

{
title: "Government Scheme",
message: "PM Kisan installment released."
},

{
title: "Crop Advisory",
message: "Spray fungicide to prevent disease."
}

];

function showNotifications(){

let text = "📢 Notifications\n\n";

notifications.forEach((item,index)=>{

text += (index+1)+". "+item.title+"\n";
text += item.message+"\n\n";

});

alert(text);

}

function addNotification(title,message){

notifications.push({
title:title,
message:message
});

}