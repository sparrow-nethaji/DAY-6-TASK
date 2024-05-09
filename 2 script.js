class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle1 = new Circle(5);
console.log("Radius:", circle1.radius);
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());
