/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */

function displayCurrentTime() {
  // your code goes in here
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById('watch').innerHTML = time;
  document.getElementById('watch').style.fontSize = '2em';
}

setInterval(displayCurrentTime, 1000);
let heading = document.querySelector('h1');
heading.style.color = 'blue';
heading.style.fontSize = '4em';

document.body.style.textAlign = 'center';
document.body.style.backgroundColor = 'lightgrey';
document.body.style.margin = '10%';
