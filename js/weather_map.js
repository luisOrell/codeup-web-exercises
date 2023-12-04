
function weatherCards (lon,lat) {
    // initializer for html content
    let html = "";

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}` +
        `&appid=${OPEN_WEATHER_API}` +
        `&units=imperial`)

        .then(data => data.json())
        .then(weatherInfo => {
            console.log(weatherInfo)

            //Current city displayed in the navbar
            let city = document.getElementById('city');
            city.innerHTML = "";
            city.innerHTML += `<h5> Current city: ${weatherInfo.city.name}</h5>`;


            //populating weather cards
            let weatherCard = document.getElementById('weather-card');

            for(let i = 0; i <= 39; i += 8) {
                const date = new Date(weatherInfo.list[i].dt_txt).toDateString();

                html += "<section class = 'mx-auto'>"
                html += "<div class='card'>"
                html += "<div class='card-header'>"
                html += "<h6 class='text-center'>" + date + "</h6>"
                html += "<ul ='list-group list-group-flush'>"
                html += "<p ='list-group-item' id='highLow'>" + "Low: " + weatherInfo.list[0].main.temp_min +  '\u00B0' + "F" + " / " + "High: " + weatherInfo.list[0].main.temp_max +  '\u00B0' + "F" + "</p>"
                html += "<img src='http://openweathermap.org/img/w/" + weatherInfo.list[i].weather[0].icon + ".png' alt='card-image'>";
                html += "<p ='list-group-item'>" + weatherInfo.list[i].weather[0].description + "</p>"
                html += "<p ='list-group-item'>" + "Humidity: " + weatherInfo.list[i].main.humidity + "</p>"
                html += "<p ='list-group-item'>" + "Wind: " + weatherInfo.list[i].wind.speed + "</p>"
                html += "<p ='list-group-item'>" + "Pressure: " + weatherInfo.list[i].main.pressure + "</p>"
                html += "</ul>"
                html += "</div>"
                html += "</section>"

            }
            weatherCard.innerHTML = html;
        })

}

//***Map***//
mapboxgl.accessToken = MAPBOX_API;
// const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//     style: 'mapbox://styles/mapbox/streets-v12',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [-96.79341763277209,32.772041032299434],
    zoom: 10

});

//Marker
const marker = new mapboxgl.Marker({
    draggable: true

})

//Marker drag functionality
function onDragEnd() {
    const lngLat = marker.getLngLat();
    weatherCards(lngLat.lng, lngLat.lat);
    clearCards();

}

marker.on('dragend', onDragEnd);


// Map click events
map.on('click', (event) => {
    console.log(event)
    marker.setLngLat(event.lngLat).addTo(map)
    const latCoords = event.lngLat.lat
    const lngCoords = event.lngLat.lng
    weatherCards(lngCoords, latCoords)
    clearCards();
})

function clearCards () {
    const clearCards = document.getElementById('weather-card');
    clearCards.innerHTML = '';
}

// Use coordinates to set default initializing location
weatherCards(-96.79341763277209,32.772041032299434);

//SearchBox
let geo = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
})

//add search box to map
map.addControl(geo)


//result of the search input
geo.on('result', function (e) {
    console.log(e);
    let lon = e.result.center[0];
    let lat = e.result.center[1];
    marker.setLngLat([lon, lat]).addTo(map);
    marker.addTo(map);
    weatherCards(e.result.center[0], e.result.center[1]);
    clearCards();
})