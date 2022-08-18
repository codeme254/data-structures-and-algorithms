# Stack and Queues

## Implemented with JavaScript

# STACKS

---

A stack is a LIFO data structure (Last In First Out)

The last element added to the stack will be the first element to be removed from the stack.

**Where stacks are used**

- Managing function invocations.
- Undo and Redo functionalities.
- Routing, the history object is treated like a stack.
- Other algorithms like trees.

## **Implementation of stacks**

Stack only cares about two methods, Push and pop where push adds to the top of the stack and pop removes from the top of the stack.

## _**The node class**_

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

## _**The stack class**_

```js
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
```

## _**Push**_

Pushing refers to adding an element at the top of the stack

**Pushing steps**

1. Create a method that accepts a value.
2. Create a new node with this value.
3. If there are no nodes in the stack, set the first and the last property to be the newly created node.
4. If there is at least one node, create a variable that stores the current first property in the stack.
5. Reset the first property to be the newly created node.
6. Set the next property on the node to be the previously created value.
7. Increment the size of the stack by 1, you can return the size of the stack.

```js
push(val) {
    /*adds a new element to the top of the stack and returns the size*/
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
}
```

## _**pop**_

Popping is removing a node from the top of the stack.

**pop steps**

1. If there are no nodes, return null.
2. If there are, create a temporary variable to store the first property on the stack.
3. If there is only one node, set the head and the tail to be null and decrement the length by 1.
4. If there is more than one node,set the first property to be the next property on the current first.
5. Decrease the size by 1.
6. Return the value of the removed node.

```js
pop() {
    /*removes a node at the top and returns the value of the removed node*/
    if (!this.first) return null;
    let temp = this.first;

    if (this.first === this.first) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
}
```

## Big O of stacks

- Insertion O(1).
- Removal O(1).
- Searching O(N)
- Access O(N)

---

---

# QUEUES

It follows First In First Out principle (FIFO).

## _**The queue class**_

```js
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
```

## _**The node class**_

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

**Where queues are used**

- Background tasks in a computer
- Uploading resources.
- Printing processes.

There are two primary operations in queues: enqueue and dequeue

## _**Enqueue**_

Adding a node to the end of a queue

**Enqueue pseudocode**

1. Create a method that accepts a value.
2. Create a new node using the value passed into the function.
3. If there are no nodes in the queue, set the last and the first property of the queue to be the new node.
4. Otherwise, set the next property on the current last to be that node and then explicitlly set the last property of the queue to be that node.
5. Increment the size by 1 and return the size.

```js
enqueue(val) {
    /*adds a node to the end of the queue*/
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
}
```

## _**Dequeue**_

Removing a node at the beginning of a queue.

**Dequeu steps**

1. If there is no first property, return null.
2. Store the first property in a variable.
3. If ther is only one node, set the start and the last to be null.
4. If there is more than one node, set the first property to be the next property of the current first.
5. Decrement the size by 1.
6. Return the value of the dequeued node.

```js
equeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
}
```

## Big O of queues

- Insertion - O(1).
- Removal - O(1).
- Searching - O(N).
- Access - O(N)
