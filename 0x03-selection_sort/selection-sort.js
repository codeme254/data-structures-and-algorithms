//swapping function
const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
};

const selectionSort = (array) => {
  if (array.length === 0) return array;
  let minIdx;
  for (let i = 0; i <= array.length; i++) {
    minIdx = i;
    for (let j = i + 1; j <= array.length; j++) {
      if (array[j] < array[minIdx]) swap(array, minIdx, j);
    }
  }
  return array;
};
console.log(selectionSort([]));
console.log(selectionSort([10, 15, 2, 23, 4, 2, 34, 45, 12]));
console.log(
  selectionSort(["jack", "john", "andrew", "james", "kelvin", "paul"])
);
console.log(selectionSort([9, 7, 6, 5, 3, 2, 10, 1]));
