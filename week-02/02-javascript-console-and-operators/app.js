// Remember how we declare variables:
let theWeather = "Sunny"; // 'let' if it can change
const myFirstName = "Frankie"; // 'const' if it should remain the same

// uh oh! The weather has changed
theWeather = "Rainy"; // Because we 'let' our variable, we can change the value!

// ----------
// The console in our browsers inspector, shows us two things:
// 1: What we have TOLD it to show us.
// 2: Any errors which are occuring in our Javascript code.

// this next line, if we remove the '//'s, will create an error:
// myFirstName = "Bob";

console.log("Hello");

// The way a console log works is:
// we say, "Hey computer, "log" a message of some sort, to our console, on the browser!"
// In between the brackets is where we tell the computer what message we want
console.log("Have a great day"); //Output: "Have a great day"
console.log("Enjoy your meal"); //Output: "Enjoy your meal"
console.log(45); //Output: 45
console.log("50"); //Output: ""50"

// Check out how these next console.logs look in the browsers console.
// Does the output change?
console.log(theWeather);
theWeather = "Misty";
console.log(theWeather);
theWeather = "Sunny again!";
console.log(theWeather);
console.log(theWeather);
console.log(theWeather);
console.log(theWeather);

// ----------
// Javascript is super useful. We can perform operations
const myFirstNumber = 10;
const mySecondNumber = 20;
const myCombinedNumber = myFirstNumber + mySecondNumber; // Is this value 30?
// I'll write a console log to check the value!!
console.log("The value of myCombinedNumber is: " + myCombinedNumber); //Output: "The value of myCombinedNumber is: 30"

// What if we use '+' to put things together?
console.log(myCombinedNumber + myFirstNumber); //Output: 40
console.log(30, 10); //Output: 30 10
console.log(myCombinedNumber, myFirstNumber); //Output: 30 10
console.log(
  "Please write this message",
  " and then, write this message",
  "and finally, write this message"
); //Output: "Please write this message  and then, write this message and finally, write this message"

console.log("Frankie" + "Shrieves" + "is my name");
const mySecondName = "Shrieves";
const suffix = "is my name";
const myCombinedString = myFirstName + mySecondName + suffix;
console.log(myCombinedString);

// We've just looked at how using the '+' plus sign to add variables together can just squash strings together
// We can use "template literals" to avoid this.
console.log(
  `Hello, I'm in backticks! ${myFirstName} is my first name. ${mySecondName} is my second name.`
);
// template literals, when inside of backticks, allow us to do some Javascript inside of a string
console.log(
  `Here we are just doing some code! ${5 + 5 + 5}. Here's some more: ${
    myFirstNumber + mySecondNumber + myFirstName
  }`
);

console.log(typeof myCombinedNumber); //Output: number
console.log(typeof mySecondName); //Output: string

// Some other operators for you to play with
// + -> 'plus' adds or combines two things together
// typeof -> 'typeof' tells you which data type something is

// = -> a 'single equals' ASSIGNS a value.
// == -> 'double equals' checks value. "40" and 40 are the same
// === -> 'triple equals' checks value AND data type. 40 and 40 are the same. "40" and 40 are NOT the same
console.log(40 === 40); //play with this!

// <   --> Check if something is lower than something else
console.log(3 < 10); //true
// >   --> Checks if something is greater than something else
console.log(10 > 4); //true
