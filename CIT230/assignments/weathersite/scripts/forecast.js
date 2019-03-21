let getForecast = new XMLHttpRequest();
let tName = document.getElementById("pagetitle").innerHTML;
var tId;
  switch(tName) {
  case "Preston Idaho" :
    tId = "5604473";
    break;
  case "Soda Springs Idaho" :
    tId = "5678757";
    break;
  case "Fish Haven Idaho" :
    tId = "5585000";
    break;
    }
let forecastURL = "https:api.openweathermap.org/data/2.5/forecast?id=" +tId+ "&APPID=f8d7ebbbba4f053dd7c51d765d385ecc&units=imperial";
getForecast.open("GET", forecastURL, true);
getForecast.send();
getForecast.onload = function() {
  let forecastData = JSON.parse(getForecast.responseText);
  fiveDayForecast(forecastData);
  
  }
let fiveDays = getFiveDays();
function fiveDayForecast(data) {
  console.log(data);
  let hiTemp = [];
  let icons = [];
  let list = data["list"];
  let table = document.getElementById("table");
  
  for (i = 0; i < list.length; i++) {
    //fill hiTemp & icons
    if (list[i].dt_txt.includes("18:00:00")) {
      hiTemp[i] = list[i].main.temp_max;
      icons[i] = list[i].weather[0].icon;
      
      let tempdiv = document.createElement("div");
      let icondiv = document.createElement("div");
      
      let temp = document.createElement("p");
      let icon = document.createElement("img");
  
      
      temp.textContent = hiTemp[i];
      icondiv.setAttribute("class", "icon");
      tempdiv.setAttribute("class", "temp");
      icon.setAttribute("src", "http://openweathermap.org/img/w/" + icons[i] + ".png");
      
      tempdiv.appendChild(temp);
      icondiv.appendChild(icon);

      table.appendChild(tempdiv);
      table.appendChild(icondiv);
    }   
  }
}
function getFiveDays() {
let chart = document.getElementById("table");
let date = new Date();
let today = date.getDay();
let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	for (b = 0; b <5; b++){ 
    while (today <= 7 && b <5) { 
      let day = weekdays[today];
      let daydiv = document.createElement("div")
      let dayp = document.createElement("p");
      daydiv.setAttribute("class", "day");
      dayp.textContent = day;
	    daydiv.appendChild(dayp);
	    chart.appendChild(daydiv);
	  
      today++;
      b++;
      if (today == 7){today = 0;}
    }
  }  
}