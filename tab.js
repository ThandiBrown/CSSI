console.log('This works better now');

var cookies = [
  "chocolate chip",
  "the lemon ones",
  "thin mints",
  "oreos",
  "samoa",
  "oatmeal"];

function eat(cookies) {
  console.log("I just ate "+cookies);}

function eatCookies(){
for (var i=0; i<cookies.length; i=i+1){
  eat(cookies[i]);}
}

var eatButton = $(".devour");
eatButton.on("click", eatCookies);

var text = $(".author");

var colorButton = $(".color");
colorButton.on("click", function(){
  text.toggleClass("green");
});
