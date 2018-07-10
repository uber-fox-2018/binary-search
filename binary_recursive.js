"use strict";

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var target = arr[i];
    for (var j = i - 1; arr[j] > target; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = target;
  }
  return arr;
}

const binary_search = (search, array, firstIndex, lastIndex) => {
  let indexMiddle = Math.floor((firstIndex + lastIndex) / 2)

  if  (Math.abs(lastIndex - firstIndex) === 1) {
    return -1
  }
  
  if (array[indexMiddle] < search) {
    firstIndex = indexMiddle + 1
    return binary_search(search, array, firstIndex, lastIndex)
  } else if (array[indexMiddle] > search) {
    lastIndex = indexMiddle - 1
    return binary_search(search, array, firstIndex, lastIndex)
  } else if (array[indexMiddle] === search){
    return indexMiddle
  } 

};

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

var lengthGanjil = arrayGanjilSorted.length
var lengthGenap = arrayGenapSorted.length
// Driver code

console.log('Array Genap');
console.log(binary_search(8, arrayGenapSorted, 0, lengthGenap))
console.log(binary_search(10, arrayGenapSorted, 0, lengthGenap))
console.log(binary_search(33, arrayGenapSorted, 0, lengthGenap))
console.log("Array Ganjil");
console.log(binary_search(53, arrayGanjilSorted, 0, lengthGanjil));
console.log(binary_search(3, arrayGanjilSorted, 0, lengthGanjil));
console.log(binary_search(2, arrayGanjilSorted, 0, lengthGanjil));

module.exports = {
  binary_search
};
