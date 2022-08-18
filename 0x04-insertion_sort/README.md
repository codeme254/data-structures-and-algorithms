# Insertion Sort
### Implemented with JavaScript

Insertion sort builds up the sort by gradually creating a larger half which is always sorted.

Instead of finding the largest or the smallest value at a time, it takes each element and places it where it needs to be in the sorted half

_in the visualization below, bold means current value and a strikethrough means sorted half_

[~~5~~, __3__, 4, 1, 2]

[~~3, 5~~, __4__, 1, 2]

[~~3, 4, 5~~, __1__, 2]

[~~1, 3, 4, 5~~, __2__]

[~~1, 2, 3, 4, 5~~]

**Algorithm for insertion sort using natural language**
***

1. Start by picking the second element in the array
2. Compare that to the one before it and swap if necessary.
3. Continue to the next element and if it is in the wrong order, iterate through the sorted portion and place it where it correctly needs to be.
    
    - for this step, simply compare the current element to the previous one and swap if necessary eg if it is smaller than the previous one, swap it.
4. Repeat until the array is sorted.
5. Return the array.