let section = document.querySelector('section.towninfo');let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
//send request to retrieve JSON and store in a variable called townInfo
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var townInfo = request.response;
  fillTownInfo(townInfo);
}
//function for creating and displaying town info
  function fillTownInfo(jsonObj) {
    let towns = jsonObj["towns"];
    let townArray = ["Preston", "Fish Haven", "Soda Springs"];
     
    for (i=0; i < towns.length; i++) 
      for (t=0; t < townArray.length; t++)
      {
        if (towns[i].name == townArray[t] ){
        let box = document.createElement("article");
        let boxh1 = document.createElement("h1");
        let line1 = document.createElement("p");
        let line2 = document.createElement("p");
        let line3 = document.createElement("p");
        let line4 = document.createElement("p");
        let image = document.createElement("img");
        let block = document.createElement("div")
        
        boxh1.textContent = towns[i].name;
        line1.textContent = "Motto: " + towns[i].motto;
        line2.textContent = "Year Founded: " + towns[i].yearFounded;
        line3.textContent = "Population: " + towns[i].currentPopulation;
        line4.textContent = "Annual Rainfall " + towns[i].averageRainfall + "in"; 
        image.setAttribute("src", "images/" + towns[i].name + ".jpg");
        image.setAttribute("alt", "Image of " + towns[i].name + ", Idaho"); 
        block.setAttribute("class", "box");
        
                
        box.appendChild(boxh1);
        box.appendChild(line1);
        box.appendChild(line2);
        box.appendChild(line3);
        box.appendChild(line4);
        box.appendChild(image);
        box.appendChild(block);

        section.appendChild(box);
      }
    }  
  }
