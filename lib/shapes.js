class Shape {
    constructor() {

    }
    render() {

    }

}

class Triangle extends Shape {
    render(text, textColour, shapeColour) {
        return `
        <svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <polygon points='150,10 20,180 280,180' fill='${shapeColour}' />
        <text x='150' y='130' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text>
        </svg>
        `
    }
}

class Circle extends Shape {
    render(text, textColour, shapeColour) {
        return `
        <svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='150' cy='100' r='90' fill='${shapeColour}'/>
        <text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text>
        </svg>
        `
    }
}

class Square extends Shape {
    render(text, textColour, shapeColour) {
        return `
        <svg width='300' height='200' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <rect width='150' height='150' x='75' y='25' fill='${shapeColour}'/>
        <text x='150' y='110' font-size='50' font-weight='bold' text-anchor='middle' fill='${textColour}'>${text}</text>
        </svg>
        `
    }
}

module.exports = { Triangle, Circle, Square };