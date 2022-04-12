if(localStorage.getItem("accessToken") == null)
    window.location.href = "/LoginValidation/Mlogin.html";

function signout()
{
    window.location.href = "/LoginValidation/Mlogin.html";
    localStorage.clear();
}
