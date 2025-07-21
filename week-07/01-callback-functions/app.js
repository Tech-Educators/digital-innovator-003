console.log("Woooo yes callback functions");

// A "callback function" is pretty much just a function passed as a parameter

const simpleButton = document.getElementById("simple-button");

// below, in our simpleButton event listener, we have used an 'anonymous' function
// its a function without a name!
simpleButton.addEventListener("click", function () {
  console.log("simple button clicked");
});

// Named function:
function changeBackgroundColourToTomato() {
  document.body.style.backgroundColor = "tomato";
}

// AVOID THIS:
// function changeBackgroundColourToPurple() {
//   document.body.style.backgroundColor = "tomato";
// }

// function changeBackgroundColourToYellow() {
//   document.body.style.backgroundColor = "tomato";
// }

// Instead do this:
function changeBackgroundColour(colourAsString) {
  console.log(colourAsString);
  document.body.style.backgroundColor = colourAsString;
}

changeBackgroundColour("yellow");

// The next three lines look into our index.HTML to select our buttons
const bgChangeTomato = document.getElementById("bg-change-tomato");
const bgChangeLemonchiffon = document.getElementById("bg-change-lemonchiffon");
const bgChangePurple = document.getElementById("bg-change-purple");

// this next example uses a Named Function as its 'Callback Function'
bgChangeTomato.addEventListener("click", changeBackgroundColourToTomato);

// this next example uses an 'Anonymous Function' as its Callback, BUT that function invokes another function (with a parameter!)
bgChangeLemonchiffon.addEventListener("click", function () {
  changeBackgroundColour("lemonchiffon");
});

// there is a shorter way to write this, with an arrow function:
bgChangePurple.addEventListener("click", () => {
  changeBackgroundColour("purple");
});

// ----------------
// forEach loop example
const myFruitArray = ["banana", "orange", "apple", "pear", "grapes"];

myFruitArray.forEach(function (x) {
  console.log("The currently selected fruit is", x);
});

myFruitArray.forEach((currentFruit) => {
  console.log("My arrow function loop is:", currentFruit);
});
