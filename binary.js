'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  let newArr = []
   while (arr.length !== 0){
    var index = 0
    var min = arr[0]
       for (let i = 0; i < arr.length; i++){ 
            if (min>arr[i]){
                min = arr[i]
                index = i
            }
       }
        newArr.push(min)
        arr.splice(index,1)
   }
   return newArr
}


function binary_search (search, array) {
  
  let batasAtas = array.length-1
  let batasBawah = 0
  while (batasAtas >= batasBawah){
    let mid = Math.floor((batasAtas+batasBawah)/2)
    if (search < array[mid]){
      batasAtas = mid-1
    } else if (search > array[mid]) {
      batasBawah = mid+1
    } else {
      return mid
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
