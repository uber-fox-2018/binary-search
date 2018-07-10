'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 0; i < arr.length; i++) {
     for(let j = i; j <= arr.length; j++) {
       let container = null;
       if(arr[i] > arr[j]) {
         container = arr[i];
         arr[i] = arr[j];
         arr[j] = container;
       }
     }
   }
  return arr;
}

function binary_search (search, array) {
  let bAtas = array.length - 1;
  let bBawah = 0;
  let mid = Math.floor((bBawah + bAtas)/2);

  // console.log(array);
  while (search > array[mid]) {
    bBawah = mid + 1;
    mid = Math.floor((bBawah + bAtas)/2);
  }

  while (search < array[mid]) {
    bAtas = mid - 1;
    mid = Math.floor((bBawah + bAtas)/2);
  }

  if (search === array[mid]) {
    return mid;
  }

  return -1;
  // return array;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
