var email = document.getElementById("email");
var emailUnderText = document.getElementById("email-text");

var password = document.getElementById("password");
var passwordUnderText = document.getElementById("password-text");

function validate()
{
    let bool1 = validateEmail(email, emailUnderText);
    let bool2 = validatePassword(password, passwordUnderText);
    var invalidText = document.getElementById("invalid-text");
    invalidText.innerHTML = "";
    if(bool1 && bool2)
    {
        console.log("valid");
        let url = "http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/login";
        const data = { username: email.value, password: password.value };
        console.log(data);
        try{
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if(Object.keys(data)[0] == 'msg')
                {
                    invalidText.innerHTML = Object.values(data)[0];
                    invalidText.style.color = "red";
                    invalidText.style.fontSize = "large";
                }
                else
                {
                    localStorage.setItem("accessToken", JSON.stringify(Object.values(data)[0]));
                    window.location.replace('/project-M/projectM.html');
                    console.log("Access token :", Object.values(data)[0]);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        catch(error){
            console.log('Error');
        }
    };
}

function togglePassword()
{
    let password = document.getElementById("password");
    let eye = document.getElementById("password-eye1");
    if(password.type === "text")
    {
        password.type = "password";
        eye.classList.toggle("fa-eye-slash");
        eye.classList.toggle("fa-eye");
    }
    else
    {
        password.type = "text";
        eye.classList.toggle("fa-eye");
        eye.classList.toggle("fa-eye-slash");
    }
}