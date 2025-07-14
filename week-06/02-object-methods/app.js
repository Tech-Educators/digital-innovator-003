console.log("hello methods");

// Let's make an object:
const frankiesCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
  colour: "Go Faster Red",
  previousOwners: ["Steve McQueen", "James Bond", "Michael Schumacher"],
  // the next 'property' will have a 'value' which is a function. 'noise' is the function name
  noise: function () {
    return "bbbbbbrrrrrrVRRRRRROOOOOOOOMMMMMMM";
  },
};

// this is how we can log the results from invoking that Method
console.log(frankiesCar.noise());

// Remember how arrays didn't give us enough information? Pah!
const carArray = ["Nissan", "GTR", 2021, "White"];

// Let's use an object again so that we have more info.
const demirsCar = {
  make: "Nissan",
  model: "GTR",
  year: 2021,
  colour: "White",
  // oooh look!! Different object, same Method name as before! Cool
  noise: function () {
    console.log("VrooooooVROOOOOOOOOMMM");
  },
};

// this time, the Method makes use of 'console.log()' itself, so we can just invoke it here:
demirsCar.noise();

// we're going to be using in-built methods a lot! For example, when we start working with the 'document' we'll use methods ALL THE TIME!!
console.log(document.querySelector("h1"));

const bertieThePerson = {
  username: "Bertie",
  location: "Leicester",
  getName: function () {
    return this.username; // stretchy bit of knowledge, but cool nonetheless!
  },
};

console.log(bertieThePerson.getName()); // Outputs: "Bertie", because 'this' is a reference to the object the Method is in.
