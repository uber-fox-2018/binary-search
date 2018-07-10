var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
//[ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
        for (var j = i-1; j >= 0;j--) {
            if (arr[j+1] < arr[j]) {
                var y = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = y
            }
        }
    }  
  return arr
}


function binary_search (search, array) {
  var kiri = 0
  var kanan = array.length -1
  
while ( kiri <= kanan){
  var tengah = Math.floor((kiri + kanan)/2)
  if (search < array[tengah]){
    kanan = tengah -1
  }
  else if (search > array[tengah]){
    kiri = tengah +1
  }
  else {
    return tengah
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

// module.exports = {
//   binary_search
