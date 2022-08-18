//merging two sorted arrays

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
  console.log(sortedArray);
};

merge([1, 10, 50], [2, 14, 99, 100]);
merge([1, 15, 23, 25, 34, 46], [1, 10, 18, 22]);
