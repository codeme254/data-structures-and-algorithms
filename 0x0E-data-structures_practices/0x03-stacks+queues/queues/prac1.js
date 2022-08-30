/*Implementation of a queue data structure*/

/*The node class*/
class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class Queue{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val){
		/*This method adds a node to the end of the queue*/
		let newNode = new Node(val);
		/*If there are no nodes in the queue, set this node to be the first and the last node in the queue*/
		if(!this.first || this.size === 0){
			this.first = newNode;
			this.last = newNode;
		}else{
			/*Set the next property on the current last to be this new node*/
			this.last.next = newNode;
			/*Set the last property of the queue to be this new node*/
			this.last = newNode;
		}
		/*Increment the size by 1 and return the queue*/
		++this.size;
		return this;
	}

	dequeue(){
		/*This method removes a node at the beginning of the queue*/
		/*If there are no nodes, return undefined*/
		if(!this.first || this.size === 0) return undefined;
		/*Otherwise, store the first property in a variable*/
		let currentFirst = this.first;
		/*If there is only one node in the queue, set the first and the last to be null and return the first*/
		if(this.size === 1){
			this.first = null;
			this.last = null;
			--this.size;
			return currentFirst;
		}
		/*Set the first property to  be the next of the current first*/
		this.first = currentFirst.next;
		currentFirst.next = null;
		--this.size;
		return currentFirst;
	}
}

const q = new Queue();
q.enqueue(10);
q.enqueue(12);
q.enqueue(13);
/*q.dequeue();
q.dequeue();
q.dequeue();*/
console.log(q);
