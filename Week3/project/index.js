// // Your code goes in here

// document.querySelector("#app").innerText = "Tip Calculator";

// 1-  grasp the dom elements that we need to add the functionality:amountOfBill input, form-control: to loop through it and put the functionality and calculations, peopleNum input to be targeted with the calculates, button, final p elements
const billAmount = document.getElementById('amountOfBill');
const optionsA = document.getElementById('form-control');
const peopleNum = document.getElementById('peopleNum');
const calculate = document.getElementById('calculate');
const tipAmount = document.getElementById('tip');
const amountE = document.getElementById('amountE');
const eachE = document.getElementById('eachE');
// 2- add calculation functions: the calculate function will create the calculations.

function calculateTipAmount() {
  // create the calculations of the tip
  const totalTip = (billAmount.value * optionsA.value) / peopleNum.value;
  const tip = totalTip.toFixed(2);
  tipAmount.innerText = tip;
  // create validate function to alert if there is a field missing
  if (billAmount.value == 0 || optionsA.value == 0 || peopleNum.value == '') {
    alert('You have to fill all fields');
    amountE.style.display = 'none';
    eachE.style.display = 'none';
  }
  // create conditionality of the function and display the amount of tip
  if (peopleNum.value > 1 && billAmount.value > 0 && optionsA.value > 0) {
    amountE.style.display = 'block';
    eachE.style.display = 'block';
  } else if (peopleNum.value == 1 && billAmount.value > 0 && optionsA.value > 0) {
    amountE.style.display = 'block';
    eachE.style.display = 'none';
  } else if (peopleNum.value <= 0 || billAmount.value <= 0) {
    amountE.style.display = 'none';
    eachE.style.display = 'none';
    alert('Minus or zero amount is not accepted');
  }
}

// 3- add event listeners for the calculate
function activateSelectEl(e) {
  e.preventDefault();
calculate.addEventListener('click', calculateTipAmount);  
}
window.addEventListener('load', activateSelectEl);
