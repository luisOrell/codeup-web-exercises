const weatherForDallas = document.getElementById('forecast')

let html = '';
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=32.772041032299434&lon=-96.79341763277209` +
    `&appid=${OPEN_WEATHER_API}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(result => {
        console.log(result)

        //variable to hold the forecast list, updated every 3 hours
        const day = result.list;
        //set to index of 8 to obtain 24 hours
        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i]
            const date = new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString());
            console.log(weather)


            // ******** parent div *********
            const parentDiv = document.createElement('div');
            parentDiv.classList.add('card');
            parentDiv.classList.add('row');
            // ********************************

            // ******** date div div *********
            const dateDiv = document.createElement('div')
            parentDiv.appendChild(dateDiv)
            parentDiv.classList.add('card');

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
            temp.innerText = weather.main.temp
            description.innerText = "Description: " + weather.weather[0].description;
            humidity.innerText = "Humidity: " + weather.main.humidity;
            wind.innerText = "Wind: " + weather.wind.speed;
            pressure.innerText = "Pressure: " + weather.main.pressure;

            weatherForDallas.appendChild(parentDiv);
        }
    })




mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    zoom: 10, // starting zoom
    center: [-98.4916, 29.4252] // [lng, lat]
});