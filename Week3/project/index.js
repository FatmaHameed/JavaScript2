// // Your code goes in here

// document.querySelector("#app").innerText = "Tip Calculator";

// 1-  grasp the dom elements that we need to add the functionality:amountOfBill input, form-control: to loop through it and put the functionality and calculations, peopleNum input to be targeted with the calculates, button, final p elements
const billAmount = parseFloat(document.getElementById('amountOfBill').value);
const options = parseFloat(document.getElementsByClassName('form-control').value);
const peopleNum = parseInt(document.getElementById('peopleNum').value, 10);
const button = document.querySelector('button');
const tipAmount = document.getElementById('tip');
const amount = document.getElementById('amount');

// 2- add calculation functions: the calculate function will loop through the options and add conditionality according to the option selected

function calculateTipAmount() {
  // create validate function to alert if there is a field missing
  if (billAmount === 0 || options === 0 || peopleNum === '') {
    const alert = 'You have to fill all fields';
    alert();
  }

  const totalTip = billAmount * options * peopleNum;
  tipAmount.innerText = totalTip;

  if (peopleNum > 1) {
    amount.style.display = 'block';
    document.getElementById('each').style.display = 'block';
    tipAmount.innerText = totalTip;
  } else {
    document.getElementById('each').style.display = 'none';
  }
}

// 3- add event listeners for the button
button.addEventListener('click', calculateTipAmount);
// 4- display the amount

// 5- create a function to alert if there is a field missing
