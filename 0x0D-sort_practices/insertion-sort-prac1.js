const insertionSort = (array) => {
  const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }
  return array;
};

console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 6]));
console.log(insertionSort(["jack", "kevin", "ann", "beatrice", "zaph"]));
