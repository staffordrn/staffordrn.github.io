let weatherRequest = new XMLHttpRequest();
let apiURL = "https:api.openweathermap.org/data/2.5/weather?id=5061036&APPID=f8d7ebbbba4f053dd7c51d765d385ecc&units=imperial"
weatherRequest.open("GET", apiURL, true);
weatherRequest.send();
weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
  document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}
