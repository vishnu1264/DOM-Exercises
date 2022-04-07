fetch("https://countriesnow.space/api/v0.1/countries/capital")
  .then((response) => {
    return response.json();
  })

  .then((json) => {
    let country = json.data;
    console.log("Data :", country);
    let element = document.getElementById("select-country");
    for (let i = 0; i < country.length; i++)
      element.innerHTML += "<option>" + country[i].name + "</option>";
  })

  .catch((error) => {
    // handle the error
  });

function get_cities() {
  let country = document.getElementById("select-country").value;
  console.log(country);

//   fetch("https://example.com/profile", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       let state = json.data;
//       console.log(state);
//     })

//     .catch((error) => {
//       console.error("Error:", error);
//     });

//   const getcountry = () => {
//     const select = document.getElementById("countries").value;

//     console.log(select);

    let url = "https://countriesnow.space/api/v0.1/countries/cities";
    var urlencoded = new URLSearchParams();
    var data;
    var list = "";
    urlencoded.append("country", country);
    var citydrop = document.getElementById("select-city");
    citydrop.innerHTML = " ";
    fetch(url, {
        method: "post",

        headers: {
            //'Authorization': 'Bearer token',
            "Content-Type": "application/x-www-form-urlencoded",
        },

        body: urlencoded,
        
    })

    .then((response) => {
        return response.json();
    })

    .then((json) => {
        data = json.data;

        for (let i = 0; i < data.length; i++)
          list += `<option value="${data[i]}">${data[i]}</option>`;

        citydrop.innerHTML = list;
    })

    .catch((err) => {
        console.log(err);
    });
  };

