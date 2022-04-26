$(function(){
    $("#hmenu").load("header.html");
    $("#sidemenu").load("sidebar.html");
});

// fetch("datatable.html")
//     .then(response => {
//         return response.text()
//     })
//     .then(data => {
//         console.log(data);
//         document.getElementById("bodycontent").innerHTML = data;
//     });

if(localStorage.getItem("accessToken") == null)
    window.location.href = "../html/Mlogin.html";

function signout() {
    window.location.href = "../html/Mlogin.html";
    localStorage.clear();
}

function addProfiles() {
    window.location.href = "../html/addprofile.html"
}
function profileSection() {
    window.location.href = "../html/dashboard.html"
}

function openFile()
{
    var inputFile = document.getElementsByClassName("uploadinput").value;
    console.log("file :",inputFile);
    document.getElementById("input-file").src = inputFile;
}

