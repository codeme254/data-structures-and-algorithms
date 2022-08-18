/*implementation of the queue data strucuture: author : zaphdev*/

/*queue data structure deals with adding at the end (enqueue) and removing at the start (dequeue)*/
/*it deals with the first in first out principle*/

/*the node class*/
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
    this.length = 0;
  }

  enqueue(value) {
    /*this method adds a node to the end of the Q and returns the stack*/

    /*create this new node*/
    let newNode = new Node(value);

    /*if the Q has no elements, make this newNode the start and the end*/
    if (!this.first || this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      /*grab the current last node*/
      let currentLastNode = this.last;
      /*make it to point the new node*/
      currentLastNode.next = newNode;
      /*explicitlly make this new node the last element of the Q*/
      this.last = newNode;
    }
    /*increment the length of the Q and return the Q*/
    ++this.length;
    return this;
  }

  dequeue() {
    /*this method removes a node at the beginning of the Q and returns it*/
    /*if the length of the Q is 1, make the first and the last to be null, decrement the length and return the first or last*/
    if (this.length === 1) {
      this.first = null;
      this.last = null;
      --this.length;
      return this.first;
    }
    /*if not, grab the current first value*/
    let currentFirst = this.first;
    /*store the element next to the first in a temporary variable as this is going to be our new first*/
    let tmp = currentFirst.next;
    /*make the current firs to have a next property of null, i.e dereferencing it*/
    currentFirst.next = null;
    /*make the element next to this first element to be the new first*/
    this.first = tmp;
    /*decrement the length and return the removed node*/
    --this.length;
    return currentFirst;
  }

  traverseQ() {
    /*this method produces an array like version of our Q*/
    let qArr = [];
    let current = this.first;
    qArr.push(current.value);
    while (current.next) {
      current = current.next;
      qArr.push(current.value);
    }
    console.log(qArr);
  }
}

let q = new Queue();
q.enqueue(45);
q.enqueue(43);
q.enqueue(87);
q.enqueue(12);
q.enqueue(34);
q.traverseQ();
q.dequeue();
q.traverseQ();
console.log(q);
