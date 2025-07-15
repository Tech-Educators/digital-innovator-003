console.log("Lets get loopy");

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

function DisplayStuff() {
  //   console.log(ourBooks.title[1]); // Almost there!
  console.log(ourBooks[1].title);

  for (let i = 0; i < ourBooks.length; i++) {
    console.log("the current number is", i);
    console.log(ourBooks[i]);

    // render the title onto the page
    // create a container for this individual book
    const myBookDiv = document.createElement("div");
    myBookDiv.classList = "individual-book";

    // reference the HTML section
    const container = document.getElementById("books-container");
    // create a new h2 element
    const myNewh2 = document.createElement("h2");
    // make the textcontent of that h2 tag be the title of the current book
    myNewh2.textContent = ourBooks[i].title;
    // append that title to the page
    myBookDiv.appendChild(myNewh2);

    // create a new img element DEMIR

    const aNewImage = document.createElement("img");
    // make the src of the element the imgSource of the current book: Vinay

    aNewImage.src = ourBooks[i].imgSource;
    // similar for the img's alt - Marina
    aNewImage.alt = ourBooks[i].imgAlt;
    // also make the img's width attribute 200 teaky hehe
    aNewImage.width = "200";

    // the image needs an event listener so that it knows when a click happens
    aNewImage.addEventListener("click", function () {
      console.log("Image clicked");
      // when the image is clicked, we want to add an image to the 'current-book' secton on the page.
      const NewCurrentImage = document.createElement("img");
      NewCurrentImage.src = ourBooks[i].imgSource;
      NewCurrentImage.alt = ourBooks[i].imgAlt;

      const currentBookSection = document.getElementById("current-book");
      currentBookSection.innerHTML = "";
      currentBookSection.appendChild(NewCurrentImage);

      // The following code we tried, but it had some strange behaviour!
      // const currentBookSection = document.getElementById("current-book");
      // currentBookSection.appendChild(aNewImage);
    });

    // then we need to append the image to the container
    myBookDiv.appendChild(aNewImage);

    // this adds our new book div to the section on the HTML
    container.appendChild(myBookDiv);
    // the loop ends on the next line
  }

  // the function ends on the next line
}
DisplayStuff();

// Frankie: Show how to use .forEach()
