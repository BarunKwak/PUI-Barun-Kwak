//Latitude and longitude coordinates for center of map
var myCoord = {lat: 40.4406, lng: -79.9959}

//Function to implement Google Maps API
function myMap() {
	//Define properties of the map (Pittsburgh Coordinates)
	var mapProp= {
		center: myCoord, //Set Map location on load
		zoom:10, //Map zoom level
	};

	// Render Map
	var map = new google.maps.Map(googleMap, mapProp);
}

