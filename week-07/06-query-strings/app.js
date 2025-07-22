console.log("All good?");

// we're gonna need let variables so they can change TICK!!
// we'll need a form in the HTML from WHENCEFORTH they can submit a search from TICK
// when the form is submitted, it'll change the variable values
// then we fetch the URL using that variable value

// Variables:
let userSearchTerm = "flat stanley";

// main function which fetches books from the API
async function fetchBooks() {
  // Look! my fetch URL contains a dynamic query!
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${userSearchTerm}&limit=10`
  );

  console.log(response);

  // I need to 'parse' my response data with .json()
  const bookData = await response.json();
  console.log(bookData);

  // Get rid of the old stuff, before appending the new stuff:
  document.getElementById("responseContainer").innerHTML = "";

  // I can't run a loop on an object, but, I can go inside of an object to loop through an array!
  // I figured this out by checking the console.log of the 'bookData' variable
  bookData.docs.forEach((book) => {
    console.log(book);
    // I want to put the title of each book onto my page
    const newTitle = document.createElement("h3");
    newTitle.textContent = book.title;
    document.getElementById("responseContainer").appendChild(newTitle);
  });
}

// run on page load:
fetchBooks();

// Get the form from the HTML:
const bookSearchForm = document.getElementById("search-form");

// run this when the 'submit button' is clicked
bookSearchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // another way to get a single input, like from a search box
  console.log(event.target.userSearch.value);
  console.log("Form submitted!!!");
  // assign it to our variable
  userSearchTerm = event.target.userSearch.value;
  //re-run the fetch function
  fetchBooks();
});
