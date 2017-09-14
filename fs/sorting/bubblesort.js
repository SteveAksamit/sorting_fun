function bubbleSort(array) {
  var count = array.length-1;
  while (count > 0){
    //console.log("COUNT: ", count)
    count--;
    for (var i = 0; i < array.length - 1; i++){
      if (array[i] > array[i + 1]){
        //console.log("array[i]: ", array[i], "array[i+1]: ", array[i+1])
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
return array;
}
