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

  shift(){
    if(!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
        this.tail = null;
    }
    return currentHead;
  }

  unshift(val){
    // adds a value to the beginning of a linkedlist
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    }else{
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx){
    //returns a value at a given index
    if(idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while(counter !== idx){
        current = current.next;
        counter++;
    }
    console.log(current);
    return current;
  }

  set(idx, val){
    // changes the value of a node based on a given index
    let foundNode = this.get(idx);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false;
  }
}

const list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("how");
list.push("are");
list.push("you");

// list.pop();
list.unshift("Yooh,")

list.get(30)
list.set(1, "bruv");

console.log(list);
