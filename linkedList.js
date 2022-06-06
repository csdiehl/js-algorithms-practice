//define a new class for linked list, with methods to get the first and last element of the list, clear out all elements, and get the length of the list
class linkedList {
  constructor(head = null) {
    this.head = head
  }
  
  size() {
    let count = 0
    let node = this.head
    
    while(node) {
      count++
      node = node.next
    }
    return count
  }
  
  clear() {
    this.head = null
  }
  
  getLast() {
    let lastNode = this.head;
    
    if (lastNode) {
      while(lastNode.next) {
      lastNode = lastNode.next
     }
    }
    
    return lastNode
    
  }
  
  getFirst() {
    return this.head
  }
}

//define a class for each node in the list
class listNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

//create the nodes and link them together
let node1 = new listNode(1)
let node2 = new listNode(7)
node1.next = node2

let list = new linkedList(node1)
