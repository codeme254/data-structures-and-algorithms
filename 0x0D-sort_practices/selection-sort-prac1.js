const selectionSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i; j < length; j++) {
      //code here
      if (array[min] > array[j]) {
        let temp = array[min];
        array[min] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
console.log(selectionSort(["jack", "kevin", "ann", "beatrice", "zaph"]));
