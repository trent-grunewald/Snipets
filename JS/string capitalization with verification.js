function capitalize(char){
  if (typeof char === "number") {
    return "That is not a valid city";
  }
  return char.charAt(0).toUpperCase() + char.slice(1);
}

var city = 7;
var capital = capitalize(city);
