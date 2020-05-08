log('QUEUE (FIFO');

const MyQueue = class {
  construction() {
    this.data = [];
  }

  enqueue(item) {

  }

  dequeue(item) {

  }

  front() {

  }

  size() {

  }

  isEmpty() {
    
  }

  print() {

  }
}

const queue = new MyQueue();
queue.enqueue('a'); // ['a']
queue.print();
queue.enqueue('b'); // ['a', 'b']
queue.print();
queue.enqueue('c'); // ['a', 'b', 'c']
queue.print();
queue.dequeue(); // ['b', 'c']
queue.print();
queue.front() // b
queue.print();
queue.isEmpty() // false;
queue.print();
