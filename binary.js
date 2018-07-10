'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Insertion Sort
  for(var i = 0; i < arr.length; i++) {
   var value = arr[i]
    for(var j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = value
  }
  return arr
}

// function binary_search(search, array) {
//   let minValue = 0
//   let maxValue = array.length-1

//   while (minValue <= maxValue) {
//     let midValue = Math.floor((minValue + maxValue)/2)
//     if (search === array[midValue]) {
//       return midValue
//     } else if (search > array[midValue]) {
//       minValue = midValue + 1
//     } else if (search < array[midValue]) {
//       maxValue = midValue - 1
//     }
//   }
//   return -1
// }

// BINARY RECURSIVE
function binary_search(search, array, minValue = 0, maxValue = array.length-1) {

  let midValue = Math.floor((minValue + maxValue)/2)
  if (array[maxValue] >= array[minValue]) {
    if (search === array[midValue]) {
      return midValue
    } 
    
    if (search > array[midValue]) {
      //minValue = midValue + 1
      return binary_search(search, array, midValue + 1, maxValue)
    } else if (search < array[midValue]) {
      //maxValue = midValue - 1
      return binary_search(search, array, minValue, midValue - 1)
    } 
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(`=========Sorting==========`)
console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))

console.log(`=========Binary Search==========`)

console.log(`=========Test Genap==========`)
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(`=========Test Ganjil==========`)
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}


