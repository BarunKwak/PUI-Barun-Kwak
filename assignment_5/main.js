// This function is for the different dropdown menu options
function myFunction() {
    document.getElementById("mySelect").value = "banana";
}

// This function is to change the image when the user chooses different glazes
function changeImage(glaze) {
  var image = document.getElementById("image");
  image.src = glaze.value;        
  }

// var obj = {name:"Apple", cost:1.99, count: 2};
//   console.log(obj.name);
//   console.log(obj.cost);

// for (var key in obj) {
//   console.log(key + " " + obj[key]);
// }

// var cart = [];
// var item = {name:"Apple", cost:1.99, count: 3};
// cart.push(item);
// console.log(cart[0].name);
// console.log(cart[0].cost);

// // Reusable block of code (need to activate it!)
// function myFunction(message,count) {
//   for (var i=0; i < count; i++){
//      console.log(message); 
//    }
// }
// // Calling the function
// myFunction("Hello World",1);
// myFunction("bey",5);
// myFunction("yo",3);
// myFunction("ok",3);

// // scope determines where a value/variable is visible
// var global = 10;
// function myFunction(){
//   var global = "Hello";
//   console.log("Global:" + global);
// }

// myFunction();

// console.log("Global:" + global);

// STARTING REAL SHOPPING CART STUFF HERE

var cart = [];
// Basic mechanic for cart systems, add functions to work with the cart
var Item = function(name, count, glaze, price) {
  this.name = name
  this.count = count
  this.glaze = glaze
  this.price = price
};

function addItemToCart(name, count, glaze, price) {
  // Makes sure there are no duplicates
  for (var i in cart){
    if (cart[i].name === name) {
      cart[i].count += count;
      cart[i].price += price;
      return;
    }
  }
  var item = new Item(name, count, glaze, price);
  cart.push(item);
  saveCart();
}

// addItemToCart("Original Cinnamon Roll", 1, "None", 4.50);
// addItemToCart("Original Cinnamon Roll", 2, "None", 9.00);
// addItemToCart("Original Cinnamon Roll", 2, "None", 9.00);
// addItemToCart("Apple", 2, "None", 9.00);

// console.log(cart);
// console.log(cart[0]);
// console.log(cart[0].name);

// Removes one item
function removeItemFromCart(name) {
  for (var i in cart) {
    if (cart[i].name === name) {
      cart[i].count --; //cart[i].count -- means subtract 1
      if (cart[i].count === 0) {
        cart.splice(i,1);
      }
      break;
    }
  }
  saveCart();
}

// console.log(cart[0].count);
// removeItemFromCart("Apple");
// removeItemFromCart("Orignal Cinnamon Roll");
// console.log(cart);

// Removes all items from cart
function removeItemFromCartAll(name) {
  for (var i in cart) {
    if (cart[i].name === name) {
      cart.splice(i,1);
      break;

    }
  }
  saveCart();
}

// addItemToCart("Original Cinnamon Roll", 1, "None", 4.50);
// addItemToCart("Apple", 2, "None", 9.00);
// addItemToCart("Pear", 2, "None", 9.00);
// addItemToCart("Apple", 2, "None", 9.00);
// addItemToCart("Banana", 1, "None", 4.50);
// addItemToCart("Original Cinnamon Roll", 2, "None", 9.00);
// addItemToCart("Original Cinnamon Roll", 2, "None", 9.00);
// addItemToCart("Apple", 2, "None", 9.00);

// console.log(cart.length);
// console.log(cart);

// removeItemFromCartAll("Apple");
// console.log(cart.length);
// console.log(cart);


function clearCart() {
  cart = [];
  saveCart();
}

// clearCart();
// console.log(cart);

// Return total count
function countCart() {
  var totalCount = 0;
  for (var i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
}

console.log(countCart());

// Return total cost
function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].price;
  }
  return totalCost;
}

console.log(totalCart());

// Array of Item
function listCart(){
  var cartCopy = [];
  for (var i in cart) {
    var item = cart[i];
    var itemCopy = {};
    for (var j in item) {
      itemCopy[j] = item[j];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}

// var array = listCart();
// array[0].name = "Mistake";
// console.log(listCart());

// var a = {age:4, name: "annie"};
// var b = a ;
// b.name = "cindy";
// console.log(a);
// console.log(b);

// Save cart to local storage (name, value)
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// Local storage to retrieve cart data
function loadCart() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();

var array = listCart();
console.log(array);

// var original = new item("Original Cinnamon Roll", 2, "None", 4.50); 
// cart.push(new item("Original Cinnamon Roll", 2, "Sugar-Milk", 9.00));
// cart.push(brush);
// console.log(cart);


// ********************************************************* Jquery stuff

$(".add-to-cart").click(function(event){
  event.preventDefault();
  var name = $(this).attr("data-name");
  var count = Number($(this).attr("data-count"));
  var glaze = $(this).attr("data-glaze");
  var price = Number($(this).attr("data-price"));

  addItemToCart(name,count,glaze,price,1);
  displayCart();
});

function displayCart() {
  var cartArray = listCart();
  var output = "";
  for (var i in cartArray) {
    output += "<li>"+cartArray[i].name+" "+ cartArray[i].count+"</li>"
  }
  $("#show-cart").html(output);
}
















