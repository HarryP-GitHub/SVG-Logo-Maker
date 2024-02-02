const { Triangle, Circle, Square } = require('./shapes');

// Tests are run differently then example in challenge README
describe('Testing if logos generate with correct content', () => { 
    test('Triangle to contain blue for shape colour', () => {
        const shape = new Triangle();
            expect(shape.render('NEW', 'red', 'blue')).toContain("fill='blue'");
    });

    test('Circle to contain red for text colour', () => {
        const shape = new Circle();
            expect(shape.render('NEW', 'red', 'blue')).toContain("fill='red'");
    });

    test('Square to contain NEW text', () => {
        const shape = new Square();
            expect(shape.render('NEW', 'red', 'blue')).toContain("NEW</text>");
    });
});

