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

function binary_search (search, array, indexMin = 0, indexMax = array.length-1) {
  var indexMid = Math.floor((indexMax+indexMin)/2);
  if(array[indexMax] >= array[indexMin]){
    if(array[indexMid] === search){
      return indexMid 
    }else if(search > array[indexMid]){
      indexMin = indexMid +1
      return binary_search(search,array,indexMin,indexMax);
    }else if(search < array[indexMid]){
      indexMax = indexMid -1
      return binary_search(search,array,indexMin,indexMax);
    }
  }
  return -1
}


// while(array[indexMin] <= array[indexMax]){
  // }

var arrayGenapSorted = ownSort(testArrayGenap)
console.log("-------Deret Genap--------")
console.log(arrayGenapSorted)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log("-------Deret Ganjil--------")
console.log(arrayGanjilSorted)

// // Driver code
console.log("-------Deret Genap--------")
console.log(binary_search(90, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log("-------Deret Genap--------")
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(89, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
