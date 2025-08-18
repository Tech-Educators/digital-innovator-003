// debugger;
console.log("I am debugging like a 10x Dev");

const myAwesomeVariable = 95;
const mySecondVariable = "AMAZING!";
let myChangableVariable = "Bertie";
myChangableVariable = "Frankie";

// have a look at 'this' in an object

function countToTen() {
  for (let i = 0; i < 10; i++) {
    console.log("The current value of i in the loop is:", i);
  }
}

countToTen();
