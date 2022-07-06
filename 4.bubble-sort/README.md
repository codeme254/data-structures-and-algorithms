## Bubble sort
### Implemented with javascript

Bubble sort is a sorting Algorithm where bigger values/elements of a list or array are pushed towards the end of an array (or the beginning depend on how we write the code)

**Algorithm for Bubble Sort  using natural language**
***

1. Start looping with a variable called i (or your preffered variable name) at the end of the array towards the beginning of the array.
2. Start an inner loop with a variable j from the beginning until i - 1.
3. If array[j] is greater than array[j + 1] swap those two values.
4. Return the sorted array

***Point of concern***

- one disadvantage of bubble sort is that it tries to sort an array that has already been sorted.
- To fix this, we can introduce a variable to check if we have swapped, and give it a true or false value.
- If we complete any iteration without doing a swap, then it means that the array is sorted and thus we change our variable to true or false value _(depending on how we are writing our code)_ and break the loop and return the array.