console.log("Look at all this form data!");

const myVeryGoodForm = document.getElementById("my-excellent-form");

// console.log(myVeryGoodForm); // check this out in the console by un-commenting it. You'll see the whole HTML form

// we've added an event listener to our form
// it's not a click event!!! It's a submit! Woah....
// the callback function is passed the 'event'. This is a default thing which happens when a function is used as an event handler
myVeryGoodForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  console.log("ive been clicked");

  // the next couple of lines are NOT for you to remember, or fully understand how they work.
  // JUST REMEMBER where to find them, and remember they handle form data for you
  // these things are built into Javascript and they're very useful.
  const data = new FormData(myVeryGoodForm); // remember to pass in the variable name that contains your form
  const formValues = Object.fromEntries(data);

  console.log("The result of that spicy magic:", formValues);

  // and then what you do from here with your form is up to you
  // maybe, you take some user input like a search, and you render some Unsplash images from that word/search term
});
