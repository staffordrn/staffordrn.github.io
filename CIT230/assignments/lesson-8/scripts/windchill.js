/*var t = parseFloat(document.getElementById("temperature").value);
var s = parseFloat(document.getElementById("wspeed").value);
var chill = windchill(s, t)
		document.getElementById("wchill").innerHTML = windchill;
function windchill(speed, temp)
{
  var pow = Math.pow(speed, 0.16);
  var calc = 35.74 + (0.6215 * temp) - (35.75 * pow) + (0.4275 * temp * pow);
  return calc;
}*/

var temp = parseInt(document.getElementById("temperature").innerHTML);
var wind = parseInt(document.getElementById("wspeed").innerHTML);
var wChill = windChill(temp, wind)
document.getElementById("wchill").innerHTML = wChill;
function windChill(tempF, speed)
{
  var pow = Math.pow(speed, 0.16);
  var calc = Math.round(35.74 + (0.6215 * tempF) - (35.75 * pow) + (0.4275 * tempF * pow));
  return calc;
}