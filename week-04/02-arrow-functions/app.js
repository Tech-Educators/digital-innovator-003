// Here's the function in the traditional way:
// syntax: function myFunctionName(parameter1, parameter2, parameter3){ code in here }

function addTwoNumbers(numberOne, numberTwo) {
  let addedNumber = numberOne + numberTwo;
  return addedNumber;
}

console.log(addTwoNumbers(10, 20));

// Arrow functions achieve the same effect, it is JUST that their 'syntax' is different.
//syntax: () => {}

const myAddFunction = (numOne, numTwo) => {
  return numOne + numTwo;
};

console.log(myAddFunction(5, 20));
