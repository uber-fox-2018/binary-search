var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(num) {
	for (var i = 0 ; i < num.length ; i++){
		var indexAwal = i
		for (var j = i+1 ; j < num.length ; j++){
			if (num[j] < num[indexAwal]){
				indexAwal = j
			}
		}
		var temp = num[i]		
		num[i] = num[indexAwal]
		num[indexAwal]= temp
	}
	return num
}

function binary_search (search, array) {
	var indexKiri = 0
	var indexKanan = array.length-1
	// console.log(array)
	// console.log(array.length-1)
	while (indexKiri <= indexKanan){
		var indexTengah = Math.floor((indexKiri + indexKanan)/2)
		if (search > array[indexTengah]){
			indexKiri = ++indexTengah
		}else if (search < array[indexTengah]){
			indexKanan = --indexTengah
		}else {
			return indexTengah
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