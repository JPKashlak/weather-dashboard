var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#cityInput");

var citySearchSubmit = function(event) {
    var weatherCity = cityInputEl.value.trim();
    event.preventDefault();

    var weatherFetch = "https://api.openweathermap.org/data/2.5/forecast?q=" + weatherCity + "&appid=581f1e37f61d004d56d5c92779c9ed8e"
   
    fetch(weatherFetch).then(function(response) {
        
        if (response.ok) {
        
        response.json().then(function(data) {
            
            // Data Array Log
            console.log(data);
            
            var cityName = data.city.name;
                var name = document.querySelector(".name");
                    name.textContent = cityName;                   
            
            var futureIcon = data.list[0].weather[0].icon.split("")[0] + data.list[0].weather[0].icon.split("")[1] + "d";
                var iconUrl = "https://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon0")
    
                var image0 = document.createElement("img")
                    iconSlot.appendChild(image0)
                    image0.src = iconUrl
                    if (iconSlot.childNodes.length > 1) {
                        iconSlot.removeChild(iconSlot.childNodes[0])
                    }
            
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

            var cityFind = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=581f1e37f61d004d56d5c92779c9ed8e"
                fetch(cityFind).then(function(response) {
                    response.json().then(function(data) {
        
                var uv = document.querySelector(".uv");
                    uv.textContent = data.value;

                var cityHeader = document.querySelector("#cityHeader");
                    
                    if(uv.textContent >= 0 && uv.textContent <= 3) {
                        uv.classList.add("bg-success");
                        uv.classList.remove("bg-dark", "bg-warning", "bg-danger", "text-light")
                        cityHeader.classList.add("text-success");
                        cityHeader.classList.remove("text-warning", "text-danger", "text-light", "bg-dark")
                    }
                    else if(uv.textContent >= 3 && uv.textContent <= 6) {
                        uv.classList.add("bg-warning");
                        uv.classList.remove("bg-dark", "bg-danger", "text-light")
                        cityHeader.classList.add("text-warning");
                        cityHeader.classList.remove("text-danger", "text-light", "bg-dark")
                    }
                    else if(uv.textContent >= 6 && uv.textContent <= 10) {
                        uv.classList.add("bg-danger")
                        uv.classList.remove("bg-dark", "text-light")
                        cityHeader.classList.add("text-danger");
                        cityHeader.classList.remove("text-light", "bg-dark")
                    }
                    else if (uv.textContent > 10){
                        uv.classList.add("bg-dark")
                        uv.classList.add("text-light")
                        cityHeader.classList.add("bg-dark");
                        cityHeader.classList.add("text-light");                                         
                    }
                  
                })   
            });

        // Five Day Date Capture
            var day = data.list[4].dt_txt;
                var day1 = day.split(" ")[0];
                    var dayMonth1 = day1.split("-")[1] + "-" + day1.split("-")[2]
                        var date1 = document.querySelector("#forecastDate1");
                            date1.textContent = dayMonth1;

            var day = data.list[12].dt_txt;
                var day2 = day.split(" ")[0];
                    var dayMonth2 = day2.split("-")[1] + "-" + day2.split("-")[2]
                        var date2 = document.querySelector("#forecastDate2");
                            date2.textContent = dayMonth2;

            var day = data.list[20].dt_txt;
                var day3 = day.split(" ")[0];
                    var dayMonth3 = day3.split("-")[1] + "-" + day3.split("-")[2]
                        var date3 = document.querySelector("#forecastDate3");
                            date3.textContent = dayMonth3;

            var day = data.list[28].dt_txt;
                var day4 = day.split(" ")[0];
                    var dayMonth4 = day4.split("-")[1] + "-" + day4.split("-")[2]
                        var date4 = document.querySelector("#forecastDate4");
                            date4.textContent = dayMonth4;

            var day = data.list[36].dt_txt;
                var day5 = day.split(" ")[0];
                    var dayMonth5 = day5.split("-")[1] + "-" + day5.split("-")[2]
                        var date5 = document.querySelector("#forecastDate5");
                            date5.textContent = dayMonth5;
            

        // Five Day Forecast Data Capture       
            var futureTemp = data.list[4].main.temp
            var futureHumid = data.list[4].main.humidity
                var fahrTemp1 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp1 = (futureTemp - 273.15);

                var futureTemp1 = document.querySelector("#forecastTemp1")
                var futureHumid1 = document.querySelector("#forecastHumid1")
                    futureTemp1.textContent = (Math.round(fahrTemp1) + "°F") + " / " + (Math.round(celTemp1) + "°C");
                    futureHumid1.textContent = futureHumid + "%"

            var futureTemp = data.list[12].main.temp
            var futureHumid = data.list[12].main.humidity
                var fahrTemp2 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp2 = (futureTemp - 273.15);
    
                var futureTemp2 = document.querySelector("#forecastTemp2")
                var futureHumid2 = document.querySelector("#forecastHumid2")
                    futureTemp2.textContent = (Math.round(fahrTemp2) + "°F") + " / " + (Math.round(celTemp2) + "°C");
                    futureHumid2.textContent = futureHumid + "%"

            var futureTemp = data.list[20].main.temp
            var futureHumid = data.list[20].main.humidity
                var fahrTemp3 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp3 = (futureTemp - 273.15);
    
                var futureTemp3 = document.querySelector("#forecastTemp3")
                var futureHumid3 = document.querySelector("#forecastHumid3")
                    futureTemp3.textContent = (Math.round(fahrTemp3) + "°F") + " / " + (Math.round(celTemp3) + "°C");
                    futureHumid3.textContent = futureHumid + "%"

            var futureTemp = data.list[28].main.temp
            var futureHumid = data.list[28].main.humidity
                var fahrTemp4 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp4 = (futureTemp - 273.15);
    
                var futureTemp4 = document.querySelector("#forecastTemp4")
                var futureHumid4 = document.querySelector("#forecastHumid4")
                    futureTemp4.textContent = (Math.round(fahrTemp4) + "°F") + " / " + (Math.round(celTemp4) + "°C");
                    futureHumid4.textContent = futureHumid + "%"

            var futureTemp = data.list[36].main.temp
            var futureHumid = data.list[36].main.humidity
                var fahrTemp5 = ((futureTemp - 273.15)*1.8 +32);
                var celTemp5 = (futureTemp - 273.15);
        
                var futureTemp5 = document.querySelector("#forecastTemp5")
                var futureHumid5 = document.querySelector("#forecastHumid5")
                    futureTemp5.textContent = (Math.round(fahrTemp5) + "°F") + " / " + (Math.round(celTemp5) + "°C");
                    futureHumid5.textContent = futureHumid + "%"

     
        // Five Day Icons            
            var futureIcon = data.list[7].weather[0].icon.split("")[0] + data.list[7].weather[0].icon.split("")[1] + "d";

                var iconUrl = "https://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon1")

                var image1 = document.createElement("img")
                    iconSlot.appendChild(image1)
                    image1.src = iconUrl
                    if (iconSlot.childNodes.length > 1) {
                        iconSlot.removeChild(iconSlot.childNodes[0])
                    }

            var futureIcon = data.list[15].weather[0].icon.split("")[0] + data.list[15].weather[0].icon.split("")[1] + "d";
                var iconUrl = "https://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon2")

                var image2 = document.createElement("img")
                    iconSlot.appendChild(image2)
                    image2.src = iconUrl
                    if (iconSlot.childNodes.length > 1) {
                        iconSlot.removeChild(iconSlot.childNodes[0])
                    }

            var futureIcon = data.list[23].weather[0].icon.split("")[0] + data.list[23].weather[0].icon.split("")[1] + "d";
                var iconUrl = "https://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon3")

                var image3 = document.createElement("img")
                    iconSlot.appendChild(image3)
                    image3.src = iconUrl
                    if (iconSlot.childNodes.length > 1) {
                        iconSlot.removeChild(iconSlot.childNodes[0])
                    }

            var futureIcon = data.list[31].weather[0].icon.split("")[0] + data.list[31].weather[0].icon.split("")[1] + "d";
                var iconUrl = "https://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon4")

                var image4 = document.createElement("img")
                    iconSlot.appendChild(image4)
                    image4.src = iconUrl
                    if (iconSlot.childNodes.length > 1) {
                        iconSlot.removeChild(iconSlot.childNodes[0])
                    }

            var futureIcon = data.list[39].weather[0].icon.split("")[0] + data.list[39].weather[0].icon.split("")[1] + "d";
                var iconUrl = "https://openweathermap.org/img/wn/" + futureIcon + ".png"
                var iconSlot = document.querySelector("#icon5")

                var image5 = document.createElement("img")
                    iconSlot.appendChild(image5)
                    image5.src = iconUrl
                    if (iconSlot.childNodes.length > 1) {
                        iconSlot.removeChild(iconSlot.childNodes[0])
                    }

                    var cityList = document.querySelector("#formerSearches"); 
                    var newCity = data.city.name;
                    var citySlot = document.createElement("button")
                                    
                    citySlot.textContent = newCity
                    citySlot.className = ("text-light ml-2 font-weight-bold bg-info btn btn-outline-light")
                                 
                    cityList.appendChild(citySlot);     
                    citySlot.onclick = function() { console.log(newCity)}; 
                            
                    if (cityList.childNodes.length > 9) {
                        cityList.removeChild(cityList.childNodes[0])
                        cityList.appendChild(citySlot); 
                    }
                       
                saveCity();
                });             
        }

        else {
            alert("I could not find that city.")
        }

    });
};

var saveCity = function() {  
    var cityCall = $("#formerSearches").html();
    $("#searchSave").html(localStorage.setItem('searchHistory', cityCall))
};

var loadCity = function() {
    $("#formerSearches").html(localStorage.getItem('searchHistory'))
};


loadCity();

cityFormEl.addEventListener("submit", citySearchSubmit)
