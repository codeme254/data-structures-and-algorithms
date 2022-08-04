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
    /*this method performs a breadth first search on our tree*/
    /*if there are no nodes in the tree, return null or undefined*/
    if (!this.root) return undefined;

    /*create a queue and a variable to store visited nodes*/
    let queue = [],
      visitedNodes = [],
      activeNode;
    /*add the root node to the queue*/
    queue.push(this.root);
    /*loop as long as there is anything in the queue*/
    while (queue.length !== 0) {
      /*dequeue a node from the queue and push the value into the variable that stores the visited nodes*/
      activeNode = queue.shift();
      visitedNodes.push(activeNode.value);
      /*if there is a left property ont the node, add it to the queue*/
      if (activeNode.left) {
        queue.push(activeNode.left);
      }
      /*if there is a right property on the the node, add it to the queue*/
      if (activeNode.right) {
        queue.push(activeNode.right);
      }
    }
    /*return the visited nodes*/
    console.log(visitedNodes);
    return visitedNodes;
  }

  dfs_preorder() {
    /*this method does a preorder traversal on the tree*/
    /*if the tree is empty, return null undefined*/
    if (!this.root) return undefined;

    /*create a variable to store the nodes visited and another one to keep track of the current node with the root as the default*/
    let visitedNodes = [],
      current = this.root;

    /*helper function that accepts a node*/
    const traverseHelper = (node) => {
      /*push the value of the node passed into the variable that stores the values of the visited nodes*/
      visitedNodes.push(node.value);
      /*if the node has a left property, call this function recursively with the left property on the node*/
      if (node.left) traverseHelper(node.left);
      /*if the node has a right property, call the helper function with the right property on the node*/
      if (node.right) traverseHelper(node.right);
      return;
    };

    /*invoke the helper function with the current node*/
    traverseHelper(current);
    /*return the array of values visited*/
    console.log(visitedNodes);
    return visitedNodes;
  }

  dfs_postorder() {
    console.log("==postorder traversal==");
    /*this method does a postorder traversal on the tree*/
    /*if the tree is empty, return null or undefined*/
    if (!this.root) return undefined;

    /*create a variable to store the value of the nodes visited*/
    let visitedNodes = [];
    /*helper function that accepts a node*/
    const traverseHelper = (node) => {
      /*if the node has a left property, recursively call this helper function with the left property of the node*/
      if (node.left) traverseHelper(node.left);
      /*same thing to the right*/
      if (node.right) traverseHelper(node.right);
      /*if it has neither the right nor the left property, add the value of the node to the visited nodes*/
      visitedNodes.push(node.value);
    };
    /*invoke this helper function with the root and return the visited nodes*/
    traverseHelper(this.root);
    console.log(visitedNodes);
    return visitedNodes;
  }

  dfs_inorder() {
    /*this method does an inorder traversal on the tree*/
    /*if the tree is empty, return null or undefined*/
    if (!this.root) return undefined;

    /*create variables to store the nodes visited and also the root*/
    let visitedNodes = [],
      current = this.root;

    /*helper fuction for traversal*/
    const traverseHelper = (node) => {
      /*if the node has a left property, call the helper method with the left property of the node*/
      if (node.left) traverseHelper(node.left);
      /*if the active node has no left property, then traverse it*/
      visitedNodes.push(node.value);
      /*if the node has a right  property, call the helper function with the right property*/
      if (node.right) traverseHelper(node.right);
    };
    traverseHelper(current);
    console.log(visitedNodes);
    return visitedNodes;
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
bst.dfs_preorder();
bst.dfs_postorder();
bst.dfs_inorder();

console.log(bst);
