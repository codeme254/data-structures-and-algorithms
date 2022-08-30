/*Implementation of a stack data structure*/

/*The node class*/
class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class Stack{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val){
		/*This method adds a new node to the top of the stack*/
		/*@val : the value of the new node being added to the stack*/
		let newNode = new Node(val);

		/*If there are no nodes in the stack, make this the first and the last node*/
		if(!this.first || this.size === 0){
			this.first = newNode;
			this.last = newNode;
		}else{
			/*If you are in the else block, then there is at least one node in the stack already*/
			/*Create a variable that stores the current first node*/
			let currentFirst = this.first;
			/*make the new node to point to the current first node as it's next*/
			newNode.next = currentFirst;
			/*Reset the first property to be the new node*/
			this.first = newNode;
		}
		/*Increment the size of the stack and return the stack*/
		++this.size;
		return this;
	}

	pop(){
		/*This method removes a node from the stack,  removal happens on the top of the stack*/
		/*It then returns the removed node*/

		/*If there are no nodes in the stack, return undefined*/
		if(!this.first || this.size === 0) return undefined;

		/*If there is only one node, set the first and the last property to be null*/
		if(this.size === 1){
			let tmp = this.first;
			this.first = null;
			this.last = null;
			--this.size;
			return tmp;
		}

		/*Store the current first in a variable*/
		let currentFirst = this.first;
		/*Get access to the next node of the current first*/
		let tmp = currentFirst.next;
		/*Make the current first variable has a next property of null*/
		currentFirst.next = null;
		/*Explicitly set the next property we had saved to be the first*/
		this.first = tmp;
		/*Decrease the size of the stack by 1*/
		--this.size;
		return currentFirst;
	}
}

const stack = new Stack();
stack.push(20);
stack.push(24);
stack.push(28);
/*stack.pop();
stack.pop();
stack.pop();*/
console.log(stack);
