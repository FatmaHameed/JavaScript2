/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here

  const container = document.getElementById('container');
  container.style.margin = '30px';
  document.querySelector('h1').style.color = 'darkBlue';
  document.querySelector('h1').style.fontSize = '3rem';
  // console.log(container);

  const unOrderedList = document.createElement('ul');
  const hobbiesList = arr.map(item => {
    const listHobby = document.createElement('li');
    listHobby.innerText = item;
    listHobby.style.fontSize = '2rem';
    unOrderedList.appendChild(listHobby);
  });
  container.appendChild(unOrderedList);
  return hobbiesList;
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
createHTMLList(myHobbies);
