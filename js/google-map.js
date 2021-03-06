function init() {
	// init loads the map into the page and creates a mapOptions object with these properties
	var mapOptions = {
		center: new google.maps.LatLng(40.782710,-73.965310),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 13
	};
	// then init uses the Map() constructor to create and draw the map, it takes 2 parameters: the element the map is loaded into, the mapOptions object
	var venueMap;
	venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
// create a script element, load the Google Maps API, call init(), append script to body
function loadScript() {
	var script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor+false&callback=init';
	document.body.appendChild(script);
}
// when the page has loaded, the loadScript() function will be called	
window.onload = loadScript;
