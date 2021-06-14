function Calculator(num) {
  this.result = num;
  this.sum = (value) => this.result += value;
  this.sub = (value) => this.result -= value;
  this.mult = (value) => this.result *= value;
  this.div = (value) => this.result /= value;
}

let calc = new Calculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));

