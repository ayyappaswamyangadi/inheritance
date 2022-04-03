const Shape = require("./shape");

class Circle extends Shape {
  constructor(side) {
    super(side);
    this.side = side;
  }
  calculateArea() {
    return this.side * this.side;
  }
}

const area1 = new Circle(4);
console.log(area1.calculateArea());
