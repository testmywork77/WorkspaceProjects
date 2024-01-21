function displayer(result){
    console.log(result);

}

function calculator(num1, num2, callback){
    let sum = num1 + num2;
    //return sum;
    callback(sum)    
}

// let result = calculator(2, 4);
// displayer(result);
calculator(2, 4, displayer);