console.log("Check out my document");

// "Everything" is an object in web development
// We have access to the "document" object, let's check it out:
console.log(document);

// After having a look through the log of the document, we found there was a body, and a style, and then a load of CSS properties.
// We can modify those CSS properties in Javascript.
document.body.style.backgroundColor = "rgb(27, 168, 99)";
document.body.style.color = "white";

// If I want to be very specific and target just one thing from my HTML, I can make use of getElementById() on the document object
const myHtmlHeading = document.getElementById("html-heading-one");
console.log(myHtmlHeading);
myHtmlHeading.style.color = "purple";
myHtmlHeading.style.backgroundColor = "yellow";

const myHtmlP = document.getElementById("p-tag");
myHtmlP.style.color = "pink";

// -----------------
// Creating new elements
const myNewH2 = document.createElement("h2");
// myNewH2.innerText = "Hello! I'm a Javascript H2";
myNewH2.textContent = "Hello! I'm a Javascript H2";
console.log(myNewH2);
document.body.appendChild(myNewH2);

// Creating a new image element
const myNewImage = document.createElement("img");
myNewImage.src =
  "https://images.classic.com/vehicles/360e1f80709b748638a73db4800060a61d3ba0bd.jpg?auto=format&fit=crop&ar=16:9&w=7400";
// I can set the attributes on an element as well!
myNewImage.alt = "Not Steve McQueens Mustang";
myNewImage.width = "400";
myNewImage.title = "It's mine, ALL MINE!";
// finally I must remember to append it somewhere
document.body.appendChild(myNewImage);

// Remove an element
// const removeThisPTag = document.getElementById("remove-me");
// removeThisPTag.remove();
document.getElementById("remove-me").remove(); // nice one-liner!
