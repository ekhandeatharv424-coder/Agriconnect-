// ======================================
// AgriConnect Profile System
// profile.js
// ======================================

// Photo Preview

document.addEventListener("DOMContentLoaded", function () {

    const photo = document.getElementById("photo");

    if (photo) {

        photo.addEventListener("change", function (e) {

            const file = e.target.files[0];

            if (file) {

                const reader = new FileReader();

                reader.onload = function () {

                    document.getElementById("preview").src = reader.result;

                    document.getElementById("preview").style.display = "block";

                };

                reader.readAsDataURL(file);

            }

        });

    }

});

// ======================================
// Save Profile
// ======================================

function saveProfile() {

    const farmer = {

        photo: document.getElementById("preview").src,

        name: document.getElementById("name").value,

        mobile: document.getElementById("mobile").value,

        village: document.getElementById("village").value,

        district: document.getElementById("district").value,

        state: document.getElementById("state").value,

        crop: document.getElementById("crop").value

    };

    if (farmer.name == "" || farmer.mobile == "") {

        alert("Please Enter Name and Mobile Number");

        return;

    }

    localStorage.setItem("farmerProfile", JSON.stringify(farmer));

    alert("✅ Profile Saved Successfully");

}
// ======================================
// Load Profile
// ======================================

function loadProfile() {

    const data = localStorage.getItem("farmerProfile");

    if (!data) {

        alert("No Profile Found");
        return;

    }

    const farmer = JSON.parse(data);

    document.getElementById("name").value = farmer.name;
    document.getElementById("mobile").value = farmer.mobile;
    document.getElementById("village").value = farmer.village;
    document.getElementById("district").value = farmer.district;
    document.getElementById("state").value = farmer.state;
    document.getElementById("crop").value = farmer.crop;

    if (farmer.photo) {

        document.getElementById("preview").src = farmer.photo;
        document.getElementById("preview").style.display = "block";

    }

    document.getElementById("profileResult").style.display = "block";

    document.getElementById("profileResult").innerHTML = `

        <h2>👨‍🌾 Farmer Profile</h2>

        <p><b>Name :</b> ${farmer.name}</p>

        <p><b>Mobile :</b> ${farmer.mobile}</p>

        <p><b>Village :</b> ${farmer.village}</p>

        <p><b>District :</b> ${farmer.district}</p>

        <p><b>State :</b> ${farmer.state}</p>

        <p><b>Main Crop :</b> ${farmer.crop}</p>

    `;

}

// ======================================
// Delete Profile
// ======================================

function deleteProfile() {

    if (confirm("Are you sure you want to delete the profile?")) {

        localStorage.removeItem("farmerProfile");

        alert("✅ Profile Deleted Successfully");

        location.reload();

    }

}

// ======================================
// Auto Load Profile
// ======================================

window.onload = function () {

    if (localStorage.getItem("farmerProfile")) {

        loadProfile();

    }

};

// ======================================
// Download Profile PDF
// ======================================

async function downloadProfilePDF() {

    const data = localStorage.getItem("farmerProfile");

    if (!data) {

        alert("No Profile Found");
        return;

    }

    const farmer = JSON.parse(data);

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("AgriConnect Farmer Profile", 20, 20);

    pdf.setFontSize(12);

    pdf.text("Name : " + farmer.name, 20, 40);
    pdf.text("Mobile : " + farmer.mobile, 20, 55);
    pdf.text("Village : " + farmer.village, 20, 70);
    pdf.text("District : " + farmer.district, 20, 85);
    pdf.text("State : " + farmer.state, 20, 100);
    pdf.text("Main Crop : " + farmer.crop, 20, 115);

    pdf.save("Farmer_Profile.pdf");

}