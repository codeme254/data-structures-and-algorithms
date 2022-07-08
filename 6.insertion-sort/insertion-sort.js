const insertionSort = (arr) => {
    let j;
    for (let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        // loop going backwards
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]))
console.log(insertionSort([]));
console.log(insertionSort([10, 15, 2, 23, 4, 2, 34, 45, 12]));
console.log(
  insertionSort(["jack", "john", "andrew", "james", "kelvin", "paul"])
);
console.log(insertionSort([9, 7, 6, 5, 3, 2, 10, 1]));