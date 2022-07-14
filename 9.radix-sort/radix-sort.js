// Implementation of radix sort

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

const radixSort = (nums) => {
  // find the most number of digits lengt
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    //make buckets
    // Make 10 arrays into one bigger array, the smaller arrays are the buckets
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      // take individual number and figure out at position k, what value do we get
      let digit = getDigit(nums[i], k);
      // Take this number and put it at bucket in that index
      digitBuckets[digit].push(nums[i]);
    }

    // After collecting them into buckets, we need to then concat the array
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
console.log(radixSort([30, 20, 10, 14, 22, 11]));
console.log(radixSort([5, 4, 3, 2, 11, 0]));
console.log(radixSort([-5, 4, 3, 2, 11, 12, 0]));
