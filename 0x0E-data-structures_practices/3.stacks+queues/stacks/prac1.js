/*Implementation of a stack data structure with javascript: zaphdev*/

/*stacks only care about adding (push) nodes and removing (pop) nodes*/
/*adding and removing happens at the top, the nodes inside a stack are linked to each other like a linked list*/

/*The node class*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*the Stack class itself*/

class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  push(val) {
    /*this method adds a node to the start of the stack*/

    /*create the node with the value passed*/
    let newNode = new Node(val);
    /*if the stack is empty, make this node the start and the last*/
    if (!this.start || this.size == 0) {
      this.start = newNode;
      this.end = newNode;
    } else {
      /*make the next of this new node to point to the current start*/
      /*explicitly make this new node the start*/
      newNode.next = this.start;
      this.start = newNode;
    }
    /*increment the size and return the stack*/
    ++this.size;
    return this;
  }

  pop() {
    /*this method removes a node from the top of the stack and returns the removed node*/

    /*if the stack has only one element, make the start and the end null and return the start or the end*/
    if (this.length === 1) {
      this.start = null;
      this.end = null;
      --this.size;
      return this.start;
    }
    /*make reference to the current start to return it later*/
    let currentStart = this.start;
    /*make reference to the element next to the start since it is going to be the new start*/
    let tmp = currentStart.next;
    /*make the current start to point null i.e removing references from it*/
    currentStart.next = null;
    /*explicitly make the element next to this start the start and return the removed start after decresing the size*/
    this.start = tmp;
    --this.size;
    return currentStart;
  }

  traverseStack() {
    /*this method prints an array like version of our stack for visualization purposes*/
    let stackArr = [];
    let current = this.start;
    stackArr.push(current.value);
    while (current.next) {
      current = current.next;
      stackArr.push(current.value);
    }
    console.log(stackArr);
  }
}

let stack = new Stack();
stack.push(34);
stack.push(33);
stack.push(55);
stack.push(56);
stack.push(1);
stack.push(67);
stack.push(98);
stack.pop();
stack.pop();

stack.traverseStack();
console.log(stack);
