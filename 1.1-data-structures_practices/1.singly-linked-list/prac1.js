/*Implementation of singly linked list*/

/*The node class*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*the list itself*/

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    /*This method adds nodes to the end of the list and returns the list*/
    let newNode = new Node(value);

    /*If there are no elements, make this node the head and the tail*/
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
      return this;
    }
    /*Otherwise, if there are nodes, make this node the tail*/
    this.tail.next = newNode;
    this.tail = newNode;
    ++this.length;
    return this;
  }

  unshift(val) {
    /*this method adds node to the beginning of the list, returns the list*/
    let newNode = new Node(val);
    /*If the list is empty, make this the head and the tail*/
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      ++this.length;
      return this;
    }
    /*make this node the head and make it's next to point the current head and increment the size of the list*/
    let oldHead = this.head;
    newNode.next = oldHead;
    this.head = newNode;
    ++this.length;
    return this;
  }

  get(idx) {
    /*this method returns the node at a given index*/
    /*if the index is out of range i.e less than 0 or greater than length - 1, return undefined*/
    if (idx < 0 || idx > this.length - 1) return undefined;
    /*if the index is 0, return the head*/
    if (idx === 0) return this.head;

    /*if the index is equal to  length - 1, return the tail*/
    if (idx === this.length - 1) return this.tail;

    /*else, follow these steps*/
    /*Create a variable that will keep track of the current value and initialize this to the head*/
    let current = this.head;
    /*loop for as much as the idx, each time update the current value*/
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }

  insert(value, idx) {
    /*This method inserts a value at a given index, returns true or false depending on whether the element could be inserted*/
    /*if the index is out of range, the return false*/
    if (idx < 0 || idx > this.length - 1) return false;
    /*if the index is 0, simply unshift the node*/
    if (idx === 0) {
      this.unshift(
        value
      ); /*we are unshifting only the value, the unshift method will take care of creating the node and incrementing the length*/
      return true;
    }
    /*if the index is equal to length - 1, simply push this node*/
    if (idx === this.length - 1) {
      this.push(
        value
      ); /*we are pushing only the value, the push method will take care of creating a new node and incrementing the length*/
      return true;
    }

    /*else, follow these steps*/
    /*create this new node*/
    let newNode = new Node(value);
    /*get the node just before the index you are supposed to insert this new node*/
    let prev = this.get(idx - 1);
    /*keep track of what this node is currently pointing to*/
    let tmp = prev.next;
    /*make prev element to point to this new node*/
    prev.next = newNode;
    /*make the new node to point to what prev was pointing*/
    newNode.next = tmp;
    /*increment the length and return true*/
    ++this.length;
    return true;
  }

  pop() {
    /*this method removes a node at the end of the list, returns the removed tail node*/
    let oldTailNode = this.tail;
    /*get the node just before the last node*/
    let nodeJustBeforeTheLast = this.get(this.length - 2);
    /*make it's next pointer to be null and make it the tail and then decrease the length*/
    nodeJustBeforeTheLast.next = null;
    this.tail = nodeJustBeforeTheLast;
    --this.length;
    return oldTailNode;
  }

  shift() {
    /*this method removes a node at the beginning of the list or rather the head node and returns it*/
    let oldHead = this.head;
    /*make the next of the head to be null and make the node next to this old head to be the new head*/
    let newHead = oldHead.next;
    this.head = newHead;
    oldHead.next = null;
    --this.length;
    return oldHead;
  }

  remove(idx) {
    /*this method removes a node at a given index and returns the removed element*/
    /*check if the index is out of range, if so, return undefined*/
    if (idx < 0 || idx > this.length - 1) return undefined;

    /*if the index is 0, simply remove at the head using the shift method we have already written*/
    if (idx === 0) {
      let removedNode = this.shift();
      return removedNode;
    }

    /*if the index is equal to the length - 1, simply pop using the pop method we have already written*/
    if (idx === this.length - 1) {
      let removedNode = this.pop();
      return removedNode;
    }

    /*otherwise, follow these steps: */
    /*get the node just before the node at the index provided*/
    let nodeNeighbourLeft = this.get(idx - 1);
    /*get also the node next to the node to be removed to the right of it*/
    let nodeNeighbourRight = this.get(idx + 1);
    /*make the next of node to the left of the node to be removed to point to the node to the right of the one to be removed*/
    nodeNeighbourLeft.next = nodeNeighbourRight;
    /*decrease the length and return the removed node*/
    --this.length;
    return this.get(idx);
  }

  set(newValue, idx) {
    /*this method changes the node/value at a given index*/
    /*check for index overflow or underflow*/
    if (idx < 0 || idx > this.length - 1) return false;

    /*if the index is ok, use the get method to retrieve the node to be changed*/
    let nodeToBeChanged = this.get(idx);
    /*change the value of this node to be the value of what was passed in the function*/
    nodeToBeChanged.value = newValue;
    return true;
  }

  reverse() {
    /*this method reverses a list in place without changing it*/

    /*if the length of the list is 1, just return it the way it is*/
    if (this.length === 1) return this;

    /*we will work by taking the current and making it's next to point to previous*/
    /*We need a variable to keep track of the previous initialized to null*/
    let previous = null;
    /*We also need a variable to keep track of the current value and initialize it to be the head*/
    let current = this.head;
    /*We also need to keep track of what curren't next is so that we don't loose track of the next value*/
    let nextNode = current.next;
    console.log(nextNode);
    /*start by setting the current's next to previous and always do this*/
    current.next = previous;

    /*traverse the list*/
    /*each time we traverse:
		 	previous comes to where current was
		 	current comes to where current.next was
		 	current.next becomes the next node in the list
		 	current.next becomes the previous*/
    for (let i = 0; i < this.length - 1; i++) {
      previous = current;
      current = nextNode;
      nextNode = nextNode.next;
      current.next = previous;
    }

    // swap the head and the tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    console.log(this);
    return this;
  }

  exists(val) {
    /*This method returns true or false depending on whether a node exists*/
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === val) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  visualize() {
    /*this is just a helper method to help in graphically visualizing the list*/
    let current = this.head;
    let visualizeString = `${current.value} ---> `;
    while (current.next) {
      current = current.next;
      visualizeString += `${current.value} ---> `;
    }
    visualizeString += `null`;
    console.log(
      `List is: ${visualizeString} ::: current length is ${this.length}`
    );
  }

  arrayVisual() {
    /*this is meant to help see the list reversed, the original intent was to view it as an array but I later realised I can generate a visualizing string out of the array*/
    let current = this.head;
    let list = [];
    list.push(current.value);
    while (current.next) {
      current = current.next;
      list.push(current.value);
    }
    let visString = "";
    for (let i = 0; i < list.length; i++) {
      visString += `${list[i]} ---> `;
    }
    visString += "null";
    console.log(visString);
  }
}

let list = new SinglyLinkedList();
list.push(23);
list.push(25);
list.push(33);
list.push(5);

list.unshift(90);
list.unshift(45);

// console.log(list.get(3));
// console.log(list.get(5));
// console.log(list.get(0));
// console.log(list.get(4));

list.insert(12, 0);
list.insert(66, 200);
list.insert(54, 6);
list.insert(88, 2);

// list.pop();
// list.pop();
// list.shift();
// list.shift();

// list.remove(4);

list.set(78, 3);

list.visualize();
console.log(list.exists(9999));
console.log(list.exists(88));
list.reverse();
list.arrayVisual();
console.log(list);
