'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
    let min = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (min < arr[j]) {
        min = arr[j]
        arr[j] = arr[i]
        arr[i] = min
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let firstIndex = 0
  let lastIndex = array.length-1

  while (firstIndex <= lastIndex) {
    let mid = Math.floor((firstIndex + lastIndex)/2)
    if (search === array[mid]) {
      return mid
    }else if (search < array[mid]) {
      lastIndex = mid-1
    }else if (search > array[mid]) {
      firstIndex = mid+1
    }
  }
 return -1 
}

// ===================== REKURSIF ===================

function binary_search (search, array,firstIndex=0,lastIndex=array.length-1) {
  // Your searching code
  let mid = Math.floor(firstIndex+lastIndex/2)

  if (search === array[mid]) {
    return mid
  }else if (search < array[mid]) {
    return binary_search(search,array,0,(mid-1))
  }else if (search > array[mid]) {
    return binary_search(search,array,(mid+1),array.length-1)
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

module.exports = {
  binary_search
}
