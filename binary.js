'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i<arr.length; i++){
    let batasMin = i;
    for(let j = i; j<arr.length; j++){
      if(arr[j] < arr[batasMin]){
        batasMin = j
      }
    }
    if(batasMin != i){
      var swap = arr[i]
      arr[i] = arr[batasMin]
      arr[batasMin] = swap
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var indexMin = 0
  var indexMax = array.length -1
  while(array[indexMin] <= array[indexMax]){
    var indexMid = Math.floor((indexMax+indexMin)/2);
    if(array[indexMid] === search){
      return indexMid
    }
    if(search > array[indexMid]){
      indexMin = indexMid +1
    }else{
      indexMax = indexMid -1
    }
  }
  return -1;
}

// var arrayGenapSorted = ownSort(testArrayGenap)
// console.log(arrayGenapSorted)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGanjilSorted)

// // Driver code
// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
