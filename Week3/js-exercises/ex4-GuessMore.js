/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); // the output is 10 because here we put another variable which is val in the function, we initialized it by val + 1, then we return it in the function, so x here is equal to val which is x + 1 = 9 + 1 =10

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); // { x: 10} y here is object. x here is one of y property, so y.x = y.x + 1 => y.x = 10. So when we return y; y is the object {x: 10}
