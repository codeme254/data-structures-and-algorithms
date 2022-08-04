/*max Binary heap implementation*/
/*in a max binary heap, the left child is at 2n + 1*/
/*the right child is at 2n + 2*/
/*for any child at index n, the parent node is stored at (n-1)/2*/

class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class MaxBinaryHeap{
	constructor(){
		this.values = [];
	}

	insert(value){
		let newNode = new Node(value);
		/*push this new node to the values array*/
		this.values.push(newNode);
		/*bubble up the value to the correct spot*/

		/*create a variable called index which is the length of the values property - 1*/
		let index = this.values.length - 1;
		/*create a variable called parentIdx which is floor of (index - 1)/2*/
		let parentIdx = Math.floor((index - 1)/2);

		const swap = (arr, idx1, idx2) => {
			let tmp = arr[idx1];
			arr[idx1] = arr[idx2];
			arr[idx2] = tmp;
		}

		/*keep looping for as long as the value element at the parent index is less than the values element at the child index*/
		while(this.values[parentIdx].value < this.values[idx].value){
			/*swap what is in the parent element with what is in the child idx*/
			swap(this.values, index, parentIdx);
			/*set the index to be the parent index*/
			index = parentIdx;
		}
	}
		

}

let mbh = new MaxBinaryHeap();
mbh.insert(12);
console.log(mbh);



















