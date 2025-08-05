console.log("main.js here, reporting live from the scene of the new book form");

const userBookForm = document.getElementById("user-book-entry-form");

userBookForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // I need to get the form data out of my form with our two helpful lines:
  const data = new FormData(userBookForm);
  const formValues = Object.fromEntries(data);
  console.log(formValues);

  // Now what I need to do is send that form data to my server
  // I'll do this with a fetch() request to our server endpoint, which uses the http POST method, and has some options attached to it.
  fetch("http://localhost:8080/books", {
    method: "POST", // we tell our fetch request which HTTP method we're using
    body: JSON.stringify(formValues), // we need to attach a body of information. JSON.stringify does exactly that - it makes the data into a string.
    headers: {
      "Content-Type": "application/json",
    }, // json stands for Javascript Object Notation. We're explaining the format of what we're sending.
  });
}
