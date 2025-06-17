// Lets take a look at variables and data types

// To 'declare' (create) a variable in Javascript, we can use one of two keywords.
let myName = "Frankie";
// we use a 'keyword': let
// we give the variable a name: myName
// we 'assign' a value to it
// we give it a value: "Frankie"
myName = "Vinay"; //Here the value is "Vinay"
myName = "Marina"; //Here the value is "Marina"

let myNumber = 75; //the way I have declared a number is WITHOUT double quotes
let myStringNumber = "55"; // this declaration with double quotes is a string

// Strings: are surrounded with quotes, either "double" or 'single'.
// strings are just that - strings of characters, recognised as text.
let bertiesName = "Bertie"; // this will also be a string

// Numbers: are numbers. They have no quotes. Just write them as numbers

let myBoolean = true;
let myFalseBoolean = false;
// Boolean: is a fancy way of saying either true or false, on or off, 1 or 0.

// ------------
// We have another way of declaring a variable!
// We can use a different keyword, called: const
const myLocation = "Nottingham";
const myCar = "Ford";
const myBankBalance = 300000000000000000;
// when we use 'const', we're saying THIS CANNOT BE CHANGED!

// You can think of const as being short for 'constant'...
myBankBalance = 40000000000000; // I can't do this, because 'myBankBalance' is a CONSTANT value. It will error!

// can we use the same variable name for a let AND a const?
// let tableDimension = 34
// const tableDimension = 55 // we cant do this as it will error!
