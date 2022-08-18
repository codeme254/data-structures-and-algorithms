// quick sort ;)

// I need a function that helps position a pivot to the right place
// this function accepts 3 arguements, an array, start index with default 0 and end index with default of length of the array - 1
// For starters, assume the first element is the pivot.
// Create a variable for storing where the final index of the pivot should be after the function is done.
// loop through the array from the start to the end.
// if the pivot is greater than the current element, increment the pivot index variable (the one that determines where the pivot should be at the end) and then swap the current element with the pivot index
// swap the starting element with the pivot index
// return the pivot index
// THE GOAL IS TO HAVE ALL ELEMENTS LESS THAN THE PIVOT TO THE LEFT OF IT AND ALL ELEMENTS GREATER THAN THE  PIVOT TO THE RIGHT OF  IT AT THE END OF THE FUNCTION
// [10, 12, 3, 2, 14, 8, 23] 0 to 1, fpidx points to 12, current element is 3 so we swap 3 and 12
// [10, 3, 12, 2, 14, 8, 23] 1 to 2, fpidx is 2, pointing to 12, current element 2 is less than the pivot 10, so we swwap 2 and 12
// [10, 3, 2, 12, 14, 8, 23] fpidx changes from 2 to 3 sine the current element 8 is less than 10, so we swap the element at idx 3 with 8
// [10, 3, 2, 8, 14, 12, 23]
// current fpidx is 3, since there are no other elements greater than the pivot i.e 10, we swap the element at the pivot index ie 8 in this case with the pivot
// [8, 3, 2, 10, 14, 12, 23]
// and at last all the elements less than the pivot are to the left of it and those greater than are to the right of it. We return the final pivot index i.e 3
const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let finalPivotIdx = start;
  let i = start;
  let pivot = arr[start];

  while (i < arr.length) {
    if (pivot > arr[i]) {
      finalPivotIdx++;
      swap(arr, finalPivotIdx, i);
    }
    i++;
  }

  swap(arr, start, finalPivotIdx);
  return finalPivotIdx;
};

// pivot([10, 12, 3, 2, 14, 8, 23])

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  //sort the arr
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([10, 12, 3, 2, 14, 8, 23]));
console.log(quickSort([10, 9, 8, 7, 6, 1, 23, 2]));
