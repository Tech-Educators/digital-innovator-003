console.log("Hello Objects!");

// ------------- -------------

// ARRAYS
// an array is a list of items. This array is about me.
const mySuperOKArray = ["Frankie", "Nottingham", "Ford", 2000, true];
// The limitation of arrays is that the information contained doesn't have a 'key'.

// accessing an item on an array
console.log(mySuperOKArray);
console.log(mySuperOKArray[1]); // this is how we would access "Nottingham" in the array
console.log(mySuperOKArray[4]);

// ------------- -------------

// OBJECTS
// are defined with curly brackets/curly braces/curly bois
const objectAboutFrankie = {
  username: "Frankie",
  workLocation: "Nottingham",
  makeOfCarDriven: "Ford",
  yearOfMillenium: 2000,
  ridesABicycle: true,
  10: "ten", // weird. Don't do this
  myFavouriteColours: ["blue", "orange", "purple"],
};
// Objects allow us to attach 'keys' to our individual values. Instead of 'true' being some kind of unknown value, we can give it more information.

// accessing items on an object
console.log(objectAboutFrankie); // the whole thing

// method 01
console.log(objectAboutFrankie["username"]); // Output: "Frankie"

// method 02 - the more common way. This is called Dot Notation
console.log(objectAboutFrankie.workLocation); // Output: "Nottingham"
console.log(objectAboutFrankie.ridesABicycle); // Output: true
console.log(objectAboutFrankie[10]); // don't write your objects like this please!

// remember, all we're doing is telling the computer, "go and look at that variable (the box with information in it), and get me what is there"
const myNumber = 42;
console.log(myNumber);

// objects can be more "complex", but all that really means is having data types within data types - arrays within objects, and so on
console.log(objectAboutFrankie.myFavouriteColours[1]); // Output: orange

// ------------- -------------

// ADDING ITEMS TO AN OBJECT
objectAboutFrankie.currentBook = "Master of Change"; // the code checks the object, checks if the key is there, and if the key doesn't exist it will add it! Woo!
console.log(objectAboutFrankie); // now check to see if it added!

// UPDATING EXISTING ITEMS
objectAboutFrankie.workLocation = "Leicester"; // if the key exists, the code will update the value
console.log(objectAboutFrankie);

// ------------- -------------
// 'Real World Example'

const myBooks = [
  {
    title: "Master Of Change",
    author: "Brad Stulberg",
    releaseYear: "2023",
  },
  {
    title: "Harry Potter and the Philosophers Stone",
    author: "J.K. Rowling",
    releaseYear: "1997",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    releaseYear: "2011",
  },
  {
    title: "The Travels of Reverend ólafur Egilsson",
    author: "ólafur Egilsson",
    releaseYear: "1627",
  },
];

console.log("myBooks array is this:", myBooks);
console.log(myBooks[3].title); // get me the book, in position 03, and show me its' title.
myBooks[3].price = 20; // get me the book, in position 03, and update its 'price'.
console.log(myBooks[3]);
console.log("myBooks on line 82 ", myBooks);

// ------------- -------------

// Stretchy bit of for-loop practice for this lesson.
console.log("length of myBooks array", myBooks.length);

for (let currentIndex = 0; currentIndex < myBooks.length; currentIndex++) {
  console.log(currentIndex);

  console.log(myBooks[currentIndex]); // use the 'currentIndex' number as the position in the array
  myBooks[currentIndex].price = 20;
}

console.log(myBooks); // at this stage, every book should now have a price.
