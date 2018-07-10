'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i = 0; i < arr.length-1; i++) {
    if(arr[i+1] < arr[i]) {
      let tmp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = tmp;
      i = -1;
    }
  }
  return arr;
}

function binary_search(search, array) {
  let tengah = 0;
  let batasAtas = array.length-1;
  let batasBawah = 0;
  tengah = Math.floor((batasBawah + batasAtas)/2);

  while(search < array[tengah]) {
    batasAtas = tengah - 1;
    batasBawah = 0;
    tengah = Math.floor((batasBawah + batasAtas)/2);
  } 

  while(search > array[tengah]) {
    batasAtas = array.length-1
    batasBawah = tengah + 1;
    tengah = Math.floor((batasBawah + batasAtas)/2);
  }

  if (array[tengah] === search) {
    return tengah;
  } 

  return -1;
    
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