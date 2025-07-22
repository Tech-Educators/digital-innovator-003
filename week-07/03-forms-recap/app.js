console.log("I am here woo!"); // this is just to test that my app.js is linked up to my HTML successfully

const myHTMLForm = document.getElementById("my-nice-form");

console.log(myHTMLForm);

myHTMLForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(myHTMLForm);
  const formValues = Object.fromEntries(data);

  console.log("The form values are:", formValues);
  console.log(formValues.firstName); //dot notation!!
});
