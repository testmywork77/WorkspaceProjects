const sum = require('./sum.js' )

test('adds 1 + 2 to equal to 3', () => {    
    // toBe - for primitive data types
    expect(sum(1,2)).toBe(3);

});
