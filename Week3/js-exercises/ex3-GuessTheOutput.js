/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function() {
  a = 12; // re-assigned the same variable to another value, so if the syntax is correct, the output here must be alerting the new value of a, which is 12
  return function() {
    alert(a);
  };
})(); // here I guess that the output will be syntax error since these is un-necessary () in the end

x(); // The output here supposed to be 12, because the global variable is assigned to another value inside the function. The code will be read as it is in the block scope, because it is read from bottom to up.
