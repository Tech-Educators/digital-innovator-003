// first here we have allowed our javascript to 'see' our HTML elements. We've assigned them to variables we can use
const resContainer = document.getElementById("response_container");
const resButton = document.getElementById("get-things");

// function which will fetch data from our server
async function getBooks() {
  // we need to assign the result of a fetch() request to a variable
  const response = await fetch(
    "https://my-first-monorepo-server.onrender.com/books"
  );
  // remember: to parse the data from the request, we do this:
  const booksData = await response.json();
  // console log the result from the fetch request here for now:
  console.log(booksData);

  // Nice! Now that we have our array of objects, we can use a loop to render each one on the page
  // Luckily, we have a resContainer to put the things in!
}

// Rather than just having this function run, we are going to attach an event listener to our button which run the function.

resButton.addEventListener("click", getBooks);
