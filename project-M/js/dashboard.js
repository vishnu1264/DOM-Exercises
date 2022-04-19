$(function(){
    $("#hmenu").load("header.html");
    $("#sidemenu").load("sidebar.html");
    // $("#bodycontent").load("datatable.html");
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

function signout()
{
    window.location.href = "../html/Mlogin.html";
    localStorage.clear();
}