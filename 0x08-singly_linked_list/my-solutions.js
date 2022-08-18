// my own solutions to the challenges
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // adds elements to the end of the linked list
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; //returning the whole list
  }

  pop() {
    // removes element at the end of the linked list

    // if there are no nodes, we return undefined
    if (!this.head || this.length === 0) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    // while there is something
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    //removes a value at the beginning of a list
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    // adds a value to the beginning of a linked list
    let newValue = new Node(val);
    if (!this.head) {
      this.head = newValue;
      this.tail = newValue;
    } else {
      newValue.next = this.head;
      this.head = newValue;
    }
    this.length++;
    return this;
  }

  get(idx) {
    //returns a value at a given index
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    console.log(current.val);
    return current;
  }

  set(idx, newValue) {
    // changes the value of a node at given index
    let node = this.get(idx);
    if (!node) return false;

    node.val = newValue;
    return true;
  }
  insert(idx, value) {
    // Adds a node in the middle of the list at a given position
    console.log(`Inserting ${value}`);
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) {
      this.push(value);
      console.log(this);
      return true;
    } else if (idx === 0) {
      this.unshift(value);
      console.log(this);
      return true;
    } else {
      let newNode = new Node(value);
      let previousNode = this.get(idx - 1);
      let previousNodeNext = previousNode.next;
      previousNode.next = newNode;
      newNode.next = previousNodeNext;
      this.length++;
      console.log(this);
      return true;
    }
  }

  remove(idx) {
    // removes the node at the given index
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length - 1) {
      return this.pop();
    } else if (idx === 0) {
      return this.shift();
    } else {
      let prevNode = this.get(idx - 1);
      let deleteNode = this.get(idx);
      let deleteNodeNext = deleteNode.next;
      prevNode.next = deleteNodeNext;
      this.length--;
      console.log(this);
      return deleteNode.val;
    }
  }

  visualize() {
    // helps visualize the list
    let tempStringVisualize = `${this.head.val} --> `;
    let current = this.head;
    while (current.next) {
      current = current.next;
      tempStringVisualize += `${current.val} --> `;
    }
    console.log(tempStringVisualize);
  }

  reverse() {
    //reverses a linked list in place

    //swap the head and the tail is the first step
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let previous = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    list.visualize();
    console.log(this);
    return this;
  }
}

const list = new SinglyLinkedList();
// list.push("hello");
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(100);

// list.pop();
// list.shift();
list.unshift("5");
// list.get(4);
list.set(1, 12);
list.insert(1, 18);
list.insert(0, 5);
//list.remove(0);
//list.remove(1);
list.visualize();
list.reverse();
list.visualize();
