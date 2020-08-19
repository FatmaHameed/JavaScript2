/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
function removeDuplicates(arr) {
  const filterDuplicates = arr.filter(function(letter, letterPos) {
    // filter the array and return array if the current position of the letter (after looping) is equal to the previous position (in the original array)
    return arr.indexOf(letter) === letterPos; // the current position of the letter will not be equal to the position in the original array for the duplicates.
  });

  return filterDuplicates;
}
removeDuplicates(letters);

if ((letters === ['a', 'b', 'c', 'd', 'e', 'f'], [])) {
  // as explained, arrays are objects, so they are not equals. That is why we need to compare between them as strings, so we add []
  console.log('Hooray!');
}
