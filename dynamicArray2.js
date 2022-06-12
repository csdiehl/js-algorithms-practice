class DynamicArray {

  constructor(defaultSize=4) {
    // Your code here
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(defaultSize)
  }

  read(index) {
    // Your code here
    return this.data[index]
  }

  push(val) {
    // Your code here
    if (this.data[this.length] === undefined) {
      this.resize()
    }

    this.data[this.length] = val
    this.length += 1
  }


  pop() {
    // Your code here
    let value = this.data[this.length - 1]
    this.data[this.length - 1] = undefined
    this.length -= 1

    return value
  
  }

  shift() {
    // Your code here
    let val = this.data[0]

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }

    this.length -= 1
    return val

  }

  unshift(val) {

    // Your code here
    if (this.data[this.length] === undefined) {
      this.resize()
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }

    this.data[0] = val
    this.length += 1

  }

  indexOf (val) {
    // Your code here
    let i = 0

    while (this.data[i] !== val) {
      i++
    }

    return i
  }

  resize () {

    // Your code here
    this.capacity = this.length * 2
    let newArray = new Array(this.capacity)

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i]
    }

    this.data = newArray

  }

}

module.exports = DynamicArray
