/*implementation of a stack data structure*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    /*this method adds an element to the top of the stack and returns the updated stack*/
    let newNode = new Node(value);
    /*if there are no nodes in the stack, make this the first and the last node*/
    if (!this.first || this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      /*there are some nodes, so:*/
      /*get reference to the current first element*/
      let oldFirst = this.first;
      /*make the new node's next point to the current first node*/
      newNode.next = oldFirst;
      /*explicitly make this new node the start*/
      this.first = newNode;
    }
    /*increment the length and return the stack*/
    ++this.size;
    return this;
  }

  pop() {
    /*removes an element from the top of the stack and returns the removed element*/
    /*if there are nod nodes in the stack, return null*/
    if (!this.first || this.size === 0) return null;

    /*otherwise, create a temporary variable to store the current first property on the stack*/
    let currentFirst = this.first;
    /*if there is only  one node, set the first and the last property to be null*/
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      /*set the first property to be the next of the current first node*/
      this.first = currentFirst.next;
    }
    /*decrement the size by 1 and return the value of the removed node*/
    --this.size;
    return currentFirst.value;
  }

  seeStack() {
    let current = this.first;
    let arr = [];
    let initString = `${current.value}|`;
    arr.push(current.value);
    while (current.next) {
      current = current.next;
      initString += `${current.value}|`;
      arr.push(current.value);
    }
    console.log(arr);
    console.log(initString);
  }
}
let stack = new Stack();
stack.push(15);
stack.push(5);
stack.push(23);
stack.push(55);
stack.push(90);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.seeStack();
console.log(stack);
