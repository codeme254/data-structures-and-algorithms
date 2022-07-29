/*Implementation of doubly linked list: Author: Otwoma Dennis (zaphdev)*/

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
    /*adds a node to the end of the list and returns the list*/
    /*if the list is empty, make this node the head and the tail and increment the length*/
    let newNode = new Node(value);
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
      return this;
    }
    /*if there are elements, make the current tail's next to point to the new node*/
    this.tail.next = newNode;
    /*make the newNode's previous property to be the current tail*/
    newNode.previous = this.tail;
    /*make the new node to be the tail*/
    this.tail = newNode;
    /*increment the length and return the list*/
    ++this.length;
    return this;
  }

  shift(value) {
    /*this method adds a node at the beginning and returns the list*/
    /*if the list is empty, make this node the head and the tail and increment the length of the list*/
    let newNode = new Node(value);
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
      return this;
    }

    /*make the current head's previous to point to this new node*/
    this.head.previous = newNode;
    /*make the new node's nex to poin to the current head*/
    newNode.next = this.head;
    /*explicitlly make this new node the head*/
    this.head = newNode;
    /*increment the length of the list and return the list*/
    ++this.length;
    return this;
  }

  get(idx) {
    console.log(`getting ${idx}`);
    /*this method return a node at a given index*/
    /*@idx : the index corresponding to the value in the list that we want to get*/

    /*if the index is out of range return undfined or null*/
    if (idx < 0 || idx > this.length - 1) return undefined;
    /*if the index is 0, return the head*/
    if (idx === 0) return this.head;
    /*if the index is equal to the length - 1, return the tail*/
    if (idx === this.length - 1) return this.tail;

    /*otherwise, figure out where the index is closest to: */
    /*if it is closest to the end, loop from the end towards the start with previous pointer*/
    /*if it is closest to the start, loop from the start towards the end with the next pointer*/
    let mid = parseInt(this.length / 2);
    let current;
    if (idx < mid) {
      console.log("searching in the upper half");
      /*index closes to the start, so loop from the head*/
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      return current;
    } else if (idx > mid) {
      console.log("searching in the lower half");
      current = this.tail;
      /*[10, 20, 30, 40, 50, 60, 70, 80, 90]*/
      /*looping from the end of the list, (listlength - idx) times*/
      for (let i = this.length - 1; i > idx; i--) {
        current = current.previous;
      }
      return current;
    }
  }

  unshift() {
    /*this method removes the current head and returns it*/
    /*if the list has only 1 element, set the head and the tail to be null, decrement the length and return the lonely node*/
    let currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      --this.length;
      return currentHead;
    }
    /*get the element after the current head*/
    let headToBe = currentHead.next;
    /*make the element after the current head to have it's previous property set to null*/
    headToBe.previous = null;
    /*make the current head to have the next property set to null*/
    currentHead.next = null;
    /*explicitly set the next element to the current head to be the head*/
    this.head = headToBe;
    /*decrement the length and return the removed head*/
    --this.length;
    return currentHead;
  }

  pop() {
    /*this method removes the current tail and returns it*/
    let oldTail = this.tail;
    /*if the list has only one elment, set the head and the tail property to be null, dec the length and return the lonely tail*/
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      --this.length;
      return oldTail;
    }

    /*get the element previous to the curren tail*/
    let tailToBe = oldTail.previous;
    /*set the next property of the element before the tail to be null*/
    tailToBe.next = null;
    /*set the previous property of the old tail to be null*/
    oldTail.previous = null;
    /*explicitlly set the element prior to the current tail to be the tail*/
    this.tail = tailToBe;
    /*decrement the length and return the removed tail*/
    --this.length;
    return oldTail;
  }

  insert(idx, value) {
    /*this method inserts a node at a given index and returns true if operation was a succes and false if not*/
    /*@idx : index we want to insert at*/
    /*@value : the value that we want to insert*/
    /*check if the index is in range or out of range*/
    if (idx < 0 || idx > this.length - 1) return false;

    /*if the index is 0, shift this value*/
    if (idx === 0) {
      this.shift(value);
      ++this.length;
      return true;
    }
    /*if the index is equal to length - 1, push the value*/
    if (idx === this.length - 1) {
      this.push(value);
      ++this.length;
      return true;
    }

    /*create this new node*/
    let newNode = new Node(value);

    /*get the node just before the index to insert and after the index to insert*/
    let nodeBefore = this.get(idx - 1);
    /*get the node next to the node before the index to insert*/
    let nodeAfter = nodeBefore.next;
    /*make the necessary patches*/
    nodeBefore.next = newNode;
    newNode.previous = nodeBefore;
    newNode.next = nodeAfter;
    nodeAfter.previous = newNode;
    ++this.length;
    return true;
  }

  remove(idx) {
    /*this method removes a node at a given index and returns it*/
    /*@idx : the index corresponding to the node we want to remove*/
    /*check if the index is out of range*/
    if (idx < 0 || idx >= this.length - 1) return undefined;

    /*if the index is 0, unshift*/
    if (idx === 0) return this.unshift();
    /*if the index is equal to length - 1, pop*/
    if (idx === this.length - 1) return this.pop();

    /*get the node to be removed*/
    let nodeToBeRemoved = this.get(idx);
    /*get the nodes before and after the node to be removed*/
    let nodeAfter = nodeToBeRemoved.next;
    let nodeBefore = nodeToBeRemoved.previous;
    /*do the necessary patches*/
    nodeToBeRemoved.previous = null;
    nodeToBeRemoved.next = null;
    nodeBefore.next = nodeAfter;
    nodeAfter.previous = nodeBefore;
    --this.length;
    return nodeToBeRemoved;
  }

  set(idx, value) {
    /*this method updates the value of a node at a certain index to the value given and returns the updated node*/
    /*@idx : index corresponding to the  node that we want to update*/
    /*@value : the value we want to update with*/

    /*check if the index is correct*/
    if (idx < 0 || idx > this.length - 1) return undefined;
    /*get the node and update the value with the value given*/
    let node = this.get(idx);
    node.value = value;
    return node;
  }

  traverse() {
    let current = this.head;
    console.log(current.value);
    while (current.next) {
      current = current.next;
      console.log(current.value);
    }
  }

  listInfo() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.next && current.previous) {
        console.log(
          `Node ${i}:-> ${current.value}, next: ${current.next.value}, previous: ${current.previous.value}`
        );
      } else if (current.previous) {
        console.log(
          `Node ${i}:-> ${current.value}, next: null, previous: ${current.previous.value} ->>Tail`
        );
      } else {
        console.log(
          `Node ${i}:-> ${current.value}, next: ${current.next.value}, previous: null ->>Head`
        );
      }
      current = current.next;
    }
  }
}

let dlist = new DoublyLinkedList();
dlist.push(10);
dlist.push(15);
dlist.push(24);
dlist.push(13);
dlist.push(5);
dlist.push(23);
dlist.shift(8);
dlist.shift(34);
dlist.unshift();
dlist.pop();
dlist.insert(2, 19);
dlist.remove(2);
dlist.set(2, 98);
// console.log(dlist.get(3));
// console.log(dlist.get(5));
console.log(dlist);
// dlist.traverse();
dlist.listInfo();
