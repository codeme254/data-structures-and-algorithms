/*Implementation of a singly linked list*/

/*The node class*/
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
    /*This method adds a node at the very end of a singly linked list*/
    /*@val : the value of the new node we are adding*/
    /*Return: the whole list upon adding*/
    const newNode = new Node(val);
    /*if the list is empty, make this node the head and the tail*/
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*grab the current tail and make it point to the new node which is our new tail*/
      this.tail.next = newNode;
      this.tail = newNode;
    }
    /*after doing pushing, increment the length and return the list*/
    ++this.length;
    return this;
  }

  unshift(val) {
    /*This method adds a node at the beginning of a singly linked list*/
    /*@val : the value of the new node we are unshiftting*/
    /*Return: the whole list upon successful unshiftting*/
    const newNode = new Node(val);
    /*If there are no nodes or if the list is empty, make this node the head and the tail*/
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*Make the new node point to the current head and explicitlly set it to be the head*/
      newNode.next = this.head;
      this.head = newNode;
    }
    /*whatever happens, increment the length and return the list*/
    ++this.length;
    return this;
  }

  get(idx) {
    /*This method returns the node at a given index assumes we are using zero based indexing*/
    /*@idx : the index of the node we want*/
    /*Return: the node at idx position*/

    /*Check to see if the index is out of range*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*If the list is empty, return undefined*/
    if (!this.head || this.length === 0) return undefined;

    /*Otherwise, return the node*/
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    console.log(current);
    return current;
  }

  pop() {
    /*This method removes a node from the end of the list, i.e the tail*/
    /*Return: the removed node*/

    /*if the list is emtpy, return undefined*/
    if (!this.head || this.length === 0) return undefined;

    /*save the old tail to return it later*/
    const oldTail = this.tail;
    /*use the get method to get the node just before the tail, this will be length - 2*/
    const nodeBeforeTail = this.get(this.length - 2);
    /*make this node to be the tail and make it's next to be null*/
    this.tail = nodeBeforeTail;
    nodeBeforeTail.next = null;
    /*decrement the length*/
    --this.length;
    console.log(oldTail);
    return oldTail;
  }

  shift() {
    /*This method removes a node at the beginning of a list*/
    /*Return: the removed node*/

    /*If the list is empty/ no nodes in the list, return undefined*/
    if (!this.head || this.length === 0) return undefined;

    /*Grab the head to return it later*/
    const oldHead = this.head;
    /*Get the element next to the head and set it to be the head*/
    this.head = this.head.next;
    oldHead.next = null;
    /*Decrement the length and return the removed head*/
    --this.length;
    return oldHead;
  }

  insert(idx, val) {
    /*This method inserts a node at a given index, it assumes we are using zero based indexing*/
    /*@idx : the index at which to insert this new node.*/
    /*@val : the value of the new node that we are insertting*/
    /*Return: the list upon successful insert*/

    /*check to see if the index is out of range*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*If the index is 0, call unshift, if it equal to length - 1, call push*/
    if (idx === 0) return this.unshift(val);

    if (idx === this.length - 1) return this.push(val);

    /*Create a new node with the given value*/
    const newNode = new Node(val);
    /*Use the get method to get the node just before the idx*/
    const tmp = this.get(idx - 1);
    /*get the node next to the node just before idx*/
    const tmpNext = tmp.next;
    /*Make all the necessary patching/connections*/
    tmp.next = newNode;
    newNode.next = tmpNext;
    /*Increment the length and return the list*/
    ++this.length;
    return this;
  }

  remove(idx) {
    /*This method removes a node at a given index*/
    /*@idx : the index of the node we are removing.*/
    /*Return: the removed node*/

    /*Validate the idx*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*If the index is 0, the shift*/
    if (idx === 0) return this.shift();
    /*If the index is equl to length - 1, then pop*/
    if (idx === this.length - 1) return this.pop();

    /*Use the get method to get the node just before the node to be removed, call it tmp*/
    const tmp = this.get(idx - 1);
    /*Grab the node to be removed*/
    const nodeRemoved = this.get(idx);
    /*Get the node next to the node to be removed*/
    const nodeRemovedNext = nodeRemoved.next;
    /*Make all the necessary patches*/
    tmp.next = nodeRemovedNext;
    nodeRemoved.next = null;
    /*Decrement the length and return the removed node*/
    --this.length;
    return nodeRemoved;
  }

  set(idx, val) {
    /*This method changes the value of the node at idx position to be the new value passed*/
    /*@idx : the index of the node that we want to mutate*/
    /*@val : the new value of the node*/
    /*Return: the mutated node*/

    /*validate the index passed*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*Use the get method to get the node at the index passed and do the necessary changes*/
    let node = this.get(idx);
    node.val = val;
    return node;
  }

  reverse() {
    /*This method reverses the list*/
    /*Return: the reversed list*/

    /*If there are no elements in the list, return undefined*/
    if (!this.head || this.length === 0) return undefined;

    //[10<--20<--30c-->40n-->50tmp-->60-->70-->80]
    let current = this.head;
    let next = current.next;
    for (let i = 0; i < this.length - 1; i++) {
      let tmp = next.next;
      next.next = current;
      current = next;
      next = tmp;
    }
    /*Return the list*/
    this.head.next = null;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }

  traverse() {
    /*This method traverses the list and returns the array version of it*/
    /*If the list is emtpy, return undefined*/
    if (!this.head || this.length === 0) return undefined;
    let current = this.head;
    let arr = [];
    arr.push(current.val);
    while (current.next) {
      current = current.next;
      arr.push(current.val);
    }
    console.log(arr);
    return arr;
  }
}

let sll = new SinglyLinkedList();
sll.push(20);
sll.push(35);
sll.push(45);
sll.push(55);
sll.unshift(15);
sll.unshift(5);
sll.get(3);
sll.get(2);
sll.pop();
sll.shift();
sll.insert(0, 4);
sll.insert(0, 2);
sll.insert(5, 60);
sll.insert(6, 65);
sll.insert(2, 10);
sll.insert(5, 25);
sll.remove(0);
sll.remove(8);
sll.remove(2);
sll.remove(3);
sll.set(0, 8);
sll.set(2, 15);
sll.traverse();
console.log(sll.reverse());
sll.traverse();
console.log(sll);
