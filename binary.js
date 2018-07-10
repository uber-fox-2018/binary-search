'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var min = 0;
  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        min = arr[i];
        arr[i] = arr[j];
        arr[j] = min;
      }
    }
  }
  console.log(arr)
  return arr
}
/*
SET `first` at 0
SET `last` at array.length - 1

WHILE array[mid] is NOT EQUAL to search value AND `first` < `last`
  IF search value < array[mid] THEN
  `last` is `mid` - 1
  ELSE IF search value > array[mid] THEN 
  `first` is `mid` + 1
  END IF
END WHILE

IF array[mid] DOES NOT EQUAL to search value
  RETURN -1
END IF
*/

function binary_search(search, array) {
  // Your searching code
  var first = 0;
  var last = array.length - 1;
  var mid = Math.floor((first + last) / 2);

  while (array[mid] != search && first < last) {
    if (search < array[mid]) {
      last = mid - 1;
    } else if (search > array[mid]) {
      first = mid + 1;
    }
    mid = Math.floor((first + last) / 2);
  }
  if (array[mid] !== search) {
    return -1
  }
  return mid;
}

//-------------- ADDED recursive --------------------

function binary_search(search, array, first, last) {
  // Your searching code
  // var first = 0;
  // var last = array.length - 1;
  var mid = Math.floor((first + last) / 2);

  if (last - first === 1) {
    return -1
  }
    if (search < array[mid]) {
      last = mid - 1;
      return binary_search(search, array, first, last)
    } else if (search > array[mid]) {
      first = mid + 1;
      return binary_search(search, array, first, last)
    } else if (array[mid] === search) {
      return mid
    }
    if (array[mid] !== search) {
      return -1
    }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

var ganjilArrLength = arrayGanjilSorted.length;
var genapArrLength = arrayGenapSorted.length;

// Driver code
console.log(binary_search(8, arrayGenapSorted, 0, genapArrLength));
console.log(binary_search(10, arrayGenapSorted, 0, genapArrLength));
console.log(binary_search(33, arrayGenapSorted, 0, genapArrLength));

console.log(binary_search(53, arrayGanjilSorted, 0, ganjilArrLength));
console.log(binary_search(3, arrayGanjilSorted, 0, ganjilArrLength));
console.log(binary_search(2, arrayGanjilSorted, 0, ganjilArrLength));

module.exports = {
  binary_search
}
