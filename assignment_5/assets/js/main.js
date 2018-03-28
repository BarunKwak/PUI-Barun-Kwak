
// This function is to change the image when the user chooses different glazes
function changeImage(glaze) {
  var image = document.getElementById("image");
  var glaze = $("#glazeSelect").val()

  if (glaze === "None"){
    image.src = "assets/images/none.png";
  } else if (glaze === "Sugar-Milk"){
    image.src = "assets/images/sugar_milk.png";
  } else if (glaze === "Vanilla-Milk"){
    image.src = "assets/images/vanilla_milk.png";
  } else{
    image.src = "assets/images/double_chocolate.png";
  }
}


// *********************************************************
// STARTING SHOPPING CART CODE HERE

var cart = [];

// Basic struncture for cart, and add functions to work with the cart
var Item = function(name, qty, glaze) {
  this.name = name
  this.qty = qty
  this.glaze = glaze 
};

// function for adding items to shopping cart
function addItemToCart(name, qty, glaze) {
  // Makes sure there are no duplicates
  for (var i in cart){
    if (cart[i].glaze === glaze) {
      cart[i].qty += qty;
      saveCart();
      return;
    }
  }
  var item = new Item(name, qty, glaze)
  cart.push(item);
  saveCart();
}


// Removes one item from cart
function removeItemFromCart(glaze) {
  for (var i in cart) {
    if (cart[i].glaze === glaze) {
      cart[i].qty --; //cart[i].count -- means subtract 1
      if (cart[i].qty === 0) {
        cart.splice(i,1);
      }
      break;
    }
  }
  saveCart();
}

// Removes all items from cart
function removeItemFromCartAll(glaze) {
  for (var i in cart) {
    if (cart[i].glaze === glaze) {
      cart.splice(i,1);
      break;

    }
  }
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}


// Return total count
function countCart() {
  var totalCount = 0;
  for (var i in cart) {
    totalCount += cart[i].qty;
  }
  return totalCount;
}

// Return total cost
function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].qty * 4.5;
  }
  return totalCost;
}


// Array of Item
function listCart(){
  var cartCopy = [];
  for (var i in cart) {
    var item = cart[i];
    var itemCopy = {};
    for (var j in item) {
      itemCopy[j] = item[j];
    }
    itemCopy.total = 4.50 * item.qty;
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}

// Save cart to local storage (name, value)
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// Local storage to retrieve cart data
function loadCart() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();
// displayCart();

var array = listCart();















