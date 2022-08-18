# Doubly Linked List

## Implemented with JavaScript

A doubly linked list is a linear data structure with nodes where each node has a pointer to previous and next node in the list.

Structurely, it has a small change to its brother singly linked list but very big change in efficiency of certain operations like removing the tail and reversing the list as we shall see.

**Drawback of Doubly Linked List**

- it takes more memory due to the extra linkage of previous. However, this comes with flexibility, more memory == more flexibility.

## **_Our Node class_**

Each node will have a next pointer, a previous pointer and a value.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
```

## **_Our Doubly Linked List Structure_**

```js
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

# **Operations on a Linked List**

They are:

- Pushing
- Popping
- Shifting
- unshifting
- get
- set
- insert
- remove

## **_Pushing_**

Adding a node at the end of the list.

**Pushing steps**

1. Create a new node with the value passed.
2. If the list is empty, set the head and the tail of the list to be this newly created node.
3. If not, set the next property on the tail to be this newly created node.
4. Set the previous property on the newly created node to be the current tail.
5. Set the tail to be the newly created node.
6. Increment the length.
7. Return the list.

Below is the implementation of push:

```js
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
```

## **_Popping_**

Removing a node from the end of the list.

**Popping steps**

1. If the list is empty, return undefined.
2. Otherwise, store the current tail in a variable to return it later.
3. If the length of the list is 1, set the head and the tail to be null.
4. Otherwise, update the tail to be the previous node of the current tail.
5. Set the new tail's next to be null.
6. Decrement the length.
7. Return the removed value.

N/B: MAKE SURE YOU KILL ALL THE CONNECTION I.E NEXT AND PREVIOUS ON THE NODE YOU JUST POPPED.

Below is the implementation of the pop method:

```js
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
```

## **_Shifting_**

Removing a node from the beginning of the list.

**Shifting steps**

1. If the length of the list is 0, return undefined.
2. Othwerwise, store the current head property in a variable to return it later.
3. If the length of the list is 1, set the head and the tail property of the list to be null.
4. Otherwise, update the head property to be the next of the old head.
5. Set the new head's previous property to be null.
6. Set the old head's next property to be null.
7. Decrement the length.
8. Return the old head.

Below is the implementation of the shift method:

```js
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
```

## **_Unshifting_**

Adding a node to the beginning of the list.

**Unshifting steps**

1. Create a method with the value being unshifted as a parameter.
2. Create a new node with the value passed into this method.
3. If the list is empty, set the length and the tail to be this newly created node.
4. Otherwise, set the previous property of the current head to be the new node.
5. Set the next property of the new node to be the current head.
6. Update the head to be this new node.
7. Increment the length and return this updated list.

Below is the implementation of the unshift method:

```js
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
```

## **_Get_**

Accessing a node in the list by it's position.

It has a very nice implementation with doubly linked list.

We can start from the tail and loop towards the beginning with previous or start from the beginning and loop towards the end with next pointer depending on where the index is nearest to.

**Get steps**

1. Create a method with the index desired as the parameter.
1. If the index is less than 0 or greater than or equal to the length of the list, return null or undefined.
1. If the index is equal to zero, return the head and if the index is equal to length - 1, return the tail.
1. Otherwise, if the index is less than half or equal to the length of the list:
   - Loop through the list starting from the beginning and loop towards the middle.
   - Return the node once it is found.
1. If the index is greater than half of the list:
   - Loop through the list starting from the the tail towards the middle taking advantage of the previous pointer.
     -Return the node once it is found.

Below is the implementation of this method:

```js
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
```

## **_Set_**

Replacing the value of a node in a doubly linked list.

**Set steps**

1. Create a method that takes in an index and a value for updating.
2. Create a variable which is a result of the **get** method at the index passed to the function.
3. If get returns a valid node, set the value of the node to be the value passed into the function.
4. Return true.
5. Otherwise, return false.

Below is the implementation of the set method

```js
  set(index, val) {
    /*this method replaces the value of a node in the list and returns true if successfull or false if not*/
    let foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
}
```

## **_Insert_**

Adding a node in a doubly linked list by a certain position.

**Insert steps**

1. Create a method that has the index to insert and the value as parameters.
2. If the index is less than 0 or the index is greater than the length - 1, return false.
3. If the index is 0, unshift.
4. If the index is the same as length - 1, push.
5. Otherwise, use the get method to access index - 1.
6. Change the next and previous properties on the correct nodes to link everything together.
7. Increment the length.
8. Return true.

Below is the implementation of the insert method:

```js
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
```

## **_Remove_**

Remove a node in a doubly linked list by it's position.

**Remove steps**

1. Create a method that takes in an index corresponding to the node that should be removed.
2. If the index is 0, then shift.
3. If the index is equal to length - 1, pop.
4. Otherwise, use the get method to retrieve the item to be removed.
5. Update the next and the previous properties to remove the found node from the list.
6. Set the next and previous on the removed item to be null.
7. Decrement the length.
8. Return the removed item.

Below is the remove method:

```js
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
```

## **_Big O of Doubly Linked List_**

Insertion is O(1).

Removal is O(1).

Searching is O(N).

Access is O(N)

Technically, searching is O(N/2) but that is still O(N)

- Doubly linked list is almost similar to singly linked list except that there is an additional pointer for previous nodes making it faster and efficient in certain operations.
- Doubly Linked List is better than Singly Linked List for finding nodes and can be done in half the time.
- Doubly Linked however take up extra memeory considering the extra pointer.
