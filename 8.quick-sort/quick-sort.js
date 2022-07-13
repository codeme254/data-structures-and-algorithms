const pivotHelper = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };
  let pivot = arr[startIdx];
  let currPivotIdx = startIdx;
  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (pivot > arr[i]) {
      currPivotIdx++;
      swap(arr, i, currPivotIdx);
    }
  }
  swap(arr, startIdx, currPivotIdx);
  return currPivotIdx;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);

    // left side of the pivot
    quickSort(arr, left, pivotIdx - 1);
    // right side
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([3, 2, 4, 10, 1, 8]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(quickSort([10, 9, 8, 1, 7, 2, 6, 4, 3, 5]));
console.log(quickSort(["andrei", "Andrew", "jack", "john", "zaph", "sam", "nathan", "ivy", "bilha", "humphrey"]));
