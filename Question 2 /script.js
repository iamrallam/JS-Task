class Polygon {
  calculateArea() {
    //please override me 
  }
}

class Circle extends Polygon {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Polygon {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super();
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }
}

class Triangle extends Polygon {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    return (this.side1 + this.side2 + this.side3) / 2;
  }
}
// Circle class
const circleArea = new Circle(10);
console.log(`Circle Area: ${circleArea.calculateArea()}`);

// Rectangle class
const rectangleArea = new Rectangle(2, 5);
console.log(`Rectangle Area: ${rectangleArea.calculateArea()}`);
// Square class
const squareArea = new Square(6);
console.log(`Square Area: ${squareArea.calculateArea()}`);
// Triangle class
const triangleArea = new Triangle(3, 4, 5);
console.log(`Triangle Area: ${triangleArea.calculateArea()}`);
