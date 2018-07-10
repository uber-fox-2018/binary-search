'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for (var i = 0; i <arr.length; i++) {
    var value = arr[i]
    for (var j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = value
  }
  return arr;
}

function binary_search (search, array) {
  var batasBawah = 0;
  var batasAtas = array.length-1;
  var tengah = (batasBawah + batasAtas)/2;//4
 
  while(array[tengah]!==search){
    if(array[tengah]>search){//berarti search ke kiri
      batasAtas=tengah-1;
      tengah = Math.floor((batasBawah + batasAtas)/2);//1

      if(batasAtas===batasBawah && array[tengah]!==search){
        return -1;
      }
    }
    if(array[tengah]<search){//berarti search ke kanan
      batasBawah=tengah+1;
      tengah = Math.floor((batasBawah + batasAtas)/2);//1
      if(batasAtas<batasBawah){
        return -1;
      }
    }
    
  }

  if(array[tengah]===search){
    return tengah;
  }
  
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))//0
console.log(binary_search(10, arrayGenapSorted))//1
console.log(binary_search(33, arrayGenapSorted))//-1

console.log(binary_search(53, arrayGanjilSorted))//4
console.log(binary_search(3, arrayGanjilSorted))//0
console.log(binary_search(2, arrayGanjilSorted))//-1

module.exports = {
  binary_search
}
