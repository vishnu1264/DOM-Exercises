$(function(){
    $("#hmenu").load("header.html");
    $("#sidemenu").load("sidebar.html");
});
function viewProfile() {
    window.location.href = "../html/viewprofile.html";
}
function profileSection(){
    window.location.href = "../html/dashboard.html";
}

var profileDetails = JSON.parse(localStorage.getItem("profileData"));

document.getElementById("inpName").value = profileDetails[0].name;
document.getElementById("inpEmail").value = profileDetails[0].email;
document.getElementById("inpPhone").value = profileDetails[0].mobile;
document.getElementById("inpLoc").value = profileDetails[0].location;
document.getElementById("inpComp").value = profileDetails[0].working_at;
document.getElementById("inpExp").value = profileDetails[0].years_of_exp;
document.getElementById("inpCctc").value = profileDetails[0].cctc;
document.getElementById("inpEctc").value = profileDetails[0].ectc;
document.getElementById("inpNotice").value = profileDetails[0].notice_period;
document.getElementById("inpSkills").value = profileDetails[0].primary_skill;

var comment = `<div class="each-comment d-flex flex-row justify-content-between mt-3 mb-3">
    <div class="left-comments d-flex flex-column">
        <text class="lc1" style="font-weight: 300; font-size: medium; margin-bottom: 10px;"></text>
        <text class="lc2" style="font-size: large; font-weight: 500;"></text>
    </div>
    <div class="verticalline"></div>
    <div class="right-comments d-flex flex-column">
        <div class="rc1 bg-primary text-light px-2 mb-4" style="width: fit-content; border-radius: 20px;"></div>
        <text class="rc2" style="font-size:small; font-weight: 300;"></text>
    </div>
</div>`;

var lc1 = document.getElementsByClassName("lc1");
var lc2 = document.getElementsByClassName("lc2");
var rc1 = document.getElementsByClassName("rc1");
var rc2 = document.getElementsByClassName("rc2");

var mainDiv = document.getElementById("comments");
mainDiv.innerHTML = "";

for(let i=0; i<profileDetails[0].comments.length; i++)
{
    mainDiv.innerHTML += comment;
    lc1[i].innerHTML = profileDetails[0].comments[i].created_on;
    lc2[i].innerHTML = profileDetails[0].comments[i].round_name;
    rc1[i].innerHTML = profileDetails[0].comments[i].interviewer_name;
    rc2[i].innerHTML = profileDetails[0].comments[i].remarks;
}

var job_details_html = 
`<div class="d-flex flex-row justify-content-between mb-3">
    <div class="d-flex flex-column w-25">
        <text style="font-weight: 300; font-size: 13px;">Client:</text>
        <text class='col-111' style="font-size: 16px; font-weight: 500;"></text>
        <text style="font-weight: 300; font-size: 13px;">Hiring Manager:</text>
        <text class='col-112' style="font-size: 16px; font-weight: 500;"></text>
        <text style="font-weight: 300; font-size: 13px;">CTC:</text>
        <text class='col-113' style="font-size: 16px; font-weight: 500;"></text>
    </div>
    <div class="d-flex flex-column w-25">
        <text style="font-weight: 300; font-size: 13px;">Site:</text>
        <text class="col-21" style="font-size: 16px; font-weight: 500;"></text>
        <text style="font-weight: 300; font-size: 13px;">Client Contact:</text>
        <text class="col-22" style="font-size: 16px; font-weight: 500;"></text>
        <text style="font-weight: 300; font-size: 13px;">Joining Date:</text>
        <text class="col-23" style="font-size: 16px; font-weight: 500;"></text>
    </div>
    <div class="d-flex flex-column w-25">
        <text style="font-weight: 300; font-size: 13px;">Placements:</text>
        <text class="col-31" style="font-size: 16px; font-weight: 500;"></text>
        <text style="font-weight: 300; font-size: 13px;">Experience:</text>
        <text class="col-32" style="font-size: 16px; font-weight: 500;"></text>
        <text style="font-weight: 300; font-size: 13px;">Expires on:</text>
        <text class="col-33" style="font-size: 16px; font-weight: 500;"></text>
    </div>
    <hr>
</div>`;

var job_details = document.getElementById("job-details");
job_details.innerHTML = "";

var col11 = document.getElementsByClassName('col-111');
var col12 = document.getElementsByClassName('col-112');
var col13 = document.getElementsByClassName('col-113');
var col21 = document.getElementsByClassName('col-21');
var col22 = document.getElementsByClassName('col-22');
var col23 = document.getElementsByClassName('col-23');
var col31 = document.getElementsByClassName('col-31');
var col32 = document.getElementsByClassName('col-32');
var col33 = document.getElementsByClassName('col-33');

console.log(profileDetails[0].job_details[1].salary_range[0]+" - "+profileDetails[0].job_details[1].salary_range[1]+" Y");

for(let i=0; i<profileDetails[0].job_details.length; i++)
{
    job_details.innerHTML += job_details_html;
    col11[i].innerHTML = profileDetails[0].job_details[i].client_name;
    col12[i].innerHTML = profileDetails[0].job_details[i].hiringmanager_name;
    if(profileDetails[0].job_details[i].salary_range[1] > 0)
        col13[i].innerHTML = profileDetails[0].job_details[i].salary_range[0]+" - "+profileDetails[0].job_details[i].salary_range[1];
    else
        col13[i].innerHTML = profileDetails[0].job_details[i].salary_range[0];
    col21[i].innerHTML = profileDetails[0].job_details[i].location;
    col22[i].innerHTML = profileDetails[0].job_details[i].client_contact;
    col23[i].innerHTML = profileDetails[0].job_details[i].joining_date;
    col31[i].innerHTML = profileDetails[0].job_details[i].total_requirement;
    if(profileDetails[0].job_details[i].experience_range[1] > 0)
        col32[i].innerHTML = profileDetails[0].job_details[i].experience_range[0]+" - "+profileDetails[0].job_details[i].experience_range[1]+" Y";
    else
        col32[i].innerHTML = profileDetails[0].job_details[i].experience_range[0]+" Y";
    col33[i].innerHTML = profileDetails[0].job_details[i].expiry_date;
}