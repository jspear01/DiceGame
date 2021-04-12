// creating a random number
var randomNumber1 = Math.floor(Math.random()*6+1);

var randomNumber2 = Math.floor(Math.random()*6+1);
// Changing an image

document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

// Check who is a winner

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🤗Player 1 Win!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🤗Player 2 Win";
}
else{
  document.querySelector("h1").innerHTML = "🤔No Winner...";
}
