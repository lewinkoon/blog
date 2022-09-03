import data from './track.json'

var map = L.map('map', {
    center: [42.9634, -5.0337],
    zoom: 15,
    minZoom: 15,
    maxZoom: 16,
    attributionControl: true
});

L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {attribution: '© OpenStreetMap'}).addTo(map);

L.geoJSON(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    }
}).addTo(map);

var greenMarker = L.icon({
    iconUrl: '/icons/marker-icon-blue.png',
    shadowUrl: '/icons/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [15, -30],
    shadowSize: [41, 41]

});

var redMarker = L.icon({
    iconUrl: '/icons/marker-icon-red.png',
    shadowUrl: '/icons/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [15, -30],
    shadowSize: [41, 41]

});


var start = L.marker([42.968357, -5.018883], {icon: greenMarker}).bindTooltip("Inicio").addTo(map);
var peak = L.marker([42.95792, -5.04621], {icon: redMarker}).bindTooltip("Pico Gilbo").addTo(map);

// var cave = L.marker([42.96631, -5.03222]).addTo(map);
