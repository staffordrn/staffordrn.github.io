let temp = parseInt(document.getElementById("temperature").innerHTML);
let wind = parseInt(document.getElementById("wspeed").innerHTML);
let wChill = windChill(temp, wind)
document.getElementById("wchill").innerHTML = wChill;
function windChill(tempF, speed)
  {
    let pow = Math.pow(speed, 0.16);
    return Math.round(35.74 + (0.6215 * tempF) - (35.75 * pow) + (0.4275 * tempF * pow));
  }