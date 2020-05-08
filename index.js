const MyStack = class {
  constructor() {
    this.data = {};
    this.index = 0;
  }

  push(item) {
    this.data[this.index] = item;
    this.index++;
  }

  pop() {
    delete this.data[this.index - 1];
    this.index --;
  }

  peek() {
    return this.data[this.index - 1]
  }

  size() {
    return this.index;
  }

  print() {
    console.log(this.data);
  }
}


const stack = MyStack();

stack.push('a'); // { 0 : 'a' }
stack.print(); 
// stack.push('b'); // { 0: 'a', 1: 'b' }
// stack.pop(); // { 0 : 'a' }
// stack.peek(); // 'a'