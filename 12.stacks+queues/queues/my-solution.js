/*implmentation of a queue data structure*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    /*adds a node to the end of the queue*/
    let newNode = new Node(value);
    /*if there are no nodes in the queue, set this to be the first and the last node of the queue*/
    if (!this.first || this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      /*grab the current last node*/
      let currentLastNode = this.last;
      /*set the next property on this last node to be the newly created node*/
      currentLastNode.next = newNode;
      /*set the last property of the queue to be the newly created node*/
      this.last = newNode;
    }
    ++this.size;
    return this;
  }

  dequeue() {
    /*removes a node at the beginning of the queue and returns the removed node*/
    /*if there is no nodes, just return null*/
    if (this.size === 0) return null;
    /*if there is only one element, set the first and the last to be null*/
    let currentFirst = this.first;
    if (this.size === 1 || this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      /*set the first property to be the next property of the current first node*/
      this.first = currentFirst.next;
      currentFirst.next = null;
    }
    /*decrement the length by 1 and return the value of the node dequeued*/
    --this.size;
    return currentFirst.value;
  }

  traverseQueue() {
    let arr = [];
    let current = this.first;
    arr.push(current.value);
    while (current.next) {
      current = current.next;
      arr.push(current.value);
    }
    console.log(arr);
  }
}
let queue = new Queue();
queue.enqueue(12);
queue.enqueue(23);
queue.enqueue(78);
queue.enqueue(9);
queue.dequeue();
queue.traverseQueue();
console.log(queue);
