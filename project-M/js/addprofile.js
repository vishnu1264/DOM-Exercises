$(function(){
    $("#hmenu").load("header.html");
    $("#sidemenu").load("sidebar.html");
});
function saveProfile()
{
    var inpName = document.getElementById("inpName").value;
    var inpEmail = document.getElementById("inpEmail").value;
    var inpPhone = document.getElementById("inpPhone").value;
    var inpAltPhone = document.getElementById("inpAltPhone").value;
    var inpLoc = document.getElementById("inpLoc").value;
    var inpComp = document.getElementById("inpComp").value;
    var inpDesg = document.getElementById("inpDesg").value;
    var inpExp = document.getElementById("inpExp").value;
    var inpCctc = document.getElementById("inpCctc").value;
    var inpEctc = document.getElementById("inpEctc").value;
    var inpNotice = document.getElementById("inpNotice").value;
    var inpPassyear = document.getElementById("inpPassyear").value;
    var inpCollege = document.getElementById("inpCollege").value;
    var inpSkills = document.getElementById("inpSkills").value;
    const data = {
        "alternate_phone": inpAltPhone,
        "cctc": inpCctc,
        "college": inpCollege,
        "ectc": inpEctc,
        "edu_experience": inpExp,
        "email": inpEmail,
        "image_url": "",
        "job_role": inpDesg,
        "location": inpLoc,
        "mobile": inpPhone,
        "name": inpName,
        "notice_period": inpNotice,
        "passed_out_year": inpPassyear,
        "primary_skill": inpSkills,
        "profile_id": 0,
        "profile_url": "",
        "secondary_skill": "",
        "work_experience": "2",
        "working_at": inpComp,
        "years_of_exp": "2"
    };
    fetch('http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/add_profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// async function uploadFile() {
//     let formData = new FormData();           
//     formData.append("file", fileupload.files[0]);
//     await fetch('/upload.php', {
//       method: "POST", 
//       body: formData
//     });    
//     alert('The file has been uploaded successfully.');
// }

ClassicEditor
    .create( document.querySelector( '#richeditor' ), {
        placeholder: 'Type the content here!'
    } )
    .then( editor => {
        console.log(richeditor);
    } )
    .catch( error => {
        console.error(error);
    } );