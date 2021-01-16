var weatherFetch = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=581f1e37f61d004d56d5c92779c9ed8e"
    fetch(weatherFetch).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });


var test = document.querySelector("#testButton");

var testFun = function() {
    console.log("Did it")
};

test.addEventListener("click", testFun);