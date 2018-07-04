// var num = -10;
// while (num <= 19) {
//   console.log("num is: " + num);
//   num++
// }
//
// var str = "test";
// var count = 0;
// while (count < str.length) {
//   console.log(str[count]);
//   count++;
// }
//
// var num2 = 10;
// while (num2 <= 40) {
//   console.log(num2);
//   num2+=2;
// }
//
// var num3 = 300;
// while (num3 <= 333) {
//   if (num3 % 2 !== 0) {
//     console.log(num3);
//   }
//   num3++;
// }
//
// var div = 5;
// while (div <=50) {
//   if (div % 5 == 0 && div % 3 == 0) {
//     console.log(div);
//   }
//   div++;
// }

// index.of === -1  = if it is anywhere in the answer it passes//
// var answer = prompt ("Are you here to test?");
//
// while (answer.indexOf("Trent invited me") === -1) {
//   var answer = prompt("Are you here to test?");
// }
// alert("Welcome");

// ------------------------------------FOR--------------
// for (var i = -10; i <= 19; i++) {
//   console.log(i);
// }
//
// for (var j = 10; j <= 40; j+= 2) {
//   console.log("J is" + j);
// }
//
// for (var k = 300; k <= 333; k++) {
//   if (k % 2 !== 0) {
//     console.log(k);
//   }
// }
//
// for (var e = 5; e <= 50; e++) {
//   if (e % 5 === 0 && e % 3 === 0) {
//     console.log(e);
//   }
// }
// ---------------------------------------------------------------------
// -----------------------MULTIPLE ARGUEMENTS-----------------------
// function hello(person1, person2, person3) {
//   console.log("hello there " + person1 + "!");
//   console.log("hello there " + person2 + "!");
//   console.log("hello there " + person3 + "!");
// }
//
// function capitalize(str){
//   return str.charAt(0).toUppercase() + str.slice(1);
// }
// ---------------------------------------------------------------------
// -----------------------IS EVEN?----------------------------------------------
// function isEven(num){
//   if (num % 2 === 0) {
//     return true;
//   }else {
//     return false;
//   }
// }
// ---------------------------------------------------------------------
// -----------------------FACTORIAL----------------------------------------------
// function factorial(num){
//   for (i = 1; num > 0; num--) {
//     i*=num;
//   }
//   return i;
// }
// ---------------------------------------------------------------------
// ---------------------REPLACE-----------------------
// function replace(name){
//     var rep = name;
//     var res = rep.replace(/-/g,"_");
//     return(res);
// }
// ---------------------------------------------------------------------


// for(var i = 0; i < comments.length; i++){
//   console.log(comments[i]);
// }
//
// comments.forEach(function(comments){
//   console.log(comments);
// });
//
// // ----------------------- PRINT REVERSE------------------------------------
// function printReverse(arr){
// for (var i = arr.length-1; i >= 0; i--) {
//   console.log(arr[i]);
//   }
// }
// printReverse( ["This movie is great", "Terrifying movie", "Highly recommend this to horror fans!"] )
//
//
// // -------------------------IS UNIFORM---------------------------------------
// function isUniform(arr){
//   var tes = arr[0];
//   for (var i = 1; i <= arr.length; i++) {
//     if (arr[i] !== tes) {
//       return false;
//     }
//   }
//   return true;
// }
//
// // -------------------------SUM ARRAY---------------------------------------
// function sumArray(arr){
//   var total = 0;
//   arr.forEach(function(element){
//     total += element;
//   });
//   return total;
// }
//
// // -------------------------MAX ARRAY---------------------------------------
// function max(arr){
//   var max = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }

// ----------------------------ARRAY OF COMMENTS-----------------------------------
// var posts = [
//   {
//     title: "I want to play video games",
//     author: "Se_7_eN",
//     reply: ["Then do it", "One night won't kill you"]
//   },
//   {
//     title: "Me too",
//     author: "Fantus",
//     reply: ["Start Deus Ex", "Loser"]
//   }
// ]

// -----------------MOVIE RATING COMMENTS-------------------------------------
//
// var movies = [
//   {
//     title: "Event Horizon",
//     watched: true,
//     rating : "5 stars",
//   },
//   {
//     title: "Terrifier",
//     watched: true,
//     rating : "3.5",
//   },
//   {
//     title: "Island Zero",
//     watched: false,
//     rating : "3",
//   },
//   {
//     title: "Mandy",
//     watched: false,
//     rating : "5",
//   }
// ]
//
// for (var i = 0; i < movies.length; i++) {
//   if (movies[i].watched === true) {
//     console.log("You have seen " + movies[i].title + " and rated it " + movies[i].rating);
//   }else{
//     console.log("you have not seen " + movies[i].title + " and your rating doesn't matter.")
//   }
// }

// -----------------------METHOD IN OBJECT-------------------------------------
//
// var tes = {
//   name: "tom",
//   age: 45,
//   isCool: true,
//   friends: function(x,y){
//     return x + y;
//   }
// }
//
// tes.friends("Tom ", "Hanks")

// -----------------------------PRINT OBJECT COMMENTS (THIS)---------------------
// var comments = {}
// comments.data = ["Derp", "Moran!", "Loser, Get a job!", "I love you!"]
//
// comments.print = function(){
//   this.data.forEach(function(com){
//     console.log(com);
//   });
// }

// -------------------------------DOM MANIPULATORS----------------------------------
//
// document.getElementById()
// document.getElementsByClassName()
// document.getElementByTagName()
// document.querySelector() - only gives first result
// document.querySelectorAll()

// -------------------------------------------------------------------------------------

var tag = docuemnt.getElementById("highlight");

tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
