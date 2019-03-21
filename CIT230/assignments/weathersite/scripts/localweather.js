let getWeather = new XMLHttpRequest();
let townName = document.getElementById("pagetitle").innerHTML;
var townId;
  switch(townName) {
  case "Preston Idaho" :
    townId = "5604473";
    break;
  case "Soda Springs Idaho" :
    townId = "5678757";
    break;
  case "Fish Haven Idaho" :
    townId = "5585000";
    break;
    }
let weatherURL = "https:api.openweathermap.org/data/2.5/weather?id=" +townId+ "&APPID=f8d7ebbbba4f053dd7c51d765d385ecc&units=imperial";
getWeather.open("GET", weatherURL, true);
getWeather.send();
getWeather.onload = function() {
  let weatherData = JSON.parse(getWeather.responseText);
//local forecast
 document.getElementById("condition").innerHTML = weatherData.weather[0].main;
 document.getElementById("temperature").innerHTML = weatherData.main.temp;
 document.getElementById("humidity").innerHTML = weatherData.main.humidity;
 document.getElementById("wspeed").innerHTML = weatherData.wind.speed;
 //windchill function
 let temp = parseInt(document.getElementById("temperature").innerHTML);
let wind = parseInt(document.getElementById("wspeed").innerHTML);
let wChill = windChill(temp, wind)
document.getElementById("wchill").innerHTML = wChill;
function windChill(tempF, speed)
  {
    let pow = Math.pow(speed, 0.16);
    return Math.round(35.74 + (0.6215 * tempF) - (35.75 * pow) + (0.4275 * tempF * pow));
  }
}