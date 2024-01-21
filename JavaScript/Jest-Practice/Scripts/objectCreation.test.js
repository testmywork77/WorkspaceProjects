const data = require('./objectCreation.js');

test('Object Validation Test', () => {    
    expect(data).toEqual({one: 1, two: 2});       
})