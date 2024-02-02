const inquirer = require('inquirer');
const fs = require('fs').promises;
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Text, Text Colour, Shape, Shape Colour
// Need parent class Shape, with Triangle, Circle, Square after
//Had to change to async function
  async function run() {
      const data = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: (input) => 
                input !== '' && input !== ' ' && input !== '  ' && input.length <=3 ||
                'Text must be between one and three characters'
            }, 
            {
                type: 'input',
                name: 'textColour',
                message: 'Enter a colour keyword for text (or hex):',
                validate: (input) => 
                input !== '' ||
                'Please enter a colour for the text.'
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
                message: 'Enter a colour keyword for shape (or hex):',
                validate: (input) => 
                input !== '' ||
                'Please enter a colour for the shape.'
            }
        ]);

            let shape;
            switch (data.shape) {
              case 'Triangle':
                shape = new Triangle(data.text, data.textColour, data.shapeColour);
                break;
              case 'Circle':
                shape = new Circle(data.text, data.textColour, data.shapeColour);
                break;
              case 'Square':
                shape = new Square(data.text, data.textColour, data.shapeColour);
                break;
            }
            const loadContent = shape.render(data.text, data.textColour, data.shapeColour);
            await fs.writeFile(path.join(__dirname, 'examples', 'logo.svg'), loadContent);
            console.log('Generated logo.svg');
             
    }
    
run()
.catch((err) => console.log(err));

