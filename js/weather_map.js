
function weatherCards (lon,lat) {

    let html = "";

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}` +
        `&appid=${OPEN_WEATHER_API}` +
        `&units=imperial`)

        .then(data => data.json())
        .then(weatherInfo => {
            console.log(weatherInfo)

            //City name appended to navbar
            let city = document.getElementById('city');
            city.innerHTML = "";
            city.innerHTML += `<h5>${weatherInfo.city.name}</h5>`;

            let weatherCard = document.getElementById('weather-card');

            for(let i = 0; i <= 39; i += 8) {
                const date = new Date(weatherInfo.list[i].dt_txt).toDateString();
                console.log(date)
                console.log(i)


                html += "<section class = 'mx-auto'>"
                html += "<div class='card'>"
                html += "<div class='card-header'>"
                html += "<h6>" + date + "</h6>"
                html += "<ul ='list-group list-group-flush'>"
                html += "<p ='list-group-item'>" + weatherInfo.list[i].main.temp_min +  '\u00B0' + "F" + " / " + weatherInfo.list[i].main.temp_max +  '\u00B0' + "F" + "</p>"
                html += "<p ='list-group-item'>" + weatherInfo.list[i].weather[0].description + "</p>"
                html += "<p ='list-group-item'>" + "Humidity: " + weatherInfo.list[i].main.humidity + "</p>"
                html += "<p ='list-group-item'>" + "Wind-Speed: " + weatherInfo.list[i].wind.speed + "</p>"
                html += "<p ='list-group-item'>" + "Pressure: " + weatherInfo.list[i].main.pressure + "</p>"
                html += "</ul>"
                html += "</div>"
                html += "</section>"


            }
            weatherCard.innerHTML = html;

            //********CODE TO REFACTOR*******//
            //***5-Day Forecast cards***
            // const forecastInfo = document.getElementById('forecast')
            // //variable to hold the forecast list, updated every 3 hours
            // const day = result.list;
            // //set to index of 8 to obtain 24 hours
            // for (let i = 0; i < day.length; i += 8) {
            //     const weather = day[i]
            //     const date = new Date(weather.dt * 1000);
            //     console.log(date.toLocaleDateString());
            //     console.log(weather)
            //     //weather.weather[0].icon
            //
            //     // ******** parent div *********
            //     const parentDiv = document.createElement('div');
            //     parentDiv.classList.add('card');
            //     parentDiv.classList.add('card-header');
            //     // ********************************
            //
            //     // ******** date div div *********
            //     const dateDiv = document.createElement('h6')
            //     parentDiv.appendChild(dateDiv)
            //
            //     // *****************
            //     // const dateForecast = document.createElement('p');
            //     const temp = document.createElement('p');
            //     parentDiv.appendChild(temp)
            //
            //     const description = document.createElement('p');
            //     parentDiv.appendChild(description)
            //
            //     const humidity = document.createElement('p');
            //     parentDiv.appendChild(humidity)
            //
            //     const wind = document.createElement('p');
            //     parentDiv.appendChild(wind)
            //
            //     const pressure = document.createElement('p');
            //     parentDiv.appendChild(pressure)

                // dateDiv.innerHTML = date.toLocaleDateString();
                // temp.innerHTML = weather.main.temp + "\u00B0" + "F";
                // description.innerHTML = "Description: " + weather.weather[0].description;
                // humidity.innerHTML = "Humidity: " + weather.main.humidity;
                // wind.innerHTML = "Wind: " + weather.wind.speed;
                // pressure.innerHTML = "Pressure: " + weather.main.pressure;
            //
            //     forecastInfo.appendChild(parentDiv);
            // }
            //****CODE TO REFACTOR****

        })

    console.log(`coordinates ${coordinates}`)

    // document.getElementById("sub").addEventListener('click', function () {
    //     let currentLocation = geocode(document.getElementById('search').value, MAPBOX_API)
    //
    //     currentLocation.then(result => {
    //         console.log(result)
    //         // map.setCenter([result[0], result[1]])
    //         weatherCards(result[0], result[1])
    //         // let clearData = document.getElementsByClassName("card-body")
    //         // clearData.innerHTML = ''
    //     })
    // })

}

//***Geocode****
// geocode('', MAPBOX_API)
//     .then(coordinates => {
//         console.log(coordinates)
//         map.setCenter(coordinates);
//         map.setZoom(10);
//     })

//***Map***//

mapboxgl.accessToken = MAPBOX_API;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-96.79341763277209,32.772041032299434],
    zoom: 10

});

const marker = new mapboxgl.Marker({
    draggable: true

})


function onDragEnd() {
    const lngLat = marker.getLngLat();
    // coordinates.style.display = 'block';
    // coordinates.innerHTML = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
    // let latLoncoordinates = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
    weatherCards(lngLat.lng, lngLat.lat)
    clearCards();

}

marker.on('dragend', onDragEnd);



// Click Events
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

// initialization default location.
weatherCards(-96.79341763277209,32.772041032299434);

//Search
let geo = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
})

map.addControl(geo)

geo.on('result', function (e) {
    console.log(e)
    weatherCards(e.result.center[0], e.result.center[1]);
    clearCards();
})