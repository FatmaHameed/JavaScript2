/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let'
 s get started!

   Write a
 function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 The  function should first generate an array containing values from start value to end value(inclusive).

 Then the  function should take the newly created array and iterate over it, and calling the first callback
 if the array value is divisible by 3.

 The function should call the second callback
 if the array value is divisible by 5.

 Both functions should be called
 if the array value is divisible by both 3 and 5.

*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let numbers = [];
  // make array => re-initiate the variable numbers to new array
  numbers = new Array();

  // 1- iterate through the array using startIndex and stopIndex to generate array:
  for (let i = 0; i < stopIndex; i++) {
    startIndex++;
    numbers[i] = startIndex;
    if (numbers[i] === stopIndex) {
      // break the loop when numbers element reach to the stopIndex
      break;
    }
  }
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
      threeCallback(numbers[i]);
    } else if (numbers[i] % 3 !== 0 && numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
    } else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
    }
  }
}
const sayThree = function(number) {
  console.log(`${number} divisible by three`);
};
const sayFive = function(number) {
  console.log(`${number} divisible by five`);
};
console.log(threeFive(10, 15, sayThree, sayFive));

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
