function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length < 2) return wholeArray;
  var length = wholeArray.length / 2;
  var firstHalf = wholeArray.slice(0, length);
  var secondHalf = wholeArray.slice(length)
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  var result = [];

  var length = array1.length + array2.length
  while (length > 0) {
    if (array1[0] < array2[0] || array2.length === 0) {
      result.push(array1[0])
      length--;
      array1.shift();
    } else {
      result.push(array2[0]);
      length--;
      array2.shift();
    }
  }
  return result;
}


 function mergeSort(array){
   console.log("ARRAY", array)
   if(array.length <= 1){
     return array;
   } else {
    var splits = split(array);
    var left = mergeSort(splits[0])
    var right = mergeSort(splits[1])
    console.log("LEFT:", left, "RIGHT:", right)
    return merge(left, right);
   }
 }
























// function mergeSort(array) {

//     /* your code here */
//     if (array.length <= 1){
//       return array;
//     } else {
//       var splits = split(array)
//       var left = mergeSort(splits[0]);
//       var right = mergeSort(splits[1]);
//       return merge(left, right);
//      //return mergeSort(merge(split(array)));
//     }
//     //return merge(array, (mergeSort(split(array));
//   }
