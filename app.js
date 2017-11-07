var window_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var window_width = Math.max(document.documentElement.clientHeight, window.innerWidth || 0);	

//console.log(window_width + ' x ' + window_height);

//Create a map variable
var map;

//create empty array to store future markers
var markers = [];


function initMap() {		
	// Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
		
        var styledMapType = new google.maps.StyledMapType(
		[
		  {
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#ebe3cd"
			  }
			]
		  },
		  {
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#523735"
			  }
			]
		  },
		  {
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#f5f1e6"
			  }
			]
		  },
		  {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#c9b2a6"
			  }
			]
		  },
		  {
			"featureType": "administrative.country",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#dcd2be"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#ae9e90"
			  }
			]
		  },
		  {
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#dfd2ae"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#dfd2ae"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#93817c"
			  }
			]
		  },
		  {
			"featureType": "poi.business",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#a5b076"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#447530"
			  }
			]
		  },
		  {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#f5f1e6"
			  }
			]
		  },
		  {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#fdfcf8"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#f8c967"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#f9a653"
			  }
			]
		  },
		  {
			"featureType": "road.highway",
			"elementType": "labels.icon",
			"stylers": [
			  {
				"weight": 1.5
			  }
			]
		  },
		  {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#e98d58"
			  }
			]
		  },
		  {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.stroke",
			"stylers": [
			  {
				"color": "#db8555"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels",
			"stylers": [
			  {
				"visibility": "off"
			  }
			]
		  },
		  {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#806b63"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#dfd2ae"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#8f7d77"
			  }
			]
		  },
		  {
			"featureType": "transit.line",
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
				"color": "#ebe3cd"
			  }
			]
		  },
		  {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
				"color": "#dfd2ae"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
			  {
				"color": "#8e8efd"
			  }
			]
		  },
		  {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
				"color": "#92998d"
			  }
			]
		  }
		],
		{name: 'Styled Map'});
	
	//initial position of the map
	var myCenter = {lat: 50.45068, lng: 30.523099};
	
	//list my default locations on the map
	var myPlaces = [
		{title: "Майдан Незалежності", location: {lat: 50.450306, lng: 30.523671}},
		{title: "Національний стадіон", location: {lat: 50.433141, lng: 30.521461}},
		{title: "Львівська майстерня шоколаду", location: {lat: 50.4620527, lng: 30.5174828}},
		{title: "Андріївська церква", location: {lat: 50.4588976, lng: 30.5175638}},
		{
			title: "Національний академічний театр російської драми імені Лесі Українки", 
			location: {lat: 50.4446875, lng: 30.5185154}
		},
		{title: "MAFIA", location: {lat: 50.4462805, lng: 30.5106136}},
		{title: "Львівська майстерня шоколаду", location: {lat: 50.44548, lng: 30.5021633}},
		{title: "ТЦ 'Гулівер'", location: {lat: 50.4386932, lng: 30.5219517}},
		{
			title: "Національний академічний драматичний театр ім. Івана Франка", 
			location: {lat: 50.445650, lng: 30.528012}
		},
		{title: "Музей води", location: {lat: 50.452529, lng: 30.531527}},
		{title: "Києво-Печерська лавра", location: {lat: 50.434609, lng: 30.557280}},
		{
			title: "Київський національний академічний театр оперети", 
			location: {lat: 50.433575, lng: 30.516494}
		}
	];


	// Style the markers a bit. This will be our listing marker icon.
	var defaultIcon = makeMarkerIcon('ff1a1a');
	// Create a "highlighted location" marker color for when the user
	// mouses over the marker.
	var highlightedIcon = makeMarkerIcon('1aa3ff');
	
	
	var markerInfoWindow = new google.maps.InfoWindow();
	
	var input = document.getElementById('places-search');
	var searchBox = new google.maps.places.SearchBox(input);
	
	
	//var autocomplete = new google.maps.places.Autocomplete(input);
	
	var geocoder = new google.maps.Geocoder();
	
	
	// Create a map object, and include the MapTypeId to add
    // to the map type control.
	map = new google.maps.Map(document.getElementsByClassName('map')[0],{
		//set location which the map renders as the initial posiiton
		center: myCenter,
		zoom: 13,
		//map style switch off so user doesn't go to terrain, landscsape ...modes
		//mapTypeControl: false    
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
		},
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
	
		
	// Add markers to the array and initialize them on the map
	for (var i =0; i < myPlaces.length; i++){
		var position = myPlaces[i].location;
		var title = myPlaces[i].title;
		// Create a marker for each location
		var marker = new google.maps.Marker({
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon,
			id: i
		});
		
		markers.push(marker);		

		// Create an onclick event to open the large infowindow at each marker.		
		marker.addListener('click', function(){
			showInfoWindow(this, markerInfoWindow);
		});			
	
		marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
			//this.setAnimation(google.maps.Animation.BOUNCE);			
        });
		
		marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
			//this.setAnimation(null);
        });		
	}
	
	document.getElementById('favourites').addEventListener('click',function(){
		toggleFavourites();	
		addListing(markers);
		mapResultToMarker(markers, markerInfoWindow);
	});	
	
	
	document.getElementsByClassName('closebtn')[0].addEventListener('click', closeNav);	
	
	//document.getElementById('places-search').addEventListener('focus', hideWhenSearch);			
	
	
	document.getElementById('places-search').addEventListener('focusout',function(){
		
	
	});	
	
	
	//addListing();    	
	
	
	
	
	initAutocomplete(input, searchBox, markerInfoWindow);
	
	// 3 seconds after the center of the map has changed, pan back to the marker.
