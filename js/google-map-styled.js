function init() {
	var pinLocation = new google.maps.LatLng(40.782710, -73.965310);

	var mapOptions = {
		zoom: 14,
		center: pinLocation, 
		mapType: google.maps.MapTypeId.ROADMAP, 
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL, 
			position: google.maps.ControlPosition.TOP_RIGHT
		}, 
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.TOP_LEFT
		},
		scaleControls: true,
		scaleControlOptions: {
			position: google.maps.ControlPosition.TOP_CENTER
		},
		streetViewControl: false,
		overviewMapControl: false,

		styles: [
			{
				stylers: [
					{hue: "#00ff6f"},
					{saturation: -50}
				]
			}, {
				featureType: "road",
				elementType: "geometry",
				stylers: [
					{lightness: 100},
					{visibility: "simplified"}
				]
			}, {
				featureType: "transit",
				elementType: "geometry",
				stylers: [
					{hue: "#ff6600"},
					{saturation: +80}
				]
			}, {
				featureType: "transit",
				elementType: "labels",
				stylers: [
					{hues: "#ff0066"},
					{saturation: +80}
				]
			}, {
				featureType: "poi",
				elementType: "labels",
				stylers: [
					{visibility: "off"}
				]
			}, {
				featureType: "poi.park",
				elementType: "labels",
				stylers: [
					{visibility: "on"}
				]
			}, {
				featureType: "road",
				elementType: "labels",
				stylers: [
					{visibility: "off"}
				]
			}
		]

	};
	var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	// MARKER
	var startPosition = new google.maps.Marker({
		position: pinLocation,
		map: venueMap,
		icon: "img/go.png"
	});
}
// CREATE SCRIPT TAG, LINK TO SCRIPT, APPEND TO BODY
function loadScript() {
	var script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor+false&callback=init';
	document.body.appendChild(script);
}

window.onload = loadScript;