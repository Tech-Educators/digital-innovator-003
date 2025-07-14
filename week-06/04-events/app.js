console.log("Events time!");

// First i need my Javascript to 'go and get' my button
const myCounterButton = document.getElementById("counter-button");

let myCounter = 0;
const myPCounter = document.getElementById("p-counter");
// Next, I need to handle the EVENT of a user clicking my button
// I can achieve this with addEventListener()

// addEventListener takes 2 parameters:
// 1: the event to listen for
// 2: is the function to execute on the event
myCounterButton.addEventListener("click", function () {
  console.log("I HAVE BEEN CLICKED! OBSERVE AT MY INTERACTIVITY");
  // every time the button is clicked, add one to my counter
  myCounter = myCounter + 10;
  // mycounter++ // alternatively, this
  console.log(myCounter);
  myPCounter.innerText = "The count is = " + myCounter;
  //myPCounter.innerText = `The count is =  ${myCounter}` //alternatively, this
});

// -----------
// How to make an event listener to change the background
const myBackgroundButton = document.getElementById("bg-colour-tomato");

myBackgroundButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "LemonChiffon";
});

// -----------
// CHALLENGE!
// Create an array
// Figure out how to either, randomly set or set in order, the background colour from the array of colours.
