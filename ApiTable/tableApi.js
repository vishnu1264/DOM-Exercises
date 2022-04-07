function loadIntoTable(url, table)
{
    let tableHead = document.getElementById("tHead");
    let tableBody = document.getElementById("tBody");
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let keys = Object.keys(data[0]);
        let firstrow = tableHead.insertRow(0);
        for(let i=0;i<keys.length;i++)
        {
            let header = firstrow.insertCell(i);
            header.innerHTML = keys[i];
            header.style.backgroundColor = "#d3d3d3";
            header.style.border = "1px solid black";
        }
        for(let i=0;i<data.length;i++)
        {
            let values = Object.values(data[i]);
            let row = tableHead.insertRow();
            for(let j=0;j<keys.length;j++)
            {
                let cell = row.insertCell();
                cell.innerHTML = values[j];
                cell.style.border = "1px solid black";
            }

            // Phani's API

            // if(Object.values(data[i])[0]== 1 ||
            // Object.values(data[i])[0] == 2 ||
            // Object.values(data[i])[0] == 3 ||
            // Object.values(data[i])[0] == 13 ||
            // Object.values(data[i])[0] == 15 ||
            // Object.values(data[i])[0] == 16 ||
            // Object.values(data[i])[0] == 17 ||
            // Object.values(data[i])[0] == 18 ||
            // Object.values(data[i])[0] == 19)
            // {
            //     continue;
            // }
            // else
            // {
            //     let values = Object.values(data[i]);
            //     let row = tableHead.insertRow();
            //     for(let j=0;j<keys.length;j++)
            //     {
            //         let cell = row.insertCell();
            //         cell.innerHTML = values[j];
            //         cell.style.border = "2px solid black";
            //     }
            // }
        }
    });
}

const tableId = document.getElementById("table");
let url = "https://mocki.io/v1/f82f7143-7a26-4a91-aed7-20dcc89a7ad3";
loadIntoTable(url, tableId);

// http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/get_all_profiles - Phani
// http://ec2-52-87-201-103.compute-1.amazonaws.com:5000/list_all_interviews - Ajay
// https://mocki.io/v1/f82f7143-7a26-4a91-aed7-20dcc89a7ad3 - Vishnu
// https://gorest.co.in/public/v2/users - Swati