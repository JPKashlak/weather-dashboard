var weatherFetch = "http://api.openweathermap.org/data/2.5/forecast?id=360630&appid=581f1e37f61d004d56d5c92779c9ed8e"
    

    fetch(weatherFetch).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            
            var cityName = data.city.name;
                var name = document.querySelector(".name");
                    name.textContent = cityName;                   

            var cityTemp = data.list[0].main.temp;
                var fahrTemp = ((cityTemp - 273.15)*1.8 +32);
                var celTemp = (cityTemp - 273.15);
                var temps = document.querySelector(".temp");
                    temps.textContent = (Math.round(fahrTemp) + " °F") + " / " + (Math.round(celTemp) + " °C");

            var cityHumid = data.list[0].main.humidity;
                var humid = document.querySelector(".humid");
                    humid.textContent = cityHumid + "%";

            var cityWind = data.list[0].wind.speed;
                var wind = document.querySelector(".wind");
                    wind.textContent = cityWind + " mph";

            var lat = data.city.coord.lat;
            var lon = data.city.coord.lon;

            var cityFind = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=581f1e37f61d004d56d5c92779c9ed8e"
                fetch(cityFind).then(function(response) {
                    response.json().then(function(data) {

                var uv = document.querySelector(".uv");
                    uv.textContent = data.value;

                var cityHeader = document.querySelector("#cityHeader");

                    if(data.value >= 0 && data.value <= 3) {
                        uv.classList.add("bg-success");
                        cityHeader.classList.add("text-success");
                    }
                    else if(data.value >= 3 && data.value <= 6) {
                        uv.classList.add("bg-warning");
                        cityHeader.classList.add("text-warning");
                    }
                    else if(data.value >= 6 && data.value <= 10) {
                        uv.classList.add("bg-danger")
                        cityHeader.classList.add("text-danger");
                    }
                    else if(data.value > 11) {
                        uv.classList.add("bg-dark")
                        uv.classList.add("text-light")
                        cityHeader.classList.add("bg-dark");
                        cityHeader.classList.add("text-light");                                         
                    }
                })   
            });

            var date = document.querySelector(".date");
                date = data.list[0].dt_txt;
                console.log(date.split(" ")[0]);
        });
    });


