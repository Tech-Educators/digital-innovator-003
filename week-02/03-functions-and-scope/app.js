// I first want to check that my app.js is connected to my HTML
console.log("Hello DI003");

// Function time!
// I want to write a function which greets my user

// What we've done so far
// A firstName variable which DOESNT change
const firstName = "Bertie";
// I would like to declare a variable which is a greeting, and it CAN change
let greeting = "Hi!";

// I now want to log this greeting message
console.log(greeting + " " + firstName); // concatenation!
console.log(`${greeting} ${firstName}, welcome to the show!`); //lets use backticks and template literals

// All of the above code exists in the "global scope"
// The variables above exist and are accessible to the rest of the code. You can use them wherever you like.

// However, we want to write a function, which we can run when we like
// A function is written like this:
function functionName() {
  //the code in here are the tasks for the function to complete
}

//lets write a function which says hello to Bertie!
function sayHelloToBertie() {
  // inside these curly brackets is THIS functions 'block scope'
  const usersFirstName = "Berticus";
  const greetingInFunction = "Hey there friend!";
  // These variables are only visible to this block. They only exist in this function
  console.log(`${usersFirstName} ${greetingInFunction}. Have a nice day!`);
}

sayHelloToBertie();

// console.log(greetingInFunction); // this log will error, because the variable only exists inside the function
const jezsName = "Jez"; // this is in the global scope

function sayHelloToJez() {
  const jezsName = "Jeremy"; // this is the block scope
  console.log(`Hello to ${jezsName}!`);
}
sayHelloToJez();
console.log(`Hello to ${jezsName}`);

// We need a way to reuse our function so that our fingers don't get tired from repeating the same code!
// Fortunately, we can use 'parameters' to achieve this
function sayHelloToEveryone(userName, userGreeting, location) {
  console.log(`${userGreeting} ${userName}. How is it in ${location}?`);
}

sayHelloToEveryone("Demir", "How's it going?", "Wexham");
sayHelloToEveryone("Hadia", "Having a nice day?", "Reading");
sayHelloToEveryone("Father Christmas", "IM SO EXCITED", "North Pole");

// let usersInput = prompt("What's your name");
// console.log(`Hey there ${usersInput}`);
// let usersGreeting = prompt("Say something nice");
// let usersLocation = prompt("Where are you right now?");

// sayHelloToEveryone(usersInput, usersGreeting, usersLocation);

// How do we get something out of a function?
// How do we 'return' something?
function returnAThing(firstName, location) {
  // what I want this function to do is to put the first name and the location together, and return it to the user
  let concatenatedThing = firstName + location;

  return concatenatedThing;
}

console.log(returnAThing("Frankie", "Norwich"));
