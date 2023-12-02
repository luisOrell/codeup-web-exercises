
function weatherCards (lon,lat) {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}` +
        `&appid=${OPEN_WEATHER_API}` +
        `&units=imperial`)

    // fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    //     `lat=32.772041032299434&lon=-96.79341763277209` +
    //     `&appid=${OPEN_WEATHER_API}` +
    //     `&units=imperial`)

        .then(data => data.json())
        .then(result => {
            console.log(result)



            //***5-Day Forecast cards***
            const weatherForDallas = document.getElementById('forecast')

//variable to hold the forecast list, updated every 3 hours
            const day = result.list;
//set to index of 8 to obtain 24 hours
            for (let i = 0; i < day.length; i += 8) {
                const weather = day[i]
                const date = new Date(weather.dt * 1000);
                console.log(date.toLocaleDateString());
                console.log(weather)
                //weather.weather[0].icon


                // ******** parent div *********
                const parentDiv = document.createElement('div');
                parentDiv.classList.add('card');
                parentDiv.classList.add('card-header');
                // ********************************

                // ******** date div div *********
                const dateDiv = document.createElement('h6')
                parentDiv.appendChild(dateDiv)
                parentDiv.classList.add('dateDiv')
                // parentDiv.classList.add('card');
                // parentDiv.classList.add('card-body')

                // *****************
                // const dateForecast = document.createElement('p');
                const temp = document.createElement('p');
                parentDiv.appendChild(temp)

                const description = document.createElement('p');
                parentDiv.appendChild(description)

                const humidity = document.createElement('p');
                parentDiv.appendChild(humidity)

                const wind = document.createElement('p');
                parentDiv.appendChild(wind)

                const pressure = document.createElement('p');
                parentDiv.appendChild(pressure)

                dateDiv.innerText = date.toLocaleDateString();
                temp.innerText = weather.main.temp + "\u00B0" + "F";
                description.innerText = "Description: " + weather.weather[0].description;
                humidity.innerText = "Humidity: " + weather.main.humidity;
                wind.innerText = "Wind: " + weather.wind.speed;
                pressure.innerText = "Pressure: " + weather.main.pressure;

                weatherForDallas.appendChild(parentDiv);
            }

        })

    console.log(`coordinates ${coordinates}`)

    document.getElementById("sub").addEventListener('click', function () {
        let currentLocation = geocode(document.getElementById('search').value, MAPBOX_API)

        currentLocation.then(result => {
            console.log(result)
            // map.setCenter([result[0], result[1]])
            weatherCards(result[0], result[1])
            // let clearData = document.getElementsByClassName("card-body")
            // clearData.innerHTML = ''
        })
    })

}

//***Geocode****
geocode('', MAPBOX_API)
    .then(coordinates => {
        console.log(coordinates)
        map.setCenter(coordinates);
        map.setZoom(10);
    })

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

// .setLngLat([-96.80585330858273, 32.780731457976096])
// .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    // coordinates.style.display = 'block';
    // coordinates.innerHTML = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
    // let latLoncoordinates = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
    weatherCards(lngLat.lng, lngLat.lat)
    clearCards();

}

marker.on('dragend', onDragEnd);


//*********

//*******SearchBox
// let submitButton = document.getElementById('submitBtn')
// submitButton.addEventListener('submit', function (event) {
//     event.preventDefault()
//     // let searchBox = document.getElementById('searchBox')
//     // searchbox.value ;
//     console.log('clicked')
// })

// const search = document.getElementById('searchBox')
// search.addEventListener('input', (event) => {
//     if (e.target !== e.currentTarget) return;
//     const searchText = event.detail;
//     // ...
// });
//
//********



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
    const clearCards = document.getElementById('forecast');
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