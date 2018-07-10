'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  let min = 0;
  let max = array.length-1;
  let mid = Math.floor((min + max) / 2)

  while(min <= max){
    let mid = Math.floor((min + max) / 2)

    if(search === array[mid]){
      return mid
    }else if (search > array[mid]){
      min = mid + 1;
    }else{
      max = mid - 1;
    }
  }
  return -1
}

function binary_search_recursive (search, array, min, max) {
  // Your searching code
  let mid = Math.floor((min + max) / 2)

  if (min > max) {
    return -1;
  }

  if(array[mid] === search){
    return mid;
  } else if(array[mid] > search){
    return binary_search_recursive(search, array, min, mid-1);
  } else if(array[mid] < search){
    return binary_search_recursive(search, array, mid+1, max);
  } 

}
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code untuk While
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))


// Driver code untuk Recursive
// console.log(binary_search_recursive(8, arrayGenapSorted, 0, arrayGenapSorted.length))
// console.log(binary_search_recursive(10, arrayGenapSorted, 0, arrayGenapSorted.length))
// console.log(binary_search_recursive(33, arrayGenapSorted, 0, arrayGenapSorted.length))

// console.log(binary_search_recursive(53, arrayGanjilSorted, 0, arrayGanjilSorted.length))
// console.log(binary_search_recursive(3, arrayGanjilSorted, 0, arrayGanjilSorted.length))
// console.log(binary_search_recursive(2, arrayGanjilSorted, 0, arrayGanjilSorted.length))

// module.exports = {
//   binary_search
// }
