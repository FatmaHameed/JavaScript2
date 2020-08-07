// your code goes in here
let favoriteQuotes = [
  {
    quote: '“The best among you are those who have the best manners and character.',
    author: '-Prophet Muhammad (peace be upon him)',
  },
  {
    quote: "“Don't judge each day by the harvest you reap but by the seeds that you plant. ",
    author: '-Robert Louis Stevenson',
  },
  {
    quote: '“It is during our darkest moments that we must focus to see the light.',
    author: '-Aristotle',
  },
  {
    quote: '“When you reach the end of your rope, tie a knot in it and hang on.',
    author: '-Franklin D. Roosevelt',
  },
  {
    quote: '“The future belongs to those who believe in the beauty of their dreams.',
    author: '-Eleanor Roosevelt',
  },
];

let buttonNewQuote = document.querySelector('.click-me');
buttonNewQuote.addEventListener('click', createRandomQuotes);

function createRandomQuotes() {
  let quotes = document.querySelector('.quote');
  let authors = document.querySelector('.author');
  for (let i = 0; i < favoriteQuotes.length; i++) {
    let randomQuotes = favoriteQuotes[Math.floor(Math.random() * favoriteQuotes.length)];
    console.log(randomQuotes);

    quotes.innerText = randomQuotes.quote;

    authors.innerText = randomQuotes.author;
  }
  console.log(quotes, authors);
  return quotes.innerText, authors.innerText;
}
createRandomQuotes();
