var weatherObject = new XMLHttpRequest();
weatherObject.open("GET", "//api.openweathermap.org/data/2.5/weather?zip=83276,us&appid=aeed2509d742c86cb48be8a55ac1bdaa&units=imperial", true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    // Calculate wind chill using JSON data
    temp = weatherInfo.main.temp;
    windSpeed = weatherInfo.wind.speed;
    windChill = (35.74 + (0.6215 * temp)) - ((35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp) * Math.pow(windSpeed, 0.16));

    // Display weatehr condition, temperature, and wind chill
    document.getElementById("condition").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("temp").innerHTML = weatherInfo.main.temp;
    document.getElementById("chill").innerHTML = Math.round(windChill);

    
} // end of function