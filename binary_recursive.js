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
  console.log(arr);
  
  return arr
}

function binary_search (search, array,min, max) {
  // Your searching code

  // var dataSorted = ownSort(array)
//   console.log(dataSorted);
  
//   var max = dataSorted.length-1
//   var min = 0
//   var mid = 0

      var mid = Math.floor((max+min)/2)
      debugger;
     if(max >= min){
          if(search === array[mid]){
            return mid
            debugger;
        }else if(search < array[mid]){
              max = mid-1
              debugger
              return binary_search(search, array, min, max)
        }else if(search > array[mid]){
              min = mid+1
              debugger
              return binary_search(search, array, min, max)
        }
     }
     return -1
      
 


}

var arrayGenapSorted = ownSort(testArrayGenap)
var maxGenap = arrayGenapSorted.length-1
var arrayGanjilSorted = ownSort(testArrayGanjil)
var maxGanjil = arrayGanjilSorted.length-1

// Driver code
console.log('8 posisinya di '+binary_search(8, arrayGenapSorted,0,maxGenap))
console.log('10 posisinya di '+binary_search(10, arrayGenapSorted,0,maxGenap))
console.log('33 posisinya di '+binary_search(33, arrayGenapSorted,0,maxGenap))
console.log('40 posisinya di '+binary_search(40, arrayGenapSorted,0,maxGenap))

console.log('85 posisinya di '+binary_search(85, arrayGanjilSorted,0,maxGanjil))
console.log('89 posisinya di '+binary_search(89, arrayGanjilSorted,0,maxGanjil))
console.log('3 posisinya di '+binary_search(3, arrayGanjilSorted,0,maxGanjil))
console.log('2 posisinya di '+binary_search(2, arrayGanjilSorted,0,maxGanjil))

module.exports = {
  binary_search
}
