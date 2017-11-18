
//Create a global map variable
var map;

//create empty array to store future markers
var markers = [];

var markerInfoWindow;	
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


function initMap() {	


	//create empty array to store future markers
	var markers = [];

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

	// Style the markers a bit. This will be our listing marker icon.
	var defaultIcon = makeMarkerIcon('ff1a1a');
	// Create a "highlighted location" marker color for when the user
	// mouses over the marker.
	var highlightedIcon = makeMarkerIcon('1aa3ff');
	
	markerInfoWindow = new google.maps.InfoWindow();
	
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
			map: null,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon
		});
		
		//add marker property to each item in myPlaces array
		myPlaces[i].marker = marker;
		
		marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
			//this.setAnimation(google.maps.Animation.BOUNCE);			
        });
		
		marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);		
        });		
		
		// Create an onclick event to open the large infowindow at each marker.		
		marker.addListener('click', function(){
			showInfoWindow(this, markerInfoWindow);
			searchWithFoursquare(marker);		
		});	
	}
	
	console.log(myPlaces);		

	//close side panel
	document.getElementsByClassName('closebtn')[0].addEventListener('click', closeNav);	
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

//function to open side search bar with future search results
function openNav() {	
	//get current width of the map element
	var width = document.getElementsByClassName("map")[0].offsetWidth;
	var newWidth;
	if (width < 600) {
		newWidth = 250;
	} else {
		newWidth = 350;		
	}
	//add width to side bar i.e. make it appear on the screen
	document.getElementById("mySidenav").style.width = newWidth+"px";
	//console.log(width);
	
	//move the map to the left for 'push' effect
	document.getElementsByClassName("map")[0].style.marginLeft = newWidth+"px";
	
	//adjust the map width so it fits in the screen without horizontal scroll bar
	width -=newWidth;
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
				markerInfoWindow.setContent('<div id="name">' + marker.title + 
				'</div><div id="pano"></div><div><ul id="placeInfo"></ul></div>' + 
				'<div id"fousquare"><a href="https://developer.foursquare.com/">Powered by Foursquare API</a></div>');
				
				
								
				var panorama = new google.maps.StreetViewPanorama(
					document.getElementById('pano'), {
						position: streetViewLocation,
						pov: {
							heading: viewHeading,
							pitch: 25
						},
						motionTrackingControlOptions: {
							position: google.maps.ControlPosition.LEFT_BOTTOM
						},
						addressControl: false,
						fullscreenControl: false						
					});				
			} else {
				markerInfoWindow.setContent('<div>' + marker.title + '</div>' +
				'<div>No Street View Found</div>');
			}		
		}
		
		searchWithFoursquare(marker);
		
		// Look for a nearby Street View panorama when the map is clicked.
        // getPanoramaByLocation will return the nearest pano when the
        // given radius is 50 meters or less.
		
		// Use streetview service to get the closest streetview image within
		// 50 meters of the markers position
		streetViewService.getPanoramaByLocation(marker.position, radius, processSVData);
		
		map.setZoom(14);
		map.setCenter(marker.getPosition());
		//move the map down so the infowindow is seen in full
		map.panBy(0, -200);		
		
		//markerInfoWindow.setContent(marker.title);
		// Open the infowindow on the correct marker.
		markerInfoWindow.open(map, marker);
		
		/* // .2 seconds after the center of the map has changed, pan back to the marker.
		window.setTimeout(function() {
            map.panTo(marker.getPosition());
        }, 200); */		
	}
}



function searchWithFoursquare(marker){	
	//console.log(marker.position.lat());
	var placeCoordinates = String(marker.position.lat()) + ',' + String(marker.position.lng());
	
	//var placeCoordinates = String(marker.position).slice(1, -1).replace(" ", "");
	//console.log(placeCoordinates);	
	var query = String(marker.title);
	
	var clientID = 'PPCTPSMS0TH5GLA3QSAK0YYH4N0VDQKRDIT0VLKITFHRD2OC';
	
	var clientSecret = 'IUYZUMGIA0EJFDRYDGMYOGUYPRSFCDZFNZST5R0DE3RBFZYO';
	
	var foursquareUrl = 'https://api.foursquare.com/v2/venues/search?ll=' + placeCoordinates +
	
	'&query=' + query + '&radius=150&limit=1&' + 
	'client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20170801';
	//console.log(foursquareUrl);
	
	// no error handing method for jsonp so we need walkaround with timeout for the request
	var fourSquareRequestTimeout = setTimeout(function(){
		handleError("Failed to fetch Foursquare results");
	}, 1000);
	
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: foursquareUrl,
		success: function(data){
			var result = data.response.venues[0];
			console.log(result);			
			//get place details	
			var category = result.categories[0].name;
			var address = result.location.address;
			var contact = result.contact.phone;
			var foursquareMemebersNow = result.hereNow.count;
			var totalPeopleVisited = result.stats.usersCount;
						
			var placeDetails = {
				category: 'Category: ' + category,
				address: 'Address: ' + address,
				phone: 'Phone: ' + contact,
				visitors: 'Foursquare members now: ' + foursquareMemebersNow,
				totalVisitors: 'Total number of visitors: ' + totalPeopleVisited				
			}
			
			var info = document.getElementById('placeInfo');	
			//clear old listings
			info.innerHTML = '';
				
			for (var property in placeDetails){	
				if (placeDetails.hasOwnProperty(property)) {
					var elem = document.createElement('li');
					var item = document.createElement('h6');
					// Set its contents:
					item.append(document.createTextNode(placeDetails[property]));
					//add it to h5
					elem.appendChild(item);
					// Add it to the list:
					info.appendChild(elem);	
				} else {
					handleError('No place data found.');
				}
			}		
			clearTimeout(fourSquareRequestTimeout);		
		} 
	});		
}


function handleError(error){
	var errorContainer = document.getElementById('error-message');	
	//clear old listings
	errorContainer.innerHTML = "";
	
	var item = document.createElement('h5');
	// Set its contents:
    item.appendChild(document.createTextNode(error));
	// Add it to the error container:
    errorContainer.appendChild(item);	
	
	var errorButton = document.createElement('button');
	errorButton.appendChild(document.createTextNode("Ok"));
	errorButton.classList.add("closeError");
	errorContainer.appendChild(errorButton);	
	errorContainer.style.top = "100px"; 
	
	errorButton.addEventListener('click', function(){
		errorContainer.style.top = "-100px"; 
	});	
}

function MyViewModel() {
    var self = this;
		
    self.favourites = ko.observableArray();  //array updates when new locations add/delete
	
	self.currentPlace = ko.observable();
	
	
	//toogle favourite places on the map and side nav
	self.addFavouritesToList = function () {
		if (self.favourites(myPlaces).length != 0) { //this will toggle favourites vfrom the menu
			self.favourites().forEach(function(place) {	
				self.place = place;
				if(self.place.marker.map != map ) {
					self.place.marker.setMap(map);						
				} else {					
					self.place.marker.setMap(null);	
					self.favourites("");				}
			});			
		} else{
			handleError('Oops, no places in favourites. Go add some...');
		}		
	};
	
	self.enableBounce = function(place){
		place.marker.setAnimation(google.maps.Animation.BOUNCE);	
	}
	
	self.disableBounce = function(place){
		place.marker.setAnimation(null);	
	}

	self.openInfoWindow = function(place){		
		//alert(place.marker.position);	
		showInfoWindow(place.marker, markerInfoWindow);
		searcWithFoursquare(place.marker);
	}
}

var vm = new MyViewModel();
ko.applyBindings(vm);
