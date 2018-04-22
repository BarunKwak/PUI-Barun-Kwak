// This function toggles the hamburger menu for active state or inactive state
$( document ).ready(function() {
    $(".hamburger").click(function(){
      // menu is active, remove is-active class to get rid of overlay and show main screen again
      if ($(this).hasClass("is-active")){
        $(this).removeClass("is-active")
        document.getElementById("overlay").style.display = "none";
      // menu is not active, add the is-active class to show overlays
      } else{
        $(this).addClass("is-active")
        document.getElementById("overlay").style.display = "block";
      }
    });
    //This allows you to go click on the overlay itself to get rid of it by removing the is-active class
    $("#overlay").click(function(){
      $(".hamburger").removeClass("is-active")
      document.getElementById("overlay").style.display = "none";
    });

});