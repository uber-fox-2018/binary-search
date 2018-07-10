'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {

    for (var j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
        var tmp = arr[i]
        
        arr[i] = arr[j]
        arr[j] = tmp

        }
    }
  }  
  return arr
}

function binary_search (search, array) {

    console.log (array)
    var low= 0
    var high= array.length-1 
    
    while (low<=high) {
      var mid= Math.floor((low+high)/2)

      if (search < array[mid]) {
        var high= mid-1
      } else

      if (search > array[mid]) {
        var low= mid+1
      } else
      
      {
        return mid
      }
    }
    
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(89, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
