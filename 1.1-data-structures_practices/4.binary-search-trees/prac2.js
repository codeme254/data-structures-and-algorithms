/*implementation of a binary search tree*/

/*the node class*/
class Node{
	constructor(value){
		this.value = value;
		this.right = null;
		this.left = null;
		this.frequency = 1;
	}
}

class BST{
	constructor(){
		this.root = null;
	}
	
	insert(value){
		/*this method creates a node and inserts it in the correct spot*/
		let newNode = new Node(value);
		/*if there is no root, the current node becomes the root*/
		if(!this.root) {
			this.root = newNode;
			return this;
		}
		/*traverse the tree until you add this node to the correct spot*/
		let current = this.root, keepTraversing = true;
		while(keepTraversing){
			/*if the value of the new node is greater than the current node, move to the right*/
			if(newNode.value > current.value){
				/*if there is no node to the right, make the right of the current node to be the new node*/
				if(!current.right){
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
			else if(newNode.value === current.value){
				current.frequency++;
				return this;
			}
			/*if the value of the new node is less than the current node, move to the left*/
			else{
				/*if there is no node to the left, make the left of the current node to be the new node*/
				if(!current.left){
					current.left = newNode;
					return this;
				}
				current = current.left;
			}
		}
	}
	find(value){
		/*this method should returns a node based on the value passed*/
		/*if there is no root, then there is no tree*/
		if(!this.root) return false;

		/*Otherwise, traverse the tree until you find the node*/
		let current = this.root, keepTraversing = true;
		while(keepTraversing){
			/*if the value is equal to current.value, return current*/
			if(value === current.value) return current;
			/*if the value is greater than current.value, go right*/
			else if(value > current.value){
				/*if there is no node to the right, return false*/
				if(!current.right) return false;
				/*if there is value to the right, current becomes this right value*/
				current = current.right;
			}
			/*if the value is less than current.value, go left*/
			else{
				/*if there is no node to the left, return false*/
				if(!current.left) return false;
				/*if there is value to the left, current becomes this left value*/
				current = current.left;
			}
		}
	}
	
	bfs(){
		/*this is a breadth first search traversal on the tree*/
		/*visit every node on the same level before visiting the child*/
		/*implemented using a queue*/

		/*check for no tree*/
		if(!this.root) return undefined;
		/*create this queue and an array to store the nodes visited, the queue can also be an array*/
		let queue = [], visited = [];
		/*place the root node in the queue*/
		queue.push(this.root);
		/*loop for as long as there is anything in the queue*/
		while(queue.length !== 0){
			/*remove the first element of the queue(dequeue) and push its value to the nodes visited*/
			let dequeued = queue.shift();
			visited.push(dequeued.value);
			/*if there is a left property on the dequeued, add it to the queue*/
			if(dequeued.left) queue.push(dequeued.left);
			/*if there is a right property on the dequeued, add it to the queue*/
			if(dequeued.right) queue.push(dequeued.right);
		}
		/*return the array of values visited*/
		console.log(visited);
		return visited;
	}
	
	DFS_preorder(){
		/*this is a depth first search preorder traversal on the tree*/
		/*Traverse the entire left node then the entire right node*/

		/*no root, no tree, no tree, no traversal*/
		if(!this.root) return undefined;

		/*Create a variable to store the values of the nodes visited*/
		let visited = [];
		/*store the root of the bst in a variable called current*/
		let current = this.root;

		/*A helper function to help in traversal, this function accepts a node*/
		const traverseHelper = node => {
			/*Push the value of the node to the variable that stores the value of the nodes visited*/
			visited.push(node.value);
			/*If the node has a left property, call the helper function with the left property on the node*/
			if(node.left) traverseHelper(node.left);
			/*If the node has a right property, call the helper function with the right property on the node*/
			if(node.right) traverseHelper(node.right);
		}
		/*Invoke the helper function with the current variable or rather the root*/
		traverseHelper(this.root);
		console.log(visited);
		return visited;
	}
	DFS_postorder(){
		/*this is a depth first search postorder traversal on the tree*/
		/*Visit all the children of a node then the node itself*/

		/*No root, no tree, no tree, no traversal*/
		if(!this.root) return undefined;

		/*Store the root of the tree in a current variable*/
		let current = this.root, visited = [];

		/*A helper function to help in traversal, this function accepts a node*/
		const traverseHelper = node => {
			/*If the node has a left property, call the helper function with the left property on the node*/
			if(node.left) traverseHelper(node.left);
			/*If the node has a right property, call the helper function with the right property on the node*/
			if(node.right) traverseHelper(node.right);
			/*push the value of the node to the variable that stores the values of the nodes visited*/
			visited.push(node.value);
		}
		/*Invoke the helper function with the root*/
		traverseHelper(this.root);
		console.log(visited);
		return visited;
	}

	DFS_inorder(){
		/*this is a depth first search inorder traversal on the tree*/
		/*visit the left node, then the node itself and then the right node*/
		/*correct inorder traversal of a binary search tree produces the nodes in a sorted order*/

		/*no root, no tree, no tree, no traversal*/
		if(!this.root) return undefined;

		/*create a variable to store the value of the nodes visited*/
		let visited = [];

		/*a helper function to help in traversal of the nodes, the function accepts a node*/
		const traverseHelper = node => {
			/*If the node has a left property, call the helper function with the left property on the node*/
			if(node.left) traverseHelper(node.left);
			/*push the value of the node into the variable that stores the values of the nodes visited*/
			visited.push(node.value);
			/*if the node has a right property, call the helper function with the right property on the node*/
			if(node.right) traverseHelper(node.right);
		}
		/*invoke this helper function with the root*/
		traverseHelper(this.root);
		console.log(visited);
		return visited;
	}

}
let bst = new BST();
bst.insert(23);
bst.insert(23);
bst.insert(25);
bst.insert(12);
bst.insert(30);
bst.insert(24);
bst.insert(11);
bst.insert(22);
bst.insert(52);
bst.insert(25);
bst.insert(12);
console.log(bst);
console.log(bst.find(900));
console.log(bst.find(30));
console.log(bst.find(25));
console.log(bst.find(12));
bst.bfs();
bst.DFS_preorder();
bst.DFS_postorder();
bst.DFS_inorder();
