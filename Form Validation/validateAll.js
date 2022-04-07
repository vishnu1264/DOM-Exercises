function validateEmail(email,emailUnderText)
{
    let emailValue = email.value;
    emailUnderText.innerText = "";
    if(emailValue=="")
    {
        email.style.border = "2px solid red";
        emailUnderText.innerText = "Field required";
        emailUnderText.style.color = "red";
        return;
    }
    let emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if(emailValue.match(emailRegx))
    {
        email.style.border = "2px solid green";
        return true;
    }
    else 
    {
        email.style.border = "2px solid red";
        emailUnderText.innerText = "Incorrect email, Please try again";
        emailUnderText.style.color = "red";
        return false;
    }
}

function validatePassword(password, passwordUnderText)
{
    let passwordValue = password.value;
    passwordUnderText.innerText="";
    if(passwordValue == "")
    {
        password.style.border = "2px solid red";
        passwordUnderText.innerText = "Field required";
        passwordUnderText.style.color = "red";
        return;
    }
    let passwordRegx = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;
    if(passwordValue.match(passwordRegx))
    {
        password.style.border = "2px solid green";
        return true;
    }
    else
    {
        password.style.border = "2px solid red";
        passwordUnderText.innerText = "Invalid password, please try again";
        passwordUnderText.style.color = "red";
        return false;
    }
}

function validateMobileNumber(mobileNumber, mobileUnderText)
{
    let mobileNumberValue = mobileNumber.value;
    mobileUnderText.innerText = "";
    if(mobileNumberValue == "")
    {
        mobileNumber.style.border = "2px solid red";
        mobileUnderText.innerText = "Field required";
        mobileUnderText.style.color = "red";
        return;
    }
    let mobileNumberRegx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/ ;
    if(mobileNumberValue.match(mobileNumberRegx))
    {
        mobileNumber.style.border = "2px solid green";
        return true;
    }
    else
    {
        mobileNumber.style.border = "2px solid red";
        mobileUnderText.innerText = "Invalid Mobile Number, please try again";
        mobileUnderText.style.color = "red";
        return false;
    }
}

function validatePanNumber(panNumber, panUnderText)
{
    let panNumberValue = panNumber.value;
    panUnderText.innerText = "";
    if(panNumberValue=="")
    {
        panNumber.style.border = "2px solid red";
        panUnderText.innerText = "Field required";
        panUnderText.style.color = "red";
        return;
    }
    let panNumberRegx = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if(panNumberValue.match(panNumberRegx)) 
    {
        panNumber.style.border = "2px solid green";
        return true;
    }
    else 
    {
        panNumber.style.border = "2px solid red";
        panUnderText.innerText = "Incorrect PAN, Please try again";
        panUnderText.style.color = "red";
        return false;
    }
}

function validateZipCode(zipCode, zipUnderText)
{
    let zipCodeValue = zipCode.value;
    zipUnderText.innerText = "";
    if(zipCodeValue=="")
    {
        zipCode.style.border = "2px solid red";
        zipUnderText.innerText = "Field required";
        zipUnderText.style.color = "red";
        return;
    }
    let zipCodeRegx = /^[1-9][0-9]{5}$/;
    if(zipCodeValue.match(zipCodeRegx)) 
    {
        zipCode.style.border = "2px solid green";
        return true;
    }
    else 
    {
        zipCode.style.border = "2px solid red";
        zipUnderText.innerText = "Incorrect ZipCode, Please try again";
        zipUnderText.style.color = "red";
        return false;
    }
}

function validateDate(date, dateUnderText)
{
    let dateValue = date.value;
    dateUnderText.innerText = "";
    if(dateValue=="")
    {
        date.style.border = "2px solid red";
        dateUnderText.innerText = "Field required";
        dateUnderText.style.color = "red";
        return;
    }
    let dateRegx = /^(1[0-2]|0?[1-9]).(3[01]|[12][0-9]|0?[1-9]).(?:[0-9]{2})?[0-9]{2}$/;
    if(dateValue.match(dateRegx)) 
    {
        date.style.border = "2px solid green";
        return true;
    }
    else 
    {
        date.style.border = "2px solid red";
        dateUnderText.innerText = "Incorrect Date, Please try again";
        dateUnderText.style.color = "red";
        return false;
    }
}

function validateWebsite(website, websiteUnderText)
{
    let websiteValue = website.value;
    if(websiteValue=="")
    {
        website.style.border = "2px solid red";
        websiteUnderText.innerText = "Field required";
        websiteUnderText.style.color = "red";
        return;
    }
    let websiteRegx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    websiteUnderText.innerText = "";
    if(websiteValue.match(websiteRegx)) 
    {
        website.style.border = "2px solid green";
        return true;
    }
    else 
    {
        website.style.border = "2px solid red";
        websiteUnderText.innerText = "Incorrect website, Please try again";
        websiteUnderText.style.color = "red";
        return false;
    }
}

function validateFirstName(firstName, firstNameUnderText)
{
    let firstNameValue = firstName.value;
    firstNameUnderText.innerText = "";
    if(firstNameValue=="")
    {
        firstName.style.border = "2px solid red";
        firstNameUnderText.innerText = "Field required";
        firstNameUnderText.style.color = "red";
        return;
    }
    let firstNameRegx = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/;
    if(firstNameValue.match(firstNameRegx)) 
    {
        firstName.style.border = "2px solid green";
        return true;
    }
    else 
    {
        firstName.style.border = "2px solid red";
        firstNameUnderText.innerText = "Incorrect firstName, Please try again";
        firstNameUnderText.style.color = "red";
        return false;
    }
}

function validateNumber(number, numberUnderText)
{
    let numberValue = number.value;
    numberUnderText.innerText = "";
    if(numberValue=="")
    {
        number.style.border = "2px solid red";
        numberUnderText.innerText = "Field required";
        numberUnderText.style.color = "red";
        return;
    }
    let numberRegx = /^-?[0-9][0-9,\.]+$/;
    if(numberValue.match(numberRegx)) 
    {
        number.style.border = "2px solid green";
        return true;
    }
    else 
    {
        number.style.border = "2px solid red";
        numberUnderText.innerText = "Incorrect number, Please try again";
        numberUnderText.style.color = "red";
        return false;
    }
}

function validateAddress(address, addressUnderText)
{
    let addressValue = address.value;
    addressUnderText.innerText = "";
    if(addressValue=="")
    {
        address.style.border = "2px solid red";
        addressUnderText.innerText = "Field required";
        addressUnderText.style.color = "red";
        return;
    }
    let addressRegx = /^([a-zA-z0-9\/\\''(),.\-\s]{2,255})$/;
    if(addressValue.match(addressRegx)) 
    {
        address.style.border = "2px solid green";
        return true;
    }
    else 
    {
        address.style.border = "2px solid red";
        addressUnderText.innerText = "Incorrect address, Please try again";
        addressUnderText.style.color = "red";
        return false;
    }
}