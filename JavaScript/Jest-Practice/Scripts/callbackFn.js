function fetchData(callback){
    setTimeout(() => {
     callback('Hello Callback');
    }, 1000);
   }   
   
   module.exports = fetchData;