let article = document.querySelector("article#events");
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var townInfo = request.response;
  eventInfo(townInfo); 
}
function eventInfo(jsonInfo) {
  let towns = jsonInfo["towns"];
  let townName = document.getElementById("pagetitle").innerHTML;
  for (i=0; i < towns.length; i++)
      if (townName.includes(towns[i].name)){      
        
        let event1 = document.createElement("p");
        let event2 = document.createElement("p");
        let event3 = document.createElement("p");

        event1.textContent = towns[i].events[0];
        event2.textContent = towns[i].events[1];
        event3.textContent = towns[i].events[2];

        article.appendChild(event1);
        article.appendChild(event2);
        article.appendChild(event3);
  }
}