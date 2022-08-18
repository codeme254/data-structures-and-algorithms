# Quick Sort

### Implemented with JavaScript

Quick sort exploits the fact that arrays of zero or one elements are already sorted.

It works by selecting one element **called the pivot** and finding the index where this pivot should end up in the sorted array.

Once the pivot is positioned appropriately, quick sorte can be applied on either sides of the pivot.

**_sample_**

[5, 2, 1, 8, 4, 7, 6, 3]

We pick 5 and we will move all the numbers that are less than 5 to the left of it and all numbers that are greater than 5 to the right of it.

[~~3, 2, 1, 4~~, __5__, ~~7, 6, 8~~]

We do the same for the left and the right side of the array.

**IMPORTANT: In order to implement merge sort, it is important to implement a function that finds a pivot and arranges elements either to the left or to the right of the pivot depending on whether the elements are less than or greater than the pivot respectively, It should then return the pivot index**

### Algorithm for for creating the pivot helper/partition using natural language

---

1. Create a function accepting 3 arguements; i.e an array, start index and end index, start index should default to 0 and end index should default to arraylength - 1
2. Take the first element of the array as the pivot.
3. Store the final pivot index in a variable.
4. Loop through the array from the start to the end. For each iteration:
   - If the pivot is greater than the current elment, increment the pivot index variable and then swap the current element with the element at the pivot index.
5. Swap the starting element (i.e the pivot) with the final pivot index.
6. Return the final pivot index.

**Final quick sort algorithm using natural language**

1. Create a function taking 3 arguements, an array, a left with default value of 0 and right with default value of arraylength - 1.
2. Call the pivot helper on this array.
3. When the helper returns to you the updated index, recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index.
4. Your base case for breaking this recursion will occur when you consider a subarray with less than two elements.

**Big O of Quick Sort**

Best time complexity -> O(n log n)

Average time complexity -> O(n log n)

Worst time complexity -> O(n^2)

Space complexity -> O(n log n)

_why we have an n squared_
We are always taking the first element in the array as the pivot, if the array is sorted, our algorithm doesn't know that. Meaning that it will go from start to end decomposing.

O(n) decompositions

O(n) comparisons per decomposition

The pivot will always be a minimum element for a sorted array.
