const userInput = (input) => {    
    if(typeof input !== "number"){
        throw new Error('Invalid Input');        
    } 
}

module.exports = userInput;
