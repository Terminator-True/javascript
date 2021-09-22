'use strict'

//condicional if
var hour = 10;
var greeting;


if (hour < 18) {
    greeting = "Good day";
}
console.log (greeting);

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log (greeting);
if (hour < 10) {
    greeting = "Good morning";
} else if (hour < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log (greeting);
// switch

var day;
var data = new Date();


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
   
  }
  console.log (day);

  var text;
  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log (text);



