'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let newArr = [];
  
  while (arr.length > 0){
    let currentMin = arr[0];
    let indexMin = 0;
    for (let i in arr){
      if (arr[i] < currentMin){
        currentMin = arr[i];
        indexMin = +i
      }
    }
    newArr.push(currentMin);
    arr.splice(indexMin, 1)
  }
  return newArr;
}

function binary_search (search, array, indexStart = 0, indexEnd = (array.length - 1)) {
  debugger;
  let mid = Math.floor((indexStart + indexEnd) / 2)
  
  if (mid < 0 || mid > array.length - 1 || Math.abs(indexStart - indexEnd) === 1){
    return -1;
  }
  
  if (array[mid] === search){
    return mid
  }
  else if (search < array[mid]){
    return binary_search (search, array, 0, (mid - 1))
  }
  else if (search > array[mid]){
    return binary_search (search, array, (mid + 1))
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted)
console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

// console.log(arrayGanjilSorted)
// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
