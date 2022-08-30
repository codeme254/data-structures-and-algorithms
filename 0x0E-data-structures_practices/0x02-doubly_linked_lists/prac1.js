/*Implementation of a doubly linked list*/

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    /*This method adds a node to the end of a doubly linked list*/
    /*@val : the value of the node that is being added to the list*/
    /*Return: the whoe list upon successful pushing of the node*/

    /*If there are no nodes, make this node the head and the tail of the list*/
    const newNode = new Node(val);
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*Make the current tail next point to this new node and this new node previous point to the current tail*/
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    /*Increment the length of the list and return this new node*/
    ++this.length;
    return this;
  }

  unshift(val) {
    /*This method adds a node to the beginning of the list*/
    /*@val : the value of the node to be added to the list*/
    /*Return: the whole list upon successful addition*/

    const newNode = new Node(val);
    /*If there are no nodes in the list, make this node the head and the tail*/
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      /*If there are nodes: make this node's next point to the current head and the current head's previous point to this new node*/
      newNode.next = this.head;
      this.head.previous = newNode;
      /*Explicitly set this new node to be the head*/
      this.head = newNode;
    }
    /*Increment the length of the list and return the list*/
    ++this.length;
    return this;
  }

  insert(idx, val) {
    /*This method inserts a node at a specific index*/
    /*@idx : the index to insert this new node*/
    /*@val : the value of the new node to be inserted*/
    /*Return: the whole list upon successful addition*/

    /*Validate if the index is within range*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*If the index is 0, unshift and if the index is equl to length - 1, push*/
    if (idx === 0) return this.unshift(val);
    if (idx === this.length - 1) return this.push(val);

    /*Otherwise, loop through until you reach the index to insert and insert*/
    const newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    let tmp = current.next;
    current.next = newNode;
    newNode.previous = current;
    newNode.next = tmp;
    tmp.previous = newNode;
    ++this.length;
    return this;
  }

  get(idx) {
    /*This method returns a node at a given index*/
    /*@idx : the index of the node we want*/
    /*Return: the node at index idx*/
    /*This method assumes we are using the zero based indexing*/

    /*Validate if the index is within the correct range*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*If the index is 0, return the head and if it is equal to length - 1, return the tail*/
    if (idx === 0) return this.head;
    if (idx === this.length - 1) return this.tail;

    /*Otherwise, loop until you find the node at this index*/
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }

  update(idx, val) {
    /*This method updates a node at an index and returns that node*/
    /*@idx : index of the node we want to update*/
    /*@val : the value of the node we want to update*/
    /*Return: the node upon successful update*/

    /*Verify the index is within range*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*Otherwise, use the get method to get the node at this index and return it*/
    let node = this.get(idx);
    node.value = val;
    return node;
  }

  pop() {
    /*This method removes the last node i.e the tail of the list and returns it*/
    /*If there are no nodes in the list, simply return undefined*/
    if (!this.head || this.length === 0) return undefined;

    /*Otherwise, grab the node previous to the tail and make it the tail, the remove all connections to the current tail*/
    let oldTail = this.tail;
    let tmp = oldTail.previous;
    this.tail = tmp;
    tmp.next = null;
    oldTail.previous = null;
    --this.length;
    return oldTail;
  }

  shift() {
    /*This method removes the first node of the list*/
    /*Return: the node upon successful removal*/

    /*If the list is empty, simply return undefined*/
    if (!this.head || this.length === 0) return undefined;

    /*Otherwise, remove all the connections from the current head and make the current head's next to be the head*/
    let oldHead = this.head;
    let newHead = oldHead.next;
    this.head = newHead;
    newHead.previous = null;
    oldHead.next = null;
    --this.length;
    return oldHead;
  }

  remove(idx) {
    /*This method removes a node at index idx and returns that node*/
    /*@idx : the index of the node to be removed*/
    /*Return: the removed node*/

    /*Validate if the index is within range*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*if the index is equl to 0, simply call shift and if it is equal to length - 1, simply call pop*/
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    /*Otherwise, loop to the value and remove all the connections it has*/
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    let prev = current.previous;
    let nxt = current.next;
    prev.next = nxt;
    nxt.previous = prev;
    /*Remove all the connections to this node*/
    current.next = null;
    current.previous = null;
    --this.length;
    return current;
  }

  traverse() {
    /*This method prints an array like representation of our dll*/
    let arr = [];
    let current = this.head;
    arr.push(current.value);

    while (current.next) {
      current = current.next;
      arr.push(current.value);
    }
    console.log(arr);
  }
}

let dll = new DoublyLinkedList();
dll.push(10);
dll.push(13);
dll.push(15);
dll.push(20);
dll.push(35);
dll.push(40);
dll.push(45);
dll.unshift(5);
console.log(dll.pop());
console.log(dll.shift());
console.log(dll.remove(3));
dll.insert(3, 24);
dll.insert(4, 28);
dll.update(2, 20);
console.log(dll.get(2));
dll.traverse();
console.log(dll);
