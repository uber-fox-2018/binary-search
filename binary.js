///////////////////////////CARA NORMAL//////////////////////////////
// 'use strict'
// var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
// var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

// function ownSort(arr) {
//   // Your sorting code
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = i; j >= 0; j--) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       };
//     };
//   };

//   return arr;
// }

// function binary_search(search, array) {
//   // Your searching code

//   let min = 0;
//   let max = array.length - 1;
//   // console.log(max);

//   while (min <= max) {
//     root = Math.floor((min + max) / 2);
//     if (array[root] === search) {
//       return root;
//     }
//     else if (array[root] < search) {
//       min = root + 1;
//     }
//     else {
//       max = root - 1;

//     }
//   }

//   return -1;

// }

// var arrayGenapSorted = ownSort(testArrayGenap)
// var arrayGanjilSorted = ownSort(testArrayGanjil)

// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);


// // Driver code
// // console.log(binary_search(8, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// // console.log(binary_search(33, arrayGenapSorted))

// // console.log(binary_search(53, arrayGanjilSorted))
// // console.log(binary_search(3, arrayGanjilSorted))
// // console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }




///////////////////////////CARA REKURSIF//////////////////////////////
'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
    };
  };

  return arr;
}

function binary_search(search, array, min, max) {

  while (min <= max) {
    root = Math.floor((min + max) / 2);
    if (array[root] === search) {
      return root;
    }
    if (array[root] < search) {
      return binary_search(search, array, min = root + 1, max);
    }
    else if (array[root] > search) {
      return binary_search(search, array, max = root - 1, max);

    } else {
      return -1;

    }
  }

  return -1;

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

let min = 0
let maxGenap = arrayGenapSorted.length - 1
let maxGanjil = arrayGanjilSorted.length - 1
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
console.log(binary_search(8, arrayGenapSorted, min, maxGenap))
console.log(binary_search(10, arrayGenapSorted, min, maxGenap))
console.log(binary_search(33, arrayGenapSorted, min, maxGenap))
// 
console.log(binary_search(53, arrayGanjilSorted, min, maxGanjil))
console.log(binary_search(3, arrayGanjilSorted, min, maxGanjil))
console.log(binary_search(2, arrayGanjilSorted, min, maxGanjil))

module.exports = {
  binary_search
}


