class Stack {
    constructor() {
      this.stack = [];
    }
  
    // Push an element onto the stack
    push(element) {
      this.stack.push(element);
    }
  
    // Pop an element from the stack
    pop() {
      return this.stack.pop();
    }
  
    // Peek at the top element of the stack
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  // Example usage:
  const myStack = new Stack();
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  
  console.log(myStack.pop());   // 30
  console.log(myStack.peek());  // 20
  console.log(myStack.isEmpty()); // false
  