const merge = (array1, array2) => {
    if (array1.length === "" && array2.length === "") return [];
    let sortedArray = [];
    let i = 0,
      j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        sortedArray.push(array1[i]);
        i++;
        if (i > array1.length - 1) {
          // push all the remaining elements of array j to the sorted array
          for (j; j < array2.length; j++) sortedArray.push(array2[j]);
        }
      } else if (array1[i] > array2[j]) {
        sortedArray.push(array2[j]);
        j++;
        if (j > array2.length - 1) {
          //push all the remaining elements of array i into the sorted array
          for (i; i < array1.length; i++) sortedArray.push(array1[i]);
        }
      } else if (array1[i] === array2[j]) {
        sortedArray.push(array1[i]);
        sortedArray.push(array2[j]);
        i++;
        j++;
      }
    }
    return sortedArray;
  };

  const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    // we will use the slice method to split the array into halves
    let midpoint = Math.floor(arr.length / 2);
    // each time, we decompose the left and the right side of the array,
    // we will do this recursively
    let left = mergeSort(arr.slice(0,midpoint));
    let right = mergeSort(arr.slice(midpoint)); //this will slice from the midpoint all the way to the end
    return merge(left, right);
  }
  console.log(mergeSort([10, 13, 2, 78, 4, 16]))
  console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
  console.log(mergeSort(["john", "kevin","andrei", "Andrei", "jack"]))