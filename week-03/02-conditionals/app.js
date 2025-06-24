console.log("If this is working, THEN I will see the log")

// the structure of a conditional is like so
// if (conditionIsMet){
//     then do this code
// }

// let
// const
// function myFunctionName (parameter){
//     function code here
// }

if (5 < 10){
    console.log("5 is less than 10!")
}

if (10 > 2){
    console.log("10 is greater than 2")
}

if (100 > 999){
    console.log("Will we ever see this log?")
    // the code inside of here never runs because the condition isn't true
}

// Operators
// + -> 'plus' adds or combines two things together
// typeof -> 'typeof' tells you which data type something is
console.log(typeof "hello, what am I?")
// = -> a 'single equals' ASSIGNS a value.
const usersAge = 65 // this data type is a number
// == -> 'double equals' checks value. "40" and 40 are the same
console.log(usersAge == "60") // it's true
console.log(true == "true") // it's false?! Stretch knowledge
// === -> 'triple equals' checks value AND data type. 40 and 40 are the same. "40" and 40 are NOT the same
console.log(usersAge === 60) // Output: true

if (usersAge === 60){
    console.log("You have made it to a delightful age!")
} else if(usersAge >= 65){
    // This operator: >=
    // allows us to check if a number is greater than OR equal to. In one go!
    console.log("Wow, you are doing fantastically aren't you? Keep up the great work")
} else {
    console.log("Hmmmmm, what age are you?")
}

// Stretch Knowledge
// We'll have a look at AND, and we'll have a look at OR

// The OR operator: ||
if (10 > 100 || 10 < 20){ // Only ONE condition needs to me true.
    console.log("The OR condition has been met")
}

// The AND operator: &&
if (2 < 5 && 5 > 1){ // BOTH conditions need to be met
    console.log("Do I appear in the console? Yes ANDAND Yes!")
}

// Complex!
// true AND false - OR - true
if ("mystring" == "mystring" && 5 > 6 || 10 == 10){
    console.log("Do we see this complex conditional?")
    // Yes, we do, because only ONE side of the OR operator needs to be true
}