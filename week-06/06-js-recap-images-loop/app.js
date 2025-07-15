console.log("Lets get loopy");

const ourBooks = [
  {
    title: "Dilla Time - The Life And After Life",
    imgSource:
      "https://parentotheca.com/wp-content/uploads/2021/04/IMG_0356-scaled.jpg",
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
    imgSource: "https://m.media-amazon.com/images/I/612S0ew9bSL._SY466_.jpg",
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
    imgSource:
      "https://upload.wikimedia.org/wikipedia/en/6/6f/One_day_-_david_nicholls.jpg",
    imgAlt:
      "this is the image of the book Confident Presenter by Andrea Pacini",
  },
];

function DisplayStuff() {
  //   console.log(ourBooks.title[1]); // Almost there!
  console.log(ourBooks[1].title);

  for (let i = 0; i < ourBooks.length; i++) {
    console.log("the current number is", i);
    console.log(ourBooks[i]);

    // render the title onto the page

    // reference the HTML section
    const container = document.getElementById("books-container");
    // create a new h2 element
    const myNewh2 = document.createElement("h2");
    // make the textcontent of that h2 tag be the title of the current book
    myNewh2.textContent = ourBooks[i].title;
    // append that title to the page
    container.appendChild(myNewh2);

    // NEXT UP: WHY?!
    // the loop ends on the next line
  }

  // the function ends on the next line
}
DisplayStuff();

// Frankie: Show how to use .forEach()
