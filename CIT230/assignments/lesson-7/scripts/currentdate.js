var today = new Date(); //get the current date
//Get weekday
var weekday = new Array(); 
weekday[0] =  "Sunday"; 
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var dayofweek = weekday[today.getDay()];
//Get date
var date = today.getDate(); 
//Get month
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December"; 
var mnth = month[today.getMonth()]
//Get year
var year = today.getFullYear();
//output to span
today = dayofweek + ', ' + date + ' '+ mnth + ' ' + year;
document.getElementById("currentdate").innerHTML = today;