import express from "express"; // because we have "type":"module" in our package.json, we can use import statements
import cors from "cors"; // when deployed, cors will allow requests from different 'origins'
// --- --- ---

console.log("Here's my server");
// Server!
// Boilerplate setup:
const app = express();
// We have to tell our app to use cors like so:
app.use(cors());
const PORT = 8080;
// --- --- ---
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

// --- --- ---
// We need some GET routes next:
// Here is our root route:
app.get("/", function (request, response) {
  response.json("You're in my roots!"); // this send something back to the client
});
// We also need a GET route
// where the route is "/books"
// and it returns our fabulous crowdsourced list of books from the variable on line 13
app.get("/books", function (request, response) {
  response.json(ourBooks);
});
// Just an example of making another seperate endpoint:
app.get("/posts", function (request, response) {
  const posts = [
    {
      id: 1,
      title: "post01",
      subHeading: "subheading text goes here",
    },
    {
      id: 2,
      title: "post02",
      subHeading: "subheading text goes here",
    },
  ];

  response.json(posts);
});
// --- --- ---

app.listen(PORT, function () {
  console.log(`This server is running on ${PORT}`);
});
