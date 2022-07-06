// The problem tests the use of multiple pointers pattern

//Write a function called count unique that takes in a sorted array and returns the number of unique elements in the array, there can be negative integers but the array will still be sorted
//[1, 1, 1, 2]  should return 2,   [-2, -1, -1, 0, 1] should return 4 [] should return 0 and [1, 2, 3, 4, 4, 7, 7, 7, 12, 12, 13] should return 7

const countUnique = (arr) => {
    if(arr.length === 0){
        return 0
    }
    let pointerI = 0;
    let pointerJ = 1;
    while(pointerJ <= arr.length){
        if(arr[pointerI] === arr[pointerJ]){
            ++pointerJ
        }else if(arr[pointerI] !== arr[pointerJ]){
            ++pointerI;
            arr[pointerI] = arr[pointerJ]
        }
    }
    console.log(pointerI)
}

countUnique([1, 1, 1, 2])
countUnique([-2, -1, -1, 0, 1])
countUnique([1, 2, 3, 4, 4, 7, 7, 7, 12, 12, 13])
countUnique([1, 2, 5])
countUnique([1, 1, 2, 2, 5])