// Write your event handlers inside this script tag

  //When browser finishes loading the page
  window.onload = function(){
    var pageTitle = document.title;
    console.log(pageTitle);
    console.log({
      "event_name": "page_loaded",
      "page_title": pageTitle
    });
  };

  //When any button with the class “.add-to- cart” is clicked
  function cartButton() {
    let addToCart = document.querySelectorAll(".add-to-cart");
    for (var i = 0; i < addToCart.length ; i++){
      addToCart[i].addEventListener("click", function(){
        var productID = this.getAttribute("data-product-id");
        var productTitle = this.getAttribute("data-product-title");
        console.log(productTitle);
            console.log(
              {
              "event_name": "add_to_cart",
              "product_id": productID,
              "product_title": productTitle
              }
            );
      });
    }
  }

  // When any of the items <li> in the main menu list is clicked.
  function liIsClicked() {
    let menuItems = document.querySelectorAll("#main-menu li");
    for (var i = 0; i < menuItems.length ; i++){
      menuItems[i].addEventListener("click", function(){
        var menuItemTitle = this.innerHTML;
            console.log(
              {
                "event_name": "menu_item_clicked",
                "menu_item": menuItemTitle
              }
            );
          });
        }
      }

  // When product listing becomes visible.
    function productListVisible() {
      var allProducts = [];
      let productList = document.querySelectorAll("#product-listing div button");
      for (var i = 0; i < productList.length ; i++){
         var productID = productList[i].getAttribute("data-product-id");
         var productTitle = productList[i].getAttribute("data-product-title");
           if(productList[i].getAttribute("data-category") == null) {
             var productCategory = "Unknown";
              } else {
                      var productCategory = productList[i].getAttribute("data-category");
                    }

             allProducts.push({
               "id": productID,
               "product_title": productTitle,
               "category": productCategory
             });

         }
         console.log({
                    "event_name": "listing_impressions",
                    "products": allProducts
                    });
      }


  //Example of event handler
  function handleAgeInput(params, el){
    var age = document.getElementById("input-age").value;
    if (age > 21 && age < 99){
      console.log({
        "event_name": "age_inputed",
        "age": age
      });
      document.getElementById("age-verification").className = "hidden";
      document.getElementById("product-listing").className = "visible";
      cartButton(); // Call the function for button clicks Add-to-cart
      productListVisible(); // Call the function when the product list is visible
    } else {
      var alert_text = "You're not of legal age. Can't continue.";
      var alert_el = document.getElementById("alert-text");
      alert_el.innerHTML = alert_text;
      alert_el.className = "";
    }
  }

liIsClicked(); // Call the function when the website loads
