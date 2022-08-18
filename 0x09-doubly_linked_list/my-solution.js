/*Implementation of a doubly linked list*/

/*A doubly linked list is a list ds with nodes and each node has a pointer to the next node and another pointer to the previous node*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    /*this method adds a node at the end of the list*/
    const newNode = new Node(value);

    /*if the list is empty, make this node the head and the tail*/
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
      return this;
    }

    /*if not, set the next property of the tail to be this newly created node*/
    this.tail.next = newNode;
    /*set the previous property of this newly created node to be the tail*/
    newNode.previous = this.tail;
    /*set the tail to be this newly created node*/
    this.tail = newNode;
    /*increment the length and return the list*/
    ++this.length;
    return this;
  }

  pop() {
    /*this method removes a value at the end of the list and returns that value*/

    /*if there are no elements in the list, return undefined*/
    if (!this.head || this.length === 0) return undefined;

    /*grab the current tail  in the list*/
    const oldTail = this.tail;
    /*if the length of the list is 1, set the head and tail to be null and return the current tail*/
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      --this.length;
      return oldTail;
    }

    /*otherwise, update the tail to be the previous node to the current tail*/
    let oldTailPrevNode = oldTail.previous;
    this.tail = oldTailPrevNode;
    /*set this new tail's next to be null and remove all the references to the old tail*/
    oldTailPrevNode.next = null;
    oldTail.next = null;
    oldTail.previous = null;
    /*decrement the length and return the removed tail*/
    --this.length;
    return oldTail;
  }

  shift() {
    /*removes a node from the beginning of the list and returns it*/

    /*if there are no elements, return undefined*/
    if (!this.head || this.length === 0) return undefined;

    /*store the current head property in a variable to return it later*/
    let shiftedHead = this.head;

    /*if the length is 1, set the head and tail to be null*/
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      --this.length;
      return shiftedHead;
    }

    /*update the head to be the next of the old head*/
    this.head = shiftedHead.next;
    /*set the head's prev property to be null*/
    this.head.previous = null;
    /*set the old head's next to be null*/
    shiftedHead.next = null;
    /*decrement the length and return the removed head*/
    --this.length;
    return shiftedHead;
  }

  visualize() {
    let current = this.head;
    let vstring = `${current.value} <--->`;
    while (current.next) {
      current = current.next;
      vstring += `${current.value} <--->`;
    }
    vstring += "null";
    console.log(vstring);
  }

  unshift(value) {
    /*this method adds a node to the beginning of our singly linked list*/
    const newNode = new Node(value);

    /*if the length is 0, set the head to be the new node and the tail to be the new node*/
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*set the prev property of the current head to be the new node*/
      let currHead = this.head;
      currHead.previous = newNode;
      /*set the next property of the new node to be the current head*/
      newNode.next = currHead;
      /*update the head to be this new node*/
      this.head = newNode;
    }
    ++this.length;
    return this;
  }

  get(idx) {
    /*this method returns a node based on a given position*/
    /*validate that the index is correct*/
    if (idx < 0 || idx >= this.length - 1) return null;

    /*loop from the end of the list coming backwards or start of the list goind towards the end depending on where the index falls when the length of the list is splitted into half*/
    let mid = parseInt(this.length / 2);
    if (idx <= mid) {
      console.log("searching in the lower half");
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      return current;
    } else if (idx > mid) {
      console.log("searchin in the upper half");
      let current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.previous;
      }
      return current;
    }
  }

  set(idx, value) {
    /*this method replaces the value of a node in doubly linked list and returns true if successful and false if not*/
    let nodeToReplace = this.get(idx);
    if (nodeToReplace) {
      nodeToReplace.value = value;
      return true;
    }
    return false;
  }

  insert(idx, value) {
    /*this method inserts a node in a doubly linked list at a certain position*/
    /*if the index is out of range, return false*/
    if (idx < 0 || idx > this.length - 1) return false;

    /*if the index is 0, unshift*/
    if (idx === 0) return !!this.unshift(value);
    /*if the index is equal to length - 1, push*/
    if (idx === this.length - 1) return !!this.push(value);

    /*otherwise, we use the get method to access index - 1*/
    let prevNode = this.get(idx - 1);
    /*set the next and previous properties on correct nodes in order to link everything together*/
    let newNode = new Node(value);

    let tmp =
      prevNode.next; /*stores reference to the current next node of this node*/
    prevNode.next = newNode;
    newNode.previous = prevNode;
    newNode.next = tmp;
    tmp.previous = newNode;
    ++this.length;
    return true;
  }

  remove(idx) {
    /*this method removes the node at a given index and returns the removed node*/
    if (idx < 0 || idx > this.length - 1) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let nodeToBeRemoved = this.get(idx);
    let nodeBefore = nodeToBeRemoved.previous;
    let nodeAfter = nodeToBeRemoved.next;
    (nodeBefore.next = nodeAfter), (nodeAfter.previous = nodeBefore);
    (nodeToBeRemoved.next = null), (nodeToBeRemoved.previous = null);
    --this.length;
    return nodeToBeRemoved;
  }
}

let dlist = new DoublyLinkedList();
dlist.push(12);
dlist.push(22);
dlist.push(25);
dlist.push(34);
dlist.push(56);
dlist.push(90);
dlist.pop();
// console.log(dlist.shift());
dlist.unshift(55);
dlist.unshift(45);

console.log(dlist.get(3));
console.log(dlist.get(5));
console.log(dlist.get(4));

console.log(dlist.set(3, 15));
console.log(dlist.set(12, 88));
console.log(dlist.insert(2, 5));
// console.log(dlist.remove(0));

dlist.visualize();

console.log(dlist);
