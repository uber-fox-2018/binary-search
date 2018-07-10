'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0;j--) {
        if (arr[j] < arr[j-1]) {
            let y = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = y
        }
    }  
  }  
return arr 
}

var a =[ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]

function binary_search (search, array) {
  
  let btsA = 0
  let btsZ = array.length-1

  for (let i = 0; i < 6; i++) {
    debugger
    let mid = (Math.floor(btsA + btsZ)/2)
    if (btsZ - btsA === 1) {
      if (search === array[btsA]) {
        return btsA
      } else if (search === array[btsZ]) {
        return btsZ
      } else {
        return -1
      }
      i++
    } else {
      if (search <= array[mid]) {
        btsZ = mid
      } else {
        btsA = mid
      }
    }
  }
  return array[btsZ];
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

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
