//formal loop structure:
for (initialisation; condition; afterthought) statement;
for (let i = 0; i > 5; i++) {
  //our instruction goes between curly brackets - it's the thing we want to do, every time we loop:
  console.log(`I am in loop number: ${i}`);
}

//a while loop has a condition also, it runs the loop "as long as" the condition evaluates as true:
const loopNumber = 0;
while (loopNumber <= 5) {
  console.log(`I am in loop number: ${i}`);
  loopNumber++;
}

//this loop console logs the items at a specific index position = to i. It also uses the .length property to make sure we dont try to iterate over non existant items or too few items:
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects.length);
  console.log(subjects[i]);
}

// What does this kind of loop do? Google time!
for (let subject of subjects) {
  console.log(subjects);
}

//this forEach loop method knows how long out array is already! forEach allows us to use a callback function as the instructions/action to perform on each array item!
//The arguement for the function (subject, in this case) becomes the 'label' or term it will refer to the array items it finds as the loop proceeds:

let subjects = ["Maths", "English", "Biology", "Chemistry", "Sports"];

function lessons(subject) {
  console.log(subject);
}
subjects.forEach(lessons);
