function sort(test_array){

    for(let i = 0; i < test_array.length; i++){
      for(let j = 0; j < test_array.length; j++){
        if(test_array[j] > test_array[j+1]){
          let sorting = test_array[j]
          test_array[j] = test_array[j+1]
          test_array[j+1] = sorting 
        }  
      }
    }
    return test_array
  
  }
  
  function binary_search(num, test_array){
    let newArray = sort(test_array)
    // console.log(newArray)
    let firstIndex = 0
    let lastIndex = newArray.length-1
  
    while(firstIndex <= lastIndex) {
      var indexCenter = Math.floor((firstIndex+lastIndex)/2)
      if(num > newArray[indexCenter]){
        firstIndex = indexCenter + 1
      } else if(num < newArray[indexCenter]){
        lastIndex = indexCenter - 1
      } else {
        return indexCenter
      }
    }
  
    return -1
  
  }
  
  let test_array = [1, 2, 3, 4, 5]
  console.log(binary_search(3, test_array))
  
  test_array = [13, 19, 24, 29, 32, 37, 43]
  console.log(binary_search(35, test_array))
  
  test_array = [100, 120, 130, 135, 150, 170]
  console.log(binary_search(135, test_array))