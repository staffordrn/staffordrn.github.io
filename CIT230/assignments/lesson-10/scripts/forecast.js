let getForecast = new XMLHttpRequest();
let forecastURL = "https:api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f8d7ebbbba4f053dd7c51d765d385ecc&units=imperial";
getForecast.open("GET", forecastURL, true);
getForecast.send();
getForecast.onload = function() {
  let forecastData = JSON.parse(getForecast.responseText);
  console.log(forecastData);
  fiveDayForecast(forecastData);
  }
function fiveDayForecast(data) {
let hiTemp = [];
let icons = [];
let list = data["list"];

  for (i = 0; i <= list.length; i++) {
    //fill hiTemp & icons
    if (list[i].dt_txt.includes("18:00:00")) {
      hiTemp[i] = list[i].main.temp_max;
      icons[i] = list[i].weather[0].icon;
    }
    for (a = 1; a <= 5; a++) {
    document.getElementById("temp" + a).innerHTML = hiTemp[i];
    document.getElementById("icon" + a).innerHTML = icons[i];
    }   
  }
}
