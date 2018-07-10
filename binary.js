'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
	// Your sorting code
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[i] < arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr
}

// [8, 10, 10, 18, 22, 22, 32, 40, 90]
function binary_search(search, array) {
	// Your searching code
	if(!array.includes(search)) {
		return -1;
	}

	var max = array.length-1;
	var min = 0;

	while(min <= max) {
		var mid = Math.floor((max+min)/2);
		if(array[mid] == search) {
			return mid;
		} else if(array[mid] < search) {
			min = min + 1;
		} else {
			max = mid - 1;
		}
	}
	return -1;
	
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
// }
