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

console.log(bst);
