var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(var i = 0 ; i < arr.length ; i++){
    var tmpArr = arr[i] // 3
    var tmpPmr = i // 0
    for(var j = i ; j < arr.length ; j++){
        if(tmpArr > arr[j]){
            tmpArr = arr[j] // 2
            tmpPmr = j // 9
        }
    }
    var tmp = arr[i]
    arr[i] = tmpArr
    arr[tmpPmr] = tmp
}
  return arr
}

// [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
function binary_search (search, array) {
  // Your searching code
  debugger
  var batasAwal = 0
  var batasAkhir = array.length-1
  for(var i = 0 ; i < array.length ; i++){
    var mid = Math.floor(batasAwal + batasAkhir) / 2
    if(batasAkhir-batasAwal === 1){
      if(search === array[batasAwal]){
        return batasAwal
      }else if(search === array[batasAkhir]){
        return batasAkhir
      }else{
        return -1
      }
    }else{
      if(search >= array[mid]){
        batasAwal = mid
      }else{
        batasAkhir = mid
      }
    }
    

    
  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(binary_search(8, arrayGenapSorted)) // 0
console.log(binary_search(10, arrayGenapSorted)) // 1
// console.log(binary_search(33, arrayGenapSorted)) // -1

// console.log(binary_search(53, arrayGanjilSorted)) // 3
// console.log(binary_search(3, arrayGanjilSorted)) // 0
// console.log(binary_search(2, arrayGanjilSorted)) // -1

// module.exports = {
//   binary_search
// }