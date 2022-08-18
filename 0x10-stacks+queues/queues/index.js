/*implementation of a queue data structure with an instructor*/

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

  enqueue(val) {
    /*adds a node to the end of the queue*/
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
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
let q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");
q.enqueue("FOURTH");
q.dequeue();
q.dequeue();
q.traverseQueue();
console.log(q);
