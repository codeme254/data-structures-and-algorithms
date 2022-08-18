// swapping function

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const bubbleSort = (arr) => {
  if (arr.length === 0) return arr;
  // outer loop that will go over each element in the array
  for (let i = arr.length - 1; i >= 0; i--) {
    // inner loop that will compare each element in the array with the neighbour and swap if necessary
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
};

console.log(bubbleSort([10, 15, 2, 23, 4, 2, 34, 45, 12]));
console.log(bubbleSort(["jack", "john", "andrew", "james", "kelvin", "paul"]));
