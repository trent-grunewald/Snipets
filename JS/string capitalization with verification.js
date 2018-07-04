<<<<<<< HEAD
function capitalize(char){
  if (typeof char === "number") {
    return "That is not a valid city";
  }
  return char.charAt(0).toUpperCase() + char.slice(1);
}

var city = 7;
var capital = capitalize(city);
=======
function capitalize(char){
  if (typeof char === "number") {
    return "That is not a valid city";
  }
  return char.charAt(0).toUpperCase() + char.slice(1);
}

var city = 7;
var capital = capitalize(city);
>>>>>>> 5e0ec19f852f5e1c3a9c458cd707074ecb7b3ec6
