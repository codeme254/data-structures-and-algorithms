# Merge sort

### Implemented with JavaScript

Merge sort is a combination of 3 things, splitting merging and sorting.

**An array of 0 or 1 elements is sorted, this is the principle that merge sort exploits**

Merge sort works by decomposing an array into 0 or 1 elements and then bulding up the sorted array from them. (Divide and conquer kind of thing)

#### Highe level overview of merge sort

[8, 3, 5, 4, 7, 6, 1, 2]

[8, 3, 5, 4] [7, 6, 1, 2]

[8, 3] [5, 4] [7, 6] [1, 2]

[8] [3] [5] [4] [7] [6] [1] [2]

- compare 8 and 3 and sort [3, 8]
- compare 5 and 4 and sort [4, 5]
- compare 7 and 6 and sort [6, 7]
- compare 1 and 2 and sort [1, 2]
  - [3, 8] [4, 5] [6, 7] [1, 2]
- compare [3, 8] with [4, 5] and sort [3, 4, 5, 8]
- compare [6, 7] with [1, 2] and sort [1, 2, 6, 7]
  - [3, 4, 5, 8] [1, 2, 6, 7]
- compare [3, 4, 5, 8] with [1, 2, 6, 7] and sort
  [1, 2, 3,4, 5, 6, 7, 8]

## How to merge arrays _(the arrays should be sorted)_

We need a function that merges two sorted arrays, the function runs in O(n + m) time and space and should not modify the parameters passed into it.

n here is the size of the first array and n the size of the second array.

NOTE: this that we only iterate over each item int the array once.

**Algorithm for merging two sorted arrays using natural language**

1. Create an empty array that will store the results.
2. Create two counters, one for each array and initialize them to 0. eg i and j
3. While there are still values we haven't looked at in each array i.e while i and j < the length of their respective arrays.
   - If the value in the first array is smaller than the value in the second array, push the value into the results array and move to the next value in the first array.
   - If the value in the first array is larger than the value in the second array, push the value of the second array into the results and move to the next value in the second array.
4. Once you reach the end of one of the arrays and the other array still has some values, push all of them into the results.

**_Example_**
Suppose we want to merge [1, 10, 50] (arr a) and [2, 14, 99, 100] (arr b)

results array = []

The first value of array a is less than the first value of array b, so we push the value of array a into the results array and increment the pointer/counter corresponding to array a.

results array = [1]

The second value of the array a, i.e 10 is greater than the the first value of the array b i.e 2, so we push 2 into the results array and increment the pointer corresponding to array b.

results array = [1, 2]

The second value of array b is (14) is greater than the second value of array a (10) so we push 10 into the results array and increment the pointer corresponding to array a.

results array = [1, 2, 10]

We are in array a and the third value of array a (50) is greater than the second value of array b (14), we push 14 into the sorted array and increment the pointer corresponding to array b

results array = [1, 2, 10, 14]

We are in array b, the third value of array b (99) is greater than the third value of array a (50), so we push 50 into the sorted array and increment the value corresponding to array a.

results array = [1, 2, 10, 14, 50]

Since we are at the end of array a and array b still has got some values, we simply push all of them to the sorted array as they have no one to compare to from array a.

results array = [1, 2, 10, 14, 50, 99, 100]

final results array = [1, 2, 10, 14, 50, 99, 100]

## Final Merge Sort Algorithm

- Now we have a merge function.

1. Break the array into halves until you have arrays of empty or one elements.
2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back with full length.
3. Return the merged/sorted array.

### Big O of Merge sort.

Best time complexity O(n log n).

Average time complexity O(n log n).

Worst time complexity O(n log n).

Space complexity O(n).

log n comes from the decomposition into arrays of 0 or 1 elements.

8 elements => 3 splits => 2^3 = 8.
32 elments => 5 splists => 2^5 = 32.

O(n) comparisons per decomposition.
