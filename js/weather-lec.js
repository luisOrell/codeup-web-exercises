

const weatherOutput = document.querySelector('#forecast')

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    //lat and longitude id
    `id=4726206` +
    `&appid=${OPEN_WEATHER_API}` + `&units=imperial`) //temp conversion to farenheit
    .then(data => data.json())
    .then(result => {
        console.log(result)

        //     result.list.forEach(weather => {
        //         //date format in seconds, converted to milliseconds
        //         const date = new Date(weather.dt * 1000);
        //         //.toLocaleDateString() returns the date as a string, vs time
        //         console.log(date.toLocaleDateString());
        //         //create p element
        //         const time = document.createElement("p")
        //         const temp = document.createElement("p")
        //
        //         //set innertext from date data variable
        //         time.innerText = date;
        //         //set innertext from main>temp
        //         temp.innerText = weather.main.temp;
        //
        //         weatherOutput.appendChild(time)
        //         weatherOutput.appendChild(temp)
        //
        //     })
        // })

        const day = result.list;

        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i]
            const date = new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString());


            const time = document.createElement('p');
            const temp = document.createElement('p');

            time.innerText = date.toLocaleDateString();
            temp.innerText = weather.main.temp;

            weatherOutput.appendChild(time)
            weatherOutput.appendChild(temp)
            }
        })

