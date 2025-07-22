console.log("Fetching Fetching 1,2,3");

// I need to write a function which I can invoke to 'fetch' data from this URL: https://randomfox.ca/floof/

async function getFox() {
  console.log("Foxes being retrieved");

  // Fetch is an inbuilt Javascript thing:
  // we are writing 'asynchronous' code. This means it's not happening at the same time and we need to wait for a response
  const response = await fetch("https://randomfox.ca/floof/"); // this line which makes the fetch request contains information about the response itself.
  // We still have to 'parse' the data out of it
  //   console.log(response);

  // We could do some error handling (Stretch knowledge):
  if (response.ok == true) {
    console.log("Here we carry on with our code");
  } else {
    console.log(
      "If there is an error IE if response.ok is not true, handle the error"
    );
  }

  // Here is where we extract the data itself
  const foxData = await response.json();
  console.log(foxData); // the data type of foxData is an object, which means we can use dot notation
  // it's got an image source, and a URL, so lets put both onto our page!
  // Image first:
  const newImage = document.createElement("img");
  newImage.src = foxData.image;
  newImage.width = 300;

  // Lets add our new anchor link too
  const newAnchor = document.createElement("a");
  newAnchor.href = foxData.link;
  newAnchor.textContent = "Visit the image";

  const responseContainer = document.getElementById("response-container");
  responseContainer.append(newAnchor, newImage); // .append() is nice because we can add multiple elements in one method. The order matters!
}

getFox(); // remember to invoke your function
