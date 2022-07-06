// Function accepting an array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found.
// If the element is not in the array, return -1

const linearSearch = (array, val) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] === val){
            return i
        }
    }
    return -1
}

console.log(linearSearch([10, 20, 30, 13, 12, 55], 12))
console.log(linearSearch([10, 20, 30, 13, 12, 55], 22))
console.log(linearSearch([55, 13, 80, 22, 98, 101, 15, 23, 23, 125], 23))
console.log(linearSearch([55, 13, 80, 22, 98, 101, 15, 23, 23, 125], 90))