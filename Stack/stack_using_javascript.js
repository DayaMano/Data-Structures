class Stack {
  // creates the list
  constructor() {
    this.items = [];
  }

  // adds element to the top of the list
  push(element) {
    this.items.push(element);
  }

  // returns the top of the list element and remove it from the list
  // undefined if list is emply
  pop() {
    if (this.items.length === 0) return undefined;

    return this.items.pop();
  }

  // returns top elements of the list
  peek() {
    return this.items[this.items.length - 1];
  }

  // return true if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // prints the stack
  printStack() {
    let stackEle = "";
    for (let i = 0; i < this.items.length; i++) {
      stackEle += this.items[i] + " ";
    }

    return stackEle;
  }
}

// Begin
//    for each character ch in the postfix expression, do
//       if ch is an operator ⨀ , then
//          a := pop first element from stack
//          b := pop second element from the stack
//          res := b ⨀ a
//          push res into the stack
//       else if ch is an operand, then
//          add ch into the stack
//    done
//    return element of stack top
// End

const postFixEvaluation = (exp) => {
  const s = new Stack();
  for (let i = 0; i < exp.length; i++) {
    const c = exp[i];
    if (!isNaN(c)) s.push(c - "0");
    else {
      const v1 = s.pop();
      const v2 = s.pop();

      if (v1 === undefined || v2 === undefined) {
        return `Can't perform postfix evalution`;
      }

      switch (c) {
        case "+":
          s.push(v2 + v1);
          break;

        case "-":
          s.push(v2 - v1);
          break;

        case "/":
          s.push(v2 / v1);
          break;

        case "*":
          s.push(v2 * v1);
          break;
      }
    }
  }

  return s.pop();
};

// Step 1: Start from the last element of the expression.

// Step 2: check the current element.

// Step 2.1: if it is an operand, push it to the stack.
// Step 2.2: If it is an operator, pop two operands from the stack. Perform the operation and push the elements back to the stack.

// Step 3: Do this till all the elements of the expression are traversed and return the top of stack which will be the result of the operation.

const preFixFunction = (exp) => {
  const s = new Stack();
  for (let i = exp.length - 1; i >= 0; i--) {
    const c = exp[i];
    if (!isNaN(c)) {
      s.push(c - "0");
    } else {
      const v1 = s.pop();
      const v2 = s.pop();

      if (v1 === undefined || v2 === undefined) {
        return `Can't perform prefix evalution`;
      }

      switch (c) {
        case "+":
          s.push(v1 + v2);
          break;

        case "-":
          s.push(v1 - v2);
          break;

        case "*":
          s.push(v1 * v2);
          break;

        case "/":
          s.push(v1 / v2);
          break;
      }
    }
  }
  return s.pop();
};

console.log(postFixEvaluation("53+62/*35*+")); // OUTPUT => 39
console.log(preFixFunction("*+69-31")); // OUTPUT => 30
