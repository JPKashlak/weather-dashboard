// var citySearch = 

var weatherFetch = "http://api.openweathermap.org/data/2.5/forecast?q=Philadelphia&appid=581f1e37f61d004d56d5c92779c9ed8e"
   

    fetch(weatherFetch).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            
            var cityName = data.city.name;
                var name = document.querySelector(".name");
                    name.textContent = cityName;                   

            var futureIcon = data.list[0].weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon0")
    
                var image0 = document.createElement("img")
                    iconSlot.appendChild(image0)
                    image0.src = iconUrl
            
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

            var day = data.list[7].dt_txt;
                var day1 = day.split(" ")[0];
                    var dayMonth1 = day1.split("-")[1] + "-" + day1.split("-")[2]
                        var date1 = document.querySelector("#forecastDate1");
                            date1.textContent = dayMonth1;

            var day = data.list[15].dt_txt;
                var day2 = day.split(" ")[0];
                    var dayMonth2 = day2.split("-")[1] + "-" + day2.split("-")[2]
                        var date2 = document.querySelector("#forecastDate2");
                            date2.textContent = dayMonth2;

            var day = data.list[23].dt_txt;
                var day3 = day.split(" ")[0];
                    var dayMonth3 = day3.split("-")[1] + "-" + day3.split("-")[2]
                        var date3 = document.querySelector("#forecastDate3");
                            date3.textContent = dayMonth3;

            var day = data.list[31].dt_txt;
                var day4 = day.split(" ")[0];
                    var dayMonth4 = day4.split("-")[1] + "-" + day4.split("-")[2]
                        var date4 = document.querySelector("#forecastDate4");
                            date4.textContent = dayMonth4;

            var day = data.list[39].dt_txt;
                var day5 = day.split(" ")[0];
                    var dayMonth5 = day5.split("-")[1] + "-" + day5.split("-")[2]
                        var date5 = document.querySelector("#forecastDate5");
                            date5.textContent = dayMonth5;
            
        // Five Day Forecast Data Capture       
            var futureTemp = data.list[7].main.temp
            var futureHumid = data.list[7].main.humidity
                var fahrTemp1 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp1 = (futureTemp - 273.15);

                var futureTemp1 = document.querySelector("#forecastTemp1")
                var futureHumid1 = document.querySelector("#forecastHumid1")
                    futureTemp1.textContent = (Math.round(fahrTemp1) + " °F") + " / " + (Math.round(celTemp1) + " °C");
                    futureHumid1.textContent = futureHumid + "%"

            var futureTemp = data.list[15].main.temp
            var futureHumid = data.list[15].main.humidity
                var fahrTemp2 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp2 = (futureTemp - 273.15);
    
                var futureTemp2 = document.querySelector("#forecastTemp2")
                var futureHumid2 = document.querySelector("#forecastHumid2")
                    futureTemp2.textContent = (Math.round(fahrTemp2) + " °F") + " / " + (Math.round(celTemp2) + " °C");
                    futureHumid2.textContent = futureHumid + "%"

            var futureTemp = data.list[23].main.temp
            var futureHumid = data.list[23].main.humidity
                var fahrTemp3 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp3 = (futureTemp - 273.15);
    
                var futureTemp3 = document.querySelector("#forecastTemp3")
                var futureHumid3 = document.querySelector("#forecastHumid3")
                    futureTemp3.textContent = (Math.round(fahrTemp3) + " °F") + " / " + (Math.round(celTemp3) + " °C");
                    futureHumid3.textContent = futureHumid + "%"

            var futureTemp = data.list[31].main.temp
            var futureHumid = data.list[31].main.humidity
                var fahrTemp4 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp4 = (futureTemp - 273.15);
    
                var futureTemp4 = document.querySelector("#forecastTemp4")
                var futureHumid4 = document.querySelector("#forecastHumid4")
                    futureTemp4.textContent = (Math.round(fahrTemp4) + " °F") + " / " + (Math.round(celTemp4) + " °C");
                    futureHumid4.textContent = futureHumid + "%"

            var futureTemp = data.list[39].main.temp
            var futureHumid = data.list[39].main.humidity
                var fahrTemp5 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp5 = (futureTemp - 273.15);
        
                var futureTemp5 = document.querySelector("#forecastTemp5")
                var futureHumid5 = document.querySelector("#forecastHumid5")
                    futureTemp5.textContent = (Math.round(fahrTemp5) + " °F") + " / " + (Math.round(celTemp5) + " °C");
                    futureHumid5.textContent = futureHumid + "%"

     
            var futureIcon = data.list[7].weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon1")

                var image1 = document.createElement("img")
                    iconSlot.appendChild(image1)
                    image1.src = iconUrl

            var futureIcon = data.list[15].weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon2")

                var image2 = document.createElement("img")
                    iconSlot.appendChild(image2)
                    image2.src = iconUrl

            var futureIcon = data.list[23].weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon3")

                var image3 = document.createElement("img")
                    iconSlot.appendChild(image3)
                    image3.src = iconUrl

            var futureIcon = data.list[31].weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon4")

                var image4 = document.createElement("img")
                    iconSlot.appendChild(image4)
                    image4.src = iconUrl

            var futureIcon = data.list[39].weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon5")

                var image5 = document.createElement("img")
                    iconSlot.appendChild(image5)
                    image5.src = iconUrl
        });
    });


