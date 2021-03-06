function init() {
	var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(40.782710, -73.965310),
		mapType: google.maps.MapTypeId.ROADMAP,
		// to show a control set value to true
		panControl: false,
		zoomControl: true,
		// set display options with object (controlNameOptions)
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
		overviewMapControl: false

	};
	var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}
function loadScript() {
	var script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor+false&callback=init';
	document.body.appendChild(script);
}

window.onload = loadScript;
