var product = 
            '<div class="product d-flex flex-column">\
                <span class="offer">\
                    <text class="text-light">25% off</text>\
                </span>\
                <img src="" alt="" class="productimage">\
                <div class="px-2">\
                    <div class="d-flex justify-content-between mt-3">\
                        <text class="companyname"></text>\
                        <img src="heart.png" alt="" style="height: 20px;">\
                    </div>\
                    <text class="description"></text>\
                    <div class="mt-2">\
                        <img src="rupee-indian.png" alt="" style="height: 16px;">\
                        <text class="mt-3 price"></text>\
                        <strike style="font-size: small;">24733</strike>\
                    </div>\
                    <div class="d-flex flex-row mt-2 mb-2">\
                        <div class="mr-3 px-1 py-1 bg-light rounded-circle">\
                            <text class="rating"></text>\
                            <img class="pb-1" src="star.png" alt="" style="height: 17px;">\
                        </div>\
                        <div class="reviews mt-1">\
                            (<text class="reviewcount" class="reviews"></text>)\
                        </div>\
                    </div>\
                </div>\
            </div>';

fetch('https://mocki.io/v1/46351079-0933-4329-978b-8d1fc3ec6c69')
    .then(response => response.json())
    .then(data =>{
        console.log(data);

        var allImages = document.getElementsByClassName("productimage");
        var allNames = document.getElementsByClassName("companyname");
        var allRating = document.getElementsByClassName("rating");
        var allDesc = document.getElementsByClassName("description");
        var allPrice = document.getElementsByClassName("price");
        var allReviews = document.getElementsByClassName("reviewcount");
        
        var mainDiv = document.getElementById("maindiv");
        mainDiv.innerHTML = "";

        for(var i = 0; i < data.length ; i++) {
            mainDiv.innerHTML += product;
            allImages[i].src = data[i].product_image;
            allNames[i].innerHTML = data[i].company_name;
            allRating[i].innerHTML = data[i].product_average_rating;
            allDesc[i].innerHTML = data[i].product_desc;
            allPrice[i].innerHTML = data[i].product_price;
            allReviews[i].innerHTML = data[i].product_reviews_count;
        }

    });