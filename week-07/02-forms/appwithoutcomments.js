const myVeryGoodForm = document.getElementById("my-excellent-form");

myVeryGoodForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(myVeryGoodForm);
  const formValues = Object.fromEntries(data);
});
