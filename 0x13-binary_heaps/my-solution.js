/*IMPLEMENTATION OF A BINARY HEAP IN JAVASCRIPT*/
/*Parent nodes must always be larger than the children*/
/*we will store the members of the heap in the form of an array*/
/*for any index of array n, the left child is stored at 2n + 1 and the right child at 2n + 2*/
/*for any child at index n, its parent node is at (n - 1)/2*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    /*This method will add an element to the heap and bubble it to the correct spot*/

    /*push this element into the values property on the heap*/
    this.values.push(value);
    /*bubble up the value to the correct spot*/
    this.bubbleUp();
  }

  swap(arr, idx1, idx2) {
    /*this method will help us in swapping the elements of an array*/
    let tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
  }

  bubbleUp() {
    /*this method will help put a recently pushed to the correct spot in the heap arr*/
    /*get access to this value's index which is currently the end of the array*/
    let idx = this.values.length - 1;
    let element = this.values[idx];
    /*start a loop*/
    while (idx >= 0) {
      /*get access to this element's parent which is at (n - 1) / 2*/
      let parentIdx = Math.floor((idx - 1) / 2);
      /*If the element is greater than the parent, do a swap*/
      if (element > this.values[parentIdx])
        this.swap(this.values, parentIdx, idx);
      else {
        return;
      }
      /*make the idx to be what parent index was*/
      idx = parentIdx;
    }
  }

  extractMax() {
    /*This method removes the biggest element from the max heap (the root) and restructures it*/

    /*swap the first value in the values property with the last one*/
    this.swap(this.values, 0, this.values.length - 1);
    /*pop the values property to remove the swapped root and also be able to return it at the end*/
    let removedMax = this.values.pop();

    /*sink down the new root to the correct spot*/
    let newRootIdx = 0;

    while (newRootIdx < this.values.length) {
      let leftChild, rightChild;
      /*find the left and the right child indices*/
      let leftChildIdx = 2 * newRootIdx + 1;
      let rightChildIdx = 2 * newRootIdx + 2;
      /*check to see if their indexes are within range and grab the values at these indices*/
      if (leftChildIdx <= this.values.length - 1)
        leftChild = this.values[leftChildIdx];
      if (rightChildIdx <= this.values.length - 1)
        rightChild = this.values[rightChildIdx];
      /*find the biggest child as this is what we will be swapping with*/
      let maxValIdx;
      if (leftChild >= rightChild) maxValIdx = leftChildIdx;
      else maxValIdx = rightChildIdx;
      /*swap this root with  the root with the biggest child*/
      if (this.values[newRootIdx] < this.values[maxValIdx])
        this.swap(this.values, newRootIdx, maxValIdx);
      /*when no swap happens, it means the root has sunk down to the correct spot so we can break*/ else
        break;
      /*reset the root index to be what you have swapped with*/
      newRootIdx = maxValIdx;
    }
    return removedMax;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(18);
heap.insert(199);
heap.insert(60);
console.log(heap);
heap.extractMax();
console.log(heap);
