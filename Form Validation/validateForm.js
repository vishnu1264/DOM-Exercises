function validateForm() 
{
    let email = document.getElementById("email");
    let emailUnderText = document.getElementById("email-text");

    let password = document.getElementById("password");
    let passwordUnderText = document.getElementById("password-text");

    let mobileNumber = document.getElementById("mobileNumber");
    let mobileUnderText = document.getElementById("mobile-text");

    let panNumber = document.getElementById("panNumber");
    let panUnderText = document.getElementById("pan-text");

    let zipCode = document.getElementById("zipCode");
    let zipUnderText = document.getElementById("zip-text");

    let date = document.getElementById("date");
    let dateUnderText = document.getElementById("date-text");

    let website = document.getElementById("website");
    let websiteUnderText = document.getElementById("website-text");

    let firstName = document.getElementById("firstName");
    let firstNameUnderText = document.getElementById("firstname-text");

    let number = document.getElementById("number");
    let numberUnderText = document.getElementById("number-text");

    let address = document.getElementById("address");
    let addressUnderText = document.getElementById("address-text");

    let func1 = validateEmail(email,emailUnderText);
    let func2 = validatePassword(password, passwordUnderText);
    let func3 = validateMobileNumber(mobileNumber, mobileUnderText);
    let func4 = validatePanNumber(panNumber, panUnderText);
    let func5 = validateZipCode(zipCode, zipUnderText);
    let func6 = validateDate(date, dateUnderText);
    let func7 = validateWebsite(website, websiteUnderText);
    let func8 = validateFirstName(firstName, firstNameUnderText);
    let func9 = validateNumber(number, numberUnderText);
    let func10 = validateAddress(address, addressUnderText);
    
    let result = document.getElementById("result");
    result.innerHTML = "";
    if(func1 && func2 && func3 && func4 && func5 &&
         func6 && func7 && func8 && func9 && func10)
    {
        result.innerHTML="<h3>Success</h3>";
        result.style.color = "green";
    }
}