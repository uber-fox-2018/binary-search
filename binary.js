'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let a = 0; a < arr.length; a++) {
    let index = a
    for (let b = a + 1; b < arr.length; b++) {
      if (arr[b] < arr[index]) {
        index = b
      }
    }
    const temp = arr[a];
    arr[a] = arr[index];
    arr[index] = temp
  }
  return arr
}

function binary_search(search, array) {
  let left = 0
  let right = array.length - 1
  let middle = Math.floor((left + right) / 2)

  while (search <= array[middle]) {
    if (search > array[middle]) left = middle++
    else if (search < array[middle]) right =  middle--
    else return middle
  }
  return -1
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

// module.exports = {
//   binary_search
// }
