class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray.length
        this.sidesArray = sidesArray
    }

    get countSides() {
        return this.sides 
    }

    get perimeter() {
        return this.sidesArray.reduce((memo, val) => memo + val, 0)
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sidesArray)) return;
        if (this.sidesArray.length !== 3) return;
        let side1 = this.sidesArray[0]
        let side2 = this.sidesArray[1]
        let side3 = this.sidesArray[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
      }
}

class Square extends Polygon {
    get area() {
        return this.sidesArray[0] * this.sidesArray[1]
    }

    get isValid() {
        if (!Array.isArray(this.sidesArray)) return;
        if (this.sidesArray.length !== 4) return;
        let side1 = this.sidesArray[0]
        let side2 = this.sidesArray[1]
        let side3 = this.sidesArray[2]
        let side4 = this.sidesArray[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

}

// let ply = new Polygon([5,5,5])
// ply.countSides