let weather = ["4575352", "5131095", "4452808", "4348599"];

let request = new Array(weather.length);
for (let i = 0; i < request.length; i++) {
  let weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=" + weather[i] + "&APPID=f8d7ebbbba4f053dd7c51d765d385ecc&units=imperial";
  request[i] = new XMLHttpRequest();
  request[i].open("GET", weatherURL, true);
  request[i].send();
  request[i].onload = function() {
    let weatherData = JSON.parse(request[i].responseText);
    console.log(weatherData);
    templeWeather(weatherData);
  }
  function templeWeather(data) {
    let wthr = document.createElement("div");
    let temp = document.createElement("p");
    let cond = document.createElement("img");

    temp.textContent = "Currently: " + parseInt(data.main.temp) + " and " + data.weather[0].main;
    cond.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    wthr.setAttribute("class", "crrnt");
    let divs = document.getElementById("weather"+[i]);
    wthr.appendChild(temp);
    wthr.appendChild(cond);
    divs.appendChild(wthr);
  }
}