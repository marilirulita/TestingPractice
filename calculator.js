class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
 
  add () {
    const answ = this.a + this.b;
    return answ;
  }
  
  substract () {
    return this.a - this.b;
  }

  divide () {
    return this.a / this.b;
  }

  multiply () {
    return this.a * this.b;
  }
}

// const number = new Calculator(6, 3);
// const added = number.add();
// console.log(added);

module.exports = Calculator;