//some helper methods for radix sort

// getDigit - a function that will return the digit at an index passed and it indexes from right and not left as in normal indexing
// digitCount - a function that returns the number of digits in a number
// num : input digit
// place : index of a value we want to get

// mostDigits - a function that returns the number of digits in the largest number in the list
// nums - input array for mostDigits function

const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}

console.log(getDigit(12345, 0))
console.log(getDigit(12345, 1))
console.log(getDigit(76387, 2))
console.log(getDigit(763874, 2))

console.log("==============")
const digitCount = (num) => {
    //according to instructor
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1

    //my solution -> not good since it modiifies the number to a string
    //return num.toString().length;
}

console.log(digitCount(0))
console.log(digitCount(1))
console.log(digitCount(25))
console.log(digitCount(314))

console.log("===========")

const mostDigits = (nums) => {
    let most = 0;
    for (let i = 0; i < nums.length; i++){
        most = Math.max(most, digitCount(nums[i]));
    }
    return most;
}
console.log(mostDigits([10, 23, 456]))
console.log(mostDigits([10, 23, 456, 8975]))
console.log(mostDigits([10, 23, 456753, 8975]))