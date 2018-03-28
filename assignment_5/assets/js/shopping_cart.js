$(document).ready(function() {
  displayCart();
})

// Return total cost
function totalCart() {
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].qty * 4.5;
    console.log(cart[i].qty);
  }
  return totalCost;
}
// This function creates html to append to the shopping cart html page.
function displayCart() {
  cart = listCart();
  var output = "";
  for (var i in cart) {
    output += "<li>"
    +cart[i].name
    +" "
    +cart[i].glaze
    +" "
    +cart[i].qty
    +" <button class='delete-item'>X Remove Item</button>"
    +"</li>"
    }
  $("#display-cart").append(output);
  $("#total-cart").html(totalCart(0));
}

// This function allows me to create an item to add to the cart
$(document).ready(function() {
  $(".add-to-cart").click(function() {
    var qty = $("#qtySelect").val();
    var glaze = $("#glazeSelect").val();
    var name = $("#rollName").text() + " Cinnamon Roll";
    addItemToCart(name, qty, glaze, 1);
    displayCart();
  });
});

// This function clears the shopping cart
$(document).ready(function() {
    $("#clear-cart").click(function(){
      clearCart();
      displayCart();
    });
  });


// remove all of one type from the cart
$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
  });

