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
  let a = 1
    for (i = 0; i <= list.length; i++) {
      //fill hiTemp & icons
      if (list[i].dt_txt.includes("18:00:00")) {
        hiTemp[i] = list[i].main.temp_max;
        icons[i] = list[i].weather[0].icon;

        document.getElementById("temp" + a).innerHTML = hiTemp[i];
        let icon = document.createElement("img");
        icon.setAttribute("src", "http://openweathermap.org/img/w/" + icons[i] + ".png");
        document.getElementById("icon" + a).innerHTML = icon;
        a++;
      
      }   
    }
}  
    //http://openweathermap.org/img/w/10d.png
     //http://openweathermap.org/img/w/
