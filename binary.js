'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(array) {
  // Your sorting code
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(ownSort(testArrayGenap))
console.log(ownSort(testArrayGanjil))

// function binary_search (search, array) {
//   let min = 0
//   let max = array.length - 1;

//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2);
//     if (array[middle] === search)
//       return middle;
//     else if (array[middle] < search)
//       min = middle + 1;
//     else
//       max = middle - 1;
//   }
//   return -1;
// }

function binary_search(search,array,min,max){
  
  let middle = Math.floor((min + max)/2)

  if(min > max) {
    return -1
  }

  if(array[middle] === search) {
    return middle
  }else if (array[middle] > search){
    return binary_search(search,array,min,middle - 1)
  } else if (array[middle] < search) {
    return binary_search(search,array,middle + 1, max)
  }
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted, 0, arrayGenapSorted.length))
console.log(binary_search(10, arrayGenapSorted, 0, arrayGenapSorted.length ))
console.log(binary_search(33, arrayGenapSorted, 0, arrayGenapSorted.length))

console.log(binary_search(53, arrayGanjilSorted, 0, arrayGanjilSorted.length))
console.log(binary_search(3, arrayGanjilSorted, 0, arrayGanjilSorted.length))
console.log(binary_search(2, arrayGanjilSorted, 0, arrayGanjilSorted.length))

// console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))


module.exports = {
  binary_search
}
