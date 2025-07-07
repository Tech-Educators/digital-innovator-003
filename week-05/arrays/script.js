let variable = 1;

//Arrays store multiple pieces of data under a single variable name:
const array = ["apple", 123, true, "plum", "pear"];
// When counting items in an array we count from 0.

const User003 = ["Joe", "Venton", 38, "Norwich", true];
console.log(User003.length);
console.log(array.length);
// to target a specific item in an array we refer to it's index position:
console.log(User003[4]);
// we can insert data into arrays like this:
User003[5] = "Renting";
// if you insert data into an array in this way, it's possible to replace existing data if you target an index value already in use:
User003[1] = "NEWDATA";
console.log(User003);

//empty array initialised
const colors = [];

// .push will insert data into the end/last index position of the array:
colors.push("red");
colors.push("purple");

// .pop will remove the last item in an array/highest index position:
colors.pop();

// .unshift will add an item to the 0th position/start of an array without overwriting any data:
colors.unshift("NEWCOLOUR");

// .shift will remove an item from the start/0th index of the array:
colors.shift();

// .splice will let us insert an item between two different index position in the array:
// splice(indexStartPoint, numberofItemsToDelete, itemToAdd)
colors.splice(1, 0, "NEWDATA");

const animals = ["dog", "rat", "fish", "snail", "cow", "horse"];

animals.splice(1, 3, "NEWANIMAL");

console.log(animals);
