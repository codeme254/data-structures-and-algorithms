/*implementation of a priority queue*/
/*elements with lower priority are served before elements with a higher priority*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    /*puts the last element of the values array in the correct spot*/
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    /*removes the biggest value (the root) from the heap and rearranges the heap*/

    /*swap the first and the last values*/
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return min;
  }

  sinkDown() {
    /*this method helps in bubbling down the first element in this.values to the correct spot especially during extract max process*/
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIdx;
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue(41, 8);
pq.enqueue(39, 12);
pq.enqueue(33, 3);
pq.enqueue(18, 5);
pq.enqueue(27, 2);
pq.enqueue(12, 6);
pq.enqueue(55, 1);
pq.enqueue(18, 15);
pq.enqueue(199, 4);
pq.enqueue(60, 7);
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
