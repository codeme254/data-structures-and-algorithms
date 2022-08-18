/*implementation of stack data strucutre with an instructor*/
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

  push(val) {
    /*adds a new element to the top of the stack and returns the size*/
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    /*removes a node at the top and returns the value of the removed node*/
    if (!this.first) return null;
    let temp = this.first;

    if (this.first === this.first) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }

  traverseStack() {
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

let stack = new Stack();
stack.push(230);
stack.push(23);
stack.push(15);
stack.push("SOMETHING");
stack.pop();
stack.pop();
stack.pop();
stack.traverseStack();
console.log(stack);
