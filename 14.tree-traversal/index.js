/*implementation of a binary search tree*/

/*the node class*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*the BST class*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    /*is there a root, if no, make this element the root*/
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    /*update current as we go*/
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        /*go somewhere to the left*/
        /*is there anything or nothing in the left*/
        if (current.left === null) {
          /*nothing to the left*/
          /*insert here*/
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  bfs() {
    /*does a breadth first traversal on the tree*/
    let data = [],
      queue = [],
      node = this.root;

    /*place the root node in the queue*/
    queue.push(node);

    /*loop as long as there is anything in the queue*/

    while (queue.length) {
      /*remove something from the beginning of the queue*/
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    console.log(data);
    return data;
  }
  DFSPreorder() {
    let data = [],
      current = this.root;

    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    console.log(data);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(this.root);
    console.log(data);
    return data;
  }

  DFSInOrder() {
    /*this method does an inorder traversal on the tree*/
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    console.log(data);
    return data;
  }
}

let bst = new BinarySearchTree();
bst.insert(23);
bst.insert(12);
bst.insert(11);
bst.insert(25);
bst.insert(30);
bst.insert(24);
bst.insert(50);
bst.insert(22);

console.log(bst.find(30));
bst.bfs();
bst.DFSPreorder();
bst.DFSPostOrder();
bst.DFSInOrder();

console.log(bst);
