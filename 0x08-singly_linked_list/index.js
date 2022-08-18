// implementation of a linked list

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
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
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
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    // adds a value to the beginning of a linkedlist
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    //returns a value at a given index
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    console.log(current);
    return current;
  }

  set(idx, val) {
    // changes the value of a node based on a given index
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, value) {
    // inserts a node in the middle of a list
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(value);
    if (idx === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let previous = this.get(idx - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    // removes the node at a given index
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let previousNode = this.get(idx - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // this method will help us to see the list and thus see if it is reversed
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  visualize() {
    let initString = "";
    let current = this.head;
    while (current) {
      initString += `${current.val} --> `;
      current = current.next;
    }
    console.log(initString);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("how");
list.push("are");
list.push("you");

// list.pop();
list.unshift("Yooh,");

list.get(30);
list.set(1, "bruv");

list.insert(1, 234);
list.remove(1);

list.print();
list.visualize();
list.reverse();
list.visualize();
