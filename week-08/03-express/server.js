// Now I need to make the 'express' code available in this javascript file
import express from "express";
console.log("Server file running");
// --- --- ---
// Next I have some 'boilerplate' which helps me to set up my server.
// This boilerplate is going to grow as we learn more, but for now it's only a couple of lines of variables:
const app = express(); // this variable lets me use express code in my server app.
const port = 8080; //we'll dive into what this is for at the end of this file

// --- --- ---
// Building our first GET route!
app.get("/", function (request, response) {
  console.log("You have visited my root route. Have a rootin' tootin' time!");

  // For a response to show on our client, we actually need to send a response:
  response.json("Root route has bit hit. Ow!");
});
// 1. We access our 'app' variable
// 2. We use the .get() method to set up a GET route
// 3. We give that method 2 parameters:
// -- A path
// -- A function to run when that path is visited.

// --- --- ---
// Let's put it all together and figure out a way to send our own 'books' data back to a client
const ourBooks = [
  {
    title: "Flat Stanley",
    imgSource:
      "https://d1lp72kdku3ux1.cloudfront.net/title_instance/839/medium/3546231.jpg",
    imgAlt: "a fantastic childrens book",
  },
  {
    title: "Dilla Time - The Life And After Life",
    imgSource:
      "https://soundsoftheuniverse.com/img/cGdsVDdrWVo2U096bDRFaXAvNW1ndz09/71je-ual9bl.jpg",
    imgAlt: "an image of the book Dilla Time",
  },
  {
    title: "Atomic Habits",
    imgSource:
      "https://parentotheca.com/wp-content/uploads/2021/04/IMG_0356-scaled.jpg",
    imgAlt: "the front cover of the book Atomic Habits",
  },
  {
    title: "The Diary of a CEO",
    imgSource:
      "https://www.penguin.co.uk/_next/image?url=https%3A%2F%2Fcdn.penguin.co.uk%2Fdam-assets%2Fbooks%2F9781529146509%2F9781529146509-jacket-large.jpg&w=819&q=100",
    imgAlt: "an image of the book, THe Diary of a CEO",
  },
  {
    title: "Blood on the Streets: A-Z of Glasgow Crime",
    imgSource: "https://m.media-amazon.com/images/I/61iWaYOnzPL._SL1000_.jpg",
    imgAlt: "A book by Robert Jeffrey about street crime in Glasgow",
  },
  {
    title: "One Day",
    imgSource:
      "https://upload.wikimedia.org/wikipedia/en/6/6f/One_day_-_david_nicholls.jpg",
    imgAlt: "this is the image of the book One Day by David Nicholls",
  },
  {
    title: "Confident Presenter",
    imgSource: "https://m.media-amazon.com/images/I/612S0ew9bSL._SY466_.jpg",
    imgAlt:
      "this is the image of the book Confident Presenter by Andrea Pacini",
  },
];
// We need to create a GET route for a user to visit, so that they can retrieve our books:
app.get("/books", function (request, response) {
  // the console.log happens on the server:
  console.log("/book route has been visited");
  // the response gets sent back to the client:
  response.json(ourBooks);
});

// --- --- ---
// For our server to 'stay open and running' we have to tell it to do so:
app.listen(port, function () {
  console.log("The server.js file listen method is running on port", port);
});

// --- --- ---
// we use this command in our terminal to run our server: node --watch server.js
