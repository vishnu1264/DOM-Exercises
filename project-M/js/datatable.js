// specify the columns
const columnDefs = [
    {headerName:"Date", field: "date", sortable: true, filter: true, resizable:true},
    {headerName:"Name", field: "name", sortable: true, filter: true, width:250 },
    {headerName:"Mobile No", field: "mobile", sortable: true, filter: true },
    {headerName:"Email", field: "email", sortable: true, filter: true },
    {headerName:"Current Company", field: "working_at", sortable: true, filter: true },
    {headerName:"Current Location", field: "location", sortable: true, filter: true },
    {headerName:"Job Location", field: "job_location", sortable: true, filter: true },
    {headerName:"Notice", field: "notice_period", sortable: true, filter: true },
    {headerName:"Exp CTC", field: "ectc", sortable: true, filter: true },
    {headerName:"Current CTC", field: "cctc", sortable: true, filter: true },
    {headerName:"Primary Skill", field: "primary_skill", sortable: true, filter: true, resizable:true },
    {headerName:"Secondary Skill", field: "secondary_skill", sortable: true, filter: true },
    // wrapText: true, autoHeight:true, hide:true
    {headerName:"Status", field: "status", sortable: true, filter: true },
    {
        headerName:"Comments",
        field: "comments", sortable: true, filter: true,
        valueGetter: params => {
             return params.data.comments.length> 0 ? params.data.comments[0].remarks : "";
        },
        width:250
    },
    {headerName:"JD Chat", field: "jd_chat", sortable: true, filter: true },
    {headerName:"Round", field: "round", sortable: true, filter: true },
    {headerName:"Interviewer", field: "interviewer", sortable: true, filter: true },
    {headerName:"Interview Date", field: "interview_date", sortable: true, filter: true },
    {headerName:"Details", field: "profile_url", sortable: true, filter: true },
    {
        headerName:"Actions",
        cellRenderer: function(){
            var actions = '<button type="button" class="actionbutton" title="View"><img src="..//images/docum.png" class="imagesize" alt="" onclick="getSelectedRowData()"></button>'+
            '<button type="button" class="actionbutton" title="Schedule"><img src="../images/schedule-button.png" class="imagesize" alt=""></button>'+
            '<button type="button" class="actionbutton" title="ReSchedule"><img src="..//images/reschedule.png" class="imagesize" alt=""></button>'+
            '<button type="button" class="actionbutton" title="Archive"><img src="..//images/archive.png" class="imagesize" alt=""></button>'+
            '<button type="button" class="actionbutton1" title="Add Comments"><img src="..//images/addcomments.png" class="imagesize" alt=""></button>'
            return actions;
        },
        width:400
    },
];

const gridOptions = {
    columnDefs: columnDefs,
    rowSelection: 'single',
    pagination: true,
    // cacheBlockSize: 10,
    paginationPageSize: 5,
    cacheQuickFilter:true,
    // paginationAutoPageSize=true
};

// document.querySelector('#getSelectedRowData').addEventListener('click', getSelectedRowData);

function onFilterTextBoxChanged() {
    gridOptions.api.setQuickFilter(document.getElementById("searchbox").value);
}

function onPageSizeChanged() {
    var value = document.getElementById("page-size").value;
    gridOptions.api.paginationSetPageSize(Number(value));
}

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

//create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);

agGrid.simpleHttpRequest({
    url: 'http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles'
})
.then(function(data){
    gridOptions.rowModelType = 'infinite';
    gridOptions.api.setRowData(data);
    console.log(data);
})

function getSelectedRowData() {
    var selectedNodes = gridOptions.api.getSelectedNodes();
    var selectedData = JSON.stringify(selectedNodes.map(node => node.data));
    localStorage.setItem("profileData", selectedData);
    window.location.href = "../html/viewprofile.html";
}

// document.addEventListener('DOMContentLoaded', () => {
//     const gridDiv = document.querySelector('#myGrid');
//     new agGrid.Grid(gridDiv, gridOptions);
//     fetch('http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles')
//         .then((response) => response.json())
//         .then((data) => gridOptions.api.setRowData(data));
//         console.log(data);
// });