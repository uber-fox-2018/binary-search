'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  
  // Insertion sort
  let i;
  let j;

  for (i = 1; i < arr.length; i++) {
    let current = arr[i];

    j = i-1;
    while(j >= 0 && arr[j] > current) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }

  return arr
}

function binary_search(search, array) {
  // Your searching code
  ownSort(array);
  
  let mid;
  let left = 0;
  let right = array.length-1;
  while(left <= right) {
    debugger
    mid = Math.floor((left+right)/2);
    if(array[mid] < search)
      left = mid+1;
    else if (array[mid] > search)
      right = mid-1;
    else
      return mid;
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted, 8, binary_search(8, arrayGenapSorted))
console.log(arrayGenapSorted, 10, binary_search(10, arrayGenapSorted))
console.log(arrayGenapSorted, 33, binary_search(33, arrayGenapSorted))
console.log(arrayGenapSorted, 18, binary_search(18, arrayGenapSorted))
console.log(arrayGenapSorted, 40, binary_search(40, arrayGenapSorted))
console.log(arrayGenapSorted, 32, binary_search(32, arrayGenapSorted))


console.log(arrayGanjilSorted, 53, binary_search(53, arrayGanjilSorted))
console.log(arrayGanjilSorted, 3, binary_search(3, arrayGanjilSorted))
console.log(arrayGanjilSorted, 2, binary_search(2, arrayGanjilSorted))
console.log(arrayGanjilSorted, 77, binary_search(77, arrayGanjilSorted))
console.log(arrayGanjilSorted, 89, binary_search(89, arrayGanjilSorted))
console.log(arrayGanjilSorted, 55, binary_search(55, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
