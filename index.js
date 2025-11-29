var playerOneName = localStorage.getItem("playerOneName");
var playerTwoName = localStorage.getItem("playerTwoName");
if (!playerOneName || !playerTwoName) {
  var playerOneName = prompt("Enter Player 1 name:");
  var playerTwoName = prompt("Enter Player 2 name:");

  localStorage.setItem("playerOneName", playerOneName);
  localStorage.setItem("playerTwoName", playerTwoName);
}
document.querySelectorAll("p")[0].innerHTML = playerOneName;
document.querySelectorAll("p")[1].innerHTML = playerTwoName;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = playerOneName + " Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = playerTwoName + " Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
function resetPlayer() {
  localStorage.removeItem("playerOneName");
  localStorage.removeItem("playerTwoName");
  location.reload();
}
