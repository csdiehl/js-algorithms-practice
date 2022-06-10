class DynamicArray {
  constructor(defaultSize = 4) {
    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  unshift(val) {
    // Your code here
    
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    
    console.log("before adding val", this.data)

    this.data[0] = val;
    this.length += 1;
    
    
  }
}

let dynamicArr = new DynamicArray(8)

console.log(dynamicArr)
dynamicArr.unshift(1)
console.log(dynamicArr)
dynamicArr.unshift(2)
console.log(dynamicArr)
dynamicArr.unshift(3)
console.log(dynamicArr)
