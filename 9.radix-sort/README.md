# Radix Sort

### Implemented with JavaScript

Radix sort is a unique sorting algorithm as it doesn't use comparison operators like (>, <, >=, <=, etc).

- Radix sort works on integer numbers.
- It never makes comparison between numbers.
- It exploits the fact that information about the size of a number is encoded in the number of digits.
- More digits meand a bigger number eg 1024 is greater than 102

## How radix sort works

Assuming we have this array

[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]

We create 10 buckets, each bucket represents all of the possible numbers of one digit numbers in base

|  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |

1. We go Through the entire list and we start by looking at the first digit from the right of each number and we group them into buckets based on those digits. **For example, 4386 has 6 as the rightmost number in this iteration meaning that it will go to bucket 6, 902 has 2 as the rightmost and therefore will go to bucket 2, 9637 will go to bucket 7 and 408 will go to bucket 8. _You get the idea_.**

|  0  |  1  |  2  |  3  |  4  |  5  |  6   |  7   |  8  |  9  |
| :-: | :-: | :-: | :-: | :-: | :-: | :--: | :--: | :-: | :-: |
|     |     | 902 | 593 |  4  |     |  86  | 9637 | 408 | 29  |
|     |     |     |     |     |     | 4386 | 8157 |     |     |
|     |     |     |     |     |     | 3556 |  7   |     |     |
|     |     |     |     |     |     | 1556 |      |     |     |

We then form them back into a list keeping the order in which they are in
[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]

2. We then to the second digit from the right of each number and place them into buckets again based of the second digit.

[9**0**2, 5**9**3, 4, 15**5**6, 35**5**6, 43**8**6, **8**6, 7, 81**5**7, 96**3**7, 4**0**8, **2**9]

If a number has no second digit from the right eg 7, it will go to bucket 0.

|  0  |  1  |  2  |  3   |  4  |  5   |  6  |  7  |  8   |  9  |
| :-: | :-: | :-: | :--: | :-: | :--: | :-: | :-: | :--: | :-: |
| 408 |     | 29  | 9637 |     | 8157 |     |     |  86  | 593 |
|  7  |     |     |      |     | 3556 |     |     | 4386 |     |
|  4  |     |     |      |     | 1556 |     |     |      |     |
| 902 |     |     |      |     |      |     |     |      |     |

We form it into a list again

[902, 4, 7, 29, 9637, 8157, 3556, 1556, 86, 4386, 593]

Note that for each bucket, we are collecting from the bottom up when reforming the buckets back to the array.

3. We then look at the third digit from the right.

[**9**02, 4, 7, 29, 9**6**37, 8**1**57, 3**5**56, 1**5**56, 86, 4**3**86, **5**93]

Similary, if a number has no third digit from the right like 4, 7, 29 and 86, it goes to bucket 0.
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :-: | :-: | :-: | :-: | :-: | :-: | :--: | :--: | :-: | :-: |
| 86 |8157 | | 4386| 408 |593 | 9637 | | | 902 |
| 29 | | | | |3556 | | | | |
| 7 | | | | |1556 | | | | |
| 4 | | | | | | | | | |

[4, 7, 29, 86, 8157, 4386, 408, 593, 3556, 1556, 9637, 902]

4. We then go for the fourth time looking at the fourth digit from the right.

|  0  |  1   |  2  |  3   |  4   |  5  |  6  |  7  |  8   |  9   |
| :-: | :--: | :-: | :--: | :--: | :-: | :-: | :-: | :--: | :--: |
| 902 | 1556 |     | 3556 | 4386 |     |     |     | 8157 | 9637 |
| 593 |      |     |      |      |     |     |     |      |      |
| 408 |      |     |      |      |     |     |     |      |      |
| 29  |      |     |      |      |     |     |     |      |      |
|  7  |      |     |      |      |     |     |     |      |      |
|  4  |      |     |      |      |     |     |     |      |      |

[4, 7, 29, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

And our array is sorted!

**[4, 7, 29, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]**

## Radix Sort helper methods

### \_ Method 1: getDigit(num, place)

This method returns the digit at a given place value from the right and not left.

Examples:

getDigit(12345, 0) returns 0

getDigit(12345, 1) returns 4

getDigit(76378, 2) returns 3

getDigit(763784, 2) returns 7

_solution_

```javascript
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};
```

### \_ Method 2: digitCount(num)

This method figures out how many digits there are in a number. **This will help us to know how many times we are reodering**

Examples

digitCount(1) returns 1

digitCount(25) returns 2

digitCount(314) returns 3

_solution_

```js
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};
```

### \_ Method 3: mostDigits(nums)

This method takes in an array and returns the number of digits in the longest number in the array.

Examples:

mostDigits([10, 534, 3]) return 3 since 534 is the longest with length 3

mostDigits([10, 3986, 12]) return 4 since 3986 is the longest with length 4

_solution_

```js
const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};
```

## Final radix sort algorithm using natural language

1. create a function that accepts a list of numbers.
2. Figure out how many digits the largest number has _(We already have a helper method for that)_
3. Loop from k = 0 upto the largest digit.
4. In each iteration:
   - Create a bucket for each digit 0-9. A bucket in this case means an array. **NOTE THAT WE NEED TEN SMALLER ARRAYS I.E 0-9 INSIDE ONE BIGGER ARRAY FOR THESE BRACKETS**
   ```js
   let digitBuckets = Array.from({ length: 10 }, () => []);
   console.log(digitBuckets); // [[], [], [], [], [], [], [], [], [], []] creates 10 empty arrays
   ```
   - Place each number on the corresponding bracket based on it's kth digit.
5. Replace the existing array with the values in our buckets starting from 0 going upto 9.
   ```js
   //sample: assuming your array is called nums
   nums = [].concat(...digitBuckets);
   ```
6. Return the array at the end.

**Big O of radix sort**

Best time complexity O(nk)

Average time complexity O(nk)

Worst time complexity O(nk)

Space complexity O(n + k)

Where n is the length of array and k number of digits in a number.
