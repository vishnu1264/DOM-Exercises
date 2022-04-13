$(function(){
    $("#hmenu").load("header.html");
    $("#sidemenu").load("sidebar.html");
});

if(localStorage.getItem("accessToken") == null)
    window.location.href = "../html/Mlogin.html";

function signout()
{
    window.location.href = "../html/Mlogin.html";
    localStorage.clear();
}