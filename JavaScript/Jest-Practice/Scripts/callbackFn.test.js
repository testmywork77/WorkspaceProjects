const fetchData = require('./callbackFn.js');

test(' fetch data', done => {
    function callback(data){
        try{
            expect(data).toBe('Hello Callback');
            done();
        } catch(error){
            done(error);
        }
    }

    fetchData(callback);
})

