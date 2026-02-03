
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/standard-satellite',
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

// console.log(coordinates);
// 1️⃣ Create an HTML element for the marker
const el = document.createElement('div');
el.className = 'custom-marker';

// 2️⃣ Style it with your icon

el.style.backgroundImage = "url('/home.jpeg')";
el.style.width = '30px';
el.style.height = '30px';
el.style.backgroundSize = 'contain';
el.style.backgroundRepeat = 'no-repeat';

 const marker1 = new mapboxgl.Marker({element:el})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h6>This is Your Location ${listing.title}</h6>`)
    .setMaxWidth("200px"))
    .addTo(map);