/* 	map.addListener('center_changed', function() {
        window.setTimeout(function() {
            map.panTo(markers[0].getPosition());
        }, 3000);
    }); */

        /* marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        }); */
}


//-----------functions--------//

//function to open side search bar with future search results
function openNav() {
	//get current width of the map element
	var width = document.getElementsByClassName("map")[0].offsetWidth;
	//add width to side bar i.e. make it appear on the screen
	document.getElementById("mySidenav").style.width = "300px";
	//console.log(width);
	
	//move the map to the left for 'push' effect
	document.getElementsByClassName("map")[0].style.marginLeft = "300px";
	width -=300;
	
	//adjust the map width so it fits in the screen without horizontal scroll bar
	document.getElementsByClassName("map")[0].style.width = width +"px"; 
	console.log(width);	
}

//function to close side search bar with future search results
function closeNav() {
	var map = document.getElementsByClassName("map")[0];
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("map")[0].style.marginLeft= "0px";
	document.getElementsByClassName("map")[0].style.width = "100%";
}
 

 
function hideWhenSearch (){
	var focused = document.getElementById('places-search');		
	//if (focused=== document.activeElement){
	markers.forEach(function(marker) {	
		if(marker.map != map ) {
				return;
		} else {
				marker.setMap(null);
				//marker.setAnimation(google.maps.Animation.BOUNCE);				
		}				
    });			 
}
 
 
//animate markers with drop effect
function toggleFavourites() {	
	if (markers.length != 0){
		for (var i = 0; i < markers.length; i++) {
			if (markers[i].map != map){
				markers[i].setMap(map);					
			} else{
				markers[i].setMap(null);			
			}	
		}
	} else {
		alert('Oops, no places in favourites. Go add some...');
	} 	
}
 
 
//populate results div in search pane
function addListing(markers) {	
	var searchResults = document.getElementById('results');	
	//clear old listings
	searchResults.innerHTML = '';
	
	for (var i = 0; i < markers.length; i++){		
		var elem = document.createElement('li');
		var item = document.createElement('h5');
		item.classList.add("links");
		// Set its contents:
        item.appendChild(document.createTextNode(markers[i].title));
		//add it to h5
		elem.appendChild(item);
        // Add it to the list:
        searchResults.appendChild(elem);		
	}
}


function mapResultToMarker(markers,markerInfoWindow){	
	//add listener to results item to indicate matching marker on map when hover 
	var sideListing = document.getElementsByClassName('links');
	for(i = 0;  i < sideListing.length; i++){
		if (sideListing[i].innerHTML === markers[i].title){		
			//alert(sideListing[i].innerHTML);		
			sideListing[i].onmouseover = (function (i) {
				return function () {
					this.style.background = 'red';
					//console.log(i);
					//console.log(markers[i].title);
					markers[i].setAnimation(google.maps.Animation.BOUNCE);
				};
			}(i));			
			
			sideListing[i].onmouseout = (function (i) {
				return function () {
					this.style.background = 'green';				
					markers[i].setAnimation(null);
				};
			}(i));	

			sideListing[i].onclick = (function (i) {
				return function () {					
					markers[i].setMap(map);
					markers[i].setAnimation(google.maps.Animation.DROP);
					map.setZoom(14);
					map.setCenter(markers[i].getPosition());				
					showInfoWindow (markers[i], markerInfoWindow);					
				};
			}(i));	
		} else {
			alert("Sorry, can't find location on the map.");
		}
	}
}


