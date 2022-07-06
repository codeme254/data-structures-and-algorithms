function binarySearch(array, value) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let middle = parseInt((leftPointer + rightPointer) / 2);
  while (array[middle] !== value && leftPointer <= rightPointer) {
    if (array[middle] > value) {
      rightPointer = middle - 1;
      middle = parseInt((leftPointer + rightPointer) / 2);
    } else if (array[middle] < value) {
      leftPointer = middle + 1;
      middle = parseInt((leftPointer + rightPointer) / 2);
    }
  }
  if(array[middle] === value){
    return middle
  }else{
    return -1
  }
}

console.log(binarySearch([10, 20, 30, 35, 46, 78], 35));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 22));
