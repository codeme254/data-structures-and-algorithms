/*implementation of a maximum binary heap*/

class MaxBinaryHeap{
	constructor(){
		this.values = [];
	}

	insert(element){
		this.values.push(element);
		this.bubbleUp();
		return this.values;
	}
	bubbleUp(){
		/*puts the last element of the values array in the correct spot*/
		let idx = this.values.length - 1;
		const element = this.values[idx];

		while(idx > 0){
			let parentIdx = Math.floor((idx - 1)/2);
			let parent = this.values[parentIdx];
			if(element <= parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(18);
heap.insert(199);
heap.insert(60);
console.log(heap);

