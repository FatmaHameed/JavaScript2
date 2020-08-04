/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */
const booksUl = document.createElement('ul');
function createBookList() {
  // your code goes in here, return the ul element

  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
    let booksP = document.createElement('p');
    booksP.innerText = `${books[i].title} - ${books[i].author}`;
    booksP.style.margin = '5%';
    booksP.style.fontSize = '1.3em';
    booksP.style.fontWeight = 'bold';
    booksP.style.color = 'white';
    console.log(booksP);
    let booksImg = document.createElement('img');
    booksImg.src = books[i].image;
    booksImg.style.width = '50%';
    booksImg.style.margin = '2%';
    let bookLists = document.createElement('li');

    bookLists.appendChild(booksP);
    bookLists.appendChild(booksImg);
    console.log(bookLists);
    bookLists.style.listStyle = 'none';
    bookLists.style.marginRight = '2%';
    bookLists.style.width = '32%';
    bookLists.style.justifyItems = 'center';

    booksUl.appendChild(bookLists);

    booksUl.style.display = 'flex';
    booksUl.style.justifyContent = 'space-evenly';
    booksUl.style.justifyItems = 'center';

    if (books[i].alreadyRead === true) {
      bookLists.style.backgroundColor = 'green';
    } else {
      bookLists.style.backgroundColor = 'red';
    }
  }

  return booksUl;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

books[0].image =
  'https://s2.bukalapak.com/img/2647983443/w-1000/The_Design_of_Everyday_Things_Revised_and_Expanded_Edition.jpg';
books[1].image = 'https://pbs.twimg.com/media/EbNOOcoUcAAoOJe.jpg';
books[2].image =
  'https://m.media-amazon.com/images/S/aplus-media/vc/fb71c565-0ec5-44b3-81e1-848bbcccb96f._CR0,5,516,516_PT0_SX300__.jpg';
console.log(books);

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
const mainContent = document.body;
mainContent.style.textAlign = 'center';
document.querySelector('#bookList').style.marginRight = '1%';
