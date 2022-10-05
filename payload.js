
// Following data is collected from the assignment
// Data in impression_data array is a dummy data with 3 products
currency = "usd";
impression_data =
{
  "main_list": [
  {
        "product_id": "1234",
        "product_title": "Lagavulin 16",
        "price": "45.99",
        "brand": "Lagavulin"
},
  {
        "product_id": "5678",
        "product_title": "Jaegger Master",
        "price": "47.99",
        "brand": "Jaeggar"
  },
   {
        "product_id": "91011",
        "product_title": "Johnny Walker",
        "price": "52.99",
        "brand": "JW"
  }
  ],
  "recommended_list": [ ],
  "popular_list": [ ]
};

// Function cleansingData() is used to render information according to Payload Specifiction

function cleansingData(currency,impression_data){
  var payload = []; // Main variable that will have all of the information about the products pushed into it
  var product_impressions = []; // Array strickly for the information of product object
  var checkCurrency = currency.toUpperCase(); // Convert lower case currency abbr. to upper case
  var numberOfMainListItems = impression_data.main_list.length; // Get the number of products

  if(checkCurrency === "USD" || checkCurrency === "EUR" || checkCurrency === "GBP"){
   // Checking the currencies. If its correct, carry on and do nothing
  } else {
    checkCurrency = ""; //If the criteria doesn't match, set the string as empty
  }

  // Looping through the number of products and getting their relevant data
  // so that it is formatted according to the Payload Specification
  for (var i = 0; i < numberOfMainListItems; i ++){
    product_impressions.push({ // As we iterate through loop, push all of the info into the array
      "name": impression_data.main_list[i].product_title,
      "id": parseFloat(impression_data.main_list[i].product_id),
      "price": parseFloat(impression_data.main_list[i].price),
      "brand": impression_data.main_list[i].brand,
      "list": "main_list",
      "position": i // As we iterate through the loop, assign products their position 
    });
  }

// Push the product_impression array into the payload array
 payload.push({
     "currency": checkCurrency,
     "product_impressions": product_impressions
    });

  console.log(payload);
}

//Call the function to run
cleansingData(currency,impression_data);


/* OUTPUT OF ABOVE CODE WHEN RUN ON CODEPEN.IO OR https://jsfiddle.net/ */
//
// [{
//   currency: "USD",
//   product_impressions: [
//     {
//         brand: "Lagavulin",
//         id: 1234,
//         list: "main_list",
//         name: "Lagavulin 16",
//         position: 0,
//         price: 45.99
//     },
//     {
//       brand: "Jaeggar",
//       id: 5678,
//       list: "main_list",
//       name: "Jaegger Master",
//       position: 1,
//       price: 47.99
//     },
//     {
//       brand: "JW",
//       id: 91011,
//       list: "main_list",
//       name: "Johnny Walker",
//       position: 2,
//       price: 52.99
//     }]
// }]
