class MinStack {
  constructor() {
    this.stack = [];
    this.minS = [];
  }

  push(val) {
    this.stack.push(val);
    val = Math.min(
      val,
      this.minS.length === 0 ? val : this.minS[this.minS.length - 1]
    );
    this.minS.push(val);
  }

  pop(val) {
    this.stack.pop();
    this.minS.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minS[this.minS.length - 1];
  }
}

//need to keep track of the minimum value in the stack
//

const stacking = new MinStack();

console.log(stacking.push(3));
console.log(stacking.push(2));
console.log(stacking.push(3));
console.log(stacking.push(1));
console.log(stacking.pop());
console.log(stacking.minS);
