/*Implementation of a singly linked list*/

/*The node class*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    /*adds a node to the end of the list*/
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    ++this.length;
    return this;
  }

  pop() {
    /*this method removes a node and the end of the list and returns it*/
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    /*this method removes a node at the end of the list*/
    if (this.length === 0) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    /*this method adds a node to the beginning of a list and returns the updated list*/
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    /*this method retrieves a node based on the given index*/
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    if (index <= this.length / 2) {
      console.log("working from the start");
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      console.log("working from the end");
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    /*this method replaces the value of a node in the list and returns true if successfull or false if not*/
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    /*this method adds a node in a doubly linked list by a certain position*/
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let beforeNode = this.get(index - 1);
    let newNode = new Node(val);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    /*this method removes a node at a given position and returns the removed node*/
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(88);
list.push(67);
list.push(54);
list.pop();
list.shift();
list.unshift(51);

console.log(list.get(3));
console.log(list.get(4));
console.log(list.set(2, 88));

console.log(list.insert(1, 44));
console.log(list.remove(1));

console.log(list);
