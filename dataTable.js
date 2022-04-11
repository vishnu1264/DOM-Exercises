// fetch("data.json")
// .then(response => response.json())
// .then(data => {
//     var dataSet = [];
//     for(let i=0;i<data.length;i++)
//     {
//         var temp = Object.values(data[i]);
//         dataSet.push(temp);
//     }
//     console.log(dataSet);
// });
// $(document).ready(function() {
//     $('#dataTable').DataTable( {
//         data : dataSet,
//         columns: [
//             { title: "Name" },
//             { title: "Position" },
//             { title: "Office" },
//             { title: "Extn" },
//             { title: "Start date" }
//         ]
//     } );
// } );

$.ajax({
    method: 'GET',
    url: 'https://mocki.io/v1/f82f7143-7a26-4a91-aed7-20dcc89a7ad3',
    success: function(response) {
        var myArray = response;
        console.log(myArray);
        $('#dataTable').DataTable( {
            data : myArray,
            columnDefs: [{
                "defaultContent": "-",
                "targets": "_all"
            }],
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn" },
                { title: "Start date" }
            ]
        } );
    }
})
