class Shape {
  calculateArea() {
    // Default implementation
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(3, 4)];

shapes.forEach(shape => {
  console.log(shape.calculateArea());
});
