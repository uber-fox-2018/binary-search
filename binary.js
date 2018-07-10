'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i]
    for (var j = i - 1; arr[j] > target; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = target
  }
  return arr
}

function binary_search (search, array) {
  let firstIndex = 0
  let lastIndex = array.length

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)

    if (array[middleIndex] < search) {
      firstIndex = middleIndex + 1
    } else if (array[middleIndex] > search) {
      lastIndex = middleIndex - 1
    } else {
      return middleIndex
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted);


// Driver code

console.log('Array Genap');
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log('Array Ganjil');
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
