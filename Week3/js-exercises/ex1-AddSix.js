/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */

function createBase(baseNumber) {
  // Put here your logic...
  const addNumbers = () => baseNumber + 9;
  return addNumbers;
}

const addSix = createBase(6);
const addFifteen = createBase(15);
const addTwentyFour = createBase(24);

// Put here your function calls...
console.log(addSix());
console.log(addFifteen());
console.log(addTwentyFour());
