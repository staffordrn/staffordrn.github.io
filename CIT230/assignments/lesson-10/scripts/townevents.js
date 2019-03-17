let article = document.querySelector("article#events");
let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
//send request to retrieve JSON and store in a variable called townInfo
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var townInfo = request.response;
  eventInfo(townInfo);
  
}
function eventInfo(jsonObj) {
  let towns = jsonObj["towns"];
  for (i=0; i < towns.length; i++) {
    if (towns[i].name == "Preston");
  let div = document.createElement("div")
  let event1 = document.createElement("p");
  let event2 = document.createElement("p");
  let event3 = document.createElement("p");

  event1.textContent = towns[5].events[0];
  event2.textContent = towns[5].events[1];
  event3.textContent = towns[5].events[2];

  div.appendChild(event1);
  div.appendChild(event2);
  div.appendChild(event3);

  article.appendChild(div);
  }
}
