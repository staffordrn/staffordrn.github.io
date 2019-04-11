let getURL = "https://staffordrn.github.io/templeinfo.json";
let get = new XMLHttpRequest();
get.open("GET", getURL);
get.responseType = "json";
get.send();
get.onload = function() {
  var templeInfo = get.response;
  fillTheBox(templeInfo);
}
function fillTheBox(info) {
  let temples = info["temple"];
  //---basic info
  for (i = 0; i < temples.length; i++) {  
  let list = document.createElement("ul");
  let name = document.createElement("li");
  let address = document.createElement("li");
  let phone = document.createElement("li");
  name.textContent = temples[i].name;
  address.textContent = temples[i].address;
  phone.textContent = temples[i].phone;
  list.appendChild(name);
  list.appendChild(address);
  list.appendChild(phone);
  let info = document.getElementById("info" + i);
  info.appendChild(list);
  }
  //---closings
  for (i = 0; i < temples.length; i++) {
    let closings = document.createElement("ul");
      for (j = 0; j < temples[i].closed.length; j++) {
        let closed = document.createElement("li");
        closed.textContent = temples[i].closed[j];
        closings.appendChild(closed);
        let close = document.getElementById("closed" + i);
        close.appendChild(closings);
      }
    }
  //---schedule
  for (i = 0; i < temples.length; i++) {
    let sessionCap = document.createElement("p");
    sessionCap.textContent = "Sessions: ";
    let sessions = document.createElement("ul");
    for (s = 0; s < temples[i].schedule.sessions.days.length; s++) {
      let session = document.createElement("li");
      session.textContent = temples[i].schedule.sessions.days[s] + ": " + temples[i].schedule.sessions.hours[s];
      sessions.appendChild(session);
      let sched = document.getElementById("schedule" + i);
      sched.appendChild(sessionCap);
      sched.appendChild(sessions);
    }
  }
  for (i = 0; i < temples.length; i++) {
    let baptCap = document.createElement("p");
    baptCap.textContent = "Baptisms: ";
    let bapt = document.createElement("ul");
    for (b = 0; b < temples[i].schedule.bapt.days.length; b++) { 
      let bap = document.createElement("li");
      bap.textContent = temples[i].schedule.bapt.days[b] + ": " + temples[i].schedule.bapt.hours[b];
      bapt.appendChild(bap);
      let sched = document.getElementById("schedule" + i);
      sched.appendChild(baptCap);
      sched.appendChild(bapt);
    }
  }
  for (i = 0; i < temples.length; i++) {
    let initCap = document.createElement("p");
    initCap.textContent = "Initiatories: ";
    let init = document.createElement("ul");
    for (n = 0; n < temples[i].schedule.init.days.length; n++) {
      let ini = document.createElement("li");
      ini.textContent = temples[i].schedule.init.days[n] + ": " + temples[i].schedule.init.hours[n];
      init.appendChild(ini);
      let sched = document.getElementById("schedule" + i);
      sched.appendChild(initCap);
      sched.appendChild(init);
    }
  }
  for (i = 0; i < temples.length; i++) {
    let sealCap = document.createElement("p");
    sealCap.textContent = "Sealings: ";
    let seal = document.createElement("ul");
    for (l = 0; l < temples[i].schedule.seal.days.length; l++) {
      let sea = document.createElement("li");
      sea.textContent = temples[i].schedule.seal.days[l] + ": " + temples[i].schedule.seal.hours[l];
      seal.appendChild(sea);
      let sched = document.getElementById("schedule" + i);
      sched.appendChild(sealCap);
      sched.appendChild(seal);
    }  
  }
  //---services
  for (i = 0; i < temples.length; i++) {
    let services = document.createElement("ul");
      for (c = 0; c < temples[i].services.length; c++) {
        let service = document.createElement("li");
        service.textContent = temples[i].services[c];
        services.appendChild(service);
        let serv = document.getElementById("services" + i);
        serv.appendChild(services);
      }
    }  
  //---history
  for(i=0; i < temples.length; i++) {
      for(h in temples[i].history) {
        let text = temples[i].history[h];
        let list = document.createElement("ul");
        let item = document.createElement("li");
        item.textContent = text;
        list.appendChild(item);
        let div = document.getElementById("history" + i);
        div.appendChild(list);        
      }
    }
  }