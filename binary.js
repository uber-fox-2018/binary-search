'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tempContain = arr[j]
        arr[j] = arr[i]
        arr[i] = tempContain
      }
    }
  }
  return arr
}
/* 
  STORE max with length array - 1
  STORE min with 0
*/



// function binary_search (search, array) {
//   // Your searching code
//   let max = array.length - 1
//   let min = 0
//   let mid;
//   while (min <= max) {
//     mid = Math.floor((min + max) / 2)
//     if (array[mid] === search) {
//       return mid
//     } else if (array[mid] > search) {
//       max = mid - 1
//     } else if (array[mid] < search) {
//       min = mid + 1
//     }
//   }
//   return -1
// }

function binary_search(search, array, minIndex=0, maxIndex=array.length - 1) {
  // Your searching code
  let midIndex = Math.floor((minIndex + maxIndex) / 2)
  console.log('max: ',maxIndex);
  console.log('min: ',minIndex);
  console.log('mid: ',midIndex);
  if (maxIndex - minIndex === 1) {
    return -1
  } else {
    if (array[midIndex] === search) {
      return midIndex
    } else if (array[midIndex] < search) {
      return binary_search(search, array, midIndex + 1)
    } else if (array[midIndex] > search) {
      return binary_search(search, array, 0, midIndex - 1)
    }
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(ownSort(arrayGenapSorted));
console.log(ownSort(testArrayGanjil));


// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
