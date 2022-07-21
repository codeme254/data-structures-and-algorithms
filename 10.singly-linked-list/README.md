# SINGLY LINKED LIST

### Implemented with JavaScript

A linked list is an ordered colletion of elements.

It is a data structure that contains a head, tail and length property.

Linked lists consist of nodes and each node has a value and a pointer to another node or null.

It does not use indexes as in arrays, each element is a node and it references the next node.

## Comparing Linked List and Array properties

**Arrays**

- Indexed in order.
- Insertion and deletion is expensive.
- Can quickly be accessed at a specific index.

**Linked List**

- Do not have indexes.
- Connected via nodes with the next pointer.
- Random access is not allowed.

## Structure of a Node in a linked list

- Piece of data.
- Reference to the next node, the default is null

```js
class Node {
  constructor(val) {
    this.val = val; //value
    this.next = null; //reference to the next node with default value null
  }
}
```

## Structure of a SinglyLinkedList

- The head property with a default value of null.
- The tail property with a default value of null.
- the length property with a default value of 0.

```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

---

# **Operations on a Linked List**

They are:
* Pushing
* Popping
* Shifting
* unshifting
* get
* set
* insert
* remove
* reverse

## _**Pushing**_

Pushing is adding new node at the end of the list.

**Pushing pseudocode**

1. Create a method that accepts a value.
2. Create a new node using the value passed to the function.
3. If there is no head property on the list or in other words if the list has no elements, set the head and the tail to be the newly created node.
4. If the list has elements, set the next property on the tail to be the newly created node and set the tail property on the list to be the newly created node.
5. Increment the length of the list.
6. Return the list.

Below is the code snippet.

```js
push(val) {
    let newNode = new Node(val);
    if (!this.head || this.length === 0) {
        // means there are no elements so make this node the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
}
```

## _**Popping**_

Popping is removing a node from the end of the linked list

**Popping steps**

1. If there are no nodes in the list, return undefined.
   - You can check if there is no head.
   - You can check if the length of the list is 0.
2. If there are elements, loop until you reach the tail.
3. Set the next property of the second to last element (the element just before the tail) to be null.
4. Set the tail to be the second to last node (the node just before the tail).
5. Decrement the length by 1.
6. Return the node that was removed.

Below is the code snippet

```js
pop() {
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
```

## _**Shifting**_

Shifting is removing a node from the beginning of the linked list.

**Shifting steps**

1. If there are no nodes, return undefined.
2. If there are elements, store the current head property in a variable.
3. Set the head property to be the current head's next property.
4. Decrement the length by 1.
5. Return the value remove.

Below is the code snippet

```js
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
```

## _**Unshifting**_

Adding element/node to the beginning of a list.

**Unshifting steps**

1. Create a shift method that accepts a value.
2. Create a new node using the value passed to the function.
3. If there are no elements, set the head and the tail to be the newly created node.
4. Otherwise, set the newly created node's next property to be the current head property on the list.
5. Set the head property on the list to be the newly created node.
6. Increment the length of the list by 1.
7. Return the linked list.

Below is the code snippet.

```js
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
```

## _**get**_

Retrieving a node at a given position.

For this, we want it to function like arrays, i.e getting node at position 0 will return the head, getting the element at position 1 will return the first element etc. In other words, 0 based indexing.

**get steps**

1. Create a method that accepts and index.
2. If the index is less than 0 of greater than or equal to the length of the list, we return null.
3. If the index is 0, you can return the head right away and if the index is equal to length - 1, you can return the tail right away to avoid unnecessary hassle.**(OPTIONAL)**
4. Otherwise, traverse the list as many times as the index and return the element.

Below is the code snippet.

```js
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
```

## _**set**_

Changing the value of a node based on its position in the linked list.

**set steps**

1. Create a method that takes in an index and a value.
2. We can use the get function that we already have to find the specific node **(REUSING CODE AND THUS NOT REPEATING OURSELVES)**
3. If the node is not found, return false.
4. If the node is found, set the value of that node to be the value passed into the function and return true.

Below is the code snippet.

```js
set(idx, val){
    // changes the value of a node based on a given index
    let foundNode = this.get(idx);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false;
}
```

## _**inserting**_

Adding a node to the linked list at a specific position.

**insert steps**

1. Create a function that takes in an index and a value.
2. If the index is less than 0 or greater than length, return false.
3. If the index is the same as length, push the new node to the end of the list using the push method that we already have.
4. If the index is 0, unshift the node node to the start of the list using the unshift method that we already have.
5. Otherwise, using the get method, access the node at index - 1 using the get function that we already have.
6. Set the next property on that node to be the new node.
7. Set the next property on the new node to be the previous' next.
8. Increment the length.
9. Return true.

Below is the code snippet.

```js
insert(idx, value){
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
```

## _**removing**_

Removing a node from the linked list at a specific position.

**removing steps**

1. If the index is less than 0 or greater than the length, return undefined.
2. If the index is the same as length - 1, then pop.
3. If the index is 0, then shift.
4. Otherwise, get the element at index - 1 using the get method that we already have.
5. Set the next property on that node to be the next of the next node.
6. Decrement the length.
7. Return the value of the removed node.

Below is the code snippet.

```js
remove(idx){
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
```

## _**reverse**_

Reversing the linked list in place, i.e reversing in place without making any copy or duplicate, we do it in place.

**reverse steps**

1. Swap the head and the tail.
2. Create a variable called next and another one called previous.
3. Create a variable called node and initialize it to the head prop.
4. Loop through the list.
5. Set next to be the next property on whatever node is.
6. Set the next property on node to be whatever previous is.
7. Set the previous to be the value of the node variable.
8. Set the node variable to be the value of the next variable.

Below is the code snippet of reverse.

```js
reverse(){
	  let node = this.head;
	  this.head = this.tail;
	  this.tail = node;
      let prev = null;
	  let next;
	  for(let i = 0; i < this.length; i++){
		  next = node.next;
		  node.next = prev;
		  prev = node;
		  node = next;
	  }
	  return this;
}
```

# Big O of Singly Linked List

Insertion - O(1)

Removal at the beginning - O(1)

Removal at the end - O(N)

Searching - O(N)

Access - O(N)

- Singly linked lists are a super excellent alternative to arrays when insertion and deletion at beginning is frequently required.

- Arrays contain built in indexing while linked list does not.
- The idea of a list data structure that consists of nodes is the foundation for other data structures like stacks and queues.
