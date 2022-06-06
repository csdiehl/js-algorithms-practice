
const data = [1,7,10,5,4]

//define class for linked list with static method for creating a linked list from an array of data
class linkedList {
  constructor(head = null) {
    this.head = head
  }
  
  static createList(data) {
  
  const nodes = []
  
  for (let i in data) {
    nodes[i] = new listNode(data[i])
  }
  
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i+1]
    nodes[i].previous = nodes[i-1]
  }
  
  return new linkedList(nodes[0])
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

class listNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
  }
}

const newList = linkedList.createList(data)

//first value in doubly linked list
console.log(newList.head.next.previous.data)
