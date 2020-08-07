const origCat = document.querySelector('img');
origCat.style.left = '0px';
const bodyWidth = window.screen.width;
const dancingCat = document.createElement('img');

dancingCat.src =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';
document.body.appendChild(dancingCat);
dancingCat.style.position = 'absolute';
// dancingCat.style.marginLeft = 'auto';
// dancingCat.style.marginRight = 'auto';
// dancingCat.style.left = '0px';
// dancingCat.style.right = '0px';
// dancingCat.style.textAlign = 'center';
dancingCat.style.display = 'none';
function catWalk() {
  let post = 0;

  const move1 = setInterval(firstMove, 10);
  const move2 = setInterval(moveAgain, 24);
  function firstMove() {
    if (post === bodyWidth / 2) {
      clearInterval(move1);
      dancingCat.style.display = 'block';
      origCat.style.display = 'none';
    } else {
      post++;
      origCat.style.left = post + 'px';
      dancingCat.style.left = post + 'px';
    }
  }
  function moveAgain() {
    if (post === bodyWidth / 2) {
      post++;
      origCat.style.left = post + 'px';
      showCode();
    }
    if (post === bodyWidth) {
      clearInterval(move2);
    } else {
      post++;
      origCat.style.left = post + 'px';
    }
  }
  function showLoad() {
    dancingCat.style.display = 'block';
    origCat.style.display = 'none';
  }

  function showCode() {
    origCat.style.display = 'block';
    dancingCat.style.display = 'none';
  }
  setTimeout(showLoad, 5000);
  setTimeout(showCode, 10000);
}

setTimeout(catWalk, 50);
setInterval(catWalk, 20000);
