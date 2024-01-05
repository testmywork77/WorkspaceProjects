const userInput = require('./userInput.js');

test('throws on invalid input', () => {
    expect(() => {        
        userInput("Hai");
    }).toThrow();
})