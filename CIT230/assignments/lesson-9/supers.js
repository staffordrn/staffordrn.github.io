var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//send request to retrieve JSON and store in a variable called superHeroes
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
//function to populate the header
function populateHeader(jsonObj) {
  var myh1 = document.createElement("h1");
  myh1.textContent = jsonObj["squadName"];
  header.appendChild(myh1);

  var myPara = document.createElement("p");
  myPara.textContent = "Hometown: " + jsonObj["homeTown"] + " //  Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}
//function for creating and displaying hero cards
function showHeroes(jsonObj) {
  var heroes = jsonObj["members"];

  for (var i=0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    var myh2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");

    myh2.textContent = heroes[i].name;
    myPara1.textContent = "Secret Identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers: ";

    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myh2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}