document.addEventListener("DOMContentLoaded", function(event) { 
    // Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];
// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

$("#myPdf").on("change", function(e){
	var file = e.target.files[0]
	if(file.type == "application/pdf"){
		var fileReader = new FileReader();  
		fileReader.onload = function() {
			var pdfData = new Uint8Array(this.result);
			// Using DocumentInitParameters object to load binary data.
			var loadingTask = pdfjsLib.getDocument({data: pdfData});
			loadingTask.promise.then(function(pdf) {
			  console.log('PDF loaded');
			  
			  // Fetch the first page
			  var pageNumber = 1;
			  pdf.getPage(pageNumber).then(function(page) {
			    console.log('Page loaded');
				
				var scale = 1.5;
				var viewport = page.getViewport({scale: scale});

				// Prepare canvas using PDF page dimensions
				var canvas = $("#pdfViewer")[0];
				var context = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				// Render PDF page into canvas context
				var renderContext = {
				  canvasContext: context,
				  viewport: viewport
				};
				var renderTask = page.render(renderContext);
				renderTask.promise.then(function () {
				  console.log('Page rendered');
				});
			  });
			}, function (reason) {
			  // PDF loading error
			  console.error(reason);
			});
		};
		fileReader.readAsArrayBuffer(file);
	}
});

});
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

function hideFiletext(){
    document.getElementById('hide-text').classList.add("hide");
}