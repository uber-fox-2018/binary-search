'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length;j++){
      if(arr[i] > arr[j]){
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code

  var dataSorted = ownSort(array)
  console.log(dataSorted);
  
  var max = dataSorted.length-1
  var min = 0
  var mid = 0

  while(min <= max){
    mid = Math.floor((max+min)/2)
    debugger
    if(search === dataSorted[mid]){
      return mid
    }else if(dataSorted[mid] < search){
      min = mid+1
      debugger
    }else if(dataSorted[mid] > search){
      max = mid-1
      debugger
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log('8 posisinya di '+binary_search(8, arrayGenapSorted))
console.log('10 posisinya di '+binary_search(10, arrayGenapSorted))
console.log('33 posisinya di '+binary_search(33, arrayGenapSorted))

console.log('53 posisinya di '+binary_search(53, arrayGanjilSorted))
console.log('3 posisinya di '+binary_search(3, arrayGanjilSorted))
console.log('2 posisinya di '+binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
