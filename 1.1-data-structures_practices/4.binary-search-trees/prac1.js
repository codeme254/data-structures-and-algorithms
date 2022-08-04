/*implementation of a binary search tree with javascript : zaphdev*/

/*a binary search tree is a data structure with nodes like a tree relationship*/
/*each node has a maximum of 2 descendants and a minimum of 0*/
/*each descendant to the right of a node is greater than it and each descendant to the left is less than it*/
/*the top most node with no parent is called the root*/
/*the very last nodes with no children are called leaves*/

/*the node class*/

class Node{
	constructor(value){
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BST{
	constructor(){
		this.root = null;
	}

	insert(value){
		/*inserts a node to the correct spot in a tree and returns the updated tree*/
		/*create the new node*/
		let newNode = new Node(value);

		/*if there are no nodes, make this node the root*/
		if(!this.root){
			this.root = newNode;
			return this;
		}

		/*this is where we find the correct spot to insert the new node*/
		/*keep looping as long as there are elements to the left or the right of the current node*/
		/*in each loop, if the value of this new node is greater than the value of the current node, move to the right*/
		/*if the value is less than the value of the current node, move to the left*/
		/*if there is no node to the right or left of the current node, insert appropriately*/

		/*this algorithm will ignore duplicates*/
		let current = this.root;
		while(true){
			if(value === current.value){
				return this;
			}
			/*if the value of this new node is greater than the value of the current node and there is a node to the right of the current node, update the current node to be that node to the right*/
			else if(value > current.value && current.right){
				current = current.right;
			}
			/*if the value of this new node is less than the value of the current node and thre is a node to the left of the current node, update the current node to be that node to the left*/
			else if(value < current.value && current.left){
				current = current.left;
			}
			/*if the value of this new node is greater than the value of the current node and there is no node to the right, make the right property of this current node to be that new node, you can kill the loop or return at this point*/
			else if(value > current.value && !current.right){
				current.right = newNode;
				return this;
			}
			/*if the value of this new node is less than the value of the current node and there is no node to the left, make the left property of this current node to be that new node, you can kill the loop or return at this point*/
			else if(value < current.value && !current.left){
				current.left = newNode;
				return this;
			}
		}
	}

	find(value){
		/*this method returns true or false depending on whether the passed value is in our tree or not*/
		
		/*if the tree has no node, return false*/
		if(!this.root) return false;
		/*make root the current node*/
		/*if the value we want is eqaual to the value with the current node, then we are done*/
		/*if not, check whether the value is greater than the value with the current node,*/
		/*if so, change the current to be the node to the right of this current node*/
		/*if not, change the current to be the node to the left of this current node*/
		/*check of the value of the current node is what we are lookin for*/
		/*repeat the steps above until you find the value, if you find, return true*/
		/*if you finish traversing all the nodes with no success, return false*/
		/*note, we keep looping as long as there is a node to the right or left*/
		let shouldKeepLooking = true;
		let current = this.root;
		while(shouldKeepLooking){
			if(current.value === value){
				console.log(`${value} has been found in the tree`);
				return true;
			}else if(value > current.value && current.right){
				/*the value is greater and there is a node to the right, so go right*/
				current = current.right;
			}else if(value < current.value && current.left){
				/*the value is less and there is a node to the left, so go left*/
				current = current.left;
			}else if(value > current.value && !current.right){
				/*yes the value is greater but there is no node to the right, return false and stop lookin*/
				shouldKeepLooking = false;
				return false;
			}else if(value < current.value && !current.left){
				/*yes the value is less but there is no node to the left, return false and stop looking*/
				shouldKeepLooking = false;
				return false;
			}
		}
	}

}

let bst = new BST();
bst.insert(34);
bst.insert(36);
bst.insert(33);
bst.insert(37);
bst.insert(32);
bst.insert(34);
bst.insert(33.5);
bst.insert(35);

console.log(bst.find(37));
console.log(bst.find(100));
console.log(bst.find(0));
bst.find(36);
bst.find(37);

console.log(bst);

