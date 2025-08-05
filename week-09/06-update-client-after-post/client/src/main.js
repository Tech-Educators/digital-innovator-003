console.log("main.js here, reporting live from the scene of the new book form");

const userBookForm = document.getElementById("user-book-entry-form");

userBookForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  // I need to get the form data out of my form with our two helpful lines:
  const data = new FormData(userBookForm);
  const formValues = Object.fromEntries(data);
  console.log(formValues);

  // Now what I need to do is send that form data to my server
  // I'll do this with a fetch() request to our server endpoint, which uses the http POST method, and has some options attached to it.
  const serverResponse = await fetch("http://localhost:8080/books", {
    method: "POST", // we tell our fetch request which HTTP method we're using
    body: JSON.stringify(formValues), // we need to attach a body of information. JSON.stringify does exactly that - it makes the data into a string.
    headers: {
      "Content-Type": "application/json",
    }, // json stands for Javascript Object Notation. We're explaining the format of what we're sending.
  });

  console.log(serverResponse);
  const parsedResponse = await serverResponse.json();
  console.log(parsedResponse);

  if (parsedResponse.rowCount == 1) {
    getAllBooks();
    userBookForm.reset();
  }
}

const booksContainer = document.getElementById("books-container");

async function getAllBooks() {
  booksContainer.innerHTML = "";
  const response = await fetch(
    "https://di003-week-09-full-stack-server.onrender.com/books"
  );
  const booksData = await response.json();
  console.log("The books data is:", booksData);

  // now that I have my array, I do a good ol' loop through it
  // putting each item on the page
  booksData.reverse().forEach((book) => {
    // console.log(book);
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const releaseYear = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = book.title;
    author.textContent = book.author;
    releaseYear.textContent = book.release_year;
    image.src = book.img_source;
    image.alt = book.img_alt;

    booksContainer.append(title, author, image, releaseYear);
  });
}

getAllBooks();
