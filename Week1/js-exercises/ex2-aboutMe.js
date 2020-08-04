/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

// Change the body tag 's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, sans-serif';

// 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
const nickName = document.getElementById('nickname');
nickName.innerText = 'Fatma';
const favFood = document.getElementById('fav-food');
favFood.innerText = 'Rice';
const homeTown = document.getElementById('hometown');
homeTown.innerText = "Sana'a";

// 4. Iterate through each li and change the class to "list-item".
const listItem = document.querySelectorAll('li');

console.log(listItem);
for (let i = 0; i < listItem.length; i++) {
  listItem[i].className = 'list-item';
  listItem[i].style.listStyle = 'none';
}

//6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const myPhoto = document.createElement('img');
myPhoto.src = 'myphoto.jpg';
myPhoto.style.width = '30%';
document.body.appendChild(myPhoto);
document.body.style.textAlign = 'center';
