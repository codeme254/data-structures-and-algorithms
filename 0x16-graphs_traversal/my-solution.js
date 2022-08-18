/*Implementation of an undirected graph*/

class Graph{
	constructor(){
		this.adjacencyList = {};
	}

	addVertex(name){
		if(!this.adjacencyList[name])
			this.adjacencyList[`${name}`] = [];
		console.log(this.adjacencyList);
	}
	
	addRelationship(vtx1, vtx2){
		this.adjacencyList[vtx1].push(vtx2);
		this.adjacencyList[vtx2].push(vtx1);
		console.log(this.adjacencyList);
	}
}

const g = new Graph();

g.addVertex("tokyo");
g.addVertex("tokyo");
g.addVertex("Nairobi");
g.addRelationship("Nairobi", "Nakuru");

