var weatherFetch = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=581f1e37f61d004d56d5c92779c9ed8e"
    fetch(weatherFetch).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            
            var cityName = data.city.name;
                console.log(cityName);

            var cityTemp = data.list[0].main.temp;
                var fahrTemp = ((cityTemp - 273.15)*1.8 +32);
                var celTemp = (cityTemp - 273.15);
                    console.log(Math.round(fahrTemp) + " °F");
                    console.log(Math.round(celTemp) + " °C");
                    console.log(Math.round(cityTemp));

            var cityHumid = data.list[0].main.humidity;
                console.log(cityHumid + " %");

            var cityWind = data.list[0].wind.speed;
                console.log(cityWind + " MPH");

            var lat = data.city.coord.lat;
                console.log(lat);

            var lon = data.city.coord.lon;
                console.log(lon);

            var cityFind = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=581f1e37f61d004d56d5c92779c9ed8e"
                fetch(cityFind).then(function(response) {
                    response.json().then(function(data) {
                        console.log(data.value);
                })
            });

            
            
    
        });
    });