// This function takes in a COLOR, and then creates a new marker
// icon of that color. The icon will be 21 px wide by 34 high, have an origin
// of 0, 0 and be anchored at 10, 34).
function makeMarkerIcon(markerColor) {
	var markerImage = new google.maps.MarkerImage(
		'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
		'|40|_|%E2%80%A2',
		new google.maps.Size(21, 34),
		new google.maps.Point(0, 0),
		new google.maps.Point(10, 34),
		new google.maps.Size(21,34));
		return markerImage;
}


function zoomIn () {	
	//console.log(i);				
	//alert(markers[i].title);
	markers[i].setAnimation(null);
	map.setZoom(16);
	map.setCenter(markers[i].getPosition());
};


function showInfoWindow (marker, markerInfoWindow) {	
	// Check to make sure the infowindow is not already opened on this marker.
	if (markerInfoWindow.marker != marker) {
		// Clear the infowindow content to give the streetview time to load.
		markerInfoWindow.setContent('');
		markerInfoWindow.marker = marker;
		// Make sure the marker property is cleared if the infowindow is closed.
		markerInfoWindow.addListener('closeclick', function() {
			markerInfoWindow.marker = null;
		});
		
		var streetViewService = new google.maps.StreetViewService();
		var radius = 50;
		
		function processSVData(data, status) {
			if (status === google.maps.StreetViewStatus.OK) {
				var streetViewLocation = data.location.latLng;
				
				var viewHeading = google.maps.geometry.spherical.computeHeading(streetViewLocation, marker.position);
				markerInfoWindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
				
				
				var panorama = new google.maps.StreetViewPanorama(
					document.getElementById('pano'), {
						position: streetViewLocation,
						pov: {
							heading: viewHeading,
							pitch: 25
						},
						motionTrackingControlOptions: {
							position: google.maps.ControlPosition.LEFT_BOTTOM
						}
					});
			} else {
				infowindow.setContent('<div>' + marker.title + '</div>' +
				'<div>No Street View Found</div>');
			}		
		}
		
		// Look for a nearby Street View panorama when the map is clicked.
        // getPanoramaByLocation will return the nearest pano when the
        // given radius is 50 meters or less.
		
		// Use streetview service to get the closest streetview image within
		// 50 meters of the markers position
		streetViewService.getPanoramaByLocation(marker.position, radius, processSVData);
		
		//markerInfoWindow.setContent(marker.title);
		// Open the infowindow on the correct marker.
		markerInfoWindow.open(map, marker);
	}
}


 function initAutocomplete(input, searchBox, markerInfoWindow) {
	
	var searchResults = document.getElementById('results');	
	//clear old listings
	searchResults.innerHTML = '';
	
	var defaultIcon = makeMarkerIcon('ff1a1a');
	var highlightedIcon = makeMarkerIcon('1aa3ff');
	//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
	
	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() {
		searchBox.setBounds(map.getBounds());
	});		
	
	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() {
		searchBox.setBounds(map.getBounds());
	});

	var searchResults = [];
	// Listen for the event fired when the user selects a prediction and retrieve
	// more details for that place.
	searchBox.addListener('places_changed', function() {
		var places = searchBox.getPlaces();

		if (places.length == 0) {
			return;
		}

		// Clear out the old markers.
		searchResults.forEach(function(marker) {
			marker.setMap(null);			
		});
		
		searchResults = [];

		// For each place, get the icon, name and location.
		var bounds = new google.maps.LatLngBounds();
		places.forEach(function(place) {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}
		   /*  var icon = {
			  url: place.icon,
			  size: new google.maps.Size(71, 71),
			  origin: new google.maps.Point(0, 0),
			  anchor: new google.maps.Point(17, 34),
			  scaledSize: new google.maps.Size(25, 25)
			}; */

			// Create a marker for each place.
			var marker = new google.maps.Marker({
				map: map,
				icon: defaultIcon,
				title: place.name,
				position: place.geometry.location,
				animation: google.maps.Animation.DROP
			});
		
			searchResults.push(marker);		

			// Create an onclick event to open the large infowindow at each marker.		
			marker.addListener('click', function(){
				showInfoWindow(this, markerInfoWindow);
			});		
			
			marker.addListener('mouseover', function() {
				this.setIcon(highlightedIcon);
				//this.setAnimation(google.maps.Animation.BOUNCE);			
			});
		
			marker.addListener('mouseout', function() {
				this.setIcon(defaultIcon);
				//this.setAnimation(null);
			});		

			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
		console.log(searchResults);
		addListing(searchResults);
		mapResultToMarker(searchResults, markerInfoWindow);
	
	});
	
}

 
 
//google.maps.event.addDomListener(window, 'load', drop);