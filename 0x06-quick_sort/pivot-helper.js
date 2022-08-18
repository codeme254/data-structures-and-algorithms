//Create a function called pivot helper which will put an element we will call a pivot in such a way that alll the elements to the left of it are less than it and all the elements to the right are greater than it

const pivotHelper = (arr, startIdx = 0, endIdx = arr.length - 1) => {
    const swap = (arr, idx1, idx2) => {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    let pivot = arr[startIdx];
    let currPivotIdx = startIdx; //will keep track of where the pivot should end up in  a final swap to place all elements less than the pivot to the left and all elements greater than it to the right.
    for (let i = startIdx + 1; i <= endIdx; i++){
        //if the pivot is greater than the current element, increment the pivot index and then swap the current element with the element at the pivot index 
        if (pivot > arr[i]){
            currPivotIdx++;
            swap(arr, i, currPivotIdx);
        }
    }
    swap(arr, startIdx, currPivotIdx);
    console.log(arr, currPivotIdx)
    return currPivotIdx;
}

console.log(pivotHelper([3, 2, 4, 10, 1, 8]))
console.log(pivotHelper([4, 8, 2, 1, 5, 7, 6, 3]))