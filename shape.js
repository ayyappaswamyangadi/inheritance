class Shape {
  color = "red";

  constructor(side) {
    this.side = side;
  }
  drawShape() {
    return "Newton School";
  }

  calculateArea() {
    return this.side * this.side;
  }
}
const area = new Shape(2);
console.log(area.calculateArea());

module.exports = Shape;
