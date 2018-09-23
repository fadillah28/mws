var acsesstoken = 'pk.eyJ1IjoiaWZhbmZhZGlsbGFoMiIsImEiOiJjam1iczM4YmkwMm83M2pvZjFpejZydDNyIn0.tNQg3p-xJt6qeXO12_AaUw'

var mymap = L.map('mapid').setView([-6.8438563,110.8987325,19.37], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' +acsesstoken, {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <ahref="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 20,
id: 'mapbox.streets',
accessToken:acsesstoken
}).addTo(mymap);

var arr_marker= [
    [-6.8438563,110.8987325,19.37]
];

for (m of arr_marker) {
    L.marker(m).addTo(mymap);
    }

    let popup = L.popup()
    .setLatLng([-6.8438563,110.8987325,19.37])
    .setContent("rumahku")
    .openOn(mymap);