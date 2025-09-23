window.marker = null;

function initialize() {
  var map;
  var latitude = $('#map_canvas').attr('data-latitude');
  var longitude = $('#map_canvas').attr('data-longitude');
  var mapMarker = $('#map_canvas').attr('data-marker');
  var mapMarkerName = $('#map_canvas').attr('data-marker-name');
  var nottingham = new google.maps.LatLng(latitude, longitude);
  var style = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#C6E2FF",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
  ];
  var mapOptions = {
    center: nottingham,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 13,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    }
  }
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  var mapType = new google.maps.StyledMapType(style, {
    name: "Grayscale"
  });
  map.mapTypes.set('grey', mapType);
  map.setMapTypeId('grey');
  var marker_image = mapMarker;
  var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(23, 34));
  marker = new google.maps.Marker({
    position: nottingham,
    map: map,
    icon: pinIcon,
    title: mapMarkerName
  });
  
  infoWindow = new google.maps.InfoWindow({
  content: createInfoWindowContent(nottingham),
  });

  infoWindow.open(map, marker);

  function createInfoWindowContent(latLng) {
  const content = document.createElement("div");

  // Add a container for the title and address
  const infoContent = document.createElement("div");

  // Add marker title (replace with your title)
  const title = document.createElement("h3");
  title.innerText = "TCM FIT (Acupuncture & Herbal medicine)";
  infoContent.appendChild(title);

  // Add marker address (replace with your address)
  const address = document.createElement("p");
  address.innerText = "3667 Kelton Ave, Los Angeles, CA, 90034";
  infoContent.appendChild(address);

  // Add the direction link
  const link = document.createElement("a");
  link.href = "https://www.google.com/maps/dir/?api=1&destination=34.018229,-118.413816";
  link.innerText = "Get Directions";

  // Add both infoContent and link to the main content
  content.appendChild(infoContent);
  content.appendChild(link);

  return content;}
}
var map = document.getElementById('map_canvas');
if (map != null) {
  google.maps.event.addDomListener(window, 'load', initialize);
}
