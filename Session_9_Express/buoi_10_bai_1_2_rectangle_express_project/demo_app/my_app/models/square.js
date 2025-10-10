class Square {
    constructor(sideLength) {
        this.sideLength = sideLength
    }

    getPerimeter() {
        return 4 * this.sideLength
    }

    getArea() {
        return 2 * this.sideLength
    }
}

module.exports = Square