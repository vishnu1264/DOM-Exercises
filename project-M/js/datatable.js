// specify the columns
const columnDefs = [
    {headerName:"Date", field: "date", sortable: true, filter: true, resizable:true, wrapText: true, autoHeight:true },
    {headerName:"Name", field: "name", sortable: true, filter: true, width:250 },
    {headerName:"Mobile No", field: "mobile", sortable: true, filter: true },
    {headerName:"Current Location", field: "location", sortable: true, filter: true },
    {headerName:"Notice", field: "notice_period", sortable: true, filter: true },
    {headerName:"Exp CTC", field: "ectc", sortable: true, filter: true },
    {headerName:"Current CTC", field: "cctc", sortable: true, filter: true },
    {headerName:"Primary Skill", field: "primary_skill", sortable: true, filter: true, 
        resizable:true, wrapText: true, autoHeight:true },
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
    {headerName:"Details", field: "email", sortable: true, filter: true },
    {
        headerName:"Actions",
        cellRenderer: function(){
            var actions = '<button type="button"><img src="document.png" class="imagesize" alt=""></button>'+
            '<button type="button"><img src="edit.png" class="imagesize" alt=""></button>'+
            '<button type="button"><img src="assign.png" class="imagesize" alt=""></button>'+
            '<button type="button"><img src="reassign.png" class="imagesize" alt=""></button>'+
            '<button type="button"><img src="hand.png" class="imagesize" alt=""></button>'
            return actions;
        },
        width:250
    },
];

const gridOptions = {
    columnDefs: columnDefs,
    rowSelection: 'multiple',
    pagination: true,
    // cacheBlockSize: 10,
    paginationPageSize: 5,
    cacheQuickFilter:true,
    // paginationAutoPageSize=true
};

function onFilterTextBoxChanged() {
    console.log("AAAAA");
    gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value);
}

function onPageSizeChanged() {
    var value = document.getElementById("page-size").value;
    gridOptions.api.paginationSetPageSize(Number(value));
    console.log(value);
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

// document.addEventListener('DOMContentLoaded', () => {
//     const gridDiv = document.querySelector('#myGrid');
//     new agGrid.Grid(gridDiv, gridOptions);
//     fetch('http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles')
//         .then((response) => response.json())
//         .then((data) => gridOptions.api.setRowData(data));
//         console.log(data);
// });