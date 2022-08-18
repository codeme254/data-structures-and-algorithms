// Merge sort is all about splitting, merging and sorting

// a function that merges two sorted arrays

const mergeArrays = (arr1, arr2) => {
  let finalArray = [];
  let i = 0; //counter for array 1
  let j = 0; // counter for array 2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      finalArray.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]) {
      finalArray.push(arr1[i]);
      finalArray.push(arr2[j]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) {
    finalArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    finalArray.push(arr2[j]);
    j++;
  }
  return finalArray;
};

console.log(mergeArrays([10, 12, 15, 22], [11, 15, 24, 32]));
console.log(mergeArrays([11, 15, 24, 32], [13, 18, 23, 55, 44, 50]));

const mergeSort = (arr) => {
  //keep splitting the array into halves until we have arrays that have empty or one element
  // once we have these smaller arrays, we merge them with other smaller arrays until we are back with the full sorted array
  // return the sorted array
  if (arr.length <= 1) return arr;

  let midpoint = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));
  console.log("left right sorted", left, right, mergeArrays(left, right));

  return mergeArrays(left, right);
};

console.log(mergeSort([10, 23, 12, 13, 1, 2, 15, 2]));
console.log(mergeSort([101, 300, 78, 99, 96, 500, 34]));
