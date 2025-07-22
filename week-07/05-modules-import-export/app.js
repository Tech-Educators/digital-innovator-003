import { myFaveBooks, myFirstName, myNickName } from "./variables.js"; // These are named imports. We are using their name between curly braces
import favouriteThings from "./favouriteThings.js"; // This is a default export. The name we use is declared here. NOTE: no curly braces
import { count, increaseCount } from "./counter.js";

console.log("I am in the app.js file!");

console.log(myFaveBooks);
console.log(myFirstName, myNickName);

console.log(document);
const myPagesh1 = document.getElementById("page-h1");

console.log(favouriteThings.getFruits());

// Here's my counter:
const counterP = document.getElementById("page-counter");
const counterButton = document.getElementById("counter-button");

counterP.textContent = "Count: " + count;

counterButton.addEventListener("click", () => {
  console.log("CLicked!");
  increaseCount();
  counterP.textContent = "Count: " + count;
});
