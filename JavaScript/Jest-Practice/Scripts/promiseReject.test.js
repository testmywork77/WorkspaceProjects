const fetchPromise = require('./promiseReject.js')

test('fetchPromise rejects', () => {
    return expect(fetchPromise()).rejects.toBe('Error');
})
