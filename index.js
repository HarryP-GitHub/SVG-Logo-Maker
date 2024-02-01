const inquirer = require('inquirer');
const fs = require('fs').promises;
const path = require('path');
const Triangle = require('./lib/shapes');
const Circle = require('./lib/shapes');
const Square = require('./lib/shapes');

// Text, Text Colour, Shape, Shape Colour
// Need parent class Shape, with Triangle, Circle, Square after
class Shape {
    constructor() {
    }
    run() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: (input) => 
                input.length <=3 ||
                'Text must be up to three characters.'
            }, 
            {
                type: 'input',
                name: 'textColour',
                message: 'Enter a colour keyword for text (or hex):'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a Shape:',
                choices: ['Triangle', 'Circle', 'Square']
            },
            {
                type: 'input',
                name: 'shapeColour',
                message: 'Enter a colour keyword for shape (or hex):'
            },
        ])
        .then(() => {
            let shape = this.shape;
            switch (this.shape) {
              case 'Triangle':
                shape = new Triangle(this.shapeColour, this.text, this.textColour);
                break;
              case 'Circle':
                shape = new Circle(this.shapeColour, this.text, this.textColour);
                break;
              case 'Square':
                shape = new Square(this.shapeColour, this.text, this.textColour);
                break;
            }
        });
    }
    
}
const newLogo = new Shape();

newLogo.run();

module.exports = Shape;