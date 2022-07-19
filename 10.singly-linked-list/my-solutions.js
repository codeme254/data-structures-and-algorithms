// my own solutions to the challenges
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        // adds elements to the end of the linked list
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; //returning the whole list
    }

    pop(){
        // removes element at the end of the linked list

        // if there are no nodes, we return undefined
        if(!this.head || this.length === 0){
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        // while there is something
        while(current.next){
            newTail = current;
            current =current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        //removes a value at the beginning of a list
        if(!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        // adds a value to the beginning of a linked list
        let newValue = new Node(val);
        if(!this.head){
            this.head = newValue;
            this.tail = newValue;
        }else{
            newValue.next = this.head;
            this.head = newValue;
        }
        this.length++;
        return this;
    }

    get(idx){
        //returns a value at a given index
        if(idx < 0 || idx >= this.length) return null;

        let current = this.head;
        for(let i = 0; i < idx; i++){
            current = current.next;
        }
        console.log(current.val);
        return current;
    }

    set(idx, newValue){
        // changes the value of a node at given index
        let node = this.get(idx);
        if(!node) return false;

        node.val = newValue;
        return true;
    }
}

const list = new SinglyLinkedList();
// list.push("hello");
list.push("there");
list.push("how");
list.push("are");
list.push("you");
list.push("today");
list.push("!");

// list.pop();
// list.shift();
list.unshift("Excuse")
// list.get(4);
list.set(1, "me");
console.log(list)